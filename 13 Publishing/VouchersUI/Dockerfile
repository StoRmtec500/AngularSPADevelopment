FROM nginx:alpine
LABEL author="Alexander Pajer"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# # Create Initial
# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

# # Copy to optimized
# FROM nginx:alpine
# COPY --from=node /app/dist/vouchers /usr/shared/nginx/html