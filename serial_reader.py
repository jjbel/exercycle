from serial import Serial
from serial.tools import list_ports
from pathlib import Path
from time import sleep
from datetime import datetime
import json

PORT = [port_info.device for port_info in list_ports.comports() if 'arduino' in port_info.description.lower()][0]
print('Using port', PORT)

Path('data').mkdir(parents=True, exist_ok=True)
path = Path('data/data.json')

TODAY = datetime.today().strftime('%Y-%m-%d')

def get_data():
    return json.loads(path.read_text())

def fix_today():
    data = get_data()

    last_update = data["today"]
    if last_update != TODAY:
        if last_update in data["history"]:
            print(f"Warning: {last_update} is already in history. Overwriting...")
        
        print(f'Updating date, last was {last_update}')
        data["history"][last_update] = data["count"]
        data["count"] = 0
        data["today"] = TODAY
    path.write_text(json.dumps(data))


def update(count, speed):
    data = get_data()
    data["count"] =count
    data["speed"] = speed
    path.write_text(json.dumps(data))

fix_today()

update(6969, 69.0)

with Serial(port=PORT, baudrate=9600, timeout=1) as serial:
    while True:
        output = serial.readline().decode('ascii').strip().split(',')
        if len(output) != 2:
            continue
        count, speed = output
        update(count, speed)
        # print(output)
        # print(path.read_text())
