##### Stage 1
FROM node:latest as node
LABEL author="Alexander Pajer"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx

# Take from node-build
COPY --from=node /app/dist/VouchersUI /usr/share/nginx/html
# Take from proj folder
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t vouchers-ui -f anguarui.dockerfile .
# docker run -p 8080:80 vouchers-ui