var hr,mn,sc;

var scAngle;





function setup() {
  createCanvas(800,800);
  

  
  angleMode(DEGREES);
  
  
}

function draw() {
  background("black");  
  hr = hour();
  mn = minute();
  sc = second();

 
  strokeWeight(6);  
  noFill();

  stroke("green");
  var mysecond = map(sc,0,60,0,360);
  arc(400,300,500,500,0, mysecond);

  stroke("blue");
  var myminute = map(mn,0,60,0,360);
  arc(400,300,480,480,0, myminute);

  stroke("purple");
  var myhour = map(hr %12,0,12,0,360);
  arc(400,300,460,460,0, myhour);

  fill("red");
  noStroke();
  textSize(75);
  text(hr + ':' + mn + ':' + sc,260,700);

  fill("Pink");
  textSize(35);
  text("Time is Tickin'",285,30);


  drawSprites();
}