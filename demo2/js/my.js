$(function () {
  /* loading */
  setTimeout(function(){
    $('.loading-wraper').fadeOut(500);
  },2000); 

  /* menuchange */
  $('.header-left li .jp1').hover(function () {
    $(this).text('Top Page');
  }, function () {
    $(this).text('トップ');
  });
  $('.header-left li .jp2').hover(function () {
    $(this).text(' My Hobby');
  }, function () {
    $(this).text('私の趣味');
  });
  $('.header-left li .jp3').hover(function () {
    $(this).text('My Study');
  }, function () {
    $(this).text('私の勉強');
  });
  $('.header-left li .jp4').hover(function () {
    $(this).text('Contact');
  }, function () {
    $(this).text('ご質問');
  });
  /* to top */
  $(window).scroll(
    function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $('#top_nav').css('display', 'block');
        $('#elevator').css('display', 'block');

      } else {
        $('#top_nav').css('display', 'none');
        $('#elevator').css('display', 'none');
      };
    });

  /* banner slider */
  bannerAutoPlay();

  function bannerAutoPlay() {
    let lis = $('.slider-banner ul li');
    let index = 0;
    setInterval(function () {
      for (let i = 0; i < lis.length; i++) {
        let singerLi = lis[i];
        buffer(singerLi, {
          opacity: 0.01
        }, null)
      }
      buffer(lis[index], {
        opacity: 1
      }, null);
      index++;
      if (index === lis.length) {
        index = 0;
      }
    }, 1500)
  };

  /* aside banner */
  aside();

  function aside() {
    let aside = document.getElementById('aside');
    let offsetTop = aside.offsetTop;
    let begin = 0,
      end = 0,
      timer = null;

    window.onscroll = function () {
      clearInterval(timer);
      let scroll = document.documentElement.scrollTop;
      end = offsetTop + scroll;
      timer = setInterval(function () {
        begin = begin + (end - begin) * 0.2;
        aside.style.top = begin + 'px';
        if (Math.round(begin) === Math.round(end)) {
          clearInterval(timer);
        };
      }, 20);
    };
  };
 

});