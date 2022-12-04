function open_close_bar() {
  document.querySelector(".header").classList.toggle("container");
  document.querySelector("header").classList.toggle("header_abs");
  document.querySelector(".header-top").classList.toggle("header-top_abs");
  document.querySelector("nav").classList.toggle("tablet_hidden");
  document.querySelector(".header_logo").classList.toggle("barmenu_logo");
  document
    .querySelector(".close_burger_menu")
    .classList.toggle("dektop_hidden");
  document.querySelector(".main_div").classList.toggle("dimmed_area");
}

const testimonalCards = document.querySelectorAll(".testimonals_card");
let currentCard = null;
function closeReviewPopup(event) {
  event?.stopPropagation();
  testimonalCards[currentCard].classList.remove("review_popup");
  document.querySelector(".main_div").classList.remove("dimmed_area");
}

let i = document.createElement("i");
function showReview(index) {
  testimonalCards.forEach((a) => a.classList.remove("review_popup"));
  testimonalCards[index].classList.add("review_popup");
  document.querySelector(".main_div").classList.add("dimmed_area");

  i.classList.add(
    "fa-solid",
    "fa-xmark",
    "review_popup_x",
    "dektop_hidden",
    "tablet_block"
  );
  testimonalCards[index].appendChild(i);
  i.onclick = (event) => {
    closeReviewPopup(event);
  };
}

testimonalCards.forEach((a, index) => {
  a.onclick = () => {
    showReview(index);
    currentCard = index;
  };
});

function closePopUps() {
  document.querySelector(".header_abs") !== null
    ? open_close_bar()
    : closeReviewPopup();
}
let slideIndex = 1; 

function plusSlides(n) {
  slideAnimalCards((slideIndex += n));
}

let slides = document.getElementsByClassName("cards");

function slideAnimalCards(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
  document.querySelectorAll(".card").forEach((card) => {
    for (let i = 0; i < 7; i++) {
      card.style.order = Math.floor(Math.random() * 6);
    }
  });
}
slideAnimalCards(slideIndex);