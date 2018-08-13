#!/bin/bash

curl -X POST https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache -H "X-Auth-Email: $CLOUDFLARE_EMAIL" -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY" -H "Content-Type: application/json" --data '{"purge_everything":true}' >> /dev/null
sleep 35
echo 'cache cleared'
echo 'rebuilding ssr cache'
curl https://constantinescu.io >> /dev/null
curl https://constantinescu.io/cv >> /dev/null
echo 'ssr cache rebuilt'
