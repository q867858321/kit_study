<?php 
	include "function.php";//引用函数文件
	$appid=""; //小程序appid
	$appsecret= ""; //小程序的secret
	$MCHID=""; //商户号id
	$KEY=""; //商户号key
	/*
	*   发起支付回调支付信息
	*   by:leoyi
	*   Date:2018-4-8
	*/
    $total_fee = $_REQUEST['total_fee']; //支付金额
    $openid = $_REQUEST['openid']; //用户的Openid
    if(empty($total_fee) || empty($openid)){ //一定要有用户Openid和支付金额
    	die("缺少参数");
    }

    $total_fee = $total_fee * 100; //支付金额单位是分的，所以要乘100

    $url = "https://api.mch.weixin.qq.com/pay/unifiedorder";

    $data['appid'] = $appid;  //小程序appid
    $data['mch_id'] = $MCHID;	//商户号id
    $data['nonce_str'] = md5($MCHID.time()); //验证的支付
    $data['openid'] = $openid; //用户openid
    $data['body'] = '商家名称'; //微信支付对应的商家/公司主体名
    $data['out_trade_no'] = date("YmdHis").rand(0,1000); //订单号id,用于回调改订单状态
    $data['total_fee'] = $total_fee; //支付金额，单位为分！！
    $data['spbill_create_ip'] = '8.8.8.8'; //验证ip地址，这个不用改随意
    $data['notify_url'] = "http://www.shuaiqi100.com/pay/suc_call"; //微信支付成功的回调路径，要写死这个路径，记得要是小程序允许访问的路径
    $data['trade_type'] = "JSAPI"; //小程序支付，所以是JSAPI

    // --------------------以下这一串都不用改--------------------------------
    ksort($data); 
    $sign_str = ToUrlParams($data);
    $sign_str = $sign_str."&key=".$KEY;
    $data['sign'] = strtoupper(md5($sign_str));
    $xml = arrayToXml($data);
    $r = postXmlCurl($xml,$url,true);
    $result = json_decode(xml_to_json($r));

    if($result->return_code == 'SUCCESS'){
        $sdata['appId'] = $appid;
        $sdata['timeStamp'] = time();
        $sdata['nonceStr'] = md5(time().rand().rand().$openid);
        $sdata['package'] = "prepay_id=".$result->prepay_id;
        $sdata['signType'] = "MD5";

        ksort($sdata);
        $sign_str = ToUrlParams($sdata);
        $sign_str = $sign_str."&key=".$KEY;
        $sdata['paySign'] = strtoupper(md5($sign_str));

        echo json_encode($sdata);

    }
    // -----------------------都不用改-----------------------------------------------
?>