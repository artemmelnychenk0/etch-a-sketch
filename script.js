const container = document.querySelector('.container')
const btn = document.querySelector('.button')
let box;

let grid1 = 16
let grid2 = grid1 * grid1;
for (let i = 0; i < `${grid2}`; i++) {
    const content = document.createElement('div')
    content.classList.add('content')
    container.appendChild(content);
}

let boxes = document.querySelectorAll('.content')
paint();

btn.addEventListener('click', () => {
    removePreviousGrid();
    newGame();
    paint();

})

function paint() {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.classList.add('black')
        })
    })
}

function removePreviousGrid() {
    boxes.forEach(box => {
        container.removeChild(box);
    });
}

function newGame() {
    let grid1 = Number(prompt('Provide a number between 1 and 50', 16))
    let grid2 = grid1 * grid1;
    for (let i = 0; i < `${grid2}`; i++) {
        const content = document.createElement('div')
        content.classList.add('content')
        container.appendChild(content);

        container.style.gridTemplateColumns = `repeat(${grid1}, 0fr)`;
        container.style.gridTemplateRows = `repeat(${grid1}, 0fr)`;

        let height = (960 / `${grid1}`) - 2
        content.style.height = `${height}px`
        content.style.width = `${height}px`
    }
    boxes = document.querySelectorAll('.content')
}

