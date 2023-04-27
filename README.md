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
![diagram](/image/diagram.png)

## API Documentation

- For each of the services, add the documentation describing how to interact with each endpoint across the various HTTP methods implemented. Include the information that is needed for a request and where it needs to be included in the request(ie. header, path parameter, request body). Include the information that is returned from the server in the response. Insomnia can be very helpful in helping you put together this information
We have multiple HTTP method implemented, we will be using the Insomnia App to show these request
For the GET and DELETE method you will see the url needed to make the request and also at the bottom you will see the data.
For the POST and PUT method you will see the same type of information and in addition the JSON body needed to make the request with.
With the following you will see the URL used to make the request to and the response receive and if needed the JSON body
For a Salesperson we have GET(gets the database), POST(adds to the database), DELETE(deletes from the database):
GET
the url: 	http://localhost:8090/api/salespeople/
the response:
{
	"salepeople": [
		{
			"first_name": "David",
			"last_name": "Frank",
			"employee_id": "DFrank",
			"id": 1
		},
		{
			"first_name": "Jacob",
			"last_name": "Lord",
			"employee_id": "JLord",
			"id": 3
		},
		{
			"first_name": "Jake",
			"last_name": "Cake",
			"employee_id": "JCake",
			"id": 2
		}
	]
}
POST
the url: http://localhost:8090/api/salespeople/
the JSON body:
{
	"first_name": "Jacob",
	"last_name": "Lord",
	"employee_id": "JLord"
}
the response:
{
	"first_name": "Jacob",
	"last_name": "Lord",
	"employee_id": "JLord",
	"id": 3
}
DELETE
the url: http://localhost:8090/api/salespeople/3
the response:
{
	"first_name": "Jacob",
	"last_name": "Lord",
	"employee_id": "JLord",
	"id": null
}

For Automobile we have GET, POST, DELETE and PUT(updates existing data)
GET
the url: http://localhost:8100/api/automobiles/
the response:
{
	"autos": [
		{
			"href": "/api/automobiles/1C3CC5FB2AN120174/",
			"id": 1,
			"color": "red",
			"year": 2012,
			"vin": "1C3CC5FB2AN120174",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "Sebring",
				"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Chrysler"
				}
			},
			"sold": true
		},
		{
			"href": "/api/automobiles/1FAHP2EW7CG168534/",
			"id": 3,
			"color": "black",
			"year": 2000,
			"vin": "1FAHP2EW7CG168534",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "Mustang",
				"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabfC-yvVaDcm22wpfwvlghEr_n-NDK7klXg&usqp=CAU",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "Ford"
				}
			},
			"sold": true
		},
		{
			"href": "/api/automobiles/JTDKN3DU0E1706346/",
			"id": 2,
			"color": "White",
			"year": 2023,
			"vin": "JTDKN3DU0E1706346",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "Mustang",
				"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabfC-yvVaDcm22wpfwvlghEr_n-NDK7klXg&usqp=CAU",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "Ford"
				}
			},
			"sold": true
		},
		{
			"href": "/api/automobiles/3GCUKREC8EG321032/",
			"id": 4,
			"color": "white",
			"year": 2022,
			"vin": "3GCUKREC8EG321032",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "Mustang",
				"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabfC-yvVaDcm22wpfwvlghEr_n-NDK7klXg&usqp=CAU",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "Ford"
				}
			},
			"sold": false
		}
	]
}

POST
the url: http://localhost:8100/api/automobiles/
the JSON body:
{
	"color": "white",
	"year": 2022,
	"vin": "3GCUKREC8EG321032",
	"model_id": 2
}

PUT
the urls: http://localhost:8100/api/automobiles/3GCUKREC8EG321032/
the JSON body:
{
	"color": "green",
	"year": "2021",
	"sold": false
}
the response:
{
	"href": "/api/automobiles/3GCUKREC8EG321032/",
	"id": 4,
	"color": "green",
	"year": "2021",
	"vin": "3GCUKREC8EG321032",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "Mustang",
		"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabfC-yvVaDcm22wpfwvlghEr_n-NDK7klXg&usqp=CAU",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Ford"
		}
	},
	"sold": false
}

