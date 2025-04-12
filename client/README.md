
# User Management System

This project is a **User Management System** built with **React**, **Spring Boot**, and **Axios**. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. It also includes a dialog-based UI for editing and adding users.

## Features

- **Manage Users**: View, edit, and delete user information.
- **Add New User**: Easily add new users to the system through an intuitive form.
- **Responsive UI**: The app is built to be responsive and works across multiple devices.
- **Authentication**: The app uses JWT-based authentication for secure user interactions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Spring Boot**:  Backend framework to handle API requests.
- **Axios**: Promise-based HTTP client for the browser and Node.js to interact with the backend API.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **Radix UI**: Collection of low-level UI components for building accessible and customizable user interfaces.
- **Lucide**: Icon library for React.

## Project Structure

```
/src
  /components
    /manage-user
      - AddDialog.tsx         # Add user dialog component
      - EditDialog.tsx        # Edit user dialog component
      - ViewDialog.tsx        # View user dialog component
      - DeleteDialog.tsx      # Delete user dialog component
    /ui
      - button.tsx            # Custom Button component
      - input.tsx             # Custom Input component
      - table.tsx             # Table component
  /pages
    - index.tsx              # Home page
    - manage-user.tsx        # Manage users page
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nghiemledo/spring-client-authentication.git
   cd spring-client-authentication
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up the backend API:

   - Ensure that the backend API is running on `http://localhost:8000`.
   - The API should handle user data and allow CRUD operations on users.

4. Run the development server:

   ```bash
   yarn dev
   ```

5. Open the application in your browser:

   ```bash
   http://localhost:5173
   ```

## API Endpoints

- **GET /api/users**: Fetch all users.
- **GET /api/users/{id}**: Fetch a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/{id}**: Update user information.
- **DELETE /api/users/{id}**: Delete a user.

## Usage

### Manage Users Page

- **View User**: Click the "View" button in the actions column to view user details.
- **Edit User**: Click the "Edit" button to open the edit dialog and update user information.
- **Delete User**: Click the "Delete" button to remove a user from the system.
- **Add New User**: Click the "Add User" button to open the dialog and add a new user.

### Dialogs

- **Edit User Dialog**: Allows you to edit the details of an existing user.
- **View User Dialog**: Displays the details of a user in a read-only view.
- **Delete User Dialog**: Allows you to delete a user from the system.
- **Add User Dialog**: Lets you add a new user by filling out a form with the required fields.

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests. Please follow the steps below to contribute:

1. Fork the repository.
2. Create your branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Note

Feel free to update this `README.md` with additional details or adjust the project structure as needed. If you encounter any issues, don't hesitate to create an issue on the repository for further assistance.
