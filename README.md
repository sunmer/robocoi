# serverless-bitcoin
Get the current price of Bitcoin - serverless on AWS!

## prerequisites
- Node.js v6.5.0 or later.
- An AWS account. A free AWS trial includes 1 million free Lambda requests per month.
- Locally configured AWS credentials

## installation
- `npm install -g serverless` to install the Serverless framework
- In the project dir, run `sls deploy` to deploy handler.js to AWS Lambda . The default region is `us-east-1`
- Then run `sls invoke -f getBitcoinPrice`. You should get the Bitcoin price in EUR, USD and GBP