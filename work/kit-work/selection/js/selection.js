define(['selection_by_vin','selection_by_model'],function(selection_by_vin,selection_by_model){
	var setup = function (module_jQ) {
		// jQuery对象区
		var vin_jQ = $('.e.vin', module_jQ);
		var model_jQ = $('.e.mdl', module_jQ);
		
		var byvin_jQ = $('.e.byvin', module_jQ);
        var bymodel_jQ = $('.e.bymdl', module_jQ);
        
        
        // 初始化ByVin
        selection_by_vin.setup(vin_jQ);
        // 初始化ByModel
        selection_by_model.setup(model_jQ);
		
		 // 点击byvin标签
        byvin_jQ.click(function () {
            vin_jQ.show();
            model_jQ.hide();
        });

        // 点击bymodel标签
        bymodel_jQ.click(function () {
            vin_jQ.hide();
            model_jQ.show();
        });
	}
	return {
        setup: setup
    }
});