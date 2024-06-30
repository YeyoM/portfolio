#!/bin/bash

echo "Entering project"
# Enter to the project
cd /root/portfolio
 
echo "Updating git repo"
# Update git repo
git fetch && git reset origin/main --hard 

# Update the script
rm /root/redeploy_site.sh 
cp redeploy_site.sh /root/redeploy_site.sh
chmod +x /root/redeploy_site.sh

# Delete the old containers
docker compose -f docker-compose.prod.yml down

# Delete all docker volumes
docker system prune -a --volumes

# Build the new containers
docker compose -f docker-compose.prod.yml up -d --build
