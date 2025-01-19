import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class TodoApi extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new NodejsFunction(this, "function");
  }
}
