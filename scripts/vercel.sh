#!/bin/bash

# Ensure the script is executable
set -e

# Log the start of the post-deployment script
echo "Running post-deployment script..."

# Print environment information
echo "Deployment Environment: ${VERCEL_ENV}"
echo "Deployment URL: ${VERCEL_URL}"

# Run your specific post-deployment command
# Example: Generate PDF
npm run resume:generate
npm run resume:upload

# Optional: Upload generated artifacts
# npm run upload-artifacts

# Optional: Send deployment notification
# curl -X POST https://your-monitoring-service.com/notify \
#      -H "Content-Type: application/json" \
#      -d "{\"url\": \"${VERCEL_URL}\", \"env\": \"${VERCEL_ENV}\"}"

# Exit with success status
exit 0
