$(function () {
	$(".bottomHideBtn").on("click", function () {
		$(this).find("img").toggleClass("down");
		$(this).next(".bottomAdsContent").slideToggle();
	})
})