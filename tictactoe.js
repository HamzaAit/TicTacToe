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
    if (B.gameOver == false) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                B.draw();

            }
        }
    }
    else {
        background(0);
        textSize(45);
        fill(255);
        //textAlign(CENTER,CENTER);
        if (B.winner == 'X')
            text("GAME OVER\nWinner: X", 50, 200);
        else
            text("GAME OVER\nWinner: O", 50, 200);
    }
}


function mousePressed() {
    if (B.clicked(active)) {
        active ^= 1;
    }
}
