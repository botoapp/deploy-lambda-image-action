const core = require('@actions/core');
const AWS = require('aws-sdk');

try {
  const functionName = core.getInput('LAMBDA_FUNCTION_NAME')
  const imageUri = core.getInput('ECR_IMAGE_URI')

  console.log(`Updating Function Name ${functionName} with ${imageUri}!`);

  core.debug(`Updating Function Name ${functionName} with ${imageUri}!`);

  const lambda = new AWS.Lambda({
      apiVersion: '2015-03-31',
      region: process.env.AWS_REGION,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      accessKeyId: process.env.AWS_SECRET_ID,
      maxRetries: 3,
      sslEnabled: true,
      logger: console,
  });

  const params = {
    FunctionName: functionName,
    Publish: false,
    ImageUri: imageUri,
  };

  lambda.updateFunctionCode(params, err => {
      if (err) {
          console.error(err);
          core.setFailed(err)
      }
  });

} catch (error) {
  core.setFailed(error.message);
}
