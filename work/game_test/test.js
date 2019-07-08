　function GetUrlRelativePath()
　　{
　　　　var url = document.location.toString();
　　　　var arrUrl = url.split("//");
	
　　　　var start = arrUrl[1].indexOf("/");
　　　　var relUrl = arrUrl[1].substring(0,start);//stop省略，截取从start开始到结尾的所有字符

	console.log("relUrl",arrUrl[0]+'//'+relUrl)
　　　　return relUrl;
　　}

GetUrlRelativePath()