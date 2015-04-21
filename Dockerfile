# Pull base image.
FROM dockerfile/nodejs

# Meta
MAINTAINER Sebastien Dubois <seb@dsebastien.net>

# Install Gulp
RUN npm install -g gulp http-server

# Build the app
WORKDIR /midnight_light/

ADD package.json ./
RUN npm install
ADD gulpfile.js ./
ADD ./app ./app
RUN gulp

# Run the app
WORKDIR /midnight_light

# Default command
#CMD ["/bin/ls", "-al"]
#CMD ["gulp", "serve"]
CMD ["http-server", "dist"]

# Expose ports
#EXPOSE 3000 3001
EXPOSE 8080