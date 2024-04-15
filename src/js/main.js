// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

var getslide = $(".main-box li").length - 1;

var slidecal = 30 / getslide + "%";

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
