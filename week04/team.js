let turn = 'X';

document.querySelector(".board").addEventListener('touchend', (event) => {
    if (!event.target.textContent) {

        event.target.textContent = turn;
        if (turn == 'X') {
            turn = 'O';
        } else {
            turn = 'X'
        }
    }
})

document.querySelector('button').addEventListener('touchend', () => {
    let elements = document.getElementsByClassName('space');
    let spaces = Array.from(elements);

    spaces.map(space => {
        space.textContent = '';
    })
})