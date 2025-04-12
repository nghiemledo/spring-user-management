<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"/>
</head>
<body>
    <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-md-6 col-12 mx-auto">
                <h3>Login</h3>
                <hr/>
                <c:if test="${param.error != null}">
                    <div class="alert alert-danger">Invalid email or password.</div>
                </c:if>
                <c:if test="${param.logout != null}">
                    <div class="alert alert-info">You have been logged out.</div>
                </c:if>
                <form action="/login" method="post">
                    <div class="mb-3">
                        <label class="form-label">Email:</label>
                        <input type="email" class="form-control" name="username" required/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password:</label>
                        <input type="password" class="form-control" name="password" required/>
                    </div>
                    <div class="d-flex justify-content-between">
                        <a href="/register" class="btn btn-warning">Register</a>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>