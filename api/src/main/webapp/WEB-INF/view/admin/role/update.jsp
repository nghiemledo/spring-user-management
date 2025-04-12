<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cập nhật quyền</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossorigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
                    integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
                    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            </head>

            <body>
                <div class="container mt-5 mb-3">
                    <div class="row">
                        <div class="col-md-6 col-12 mx-auto">
                            <h3>Update role</h3>
                            <hr />
                            <form:form action="/admin/role/update" method="post" modelAttribute="newRole">
                                <div class="mb-3" style="display: none">
                                    <label class="form-label">Id:</label>
                                    <form:input type="text" class="form-control" path="id" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">N:</label>
                                    <form:input type="text" class="form-control" path="name" />
                                </div>

                                <div class="d-flex justify-content-between">
                                    <a href="/admin/role" class="btn btn-success">Back</a>
                                    <button type="submit" class="btn btn-warning">Update</button>
                                </div>
                            </form:form>
                        </div>
                    </div>
                </div>
            </body>

            </html>