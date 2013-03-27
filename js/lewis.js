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

//songkick API
// $.ajax({
// 	type: GET,
//   	url: "api.songkick.com/api/3.0/search/artists.json?query=lewislea&apikey=1SmCFC4uAIf8KRiJ",
// 	succes: function(data) {
//  	console.log(data);
// 	}
// 	});






});//end of doc ready







