const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bg;

function preload(){
     bg = loadImage("Images/background 1.jpeg")
}

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    box1 = new Rock (200,300,50,100);
    box2 = new Rock (240,100,50,100);
    box3 = new Badger (450,150,80,100);
    box4 = new banayan (350,100,60,100);
    box5 = new Beaver (330,100,100,100);
    box6 = new Daldal (320,100,70,100);
    box7 = new FictionalCharacter (430,100,50,100);
    box8 = new lifeline (250,100,60,100);
    box9 = new monster (310,100,50,100);
    box10 = new riddle (300,100,50,100);
    box11 = new Shovel (290,100,55,100);
    box12 = new teasure (280,100,55,100);
    box13 = new temple (260,100,75,100);
    ground = new Ground(200,height,2000,20)
}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    ground.display();
}