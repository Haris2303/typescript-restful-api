# Address API Spec

## Create Address

Endpoint : POST `/api/contacts/:idContact/addresses`

Request Header :

- X-API-HEADER : token

Request Body :

```json
{
  "street": "Jalan Kece",
  "city": "Kota Nya",
  "province": "Provinsi Nya",
  "country": "Negara Nya",
  "postal_code": "1324"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Kece",
    "city": "Kota Nya",
    "province": "Provinsi Nya",
    "country": "Negara Nya",
    "postal_code": "1324"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required, ..."
}
```

## Get Address

Endpoint : GET `/api/contacts/:idContact/addresses/:idAddress`

Request Header :

- X-API-HEADER : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Kece",
    "city": "Kota Nya",
    "province": "Provinsi Nya",
    "country": "Negara Nya",
    "postal_code": "1324"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found, ..."
}
```

## Update Address

Endpoint : PUT `/api/contacts/:idContact/addresses/:idAddress`

Request Header :

- X-API-HEADER : token

Request Body :

```json
{
  "street": "Jalan Kece",
  "city": "Kota Nya",
  "province": "Provinsi Nya",
  "country": "Negara Nya",
  "postal_code": "1324"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Kece",
    "city": "Kota Nya",
    "province": "Provinsi Nya",
    "country": "Negara Nya",
    "postal_code": "1324"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found, ..."
}
```

## Remove Address

Endpoint : DELETE `/api/contacts/:idContact/addresses/:idAddress`

Request Header :

- X-API-HEADER : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found, ..."
}
```

## List Address

Endpoint : GET `/api/contacts/:idContact/addresses`

Request Header :

- X-API-HEADER : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Kece",
      "city": "Kota Nya",
      "province": "Provinsi Nya",
      "country": "Negara Nya",
      "postal_code": "1324"
    },
    {
      "id": 2,
      "street": "Jalan Kece",
      "city": "Kota Nya",
      "province": "Provinsi Nya",
      "country": "Negara Nya",
      "postal_code": "1324"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "contact is not found, ..."
}
```
