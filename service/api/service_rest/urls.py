from django.urls import path
from .views import(
    api_list_technicians,
    api_show_technicians,
    api_list_appointments,
    api_delete_appointments,
    api_status_appointments
) 

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:pk>/", api_show_technicians, name="api_show_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/", api_list_appointments, name="api_create_appointments"),
    path("appointments/<int:pk>/", api_delete_appointments, name="api_delete_appointments"),
    path("appointments/<int:appointment_id>/cancel/", api_status_appointments, name="api_status_appointments"),
    path("appointments/<int:appointment_id>/finish/", api_status_appointments, name="api_status_appointments"),
]
