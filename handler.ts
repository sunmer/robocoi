import { Context, Callback } from 'aws-lambda';
import * as https from "https";

export interface IResponse {
  statusCode: number,
  body: any
};

export const getCoinPrice = async (event: any, context?: Context, callback?: Callback) => {
  const res: IResponse = await fetchPrice(event.pathParameters.symbol).then((priceResponse: string) => {
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

function populateHttpRequest(coinSymbol: string): https.RequestOptions {
  return {
    hostname: 'min-api.cryptocompare.com',
    method: 'GET',
    path: `/data/price?fsym=${coinSymbol}&tsyms=USD`,
    headers: {
      authorization: 'Apikey ' + process.env['CRYPTOCOMPARE_API_KEY']
    }
  }
}

function fetchPrice(coinSymbol: string) {
  return new Promise(function(resolve, reject) {
    let req = https.request(populateHttpRequest(coinSymbol), (response: any) => {
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
