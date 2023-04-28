# CarCar

Team:

* Shane McCracken - Service
* Kevinjeet Gill - Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here:

In the Service microservice, there are three models Technician, AutomobileVO, and Appointment. For the Technician model, there are three objects first_name, last_name, and employee_id. This model allows us to establish the properties of these specific objects.  For the AutomobileVO model, VIN, which is connected to our Inventory microservice,  is the pillar for establishing the connecting relationship between the Inventory to Service microservice. Importantly, we utilize the polling of information from the Automobile model in the inventory microservice into the AutomobileVO in the Service microservice. More specifically, this model is a value object that routinely polls the inventory microservice's Automobile model for data (color, year, VIN, sold, model). Our final model within Service, Appointment, consists of vin, customer, date_time, reason, VIP,  status, time, and technician fields that allow us to create an in-depth list of appointments for each customer to illustrate all aforementioned fields.  With a further focus on the Appointment model, the vin field is not a foreign key due to the customers who purchased their vehicles from the dealership and should be given "VIP treatment".

## Sales microservice
For the Sales microservices we created multiple models, AutomobileVO, Customer, Salesperson, and Sale. For the Sale to occur we need information from each of the other models. We also added the functionaility to be able to add a Customer, Salesperson, and a Automobile on top of the creating a Sale. You will be able to see a diagram that can better show how the models work with one another and also how we do the HTTP method.

## How to Run this Project

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

####Lets Get Started!

Before we begin please make sure Docker Desktop is downloaded before procdeing to the directions below. 

######Download link: Docker Desktop. Please visit their website if there are issues downloading. 
https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module

####Lets Clone!
1. First, open your terminal and change your directory to the one you would clone this project into.

2. Second, while in your terminal, type: `(insert link)`

3. Lastly, we need to switch inoto the projects directory: `cd project-beta`

####Let's Fire up Docker!
After comploted the above, now lets enter each command in order.
1. `docker volume create beta-data`


2. `docker-compose build`


3. `docker-compose up`

####Success!
After you have completed these steps succesfully, you will see your docker with these running containers. 
![Docker](../../docker.png)
## Project Diagram


![diagram](diagram.PNG)

![Diagram](../../Screenshot%202023-04-27%20at%2011.35.12%20PM.png)



## API Documentation

- For each of the services, add the documentation describing how to interact with each endpoint across the various HTTP methods implemented. Include the information that is needed for a request and where it needs to be included in the request(ie. header, path parameter, request body). Include the information that is returned from the server in the response. Insomnia can be very helpful in helping you put together this information

####Lets Navigate the Server

First lets head to: http://localhost:3000, this link(React) will take us to our homepage, where you can find easy access to the various other tabs we've created. Please follow below to get an indepth understand of the URLS.

####Service API
The following Service API's uses Restful methods  that enable the user to complete the following functionallity.

###### - Service History :http://localhost:3000/appointments/history
This shows the list of all appointments and the ability to search by vin.

###### - List of Technicians: http://localhost:3000/technicians/
This allows the user the see the current list of Technicians. This also displays all thier respective data to the viewers.


###### - Create a Technician:http://localhost:3000/technicians/<int:pk>/
This allows the user to create a technician with all the according data. This can allow the user to input all the technicians informaiton to be stored.

###### - List an Appointment: http://localhost:3000/appointments/
This list view is all the appointments that have not been completed , by cancel or finished. This shows all the data attached to the appointment, and also the ability to cancel or finish.


###### - Create an Appointment: http://localhost:3000/appointments/

This allows the user to creat an appointment with all the according data. 


#### - Inventory API (RESTful)



####Manufacturer
- List manufacturers	GET	http://localhost:8100/api/manufacturers/
- Create a manufacturer	POST	http://localhost:8100/api/manufacturers/
- Get a specific manufacturer	GET	http://localhost:8100/api/manufacturers/:id/
- Update a specific manufacturer	PUT	http://localhost:8100/api/manufacturers/:id/
- Delete a specific manufacturer	DELETE	http://localhost:8100/api/manufacturers/:id/

The GET method, which is used to show the list of manufacturers within a dicitonary and shows the list of manufacturers. 

The POST, and PUT method are used for updating and creating the manufacturer.

THE GET, POST, and PUT method is used in making, getting, and updating the manufacturer. 


