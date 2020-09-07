
// typing text


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["73 is the best number", "Why?", "73 is the 21st prime number", "Its mirror, 37, is the 12th", "whose mirror, 21, is the product of 7 and 3", "and in binary, 73 is a palindrome, 1001001, which backwards is 1001001", "Regards, Sheldon Cooper"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
    if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// END

$(document).ready(function(){

    // project fade in

	$("#projectbtn").click(function(){
		$(".home").fadeOut(1000, function(){
			$(".home").remove();

		});
		$(".projects").fadeIn(1000);
	});

    // END

    // changing background on scroll
	
    $(window).scroll(function() {

        var $window = $(window),
              $body = $('body'),
              $panel = $('.panel');
          

        var scroll = $window.scrollTop() + ($window.height() / 3);

         
        
        $panel.each(function () {
                var $this = $(this);
            
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                      

                $body.removeClass(function (index, css) {
                    return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
                });
                   
                $body.addClass('color-' + $(this).data('color'));
                } 
            
        });    
              
    }).scroll();

    // END

});

