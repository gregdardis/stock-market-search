import request from 'supertest';

import app from '.';
import * as chartData from '../utils/apiUtils/chartData';

describe('GET /api/stocks/:symbol', () => {
  let mockRequestMaxStockData;
  let mockRequestQuote;
  let mockRequestOneDayStockData;
  let mockRequestFiveDayStockData;

  beforeAll(() => {
    
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
    const mockRequestImplementation = (_symbol, callback) => (
      callback(null, {})
    );

    chartData.requestMaxStockData = jest.fn()
      .mockImplementation(mockRequestImplementation);

    chartData.requestQuote = jest.fn()
      .mockImplementation(mockRequestImplementation);

    chartData.requestOneDayStockData = jest.fn()
      .mockImplementation(mockRequestImplementation);

    chartData.requestFiveDayStockData = jest.fn()
      .mockImplementation(mockRequestImplementation);

    const mockSymbolValid = 'MSFT';
    return request(server).get(`/api/stocks/${ mockSymbolValid }`)
      .then(res => {
        expect(res.statusCode).toBe(200);
      });
  });
  it('returns 404 for an invalid stock symbol', () => {
    chartData.requestQuote.mockImplementationOnce((_symbol, callback) => {
      callback('error');
    });
    const mockSymbolInvalid = 'MSFTT';
    return request(server).get(`/api/stocks/${ mockSymbolInvalid }`)
      .then(res => {
        expect(res.statusCode).toBe(404);
      });
  });
});