const int pushButton[] ={6,11,10};                           // define push button inputs
const int LedPin[]={2,4,12};                                //  3 Leds pins   
String LedsNames[] ={"Red","Green","Blue"};                // Leds Names
int pushed[] ={0,0,0};                                    // status of each buttons
int LedsStatus[] ={HIGH,HIGH,HIGH};                      // initial status of Leds


void setup() {
 
  Serial.begin(9600); 
  for(int i=0; i<3; i++)
  {
    pinMode(pushButton[i], INPUT_PULLUP); 
    pinMode(LedPin[i], OUTPUT);   
    digitalWrite(LedPin[i], HIGH);    
  }

}

void loop() {

  for(int i=0; i<3; i++)
  {
     int  val = digitalRead(pushButton[i]);   
    if(val == HIGH && LedsStatus[i] == LOW){
  
      pushed[i] = 1-pushed[i];
      delay(100);
    }  

  LedsStatus[i] = val;

      if(pushed[i] == HIGH){
        Serial.print(LedsNames[i]);
        Serial.println(" ON");
        digitalWrite(LedPin[i], LOW); 
       
      }else{
        Serial.print(LedsNames[i]);
        Serial.println(" OFF");
        digitalWrite(LedPin[i], HIGH);
   
      }   
 
  } 
    Serial.println("=========="); 
  delay(100);
 
}
