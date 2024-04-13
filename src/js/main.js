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
});

$(".logo-slider").slick({
  infinite: true,
  slidesToShow: 6,
  autoplay: true,
  arrows: false,
  dots: false,
  slidesToScroll: 1,
});

$(".testimonials__slider").slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: false,

  arrows: true,

  prevArrow: "#to-left",
  nextArrow: "#to-right",

  slidesToScroll: 1,
});
