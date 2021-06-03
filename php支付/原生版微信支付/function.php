<?php 
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
	function postXmlCurl($xml, $url, $useCert = false, $second = 10)
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
	function ToUrlParams($data)
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
	function arrayToXml($arr)
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
	function  xml_to_json($xmlstring) {
	    return json_encode($this->xml_to_array($xmlstring),JSON_UNESCAPED_UNICODE);
	}
	/*
	*   post方法
	*   by:leoyi
	*   date:2018-4-8
	*/
	function post_url($post_data, $url)
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
	function xml_to_array($xml) {
	    //return ((array) simplexml_load_string($xmlstring));
	  return simplexml_load_string($xml,'SimpleXMLElement',LIBXML_NOCDATA);

	    //return json_decode(xml_to_json($xmlstring));
	}
?>