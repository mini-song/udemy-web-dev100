let anchorElemnet = document.getElementById('external-link');
anchorElemnet.href = 'https://google.com';

anchorElemnet = document.querySelector('p a');
anchorElemnet = 'https://google.com';

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

//console.dir(document);

let h1Element = document.body.children[0];
h1Element = document.body.firstElementChild;

console.dir(h1Element)

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let h1ElementById = document.getElementById('h1')
console.dir(h1ElementById)

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

let secondP = document.querySelector('p:nth-of-type(2)');
console.dir(secondP);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

secondP.textContent = 'Change';

let newA = document.createElement('a');

let firstP = document.querySelector('p');
firstP.append(newA);

newA.href = 'https://google.com';
newA.textContent = 'link'

h1Element.remove()

firstP = document.getElementById('first');

firstP.parentElement.append(firstP); //이동하는 방법(삭제(자동) - append)

console.log(firstP.innerHTML);