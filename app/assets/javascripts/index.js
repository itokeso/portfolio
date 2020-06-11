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