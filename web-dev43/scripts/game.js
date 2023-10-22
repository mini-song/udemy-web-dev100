function startNewGame(){
    if (players[0].name ==='' || players[1].name ==='')
    {
        alert('Please set custom players name for both players!');
        return
    }
    activeGamePlayerName.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if (activePlayer ===0){
        activePlayer =1;
    }
    else{
        activePlayer = 0;
    }
    activeGamePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event){
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    
    if (gameData[selectedColumn][selectedRow] >0){
        alert('Please select empty field.')
        return
    }
    
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedColumn][selectedRow] = activePlayer + 1;

    switchPlayer();
}