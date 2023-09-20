function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("status").checked;

  const formData = {
    name: name,
    email: email,
    number: number,
    password: password,
    status: status,
  };

  return formData;
}
// ---------------------------------- //
function isNumber(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (isNaN(inputString[i])) {
      return false;
    }
  }
  return true;
}
// ---------------------------------- //
function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}
// ------------------------------------//
function validateFormData(formData) {
  if (
    formData.name &&
    formData.email &&
    formData.password &&
    isNumber(formData.number) &&
    checkboxIsChecked(formData.status)
  ) {
    return true;
  } else {
    return false;
  }
}
// ----------------------------------------//
function submit() {
  const formData = handleGetFormData();
  const y = document.getElementById("register-notification");
  if (validateFormData(formData)) {
    document.getElementById("warning").textContent = "";
    y.className = "show";
    setTimeout(() => {
      y.className = y.className.replace("show", "");
    }, 3000);
  } else {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  }
  console.log(formData);
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
