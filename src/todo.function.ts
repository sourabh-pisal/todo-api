import { Logger } from "@aws-lambda-powertools/logger";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

const logger = new Logger({ serviceName: "todo-api" });

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  logger.info("Event", { event });
  return { statusCode: 200, body: JSON.stringify({ message: "hello world" }) };
};
