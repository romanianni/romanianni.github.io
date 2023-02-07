(function () {


  function lock(orientation) {
    // (A1) GO INTO FULL SCREEN FIRST
    let de = document.documentElement;
    if (de.requestFullscreen) { de.requestFullscreen(); }
    else if (de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
    else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
    else if (de.msRequestFullscreen) { de.msRequestFullscreen(); }

    // (A2) THEN LOCK ORIENTATION
    screen.orientation.lock(orientation);
  }

  lock("portrait")
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

  $(window).on("scroll", function (e) {

    var wScroll = $(window).scrollTop();



    var img1 = $(".image-brochure-1");
    var img2 = $(".image-brochure-2");
    var img3 = $(".image-brochure-3");



    var img1pos = img1.css("left").replace(/[^-\d\.]/g, '')
    var img2pos = img2.css("top").replace(/[^-\d\.]/g, '')
    var img3pos = img3.css("right").replace(/[^-\d\.]/g, '')

    img1.css("left", ((- 100 + wScroll * 0.1)) + "px");
    img2.css("top", ((- 350 + wScroll * 0.1)) + "px");
    img3.css("right", ((180 + wScroll * 0.1)) + "px");

  });


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
    speed: 200,
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
        if (this.realIndex === 2) {
          $(".numNext").text("1");
        } else {
          $(".numNext").text(this.realIndex + 2);
        }

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


  $("[data-paroller-factor]").paroller();



  const example = new Textify({
    selector: ".prueba",
    easing: "sharp",
    top: true,
    once: false,
    rotation: 1,
    duration: 1000,
    fade: true
  });


  const example2 = new Textify({
    selector: ".prueba2",
    easing: "sharp",
    top: false,
    once: false,
    duration: 200,
    fade: true
  });

  const example3 = new Textify({
    selector: ".fadeText",
    easing: "linear",
    duration: 500,
    fade: true
  });

  $(".accordion-btn").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).addClass("closed");
      $(".accordion-body").hide();
      return
    }
    $(".accordion-body").hide();
    $(".accordion-btn").removeClass("open").addClass("closed");
    $(this).addClass("open");
    $(this).parent().parent().parent().find(".accordion-body").fadeIn();
  })


}())