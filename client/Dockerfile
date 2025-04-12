# --- Giai đoạn build ---
FROM node:22-alpine AS builder

# Thư mục làm việc trong container
WORKDIR /app

# Copy file cấu hình trước để cache layer yarn install
COPY package.json yarn.lock ./

# Cài dependencies
RUN yarn install

# Copy toàn bộ mã nguồn vào
COPY . .

# Build ứng dụng (Vite hoặc CRA)
RUN yarn build

# --- Giai đoạn chạy ---
FROM nginx:alpine

# Copy build ra thư mục public của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Tùy chọn: cấu hình lại Nginx nếu cần (ví dụ cho route SPA)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose cổng chạy
EXPOSE 80

# Lệnh khởi động
CMD ["nginx", "-g", "daemon off;"]
