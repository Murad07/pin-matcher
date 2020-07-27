// Initial variable
const wrongNotify = document.getElementById('notify-wrong');
const successNotify = document.getElementById('notity-success');

const numberKeyPad = document.querySelector('.numbers');
let userInput = document.getElementById('user-input-pin');

const submitBtn = document.getElementById('submit-btn');

let tryLeft = document.getElementById('numOfTry');
let totalTry = 3;

// Hide Section
function hideAllMessage() {
  wrongNotify.style.display = 'none';
  successNotify.style.display = 'none';
}
hideAllMessage();

// Rendom digit generate part
const generateBtn = document.getElementById('generate-btn');
const generatedPin = document.getElementById('show-pin');

generateBtn.addEventListener('click', function () {
  generatedPin.value = randomRange(1000, 9999);
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = '#495bc3';
  resetStage();
});

function randomRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// Key pad, User Input provide part.
numberKeyPad.addEventListener('click', function (e) {
  hideAllMessage();
  let targetKey = e.target;
  keyPadInput(targetKey);
});

function keyPadInput(targetKey) {
  if (targetKey.classList.contains('button')) {
    // when click on 'C' btn
    if (targetKey.dataset.type == 'clear') {
      userInput.value = '';
    }
    // when click on '<' btn
    else if (targetKey.dataset.type == 'backSpace') {
      let inputString = userInput.value;
      userInput.value = inputString.slice(0, inputString.length - 1);
    }
    // when click on the rest number btn
    else {
      const newDigit = targetKey.innerHTML;
      userInput.value += newDigit;
    }
  }

  if (
    targetKey.classList.contains('submit-btn') &&
    generatedPin.value.length > 0
  ) {
    varifyUserInput();
  }
}

function varifyUserInput() {
  if (userInput.value == generatedPin.value) {
    successNotify.style.display = 'block';
  }
  // when not matching the user input
  else {
    wrongNotify.style.display = 'block';
    totalTry--;
    tryLeft.innerText = totalTry;

    if (totalTry == 0) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = '#3d4153';
    }
  }
}

// Initial Stage Property Reset
function resetStage() {
  totalTry = 3;
  tryLeft.innerText = totalTry;
  userInput.value = '';
  hideAllMessage();
}
