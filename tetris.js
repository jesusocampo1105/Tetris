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