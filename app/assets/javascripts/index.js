// サークルアップ
$(function(){
  let topBtn = $('.fa.fa-chevron-circle-up')
  topBtn.hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
      }  
  });
  topBtn.click(function(){
    $('body, html').animate({
      scrollTop: 0    
    }, 500);
    return false;
  });
});

// ヘッダースクロール
$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function(){
  $('#btn').on('click', function(){
    $('#menu').toggleClass('active');
    $('.black-bg').toggleClass('active');  
    return false
  });
  $('.black-bg').on('click',function(){
    $(this).removeClass('active');
    $('#menu').removeClass('active');
    return false
  });
});