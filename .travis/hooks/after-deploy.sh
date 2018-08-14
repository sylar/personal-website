#!/bin/bash

echo 'rebuilding ssr cache'
sleep 5
curl --insecure https://$HOST_IP >> /dev/null
curl --insecure https://$HOST_IP/cv >> /dev/null
echo 'ssr cache rebuilt'
echo 'clearing cloudflare cache'
curl -X POST https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache -H "X-Auth-Email: $CLOUDFLARE_EMAIL" -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY" -H "Content-Type: application/json" --data '{"purge_everything":true}' >> /dev/null
sleep 35
echo 'cloudflare cache cleared'
