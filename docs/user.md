# User API Spec

## Register User

Endpoint : POST `/api/users`

Request Body :

```json
{
  "username": "otong",
  "password": "rahasia",
  "name": "Otong Surotong"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "otong",
    "name": "Otong Surotong"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username must not blank"
}
```

## Login User

Endpoint : POST `/api/users/login`

Request Body :

```json
{
  "username": "otong",
  "password": "rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "otong",
    "name": "Otong Surotong",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username or password wrong, ..."
}
```

## Get User

Endpoint : GET `/api/users/current`

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "otong",
    "name": "Otong Surotong"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH `/api/users/current`

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "name": "Otong Surotong", // optionanl
  "password": "passwordbaru" // optional
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "otong",
    "name": "Otong Surotong"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Logout

Endpoint : DELETE `/api/users/current`

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```
