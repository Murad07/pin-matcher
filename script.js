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

function resetStage() {
  totalTry = 3;
  tryLeft.innerText = totalTry;
  userInput.value = '';
  hideAllMessage();
}

// Rendom digit generate part
const generateBtn = document.getElementById('generate-btn');
const generatedPin = document.getElementById('show-pin');

generateBtn.addEventListener('click', function () {
  generatedPin.value = randomRange(1000, 9999);
  resetStage();
});

function randomRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// User digit pad part. Type digit for unlock
numberKeyPad.addEventListener('click', function (e) {
  hideAllMessage();
  let target = e.target;
  keyPadInput(target);
});

function keyPadInput(target) {
  if (target.classList.contains('button')) {
    if (target.dataset.type == 'clear') {
      userInput.value = '';
    } else if (target.dataset.type == 'backSpace') {
      let inputString = userInput.value;
      userInput.value = inputString.slice(0, inputString.length - 1);
    } else {
      const result = target.innerHTML;
      userInput.value += result;
    }
  }

  if (target.classList.contains('submit-btn')) {
    varifyUserInput();
  }
}

function varifyUserInput() {
  if (userInput.value == generatedPin.value) {
    successNotify.style.display = 'block';
  } else {
    wrongNotify.style.display = 'block';
    totalTry--;
    tryLeft.innerText = totalTry;
    if (totalTry == 0) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = '#3d4153';
    }
  }
}
