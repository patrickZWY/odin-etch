document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('grid-size').addEventListener('click', function() {
        let gridSize = prompt("What is your ideal size? (1-100):", 16);
        gridSize = Math.min(100, Math.max(1, parseInt(gridSize)));
        if (!isNaN(gridSize)) {
            createGrid(gridSize);
        }
    });

    createGrid(16);
});

function createGrid(size) {
    const container = document.getElementById('grids-container');
    container.innerHTML = '';

    for (let index = 0; index < (size * size); index++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        
        for (let num = 0; num < size; num++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            gridItem.addEventListener('mouseover', function() {
                this.classList.add('coloring');
            });

            row.appendChild(gridItem);
        }
        
        container.appendChild(row);
    }
}