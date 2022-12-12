const boxes = document.getElementsByClassName("gradient");
console.log(boxes.item(0));
let isSecondClick = false;
let player_X_points = 1;
let player_Y_points = 3;

boxesArr = [...boxes];
console.log(boxesArr);
console.log(typeof boxesArr);



boxesArr.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    console.log(element);
    element.classList.remove("bg-light");
    element.classList.add("pe-none");
    if (!isSecondClick) {
      element.innerText = "X";
      element.classList.add("bg-danger", "gradient-applier");
      isSecondClick = true;
      isPlayerWon(element);
    } else {
      element.innerText = "O";
      element.classList.add("bg-success", "gradient-applier");
      isSecondClick = false;
    }
  });
});

// boxes.item(i).innerText = "X"
//         boxes.item(i).classList.remove("bg-light")
//         boxes.item(i).classList.add("bg-danger","gradient-applier")
