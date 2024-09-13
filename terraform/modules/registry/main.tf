terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.token
}

resource "digitalocean_container_registry" "docker" {
  name                   = var.registry_name
  subscription_tier_slug = var.type_registry
}