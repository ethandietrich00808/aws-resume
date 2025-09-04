# Ethan Dietrich - Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript, deployed using AWS S3, CloudFront, and GitHub Actions CI/CD.

## 🏗️ Infrastructure as Code (Terraform)

This project includes Terraform configuration to provision the complete AWS infrastructure:

### 📁 Terraform Files

- `main.tf` - Main infrastructure configuration
- `variables.tf` - Variable definitions
- `terraform.tfvars` - Variable values for this deployment
- `outputs.tf` - Output values
- `versions.tf` - Terraform and provider version requirements

### 🚀 Quick Start

1. **Install Terraform** (if not already installed):
   ```bash
   # Windows (using winget)
   winget install HashiCorp.Terraform
   
   # Or download from: https://www.terraform.io/downloads
   ```

2. **Configure AWS credentials**:
   ```bash
   aws configure
   # Enter your AWS Access Key ID, Secret Access Key, and region
   ```

3. **Initialize Terraform**:
   ```bash
   terraform init
   ```

4. **Plan the deployment**:
   ```bash
   terraform plan
   ```

5. **Apply the infrastructure**:
   ```bash
   terraform apply
   ```

### 🏛️ Infrastructure Components

- **S3 Bucket**: Static website hosting with public read access
- **CloudFront Distribution**: Global CDN for improved performance
- **Route 53**: DNS management (optional, for custom domains)
- **ACM Certificate**: SSL/TLS certificate (optional, for custom domains)

### 🔧 Configuration

Edit `terraform.tfvars` to customize:
- `bucket_name`: S3 bucket name
- `domain_names`: Custom domain names (optional)
- `aws_region`: AWS region for resources

### 📊 Outputs

After deployment, Terraform will output:
- S3 bucket name and ARN
- CloudFront distribution ID and domain
- Website URL
- Route 53 nameservers (if domain configured)

### 🧹 Cleanup

To destroy the infrastructure:
```bash
terraform destroy
```

## 🎨 Website Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional appearance
- **Smooth Animations**: CSS animations and transitions
- **Interactive Elements**: JavaScript-powered interactions
- **SEO Optimized**: Proper meta tags and structure

## 🚀 Deployment

### Automated Deployment (GitHub Actions)

The website automatically deploys when you push to the `main` branch:

1. **GitHub Actions** triggers on push to `main`
2. **S3 Sync** uploads files to the S3 bucket
3. **CloudFront** serves the website globally

### Manual Deployment

```bash
# Using AWS CLI
aws s3 sync . s3://cloudresume-ethan-dietrich-2 --exclude "*.md" --exclude "deploy.sh" --exclude ".git/*" --exclude ".env" --exclude ".github/*"

# Using the deploy script
./deploy.sh
```

## 🔒 Security

- S3 bucket configured for public read access only
- CloudFront provides HTTPS by default
- Proper IAM permissions for deployment
- Environment variables stored securely in GitHub Secrets

## 📈 Performance

- **CloudFront CDN**: Global content delivery
- **S3 Static Hosting**: Fast, reliable storage
- **Optimized Assets**: Minified CSS and JavaScript
- **Caching**: Browser and CDN caching configured

## 🛠️ Development

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Make changes to HTML, CSS, or JavaScript files
4. Test locally before pushing

### File Structure

```
aws-ethan-dietrich-personal-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── deploy.sh           # Manual deployment script
├── main.tf             # Terraform main configuration
├── variables.tf        # Terraform variables
├── terraform.tfvars    # Terraform variable values
├── outputs.tf          # Terraform outputs
├── versions.tf         # Terraform versions
└── .github/workflows/  # GitHub Actions CI/CD
    └── front-end-cicd.yml
```

## 📞 Contact

- **Name**: Ethan Dietrich
- **Role**: Technical Consultant
- **Education**: Honors Computer Science (AI/ML focus) at UT Knoxville
- **Skills**: AWS, Python, Pandas, PyTorch, SQL, C++, Analytics, Data Visualization

## 📄 License

This project is for personal use and portfolio demonstration.

