//importing confetti

const jsConfetti = new JSConfetti();

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
const boxesArr = [...boxes];

function isPlayerWon(element) {
  let adjustmentElement = [];
  let player = parseInt(element.getAttribute("data-index"));
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
    $(document).ready(function () {
      isBoxesFilled = boxesArr.every(element => element.innerText != '')
      const winner = $(".winner");
      if (isGameWon) {
        
        // $(".gradient").addClass("pe-none");
        winner.text(element.innerText);
        if (element.innerText === "X") {
          winner.removeClass("bg-success");
          winner.addClass("bg-danger");
        } else {
          winner.removeClass("bg-danger");
          winner.addClass("bg-success");
        }

        $("#WonAlertModal").modal("show");
        $(".gradient").text(" ");
        $(".gradient").removeClass(
          "gradient-applier bg-danger bg-success pe-none"
        );
        $(".gradient").addClass("bg-light");
      }
      else if(isBoxesFilled) {
        winner.text('Match Draws')
        $("#WonAlertModal").modal("show");
        $(".gradient").text(" ");
        $(".gradient").removeClass(
          "gradient-applier bg-danger bg-success pe-none"
        );
        $(".gradient").addClass("bg-light");
      }
      
    });
  });
}

function reset() {
  $(document).ready(function () {
    $(".gradient").removeClass(
      " pe-none bg-danger bg-success gradient-applier"
    );
    $(".gradient").addClass("bg-light");
  });
}

boxesArr.forEach((element) => {
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
      isPlayerWon(element);
    }
  });
});
