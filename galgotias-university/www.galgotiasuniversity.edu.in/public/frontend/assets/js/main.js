$(document).ready(function () {
  /*
    $("#psearch").blur(function () { $('#search-content').css('display', 'none') }); $("#psearch").focus(function () { $('#search-content').css('display', 'block') }); $('.owl-carousel.tabslider5').owlCarousel({ margin: 10, nav: !0, dots: !1, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 3 }, 1600: { items: 3 } } })*/

  $(".owl-carousel.slidertopcompnies").owlCarousel({
    margin: 10,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 4 },
      1600: { items: 4 },
    },
  });
  $(".owl-carousel.tpCompanieRow").owlCarousel({
    margin: 50,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 2, margin: 20 },
      600: { items: 2 },
      1000: { items: 4 },
      1600: { items: 5 },
    },
  });
  $(".owl-carousel.tabslider3").owlCarousel({
    margin: 10,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1600: { items: 5 },
    },
  });
  $(".owl-carousel.researchadvm").owlCarousel({
    margin: 20,
    loop: !1,
    nav: !0,
    dots: !1,
    responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 4.5 } },
  });
  $(".owl-carousel.tabslider1").owlCarousel({
    margin: 10,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 3 },
      1600: { items: 3 },
    },
  });
  $(".owl-carousel.tabslider2").owlCarousel({
    margin: 20,
    stagePadding: 10,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 1, margin: 10 },
      600: { items: 2, margin: 10 },
      1000: { items: 3 },
      1900: { items: 4 },
    },
  });

  var owl1 = $(".tstDivCrow");
  owl1.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: !0,
    stagePadding: 10,
    margin: 10,
    nav: !0,
    dots: !1,
    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
  });

  var owl2 = $(".allCrosal");
  owl2.owlCarousel({
    loop: true,
    stagePadding: 10,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: !0,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3, stagePadding: 20, margin: 20 },
      1600: { items: 4, stagePadding: 20, margin: 20 },
    },
  });

  var owl3 = $(".lpaCrousal");
  owl3.owlCarousel({
    loop: true,
    stagePadding: 10,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: !0,
    nav: !0,
    dots: !1,
    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
  });

  var owl4 = $(".schlnewsCrosal");
  owl4.owlCarousel({
    loop: true,
    stagePadding: 10,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: !0,
    nav: !0,
    dots: !1,
    responsive: {
      0: { items: 1 },
      600: { items: 2, stagePadding: 20, margin: 20 },
      1000: { items: 3, stagePadding: 20, margin: 20 },
    },
  });

  hide = !0;
  $("body").on("click", function () {
    if (hide) {
      $("header .nav-link").removeClass("active");
      hide = !0;
    }
  });
  $("body").on("click", "header .nav-link", function () {
    var self = $(this);
    if (self.hasClass("active")) {
      $("header .nav-link").removeClass("active");
      return !1;
    }
    $("header .nav-link").removeClass("active");
    self.toggleClass("active");
    hide = !1;
  });
  $(".navbar-toggler").click(function () {
    var self = $("body");
    if (self.hasClass("active")) {
      $(self).removeClass("active");
      return !1;
    }
    self.toggleClass("active");
  });
  $(".striveColmn .viewAll").click(function () {
    $(this).siblings().css("max-height", "initial");
  });
  $(".banner.hm").parent(".site-wrapper").children("header").addClass("home");
  /**$('.counter').counterUp({ delay: 10, time: 1000 });**/
  function checkPosition() {
    var textThis = $(".abtPils.nav-pills .nav-link.active").html();
    $(".tabCnt").html(textThis);
    if ($(window).width() < 767) {
      $(".tabCntDiv").click(function () {
        $(this).siblings().slideToggle();
      });
      $(".abtPils.nav-pills .nav-link").click(function () {
        var textThis = $(this).html();
        $(".tabCnt").html(textThis);
        $(this).parent().slideUp();
      });
    }
  }
  $(document).load($(window).bind("resize", checkPosition()));
  var url = $("#video12").attr("src");
  var url2 = $("#video13").attr("src");
  $(".playBtn").click(function (ev) {
    $("#video-modal").addClass("show");
    $("#video12").attr("src", url);
  });
  $(".playBtn2").click(function (ev) {
    $("#video-modal2").addClass("show");
    $("#video13").attr("src", url2);
  });
  $(".close-video").click(function () {
    $("#video-modal").removeClass("show");
    $("#video12").attr("src", "");
  });
  $(".close-video2").click(function () {
    $("#video-modal2").removeClass("show");
    $("#video13").attr("src", "");
  });
  $(".tpHeader .nav-link").click(function () {
    $(this).siblings("ul").slideToggle();
    $(this).parent().siblings().children("ul").slideUp();
  });
  $(".navbar  .nav-item").click(function () {
    $(this).siblings("ul").slideToggle();
    $(this).parent().siblings().children("ul").slideUp();
  });
});

$(window).on("load", function () {
  var svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-496.9 507.1 54 54">
        <circle cx="-469.9" cy="534.1" r="27" fill="#bc1820"/>
        <path fill="#ffffff" d="M-472.6,522.1h5.3c3,0,6,1.2,8.1,3.4c2.1,2.1,3.4,5.1,3.4,8.1c0,6-4.6,11-10.6,11.5v4.4
        c0,0.4-0.2,0.7-0.5,0.9h-0.4c-0.2,0-0.5-0.2-0.7-0.4l-4.6-5c-3,0-6-1.2-8.1-3.4s-3.4-5.1-3.4-8.1
        C-484.1,527.2-478.9,522.1-472.6,522.1z"/>
    </svg>`;

  // keep checking until icon exists
  var replaceIcon = setInterval(function () {
    var $img = $('#__eechatIcon img[alt="iconImage"]');

    if ($img.length) {
      $img.replaceWith(svgContent);
      clearInterval(replaceIcon); // stop once replaced
    }
  }, 20);
});
