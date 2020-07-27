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

  // Update Input value
  if (target.classList.contains('button')) {
    const result = target.innerHTML;
    console.log(result);
    userInput.value += result;
  }

  // Submit to check varification
  if (target.classList.contains('button')) {
  }
});

function clear(elem, value) {
  return (elem.innerHTML = value);
}
