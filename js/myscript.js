const playButton = document.querySelector('button');
const gridWrapper = document.querySelector('div.grid-wrapper');

playButton.addEventListener('click', function () {
    gridWrapper.innerHTML = ' ';

    for (let i = 1; i <= 100; i++) {
        const gridCell = createDiv();
        gridCell.innerHTML = [i];
        gridCell.classList.add('grid-cell');
        gridWrapper.appendChild(gridCell);
    }

    gridCell.classList.add('grid-cell');
    gridWrapper.appendChild(gridCell);
})


/* FUNCTIONS */

/**
 * This function creates an empty div in html.
 * @returns An empty div.
 */
function createDiv () {
    const div = document.createElement('div');
    return div;
}