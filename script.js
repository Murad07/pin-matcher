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
