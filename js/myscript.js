const playButton = document.querySelector('button');
const gridWrapper = document.querySelector('div.grid-wrapper');
const difficultySelect = document.querySelector('select');

playButton.addEventListener('click', function () {
    gridWrapper.innerHTML = ' ';
    gridWrapper.classList.add('black-border')
    difficulty = difficultySelect.value;

    if (difficulty == 1) {

        cellGenerator (100, 'grid-cell', 'difficulty-1-cell-width', 'clicked-cell', gridWrapper);

    } else if (difficulty == 2) {

        cellGenerator (81, 'grid-cell', 'difficulty-2-cell-width', 'clicked-cell', gridWrapper);

    } else {

        cellGenerator (49, 'grid-cell', 'difficulty-3-cell-width', 'clicked-cell', gridWrapper);

    }
})


/* FUNCTIONS */

/**
 * This function generates a set number of empty divs inside a container, applies 2 css classes to them, plus an additional class that is applied only when clicking on the div.
 * @param {*} divNumber The number of the divs you want to generate.
 * @param {*} firstClass The name of the first class that will be added to the created div.
 * @param {*} secondClass The name of the second class that will be added to the created div.
 * @param {*} clickClass The name of the class that will be added to the div only when clicking on him.
 * @param {*} divContainer The container inside which the divs will be created.
 */
function cellGenerator (divNumber, firstClass, secondClass, clickClass, divContainer) {

    for (let i = 1; i <= divNumber; i++) {
            const cell = document.createElement('div');
            cell.innerHTML = [i];
            cell.classList.add(firstClass, secondClass);
            
            cell.addEventListener('click', function () {
                cell.classList.add(clickClass);
                console.log("Hai cliccato la cella n° " + [i])
            })
            
            divContainer.appendChild(cell);
        }
}