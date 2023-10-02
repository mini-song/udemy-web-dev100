const textboxElement = document.getElementById('inputbox');

const counterElement = document.getElementById('counter');

function textboxElementInput(){
    const textBoxLength = textboxElement.value.length; 
    counterElement.innerHTML = 60 - textBoxLength + '/60';
    if(60 - textBoxLength<10){
        textboxElement.style.background = 'blue';
    }
}

textboxElement.addEventListener('input', textboxElementInput);