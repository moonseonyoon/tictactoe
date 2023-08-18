const boxes = document.querySelectorAll(".box");

let input = "X";
let i = 0;
for (let box of boxes) {
  box.addEventListener("click", function () {
    i++;
    if (box.textContent) return;
    if (input == "X") {
      box.textContent = "X";
      input = "O";
    } else {
      box.textContent = "O";
      input = "X";
    }
    winningNum();
    counter();
  });
}

// const win1 = [0, 1, 2];
// const win2 = [3, 4, 5];
// const win3 = [6, 7, 8];
// const win4 = [0, 3, 6];
// const win5 = [1, 4, 7];
// const win6 = [2, 5, 8];
// const win7 = [0, 4, 8];
// const win8 = [2, 4, 6];

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const text = document.createElement("h1");
const h1 = document.querySelector("h1");
function winningNum() {
  for (let win of wins) {
    if (
      boxes[win[0]].innerHTML != "" &&
      boxes[win[1]].innerHTML != "" &&
      boxes[win[2]].innerHTML != "" &&
      boxes[win[0]].innerHTML == "X" &&
      boxes[win[1]].innerHTML == "X" &&
      boxes[win[2]].innerHTML == "X"
    ) {
      alert("YOU WON PERIOD");
      return;
    } else if (
      boxes[win[0]].innerHTML != "" &&
      boxes[win[1]].innerHTML != "" &&
      boxes[win[2]].innerHTML != "" &&
      boxes[win[0]].innerHTML == "O" &&
      boxes[win[1]].innerHTML == "O" &&
      boxes[win[2]].innerHTML == "O"
    ) {
      alert("YOU WON PERIOD");
      return;
    }
  }
}

// condition: have to check if it's the same text (x or o) + if its NOT an empty string

function counter() {
  for (i = 0; i < 9; i++) {
    if (i == 9) {
      console.log("draw!");
      return;
    }
  }
}

// for (let box of boxes) {
//   box.addEventListener("click", function () {
//     box.classList.add("player1");
//     if (box.classList.contains("player1")) {
//       box.textContent = "X";
//       box.classList.remove("player1");
//     } else {
//       box.textContent = "O";
//       box.classList.add("player1");
//     }
//   });
//   console.log(box);
// }
