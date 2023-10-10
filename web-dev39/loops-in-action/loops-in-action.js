const calculateSumButtonElement = document.querySelector("#calculator button");

function calcuateSum(event) {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;
  let sumUpToNumber = 0;

  for (let i = 1; i <+ enteredNumber + 1; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calcuateSum);

const highlightLinkButtionElement = document.querySelector(
  "#highlight-links > button"
);

function linkHighlight() {
  const anchorElements = document.querySelectorAll("#highlight-links > p > a");
  for (const anchor of anchorElements) {
    anchor.classList.add("highlight");
  }
}

highlightLinkButtionElement.addEventListener("click", linkHighlight);

//Display user data

const dummyUserData = { fistName: "Minseong", laskName: "Park", age: 28 };

const displayUserDataBtnElement = document.querySelector("#user-data > button");

function displayUserData() {
  const informationDataElement = document.querySelector("#output-user-data");

  for (const key in dummyUserData) {
    const newUserDataListElement = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key]
    newUserDataListElement.textContent = outputText;
    informationDataElement.append(newUserDataListElement)
  }
}
displayUserDataBtnElement.addEventListener("click", displayUserData);




const rollDiceBtnElement = document.querySelector('#statistics > button');
const targetNumInput = document.querySelector('#user-target-number');
const x = document.querySelector('#output-total-rolls');
const y = document.querySelector('#output-target-number');
const ul = document.querySelector('#dice-rolls');


function rollDice(){
    return Math.floor(Math.random()*6) + 1;
};

function clickBtin(){
    ul.innerHTML=('');
    let flag = false;
    let count = 0;
    while (!flag)
    {
        count ++;
        const diceNum = rollDice();
        const li = document.createElement('li')
        li.textContent = 'Roll : ' +count + ' num :' + diceNum;
        ul.append(li);

        if (targetNumInput.value == diceNum){
            flag = true;
        }
    }
    x.textContent = count;
    y.textContent = targetNumInput.value;
};



rollDiceBtnElement.addEventListener('click',clickBtin);





