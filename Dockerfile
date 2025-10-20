# Sử dụng image Node có npm 10.9.3 (kèm Node 20.18.0)
FROM node:20.18.0

# Cập nhật npm lên phiên bản bạn muốn (nếu khác mặc định)
RUN npm install -g npm@10.9.3

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và lock file
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port 5173 (port mặc định của Vite)
EXPOSE 5173

# Lệnh chạy Vite dev server
CMD ["npm", "run", "dev"]
