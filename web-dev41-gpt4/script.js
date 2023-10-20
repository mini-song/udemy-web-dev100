const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const restartButton = document.getElementById('restartButton');
const overlay = document.getElementById('overlay');
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');

let currentPlayer = 'X';
let player1Name = 'Player 1';
let player2Name = 'Player 2';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

restartButton.addEventListener('click', restartGame);
editButton.addEventListener('click', openEditOverlay);
saveButton.addEventListener('click', saveNames);

function openEditOverlay() {
    overlay.style.display = 'flex';
}

function saveNames() {
    player1Name = player1NameInput.value || 'Player 1';
    player2Name = player2NameInput.value || 'Player 2';
    overlay.style.display = 'none';
    restartGame(); 
}

function handleClick(event) {
    const cell = event.target;
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer) || checkDraw()) {
        endGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winCombos.some(combo => {
        return combo.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => {
        return cell.textContent === 'X' || cell.textContent === 'O';
    });
}

function endGame() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
    alert((currentPlayer === 'X' ? player1Name : player2Name) + ' 이기셨습니다!');
}

function restartGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
    currentPlayer = 'X';
}
