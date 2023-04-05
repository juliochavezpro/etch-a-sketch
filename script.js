const container = document.getElementById('container');

const gridButton = document.getElementById('grid-btn');
const clearButton = document.getElementById('clear-btn');

gridButton.addEventListener("click", createGrid);


function createGrid(tot) {
    tot = prompt('How big is the grid?');
    for (let i=0; i<tot; i++) {
        const box = document.createElement('div');
        container.appendChild(box);
        box.classList.add('box');
        box.style.borderColor = "black";
        box.addEventListener("mouseover", addHover)
        
        function addHover() {
            box.classList.add('hover');
        };

        clearButton.addEventListener("click", clearGrid)

        function clearGrid() {
            box.classList.remove('hover');
        }

    };
};




