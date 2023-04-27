from django.urls import path
from .views import api_list_technicians, api_show_technicians, api_list_appointments,api_delete_appointments


urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:pk>/", api_show_technicians, name="api_show_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/", api_list_appointments, name="api_create_appointments"),
    path("appointments/<int:pk>/cancel", api_delete_appointments, name="api_delete_appointments"),

]
