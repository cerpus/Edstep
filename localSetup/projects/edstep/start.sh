#!/bin/sh
set -e

update-ca-certificates

composer install
chmod -R o+w bootstrap/cache storage

php artisan migrate --force
