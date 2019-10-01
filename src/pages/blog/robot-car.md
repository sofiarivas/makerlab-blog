---
title: Obstacle Avoiding Robot using Arduino
date: 2019-09-19
---

#### This was my first attempt to start a more advanced Arduino project and I chose an Obstacle Avoiding Robot.**

When I started with Arduino I started with some very simple projects like blinking LEDs our coding a  _semaforo_🚦. These projects were very fun but this time I wanted to start everything from scratch..from choosing the idea to getting around electronics shops until I found the right pieces I needed and wanted for my robot.

<div class="divider"></div>

## But..what is an Obstacle Avoiding Robot?
An Obstacle Avoiding Robot is an intelligent device that can automatically sense the obstacles in front of it and avoid them by turning itself in another direction. **It sounds so fancy but we could sum it up..it's like a Roomba**

![](https://media.giphy.com/media/fQfS2YYFQgvQACkRPV/giphy.gif)

## How does it work?

Well, the robot has two servo motors that will drive the robot around. As far as the **"Avoiding"** feature..we will use an Ultrasonic Sensor which will determine if the robot should stop and reroute.

![](https://i.imgur.com/fmDykdq.jpg)


#### What is a ultrasonic sensor?
Ultrasonic sensors work by emitting sound waves at a frequency too high for humans to hear. They then wait for the sound to be reflected back, calculating distance based on the time required. Based on this distance we can determine if the robot should stop and change direction.

![](https://4.bp.blogspot.com/-X2jHU1W_8dw/XChqxFPFyfI/AAAAAAAAQhc/oznelKAoS_43ApuyJh48Sbov25Tqdq6EQCLcBGAs/s400/How%2BUltrasonic%2Bsensor%2Bworks.JPG)

## Here is how I build it...🛠

#### Materials
Here you will find all the materials you need for this project:
* Arduino Uno
* 9V battery
* Two servo motor
* A "car" chassis: I recommend one made out of acrylic you will find they are very common and are even sold as a kit with the chassis and the wheels needed
* Ultrasonic sensor
* Optional: another servo motor to make the ultrasonic sensor rotate
* XXX component to control the two wheels
* Some jumper cables
* Soldering iron in case you want to fix the cables to the motors

#### Code:

```javascript
var s = "Placeholder";
alert(s);
```

#### Resources: