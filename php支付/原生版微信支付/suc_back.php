<?php 
    $data=file_get_contents('php://input');
    
    $msg = (array)simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);

	if($msg['result_code'] == "SUCCESS") {
		// 支付成功这里要做的操作！
		$sql = "update ....";//可以修改订单的状态之类的

	} 
	echo '<xml>
      <return_code><![CDATA[SUCCESS]]></return_code>
      <return_msg><![CDATA[OK]]></return_msg>
    </xml>';
?>