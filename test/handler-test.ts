import { expect } from 'chai';
import { getCoinPrice } from '../handler';

describe('coinPrice', async () => {
  it('contains the correct properties', async () => {
    let event = { pathParameters: { symbol: 'BTC' } };
    let s = await getCoinPrice(event);
    expect(s).to.have.keys('statusCode', 'body');
  });
  it('returns HTTP status code 200', async () => {
    let event = { pathParameters: { symbol: 'BTC' } };
    let s = await getCoinPrice(event);
    expect(s.statusCode).to.equal(200);
  });
  it('normalizes the coin symbol', async () => {
    let event = { pathParameters: { symbol: 'btc' } };
    let s = await getCoinPrice(event);
    expect(s.statusCode).to.equal(200);
  });
});
