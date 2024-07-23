#define SENSOR 5

void setup() {
  Serial.begin(9600);
  pinMode(SENSOR, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

bool prev = false;
bool now = false;
int count = 0;

#define DURATION 100
int duration_counter = 0;

void loop() {
  prev = now;
  now = digitalRead(SENSOR);
  if (prev == true && now == false) {
    count++;
  }

  duration_counter++;
  if (duration_counter % DURATION == 0) {
    Serial.print(count);

    // TODO speed
    float speed = 0.0;
    Serial.print(',');
    Serial.println(speed);
  }
}
