import request from 'supertest';

import app from '.';
import * as chartData from '../utils/apiUtils/chartData';

describe('GET /api/stocks/:symbol', () => {
  let mockRequestMaxStockData;
  let mockRequestQuote;
  let mockRequestOneDayStockData;
  let mockRequestFiveDayStockData;

  beforeAll(() => {
    const mockRequestImplementation = (_symbol, callback) => (
      callback(null, {})
    );

    mockRequestMaxStockData = jest.spyOn(
      chartData, 'requestMaxStockData'
    ).mockImplementation(mockRequestImplementation);

    mockRequestQuote = jest.spyOn(
      chartData, 'requestQuote'
    ).mockImplementation(mockRequestImplementation);

    mockRequestOneDayStockData = jest.spyOn(
      chartData, 'requestOneDayStockData'
    ).mockImplementation(mockRequestImplementation);

    mockRequestFiveDayStockData = jest.spyOn(
      chartData, 'requestFiveDayStockData'
    ).mockImplementation(mockRequestImplementation);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  let server;

  beforeEach(() => {
    server = app.listen(3000);
  });

  afterEach(done => {
    server.close(done);
  });

  it('returns 200 for a valid stock symbol', () => {
    const mockSymbolValid = 'MSFT';
    return request(server).get(`/api/stocks/${ mockSymbolValid }`)
      .then(res => {
        expect(res.statusCode).toBe(200);
      });
  });
  it('returns 404 for an invalid stock symbol', () => {
    mockRequestQuote.mockImplementationOnce((_symbol, callback) => {
      callback('error');
    });
    mockRequestFiveDayStockData.mockImplementationOnce((_symbol, callback) => {
      callback('error');
    });
    mockRequestMaxStockData.mockImplementationOnce((_symbol, callback) => {
      callback('error');
    });
    mockRequestOneDayStockData.mockImplementationOnce((_symbol, callback) => {
      callback('error');
    });
    const mockSymbolInvalid = 'MSFTT';
    return request(server).get(`/api/stocks/${ mockSymbolInvalid }`)
      .then(res => {
        expect(res.statusCode).toBe(404);
      });
  });
});