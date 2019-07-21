$(function(){
	var isInPhone=isInPhone();
	if(!isInPhone){
		$("#body").addClass("pc");
	}else{
		$("#body").addClass("phone");
	}
	
	function isInPhone(){
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			return true     //手机
		} else {
			return false       //电脑
		}
	}
})


