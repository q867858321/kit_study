
$('body').on('touchstart', function(e) {
	 var touch = e.originalEvent,
		startX = touch.changedTouches[0].pageX,
		startY = touch.changedTouches[0].pageY;
	$('body').on('touchmove', function(e) {
		touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		if (touch.pageX - startX > 100) {
			showPrevious();
			$('body').off('touchmove');
		} else if (touch.pageX - startX < -100) {
			showNext();
			$('body').off('touchmove');
		};
	});
	return false;
}).on('touchend', function() {
	$('body').off('touchmove');
});
$(".notice .left_btn").on("click",function () {
	showPrevious();
});
$(".notice .right_btn").on("click",function () {
	showNext();
});
$(".notice .close_btn").on("click",function () {
	$(".notice").addClass("hid_i");
});

function showPrevious(){
  window.history.back(-1);
}
function showNext(){
	window.location.href="http://www.baidu.com";
}