# Use Node.js to build the React app
FROM node:alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

# Remove default Nginx config and add custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
