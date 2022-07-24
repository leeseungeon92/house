$(document).ready(function(){
    $('#gnb_btn').addClass('gnb_active');
    $('#gnb_btn2').removeClass('gnb_active');
    $('#gnb_btn').click(function(){
      $('#gnb_btn').addClass('gnb_active')
      $('#gnb_btn2').removeClass('gnb_active')
      $('.gnb_active::after').show()
    });
  
    $('#gnb_btn2').click(function(){
      $('#gnb_btn2').addClass('gnb_active')
      $('#gnb_btn').removeClass('gnb_active')
      $('.gnb_active::after').show()
    });
  })
  
  //스토리 클릭 시 이벤트
  $('#story_li1').click(function(){
    $('#storytap1').show();
    $('#storytap2').hide();
    $('#storytap3').hide();
    $('#storytap4').hide();
    $('#storytap5').hide();
    $('#storytap6').hide();
    $('#storytap7').hide();

    $('#story_li1').addClass('story_active')
    $('#story_li2').removeClass('story_active')
    $('#story_li3').removeClass('story_active')
    $('#story_li4').removeClass('story_active')
    $('#story_li5').removeClass('story_active')
    $('#story_li6').removeClass('story_active')
    $('#story_li7').removeClass('story_active')
  })

  $('#story_li2').click(function(){
    $('#storytap2').show();
    $('#storytap1').hide();
    $('#storytap3').hide();
    $('#storytap4').hide();
    $('#storytap5').hide();
    $('#storytap6').hide();
    $('#storytap7').hide();

    $('#story_li2').addClass('story_active')
    $('#story_li1').removeClass('story_active')
    $('#story_li3').removeClass('story_active')
    $('#story_li4').removeClass('story_active')
    $('#story_li5').removeClass('story_active')
    $('#story_li6').removeClass('story_active')
    $('#story_li7').removeClass('story_active')
  })

  $('#story_li3').click(function(){
    $('#storytap3').show();
    $('#storytap1').hide();
    $('#storytap2').hide();
    $('#storytap4').hide();
    $('#storytap5').hide();
    $('#storytap6').hide();
    $('#storytap7').hide();

    $('#story_li3').addClass('story_active')
    $('#story_li1').removeClass('story_active')
    $('#story_li2').removeClass('story_active')
    $('#story_li4').removeClass('story_active')
    $('#story_li5').removeClass('story_active')
    $('#story_li6').removeClass('story_active')
    $('#story_li7').removeClass('story_active')
  })

  $('#story_li4').click(function(){
    $('#storytap4').show();
    $('#storytap1').hide();
    $('#storytap2').hide();
    $('#storytap3').hide();
    $('#storytap5').hide();
    $('#storytap6').hide();
    $('#storytap7').hide();

    $('#story_li4').addClass('story_active')
    $('#story_li1').removeClass('story_active')
    $('#story_li2').removeClass('story_active')
    $('#story_li3').removeClass('story_active')
    $('#story_li5').removeClass('story_active')
    $('#story_li6').removeClass('story_active')
    $('#story_li7').removeClass('story_active')
  })

  $('#story_li5').click(function(){
    $('#storytap5').show();
    $('#storytap1').hide();
    $('#storytap2').hide();
    $('#storytap3').hide();
    $('#storytap4').hide();
    $('#storytap6').hide();
    $('#storytap7').hide();

    $('#story_li5').addClass('story_active')
    $('#story_li1').removeClass('story_active')
    $('#story_li2').removeClass('story_active')
    $('#story_li3').removeClass('story_active')
    $('#story_li4').removeClass('story_active')
    $('#story_li6').removeClass('story_active')
    $('#story_li7').removeClass('story_active')
  })

  $('#story_li6').click(function(){
    $('#storytap6').show();
    $('#storytap1').hide();
    $('#storytap2').hide();
    $('#storytap3').hide();
    $('#storytap4').hide();
    $('#storytap5').hide();
    $('#storytap7').hide();

    $('#story_li6').addClass('story_active')
    $('#story_li1').removeClass('story_active')
    $('#story_li2').removeClass('story_active')
    $('#story_li3').removeClass('story_active')
    $('#story_li4').removeClass('story_active')
    $('#story_li5').removeClass('story_active')
    $('#story_li7').removeClass('story_active')
  })

  $('#story_li7').click(function(){
    $('#storytap7').show();
    $('#storytap1').hide();
    $('#storytap2').hide();
    $('#storytap3').hide();
    $('#storytap4').hide();
    $('#storytap5').hide();
    $('#storytap6').hide();

    $('#story_li7').addClass('story_active')
    $('#story_li1').removeClass('story_active')
    $('#story_li2').removeClass('story_active')
    $('#story_li3').removeClass('story_active')
    $('#story_li4').removeClass('story_active')
    $('#story_li5').removeClass('story_active')
    $('#story_li6').removeClass('story_active')
  })

  //계정 랭킹 클릭 시 이벤트

$('#week_lank').click(function(){
  $('.lank-wrap2').hide();
  $('.lank-wrap').show();

  $('#week_lank').addClass('lank_active')
  $('#month_lank').removeClass('lank_active')
})


$('#month_lank').click(function(){

  $('.lank-wrap2').show();
  $('.lank-wrap').hide();

  $('#month_lank').addClass('lank_active')
  $('#week_lank').removeClass('lank_active')
})


$('.youtube').click(function(){
  // $("body").addClass('total_black')
  $('.mask').css("display","inline")
})

// 모달 유튜브 영상
$(".img1").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/fL52IvwmaAY/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$("#play1").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/fL52IvwmaAY/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$(".img2").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/q8kKJ66ndsA/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$("#play2").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/q8kKJ66ndsA/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$(".img3").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/PTJGCuXwNQI/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$("#play3").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/PTJGCuXwNQI/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$(".img4").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/bXnMzMWQsTk/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$("#play4").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/bXnMzMWQsTk/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$(".img5").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/e1gJuHgHVoE/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$("#play5").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/e1gJuHgHVoE/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$(".img6").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/XrWd7VZMo2U/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

$("#play6").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://www.youtube.com/embed/XrWd7VZMo2U/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  $('body').css('overflow','hidden');
  $('.video_modal_popup').removeClass('escfunction');
}),

//유튜브 모달 팝업 영상 닫기
$(".video_modal_popup-closer").click(function() {
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").removeClass("reveal")
  $('body').css('overflow','auto');

});

//esc로 모달창 닫기
$(document).keydown(function(e){
  //keyCode 구 브라우저, which 현재 브라우저
    var code = e.keyCode || e.which;
 
    if (code == 27) { // 27은 ESC 키번호
        $('.video_modal_popup').addClass('escfunction');
        $('body').css('overflow','auto');
    }
});


//가이드 swiper

var ww = $(window).width();

if (ww <= 768) {
    new Swiper(".guide_mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      simulateTouch: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    swiper = new Swiper(".lank_mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      simulateTouch: true,
    });

  } else if (ww > 768) {
    // swiper 호출 안함
  }

//실시간 ww체크 후 반응형 swiper

  $(window).on('resize', function () {
  ww = $(window).width();
  if (ww < 768) {
    new Swiper(".guide_mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      simulateTouch: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    swiper = new Swiper(".lank_mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      simulateTouch: true,
    });
  }
});
