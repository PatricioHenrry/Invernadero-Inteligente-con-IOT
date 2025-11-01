var pats = A0; // Temp sensor
var pahs = A1; // Humidity sensor
var pdac = 1;  // Air cooler
var pdhe = 2;  // Heating element
var pdcs = 3;  // Ceiling sprinkler
var pdd  = 4;  // Display

function setup(){
    pinMode(pdac, OUTPUT);
    pinMode(pdhe, OUTPUT);
    pinMode(pdcs, OUTPUT);
}

function loop() {
    var lecturaTemp = (200 * analogRead(A0)) / 1023;       // 
	var temperatura = (lecturaTemp - 100) ;
    
    var lecturaHum = analogRead(pahs);
    var humedad = (lecturaHum * 100.0) / 1023.0;

    Serial.println("Temperatura: " + temperatura.toFixed(2) + " °C");
    Serial.println("Humedad: " + humedad.toFixed(2) + " %");
    delay(1000);
    
if 
	// Control del Air Cooler
	(temperatura > 4) {
        digitalWrite(pdac, HIGH);
    } else {
        digitalWrite(pdac, LOW);
    }

    // Control del Heating Element
    if (temperatura < 10) {
        digitalWrite(pdhe, HIGH);
    } else {
        digitalWrite(pdhe, LOW);
    }

    // Control del Ceiling Sprinker
    if (humedad < 100) {
        digitalWrite(pdcs, HIGH);
    } else {
        digitalWrite(pdcs, LOW);
    }

    delay(1000);
}