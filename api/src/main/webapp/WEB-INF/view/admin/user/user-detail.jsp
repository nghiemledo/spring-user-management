<%@page contentType="text/html" pageEncoding="UTF-8" %>
   <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
      <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

         <html lang="en">

         <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>User Detail ${id}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
               integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
               crossorigin="anonymous" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
               integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
               crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <link rel="stylesheet" href="/css/demo.css" />
         </head>

         <body>
            <div class="container mt-5 mb-3">
               <div class="row">
                  <div class="col-md-12 col-12 mx-auto">
                     <div class="d-flex justify-content-between mb-2">
                        <h3>User detail</h3>
                        <!-- <a class="btn btn-primary" href="/admin/user/create">Create a user</a> -->
                     </div>
                     <hr />
                     <div class="card" style="width: 60%">
                        <div class="card-header">User information</div>
                        <ul class="list-group list-group-flush">
                           <li class="list-group-item">Id: ${user.id}</li>
                           <li class="list-group-item">Email: ${user.email}</li>
                           <li class="list-group-item">Phone: ${user.phone}</li>
                           <li class="list-group-item">Full name: ${user.fullName}</li>
                           <li class="list-group-item">Address: ${user.address}</li>
                        </ul>
                     </div>
                     <hr />
                     <div class="card" style="width: 60%">
                        <div class="card-header">Assigned Roles</div>
                        <ul class="list-group list-group-flush">
                           <c:if test="${not empty userRoles}">
                              <c:forEach var="role" items="${userRoles}">
                                 <li class="list-group-item">${role.name}</li>
                              </c:forEach>
                           </c:if>
                           <c:if test="${empty userRoles}">
                              <li class="list-group-item">No roles assigned.</li>
                           </c:if>
                        </ul>
                     </div>
                     <hr />
                     <div class="card" style="width: 60%">
                        <div class="card-header">Assigned Company</div>
                        <ul class="list-group list-group-flush">
                           <c:if test="${userCompany != null}">
                              <li class="list-group-item">${userCompany.companyName}</li>
                           </c:if>
                           <c:if test="${userCompany == null}">
                              <li class="list-group-item">No company assigned.</li>
                           </c:if>
                        </ul>
                     </div>
                     <hr />
                     <a href="/admin/user" class="btn btn-success">Back</a>
                  </div>
               </div>
            </div>
         </body>

         </html>