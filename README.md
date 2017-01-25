# Alexa + IFTTT + Johnny-Five + Arduino + LED strip = Demo 1

![](https://github.com/rwaldron/johnny-five/raw/master/assets/sgier-johnny-five.png)

# Johnny-Five
### First demo from my talk on creating IoT devices from J5. Using Alexa to turn a strip of LEDs on and off.

_Slides by [Aden Forshaw](http://twitter.com/adenforshaw)_

**Source an Arduino UNO**

Either win it as a prize at the talk, or buy from Amazon.com - £17 for an official, £8 for a clone that will work fine, or £3 from Aliexpress.com

Flash the firmware to StandardFirmata, new Arduino's should already have this, but worth double checking.

Download & open the Ardunio.cc IDE
Plug the Arduino in
File->Examples->Firmata->StandardFirmata
Compile & Upload

**Clone this project**

Asuming you have latest version of node, clone the project to a folder, and install the 'johnny-five' node library.

```git clone https://github.com/AdenForshaw/j5-talk-demo1-leds
npm install
```
**Test Run & Try API**

```node led-server.js
```

Then try the API methods in your browser:

http://localhost:8090/api/on
http://localhost:8090/api/off

**Ngrok**
Use ngrok to expose port 8090 to the web. You'll get a http://[dynamicID].ngrok.io url.

**IFTTT & Alexa**

Signup to https://ifttt.com/
Add Alexa as a service https://ifttt.com/my_services

Create an Applet triggered by Alexa phrase, that actions a Maker channel.
In the maker channel use the ngrok url from above, with '/api/on' appended

e.g. http://[dynamicID].ngrok.io/api/on

**Try it**





**Troubleshooting**



**Credits**

- 
