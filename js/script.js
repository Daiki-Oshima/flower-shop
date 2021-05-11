//カウントアップ・プログレスバーの設定
var bar = new ProgressBar.Line(splash_text,{
    easing: 'easeInOut',
    duration: 1000,
    strokeWidth: 0.2,
    color: '#bbb',
    trailWidth: 0.2,
    trailColor: '#fff',
    text: {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',
        transform: 'translate(-50%, -50%)',
        'font-size': '1rem',
        color: '#333',
      },
      autoStyleContainer: false
    },
    step: function(state, bar){
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(1.0, function(){
    $("#splash").delay(500).fadeOut(800);
  });
  
  //スクロールしたらヘッダーを上部固定する設定
  function FixedAnime(){
    var elemFixed = $('#section-concept').offset().top;
    var scroll = $(window).scrollTop();
    if (scroll >= 90){
      $('#header__nav').addClass('header__fixed');
    }else{
      $('#header__nav').removeClass('header__fixed');
    }
    if (scroll >= elemFixed){
      $('#header__nav').addClass('header__color-change');
    }else{
      $('#header__nav').removeClass('header__color-change');
    }
  }
  $(window).scroll(function(){
    FixedAnime();
  });
  $(window).on('load', function(){
    FixedAnime();
  });
  
  //ハンバーガーメニューのクリックアニメーション
  $(".hamburger-menu").click(function(){
    $('.hamburger-menu__line').toggleClass('hamburger-active');
    $("#header__nav__list").toggleClass('nav-active');
  })
  $(window).on('scroll',function(){
    $('.hamburger-menu__line').removeClass('hamburger-active');
    $("#header__nav__list").removeClass('nav-active');
  })
  
  //ページTOPに戻るボタンの設定
  //スクロールに関する設定
  function PageTopAnime(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300){
      $('#page-top').removeClass('DownMove');
      $('#page-top').addClass('UpMove');
    }else{
      if($('#page-top').hasClass('UpMove')){
        $('#page-top').removeClass('UpMove');
        $('#page-top').addClass('DownMove');
      }
    }
  }
  $(window).scroll(function(){
    PageTopAnime();
  });
  $(window).on('load', function(){
    PageTopAnime();
  });
  //クリック後の設定
  $('#page-top').click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  
  //Work-content要素のフェードイン設定
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150){
        $(this).addClass('scrollin');
      }
    });
  });
  
  //florist-content要素のフェードイン設定
  $(window).scroll(function () {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 70;
    // eachでliを順番に処理
    $(".florist__fadein").each(function (i) {
      if(effectPos > $(this).offset().top){
        var that = this;
        // 0.2s毎にずれて表示
        setTimeout(function () {
          $(that).addClass("fadein");
        }, 300 * i);
      }
    });
  });
  