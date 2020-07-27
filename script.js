// Initial hide section
const wrongNotify = document.getElementById('notify-wrong');
wrongNotify.style.display = 'none';

const successNotify = document.getElementById('notity-success');
successNotify.style.display = 'none';

// Rendom digit generate part
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', function () {
  document.getElementById('show-pin').value = randomRange(1000, 9999);
  console.log(randomRange(1000, 9999));
});

function randomRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// User digit pad part. Type digit for unlock
const numberKeyPad = document.querySelector('.numbers');
let userInput = document.getElementById('user-input-pin');

numberKeyPad.addEventListener('click', function (e) {
  let target = e.target;

  // Update Input value digit part
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
});
