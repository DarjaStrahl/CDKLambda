const { Stack, Duration } = require('aws-cdk-lib');
const myLambda = require('../lib/my_lambda');
// const sqs = require('aws-cdk-lib/aws-sqs');

class CdkLambdaStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new myLambda.MyLambda(this, 'MyLambda')
    // example resource
    // const queue = new sqs.Queue(this, 'CdkLambdaQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { CdkLambdaStack }
