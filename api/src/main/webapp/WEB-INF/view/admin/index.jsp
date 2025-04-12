<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Admin Dashboard</title>
            </head>

            <body>
                <nav>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>

                <aside>
                    <ul>
                        <li><a href="<c:url value='/admin?page=dashboard'/>">Dashboard</a></li>
                        <li><a href="<c:url value='/admin?page=users'/>">Users</a></li>
                        <li><a href="<c:url value='/admin?page=reports'/>">Reports</a></li>
                    </ul>
                </aside>

                <main>
                    <jsp:include page="${contentPage}" />
                </main>

                <footer>
                    <p>Admin Footer</p>
                </footer>
            </body>

            </html>