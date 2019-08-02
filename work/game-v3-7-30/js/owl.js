$(function () {
	$("img.lazy").lazyload({
		threshold: 100,
		effect: "fadeIn",
		failure_limit: 10,
	});

	$(".bottomHideBtn").on("click", function () {
		$(this).find("img").toggleClass("down");
		$(this).next(".bottomAdsContent").slideToggle();
	});
})