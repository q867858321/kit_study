//定时 缓存
let MyLocalStorage ={					
    /**
     * 总容量5M
     * 存入缓存，支持字符串类型、json对象的存储
     * 页面关闭后依然有效 ie7+都有效
     * @param key 缓存key
     * @param stringVal
     * @time 数字 缓存有效时间（秒） 默认60s 
     * 注：localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。不能控制缓存时间，故此扩展
     * */
    set : function(key,stringVal,time){
        try{
            if(!localStorage){return false;}
            if(!time || isNaN(time)){time=60;}
            var cacheExpireDate = (new Date()-1)+time*1000;
            var cacheVal = {val:stringVal,exp:cacheExpireDate};
            localStorage.setItem(key,JSON.stringify(cacheVal));//存入缓存值
            //console.log(key+":存入缓存，"+new Date(cacheExpireDate)+"到期");
        }catch(e){}	
    },
    /**获取缓存*/
    get : function (key){
        try{
            if(!localStorage){return false;}
            var cacheVal = localStorage.getItem(key);
            var result = JSON.parse(cacheVal);
            var now = new Date()-1;
            if(!result){return null;}//缓存不存在
            if(now>result.exp){//缓存过期
                this.remove(key);					
                return "";
            }
            //console.log("get cache:"+key);
            return result.val;
        }catch(e){
            this.remove(key);
            return null;
        }
    },/**移除缓存，一般情况不手动调用，缓存过期自动调用*/
    remove : function(key){
        if(!localStorage){return false;}
        localStorage.removeItem(key);
    },/**清空所有缓存*/
    clear : function(){
        if(!localStorage){return false;}
        localStorage.clear();
    }
}
export default MyLocalStorage;



//调用方法1.存入用户信息1天,并取出
var user = {name:'demo1',nickName:'测试账号'}
MyLocalStorage.set("cookieKey",user,1*24*60*60);//存储一天
MyLocalStorage.get("cookieKey");//得到的是Object {name: "demo1", nickName: "测试账号"}，如果过期，此处取到的是空字符串
//调用方法2.存入字符串1分钟
var str = "xxx存入localStorage";
MyLocalStorage.set("cookieKey",str,60);//存储一天
//其他移除、清空等操作，在此我便无需写了，相信各位一看便知。