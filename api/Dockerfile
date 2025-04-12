# Sử dụng image OpenJDK 21 làm base image
FROM openjdk:23-jdk-slim

# Tạo thư mục chứa ứng dụng trong container
WORKDIR /app
VOLUME /tmp
# Copy file .jar vào container
COPY target/*.jar app.jar

# Expose cổng mặc định của Spring Boot
EXPOSE 8089

# Lệnh chạy ứng dụng
ENTRYPOINT ["java", "-DwebAllowOthers=true", "-jar", "app.jar"]