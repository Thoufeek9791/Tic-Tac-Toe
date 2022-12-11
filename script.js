const boxes = document.getElementsByClassName("gradient");
console.log(boxes.item(0));
let isSecondClick = false;

boxesArr = [...boxes];
console.log(boxesArr);
console.log(typeof boxesArr);



boxesArr.forEach((element) => {
  element.addEventListener("click", () => {
    if (!isSecondClick) {
      element.innerText = "X";
      element.classList.remove("bg-light");
      element.classList.add("bg-danger", "gradient-applier");
      isSecondClick = true;
    } else {
      element.innerText = "O";
      element.classList.remove("bg-light");
      element.classList.add("bg-success", "gradient-applier");
      isSecondClick = false
    }
  });
});

// boxes.item(i).innerText = "X"
//         boxes.item(i).classList.remove("bg-light")
//         boxes.item(i).classList.add("bg-danger","gradient-applier")
