let squareArea = document.querySelector(".square_area");
const bntPlay = document.querySelector("#play");
const selectDifficulty = document.getElementById('select_difficulty');

bntPlay.addEventListener("click", function() {

    squareArea.innerHTML = " ";

    let difficulty = selectDifficulty.value;
    let cells;

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

        square.addEventListener("click", clicked);
    }
})


function clicked () {
    this.classList.add("square_selected");
}
