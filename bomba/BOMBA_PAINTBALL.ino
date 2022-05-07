// armar 100
// desarmar 3500

const int armButton = 13;
const int defuseButton = 5;

const int sirenPin = 8;

const int ledPower = 6;
const int ledArmed = 2;

const int stageOne = 3;
const int stageTwo = 12;
const int stageThree = 7;
const int stageFour = 10;
const int stageFive = 4;

const int timeToArm = 10000;
const int timeToDefuse = 20000;
const long timeToExplode = 300000;

int statusBomb = 0; // 0-unarmed | 1-armed | 2-defused | 3-exploded

bool armReset = false;
int armButtonPressed = 0;

bool defuseReset = false;
int defuseButtonPressed = 0;

long timeBombArmed;
bool alreadyStartCountTimeBomb = false;

long elapsedTime;

unsigned long time;

void setup()
{
  Serial.begin(9600);

  pinMode(sirenPin, OUTPUT);
  pinMode(ledPower, OUTPUT);
  pinMode(ledArmed, OUTPUT);

  pinMode(stageOne, OUTPUT);
  pinMode(stageTwo, OUTPUT);
  pinMode(stageThree, OUTPUT);
  pinMode(stageFour, OUTPUT);
  pinMode(stageFive, OUTPUT);

  pinMode(armButton, INPUT);
  pinMode(defuseButton, INPUT);

  digitalWrite(ledPower, HIGH);
}

void loop()
{
  armButtonPressed = digitalRead(armButton);
  defuseButtonPressed = digitalRead(defuseButton);

  if (statusBomb == 0)
  {
    if (armButtonPressed && !armReset)
    {
      time = millis();
      armReset = true;

      digitalWrite(stageOne, HIGH);
    }

    if (!armButtonPressed && armReset)
    {
      armReset = false;

      digitalWrite(stageOne, LOW);
      digitalWrite(stageTwo, LOW);
      digitalWrite(stageThree, LOW);
      digitalWrite(stageFour, LOW);
      digitalWrite(stageFive, LOW);
    }

    if (armButtonPressed && (millis() - time >= (timeToArm / 5 * 2)))
    {
      digitalWrite(stageTwo, HIGH);
    }

    if (armButtonPressed && (millis() - time >= (timeToArm / 5 * 3)))
    {
      digitalWrite(stageThree, HIGH);
    }

    if (armButtonPressed && (millis() - time >= (timeToArm / 5 * 4)))
    {
      digitalWrite(stageFour, HIGH);
    }

    if (armButtonPressed && (millis() - time >= (timeToArm / 5 * 5)))
    {
      digitalWrite(stageFive, HIGH);
    }

    if (armButtonPressed && (millis() - time >= timeToArm))
    {
      statusBomb = 1;

      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
      delay(200);
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
      delay(200);
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);

      digitalWrite(stageOne, LOW);
      digitalWrite(stageTwo, LOW);
      digitalWrite(stageThree, LOW);
      digitalWrite(stageFour, LOW);
      digitalWrite(stageFive, LOW);
    }
  }

  // ------------------------------------------------------------------------------------------------------

  if (statusBomb == 1)
  {
    if (defuseButtonPressed && !defuseReset)
    {
      time = millis();
      defuseReset = true;

      digitalWrite(stageOne, HIGH);
    }

    if (!defuseButtonPressed && defuseReset)
    {
      defuseReset = false;

      digitalWrite(stageOne, LOW);
      digitalWrite(stageTwo, LOW);
      digitalWrite(stageThree, LOW);
      digitalWrite(stageFour, LOW);
      digitalWrite(stageFive, LOW);
    }

    if (defuseButtonPressed && (millis() - time >= (timeToDefuse / 5 * 2)))
    {
      digitalWrite(stageTwo, HIGH);
    }

    if (defuseButtonPressed && (millis() - time >= (timeToDefuse / 5 * 3)))
    {
      digitalWrite(stageThree, HIGH);
    }

    if (defuseButtonPressed && (millis() - time >= (timeToDefuse / 5 * 4)))
    {
      digitalWrite(stageFour, HIGH);
    }

    if (defuseButtonPressed && (millis() - time >= (timeToDefuse / 5 * 5)))
    {
      digitalWrite(stageFive, HIGH);
    }

    if (defuseButtonPressed && (millis() - time >= timeToDefuse))
    {
      statusBomb = 2;

      digitalWrite(stageOne, LOW);
      digitalWrite(stageTwo, LOW);
      digitalWrite(stageThree, LOW);
      digitalWrite(stageFour, LOW);
      digitalWrite(stageFive, LOW);

      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
      delay(200);
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (!alreadyStartCountTimeBomb)
    {
      timeBombArmed = millis();
      alreadyStartCountTimeBomb = true;
    }

    Serial.print(millis() - timeBombArmed);
    Serial.print("/");
    Serial.println(timeToExplode);

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 60000) && ((millis() - timeBombArmed) < 61000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 120000) && ((millis() - timeBombArmed) < 121000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 180000) && ((millis() - timeBombArmed) < 181000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 240000) && ((millis() - timeBombArmed) < 241000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 250000) && ((millis() - timeBombArmed) < 251000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 260000) && ((millis() - timeBombArmed) < 261000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 265000) && ((millis() - timeBombArmed) < 265500)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(500);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 270000) && ((millis() - timeBombArmed) < 271000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 275000) && ((millis() - timeBombArmed) < 275500)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(500);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 280000) && ((millis() - timeBombArmed) < 281000)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(1000);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 275000) && ((millis() - timeBombArmed) < 275500)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(500);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 280000) && ((millis() - timeBombArmed) < 280500)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(500);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 285000) && ((millis() - timeBombArmed) < 285500)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(500);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 290000) && ((millis() - timeBombArmed) < 290250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 291000) && ((millis() - timeBombArmed) < 291250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 292000) && ((millis() - timeBombArmed) < 292250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 293000) && ((millis() - timeBombArmed) < 293250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 294000) && ((millis() - timeBombArmed) < 294250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 295000) && ((millis() - timeBombArmed) < 295250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 296000) && ((millis() - timeBombArmed) < 296250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 297000) && ((millis() - timeBombArmed) < 297250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && (((millis() - timeBombArmed) > 298000) && ((millis() - timeBombArmed) < 29800250)))
    {
      digitalWrite(sirenPin, HIGH);
      delay(250);
      digitalWrite(sirenPin, LOW);
    }

    if (alreadyStartCountTimeBomb && ((millis() - timeBombArmed) > timeToExplode))
    {
      statusBomb = 3;
    }
  }

  if (statusBomb == 1)
  {
    digitalWrite(ledArmed, HIGH);
  }
  if (statusBomb == 2)
  {
    digitalWrite(ledArmed, LOW);
  }
  if (statusBomb == 3)
  {
    digitalWrite(sirenPin, HIGH);
    digitalWrite(ledArmed, LOW);
  }

  delay(50);
}
