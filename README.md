# How-To BackEnd API
--------------------------------------------

# API Deployed at
---------------------------------------------
[https://howto-bw.herokuapp.com]


###### Production
---------------------------------------------

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js
- [Bcryptjs](https://www.npmjs.com/package/body-parser): Allows you to store passwords securely in your database
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Generate and verify json web tokens to maintain a stateless api
- [Knex](https://www.npmjs.com/package/knex): Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use
- [Sqlite3](https://www.npmjs.com/package/sqlite3): Asynchronous, non-blocking SQLite3 bindings for Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): `HTTP request logger middleware for Node.js`
- [Cors](https://www.npmjs.com/package/cors): CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS
- [Helmet](https://www.npmjs.com/package/helmet): Helmet helps you secure your Express apps by setting various HTTP headers
- [Dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a zero-dependency module that loads environment variables from a .env file

###### Development

- [Nodemon](https://www.npmjs.com/package/nodemon): nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

# Setup

(# <--- signifies comment)
In your terminal run:

```
# Install dependencies
npm install

# Starts express server using nodemon
npm run server
```

# AUTH ROUTES
--------------------------------------------

| Table    |  Method   |  Endpoint | Required Fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| users    |  Post     | /register|username, password, type |Creates a new user profile, returns the username , id, type and a jsonwebtoken in the body of the response|
| users    |  Post     |/login|username, password|Uses the username and passowrd sent up to verify the user, if they match, returns the username , id, type and a jsonwebtoken in the body of the response|

## **REGISTER**

### **Registers a user**

_Method Url:_ `/register`

_HTTP method:_ **[POST]**
_example:_

```

 {
	 "username": "Alex",
   "password": "123",
	 "type": "creator"
 }

```

```

#### Response

##### 200 (OK success status)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201`,message, and a token as below.

_example:_

```
{
  "message": "Welcome Alex You have been successfully registered!",
  "id": 8,
  "type": "creator",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6IkFsZXgiLCJ0eXBlIjoiY3JlYXRvciIsImlhdCI6MTU2OTA4Nzk3MCwiZXhwIjoxNTY5MDk1MTcwfQ.sYlKNOZ8-r9Gq6s9sxf74xdmKxLOBMKQyYztvdoqH8w"
}

```

## **LOGIN**

### **Logs a user in**

_Method Url:_ `/login`

_HTTP method:_ **[POST]**

_example:_

```
{
  "message": "Welcome, user!"
},
{
  "username": "username"
  "password": "password",
}

```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200`, message, and a token as below.

_example:_

```

{
  "username": "Alex",
  "message": "Welcome Alex!",
  "id": 7,
  "type": "creator",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6IkFsZXgiLCJ0eXBlIjoiY3JlYXRvciIsImlhdCI6MTU2OTEwODgyNSwiZXhwIjoxNTY5MTE2MDI1fQ.rGtDWtdoY4gxsNgjQSUP056yWrP2l_9y3UKfKF8jEQ4"
}

```

Status Codes

- 200 - If you successfully register or log in a user the endpoint will return a response with a status code 200.
- 422 - If you are missing a required field the endpoint will return a response with a status code 422.
- 401 - If you attempt to login with a username or password that does not match what the system has the endpoint will return a response with a status code 401.
- 500 - If there is a server error, the endpoint will return a response with a status code 500.



Users Endpoint
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|----------------------|:-------------|
| users    |  Get     | /users:id |token labeled as authorization in headers |Returns the specific user by id, with username, id, type, and all guides related to the user|

Status Codes
- 200 - If the get request successfully goes through the endpoint will return a response with a status code 200
- 404 - If the user with the specified Id does not exist, the endpoint will return a response with a status code 404
- 401 - If there is no token on the headers of the request, the endpoint will return a response with a status code 401
- 500 - If there is a server error, the endpoint will return a response with a status code 500.


Guides Endpoints
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| guides    |  Post     | /guides|title, description, type, user_id, step_1 |Posts a new guide to the database. Requires token labeled as authorization in headers, user must be type: creator.
| guides    |  Get     | /guides |token labeled as authorization in headers |returns all of the guides.|
| guides    |  Get by id     | /guides:id |token labeled as authorization in headers |returns the guide with the specific id.|
| guides    |  Put     | /guides:id |token labeled as authorization in headers, user must be type: creator |Edits any field that comes back different from the specified guide.|
| guides    |  Delete     | /guides:id |token labeled as authorization in headers, user must be type: creator |Deletes the specified guide from the database.|

Status Codes
- 200 - If the get request successfully goes through the endpoint will return a response with a status code 200
- 404 - If the guide with the specified Id does not exist, the endpoint will return a response with a status code 404
- 401 - If there is no token on the headers of the request, the endpoint will return a response with a status code 401
- 403 - If the users account doesn't have the correct type, the endpoint will return a response with a status code 403
- 500 - If there is a server error, the endpoint will return a response with a status code 500.

