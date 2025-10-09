const gridContainer = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".input");
const randomBtn = document.querySelector(".random");
const colorBtn = document.querySelector(".color");
const darkeningBtn = document.querySelector(".darkening");
const clearBtn = document.querySelector(".clear");

let gridSize = 16;
let mode = "random";
let fixedColor = "white";
//something for darkening

// create base 16x16 grid
for (let i = 0; i < (gridSize * gridSize); i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.addEventListener("mouseenter", () => {
        colorMode(grid);
    });

    gridContainer.appendChild(grid);
}

function colorMode(squares) {
    if (mode === "random") {
        squares.style.backgroundColor = getRandomRgbColor();
    }
    else if (mode === "fixed") {
        squares.style.backgroundColor = fixedColor;
    }
}

function getRandomRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

gridBtn.addEventListener("click", () => {
    let numberOfSquares = prompt("Enter a new grid size", "1-100");
    if (numberOfSquares > 100 || numberOfSquares < 1) {
        alert("Grid size should be between 1-100");
        return;
    }

    let newGridSize = parseInt(numberOfSquares);
    gridSize = newGridSize;

    // remove old grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // create new grid
    for (let i = 0; i < (newGridSize * newGridSize); i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        grid.addEventListener("mouseenter", () => {
            colorMode(grid);
        });

        let size = 640 / newGridSize + "px";
        grid.style.height = size;
        grid.style.flex = `0 0 ${size}`;

        gridContainer.appendChild(grid);
    }
});

randomBtn.addEventListener("click", () => {
    mode = "random";
});

colorBtn.addEventListener("click", () => {
    let newColor = prompt("Enter a color you want to use");
    if (newColor === null) return;

    if (CSS.supports("color", newColor)) {
        fixedColor = newColor;
        mode = "fixed";
    }
    else {
        alert("Invalid color");
        return;
    }
});

// darkening btn ******

clearBtn.addEventListener("click", () => {
    // remove old grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // create new grid
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        grid.addEventListener("mouseenter", () => {
            colorMode(grid);
        });

        let size = 640 / gridSize + "px";
        grid.style.height = size;
        grid.style.flex = `0 0 ${size}`;

        gridContainer.appendChild(grid);
    }
})