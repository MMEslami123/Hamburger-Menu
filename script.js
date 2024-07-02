const div = document.querySelector("div.sidebar");
const burger = document.querySelector("div.hamb");
const span = document.querySelectorAll("span");
for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", () => {
    div.classList.toggle("side");
    burger.classList.toggle("burger");
    span[0].classList.toggle("first");
    span[1].classList.toggle("second");
    span[2].classList.toggle("third");
  });
}