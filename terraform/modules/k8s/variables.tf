variable "cluster_name" {
  description = "The name of the vpc network"
  type        = string
}

variable "cluster_region" {
  description = "Region"
  type        = string
  default     = "dev"
}

variable "cluster_version" {
  description = "Version"
  type        = string
  default     = "dev"
}

variable "pool_name" {
  description = "The AWS region where the S3 bucket will be created"
  type        = string
}

variable "pool_size" {
  description = "Image of droplet"
  type        = string
}

variable "node_count" {
  description = "Type of droplet"
  type        = string
}

variable "token" {
  description = "Token"
  type        = string
}