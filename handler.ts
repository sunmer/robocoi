import { Context, Callback } from 'aws-lambda';
import * as https from "https";

export interface IResponse {
  statusCode: number,
  body: any
};

export const getCoinPrice = async (event?: any, context?: Context, callback?: Callback) => {
    const res: IResponse = await fetchPrice().then((priceResponse: string) => {
      return {
        statusCode: 200,
        body: priceResponse
      }
    }).catch(error => { 
      return { 
        statusCode: 400,
        body: error
      }
    });

    return res;
};

const httpOptions: https.RequestOptions = {
  hostname: 'min-api.cryptocompare.com',
  method: 'GET',
  path: '/data/price?fsym=BTC&tsyms=USD',
  headers: {
    authorization: 'Apikey ' + process.env['CRYPTOCOMPARE_API_KEY']
  }
}

function fetchPrice() {
  return new Promise(function(resolve, reject) {
    let req = https.request(httpOptions, (response: any) => {
      let result = '';
      response.on('data', (d: any) => {
        result += d;
      });
      response.on('end', () => {
        resolve(result);
      });
    }).on("error", reject);
    req.end();
  })
}
