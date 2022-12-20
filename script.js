const boxes = document.getElementsByClassName("gradient");
const reset = document.getElementsByClassName("btn");
const win = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
console.log(boxes.item(0));
let isSecondClick = false;
let player_X_points = 0;
let player_Y_points = 0;

boxesArr = [...boxes];
console.log(boxesArr);
console.log(typeof boxesArr);

function isPlayerXWon(element) {
  let playerX = element.getAttribute('data-index');
  if(playerX === 0) {
    
  }
}

function isPlayerYWon(element) {
  let playerY = element.getAttribute('data-index');
  console.log("player y attribute", playerY);
}

boxesArr.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    console.log(element);
    element.classList.remove("bg-light", "bg-dark");
    element.classList.add("pe-none");
    if (!isSecondClick) {
      element.innerText = "X";
      element.classList.add("bg-danger", "gradient-applier");
      player_X_points += 1;
      isSecondClick = true;
      isPlayerXWon(element);
    } else {
      element.innerText = "O";
      element.classList.add("bg-success", "gradient-applier");
      isSecondClick = false;
      isPlayerYWon(element)
    }
  });
});



// boxes.item(i).innerText = "X"
//         boxes.item(i).classList.remove("bg-light")
//         boxes.item(i).classList.add("bg-danger","gradient-applier")
