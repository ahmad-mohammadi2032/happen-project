// open header list
const headerBurgerButton = document.querySelector(".burger-btn");
const headerNavbar = document.querySelector(".header-navbar");

headerBurgerButton.addEventListener("click", () => {
  headerNavbar.classList.add("show-header-navbar");
  document.body.style.overflow = "hidden";
});

// close header list
const headerCloseButton = document.querySelector(".close-header-btn");

headerCloseButton.addEventListener("click", () => {
  headerNavbar.classList.remove("show-header-navbar");
  document.body.style.overflow = "auto";
});

headerNavbar.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("show-header-navbar")) {
    headerNavbar.classList.remove("show-header-navbar");
    document.body.style.overflow = "auto";
  }
});

// fixed header when scroll
const bottomHeader = document.querySelector("#bottom-header");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 105) {
    bottomHeader.classList.add("fixed-header");
  } else {
    bottomHeader.classList.remove("fixed-header");
  }
});

// TOGGLE BETWEEN QUESTIONS ANSWER
const questionItems = document.querySelectorAll(".question-item");
const answerBoxs = document.querySelectorAll(".answer-box");

questionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answerBox = item.querySelector(".answer-box");
    const answerText = item.querySelector(".answer-text");

    // GET EACH HEIGHT ANSWER
    const answerHeight = answerText.getBoundingClientRect().height;

    if (item.classList.contains("showAnswer")) {
      resetAnswer();
    } else {
      resetAnswer();
      item.classList.add("showAnswer");
      answerBox.style.height = `${answerHeight}px`;
    }
  });
});

// RESET ANSWERS WHEN CLICK TO ANOTHER QUESTION
const resetAnswer = () => {
  answerBoxs.forEach((answer) => {
    const questionItem = answer.parentElement;
    questionItem.classList.remove("showAnswer");
    answer.style.height = 0;
  });
};

// COMMENTS SWIPPER
const weblogSlider = new Swiper(".weblogs-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1200,

  autoplay: true,
});

weblogSlider.update();

// GO TOP BUTTON
const goToTopButton = document.querySelector(".go-top-btn");

// show button when scroll arrived at the middle of the site
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1200) {
    goToTopButton.classList.add("show-go-top-btn");
  } else {
    goToTopButton.classList.remove("show-go-top-btn");
  }
});

// when button clicked, back to top
goToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
