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

exit 0
