# User Management System

This is a full-stack **User Management** project built with **Spring Boot** (Backend) and **React 19 with TypeScript** (Frontend). The application provides basic authentication and user management features.

## 🚀 Features

The system includes the following core functionalities:

- 🔐 **Login**: Secure user authentication.
- 📝 **Register**: New user registration.
- 🔓 **Logout**: User session termination.
- 👥 **User Management**: View, edit, delete, and manage users.

## 🛠️ Tech Stack

### Backend (Spring Boot)
- Java 17+
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- MySQL / PostgreSQL (customizable)
- Maven

### Frontend (React)
- React 19
- TypeScript
- Axios
- React Router
- TailwindCSS (or your preferred styling solution)
- Context API or Redux (for state management)

## 📁 Project Structure

```
/backend
│   ├── src/main/java/com/example/usermanagement
│   ├── application.properties
│   └── pom.xml

/frontend
│   ├── src/
│   ├── public/
│   └── package.json
```

## ⚙️ Getting Started

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   ```

2. Navigate to the backend folder:
   ```bash
   cd backend
   ```

3. Configure `application.properties` with your database details.

4. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

> ⚠️ Make sure the backend and frontend are configured to communicate (e.g., correct API base URL in frontend).


## 🐳 Docker Support

This project includes Docker configurations for both the frontend and backend, along with a MySQL database, using `docker-compose`.

### 📦 Dockerfile - Frontend (React)

```Dockerfile
# --- Build Stage ---
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# --- Run Stage ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 📦 Dockerfile - Backend (Spring Boot)

```Dockerfile
FROM openjdk:23-jdk-slim

WORKDIR /app
VOLUME /tmp
COPY target/*.jar app.jar

EXPOSE 8089
ENTRYPOINT ["java", "-DwebAllowOthers=true", "-jar", "app.jar"]
```

### ⚙️ docker-compose.yml

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: mysql-db
    environment:
      MYSQL_DATABASE: db_name
      MYSQL_USER: db_user
      MYSQL_PASSWORD: db_pass
      MYSQL_ROOT_PASSWORD: db_root_pass
    volumes:
      - mysql-data:/var/lib/mysql

  backend:
    build:
      context: ./api
    container_name: springboot-backend
    ports:
      - "8000:8000"
    volumes:
      - ./data:/data
    depends_on:
      - mysql
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/db_name?useSSL=false&allowPublicKeyRetrieval=true
      SPRING_DATASOURCE_USERNAME: db_name
      SPRING_DATASOURCE_PASSWORD: db_pass
      JWT_SECRET: jwt_secret
      JWT_EXPIRATION: 3600000
      JWT_REFRESH_EXPIRATION: 604800000

  frontend:
    build:
      context: ./client
    container_name: frontend-app
    ports:
      - "8080:80"
    stdin_open: true
    tty: true

volumes:
  mysql-data:
```

You can run the full stack with one command:

```bash
docker-compose up --build
```

## 📸 Screenshots

> *(Optional: Add some screenshots or GIFs to show the UI and key flows)*

# License

This project is under the MIT License.

# Contact

For any issues or inquiries, please contact `nghiemledo@gmail.com`.