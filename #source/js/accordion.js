let accordionHeaders = document.getElementsByClassName("accordion__header");

for (let i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
