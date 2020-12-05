const btnROCK=document.querySelector('#btnRock');
const btnPAPER=document.querySelector('#btnPaper');
const btnSCISSORS=document.querySelector('#btnScissors');
const pcChoice=document.querySelector('#cpChoice');
const plChoice=document.querySelector('#playerChoice');
const round=document.querySelector('#round');
const pcScore=document.querySelector('#cpScore');
const plScore=document.querySelector('#plScore');

function computerPlay(){
    const posMoves=['Rock', 'Paper', 'Scissors'];
    computerMove=posMoves[Math.round(Math.random()*(posMoves.length-1))];
    return computerMove;
}

function palyRound (playerMove, pcMove){
    switch(true){
        case playerMove==="Rock"&&pcMove==="Scissors":
        case playerMove==="Scissors"&&pcMove==="Paper":
        case playerMove==="Paper"&&pcMove==="Rock":
        plChoice.textContent="Your choice"
    }
}
