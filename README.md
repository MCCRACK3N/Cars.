# CarCar

Team:

* Shane McCracken - Service
* Kevinjeet Gill - Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

## How to Run this Project

# Step by step instructions to run this project.
Go to https://gitlab.com/Kevinjeet/project-beta
There you will then fork the project
After the fork you will then clone it and also copy the HTTPS

Open your terminal and run

git clone (insert the copy)

Do the following commands:

docker volume create beta-data
docker-compose build
docker-compose up

Once the docker containers are running you can go to http://localhost:3000/ and see the website

## Project Diagram

- Insert a diagram of the different services in your application, how they interact with each other, ports and URLs, Models and VO
(/image/image.png)

## API Documentation

- For each of the services, add the documentation describing how to interact with each endpoint across the various HTTP methods implemented. Include the information that is needed for a request and where it needs to be included in the request(ie. header, path parameter, request body). Include the information that is returned from the server in the response. Insomnia can be very helpful in helping you put together this information
We have multiple HTTP method implemented, we will be using the Insomnia App to show these request
For the GET and DELETE method you will see the url needed to make the request and also at the bottom you will see the data.
For the POST and PUT method you will see the same type of information and in addition the JSON body needed to make the request with.

For a Salesperson we have GET(gets the database), POST(adds to the database), DELETE(deletes from the database):
GET
![This is a alt text.](/image/image.png)

POST
![](/image/image.png)

DELETE
![](/image/image.png)

For Automobile we have GET, POST, DELETE and PUT(updates existing data)
GET
![](/image/image.png)

POST
![](/image/image.png)

PUT
![](/image/image.png)

DELETE
![](/image/image.png)


For Customer we have GET, POST, and DELETE
GET
![](/image/image.png)
POST
![](/image/image.png)
DELETE
![](https://1drv.ms/i/s!Aulkzs9X--VFuBsKzKTu06Ub0UJe)
