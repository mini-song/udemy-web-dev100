const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const restartButton = document.getElementById('restartButton');
const editButtons = document.querySelectorAll('.edit-btn');
const overlay = document.getElementById('overlay');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const player1Display = document.getElementById('player1Display');
const player2Display = document.getElementById('player2Display');
const currentPlayerDisplay = document.getElementById('currentPlayer');
const saveButton = document.getElementById('saveButton');
let currentPlayer = 'X';

function startGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    board.style.pointerEvents = 'auto';
}

function handleClick(e) {
    e.target.textContent = currentPlayer;
    if (checkWin(currentPlayer) || checkDraw()) {
        endGame();
        return;
    }
    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.textContent = currentPlayer === 'X' ? player1NameInput.value : player2NameInput.value;
}

function checkWin(player) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return combo.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent === 'X' || cell.textContent === 'O');
}

function endGame() {
    board.style.pointerEvents = 'none';
    if (checkWin(currentPlayer)) {
        alert(`${currentPlayerDisplay.textContent} wins!`);
    } else if (checkDraw()) {
        alert('It\'s a draw!');
    }
}

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });
});

saveButton.addEventListener('click', () => {
    player1Display.textContent = player1NameInput.value;
    player2Display.textContent = player2NameInput.value;
    currentPlayerDisplay.textContent = currentPlayer === 'X' ? player1NameInput.value : player2NameInput.value;
    overlay.style.display = 'none';
});

restartButton.addEventListener('click', startGame);

startGame();
