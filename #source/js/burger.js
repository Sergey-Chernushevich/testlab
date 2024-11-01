const burgerMenuBtn = document.querySelector(".burgerButton");
const burgerMenuWrapper = document.querySelector(".burgerMenuWrapper");
const burgerNavigationList = burgerMenuWrapper.querySelectorAll(
  ".navigationList__item"
);
const burgerMenu = document.querySelector(".burgerMenu");
const logo = document.querySelector(".header__logoTitle");

document.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;
  burgerMenuWrapper.style.top = `${currentScrollPosition}px`;
});

function toggleBurgerMenu() {
  burgerMenuBtn.classList.toggle("burgerButton_active");
  burgerMenuWrapper.classList.toggle("burgerMenuWrapper_active");
  burgerMenu.classList.toggle("burgerMenu_active");
  logo.classList.toggle("black");

  if (burgerMenuWrapper.classList.contains("burgerMenuWrapper_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

burgerMenuBtn.addEventListener("click", () => {
  toggleBurgerMenu();
});

burgerNavigationList.forEach((item) => {
  item.addEventListener("click", () => {
    toggleBurgerMenu();
  });
});
