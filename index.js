"use strict";

const share = document.querySelector(".customer-social");
const icon_share = document.querySelector(".social");
const icon_share2 = document.querySelector("social-hover");
const bodyClicked = document.querySelector("body");

share.addEventListener("click", function () {
  icon_share.classList.toggle("social-hover");
});
