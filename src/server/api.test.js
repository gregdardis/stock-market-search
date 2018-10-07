import request from 'supertest';

import app from './server';
import * as chartData from './utils/apiUtils/chartData';

describe('GET /api/stocks/:symbol', () => {
  let server;
  const mockFailedRequest = (_symbol, callback) => (
    callback('error')
  );

  beforeEach(() => {
    server = app.listen(3005);
  });

  afterEach(done => {
    server.close(done);
  });

  afterAll(() => {
    jest.restoreAllMocks();
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
  it('returns 404 for an invalid stock symbol for all requests', () => {
    chartData.requestQuote.mockImplementationOnce(mockFailedRequest);
    chartData.requestMaxStockData.mockImplementationOnce(mockFailedRequest);
    chartData.requestOneDayStockData.mockImplementationOnce(mockFailedRequest);
    chartData.requestFiveDayStockData.mockImplementationOnce(mockFailedRequest);

    const mockSymbolInvalid = 'MSFTT';

    return request(server).get(`/api/stocks/${ mockSymbolInvalid }`)
      .then(res => {
        expect(res.statusCode).toBe(404);
      });
  });
  it('returns 404 for an invalid stock symbol for one request', () => {
    chartData.requestQuote.mockImplementationOnce(mockFailedRequest);

    const mockSymbolInvalid = 'ABC';

    return request(server).get(`/api/stocks/${ mockSymbolInvalid }`)
      .then(res => {
        expect(res.statusCode).toBe(404);
      });
  });
});