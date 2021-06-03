<?php
/*
*	微信支付类，可直接根据各种框架复制里面的方法直接引用！
*	注意：因为我开发使用的是laravel，所以里面的请求方法可以自行替换
*	by:leoyi (330168885@qq.com)
*	Date:2018-4-17
*/
class PayController{
	private $appid=""; //小程序appid
	private $appsecret= ""; //小程序的secret
	private $MCHID=""; //商户号id
	private $KEY=""; //商户号key
	/*
	*   发起支付回调支付信息
	*   by:leoyi
	*   Date:2018-4-8
	*/
	public function payOrder(Request $request){
	    $total_fee = $request->get('total_fee'); //支付金额
	    $openid = $request->get('openid'); //用户的Openid
	    if(empty($total_fee) || empty($openid)){ //一定要有用户Openid和支付金额
	        die("缺少参数!");
	    }

	    $total_fee = $total_fee * 100; //支付金额单位是分的，所以要乘100

	    $appid = $this->appid;
 	    $MCHID = $this->MCHID; //商户号
	    $KEY =  $this->KEY; //商户key

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
	    $sign_str = $this->ToUrlParams($data);
	    $sign_str = $sign_str."&key=".$KEY;
	    $data['sign'] = strtoupper(md5($sign_str));
	    $xml = $this->arrayToXml($data);
	    $r = $this->postXmlCurl($xml,$url,true);
	    $result = json_decode($this->xml_to_json($r));

	    if($result->return_code == 'SUCCESS'){
	        $sdata['appId'] = $appid;
	        $sdata['timeStamp'] = time();
	        $sdata['nonceStr'] = md5(time().rand().rand().$openid);
	        $sdata['package'] = "prepay_id=".$result->prepay_id;
	        $sdata['signType'] = "MD5";

	        ksort($sdata);
	        $sign_str = $this->ToUrlParams($sdata);
	        $sign_str = $sign_str."&key=".$KEY;
	        $sdata['paySign'] = strtoupper(md5($sign_str));

	        echo json_encode($sdata);

	    }
	    // -----------------------都不用改-----------------------------------------------
	}
	/**
	 * 【支付成功后回调】
	 *
	 *  by: leoyi 
	 *  Date:2018-04-08
	*/
	public function suc_call(Request $request) {
	    $data=file_get_contents('php://input');
	    
	    $msg = (array)simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);

		if($msg['result_code'] == "SUCCESS") {
			// 支付成功这里要做的操作！
			$sql = "update ....";//可以修改订单的状态之类的
			$result = DB::update($sql);
		} 
		echo '<xml>
	      <return_code><![CDATA[SUCCESS]]></return_code>
	      <return_msg><![CDATA[OK]]></return_msg>
	    </xml>';
	}
	/**
	 * 【退款的接口】
	 *
	 * by:leoyi 
	 * Date: 2018-04-08
	*/
	private function payRefund(Request $request){
		// 具体代码后期另外写 也可以联系我私发
	}
	/*
	*	注意：以下方法都是为了方便直接调取转换格式用的方法，
	*	个人需要可以另外抽取出来放
	*==========================================
	*	以下代码不需要修改！！
	*/
	/**
	 * 用户post方法请求xml信息用的
	 * @author write by leoyi 2018-04-8
	*/
	public function postXmlCurl($xml, $url, $useCert = false, $second = 10)
	{
	    $ch = curl_init();
	    //设置超时
	    curl_setopt($ch, CURLOPT_TIMEOUT, $second);
	    curl_setopt($ch,CURLOPT_URL, $url);
	    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);
	    curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);//严格校验2
	    //设置header
	    curl_setopt($ch, CURLOPT_HEADER, FALSE);
	    //要求结果为字符串且输出到屏幕上
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	    curl_setopt($ch, CURLOPT_POST, TRUE);
	    curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
	    //运行curl
	    $data = curl_exec($ch);
	    //返回结果
	    if($data){
	      curl_close($ch);
	      return $data;
	    } else {
	      $error = curl_errno($ch);
	      curl_close($ch);
	      return $error;
	    }
	}
	/*
	*   用于微信支付转换认证的信息用的
	*   by:leoyi
	*   date:2018-4-8
	*/
	public function ToUrlParams($data)
	{
	  $buff = "";
	  foreach ($data as $k => $v)
	  {
	    if($k != "sign" && $v != "" && !is_array($v)){
	      $buff .= $k . "=" . $v . "&";
	    }
	  }

	  $buff = trim($buff, "&");
	  return $buff;
	}
	/*
	*   微信支付-数组转xml
	*   by:leoyi
	*   date:2018-4-8
	*/
	public function arrayToXml($arr)
	{
	    $xml = "<xml>";
	    foreach ($arr as $key=>$val)
	    {
	        if (is_numeric($val)){
	            $xml.="<".$key.">".$val."</".$key.">";
	        }else{
	             $xml.="<".$key."><![CDATA[".$val."]]></".$key.">";
	        }
	    }
	    $xml.="</xml>";
	    return $xml;
	}
	/*
	*   微信支付-数组转xml
	*   by:leoyi
	*   date:2018-4-8
	*/
	public function  xml_to_json($xmlstring) {
	    return json_encode($this->xml_to_array($xmlstring),JSON_UNESCAPED_UNICODE);
	}
	/*
	*   post方法
	*   by:leoyi
	*   date:2018-4-8
	*/
	public function post_url($post_data, $url)
	{
	  $ch = curl_init();
	  //设置超时
	  curl_setopt($ch, CURLOPT_TIMEOUT, 10);

	  curl_setopt($ch,CURLOPT_URL, $url);

	  curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);
	  curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);//严格校验2

	  curl_setopt($ch, CURLOPT_HEADER, FALSE);

	  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);


	  curl_setopt($ch, CURLOPT_POST, TRUE);
	  curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

	  $data = curl_exec($ch);
	  curl_close($ch);
	  return $data;
	}
	/*
	* 把xml转换成array
	* by:leoyi
	* Date:2018-4-11
	*/
	public function xml_to_array($xml) {
	    //return ((array) simplexml_load_string($xmlstring));
	  return simplexml_load_string($xml,'SimpleXMLElement',LIBXML_NOCDATA);

	    //return json_decode(xml_to_json($xmlstring));
	}
}