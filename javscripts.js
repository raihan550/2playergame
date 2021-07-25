var getInputValue = document.getElementById('inputValue');
var returnResult = document.getElementById('currentResult');
var returnHistory = document.getElementById('resultHistory');

window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
  document.getElementById('restart-game').addEventListener('click', resetGame);
};

var randomNumber = Math.floor(Math.random() * 100) + 1;

var historyArray = [];

const playGame = () => {
  var createHistoryElement = document.createElement('div');
  createHistoryElement.classList.add('list-group-item');
  createHistoryElement.innerText = 'You guessed ' + getInputValue.value;
  returnHistory.append(createHistoryElement);

  historyArray.push(getInputValue.value);

  // var index = historyArray.length - 1;
  // var list = "<ul class='list-group'>";
  // while (index >= 0) {
  //   list +=
  //     '<li  class="list-group-item">' +
  //     'You guessed ' +
  //     historyArray[index] +
  //     '</li>';

  //   index -= 1;
  // }

  // list += '</ul>';

  // returnHistory.innerHTML = list;

  console.log(historyArray);
  if (getInputValue.value === '') {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Please Enter no</div>';
  } else if (getInputValue.value > 100) {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Please Enter no between 1 to 100</div>';
  } else {
    if (getInputValue.value > randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too high!</div>';
    } else if (getInputValue.value < randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too low!</div>';
    } else {
      returnResult.innerHTML =
        '<div class="alert alert-success">Awesome job, you got it!</div>';
    }
  }
};

const resetGame = () => {
  returnResult.innerHTML = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  returnHistory.innerHTML = '';
  historyArray = [];
};
