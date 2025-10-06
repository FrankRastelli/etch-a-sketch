const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector(".input");

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

btn.addEventListener("click", () => {
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

        let gridContainerSize = 640;
        let gridSquareSize = 640/newGridSize;
        let unit = "px";
        let sizeInPixels = gridSquareSize + unit;
        grid.style.height = sizeInPixels;
        grid.style.flex = `0 0 ${sizeInPixels}`;

        gridContainer.appendChild(grid);
    }
});