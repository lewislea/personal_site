$(document).ready(function(){
 
// watch for ordering of functions
  // Scroll the whole document
   $.localScroll();
	
// scroll listener to gauge where on page you are. hide/show nav based on result
$(window).scroll(function() {

if($(window).height()-($('.home').offset().top-$(window).scrollTop())>960){
$("nav").fadeIn();
}
 else {
$("nav").fadeOut();

}
});//end of scroll 







});//end of doc ready







