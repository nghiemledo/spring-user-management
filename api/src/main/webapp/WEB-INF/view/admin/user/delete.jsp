<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Delete Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous" />
    <link rel="stylesheet" href="/css/demo.css" />
</head>
<body>
    <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-md-6 col-12 mx-auto">
                <h3>Delete user with id: ${id}</h3>
                <hr />
                <div class="alert alert-danger" role="alert">Are you sure want to delete this user?</div>
                <form:form method="post" action="/admin/user/delete" modelAttribute="newUser">
                    <form:hidden path="id" value="${id}"/>
                    <div class="d-flex justify-content-between">
                        <a type="button" href="/admin/user" class="btn btn-success">Cancel</a>
                        <button type="submit" class="btn btn-danger">Confirm</button>
                    </div>
                </form:form>
            </div>
        </div>
    </div>
</body>
</html>