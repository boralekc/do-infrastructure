resource "digitalocean_container_registry" "docker" {
  name                   = var.registry_name
  subscription_tier_slug = var.type_registry
}