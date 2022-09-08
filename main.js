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
