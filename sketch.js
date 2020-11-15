//https://josefinaschiappacasse.github.io/ie2020tanteo/superposicion de primarios.jpg
let img;
let theta = 0;
let s1, s2;
let sketch;

function setup() {
  sketch = createCanvas(710, 400, WEBGL);
  sketch.parent("p5");
  s1 = createSlider(2, 24, 2);
  s2 = createSlider(100, 200);
  img = loadImage('https://josefinaschiappacasse.github.io/ie2020tanteo/superposicion de primarios.jpg');
  s1.parent("p5");
  s2.parent("p5"); 
}

function draw() {
  background(250);
  

  translate(-200, 0, 0);
  push();
  rotateY(millis() / 1000);
  texture(img);
  ellipsoid(70, 80, 80, 12, s1.value());
  pop();
  push();
  translate(300, 0, 0);
 
  rotateZ(theta * mouseX * 0.01);
  rotateX(theta * mouseX * 0.01);
  rotateY(theta * mouseX * 0.01);
  //pasar una imagen como textura
  texture(img);
  sphere(s2.value());
   pop();
  theta += 0.005;
}

 