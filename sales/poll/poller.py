import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
from sales_rest import models
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO

def get_vin():
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
    print(response, "response")
    content = json.loads(response.content)
    print(content, "content")
    for vin in content["automobile"]:
        AutomobileVO.objects.update_or_create(
            vin = vin["vin"],
            defaults={"import_href": vin["href"],}
        )
        print(AutomobileVO.objects.get("vin"),"get--_____________")

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            get_vin()
            print(get_vin(),"getvin------____-----___---")
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
