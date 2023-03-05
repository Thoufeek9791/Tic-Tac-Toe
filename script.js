const boxes = document.getElementsByClassName("gradient");
const modal = document.getElementById("WonAlertModal");
let isSecondClick = false;
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxesArr = [...boxes];

function isPlayerWon(element) {
  let adjustmentElement = [];
  let player = parseInt(element.getAttribute("data-index"));
  console.log(typeof player);
  win.forEach((outcomes) => {
    if (outcomes.includes(player)) {
      adjustmentElement.push(outcomes);
    }
  });
  adjustmentElement.forEach((myElement) => {
    const isGameWon = myElement.every(
      (index) =>
        element.innerText ===
        document.getElementById(`value-${index + 1}`).innerText
    );
    if (isGameWon) {
      $(document).ready(function () {
        const winner = $(".winner");
        $(".gradient").addClass("pe-none");
        element.innerText === "X"
          ? winner.addClass("bg-danger")
          : winner.addClass("bg-success");
        winner.text(element.innerText);
        $("#WonAlertModal").modal("show");
        $(".gradient").text(" ");
        $(".gradient").removeClass("gradient-applier bg-danger bg-success");
        $(".gradient").addClass("bg-light");
      });
      return;
    }
  });
}

function reset() {
  $(document).ready(function () {
    $(".gradient").removeClass("pe-none");
  });
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
      isSecondClick = true;
      isPlayerWon(element);
      reset();
    } else {
      element.innerText = "O";
      element.classList.add("bg-success", "gradient-applier");
      isSecondClick = false;
      isPlayerWon(element);
      reset();
    }
  });
});
