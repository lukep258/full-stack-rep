# full-stack-rep

## full stack rep of creating both the front and backend of a boilerplate webpage.

## Schema:
- instructors table will have id, name, age, and subject
- students table will have id, name, age, and a foreign key of the instructor id
- primary key will be serial primary key
- names will be varchar
- ages will be integer
- subject will be varchar
- foreign key will point to instructor id

## ERD:
![image](https://github.com/lukep258/full-stack-rep/assets/143543147/fadb7e9b-5eef-45aa-9065-5ad8df209ab8)

## Frontend:
the client will provide an interface for the user that will allow them to visualize and manipulate the database utilizing all RESTful routes.
This will be accomplished by sending fetch requests to the server with the appropriate route for the option chosen by the user.
Upon receiving the response, the client will display the results on the webpage.

## Backend:
The server will receive requests from the client and manipulate or return the appropriate response containing the results of the PSQL database.
Utilizing middleware, the server will also ensure correct route validation.
CORS policy will be open to all requests.
