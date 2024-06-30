#!/bin/bash

echo "Entering project"
# Enter to the project
cd /root/portfolio
 
echo "Updating git repo"
# Update git repo
git fetch && git reset origin/main --hard 

# Update the script
echo "Updating redeploy_site.sh"
rm /root/redeploy_site.sh -f
cp redeploy_site.sh /root/redeploy_site.sh
chmod +x /root/redeploy_site.sh

echo "Updated redeploy_site.sh"
ls -l /root/redeploy_site.sh
cat /root/redeploy_site.sh

# Delete the old containers
echo "Deleting old containers"
docker compose -f docker-compose.prod.yml down

# Delete all docker volumes
echo "Deleting all docker volumes"
docker system prune -a --volumes -f

# Build the new containers
echo "Building new containers"
docker compose -f docker-compose.prod.yml up -d --build

echo "Exiting project"
