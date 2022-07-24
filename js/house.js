
  //유투브 준비중
  function pop_alert(){
    alert('준비 중 입니다.')
  }

  // first section swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".arrow_right_a",
        prevEl: ".arrow_left_a",
      },
    });


  // navigation
    var btn_nav = document.getElementsByClassName('btn_nav');
    var navigation_menu = document.getElementById('navigation');
    var main_display = document.querySelector('main');
    var main_section = document.getElementsByClassName('m_img');
    var category_ul = document.getElementsByClassName('category_list');
    function nav_show(){
      if(navigation_menu.classList.contains('open')){
        navigation_menu.classList.remove('open');
      }      
      else{
        navigation_menu.classList.add('open');
      }
  };

// keyword swiper
     new Swiper(".keyword_mySwiper", {
      slidesPerView: "auto",
      freeMode: true,
      });

