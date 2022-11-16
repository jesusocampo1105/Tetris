//we connect with the html id
const canvas = document.getElementById("tetris");
const fig = canvas.getContext("2d");
const score = document.getElementById("score");

// color of an empty square and the size of the canvas
const fila = 20;
const columna = column = 10;
const cuadrado = square = 20;
const vacio = "white";

// each square
function drawCuadrado (x,y,color){
    fig.fillStyle = color;
    fig.fillRect(x*cuadrado,y*cuadrado,cuadrado,cuadrado);

    fig.strokeStyle = "black";
    fig.strokeRect(x*cuadrado,y*cuadrado,cuadrado,cuadrado);
}

// board array
let board = [];

// create the rows
for (f = 0; f <fila; f++){
    board[f] = [];
    //create the columns
    for (c = 0; c <columna; c++){
        // each square is empty
        board[f][c] = vacio;
    }
}

// draw board
function drawTablero(){
    for (f = 0; f <fila; f++){
        for (c = 0; c <columna; c++){
            drawCuadrado(c,f,board[f][c]);
        }
    }
}
drawTablero();

// the pieces and their colors
const pieces = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

// move Down the piece

Piece.prototype.moveDown = function(){
    if(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.draw();
    }else{
        // we lock the piece and generate a new one
        this.lock();
        p = randomPiece();
    }
    
}

// move Right the piece
Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.draw();
    }
}

// move Left the piece
Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.draw();
    }
}

// rotate the piece
Piece.prototype.rotate = function(){
    let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
    let kick = 0;
    
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){
            // it's the right wall
            kick = -1; // we need to move the piece to the left
        }else{
            // it's the left wall
            kick = 1; // we need to move the piece to the right
        }
    }
    
    if(!this.collision(kick,0,nextPattern)){
        this.unDraw();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw();
    }
}