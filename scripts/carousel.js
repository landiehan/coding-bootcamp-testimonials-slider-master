/**
 * this code only works when there are two slides. 🙃
 */

const slides = document.querySelectorAll(".carousel__slide");
const prevBtn = document.querySelector(".carousel__btn-prev");
const nextBtn = document.querySelector(".carousel__btn-next");

let current = 0;

prevBtn.addEventListener("click", () => {
  let oldCurrent = current;
  current = current === 0 ? 1 : 0;

  // slides[current].classList = "carousel__slide carousel__slide--prev";
  slides[current].classList = "carousel__slide carousel__slide--active";
  slides[oldCurrent].classList.replace("carousel__slide--active", "carousel__slide--next");
})

nextBtn.addEventListener("click", () => {
  let oldCurrent = current;
  current = current === 0 ? 1 : 0;

  // slides[current].classList = "carousel__slide carousel__slide--next";
  
  slides[current].classList = "carousel__slide carousel__slide--active";
  slides[oldCurrent].classList.replace("carousel__slide--active", "carousel__slide--prev");
})