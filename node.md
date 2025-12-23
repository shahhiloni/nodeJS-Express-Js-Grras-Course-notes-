1. What is Node.js?
- Node.js is an open-source, cross-platform JavaScript runtime environment that allows us to run JavaScript code outside the browser.
- It is mainly used to build fast, scalable backend applications like APIs and real-time apps

2. History of Node.js
- Node.js was created by Ryan Dahl in 2009
- It uses Google Chrome’s V8 JavaScript engine
- It was created to solve the problem of slow and blocking web servers

3. Why was Node.js created?
- Traditional servers handle requests in a blocking way, which makes them slow.
Node.js was created to:
- Handle multiple requests simultaneously
- Use non-blocking, event-driven architecture
- Improve performance and scalability

4. How does Node.js work internally?
- Node.js works on:
1. Single-threaded
2. Event Loop
3. Non-blocking I/O

Flow : 
1. Client sends request
2. Request goes to Event Queue
3. Event Loop processes it
4. If async task → sent to background
5. Response is returned without blocking other requests

5. What is Event Loop in Node.js?
- The Event Loop is responsible for:

1. Handling multiple client requests
2. Executing callbacks
3. Managing async operations like API calls, DB queries, timers

It makes Node.js fast and efficient.

6. What is CRUD Operation?
- CRUD stands for:

1. Create → POST
2. Read → GET
3. Update → PUT / PATCH
4. Delete → DELETE 

CRUD operations are used to manage data in a database.

7. What is Postman?
- Postman is a tool used to:
1. Test REST APIs
2. Send HTTP requests (GET, POST, PUT, DELETE)
3. Check responses and status codes

It helps backend developers test APIs without frontend.

8. What are HTTP Status Codes?
- HTTP status codes tell us the result of an API request.

9. Important HTTP Status Codes
- 200 : ok
- 201 : created
- 400: bad request
- 401: Unauthorized
- 403: Forbidden 
- 404: Not Found
- 500: Internal Server Error

10. What is MongoDB?
- MongoDB is a NoSQL, document-based database.
- It stores data in JSON-like documents (BSON) instead of tables.

11. What is MVC Pattern?
- MVC stands for:

1. Model – Database logic
2. View – UI (Frontend)
3. Controller – Business logic

- MVC helps in:

1. Clean code
2. Easy maintenance
3. Better scalability

    