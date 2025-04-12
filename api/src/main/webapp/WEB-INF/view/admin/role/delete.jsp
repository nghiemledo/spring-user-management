<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

            <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Xóa quyền</title>
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
                            <h3>Delete role with id: ${id}</h3>
                            <hr />
                            <div class="alert alert-danger" role="alert">Are you sure want to delete this role ?</div>
                            <div class="d-flex justify-content-between">
                                <a type="button" href="/admin/role" class="btn btn-success">Cancel</a>
                                <form:form method="post" action="/admin/role/delete" modelAttribute="newRole">
                                    <div class="mb-3" style="display: none">
                                        <label class="form-label">Id:</label>
                                        <form:input value="${id}" type="text" class="form-control" path="id" />
                                    </div>
                                    <button class="btn btn-danger">Confirm</button>
                                </form:form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>

            </html>