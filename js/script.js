let squareArea = document.querySelector(".square_area");
const bntPlay = document.getElementById("play");
const selectDifficulty = document.getElementById("select_difficulty");
const messageAlert = document.querySelector(".message_alert");
const btnPlayAgain = document.getElementById("play_again");
const winMessage = document.querySelector(".message_win");
const loseMessage = document.querySelector(".message_lose");
const pointsMessage = document.querySelector(".message_points");
const mainArea = document.querySelector("main")



bntPlay.addEventListener("click", function() {

    squareArea.innerHTML = " ";

    let difficulty = selectDifficulty.value;
    let cells;
    let points = 0;

    if (difficulty == "easy") {
        cells = 100;
    } else if (difficulty == "normal") {
        cells = 81;
    } else if (difficulty == "hard") {
        cells = 49;
    }
    
    let cellsPerRow = Math.sqrt(cells);


    for (let i = 1; i <= cells; i++) {
    
        let square = document.createElement("div");
        square.classList.add("box");
        square.innerHTML = i;
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = `calc(100% / ${cellsPerRow})`;

        squareArea.append(square);

        square.addEventListener("click", function() {
    
            if (arrBombNumbers.includes(i)) {
                square.classList.add("square_bomb");
                messageAlert.classList.add("d-inline-block");
                loseMessage.classList.add("d-block");
                pointsMessage.innerHTML = `${points}`;                
            } else {
                square.classList.add("square_selected");
                points++;
            }
            
        });
        
    }
    
    const arrBombNumbers = [];
    
    for (let i = 0; i < 16; i++) {
        let randomNumber = getRandomNumber(1, cells);
        while (arrBombNumbers.includes(randomNumber)) {
            randomNumber = getRandomNumber(1, cells);
        }
        arrBombNumbers.push(randomNumber);  
    }
    
    console.log(arrBombNumbers);    
    
});
bntPlay.addEventListener("click", function() {

    squareArea.innerHTML = " ";

    let difficulty = selectDifficulty.value;
    let cells;
    let points = 0;

    if (difficulty == "easy") {
        cells = 100;
    } else if (difficulty == "normal") {
        cells = 81;
    } else if (difficulty == "hard") {
        cells = 49;
    }
    
    let cellsPerRow = Math.sqrt(cells);


    for (let i = 1; i <= cells; i++) {
    
        let square = document.createElement("div");
        square.classList.add("box");
        square.innerHTML = i;
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = `calc(100% / ${cellsPerRow})`;

        squareArea.append(square);

        square.addEventListener("click", function() {
    
            if (arrBombNumbers.includes(i)) {
                square.classList.add("square_bomb");
                messageAlert.classList.add("d-inline-block");
                loseMessage.classList.add("d-block");
                pointsMessage.innerHTML = `${points}`;                
            } else {
                square.classList.add("square_selected");
                points++;
            }
            
        });
        
    }
    
    const arrBombNumbers = [];
    
    for (let i = 0; i < 16; i++) {
        let randomNumber = getRandomNumber(1, cells);
        while (arrBombNumbers.includes(randomNumber)) {
            randomNumber = getRandomNumber(1, cells);
        }
        arrBombNumbers.push(randomNumber);  
    }
    
    console.log(arrBombNumbers);    
    
});

btnPlayAgain.addEventListener("click", function() {
    squareArea.innerHTML = " ";
    messageAlert.classList.toggle("d-none");
});




/* FUNCTIONS */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function clicked () {
    this.classList.add("square_selected");
};



// becco la bomba, casella diventa rossa
// tutte le altre bombe vengono svelate
// appare scritta hai perso + punteggio

