from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import Technician, AutomobileVO, Appointment
from common.json import ModelEncoder
from django.core.serializers.json import DjangoJSONEncoder
import json


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
    ]


class TechnicianListEncoder(DjangoJSONEncoder,  ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class AppointmentDetailEncoder(DjangoJSONEncoder, ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "time",
        "customer",
        "vin",
        "vip",
        "id",
        "technician"
    ]   

    def get_extra_data(self, o):
        return {"technician_id": o.technician.id}

    encoders = {
        "technician": TechnicianListEncoder(),
    }

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["time"] = instance.time.strftime("%H:%M:%S")
        data["date"] = instance.date_time.strftime("%Y-%m-%d")
        return data


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": list(technicians)},
            encoder=TechnicianListEncoder,
            safe=False,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        technicians = Technician.objects.create(**content)
        return JsonResponse(
            {"technician": technicians},
            encoder=TechnicianListEncoder,
            safe=True,
        )
    
        
@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        print(appointments)
        return JsonResponse(
            {"appointments": list(appointments)},
            encoder=AppointmentDetailEncoder,
            safe=False
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        
        try:
            techs = Technician.objects.get(id=content["technician"])
            content["technician"] = techs

        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Yo, You need a another Tech"},
                status=400
            )
        
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
                {"appointment": appointment},
                encoder=AppointmentDetailEncoder,
                safe=False
             )
    

@require_http_methods(["DELETE"])
def api_delete_appointments(request, pk):
    if request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                    {"DELETED!": "YOUR APPT IS DELETE!!"},
                    status=204,
                )
        except Appointment.DoesNotExist:
            response = JsonResponse({"DELETE NOT!!!": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["PUT"])
def api_status_appointments(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
            status = request.POST.get("status")
            if status == "Finished" or status == "Canceled":
                appointment.delete()
                return JsonResponse(
                    {"DELETED!" f"{status} YOUR APPT IS DELETE!! "},
                    status=204,
                )
            else:
                appointment.status = status
                appointment.save()
                return JsonResponse(
                    {"DELETE": "You DELETED an APPOINTMENT!!! ALERT!!"},
                    status=204
                )
        except Appointment.DoesNotExist:
            response = JsonResponse({"No Appointment": "There's nothing to delete"})
            response.status_code = 404
            return response
        


@require_http_methods(["GET", "DELETE"])
def api_show_technicians(request, pk):
    if request.method == "GET":
        technician = Technician.objects.all()
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