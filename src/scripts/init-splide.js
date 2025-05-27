import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splide", {
    perPage: 5,
    gap: "2rem",
    pagination: false,
    arrows: false,
    breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1 },
    },
  }).mount();
});
