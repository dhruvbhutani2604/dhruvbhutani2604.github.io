
$(document).ready(function(){
	$("#projectbtn").click(function(){
		$(".home").fadeOut(1000, function(){
			$(".home").remove();

		});
		$(".projects").fadeIn(1000);
		// $("body").css("background", "white");
		});
	});

$(window).scroll(function() {

    var $window = $(window),
          $body = $('body'),
          $panel = $('.panel');
      

    var scroll = $window.scrollTop() + ($window.height() / 3);

     
    
    $panel.each(function () {
            var $this = $(this);
        
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                  
            $()  
            $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
            });
               
              // Add class of currently active div
            $body.addClass('color-' + $(this).data('color'));
            } 
        
    });    
          
}).scroll();


// $(document).ready(function(){
// 	$("#projectbtn").click(function(){
// 			$(".home").slideUp(750, function(){
// 			$(".home").remove();
// 		});
// 		$(".yelpcamp").fadeIn(1400, function(){
// 			$("body").css("background", "white");
// 		});

// 	});
// });