import { Handler, Context, Callback } from 'aws-lambda';
import * as https from "https";

const getBitcoinPrice: Handler = async (event: any, context: Context, callback: Callback) => {
  return fetchBitcoinPrice().then((priceResponse) => {
    return {
      statusCode: 200,
      body: JSON.parse(priceResponse)["bpi"]
    }
  }).catch(error => { 
    return { 
      statusCode: 400,
      body: error
    }
  });
};

function fetchBitcoinPrice() {
  return new Promise(function(resolve, reject) {
    https.get('https://api.coindesk.com/v1/bpi/currentprice.json', res => {
      let response = '';
      res.on('data', (d) => {
        response += d;
      });
      res.on('end', () => {
        resolve(response);
      });
    }).on("error", reject);
  })
}

export { getBitcoinPrice }