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

## 📸 Screenshots

> *(Optional: Add some screenshots or GIFs to show the UI and key flows)*

# License

This project is under the MIT License.

# Contact

For any issues or inquiries, please contact `nghiemledo@gmail.com`.