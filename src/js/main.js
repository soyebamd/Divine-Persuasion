// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

var getslide = $(".main-box li").length - 1;

let slidecal;
let WW = window.innerWidth;
function windowWdith() {
  if (WW < 768) {
    slidecal = "100%";
    console.log(WW);
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
  slidesToShow: 4,
  autoplay: true,
  arrows: false,
  dots: false,

  slidesToScroll: 3,

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

$(".logo-slider").slick({
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
