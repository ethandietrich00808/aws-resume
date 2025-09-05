# Ethan Dietrich's Personal Website Infrastructure

## 🏗️ Infrastructure Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        AWS Cloud                                 │
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────────────────────────┐ │
│  │   Route 53       │    │        CloudFront CDN              │ │
│  │   (DNS)          │◄───┤     d3ffia5gev8l6u.cloudfront.net  │ │
│  │                  │    │                                     │ │
│  └─────────────────┘    └─────────────────────────────────────┘ │
│           │                              │                      │
│           │                              │                      │
│           │                              ▼                      │
│           │                    ┌─────────────────┐              │
│           │                    │   S3 Bucket     │              │
│           │                    │ cloudresume-    │              │
│           │                    │ ethan-dietrich-2│              │
│           │                    │                 │              │
│           │                    │ • Static Website│              │
│           │                    │ • Public Access │              │
│           │                    │ • Versioning    │              │
│           │                    │ • Website Host  │              │
│           │                    └─────────────────┘              │
│           │                                                     │
│           └─────────────────────────────────────────────────────┘
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    GitHub Actions CI/CD                       │
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────────────────────────┐ │
│  │   GitHub Repo    │    │        Deployment Pipeline        │ │
│  │   Push to main   │───►│                                     │ │
│  │                  │    │ 1. Checkout Code                   │ │
│  └─────────────────┘    │ 2. Sync to S3                     │ │
│                          │ 3. Invalidate CloudFront Cache     │ │
│                          └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Resource Details

### S3 Bucket
- **Name**: `cloudresume-ethan-dietrich-2`
- **Purpose**: Static website hosting
- **Access**: Public read
- **Features**: Versioning enabled, website hosting configured
- **Endpoint**: `cloudresume-ethan-dietrich-2.s3-website-us-east-1.amazonaws.com`

### CloudFront Distribution
- **ID**: `EZXI60U3IIL24`
- **Domain**: `d3ffia5gev8l6u.cloudfront.net`
- **Purpose**: Global CDN for performance
- **Features**: HTTPS, custom error pages, caching optimization
- **Status**: Deploying

### Route 53 (Optional)
- **Purpose**: DNS management for custom domains
- **Status**: Configured but not active (no custom domain set)

## 🔄 Data Flow

1. **User Request** → CloudFront CDN
2. **CloudFront** → S3 Bucket (if not cached)
3. **S3 Bucket** → Returns static files (HTML, CSS, JS)
4. **CloudFront** → Serves content to user with caching

## 🚀 Deployment Flow

1. **Developer** pushes code to GitHub
2. **GitHub Actions** triggers automatically
3. **S3 Sync** uploads files to bucket
4. **CloudFront Invalidation** clears CDN cache
5. **Website** updates globally within minutes

## 🛠️ Terraform Management

All infrastructure is managed by Terraform:
- **State**: Stored locally in `terraform.tfstate`
- **Configuration**: Defined in `.tf` files
- **Version Control**: Committed to Git repository
- **Changes**: Applied via `terraform apply`
