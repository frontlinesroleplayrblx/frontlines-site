# Use a lightweight web server image
FROM nginx:alpine

# Copy your site into the nginx html folder
COPY templates/ /usr/share/nginx/html/


# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
