# Use the official nginx Alpine image
FROM nginx:alpine

# Copy your local templates folder into nginx's web root
COPY templates/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
