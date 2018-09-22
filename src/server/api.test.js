import request from 'supertest';

import app from '.';

describe('GET /api/stocks/:symbol', () => {
  let server;
  beforeEach(() => {
    server = app.listen(3000);
  });

  afterEach((done) => {
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
    const mockSymbolInvalid = 'MSFTT';
    return request(server).get(`/api/stocks/${ mockSymbolInvalid }`)
      .then(res => {
        expect(res.statusCode).toBe(404);
      });
  });
});