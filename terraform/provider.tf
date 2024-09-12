# Провайдер для создания ресурсов в DigitalOcean
provider "digitalocean" {
  token = var.TOKEN  # Ваш DigitalOcean API токен
}

terraform {
required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.62.0"
    }
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"  # Укажите нужную версию, если у вас есть предпочтения
    }
  }

  backend "s3" {
    endpoint = {
      s3 = "https://fra1.digitaloceanspaces.com"
    }
    access_key     = var.SPACE_ACCESS_KEY
    secret_key     = var.SPACE_SECRET_KEY
    bucket         = "s3state"
    key            = "terraform-state/terraform.tfstate"

    # Deactivate a few AWS-specific checks
    skip_credentials_validation = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_s3_checksum            = true
    region                      = "us-east-1"
  }
}
