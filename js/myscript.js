const playButton = document.querySelector('button');
const gridWrapper = document.querySelector('div.grid-wrapper');
const difficultySelect = document.querySelector('select');

playButton.addEventListener('click', function () {
    gridWrapper.innerHTML = ' ';
    gridWrapper.classList.add('black-border')
    difficulty = difficultySelect.value;

    if (difficulty == 1) {

        for (let i = 1; i <= 100; i++) {
            const gridCell = createDiv('grid-cell', 'difficulty-1-cell-width');
            gridCell.innerHTML = [i];
            
            gridCell.addEventListener('click', function () {
                gridCell.classList.add('clicked-cell');
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            gridWrapper.appendChild(gridCell);
        }
    } else if (difficulty == 2) {

        for (let i = 1; i <= 81; i++) {
            const gridCell = createDiv('grid-cell', 'difficulty-2-cell-width');
            gridCell.innerHTML = [i];
            
            gridCell.addEventListener('click', function () {
                gridCell.classList.add('clicked-cell');
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            gridWrapper.appendChild(gridCell);
        }
    } else {

        for (let i = 1; i <= 49; i++) {
            const gridCell = createDiv('grid-cell', 'difficulty-3-cell-width');
            gridCell.innerHTML = [i];
            
            gridCell.addEventListener('click', function () {
                gridCell.classList.add('clicked-cell');
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            gridWrapper.appendChild(gridCell);
        }
    }
})

/* FUNCTIONS */

/**
 * This function creates an empty div in html with two css classes.
 * @param {*} firstClass The first css class that the div will have.
 * @param {*} secondClass The second css class that the div will have.
 * @returns An empty div with two classes.
 */
function createDiv (firstClass, secondClass) {
    const div = document.createElement('div');
    div.classList.add(firstClass, secondClass);
    return div;
}