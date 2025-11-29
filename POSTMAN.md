1. What is Testing in Backend?
-- Backend Testing means checking the server-side of an application to ensure everything works correctly behind the UI (user interface).

2. In backend development, we test mainly:
-- 1. Database (data storing, fetching, updating, deleting)
-- 2. APIs / Endpoints (whether the request & response are working correctly)
-- 3. Business Logic (rules and calculations happening in the backend)
-- 4. Server performance and security

3. Purpose of Backend Testing
-- 1. Data accuracy: When user registers, data must be saved correctly in DB
-- 2. Response validation: API should return correct output and status code (200, 400, 404, 500 etc.)
-- 3. Error handling: If invalid data is sent, proper error message should come
-- 4. Performance: API should respond fast even with many requests

-------------------- POSTMAN --------------
1. What is Postman?
- Postman is a very popular tool used to test APIs (backend endpoints).
Instead of building a frontend first, developers use Postman to check if backend APIs are working.

2. What can we do with Postman?
- 1. Send different HTTP requests : GET / POST / PUT / DELETE etc.
- 2. Add body (JSON) : Send data to backend API
- 3. Add headers : Token, content-type etc.
- 4. Test responses : Read API response and debug
- 5. Save API collections : Store multiple APIs for documentation
- 6. Share APIs : Team collaboration