function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  printA(25,25);
  printB(85,25);
  printC(145,25);
  printD(205,25);
  printE(265,25);
  printF(325,25);
  printG(385,25);
  printH(445,25);
  printI(505,25);
  printJ(565,25);
  printK(25,150);
  printL(85,150);
  printM(145,150);
  printN(205,150);
  printO(265,150);
  printP(325,150);
  printQ(385,150);
  printR(445,150);
  printS(505,150);
  printT(565,150);
  printU(25,275);
  printV(85,275);
  printW(145,275);
  printX(205,275);
  printY(265,275);
  printZ(325,275);
 
}

function printA(x, y) {
  //Draw an A
  line(x, y+50, x, y+100)
  line(x+50,y+50, x+50, y+100)
  line(x, y+50, x+25, y)
  line(x+25, y, x+50, y+50)
  line(x, y+50, x+50, y+50)
}

function printB(x, y) {
  //Draw an B
  line(x, y, x, y+100)
  line(x, y, x+50, y+25)
  line(x, y+50, x+50, y+25)
  line(x, y+50, x+50, y+75)
  line(x, y+100, x+50, y+75)  
}

function printC(x, y) {
  //Draw an C
  line(x, y+50, x+50, y)
  line(x, y+50, x+50, y+100)
  line(x+50, y+75, x+50, y+100)
  line(x+50, y, x+50, y+25) 
}

function printD(x, y) {
  //Draw an D
  line(x, y, x, y+100)
  line(x, y, x+50, y+50)
  line(x, y+100, x+50, y+50)
}

function printE(x, y) {
  //Draw an E
  line(x, y+50, x+50, y)
  line(x, y+50, x+50, y+50)
  line(x, y+50, x+50, y+100)
  line(x+50, y+75, x+50, y+100)
  line(x+50, y, x+50, y+25) 
}

function printF(x, y) {
  //Draw an F
  line(x, y, x, y+100)
  line(x, y, x+50, y)
  line(x, y+50, x+25, y+50)
  line(x+50, y, x+50, y+25)
}

function printG(x, y) {
  //Draw an G
  line(x, y+50, x+50, y)
  line(x, y+50, x+50, y+100)
  line(x+50, y+50, x+50, y+100)
  line(x+50, y+50, x+25, y+50)
}

function printH(x, y) {
  //Draw an H
  line(x, y, x, y+100)
  line(x+50, y, x+50, y+100)
  line(x, y+60, x+50, y+50)
}

function printI(x, y) {
  //Draw an I
  line(x, y, x+50, y)
  line(x, y+100, x+50, y+100)
  line(x+25, y, x+25, y+100)
}

function printJ(x, y) {
  //Draw an J
  line(x, y, x+50, y)
  line(x+25, y, x+25, y+100)
  line(x, y+100, x, y+50)
  line(x, y+100, x+25, y+100)
}

function printK(x, y) {
  //Draw an K
  line(x, y, x, y+100)
  line(x, y+50, x+50, y)
  line(x, y+50, x+50, y+100)
}

function printL(x, y) {
  //Draw an L
  line(x, y, x, y+100)
  line(x, y+100, x+50, y+100)
}


function printM(x, y) {
  //Draw an M
  line(x, y, x, y+100)
  line(x, y, x+25, y+100)
  line(x+50, y, x+25, y+100)
  line(x+50, y, x+50, y+100)
}

function printN(x, y) {
  //Draw an N
  line(x, y, x, y+100)
  line(x+50, y, x+50, y+100)
  line(x, y, x+50, y+100)
}

function printO(x, y) {
  //Draw an O
  line(x, y, x, y+100)
  line(x, y, x+50, y)
  line(x, y+100, x+50, y+100)
  line(x+50, y, x+50, y+100)
  line(x, y, x+50, y+100)
}

function printP(x, y) {
  //Draw an P
  line(x, y, x, y+100)
  line(x, y, x+50, y+25)
  line(x, y+50, x+50, y+25)
}

function printQ(x, y) {
  //Draw an Q
  line(x, y, x, y+100)
  line(x, y, x+40, y)
  line(x, y+100, x+40, y+100)
  line(x+40, y, x+40, y+100)
  line(x+50, y+100, x+25, y+50)
}

function printR(x, y) {
  //Draw an R
  line(x, y, x, y+100)
  line(x, y, x+50, y+25)
  line(x, y+50, x+50, y+25)
  line(x,y+50,x+50,y+100)
}

function printS(x, y) {
  //Draw an S
  line(x, y, x+50, y)
  line(x, y+50, x+50, y+50)
  line(x, y+100, x+50, y+100)
  line(x, y, x, y+50)
  line(x+50, y+50, x+50, y+100)
}

function printT(x, y) {
  //Draw an T
  line(x, y, x+50, y)
  line(x+25, y, x+25, y+100)
  line(x+20, y+100, x+30, y+100)
}

function printU(x, y) {
  //Draw an U
  line(x, y, x, y+75)
  line(x+50, y, x+50, y+75)
  line(x+10, y+100, x+40, y+100)
  line(x+10, y+100, x, y+75)
  line(x+40, y+100, x+50, y+75)
}

function printV(x, y) {
  //Draw an V
  line(x, y, x+25, y+100)
  line(x+50, y, x+25, y+100)
}

function printW(x, y) {
  //Draw an W
  line(x, y, x+10, y+100)
  line(x+25, y, x+10, y+100)
  line(x+50, y, x+40, y+100)
  line(x+25, y, x+40, y+100)
}

function printX(x, y) {
  //Draw an X
  line(x, y, x+50, y+100)
  line(x+50, y, x, y+100)
}

function printY(x, y) {
  //Draw an Y
  line(x+25, y+50, x, y)
  line(x+50, y, x, y+100)
}

function printZ(x, y) {
  //Draw an Z
  line(x, y, x+50, y)
  line(x, y+100, x+50, y+100)
  line(x+50, y, x, y+100)
  line(x+50, y+75, x+50, y+100)
  line(x, y, x, y+25)
}
