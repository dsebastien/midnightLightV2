#!/bin/sh

# Build
docker build --tag="midnight_light" .

# Run
containerId=$(docker run --detach=true --publish-all=true midnight_light)
PORT=$(docker port $containerId 8080 | awk -F: '{print $2}')
MIDNIGHT_LIGHT_URL="http://127.0.0.1:$PORT"
echo "Up and running over at $MIDNIGHT_LIGHT_URL (note that if you're on Windows, the IP is not that one, you'll have to figure out the IP of the Docker VM)"
echo "Once you're done, don't forget to stop the container by issuing the following command: 'docker kill $containerId'."