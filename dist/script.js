const selection = document.getElementsByName("two-truths-one-lie");

document.getElementById("submitButton").onclick = function () {
  gameResult();
};

function gameResult() {
  if (selection[0].checked) alert("You selected the lie!");
  else if (selection[1].checked) alert("You selected a truth... Try again?");
  else if (selection[2].checked) alert("You selected a truth... Try again?");
  else alert("No option Selected. Please try again.");
}