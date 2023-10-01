let paragraphElement = document.querySelector('p');

function changePargraphText() {
    paragraphElement.textContent = 'Clicked!'
}

paragraphElement.addEventListener('click',changePargraphText);

let inputElement = document.querySelector('input')

function retrieveUserInput(event){
    let enteredText = inputElement.value;
    // let enteredText = event.data
    console.log(enteredText);
    // console.log(event); //이 정보가 어떻게 출력되는건지 모르겠네. -> 약속(국룰) 첫번째 인자는 무조건 event이고 다른 parameter를 사용하려면 binding을 하거나 하나 변수를 더 정의해서 값을 넘겨줘야 함.
}
inputElement.addEventListener('input',retrieveUserInput);