from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Sale, Salesperson, Customer, AutomobileVO
import json
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]

class SalepersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
        ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
    "price",
    # "salesperson",
    # "automobile",
    # "customer",
    "id",
    ]
    encoders = {
    "automobile": AutomobileVOEncoder(),
    "salesperson": SalepersonEncoder(),
    "customer": CustomerEncoder(),
    }
    def get_extra_data(self, o):
        return {"automobile": o.automobile.vin,
                "salesperson_first_name": o.salesperson.first_name,
                "salesperson_last_name": o.salesperson.last_name,
                "salesperson": o.salesperson.employee_id,
                "customer": o.customer.first_name,
                "customer_last_name": o.customer.last_name}

# Create your views here.
@require_http_methods(["GET", "POST"])
def sale_list(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        print(sales, "here----------")
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)
        # try:
        vin = content["automobile"]
        auto = AutomobileVO.objects.get(vin=vin)
        content["automobile"] = auto

        employee_id = content["salesperson"]
        salesperson = Salesperson.objects.get(employee_id=employee_id)
        content["salesperson"] = salesperson

        first_name = content["customer"]
        customer = Customer.objects.get(first_name=first_name)
        content["customer"] =customer


        # except AutomobileVO.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "Invalid Vin"},
        #         status=400
        #     )
        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def sale_delete(request, id):
    if request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Sale does not exist"})

@require_http_methods(["GET", "POST"])
def salesperson_list(request):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"salepeople": salesperson},
            encoder=SalepersonEncoder,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalepersonEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def salesperson_delete(request, id):
    if request.method == "DELETE":
        try:
            salesperson = Salesperson.objects.get(id=id)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalepersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Salesperson does not exist"})

@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method=="GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customers": customer},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def customer_delete(request, id):
    if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer doesn't exist"})
