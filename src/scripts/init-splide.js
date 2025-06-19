import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".libros").forEach((el) => {
    new Splide(el, {
      perPage: 6,
      gap: "1.5rem",
      pagination: false,
      arrows: true,
      classes: {
        arrows: "splide__arrows libros__arrows",
        arrow: "splide__arrow libros__arrow !bg-white",
        prev: "splide__arrow--prev -ml-16",
        next: "splide__arrow--next -mr-16",
      },
      breakpoints: {
        1024: { perPage: 5, arrows: false },
        768: { perPage: 3 },
        480: { perPage: 2.5 },
        400: { perPage: 1.5 },
      },
    }).mount();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".valoracions").forEach((el) => {
    new Splide(el, {
      perPage: 6,
      gap: "1.5rem",
      pagination: false,
      arrows: false,
      breakpoints: {
        1024: { perPage: 5 },
        768: { perPage: 3 },
        480: { perPage: 2.5 },
        400: { perPage: 1.5 },
      },
    }).mount();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splide", {
    perPage: 5,
    gap: "2rem",
    pagination: false,
    arrows: false,
    breakpoints: {
      1024: { perPage: 4 },
      768: { perPage: 3 },
      480: { perPage: 2.5 },
      400: { perPage: 1.5 },
    },
  }).mount();
});
