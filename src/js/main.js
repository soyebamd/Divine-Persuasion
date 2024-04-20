// Import our custom CSS
import "../scss/styles.scss";

import checkImage from "../images/check.svg";

import "./our-solutions.js";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

var getslide = $(".main-box li").length - 1;

let slidecal;
let WW = window.innerWidth;
function windowWdith() {
  if (WW < 768) {
    slidecal = "100%";
    console.log(WW);

    $(".adventure-slider").slick({
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      arrows: false,
      dots: false,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 768,

          settings: { slidesToShow: 1 },
        },
      ],
    });
  } else {
    slidecal = 30 / getslide + "%";
    console.log(WW);
  }
}
windowWdith();
window.addEventListener("scroll", windowWdith);
window.addEventListener("resize", windowWdith);

$(".box").css({ width: slidecal });

$(".box").click(function () {
  $(".box").removeClass("active");
  $(this).addClass("active");
});

$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  arrows: false,
  dots: false,

  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
  ],
});

$(".testimonials__slider").slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: false,

  adaptiveHeight: true,

  arrows: true,

  prevArrow: "#to-left",
  nextArrow: "#to-right",

  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { arrows: false },
    },
  ],
});

$(".projects-gallery").slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  arrows: false,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
  ],
});

$(".logo-slider-1").slick({
  infinite: true,
  slidesToShow: 6,
  autoplay: true,
  arrows: false,
  dots: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
  ],
});

// update slider in mobile
if (WW < 768) {
  const toggleContents = document.querySelectorAll(".toggle-content");

  toggleContents.forEach((toggleContent) => {
    toggleContent.classList.add("mobile-toggle-content");
    toggleContent.classList.remove("toggle-content");
  });

  const mainBoxes = document.querySelectorAll(".main-box");

  mainBoxes.forEach((mainBox) => {
    mainBox.classList.add("mobile-main-box");
    mainBox.classList.remove("main-box");
  });

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.classList.add("mobile-box");
    box.classList.remove("box");
  });

  const details = document.querySelectorAll(".detail");

  details.forEach((detail) => {
    detail.classList.add("mob-detail");
    detail.classList.remove("detail");
  });

  const toggleButtons = document.querySelectorAll(".toggle-heading");
  const contents = document.querySelectorAll(".mob-detail");

  toggleButtons.forEach((button, index) => {
    contents.forEach((content, contentIndex) => {
      content.style.display = "none";
      if (contentIndex == 0) {
        content.style.display = "block";
      }
    });

    button.addEventListener("click", () => {
      contents.forEach((content, contentIndex) => {
        content.style.display = "none";
        if (index === contentIndex) {
          content.style.display =
            content.style.display === "none" ? "block" : "none";
        } else {
          content.style.display = "none";
        }
      });
    });
  });
}

//time changer

(function () {
  function replaceFooterTimes() {
    var datePST = new Date();
    document.querySelector(".footer-time--pst").innerHTML =
      datePST.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
      });

    var dateEST = new Date();
    document.querySelector(".footer-time--est").innerHTML =
      dateEST.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
      });
  }

  replaceFooterTimes();
  setInterval(replaceFooterTimes, 1000);

  console.log(replaceFooterTimes());
})();

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = `<i class="fa-solid fa-hourglass-start"></i> Please wait...`;

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = `<img src="${checkImage}"> Form submitted successfully `;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "block";
      }, 3000);
    });
});

// up button

const btn = document.querySelector(".btn-up");

window.addEventListener("scroll", function () {
  // Get the position of the .local-studio element relative to the viewport
  const localStudioPosition = document
    .querySelector(".local-studio")
    .getBoundingClientRect().top;

  // If the .local-studio element touches the top of the viewport, add the 'd-block' class to the button
  if (localStudioPosition <= 0) {
    btn.classList.add("d-block");
    btn.classList.remove("d-none");
  } else {
    // Otherwise, remove the 'd-block' class
    btn.classList.remove("d-block");
    btn.classList.add("d-none");
  }
});
