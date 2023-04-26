from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import Technician, AutomobileVO, Appointment
from common.json import ModelEncoder
import json


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
    ]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "time",
        "customer",
    ]
    encoder = {
        "technician": TechnicianListEncoder
    }

# Do I need to make a seperate encoder for vin here? /\ /\


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(
                employee_id=content["employee_id"],
                first_name=content["first_name"],
                last_name=content["last_name"],
            )
            return JsonResponse(
                {"technician": technician},
                encoder=TechnicianListEncoder,
                safe=True,
            )
        except:
            return JsonResponse(
                {"message": "Yo, you're missing field in your body"},
                status=400,
            )
        
        
@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appoitments = Appointment.objects.all()
        return JsonResponse(
            {"appoitments": appoitments},
            encoder=AppointmentDetailEncoder,
        )
    # elif request.method == "POST":
    #     content = json.loads(request.body)
    #     try:
    #         technician = Technician.objects.get(id=content["technician_id"])
    #         appoitment = Appointment.objects.create(
    #             # technician=content["technician"],
    #             technician=
    #             vin=content["vin"],
    #             customer=content["customer"],
    #             date_time=content["date_time"],
    #             time=content["time"],
    #             reason=content["reason"],
    #             status=content["status"],
    #         )
    #         return JsonResponse(
    #             {"appoitment": appoitment},
    #             encoder=AppointmentDetailEncoder,
    #             safe=True,
    #         )
    #     except KeyError:
    #         return JsonResponse(
    #             {"message": "Yo Shane, you're missing fields in your body"},
    #             status=400,
    #         )
             

@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_technicians(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianListEncoder,
        )
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
        
        #     technician_href = content["technician"]
        #     technician = Technician.objects.get(import_href=technician_href)
        #     print(technician)
        #     content["technician"] = technician
        # except Technician.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "Invalid technician id"},
        #         status=400
        #     )
        
        # technician = Technician.objects.create(**content)
        # return JsonResponse(
        #     technician,
        #     encoder=TechnicianListEncoder,
        #     safe=False,
        # )
