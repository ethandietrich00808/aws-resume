import json
import boto3
import os
from decimal import Decimal

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table_name = os.environ['TABLE_NAME']
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    """
    Lambda function to handle visitor counter requests
    """
    try:
        # Get current count
        response = table.get_item(Key={'id': 'visitor_count'})
        
        if 'Item' in response:
            current_count = response['Item']['count']
        else:
            current_count = 0
        
        # Increment count
        new_count = current_count + 1
        
        # Update DynamoDB
        table.put_item(Item={
            'id': 'visitor_count',
            'count': new_count
        })
        
        # Return response with CORS headers
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'count': new_count,
                'message': 'Visitor count updated successfully'
            })
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'error': 'Internal server error',
                'message': str(e)
            })
        }
