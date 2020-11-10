# Cài đặt

```js
npm install
```

# Mở Server

Chạy file start_server.bat

# Login
```js
// Method & API Url for request
POST: "http://localhost:8080/auth/login"

// Send username & password to login
body: {
  "username": "minhtriet2104",
  "password": "1"
}

// Server will response accessToken & refreshToken for user just login
Response: {
  "accessToken": "...token",
  "refreshToken": "...token"
}
```

# Register
```js
// Method & API Url for request
POST: "http://localhost:8080/auth/register"

// Send with username & password to register
body: {
  "username": "minhtriet2104",
  "password": "1",
  ["oauth2": true/false] // Optional
}

// Server will response accessToken & refreshToken for user just register
Response: {
  "accessToken": "...token",
  "refreshToken": "...token"
}
```


# Refresh Token
```js
// Method & API Url for request
POST: "http://localhost:8080/auth/refresh"

// Send the refreshToken of accessToken
body: {
  "refreshToken": "...token",
}

// Response new accessToken
Response: {
  "accessToken": "...token",
}
```

# Logout
```js
// Method & API Url for request
DELETE: "http://localhost:8080/auth/logout"

// Send with refreshToken you want to delete
body: {
  "refreshToken": "...token",
}
```

# Test Token get Users
```js
// Method & API Url for request
GET: "http://localhost:8080/users"

// attach token to Header of request
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer ...token"
}
```

