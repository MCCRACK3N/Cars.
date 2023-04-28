from django.db import models


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    class Meta:
        ordering = ("first_name", "last_name", "employee_id")


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)


class Appointment(models.Model):
    date_time = models.DateField()
    vip = models.BooleanField(default=False)
    reason = models.CharField(max_length=100)
    status = models.CharField(max_length=100, default="created")
    vin = models.CharField(max_length=17)
    customer = models.CharField(max_length=100)
    time = models.TimeField()
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )
