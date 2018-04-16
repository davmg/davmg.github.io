var w = window.innerWidth;
var h = window.innerHeight;
var canvas;
var marca1;
var marca2;
var marca3;
var flecha1;
var flecha2;
var yflecha;
var subiendo;
var velF;
var diam; 
var mx;
var vel;

function preload() {
	marca1 = loadImage("data/marca1.png");
	marca2 = loadImage("data/marca2.png");
	marca3 = loadImage("data/marca3.png");
	flecha1 = loadImage("data/flecha1.png");
	flecha2 = loadImage("data/flecha2.png");
}

function setup() {
	canvas = createCanvas(w, h);
	canvas.parent("canvas-container");
	imageMode(CENTER);
	yflecha=h-40;
	subiendo=true;
	velF=1;
	vel = w/50;
	diam=0;
	mx=0;
}

function draw() {
	background(38);
	if(subiendo){
		yflecha-=velF;
		if(yflecha<h-50){
			subiendo=false;	
		} 
	}else{
		yflecha+=velF;
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
	var t=255;
	var t2=255;
	if(w>760) 
		mx=mouseX
	else{
		mx+=vel;
		if(mx>w || mx<0)
			vel*=-1;
	}
	if(mx<=w*0.5)
		t = map(mx, w*0.05, w*0.5, 255,0);
	else
		t = 0;
	if(mx<=w*0.75)
		t2 = map(mx, w*0.5, w*0.75, 255,0);
	else
		t2 = 0;

	image(marca1, w/2, h/2, marca1.width/2, marca1.height/2);
	fill(150);
	noStroke();
	ellipse(width/2, yflecha-2,diam,diam);
	image(flecha1, w/2, yflecha, flecha1.width/1.5, flecha1.height/1.5);

	fill(255, t2);
	rect(0, 0, w, h);
	tint(255,t2);
	image(marca2, w/2, h/2, marca2.width/2, marca2.height/2);

	fill(230,t2);
	noStroke();
	ellipse(width/2, yflecha-2,diam,diam);
	image(flecha2, w/2, yflecha, flecha2.width/1.5, flecha2.height/1.5);
	
	fill(255, t);
	rect(0, 0, w, h);
	tint(255,t);
	image(marca3, w/2, height/2, marca3.width/2, marca3.height/2);

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
	mx=0;
	vel = w/50; 
	yflecha=h-40;
	subiendo=true;
	resizeCanvas(w,h);
}

window.onload = function(){
	w = window.innerWidth;
	h = window.innerHeight; 
	mx=0;
	vel = w/50; 
	resizeCanvas(w,h);
};