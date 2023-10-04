const textboxElement = document.getElementById('inputbox');

const counterElement = document.getElementById('counter');

function textboxElementInput(){
    const textBoxLength = textboxElement.value.length; 
    counterElement.innerHTML = 60 - textBoxLength + '/60';
    if(60 - textBoxLength<10){
        textboxElement.style.background = 'blue';
    }
    else{
        textboxElement.style.background = 'white';
    }
}

textboxElement.addEventListener('input', textboxElementInput);

const entereUserName = ''; // 0 ('' false 처리)

if (entereUserName){
    console.log('Input is valid!');
}


