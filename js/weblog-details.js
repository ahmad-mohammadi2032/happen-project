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

// copy text in clipboard when click to copy button
const copyButton = document.querySelector(".copy-btn");
const copyText = document.querySelector(".copied-text");

copyButton.addEventListener("click", () => {
  const copyInput = document.createElement("input");
  copyInput.setAttribute("type", "text");
  copyInput.setAttribute("value", copyText.textContent.trim());
  document.body.appendChild(copyInput);

  copyInput.select();
  copyInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyInput.remove();

  // show success alert that link copied!
  Toastify({
    text: "با موفقیت کپی شد.",
    duration: 2000,
    close: false,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});
