import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { TodoApi } from "../src/todo";

export class TodoApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new TodoApi(this, "TodoApi");
  }
}
