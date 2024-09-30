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

resource "digitalocean_kubernetes_cluster" "k8s_cluster" {
  name    = var.cluster_name
  region  = var.cluster_region
  version = var.cluster_version

  node_pool {
    name       = var.pool_name
    size       = var.pool_size
    node_count = var.node_count

    tags = ["private-network"]
  }
}
