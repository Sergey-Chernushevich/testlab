const validatePhoneNumber = (phoneNumber) => {
  const trimmedNumber = String(phoneNumber).trim();
  if (!trimmedNumber || trimmedNumber.length < 7) {
    return false;
  }
  const sanitizedNumber = trimmedNumber.replace(/[^+\d]/g, "");
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
  return phoneRegex.test(sanitizedNumber);
};

const registrationForm = document.querySelector(".form");
const formInputs = registrationForm.querySelectorAll("input");
const button = registrationForm.querySelector(".form__button");
const checkbox = registrationForm.querySelector(".agreementInput");
const nameInput = document.getElementById("name");
const telInput = document.getElementById("tel");

checkbox.addEventListener("change", () => {
  button.disabled = !checkbox.checked;
  console.log(checkbox.checked);
});

formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    const attributeValue = input.getAttribute("name");
    switch (attributeValue) {
      case "name":
        if (this.value.length < 1) {
          this.classList.add("invalid");
        } else {
          this.classList.add("filled");
        }
        break;
      case "tel":
        if (!validatePhoneNumber(this.value)) {
          this.classList.add("invalid");
        } else {
          this.classList.add("filled");
        }
        break;
      default:
        break;
    }
  });
});

formInputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.classList.remove("invalid");
    this.classList.remove("filled");
  });
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    field1: nameInput.value,
    field2: telInput.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Успех:", data);
      alert("Форма успешно отправлена!");
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке формы.");
    });
});
