$(function () {
	function showAnimation() {
		var lis = $('.fadeIn');
		//swHeight=滚动的高度+窗体的高度；当li的offset高度<=swHeight,那么说明当前li显示在可视区域了
		var swHeight = $(window).scrollTop() + $(window).height();
		var sch = $(window).scrollTop();
		$.each(lis, function (index, item) {
			var mTop = item.offsetTop;
			if (mTop < swHeight && mTop + 100 > sch) {

				$(this).addClass("m_show");
			} else {
				$(this).removeClass("m_show");
			}
		});
	}
	showAnimation();
	$(window).on("scroll", function () {
		showAnimation();
	});


	$(".bottomHideBtn").on("click", function () {
		$(this).find("img").toggleClass("down");
		$(this).next(".bottomAdsContent").slideToggle();
	});
})