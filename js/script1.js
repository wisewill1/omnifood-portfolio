// $(document).ready(function(){
// 	$(".js--section-features").waypoint(function(section){
// // var $section = $('.section-meals');
// $(".section-meals") .waypoint(function(){
//    console.log("waypoint")
//    if(section ===".section-meals")
// });

$(document).ready(function(){

$(".js--section-features").waypoint(function(direction){
if (direction == "down") {
	document.write("Hello you made it");
  $("nav").addClass("sticky");
} 
else{ $("nav").removeClass("sticky");

}

});


// scroll on buttons
// $(".js--scroll-to-plans"
// ).click(function(){
// $("html, body").animate({scrollTop: $(".js--section-plans").offset().top},1000)
// });

// "btn2 js--scroll-to-start"

// var waypoints = $('#handler-first').waypoint(function(direction) {
//   notify(this.element.id + ' hit 25% from top of window') 
// }, {
//   offset: '25%'
// })

// });