#!/bin/bash

# AWS S3 Deployment Script for Ethan Dietrich's Personal Website
# Make sure you have AWS CLI configured with appropriate credentials

# Configuration - Update these values
BUCKET_NAME="your-bucket-name"
REGION="us-east-1"
CLOUDFRONT_DISTRIBUTION_ID="your-cloudfront-distribution-id"

echo "🚀 Deploying Ethan Dietrich's Personal Website to AWS S3..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if bucket name is configured
if [ "$BUCKET_NAME" = "your-bucket-name" ]; then
    echo "❌ Please update the BUCKET_NAME variable in this script"
    exit 1
fi

# Sync files to S3
echo "📤 Uploading files to S3 bucket: $BUCKET_NAME"
aws s3 sync . s3://$BUCKET_NAME \
    --exclude "*.md" \
    --exclude "deploy.sh" \
    --exclude ".git/*" \
    --exclude "node_modules/*" \
    --delete \
    --region $REGION

if [ $? -eq 0 ]; then
    echo "✅ Files uploaded successfully!"
else
    echo "❌ Upload failed!"
    exit 1
fi

# Invalidate CloudFront cache if distribution ID is provided
if [ "$CLOUDFRONT_DISTRIBUTION_ID" != "your-cloudfront-distribution-id" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*" \
        --region $REGION
    
    if [ $? -eq 0 ]; then
        echo "✅ CloudFront cache invalidation initiated!"
    else
        echo "⚠️  CloudFront cache invalidation failed, but deployment was successful"
    fi
else
    echo "ℹ️  Skipping CloudFront cache invalidation (no distribution ID configured)"
fi

echo ""
echo "🎉 Deployment completed successfully!"
echo "🌐 Your website should be available at:"
echo "   http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "💡 To use a custom domain, configure CloudFront and Route 53"
echo "📚 See README.md for detailed deployment instructions"
