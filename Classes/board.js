function board() {
    this.gameOver = false;
    this.winner = '';

    this.grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    this.draw = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                square(w * (i + 1) - 20, h * (j + 1) - 20, 100);
                var cell = this.grid[i][j];
                textSize(40);
                text(cell, w * (i + 1) + 15, h * (j + 1) + 40);
            }
        }
    }
    this.clicked = function (playing) {
        let x = mouseX;
        let y = mouseY;
        if (playing) var c = 'X';
        else var c = 'O';
        var played = false;
        if (x > w - 20 && y > h - 20 && x < 3 * w + 80 && y < 3 * h + 80) {
            if (x < w + 80 && y < h + 80) {
                if (this.grid[0][0] == '') {
                    this.grid[0][0] = c;
                    played = true;
                }
            }
            else if (x < w + 80 && y < 2 * h + 80) {
                if (this.grid[0][1] == '') {
                    this.grid[0][1] = c;
                    played = true;
                }
            }
            else if (x < w + 80 && y < 3 * h + 80) {
                if (this.grid[0][2] == '') {
                    this.grid[0][2] = c;
                    played = true;
                }
            }
            else if (x < 2 * w + 80 && y < h + 80) {
                if (this.grid[1][0] == '') {
                    this.grid[1][0] = c;
                    played = true;
                }
            }
            else if (x < 2 * w + 80 && y < 2 * h + 80) {
                if (this.grid[1][1] == '') {
                    this.grid[1][1] = c;
                    played = true;
                }
            }
            else if (x < 2 * w + 80 && y < 3 * h + 80) {
                if (this.grid[1][2] == '') {
                    this.grid[1][2] = c;
                    played = true;
                }
            }
            else if (x < 3 * w + 80 && y < h + 80) {
                if (this.grid[2][0] == '') {
                    this.grid[2][0] = c;
                    played = true;
                }
            }
            else if (x < 3 * w + 80 && y < 2 * h + 80) {
                if (this.grid[2][1] == '') {
                    this.grid[2][1] = c;
                    played = true;
                }
            }
            else if (x < 3 * w + 80 && y < 3 * h + 80) {
                if (this.grid[2][2] == '') {
                    this.grid[2][2] = c;
                    played = true;
                }
            }
        }
        if(played) this.winner = this.checkGameOver();
        return (played);
    }

    this.checkGameOver = function(){
        if(this.grid[0][0] != ''){
            if(this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2]){
                this.gameOver = true;
                return (this.grid[0][0]);
            }
            else if(this.grid[0][0] == this.grid[0][1] && this.grid[0][1] == this.grid[0][2]){
                this.gameOver = true;
                return (this.grid[0][0]);
            }
            else if(this.grid[0][0] == this.grid[1][0] && this.grid[1][0] == this.grid[2][0]){
                this.gameOver = true;
                return (this.grid[0][0]);
            }
        }
        if(this.grid[0][1] != ''){
            if(this.grid[0][1] == this.grid[1][1] && this.grid[1][1] == this.grid[2][1]){
                this.gameOver = true;
                return (this.grid[0][1]);
            }
        }
        if(this.grid[0][2] != ''){
            if(this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0]){
                this.gameOver = true;
                return (this.grid[0][2]);
            }
            else if(this.grid[0][2] == this.grid[1][2] && this.grid[1][2] == this.grid[2][2]){
                this.gameOver = true;
                return (this.grid[0][2]);
            }
        }
        if(this.grid[1][0] != ''){
            if(this.grid[1][0] == this.grid[1][1] && this.grid[1][1] == this.grid[1][2]){
                this.gameOver = true;
                return (this.grid[1][0]);
            }
        }
        if(this.grid[2][0] != ''){
            if(this.grid[2][0] == this.grid[2][1] && this.grid[2][1] == this.grid[2][2]){
                this.gameOver = true;
                return (this.grid[2][0]);
            }
        }
    }
}