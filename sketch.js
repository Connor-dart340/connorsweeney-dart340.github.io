let fistsize =20;
let xPos=110;
let yPos=230;

let xShip = 0;
let yShip = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 191, 255);
  
  stroke(2);
  fill(246,220,158);
  rect(170,228, 60,80,20);
  fill(241,241,100);
  ellipse(200,190, 50, 60);
  fill(250,0,0);
  ellipse(200,190, 50, 40);
  fill(241,241,100);
  ellipse(200,200, 70,40);
  fill(246,220,158);
  rect(225,249,20,40);
  rect(225,230,20,20,5)
  rect(122,230,50,20);
  line(115,250,115,240);
  line(120,250,120,240);
  line(125,250,125,240);
  rect(225,280,20,20,5);
  fill(104,79,17);
  rect(205,230, 30,70,10);
  rect(165,230, 30,70,10);
  fill(246,220,158);
  ellipse(200,210, 44,50);
  fill(246,220,158);
  rect(175,340, 20, 50);
  rect(205,340,20,50);
  fill(246,220,158);
  fill(18,92,133);
  rect(170,300, 30, 50);
  rect(200,300, 30, 50);
  fill(242,248,138);
  rect(175,390, 20,5);
  rect(205,390, 20,5);
  line(195,210,191,203);
  line(191,203, 185,210);
  line(215,210,211,203);
  line(211,203, 205,210);
  line(190,220, 210,220);
  line(210,215, 217,215);
  line(212,213, 213,217);
  line(215,213, 216,217);
  fill(246,220,158);
  rect(xPos,yPos,fistsize,fistsize,5);
  
  fistsize= fistsize + 1;
  xPos= xPos-.29;
  yPos= yPos-1;
  yPos= yPos+.25;
 
  
  
  noStroke();
  fill(82,82,69);
  rect(xShip+275,yShip+100,20,15);
  fill(120,54,13)
  rect(xShip+150,yShip+100, 120,50,4);
  triangle(xShip+152,yShip+100,xShip+100,yShip+100,xShip+152,yShip+150);
  triangle(xShip+268,yShip+150, xShip+300,yShip+70,xShip+270,yShip+70);
  triangle(xShip+275,yShip+70, xShip+277,yShip+107,xShip+220,yShip+100);
  rect(xShip+200,yShip+15,7,90);
  rect(xShip+270,yShip+20,7,70);
  rect(xShip+270,yShip+140,20,20,7);
  fill(241,244,131);
  ellipse(xShip+114,yShip+110,30,40);
  fill(255);
  rect(xShip+178,yShip+30,50,60,4);
  rect(xShip+258,yShip+23,30,45,4);
  ellipse(xShip+275,yShip+15 ,10,15);
  fill(0);
  rect(xShip+270,yShip+3,25,20,4);
  fill(108,186,28);
  ellipse(xShip+203,yShip+15,30,15);
  rect(xShip+188,yShip+15,30,10);
  fill(255,0,0);
  ellipse(xShip+283,yShip+13 ,10,7);
  fill(242,248,138);
  ellipse(xShip+283,yShip+13 ,10,15);
  fill(255,0,0);
  ellipse(xShip+283,yShip+13 ,10,7);
  fill(242,248,138);
  ellipse(xShip+283,yShip+16 ,15,7);
  
  xShip= xShip-1;
  yShip= yShip-.2
 
  
  
  
}