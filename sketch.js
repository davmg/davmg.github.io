var w = window.innerWidth;
var h = window.innerHeight;
var canvas;
var marca1;
var marca2;

function preload() {
	marca1 = loadImage("data/marca1.png");
	marca2 = loadImage("data/marca2.png");
}

function setup() {
	canvas = createCanvas(w, h);
	canvas.parent("canvas-container");
	imageMode(CENTER);
}

function draw() {
	background(255);

	image(marca2, w/2, height/2, marca1.width/3, marca1.height/3);
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
	noTint();
}

function mousePressed(){
	
}

function windowResized() {
	w = window.innerWidth;
	h = window.innerHeight;  
	resizeCanvas(w,h);
}

window.onload = function(){
	w = window.innerWidth;
	h = window.innerHeight;  
	resizeCanvas(w,h);
};