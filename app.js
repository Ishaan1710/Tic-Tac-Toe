
console.log("Welcome to Tic Tac Toe");
let turnSnd = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isOver = false;
let count = 0;
const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const changeTurn = ()=> {
    return turn === "X" ? "O" : "X"
}

//Check winner
const checkWinner = () => {
    let btntext = document.getElementsByClassName('btn-text');
    conditions.forEach(e => {
        if((btntext[e[0]].innerText === btntext[e[1]].innerText) &&(btntext[e[2]].innerText === btntext[e[1]].innerText) && (btntext[e[0]].innerText !== '')){
            isOver = true;
            gameover.play();
            document.getElementById('orig-bu').style.width = "0px";
            document.getElementById('orig-du').style.width = "0px";
            if(btntext[e[0]].innerText === 'X')
            {
                document.querySelector('.info').innerText = "Bubu won";
                document.getElementById('buwin').style.width = "100px";
                document.getElementById('buwin').style.height = "100px";
                document.getElementById('dulose').style.width = "100px";
                document.getElementById('dulose').style.height = "100px";
            }else{
                document.querySelector('.info').innerText = "Dudu won";
                document.getElementById('duwin').style.width = "100px";
                document.getElementById('duwin').style.height = "100px";
                document.getElementById('bulose').style.width = "100px";
                document.getElementById('bulose').style.height = "100px";
            }
        }
    })
}

//Game

let btns = document.getElementsByClassName("game-btn");
Array.from(btns).forEach(element => {
    let btntext = element.querySelector('.btn-text');
    element.addEventListener('click', ()=>{
        if(btntext.innerText === ''){
            btntext.innerText = turn;
            turn = changeTurn();
            turnSnd.play();
            checkWinner();
            count++;
            console.log(count);
            if(!isOver && count < 9){
                if(turn === "X"){
                    document.getElementsByClassName("info")[0].innerText = "Bubu's turn";
                }else{
                    document.getElementsByClassName("info")[0].innerText = "Dudu's turn";
                }
            }else if(count === 9 && !isOver){
                document.getElementsByClassName("info")[0].innerText = "Game drawn!!!";
                gameover.play();
            }
        }
    })
})

function reset(){
    let btntext = document.getElementsByClassName('btn-text');
    for(var i=0; i<9; i++){
        btntext[i].innerText = '';
    }
    document.getElementById('orig-bu').style.width = "100px";
    document.getElementById('orig-du').style.width = "100px";
    document.getElementById('buwin').style.width = "0px";
    document.getElementById('dulose').style.width = "0px";
    document.getElementById('duwin').style.width = "0px";
    document.getElementById('bulose').style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Bubu's turn";
    turn = "X";
    count = 0;
    isOver = false;
}