#### Vehicle Modles
- List vehicle models	GET	http://localhost:8100/api/models/
- Create a vehicle model	POST	http://localhost:8100/api/models/
- Get a specific vehicle model	GET	http://localhost:8100/api/models/:id/
- Update a specific vehicle model	PUT	http://localhost:8100/api/models/:id/
- Delete a specific vehicle model	DELETE	http://localhost:8100/api/models/:id/


The GET, POST, and PUT are used getting the detials of the specific vehicle, creating a vehicle, and updating the vehicle details.

The POST, and PUT method is for making and updating the models of vehicles. 

The PUT method updates the specific vehicle model.

GET method gets the list of vehicle models. 


#### Automobiles

- List automobiles	GET	http://localhost:8100/api/automobiles/
- Create an automobile	POST	http://localhost:8100/api/automobiles/
- Get a specific automobile	GET	http://localhost:8100/api/automobiles/:vin/
- Update a specific automobile	PUT	http://localhost:8100/api/automobiles/:vin/
- Delete a specific automobile	DELETE	http://localhost:8100/api/automobiles/:vin/


The POST method creates the list of automobiles.

The GET method gets the list of all automobiles. 

The PUT method updates the automobile.



#### SERVICE (Microservice) Recap

In the Service microservice, which had three models, AutomobileVO, Technician, and Appointment. Within the Inventory microservice, the Automobile model is represented by the AutomobileVO model, which is a value object in the Service microservice, and is the anchor that links them together. Additionally, we use polling as the mechanism to communicate between Automobile's data through our Value Object AutomobileVO. 






We have multiple HTTP method implemented, we will be using the Insomnia App to show these request
For the GET and DELETE method you will see the url needed to make the request and also at the bottom you will see the data.
For the POST and PUT method you will see the same type of information and in addition the JSON body needed to make the request with.
With the following you will see the URL used to make the request to and the response receive and if needed the JSON body
For a Salesperson we have GET(gets the database), POST(adds to the database), DELETE(deletes from the database):

GET
the url: 	http://localhost:8090/api/salespeople/
the response:
```
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
```
POST
the url: http://localhost:8090/api/salespeople/
the JSON body:
```
{
	"first_name": "Jacob",
	"last_name": "Lord",
	"employee_id": "JLord"
}
```
the response:
```
{
	"first_name": "Jacob",
	"last_name": "Lord",
	"employee_id": "JLord",
	"id": 3
}
```
DELETE
the url: http://localhost:8090/api/salespeople/3
the response:
```
{
	"first_name": "Jacob",
	"last_name": "Lord",
	"employee_id": "JLord",
	"id": null
}
```

For Automobile we have GET, POST, DELETE and PUT(updates existing data)
GET
the url: http://localhost:8100/api/automobiles/
the response:
```
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
```

POST
the url: http://localhost:8100/api/automobiles/
the JSON body:
```
{
	"color": "white",
	"year": 2022,
	"vin": "3GCUKREC8EG321032",
	"model_id": 2
}
```

PUT
the urls: http://localhost:8100/api/automobiles/3GCUKREC8EG321032/
the JSON body:
```
{
	"color": "green",
	"year": "2021",
	"sold": false
}
```
the response:
```
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
```

DELETE
the url: http://localhost:8100/api/automobiles/3GCUKREC8EG321032/
the response:
```
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
```


For Customer we have GET, POST, and DELETE
GET
the url: http://localhost:8090/api/customers/
the response
```
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
```

POST
the url: http://localhost:8090/api/customers/
the JSON body:
```
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
```

DELETE
the url:http://localhost:8090/api/customers/2
the response:
```
{
	"first_name": "Jerry",
	"last_name": "Tom",
	"address": "1234 Not street, CA, 95788",
	"phone_number": "916-555-5555",
	"id": null
}
```

For Sale we have a DELETE, GET, POST
POST:
the url: http://localhost:8090/api/sales/

the JSON body:
```
{
	"salesperson": "DFrank",
	"customer": "Jerry",
	"price": 1500,
	"automobile": "JTDKN3DU0E1706346"
}
```

the response:
```
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
```

GET:
the url: http://localhost:8090/api/sales/

the response:
```
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
```

DELETE
the url: http://localhost:8090/api/sales/10

the response:
```
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
```
