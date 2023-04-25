import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO

AUTOMOBILE_VIN_API = "http://localhost:8100/api/automobiles/"


def poll():
    while True:
        print('Service poller polling for data')
        try:
            # Write your polling logic, here
            response = requests.get(AUTOMOBILE_VIN_API)
            data = json.loads(response.content)
            automobiles = data["automobiles"]

            for automobile in automobiles:
                AutomobileVO.objects.update_or_create(
                    import_hef=automobile["href"],
                    defaults={
                        "vin": automobile["vin"]
                    }
                )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
