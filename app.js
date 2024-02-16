// phone number form
function sendNum() {
  let phoneNumber = document.getElementById("phone").value;
  let clientName = document.getElementById("name").value;

  let body = "Full Name : " + clientName + " <br> Phone Number: " + phoneNumber;
  Email.send({
    SecureToken: "ff2643bc-1c31-4b4c-a0b2-bc83f9fa5297",
    To: "rohitchandna007@gmail.com",
    From: "cu.18bcs2164@gmail.com",
    Subject: "New Enquiry",
    Body: body,
  }).then((message) => (window.location.href = "./thankyou.html"));
}

// Alert Message function()
function message() {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const success = document.getElementById("successMsg");
  const danger = document.getElementById("alertId");
  if (name.value === "" || phone.value === "") {
    danger.style.display = "block";
  } else {
    setTimeout(() => {
      name.value = "";
      phone.value = "";
    }, 3000);
    success.style.display = "block";
    console.log(name.value);
    console.log(phone.value);
    window.location.href = "./thankyou.html";
    // window.open("./download/paras.pdf", "_blank");
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 3000);
}
