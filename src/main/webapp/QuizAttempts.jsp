<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.quizapp.quizapp.models.QuizAttempt" %>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Quiz Attempts - Quiz App</title>
</head>
<body>
<nav>
    <a href="home">Quiz App</a>
    <div>
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="logout">Logout</a></li>
        </ul>
    </div>
</nav>
<div>
    <h2>Your Quiz Attempts</h2>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Quiz ID</th>
            <th>Score</th>
            <th>Attempted At</th>
        </tr>
        </thead>
        <tbody>
        <%
            List<QuizAttempt> attempts = (List<QuizAttempt>) request.getAttribute("attempts");
            if (attempts != null) {
                for (QuizAttempt attempt : attempts) {
        %>
        <tr>
            <td><%= attempt.getId() %></td>
            <td><%= attempt.getQuizId() %></td>
            <td><%= attempt.getScore() %></td>
            <td><%= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm").format(attempt.getAttemptedAt()) %></td>
        </tr>
        <%
                }
            }
        %>
        </tbody>
    </table>
</div>
</body>
</html>