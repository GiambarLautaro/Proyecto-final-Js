//INDEX

//TESTIMONIALS AND RESOURCES

ScrollReveal().reveal(".carousel-inner");
ScrollReveal().reveal(".testimonio1", { delay: 300 });
ScrollReveal().reveal(".testimonio2", { delay: 300 });
ScrollReveal().reveal(".testimonio3", { delay: 300 });

// PROGRAMS

function send() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your message has been sent ",
    showConfirmButton: false,
    timer: 1500,
  });
}

function checkout() {
  let timerInterval;
  Swal.fire({
    title: "You are just one step away!",
    html: "You will be redirected to our checkout page in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

//ABOUT US

ScrollReveal().reveal(".caja");
ScrollReveal().reveal(".img-fluid", { delay: 300 });

// HELP

document.getElementsByClassName("contact-box");

function checkform() {
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("textarea").value;
  console.log(fullName, phone, email, message);

  document.getElementById("resultado").innerHTML =
    "Thank you," +
    " " +
    fullName +
    " " +
    " The information Regarding your Message will be sent to " +
    email +
    " " +
    "soon.";

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your message has been sent ",
    showConfirmButton: false,
    timer: 1500,
  });
}

// function send() {
//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Your message has been sent ",
//     showConfirmButton: false,
//     timer: 1500,
//   });
// }

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
