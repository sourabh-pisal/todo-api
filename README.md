# Todo API

The Todo API is a serverless application built with Node.js, AWS Lambda, and DynamoDB. It allows users to manage their tasks by providing endpoints to create, read, update, and delete todo items. The API is designed to be lightweight, scalable, and cost-effective by leveraging AWS's serverless infrastructure.

## Repository Description

This repository contains the source code for the Todo API. It is structured to support development, deployment, and testing of the serverless API using AWS Lambda and DynamoDB. The repository includes:

- **Source Code**: Node.js implementation of the Lambda functions.
- **AWS CDK**: Infrastructure as code for deploying the API.
- **Environment Configurations**: Template for environment variables and AWS resources.
- **Documentation**: Instructions for installation, deployment, and usage.
- **Sample Data**: Example requests and responses for API testing.

## Features

- **Create Todo**: Add a new task with details such as title, description, and status.
- **Read Todos**: Retrieve all tasks or a specific task by its ID.
- **Update Todo**: Modify details of an existing task.
- **Delete Todo**: Remove a task by its ID.
- **Serverless**: Built using AWS Lambda, making it highly scalable with minimal operational overhead.
- **DynamoDB Integration**: Uses DynamoDB as the database for fast and efficient data storage.

## Tech Stack

- **Backend**: Node.js Lambda functions
- **AWS CDK**: AWS Cloud Development Kit 
- **Database**: AWS DynamoDB
- **API Gateway**: AWS API Gateway
- **Authentication**: AWS Cognito or API key-based

## Prerequisites

1. Node.js
2. AWS Account
3. AWS CLI configured
4. AWS CDK installed globally (`npm install -g aws-cdk`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sourabh-pisal/todo-api.git
   cd todo-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure AWS credentials if not already configured:

   ```bash
   aws configure
   ```

## Deployment

Deploy the application to AWS using the Serverless Framework:

```bash
npm run deploy
```

This will package and deploy the application to your AWS account, setting up the necessary resources such as Lambda functions, API Gateway, and DynamoDB tables.

## Environment Variables

Create a `.env` file in the root directory to define environment variables:

```env
DYNAMODB_TABLE=TodosTable
REGION=eu-west-1
```

## API Endpoints

### Base URL

The base URL for the API is generated after deployment and can be found in the Serverless deployment output.

### Endpoints

#### 1. **Create Todo**

- **Method**: POST
- **Path**: `/todos`
- **Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Todo created successfully",
    "todoId": "uuid"
  }
  ```

#### 2. **Get All Todos**

- **Method**: GET
- **Path**: `/todos`
- **Response**:
  ```json
  [
    {
      "id": "uuid",
      "title": "Task Title",
      "description": "Task Description",
      "status": "pending"
    }
  ]
  ```

#### 3. **Get Todo by ID**

- **Method**: GET
- **Path**: `/todos/{id}`
- **Response**:
  ```json
  {
    "id": "uuid",
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
  }
  ```

#### 4. **Update Todo**

- **Method**: PUT
- **Path**: `/todos/{id}`
- **Body**:
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "status": "completed"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Todo updated successfully"
  }
  ```

#### 5. **Delete Todo**

- **Method**: DELETE
- **Path**: `/todos/{id}`
- **Response**:
  ```json
  {
    "message": "Todo deleted successfully"
  }
  ```

## Troubleshooting

- **Deployment issues**: Check your AWS CLI configuration and permissions.
- **Missing dependencies**: Run `npm install` to ensure all dependencies are installed.
- **Local issues**: Ensure the `serverless-offline` plugin is installed and correctly configured.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.
