const containerDiv = document.querySelector('#container');
const containerDivSize = 400;

for (i = 0; i < 256; i++) {
    let gridSquareDiv = document.createElement('div');
    gridSquareDiv.classList.add('gridSquare');
    containerDiv.appendChild(gridSquareDiv);
}

let gridItems = document.querySelectorAll('.gridSquare');

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", function(){
        this.style.background = "black";
    });
});

const newBoard = document.querySelector('#newBoard');

newBoard.addEventListener("click", function(){
    
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
    
    let userIn = parseInt(prompt("How many squares for the board? (MAX 100)"));

    if (userIn > 100) {
        userIn = 100;
    }

    let squareAmt = userIn * userIn;

    console.log(userIn);
    console.log(squareAmt);

    for (i = 0; i < squareAmt; i++) {
        let gridSquareDiv = document.createElement('div');
        gridSquareDiv.classList.add('gridSquare');
        containerDiv.appendChild(gridSquareDiv);
    }

    containerDiv.style.gridTemplateColumns = "repeat(" + userIn + ", " + (400/userIn) + "px)";
    containerDiv.style.gridTemplateRows = "repeat(" + userIn + ", " + (400/userIn) + "px)";

    gridItems = document.querySelectorAll('.gridSquare');
    
    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseover", function(){
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            this.style.background = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
        });
    });

});