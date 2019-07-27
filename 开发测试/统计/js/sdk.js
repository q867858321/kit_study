// 用户/该用户打开的页面的次数/页面.时长/点击数/游戏时长
// 打开页面类型:打开,刷新
// 时间：时间差（停留）
//该用户打开的页面的次数
//进入游戏页面的入口（主、分、详情推荐位）
(function ($W) {
	window.onload = function () {
		// 判断用户
		var user = sessionStorage.getItem("user");
		if (user == null) {
			user = randomPassword(20);
			sessionStorage.setItem("user", user);
		}
		console.log("user", user);


		var perPage = sessionStorage.getItem("currPage");
		var perPageType = sessionStorage.getItem("currPageType");
		var perDate = sessionStorage.getItem("currDate");
		console.log("上次页面", perPage);
		var isFirst = false;
		if (perPage != null) {
			sessionStorage.setItem("perPage", perPage);
			sessionStorage.setItem("perPageType", perPageType);
			sessionStorage.setItem("perDate", perDate);
		} else {
			isFirst = true;
		}

		var currPage = window.location.href;
		//判断页面
		var oBody = document.getElementById("body");
		var currPageType = oBody.getAttribute("data-position");
		var currDate = new Date();

		var stopDate = 0;
		if (perDate != null) {
			var stopDate = currDate - new Date(perDate);
		}

		if (perPage == null) {
			console.log("用户首次进入", currPage);
		} else if (perPage != null && perPage != currPage) {
			console.log("用户为跳转过来的");
		}

		console.log("上次页面 perPage", perPage);
		console.log("上次页面 perPage类型", perPageType);
		console.log("上次时间 perDate", perDate);
		console.log("上一页面停留", stopDate);
		console.log("当前页面 currPage", currPage);
		console.log("当前页面 currPage类型", currPageType);
		console.log("当前页面 currDate", currDate);


		sessionStorage.setItem("currPage", currPage);
		sessionStorage.setItem("currPageType", currPageType);
		sessionStorage.setItem("currDate", currDate);


		var num = sessionStorage.getItem("num") || 0;
		console.log("num", num);
		num = num - 0 + 1;
		sessionStorage.setItem("num", num);

		// 获取进入的模块的位置
		var position = sessionStorage.getItem("position");

		//#TODO 在滑动的位置加
		// sessionStorage.setItem("position",'');

		console.log("position", position);
		//进入游戏页的此次
		var gamePageNum = 0;
		if (currPageType == "game") {
			gamePageNum++;
			gamePageNum = sessionStorage.getItem("gamePageNum") - 0 + 1;
			sessionStorage.setItem("gamePageNum", gamePageNum);
		}
		var gamePageNum = sessionStorage.getItem("gamePageNum");
		//点击游戏的次数
		var playNum = sessionStorage.getItem("playNum") || 0;


		//用户设备信息
		var appVersion = navigator.appVersion;




		var params = {
			user: user, //用户
			position: position, //位置
			isFirst: isFirst, //是不是首次进入
			currPage: currPage, //当前的页面
			currPageType: currPageType, //当前页面类型
			perPage: perPage, //上个页面
			perPageType: perPageType, //上个页面类型
			stopDate: stopDate, //上个页面停留
			gamePageNum: gamePageNum, //进入页面页的次数
			playNum: playNum, //点击play按钮的次数
			appVersion: appVersion, //用户设备信息
		};
		//获取游戏页信息
		var gameInfo = {}
		if (currPageType == 'game') {
			gameInfo = getGameInfo();
			Object.assign(params, gameInfo);
		}
		console.log("params", params);


		//1.游戏点击 2.容器 3.上页停留时间 
		//3 PV  游戏id +游戏地址 
		//点击more 组件 
		// onlood PV 地址

		// $W.show=show;
		model(); //模块绑定
		sendParams(params); //发送数据
	}

})(window);
//生成随机用户id
function randomPassword(size) {
	var seed = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'Q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'2', '3', '4', '5', '6', '7', '8', '9'
	); //数组
	var seedLength = seed.length; //数组长度
	var createPassword = '';
	for (var i = 0; i < size; i++) {
		var j = Math.floor(Math.random() * seedLength);
		createPassword += seed[j];
	}
	return createPassword;
}
//模块绑定
function model() {
	var oSectionArr = document.getElementsByTagName("section");
	for (let i = 0; i < oSectionArr.length; i++) {
		oSectionArr[i].addEventListener("click", function (e) {
			var isWatch = oSectionArr[i].getAttribute("data-isWatch");
			var position = oSectionArr[i].getAttribute("data-position");
			if (isWatch == 'true') {
				sessionStorage.setItem("position", position);
			}

		}, true); //若为false则是冒泡事件
	}

	// var oA = document.getElementsByTagName("a");
	// for (let i = 0; i < oA.length; i++) {
	// 	oA[i].addEventListener("click", function () {
	// 		var isWatch = oA[i].getAttribute("data-isWatch");
	// 		var toType = oA[i].getAttribute("data-type");
	// 		if (isWatch == 'true') {
	// 			sessionStorage.setItem("toType", toType);
	// 		}
	// 	})
	// }

	var oPlayBtn = document.getElementById("playBtn");
	if (oPlayBtn) {
		oPlayBtn.addEventListener("click", function (e) {
			var isWatch = oPlayBtn.getAttribute("data-isWatch");
			var playNum = sessionStorage.getItem("playNum") || 0;
			if (isWatch == 'true') {
				playNum++;
				sessionStorage.setItem("playNum", playNum);
			}
		}, false)
	}

}

//详情页游戏信息
function getGameInfo() {
	var oGame = document.getElementById("gameInfoDate");
	return {
		gameName: oGame.getAttribute("data-gName"),
		gId: oGame.getAttribute("data-gId"),
		gType: oGame.getAttribute("data-gType")
	}
}
//发送数据
function sendParams(params) {
	//拼接参数串
	var args = '';
	for (var i in params) {
		if (args != '') {
			args += '&';
		}
		args += i + '=' + encodeURIComponent(params[i]);
	}
	var img = new Image(1, 1);
	img.src = 'http://analytics.codinglabs.org/1.gif?' + args;
};



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