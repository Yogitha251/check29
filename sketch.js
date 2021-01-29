const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2,ground3;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
function preload(){
 image=loadImage ("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ground1= new ground(600,1190,1200,10);
groud2= new ground(700,300,300,10);
ground3 = new ground (1000,100,300,10);

box1= new box(500,290,20,20);
box2 = new box (510,290,20,20);
box3 = new box(520,290,20,20);
box4 = new box(530,290,20,20);
box5 = new box (505,280,20,20);
box6 = new box(515,280,20,20) ;
box7= new box (525,280,20,20);
box8 = new box(510,270,20,20);
box9 = new box (515,270,20,20);
box10 = new box (513,260,20,20);

polygon = Bodies.circle(50,500,20);
imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
World.add(world,polygon);

slingShot = new SlingShot (this.polygon,{x:100,y:200})
}

function draw (){
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.diaplay();

    slingShot.display();

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
    
}