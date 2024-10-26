let checkButtons = Array.from(document.getElementsByClassName("checkbutton"));
checkButtons = checkButtons.concat(Array.from(document.getElementsByClassName("checkbutton-android")))

checkButtons.forEach((checkButton) => {
  checkButton.addEventListener("click", function () {
    const cball = checkButton.getElementsByClassName("cball")[0];

    const currentLeft = parseInt(cball.style.left) || 0;

    if (currentLeft === 0) {
      cball.style.backgroundColor = "limegreen";
      cball.style.left = `${checkButton.clientWidth - cball.clientWidth}px`;
    } else {
      cball.style.backgroundColor = "gray";
      cball.style.left = "0px";
    }
  });
});

function isCheckButtonChecked(checkButton) {
  const cball = checkButton.getElementsByClassName("cball")[0];
  
  const currentLeft = parseInt(cball.style.left) || 0;

  return currentLeft > 0; // Returns true if checked
}

/********************************/

const closeButtons = Array.from(
  document.getElementsByClassName("window-close")
);

closeButtons.forEach((btn) => {
  if (!btn.hasAttribute("data-root")) {
    // exit because it dont have root attr
    return;
  }

  const root = btn.getAttribute("data-root");

  btn.addEventListener("click", function () {
    document.getElementsByClassName(root)[0].style.display = "none";
  });
});

/*****************************/
let buttons = Array.from(document.getElementsByClassName("btn"));
const window_10_buttons = Array.from(
  document.getElementsByClassName("btn-win10")
);
const android_buttons = Array.from(
  document.getElementsByClassName("btn-android")
)

buttons = buttons.concat(window_10_buttons);
buttons = buttons.concat(android_buttons);

buttons.forEach((btn) => {
  if (!btn.hasAttribute("data-opens")) {
    // exit because it dont have opens attr
    return;
  }

  const opens = btn.getAttribute("data-opens");

  btn.addEventListener("click", function () {
    document.getElementsByClassName(opens)[0].style.display = "inline-block";
  });
});
