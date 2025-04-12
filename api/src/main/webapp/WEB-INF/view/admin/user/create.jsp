<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Create Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous" />
    <link rel="stylesheet" href="/css/demo.css" />
</head>
<body>
    <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-md-6 col-12 mx-auto">
                <h3>Create user</h3>
                <hr />
                <c:if test="${not empty errorMessage}">
                    <div class="alert alert-danger">${errorMessage}</div>
                </c:if>
                <form:form action="/admin/user/create" method="post" modelAttribute="newUser">
                    <div class="mb-3">
                        <label class="form-label">Email:</label>
                        <form:input type="email" class="form-control" path="email" required="true"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password:</label>
                        <form:input type="password" class="form-control" path="password" required="true"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone number:</label>
                        <form:input type="text" class="form-control" path="phone"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Full name:</label>
                        <form:input type="text" class="form-control" path="fullName"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Address:</label>
                        <form:input type="text" class="form-control" path="address"/>
                    </div>
                    <div class="d-flex justify-content-between">
                        <a href="/admin/user" type="button" class="btn btn-warning">Back</a>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                </form:form>
            </div>
        </div>
    </div>
</body>
</html>