var CfnLambda = require('cfn-lambda');
var AWS = require('aws-sdk');

var Pipeline = require('./lib/pipeline');

function ElasticTranscoderPipelineHandler(event, context) {
  var ElasticTranscoderPipeline = CfnLambda({
    Create: Pipeline.Create,
    Update: Pipeline.Update,
    Delete: Pipeline.Delete,
    SchemaPath: [__dirname, 'src', 'schema.json']
  });
  // Not sure if there's a better way to do this...
  AWS.config.region = currentRegion(context);

  return ElasticTranscoderPipeline(event, context);
}

function currentRegion(context) {
  return context.invokedFunctionArn.match(/^arn:aws:lambda:(\w+-\w+-\d+):/)[1];
}

exports.handler = ElasticTranscoderPipelineHandler;
