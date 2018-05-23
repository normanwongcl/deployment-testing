const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.create = (event, context, callback) => {
  const params = {
    Item: {
      id: uuidv4(),
      Name: event.name,
    },
    TableName: process.env.DYNAMODB_TABLE,
  };
  documentClient.put(params, (err, data) => {
    callback(err, data);
  });
};
