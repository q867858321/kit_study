// 用户/该用户打开的页面的次数/页面.时长/点击数/游戏时长
// 打开页面类型:打开,刷新
// 时间：时间差（停留）
//该用户打开的页面的次数
(function(){
		// 判断用户
	var user=sessionStorage.getItem("user");
	if(user==null){
		user=randomPassword(20);
		sessionStorage.setItem("user",user);
	}
	console.log("user",user);
	
	
	
	var perPage = sessionStorage.getItem("currPage");
	var perDate = sessionStorage.getItem("currDate");
	console.log("上次页面",perPage);
	if(perPage!=null){
		sessionStorage.setItem("perPage",perPage);
		sessionStorage.setItem("perDate",perDate);
	}
	var currPage = window.location.href;
	var currDate = new Date();
	// var stopDate = currDate - new Date(perDate);
	// if(perPage==null){
	// 	console.log("用户首次进入",page);
	// }else if(perPage!=null&&perPage!=currPage){
	// 	console.log("用户为跳转过来的");
	// 	console.log("上一页面", perPage, '停留', stopDate);
	// }
	
	console.log("上次页面 perPage",perPage);
	console.log("上次时间 perDate",perDate);
	console.log("当前页面 currPage",currPage);
	console.log("当前页面 currDate",currDate);

	
	sessionStorage.setItem("currPage", currPage);
	sessionStorage.setItem("currDate", currDate);


	var num=sessionStorage.getItem("num")||0;
	console.log("num",num);
	num=num-0+1;
	sessionStorage.setItem("num", num);
	// 上页面停留
	var stopTime=currDate-perDate;
	
	function randomPassword(size){
	  var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
	  'a','b','c','d','e','f','g','h','i','j','k','m','n','p','Q','r','s','t','u','v','w','x','y','z',
	  '2','3','4','5','6','7','8','9'
	  );//数组
	  var seedlength = seed.length;//数组长度
	  var createPassword = '';
	  for (var i=0;i<size;i++) {
	    var j = Math.floor(Math.random()*seedlength);
	    createPassword += seed[j];
	  }
	  return createPassword;
	}
})()







// var xhr;
// if (window.XMLHttpRequest){
// 	//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
// 	xmlhttp=new XMLHttpRequest();
// }else{
// 	// IE6, IE5 浏览器执行代码
// 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// }
// xhr.open("method", "url", "async");
// xhr.send(null);
// xhr.onreadystatechange = function() {
// 	if (xhr.readystate == 4) {
// 		if (xhr.status == 200) {
// 			console.log(xhr.responseText)
// 		}
// 	}
// }
