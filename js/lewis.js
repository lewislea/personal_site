$(document).ready(function(){

  // Scroll the whole document
        $.localScroll();
	

/////// show/hide nav on scroll////////
$(".music").mouseenter(function(){
	$("nav").fadeIn('slow');
});


$(".home").mouseenter(function(){
	$("nav").fadeOut('slow');
});

// //try scroll listener
// $(window).scroll(function() {
// 	$(this).scrollTop(); 
// 	 if  ( (this).scrollTop() < ($('.home').height() * -1) ) {
// 	 	alert("boom");
// 	 	$("nav").fadeIn('slow');
// 	 }
// 	 else {
// 	 	$("nav").hide();
// 	 }

// });//end of scroll







});//end of doc ready







