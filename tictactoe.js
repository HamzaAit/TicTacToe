let B;
let w;
let h;
let player;
let opponent;
let active = 1;


function setup() {
    createCanvas(400, 400);
    B = new board();
}




function draw() {
    background(220);
    w = width / 4;
    h = height / 4;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            B.draw();
            
        }
    }
}


function mousePressed(){
    if(B.clicked(active) ){
        active ^= 1;
    }
}
