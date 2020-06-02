$(function () {
	function showAnimation() {
		var lis = $('.fadeIn');
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