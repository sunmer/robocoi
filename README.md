# serverless-bitcoin
Get the current price of Bitcoin - serverless on AWS!

## prerequisites
- Node.js v6.5.0 or later.
- Typescript
- An AWS account. A free AWS trial includes 1 million free Lambda requests per month.
- Locally configured AWS credentials

## installation
- `npm install -g serverless` to install the Serverless framework
- In the project dir, run `npm install` to install the dependencies
- Then run `tsc` to compile TypeScript files to JS
- Get an API key from [Cryptocompare](https://cryptocompare.com/cryptopian/api-keys)
- Set your API key in `serverless.yml`, under `CRYPTOCOMPARE_API_KEY`
- For running Chai tests, set your API key in `launch.json` under `CRYPTOCOMPARE_API_KEY`
- Run `sls deploy` to deploy to AWS Lambda. The default region is `us-east-1`
- Run `sls invoke -f getBitcoinPrice`. You should get the Bitcoin price in EUR, USD and GBP