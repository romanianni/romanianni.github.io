(function () {

  $("#close-mobile-menu").on("click", function (e) {
    e.preventDefault();
    $(".mobile-menu").removeClass("open");
  })

  $("#open-mobile-menu").on("click", function (e) {
    e.preventDefault();
    $(".mobile-menu").addClass("open");
  })


  $(window).on("load scroll", function (e) {

    if ($header && $header.length > 0) {

      var scroll = $(window).scrollTop();


      if (scroll > 10) {
        $header.addClass("moving");
      } else {
        $header.removeClass("moving");
      }

    };

  });

  // $(window).on("scroll", function (e) {

  // });


  /**
   * Header Sticky on Scroll
  */

  var $header = $(".wrapper-header");



  $("#toggle-menu").on("click", function (e) {
    e.preventDefault();

    if ($("#site-nav").hasClass("open")) {
      $("#site-nav").removeClass("open")
      return;
    }

    $("#site-nav").addClass("open");
  });


  $("#close-menu").on("click", function (e) {
    e.preventDefault();

    $("#site-nav").removeClass("open")

  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 10,
    slideToClickedSlide: true,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var galleryTop = new Swiper('.gallery-top', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    loopedSlides: 10,
    loop: true,
    spaceBetween: 10,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      renderBullet: function (index, className) {
        return '<span class="' + className + this.activeIndex + '">' + (index) + '</span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
      slideChange: function () {
        $(".numActive").text(this.realIndex + 1);
        $(".numNext").text(this.realIndex + 2);
        console.log(this.realIndex);
      },

    }
  });

  $(".swiper-container").hover(function () {
    swiper.autoplay.stop();
    $(".swiper-progress-bar").removeClass("animate");
  }, function () {
    swiper.autoplay.start();
    $(".swiper-progress-bar").addClass("animate");
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

}())