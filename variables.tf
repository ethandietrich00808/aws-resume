variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for website hosting"
  type        = string
  default     = "ethan-dietrich-personal-website"
}

variable "domain_names" {
  description = "List of domain names for the website (optional)"
  type        = list(string)
  default     = []
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate for custom domain (required if domain_names is provided)"
  type        = string
  default     = ""
}

variable "environment" {
  description = "Environment name for tagging"
  type        = string
  default     = "production"
}

variable "owner" {
  description = "Owner name for tagging"
  type        = string
  default     = "Ethan Dietrich"
}
