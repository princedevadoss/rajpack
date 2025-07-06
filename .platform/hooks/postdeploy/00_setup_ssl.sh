#!/bin/bash

# Install certbot
amazon-linux-extras enable epel -y
yum install -y certbot python3-certbot-nginx

# Replace with your actual domain
DOMAIN="sasipacks.in"
EMAIL="d.prince1995@gmail.com"

# Only get cert if not already issued
if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
  certbot --nginx --non-interactive --agree-tos --email "$EMAIL" \
    -d "$DOMAIN" -d "www.$DOMAIN"
fi

# Reload NGINX
systemctl reload nginx

