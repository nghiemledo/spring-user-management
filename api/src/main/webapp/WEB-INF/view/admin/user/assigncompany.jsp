<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

            <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Assign Company to User</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            </head>

            <body>
                <div class="container mt-5 mb-3">
                    <div class="row">
                        <div class="col-md-12 col-12 mx-auto">
                            <h3>Assign Company to User</h3>
                            <form method="POST" action="/admin/user/assigncompany">
                                <input type="hidden" name="userId" value="${user.id}" />
                                <div class="mb-3">
                                    <label for="company" class="form-label">Select Company</label>
                                    <select class="form-select" id="company" name="companyId" required>
                                        <c:forEach var="company" items="${companies}">
                                            <option value="${company.id}">${company.companyName}</option>
                                        </c:forEach>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Assign Company</button>
                            </form>
                            <a href="/admin/user" class="btn btn-success mt-3">Back</a>
                        </div>
                    </div>
                </div>
            </body>

            </html>