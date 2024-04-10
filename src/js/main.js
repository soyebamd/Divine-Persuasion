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
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 3,
});
