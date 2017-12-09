var w = window.innerWidth;
var h = window.innerHeight;
var canvas;
var marca1;
var marca2;
var flecha1;
var flecha2;
var yflecha;
var subiendo;
var vel;
var diam; 

function preload() {
	marca1 = loadImage("data/marca1.png");
	marca2 = loadImage("data/marca2.png");
	flecha1 = loadImage("data/flecha1.png");
	flecha2 = loadImage("data/flecha2.png");
}

function setup() {
	canvas = createCanvas(w, h);
	canvas.parent("canvas-container");
	imageMode(CENTER);
	yflecha=h-40;
	subiendo=true;
	vel=1;
	diam=0;
}

function draw() {
	background(255);
	if(subiendo){
		yflecha-=vel;
		if(yflecha<h-50){
			subiendo=false;	
		} 
	}else{
		yflecha+=vel;
		if(yflecha>h-40){
			subiendo=true;	
		} 
	}
	if(dist(mouseX,mouseY,width/2,h-45)<20){
		if(diam<80){
			var v = map(diam, 0, 80, 50, 0);
			diam+=v;
		}
	}else{
		if(diam>0){
			var vv = map(diam, 80, 0, 50, 2);
			diam-=vv;
		}
	}
	fill(230);
	noStroke();
	ellipse(width/2, yflecha-2,diam,diam);
	image(marca2, w/2, height/2, marca1.width/3, marca1.height/3);
	image(flecha2, w/2, yflecha, flecha2.width/1.5, flecha2.height/1.5);
	var t=0;
	if (mouseX<=w*0.4) {
		t = map(mouseX, w*0.1, w*0.4, 255, 0);
	} else if (mouseX>=w*0.6) {
		t = map(mouseX, w*0.6, w*0.9, 0, 255);
	}
	fill(38, t);
	rect(0, 0, w, h);
	tint(255,t);
	image(marca1, w/2, h/2, marca1.width/3, marca1.height/3);
	image(flecha1, w/2, yflecha, flecha2.width/1.5, flecha2.height/1.5);
	noTint();
}

function mousePressed(){
	if(dist(mouseX,mouseY,width/2,height-45)<20){
		$('html,body').animate({scrollTop: height}, 800);
	}
}

function windowResized() {
	w = window.innerWidth;
	h = window.innerHeight;  
	yflecha=h-40;
	subiendo=true;
	resizeCanvas(w,h);
}

window.onload = function(){
	w = window.innerWidth;
	h = window.innerHeight;  
	resizeCanvas(w,h);
};