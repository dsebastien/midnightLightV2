#!/bin/sh

# Build (requires at least Docker 1.5)
docker build --tag="midnight_light_dev" --file="DockerfileDev" .

# Run
MIDNIGHT_LIGHT_URL="http://127.0.0.1:3000"
echo "Midnight Light will soon be available at $MIDNIGHT_LIGHT_URL"
docker run --detach=false --publish-all=true midnight_light_dev
