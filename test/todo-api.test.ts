import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as TodoApi from "../lib/todo-api-stack";

test("Lambda function is created", () => {
  const app = new cdk.App();

  const stack = new TodoApi.TodoApiStack(app, "TestTodoApiStack");

  const template = Template.fromStack(stack);

  template.hasResource("AWS::Lambda::Function", {});
});
