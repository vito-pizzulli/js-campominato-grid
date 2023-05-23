const playButton = document.querySelector('button');
const gridWrapper = document.querySelector('div.grid-wrapper');
const difficultySelect = document.querySelector('select');

playButton.addEventListener('click', function () {
    gridWrapper.innerHTML = ' ';
    gridWrapper.classList.add('black-border')
    difficulty = difficultySelect.value;

    if (difficulty == 1) {

        for (let i = 1; i <= 100; i++) {
            const gridCell = createDiv();
            gridCell.innerHTML = [i];
            gridCell.classList.add('grid-cell');
            
            gridCell.addEventListener('click', function () {
                gridCell.classList.add('clicked-cell');
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            gridCell.classList.add('difficulty-1-cell-width');
            gridWrapper.appendChild(gridCell);
        }
    } else if (difficulty == 2) {

        for (let i = 1; i <= 81; i++) {
            const gridCell = createDiv();
            gridCell.innerHTML = [i];
            gridCell.classList.add('grid-cell');
            
            gridCell.addEventListener('click', function () {
                gridCell.classList.add('clicked-cell');
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            gridCell.classList.add('difficulty-2-cell-width');
            gridWrapper.appendChild(gridCell);
        }
    } else {

        for (let i = 1; i <= 49; i++) {
            const gridCell = createDiv();
            gridCell.innerHTML = [i];
            gridCell.classList.add('grid-cell');
            
            gridCell.addEventListener('click', function () {
                gridCell.classList.add('clicked-cell');
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            gridCell.classList.add('difficulty-3-cell-width');
            gridWrapper.appendChild(gridCell);
        }
    }
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