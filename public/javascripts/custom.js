$(document).ready(function() {
  
  $slideshow = $('#slideshow');
  $slides = $slideshow.find('.slides li');
  $slideNav = $slideshow.find('.nav li');
  
  // $slideshow.find('li:first-child').addClass('active');
  $slides.hide().eq(0).addClass('active').show();
  $slideNav.eq(0).addClass('active');
  // $slides.find('li').hide().end().find('.active').show();
  
  $slides.each(function(i){
    $(this).find('.details').css({'left':i*237.5});
  });
  
  $slideNav.find('a').click(function(e){
    $nextNav = $(this).parent();    
    $nextSlide = $slides.eq($nextNav.index());
    
    $activeNav = $slideNav.filter('.active');
    $activeSlide = $slides.filter('.active');
    
    if ($activeSlide.index() == $nextNav.index()){
      $nextNav.animate({bottom:-5},25,function(){
        $(this).animate({bottom:0},50)
      });
    } else if ($activeSlide.length > 0) {
      $activeSlide.fadeOut(function(){
        $activeSlide.removeClass('active').hide();
        showNextSlide();
      });
    } else {
      showNextSlide();
    }
    
    e.preventDefault();
  });
  
  // $slideNav.find('a').hover(function(){
  //   $(this).animate({top:-2},100);
  // },function(){
  //   $(this).animate({top:0},100);
  // });

  function showNextSlide() {
    $nextSlide.addClass('active').fadeIn().find('.details').css({opacity:0,height:0,bottom:-378});
    $nextNav.animate({opacity:0,bottom:-30},200,function(){
      $(this).addClass('active').delay(0).animate({opacity:1,bottom:0});
      $nextSlide.find('.details').animate({opacity:1,height:378});
    });
    $activeNav.removeClass('active');
  }
  
});