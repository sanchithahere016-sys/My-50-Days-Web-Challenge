# 📅 Day 35: API Security & Authentication (Bearer Tokens)

## 🎯 Objective

Learn how to secure API requests using authentication tokens and the HTTP `Authorization` header.

In this task, a saved authentication token is retrieved from `localStorage` and attached to a DELETE request using the **Bearer Token** authentication method.

## 🛠️ Tech Stack

* HTML
* CSS
* Vanilla JavaScript (ES8+)
* Fetch API
* LocalStorage
* HTTP Authorization Header
* Bearer Tokens

## 🔐 Concepts Covered

* API Security
* Authentication Tokens
* Bearer Token Authentication
* HTTP `Authorization` Header
* LocalStorage Token Retrieval
* Protected API Requests
* `401 Unauthorized` Handling
* Defensive Error Handling

## 📋 Implementation

A mock authentication token is stored in LocalStorage:

```text
Key: auth_token
Value: mock_jwt_12345
```

The application retrieves the token before making the secure DELETE request.

If the token does not exist, the request is stopped immediately and an error is displayed.

The token is attached to the request using:

```javascript
Authorization: Bearer <token>
```

## 🔄 Request Flow

```text
LocalStorage
     ↓
Retrieve auth_token
     ↓
Check whether token exists
     ↓
Add Authorization Header
     ↓
Bearer Token
     ↓
Send DELETE Request
     ↓
Handle Response
     ↓
401 → Session Expired
```

## 🚀 Key Function

```javascript
secureDeleteResource(targetId)
```

This function:

1. Retrieves the authentication token from LocalStorage.
2. Checks whether the token exists.
3. Adds the Bearer Token to the `Authorization` header.
4. Sends the authenticated DELETE request.
5. Handles `401 Unauthorized` responses.
6. Handles other request failures.

## ✅ Expected Result

With a valid token:

```text
Authorization: Bearer mock_jwt_12345
```

The secure DELETE request is sent successfully.

Without a token:

```text
Access Denied: No authentication token found.
```

For an unauthorized server response:

```text
Unauthorized: Session expired
```

## 📚 Learning Outcome

By completing Day 35, I learned how to:

* Protect API requests with authentication.
* Retrieve credentials from LocalStorage.
* Use Bearer Token authentication.
* Configure HTTP request headers.
* Handle unauthorized API responses.
* Prevent unauthenticated requests from being sent.

## 🏁 Day 35 Completed

Implemented **API Security & Authentication using Bearer Tokens** with secure request handling and authentication error management.
