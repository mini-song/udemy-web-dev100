const player1EditElement = document.getElementById('player1-edit-btn')
const player2EditElement = document.querySelector('#player2-edit-btn');


function playerEditOverlayOpen(event){
    return console.log(event.srcElement); //하나의 함수로 구현 가능 -> parent element 추적 가능
}

player1EditElement.addEventListener('click', playerEditOverlayOpen);