# Random Restaurant App

This is a fullstack app that allows user to add a list of restaurant and generates a random one.

## Prerequisite
- Ensure docker is installed and running

## Running the app
To run the app, first run the following command to build the services.
```
docker compose build
```

After the services are built, run the following command to create and start the containers.
```
docker compose up -d
```

Once the containers are started, navigate to the following page to access the app.
```
http://localhost:3000
```

To shutdown the app, run the following command.
```
docker compose down
```

## Backend APIs

`GET /api/v1/allRestaurants`

This endpoint is used to retrieve the list of all the restaurant from the server.

### Response - 200
```json
[
    {
        "_id": "test-id-1",
        "name": "test restaurant",
        "address": "11 test street"
    }
    ...
]
```
### Response - 400
```json
{
    "success": false, 
    "error": "Failed to retrieve all restaurants data"
}
```

`POST /api/v1/addRestaurant`

This endpoint is used to add a new restaurant to the server.
### Body
```json
{
    "name": "name of restaurant to add",
    "address": "address of restaurant to add"
}
```

### Response - 200
```json
{
    "_id": "id of new restaurant",
}
```
### Response - 400 when restaurant already exists
```json
{
    "success": false, 
    "error": "Restaurant already exists"
}
```
### Response - 400
```json
{
    "success": false, 
    "error": "Failed to add restaurant data"
}
```

`DELETE /api/v1/deleteRestaurant`

This endpoint is used to delete a restaurant on the server.
### Body
```json
{
    "name": "name of restaurant to add",
    "address": "address of restaurant to add"
}
```

### Response - 200
```json
{
    "success": true,
}
```
### Response - 400
```json
{
    "success": false, 
    "error": "Failed to delete restaurant data"
}
```
