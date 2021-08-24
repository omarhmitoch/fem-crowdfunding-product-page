const dropDownMenu = document.querySelector(".nav-container ul");
const dropDownMenuBtn = document.querySelector(".menu");
const bookmarkBtn = document.querySelector(".f-s-btns .f-s-btns-2");
let menuState = false;
dropDownMenuBtn.addEventListener("click", function () {
  menuState = !menuState;
  dropDownMenu.classList.toggle("active");
  document.querySelector("body").classList.toggle("nav-active");
  document.querySelector(".nav-container").classList.toggle("active-index");
  this.classList.toggle("active");
});
bookmarkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    this.querySelector("#btns-2-text").innerText = "Bookmarked";
  } else {
    this.querySelector("#btns-2-text").innerText = "Bookmark";
  }
});

/* modal pledge section */
const backProjectBtn = document.querySelector("#backProject");
const pledgeSection = document.querySelector("section");
const pledgeSectionModal = document.querySelector(".overflow-modal");
const pledgeC = document.querySelectorAll(".pledge-type-container");

backProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pledgeSection.classList.add("active");
  pledgeSectionModal.classList.add("active");
  document.body.classList.add("modal-active");
});
document.querySelector(".close-modal").addEventListener("click", function () {
  hidePledgesModal();
});

pledgeC.forEach((pl) => {
  pl.addEventListener("click", function (e) {
    e.preventDefault();
    if (pl.classList.contains("sold-out") === false) {
      updateModals();
      pl.classList.add("active");
    }
  });
});

const updateModals = () => {
  pledgeC.forEach((pl) => {
    pl.classList.remove("active");
  });
};

pledgeSectionModal.addEventListener("click", function (e) {
  if (e.target.id === "validate-pledge") {
    let input = e.target.parentElement.querySelector("input");
    let minValue = input !== null ? +input.getAttribute("data-min-val") : null;
    if (minValue !== null) {
      if (+input.value.trim() >= minValue) {
        input.className = "";
        hidePledgesModal();
        showModalCompleted();
      } else {
        input.classList.add("error");
      }
    } else {
      hidePledgesModal();
      showModalCompleted();
    }
  }
});

const completedModal = document.querySelector(".validation-modal-container");
document.querySelector("#gotItBtn").addEventListener("click", function (e) {
  e.preventDefault();
  completedModal.classList.remove("active");
  pledgeSection.classList.remove("completed-modal-active");
});
const showModalCompleted = () => {
  completedModal.classList.add("active");
  pledgeSection.classList.add("completed-modal-active");
};

const hidePledgesModal = () => {
  pledgeSection.classList.remove("active");
  pledgeSectionModal.classList.remove("active");
  document.body.classList.remove("modal-active");
  updateModals();
};
