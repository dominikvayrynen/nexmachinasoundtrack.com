
$(function() {
  $('#main').smoothState();
});


$(document).foundation();

// TweenLite.from("header", 0.5, {opacity: 0, y: -300 });
//
// TweenLite.from("section", 1, {opacity: 0, delay: 1});

TweenLite.from(".one", 2, {opacity: 0, y: -500, delay: .5, ease: Expo.easeOut});
TweenLite.from(".two", 1.5, {opacity: 0, y: -500, delay: 1,  ease: Expo.easeOut});
TweenLite.from(".three", 1.5, {opacity: 0, y: 500, delay: 1, ease: Expo.easeOut});

// TweenLite.from(".four", 1, {opacity: 0, delay: 3});


// TweenLite.from(".quote", 1, {opacity: 0, y: -200, delay: 3});

// $(document).scroll(function () {
//   var location = window.location.hash.substring(1);
//   console.log(location)
//   $("a").removeClass("selected");
//   if(location && location != "") {
//     $("a."+location).addClass("selected");
//   }
// });
//
//
// function menuHighlight(location) {
//   $.scrollify.instantMove('#'+location);
//   if ( window.location.hash == "#"+location) {
//     $("a").removeClass("selected");
//     $("a."+location).addClass("selected");
//   }
// }
//
// function highlight() {
//   menuHighlight("service")
//   menuHighlight("map")
//   menuHighlight("story")
//   menuHighlight("people")
//   menuHighlight("contact")
// }
