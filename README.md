# AWS CloudFormation Custom Resource for AWS ElasticTranscoder Pipeline

This custom resource is based on [cfn-lambda](https://github.com/andrew-templeton/cfn-lambda), you can see this project for more advanced configuration.

## Install

Clone the repository on laptop. Inside the root folder:

```
$ npm install
$ npm run cfn-lambda-deploy
```
This command deploy the lambda helper on your default AWS region and `us-east-1`, `us-west-2`, `eu-west-1`, `ap-northeast-1`. To change this configuration you can follow this [link](https://github.com/andrew-templeton/cfn-lambda#deployment-of-lambdas)

## Example

You can test the custom resource by running `example/pipeline.cform`. This only parameter is the name of the lambda function created during the installation.

## Docs

All parameters usable is the same of the parameters use by aws-sdk to [create a pipeline](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ElasticTranscoder.html#createPipeline-property)
