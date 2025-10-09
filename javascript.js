const gridContainer = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".input");
const colorBtn = document.querySelector(".color");
const darkeningBtn = document.querySelector(".darkening");
const clearBtn = document.querySelector(".clear");

// create base 16x16 grid
for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.addEventListener("mouseenter", () => {
    let color = getRandomRgbColor();
    grid.style.backgroundColor = color;
    });

    gridContainer.appendChild(grid);
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

    // remove old grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // create new grid
    for (let i = 0; i < (newGridSize * newGridSize); i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        grid.addEventListener("mouseenter", () => {
        let color = getRandomRgbColor();
        grid.style.backgroundColor = color;
        });

        let size = 640 / newGridSize + "px";
        grid.style.height = size;
        grid.style.flex = `0 0 ${size}`;

        gridContainer.appendChild(grid);
    }
});

colorBtn.addEventListener("click", () => {
    let newColor = prompt("Enter a color you want to use");

    if (CSS.supports("color", newColor)) {
        grid.addEventListener("mouseenter", () => {
            grid.forEach(square => {
                square.style.backgroundcolor = newColor;
            });
        });
    }
    else {
        alert("Invalid color");
        return;
    }
});