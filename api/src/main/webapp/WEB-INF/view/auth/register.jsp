<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Register Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"/>
</head>
<body>
    <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-md-6 col-12 mx-auto">
                <h3>Register</h3>
                <hr/>
                <c:if test="${not empty error}">
                    <div class="alert alert-danger">${error}</div>
                </c:if>
                <form:form action="/register" method="post" modelAttribute="newUser">
                    <div class="mb-3">
                        <label class="form-label">Email:</label>
                        <form:input type="email" class="form-control" path="email" required="true"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password:</label>
                        <form:input type="password" class="form-control" path="password" required="true"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Full name:</label>
                        <form:input type="text" class="form-control" path="fullName"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone number:</label>
                        <form:input type="text" class="form-control" path="phone"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Address:</label>
                        <form:input type="text" class="form-control" path="address"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Role:</label>
                        <form:select path="roles" class="form-control">
                            <form:option value="" label="Select Role"/>
                            <form:options items="${availableRoles}" itemValue="id" itemLabel="name"/>
                        </form:select>
                    </div>
                    <div class="d-flex justify-content-between">
                        <a href="/login" class="btn btn-warning">Login</a>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form:form>
            </div>
        </div>
    </div>
</body>
</html>