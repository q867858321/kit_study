define([],

function () {

    var setup = function (module_jQ) {
    	
    	// jQuery对象区
        var vin_input_jQ = $('.e.input', module_jQ);
        var vin_button_jQ = $('.e.vin_btn', module_jQ);
        
        var vin_title_jQ = $('.e.title', module_jQ);
        var vin_title_a_jQ = $('a', vin_title_jQ);
        // 常量区
        var VIN_DEFAULT = "Enter the VIN of Your Vehicle";
        var BRAND = $('#e_page_brand').val() || '111';  //TODO
        
        // 模板区
        var selection_tmp_vin_tip_html = [];
        selection_tmp_vin_tip_html.push('<div class="dlg_tip">');
        selection_tmp_vin_tip_html.push('    <p class="t">Your VIN (Vehicle Identification Number) is a 17-character code that uniquely identifies all vehicles.</p>');
        selection_tmp_vin_tip_html.push('    <br />');
        selection_tmp_vin_tip_html.push('    <p class="b">It can be found on the vehicle\'s title, registration, and insurance papers, driver side of the dashboard near the windshield, and on the driver\'s side door jamb.</p>');
        selection_tmp_vin_tip_html.push('    <a target="_blank" href="/service/{%brand%}-vin-number.html">More Info</a>');
        selection_tmp_vin_tip_html.push('</div>');
        var selection_tmp_vin_tip = selection_tmp_vin_tip_html.join("");
        
        // 注册弹出框：Vin说明提示
        vin_title_a_jQ.click(function () {
            var body_jQ = $(selection_tmp_vin_tip.replace("{%brand%}", BRAND.toLowerCase()));
            vin_title_a_jQ.popoutGuide(body_jQ);
        });
        
        
    	 // 点击Vin搜索
        vin_button_jQ.click(function () {
			submitByVin();
        });
        // 输入框回车搜索
        vin_input_jQ.keydown(function(e) {  
           	if (e.keyCode == 13) {  
                submitByVin();
           	}  
      	}); 
      function submitByVin(){
      	var vin = vin_input_jQ.val();

        //如果未输入任何有效的字符，要显示提示信息
        if (vin == "" || vin == VIN_DEFAULT) {
            alert("The VIN should be 17 characters in length.");
            return false;

        } else {
            vin = vin.replace(/\u0020/g, "").replace(/(^\\s*)|(\\s*$)/g, "").toUpperCase();
            alert(vin);//TODO
        }
      }
    }
    return {
        setup: setup
    }
})