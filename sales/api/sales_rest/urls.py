from django.urls import path
from .views import (sale_delete, sale_list,
salesperson_delete, salesperson_list,
customer_delete, customer_list)

urlpatterns = [
    path("salespeople/", salesperson_list, name="list_salespeople"),
    path("salespeople/", salesperson_list, name="create_salesperson"),
    path("salespeople/<int:id>/", salesperson_delete, name="delete_salesperson"),

    path("customers/", customer_list, name="list_customers"),
    path("customers/", customer_list, name="create_customer"),
    path("customers/<int:id>", customer_delete, name="delete_customer"),

    path("sales/", sale_list, name="list_sales"),
    path("sales/", sale_list, name="create_sale"),
    path("sales/<int:id>", sale_delete, name="delete_sale"),
]