DELETE
the url: http://localhost:8100/api/automobiles/3GCUKREC8EG321032/
the response:
{
	"href": "/api/automobiles/3GCUKREC8EG321032/",
	"id": null,
	"color": "green",
	"year": 2021,
	"vin": "3GCUKREC8EG321032",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "Mustang",
		"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabfC-yvVaDcm22wpfwvlghEr_n-NDK7klXg&usqp=CAU",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Ford"
		}
	},
	"sold": false
}


For Customer we have GET, POST, and DELETE
GET
the url: http://localhost:8090/api/customers/
the response
{
	"customers": [
		{
			"first_name": "Jerry",
			"last_name": "Tom",
			"address": "1234 Not street, CA, 95788",
			"phone_number": "916-555-5555",
			"id": 1
		},
		{
			"first_name": "Kevin",
			"last_name": "Gill",
			"address": "1234 na street CA",
			"phone_number": "(916) 555-5555",
			"id": 2
		},
		{
			"first_name": "Jake",
			"last_name": "Statefarm",
			"address": "1234 Not street, CA, 95788",
			"phone_number": "916-555-5555",
			"id": 3
		}
	]
}

POST
the url: http://localhost:8090/api/customers/
the JSON body:
{
	"first_name": "Jake",
	"last_name": "Statefarm",
	"address": "1234 Not street, CA, 95788",
	"phone_number": "916-555-5555"
}
the respone:
{
	"first_name": "Jake",
	"last_name": "Statefarm",
	"address": "1234 Not street, CA, 95788",
	"phone_number": "916-555-5555",
	"id": 3
}

DELETE
the url:http://localhost:8090/api/customers/2
the response:
{
	"first_name": "Jerry",
	"last_name": "Tom",
	"address": "1234 Not street, CA, 95788",
	"phone_number": "916-555-5555",
	"id": null
}

For Sale we have a DELETE, GET, POST
POST:
the url: http://localhost:8090/api/sales/

the JSON body:
{
	"salesperson": "DFrank",
	"customer": "Jerry",
	"price": 1500,
	"automobile": "JTDKN3DU0E1706346"
}

the response:
{
	"price": 1500,
	"id": 6,
	"automobile": "JTDKN3DU0E1706346",
	"salesperson_first_name": "David",
	"salesperson_last_name": "Frank",
	"salesperson": "DFrank",
	"customer": "Jerry",
	"customer_last_name": "Tom"
}

GET:
the url: http://localhost:8090/api/sales/

the response:
{
	"sales": [
		{
			"price": 15000,
			"id": 1,
			"automobile": "1C3CC5FB2AN120174",
			"salesperson_first_name": "David",
			"salesperson_last_name": "Frank",
			"salesperson": "DFrank",
			"customer": "Jerry",
			"customer_last_name": "Tom"
		},
		{
			"price": 5000,
			"id": 11,
			"automobile": "1FAHP2EW7CG168534",
			"salesperson_first_name": "David",
			"salesperson_last_name": "Frank",
			"salesperson": "DFrank",
			"customer": "Jerry",
			"customer_last_name": "Tom"
		},
		{
			"price": 7500,
			"id": 12,
			"automobile": "JTDKN3DU0E1706346",
			"salesperson_first_name": "Jake",
			"salesperson_last_name": "Cake",
			"salesperson": "JCake",
			"customer": "Kevin",
			"customer_last_name": "Gill"
		}
	]
}

DELETE
the url: http://localhost:8090/api/sales/10

the response:
{
	"price": 200,
	"id": null,
	"automobile": "1C3CC5FB2AN120174",
	"salesperson_first_name": "David",
	"salesperson_last_name": "Frank",
	"salesperson": "DFrank",
	"customer": "Jerry",
	"customer_last_name": "Tom"
}
