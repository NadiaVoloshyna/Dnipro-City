$(function(){
$("a.gal").colorbox({
	rel: `gal`,
	transition: `elastic`,
	speed: 500,
	width: 400,
	height: 300,
	scalePhotos: true,
	slideshow: true,
	slideshowSpeed: 3000,
	current: `photo {current} from {total}`,
    slideshowStart:"Start slideshow",
    slideshowStop: "Stop slideshow"
});
$(".slider").bxSlider({
    minSlides: 2,
	maxSlides: 2,
	moveSlides: 1,
	slideWidth: 730,
	slideMargin: 40,
	auto: true,
	pause: 7000,
});
$(".up").click(function(){
	$('body,html').animate({
		scrollTop: 0
},1000);
});


});
