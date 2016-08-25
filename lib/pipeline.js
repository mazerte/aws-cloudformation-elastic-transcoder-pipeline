var AWS = require('aws-sdk');

var elastictranscoder = new AWS.ElasticTranscoder();

var Create = function(params, reply) {
  elastictranscoder.createPipeline(params, function(err, data) {
    if (err) {
      console.error(err);
      reply(err);
    } else  {
      reply(null, data.Pipeline.Id, { "Arn": data.Pipeline.Arn });
    }
  });
};

var Update = function(physicalId, params, oldParams, reply) {
  params.Id = physicalId;
  delete params.OutputBucket;
  elastictranscoder.updatePipeline(params, function(err, data) {
    if (err) {
      console.error(err);
      reply(err);
    } else {
      reply(null, data.Pipeline.Id, { "Arn": data.Pipeline.Arn });
    }
  });
};

var Delete = function(physicalId, params, reply) {
  var p = {
    Id: physicalId
  };
  elastictranscoder.deletePipeline(p, function(err, data) {
    if (err) console.error(err)
    reply(err, physicalId);
  });
};

exports.Create = Create;
exports.Update = Update;
exports.Delete = Delete;
