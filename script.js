let playerTurn = "X"
let gameOver = false
// function to change turn

const changeTurn = () =>{

return  playerTurn === "X"?"0" : "X" ;

}

// Function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
           playerTurn = ""
        }
    })
}

// Game Logic 


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = playerTurn;
            playerTurn = changeTurn();
           
            checkWin();
            if (!gameOver){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " +playerTurn;
               
            } 
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    playerTurn = "X"; 
    gameOver = false
   
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
   
})
