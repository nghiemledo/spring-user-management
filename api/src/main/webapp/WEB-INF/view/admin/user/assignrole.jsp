<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

            <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>User | Assign Role</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossorigin="anonymous" />
            </head>

            <body>
                <div class="container mt-5">
                    <h3>Assign Role to User: ${user.fullName}</h3>
                    <form action="/admin/user/assignrole" method="POST">
                        <input type="hidden" name="userId" value="${user.id}" />

                        <div class="form-group">
                            <label for="roleId">Select Role</label>
                            <select name="roleId" id="roleId" class="form-control">
                                <c:forEach var="role" items="${roles}">
                                    <option value="${role.id}">${role.name}</option>
                                </c:forEach>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3">Assign Role</button>
                    </form>
                </div>
            </body>

            </html>