---
title: Obstacle Avoiding Robot using Arduino (WIP)
date: 2019-09-19
---

![](https://storage.googleapis.com/maker-blog-assets/avoiding-robot/robot.jpg)

#### This was my first attempt to start a more complex Arduino project and I chose an Obstacle Avoiding Robot

When I started with Arduino I started with some very simple projects like blinking LEDs our coding a  _semaforo_🚦. These projects were very fun but this time I wanted to start everything from scratch..from choosing the idea to getting around electronics shops until I found the right pieces I needed and wanted for my robot.

<div class="divider"></div>

## But..what is an Obstacle Avoiding Robot?
An Obstacle Avoiding Robot is an intelligent device that can automatically sense the obstacles in front of it and avoid them by turning itself in another direction. **It sounds so fancy but we could sum it up..it's like a Roomba**

![](https://media.giphy.com/media/fQfS2YYFQgvQACkRPV/giphy.gif)

## How does it work?

Well, the robot has two servo motors that will drive the robot around powered by a 9V battery. As far as the **"Avoiding"** feature..we will use an Ultrasonic Sensor which will determine if the robot should stop and reroute.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zCfQLPOpKoc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### What is a ultrasonic sensor?
An Ultrasonic sensor works by emitting sound waves at a frequency too high for humans to hear. The sensor will emit this sound and then wait for the sound to be reflected back, calculating distance based on the time required. Based on this distance we can determine if the robot should stop and change direction.

![](https://storage.googleapis.com/maker-blog-assets/illustrations/ultrasonic-sensor.jpg)

## Here is how I build it...🛠

#### Materials
Here you will find all the materials you need for this project:
* Arduino Uno
* 9V battery
* Two servo motor
* A "car" chassis: I recommend one made out of acrylic you will find they are very common and are even sold as a kit with the chassis and the wheels needed
* Ultrasonic sensor
* Optional: another servo motor to make the ultrasonic sensor rotate
* LM298N Motor Driver Module to control the two wheels
* Some jumper cables
* Soldering iron in case you want to fix the cables to the motors

#### Circuit schematics:
Coming soon..

#### Code:

```javascript
Coming soon..
```

#### Resources:

[^1]: [Ultrasonic sensor explained](https://www.arrow.com/en/research-and-events/articles/ultrasonic-sensors-how-they-work-and-how-to-use-them-with-arduino)