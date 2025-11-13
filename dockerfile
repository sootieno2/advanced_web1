# Use a small official Nginx image
FROM nginx:alpine

# Set working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy your project files into the container
# Assuming your main files are inside the "public" folder
COPY public/ .

# Copy a custom nginx config (optional, for single-page routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the host
EXPOSE 80

                                    
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]          