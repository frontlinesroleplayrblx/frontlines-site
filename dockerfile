# Use the lightweight nginx image
FROM nginx:alpine

# Copy all files from the templates folder to nginx web root
COPY templates/ /usr/share/nginx/html/

# Expose port 80 (default HTTP)
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
