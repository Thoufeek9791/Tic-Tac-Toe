const boxes = document.getElementsByClassName("gradient");
const reset = document.getElementsByClassName("btn");
console.log(boxes.item(0));
let isSecondClick = false;
let player_X_points = 0;
let player_Y_points = 0;

boxesArr = [...boxes];
console.log(boxesArr);
console.log(typeof boxesArr);

function isPlayerWon(element) {
  if (player_X_points === 3) {
  }
}

boxesArr.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    console.log(element);
    element.classList.remove("bg-light");
    element.classList.add("pe-none");
    if (!isSecondClick) {
      element.innerText = "X";
      element.classList.add("bg-danger", "gradient-applier");
      player_X_points += 1;
      isSecondClick = true;
      isPlayerWon(element);
    } else {
      element.innerText = "O";
      element.classList.add("bg-success", "gradient-applier");
      isSecondClick = false;
    }
  });
});

reset.add;

// boxes.item(i).innerText = "X"
//         boxes.item(i).classList.remove("bg-light")
//         boxes.item(i).classList.add("bg-danger","gradient-applier")
