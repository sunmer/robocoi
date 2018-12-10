import { expect } from 'chai';
import { getCoinPrice } from '../handler';

describe('coinPrice', async () => {
  it('contains the correct properties', async () => {
    let s = await getCoinPrice();
    expect(s).to.have.keys('statusCode', 'body');
  });
  it('returns HTTP status code 200', async () => {
    let s = await getCoinPrice();
    expect(s.statusCode).to.equal(200);
  });
});