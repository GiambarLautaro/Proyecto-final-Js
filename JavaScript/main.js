//INDEX
function willAdd() {
  document.getElementById("resultado").innerHTML =
    "We will add these options soon!" + " " + "Thank You.";
}
// SWITCH DARK MODE

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  //se guarda modo en localstorage.
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }
});

//obtenemos el modo actual en el cual nos encontramos
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}
