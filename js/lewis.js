$(document).ready(function(){

$(document).on('scroll', function(){
	$("nav").show(100);
});//end on scroll




});//end of doc ready







/////// short bio on hover/////////
$("#firstpagedeveloper").mouseenter(function(){
	$(".devbio").fadeIn("slow");
});//end mouseenter
$("#firstpagedeveloper").mouseleave(function(){
	$(".devbio").fadeOut("slow");
});//end mouseleave

$("#firstpagemusician").mouseenter(function(){
	$(".musicbio").fadeIn("slow");
});//end mouseenter
$("#firstpagemusician").mouseleave(function(){
	$(".musicbio").fadeOut("slow");
});//end mouseleave