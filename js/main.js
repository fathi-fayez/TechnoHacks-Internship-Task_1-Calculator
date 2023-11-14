let buttons = document.getElementsByTagName("span");
let screenContainer = document.getElementById("screen");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let equlButton = document.getElementById("equl");

// display numbers on screen function
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    screenContainer.innerHTML += buttons[i].innerHTML;
  };
}

// clean the screen funtion
clearButton.onclick = function () {
  screenContainer.innerHTML = "";
};

// delete last number of the screen funtion
deleteButton.onclick = function () {
  screenContainer.innerHTML = screenContainer.innerHTML.slice(0, -1);
};

// Evaluates funtion
equlButton.onclick = function () {
  screenContainer.innerHTML = eval(screenContainer.innerHTML);
};
