
// sticky header
$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// accordian 
$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

// pre loader
$(document).ready(function(){
  setTimeout(function(){
    $('.pre_loader').fadeOut();
  },3000);
});

  // counter
  function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
}

$(window).scroll(function(){

  if(visible($('.count-digit')))
    {
      if($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');
      
$('.count-digit').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 3000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
    }
});

// bottom to top
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 100) { 
      $('#scroll').fadeIn(); 
  } else { 
      $('#scroll').fadeOut(); 
  } 
}); 
$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 600); 
  return false; 
}); 

});

// testimonial slider
$('#testi_sec').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 3000,
});

// partner logo slider
  $('#partner_logo').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 5000,
    slideTransition: 'ease  ',
});


AOS.init();