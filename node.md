## what is server in node js 
--  A server in Node.js is a program that listens for client requests and sends back responses.
1. Browser opening a website
2. React app calling API
3. Postman sending data
4. Mobile app communicating with backend

A server receives requests → processes them → returns output. 

## Why do we use a server in Node.js?
-- store data, fetch data, login / signup, show user-wise content
-- handle all backend logics

--------------------------- NODE JS  ----------------------------------

1. what is node JS?
-- Node.js is a runtime environment that allows you to run JavaScript code outside the browser, mainly on a server.

## before  NodeJS ??
- JavaScript was used only inside browsers (like Chrome, Firefox) to make web pages interactive

## before NodeJS ??
- With Node.js, JavaScript can now be used for backend / server-side programming also — meaning you can build:
1. Web servers
2. APIs
3. Databases connections
4. Real-time applications (chat app, video streaming, gaming)
5. Backend logic of websites and mobile apps

2. How does Node.js work?
- Node.js is built on Google Chrome’s V8 JavaScript Engine which makes it:
1. Fast
2. Lightweight
3. Efficient

It uses a non-blocking, event-driven architecture, which means Node.js can handle multiple requests at the same time without waiting. ( use for the real-time application)

3. OS Model in Node JS ?
- Node.js follows a non-blocking, event-driven I/O model.
- This model makes Node.js fast and suitable for applications that handle many users at the same time.

4. what is File Structure in NodeJS?
- Node.js provides a built-in module called fs which is used to work with files on your computer.
- provide blocking(sync) and non - blocking(async) structure 

5. Difference between Synchronous and asynchronous in node JS?
- in Async 
1. doesn't wait 
2. Fast
3. Recommanded for API or RESTFUL APIs
4. use for FS MODEL and APIs
5. Ex : writeFile, readFile, ...

- in Sync 
1. Waits until work finishes
2. Slower
3. Not recommended for servers (blocking request is not give proper response in client side or browser)
4. EX : writeFileSync, readFileSync

6. What is Middleware in Node.js / Express?
- Middleware is a function that runs between request and response.
(Client → Middleware → Server Logic → Response)

ROLES of middleware in Backend 
1. read request data
2. modify request
3. validate user login
4. handle errors
5. log activities

---------------------------------- All Dependency of used NodeJS --------------------------

1. What is http in Node.js?
- http is a built-in module in Node.js used to create server and handle client requests.
- Helps to make web server
- No need to install separately

2. What is os in Node.js?
- os is a built-in module that provides information about the operating system.

3. What is nodemon?
- nodemon is a developer tool, not a built-in module.
- Saves time (no need to run node app.js again and again)

Command: npm install -g nodemon

4. What is express?
- express is a Node.js framework used to build web servers and APIs easily.
- Faster coding
- Powerful routing system
- Most popular backend framework in Node.js

5. What is body-parser?
- body-parser is a middleware used to read/parse data sent from frontend or Postman.

6. what is CORS ?
- cors (Cross-Origin Resource Sharing) allows frontend (React/Angular/vue/ next/so...on) to call backend API even when hosted on different servers/ports.

Note: 1. Without CORS - frontend API call blocked
    2. With CORS -  frontend & backend communicate smoothly

------------------------- CRUD Operation / APIs ---------------------------------

1. what is CRUD operation in Backend?
- CRUD 
1. C = Create - (use POST METHOD)
2. R = Read / View - (use GET method : show all data and  ID wise Data )
3. U = Update - (use PUT method : update data or Modify data which already exist)
4. D = DELETE - (use DELETE method : delete data from the database or table)

------------------------- Status Code --------------------------------
1. What is a Status Code?
-- A Status Code is a 3-digit number returned by the server in an HTTP response that tells whether the request was successful, failed, or requires more actions.

1. 100–199 : Information or Request received and being processed
2. 200–299 : Success
3. 300–399: Redirection
4. 400–499: Client Error (user/request issue)
5. 500–599: Server Error (backend failure)

----------------------------- MOSTLY USED STATUS CODE IN CODING ------------------------------
1. 100 - 199 
- status Code : 100 : Used rarely , when server asks client to continue sending request

2. 200 - 299
- Status Code : 200 (response: ok) : Request successful (Most common success response (GET, PUT, DELETE))
- Status Code : 201 (Created): Resource successfully created (Used after creating data (POST request))
- Status Code: 202 (Accepted) : Request accepted but processing later (Long-running tasks (email send, background job))
 - Status Code: 204 (No Content): Success but no response body (After DELETE or UPDATE without content)

3. 300 - 399
- Status Code : 301 (Moved Permanently) : Resource moved forever (SEO redirects, change URL)
- Status Code : 302 (Found) : Temporary redirect (Temporary URL change)
- Status Code : 304 (Not Modified) : Cached version is valid (Optimizes speed (no need to re-send data))

4. 400 - 499 
- Status Code : 400 (Bad Request) : Invalid request input (Wrong parameters / missing fields)
- Status Code : 401 (Unauthorized) : Not logged in (Token missing/invalid)
- Status Code : 403 (Forbidden) : Logged in but access denied (Role not allowed (e.g., user tries admin page))
- Status Code : 404 (Not Found) : Resource not found (Wrong endpoint / ID not available)
- Status Code : 405 (Method Not Allowed) : Method not supported ( POST on endpoint that only supports GET)
- Status Code : 409 (Conflict) : Duplicate or conflicting request (Register account with existing email)
- Status Code : 422 (Unprocessable Entity) : Validation error (Wrong formatted input, invalid form data)

5. 500 - 599 
- 500 (Internal Server Error) : Unexpected backend error (Most common backend crash)

