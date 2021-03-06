let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 1199) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });

    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-dispaly").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-dispaly").slideUp(400);
      if ($(window).width() <= 991) {
        $(this).toggleClass("active");
      }
    });

    $(".has-level-2>a").click(function (e) {
      e.preventDefault();
      var item = $(this);
      $(".has-level-2>a").not(item).removeClass("active");
      $(item).toggleClass("active");
      if ($(item).siblings().css("display") == "none") {
        $(item).siblings().slideDown(500);
      } else {
        $(item).siblings().slideUp(500);
      }
      $(".has-level-2>a>i").not(item).siblings().slideUp(500);
    });

    $(".has-level-3>a").click(function (e) {
      e.preventDefault();
      var item = $(this);
      $(".has-level-3>a").not(item).removeClass("active");
      $(item).toggleClass("active");
      if ($(item).siblings().css("display") == "none") {
        $(item).siblings().slideDown(500);
      } else {
        $(item).siblings().slideUp(500);
      }
      $(".has-level-3>a>i").not(item).siblings().slideUp(500);
    });
    // $(".top-header .add-chevron").addClass("chevron-down");
  }

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top,
      },
      1000
    );
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });

  //add swiper to gallery section
  if ($(window).width() < 991) {
    // gallery one
    $(".gallery-section .gallery-container").addClass("container");
    $(".gallery-section .gallery-swiper-cont").addClass("swiper-container");
    $(".gallery-section .gallery-cont").contents().unwrap();
    $(".gallery-section .gallery-swiper-wrapper").addClass("swiper-wrapper");
    $(".gallery-section .gallery").addClass("swiper-slide");
    var galleryO = new Swiper(".gallery-section .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".gallery-section .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
    });
    // gallery-two
    $(".gallery-swiper-two .gallery-swiper-cont").addClass("swiper-container");
    $(".gallery-swiper-two .gallery-cont").addClass("swiper-wrapper");
    $(".gallery-swiper-two .gallery").addClass("swiper-slide");
    var galleryT = new Swiper(".gallery-swiper-two .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".gallery-swiper-two .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
    });

  }
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  // quotation-form
  $(".quotation-btn").click(function () {
    $(".quotation-form").addClass("reset");
    $(".overlay-box").fadeIn();
  });
  $(".cancel-form, .overlay-box").click(function (e) {
    e.preventDefault();
    $(".quotation-form").removeClass("reset");
    $(".overlay-box").fadeOut(300);
  });
});
