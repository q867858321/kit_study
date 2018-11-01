define([],

function () {

    var setup = function (module_jQ) {
    	// jQuery对象区
        var model_button_jQ = $('.e.model_btn', module_jQ);
        var mdl_jQ=$('.e.mdl', module_jQ);
        
        // jQuery对象区
    	var select_jQs = $('.e.select',module_jQ);
        var select_make_jQ = select_jQs.filter('[data-type=make]');
        var select_model_jQ = select_jQs.filter('[data-type=model]');
        var select_year_jQ = select_jQs.filter('[data-type=year]');
      	
      	// 常量区
    	var ORIGIN_TIP_MAP = {
            make: $(".select").filter("[data-type=make]").find(".caption").text(),
            model: $(".select").filter("[data-type=model]").find(".caption").text(),
            year: $(".select").filter("[data-type=year]").find(".caption").text(),
        };
        var MAKE_LIST=["Honda"];  //TODO获取数据
        var ONE_COL_BOUNDARY = 9;
        var THREE_COL_BOUNDARY = 21;
        var FOUR_COL_BOUNDARY = 60;
        var MAX_ROW_COUNT = 15;
        // 变量区
        var ISSHOWAUTO=false; 
        // 模板区
        var selection_tmp_wall_html = [];
//      selection_tmp_wall_html.push('<div class="e wall p_div_shadow">');
        selection_tmp_wall_html.push('    <div class="e close"></div>');
        selection_tmp_wall_html.push('    <div class="e list p_clear">');
        selection_tmp_wall_html.push('        {%list%}');
        selection_tmp_wall_html.push('    </div>');
//      selection_tmp_wall_html.push('</div>');
        var selection_tmp_wall = selection_tmp_wall_html.join("");
        
        // 生成面板的HTML
        function requireWall(list,panel,adjust){
        	var len=list.length;
        	if(len<0){
        		return ;
        	}
        	var item_arr=[];
        	for(var i in list){
        		item_arr.push('<li class="e item">'+list[i]+'</li>');
        	}
        	
        	// 桌面端重新排列
            if ($.isDesktop()) {
                // 计算行数和列数
                adjust = adjust || 0;
                var colCount = 3;
                
                console.log(MAX_ROW_COUNT);
                var rowCount = MAX_ROW_COUNT;

                if (list.length <= ONE_COL_BOUNDARY) {
                    colCount = 1;
                    rowCount = list.length;
                } else if (list.length <= THREE_COL_BOUNDARY) {
                    colCount = 3 + adjust;
                    rowCount = Math.ceil(list.length / colCount);
                } else if (list.length > THREE_COL_BOUNDARY && list.length <= FOUR_COL_BOUNDARY) {
                    colCount = 4 + adjust;
                    rowCount = Math.ceil(list.length / colCount);
                } else {
                    colCount = Math.ceil(list.length / MAX_ROW_COUNT) + adjust;
                    rowCount = MAX_ROW_COUNT;
                }

                new_item_arr = [];

                for (var i = 0; i < item_arr.length; i++) {

                    var item = item_arr[i];

                    if (i % rowCount == 0) {
                        new_item_arr.push('<ul>');
                    }

                    new_item_arr.push(item);

                    if ((i + 1) % rowCount == 0 || (i + 1) == list.length) {
                        new_item_arr.push('</ul>');
                    }
                }

                item_arr = new_item_arr;
                console.log(item_arr);
            }
            else {
                item_arr.unshift('<ul>');
                item_arr.push('</ul>');
            }
        	
        	
        	var selection_tmp_wall_html = selection_tmp_wall.replace("{%list%}", item_arr.join(""));
        	panel.find(".wall").html(selection_tmp_wall_html);
        	panel.addClass("clickable");
        	if(ISSHOWAUTO){
        		panel.find(".wall").removeClass("p_hide");
        	}
      		
        }
        
       
        //渲染make
        function renderMake(){
        	requireWall(MAKE_LIST,select_make_jQ);
        	
        	if(select_make_jQ.find(".wall .item").length==1){
        		ISSHOWAUTO=true;
        		select_make_jQ.hide();
        		select_make_jQ.find(".wall .item").click();
        	}
        }
        //渲染model
        function renderModel(model_list,select_model_jQ){
        	requireWall(model_list,select_model_jQ);
        	if(select_model_jQ.find(".wall .item").length==1){
        		select_model_jQ.find(".wall .item").click();
        	}
        }
        //渲染year
        function renderYear(year_list,select_year_jQ){
        	requireWall(year_list,select_year_jQ);
        }
        
        
        // 点击选择框触发
    	module_jQ.on("click",".clickable .caption",function(){
    		var select_jQ=$(this).parents(".e.select");
    		var wall_jQ=$(".e.wall",select_jQ);
    		
    		var index=select_jQs.index(select_jQ);
    		
    		//自己以及接下的标题恢复默认
	  		$('.e.select:gt('+index+')').each(function(){
	  			var module=$(this).data("type");
	  			$(this).find(".caption").text(ORIGIN_TIP_MAP[module]);
	  		});
    		
    		var open=wall_jQ.hasClass("p_hide");
    		
    		$(".wall",module_jQ).addClass("p_hide");
    		if(open){
    			wall_jQ.removeClass("p_hide");
    		}
    	});
    	
    	// 点击弹出框选项触发
    	select_jQs.on("click",".item",function(){
    		//判断是点击
    		var select_jQ=$(this).parents(".e.select");
    		var module=select_jQ.data("type");
    		var wall_jQ=$(".e.wall",select_jQ);
    		var caption_jQ=$(".e.caption",select_jQ);
    		//如果下面一个框中没有值，则去后台获取
    		if(module=="make"){
    			if(MAKE_LIST.length==1){
    				ISSHOWAUTO=false;
    			}
    			var list=[" Accord Accord Accord","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic","Civic"];  //TODO获取数据
    			renderModel(list,select_model_jQ);
    		}else if(module=="model"){
    			ISSHOWAUTO=true;
    			var list=["2017"];    //TODO获取数据
    			renderYear(list,select_year_jQ);
    		}
    		
    		var val=$(this).text();
    		caption_jQ.html(val);
    		wall_jQ.addClass("p_hide");
    	});
    	renderMake();
    	
    	
    	model_button_jQ.click(function(){
    		submitModel();
    	});
    	//提交数据函数
    	function submitModel(){
    		var make=select_make_jQ.find(".caption").text();
    		var model=select_model_jQ.find(".caption").text();
    		var year=select_year_jQ.find(".caption").text();
    		if(make!=ORIGIN_TIP_MAP.make&&model!=ORIGIN_TIP_MAP.model&&year!=ORIGIN_TIP_MAP.year){
	    		$("#showCondition").html(make+"-"+model+"-"+year);
    		}
    		
    	}
    }
    return {
        setup: setup
    }
})