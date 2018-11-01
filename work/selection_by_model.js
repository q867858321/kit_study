define(["selection_opt/selection_opt"],

function (selection_opt) {

    var setup = function (module_jQ) {

        // jQuery对象区
        var model_button_jQ = $('.e.find', module_jQ);
        var switch_jQ = $('.e.switch', module_jQ);
        var switch_item_jQs = $('.e.item', switch_jQ);
        var select_jQs = $('.e.select', module_jQ);
        var select_make_jQ = select_jQs.filter('[data-type=make]');
        var select_model_jQ = select_jQs.filter('[data-type=model]');
        var select_year_jQ = select_jQs.filter('[data-type=year]');
        var select_submodel_jQ = select_jQs.filter('[data-type=submodel]');
        var select_extra1_jQ = select_jQs.filter('[data-type=extra1]');
        var select_extra2_jQ = select_jQs.filter('[data-type=extra2]');

        var selection_jQ = module_jQ.parents('.m_selection');
        var selection_opt_jQ = $('.e.selection_opt', module_jQ);

        // 常量区
        var CURRENT_URL = location.href;
        var TYPE = $('#e_page_type').val() || PageType.Default;
        var KEY = $('#e_page_key').val() || '';
        var MAKE_LIST = $.parseJSON($('#e_selection_make_list', module_jQ).getVal());
        var YEAR_LIST = $.parseJSON($('#e_selection_year_list', module_jQ).getVal());

        var DEFAULT_MAKE = $('#e_selection_default_make', module_jQ).val() || '';
        var DEFAULT_MODEL = $('#e_selection_default_model', module_jQ).val() || '';
        var DEFAULT_YEAR = $('#e_selection_default_year', module_jQ).val() || '';
        var DEFAULT_SUBMODEL = $('#e_selection_default_submodel', module_jQ).val() || '';
        var HAS_EXTRA = $('#e_selection_has_extra', module_jQ).getVal().toBoolean() || false;
        var IS_INCOMPLETE_CV = $('#e_selection_is_incomplete', module_jQ).getVal().toBoolean() || false;
        var DEFAULT_EXTRA1 = $('#e_selection_default_extra1', module_jQ).val() || '';
        var HAS_OPTIMIZE_PD = $('#e_selection_has_optimize_pd').getVal().toBoolean() || false;   // PD优化新增
        var ACC_HOME_LINK = $('#e_page_home_link').getVal() || '';

        if (!selection_jQ.isExist()) {
            selection_jQ = module_jQ.parents('.m_selection_hr');
        }

        var IS_LAZY_LOAD_EXTRA = false;
        var ONE_COL_BOUNDARY = 9;
        var THREE_COL_BOUNDARY = 21;
        var FOUR_COL_BOUNDARY = 60;
        var MAX_ROW_COUNT = 15;

        var ORIGIN_TIP_MAP = {
            make: select_make_jQ.text(),
            model: select_model_jQ.text(),
            year: select_year_jQ.text(),
            submodel: select_submodel_jQ.text(),
            extra1: select_extra1_jQ.text().trim(),
            extra2: select_extra2_jQ.text().trim(),
        };

        // 变量区
        var IsAubPrimePC = $.isPrime() && !$.isMotor() && $.isPC();
        var vehiclesCurrentUrl = ACC_HOME_LINK.length > 0 ? ACC_HOME_LINK : CURRENT_URL;
        var hasImage = false;
        var IsLoading = false;

        // 模板区
        var selection_tmp_wall_html = [];
        selection_tmp_wall_html.push('<div class="e wall p_div_shadow">');
        selection_tmp_wall_html.push('    <div class="e close"></div>');
        selection_tmp_wall_html.push('    <div class="e list p_clear">');
        selection_tmp_wall_html.push('        {%list%}');
        selection_tmp_wall_html.push('    </div>');
        selection_tmp_wall_html.push('</div>');
        var selection_tmp_wall = selection_tmp_wall_html.join("");


        // 生成面板的HTML
        var requireWall = function (list, adjust) {

            // 依次生成每一项
            var item_arr = [];

            for (var i = 0; i < list.length; i++) {

                var item = list[i];
                item_arr.push('<li class="e item">' + item + '</li>');
            }

            // 桌面端重新排列
            if ($.isDesktop()) {

                // 计算行数和列数
                adjust = adjust || 0;
                var colCount = 3;
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
            }
            else {
                item_arr.unshift('<ul>');
                item_arr.push('</ul>');
            }

            var selection_tmp_wall_html = selection_tmp_wall.replace("{%list%}", item_arr.join(""));


            return selection_tmp_wall_html;
        };

        // 生成Submodel面板的HTML
        var requireSubmodelWall = function (list) {

            var make = select_make_jQ.children('.e.caption').text();
            var model = select_model_jQ.children('.e.caption').text();
            var year = select_year_jQ.children('.e.caption').text();

            var oldBodyImage = "/part-images/tutorial/" + make + "/" + model + "/" + year + "/old-body-style.png";
            var newBodyImage = "/part-images/tutorial/" + make + "/" + model + "/" + year + "/new-body-style.png";

            var newList = $.grep(list, function (n, i) { return n.contains("New"); });
            var oldList = $.grep(list, function (n, i) { return n.contains("Old"); });
            var hatchOrSedanList = $.grep(list, function (n, i) { return n.contains("Hatchback") || n.contains("Sedan"); });

            // 依次生成每一项
            var item_arr = [];
            item_arr.push('<ul class="sm_list">');

            if ((newList.length > 1 || oldList.length > 1) && hatchOrSedanList.length == 0) {  // 分组形态

                // New Body Style
                item_arr.push('  <div class="block group">');
                item_arr.push('    <p class="text"><span>New Body Style</span></p>');
                item_arr.push('    <p class="img"><img src="' + newBodyImage + '"></p>');
                item_arr.push('  </div>');

                for (var i = 0; i < newList.length; i++) {

                    var item = newList[i];

                    item_arr.push('<li class="e sm_item p_clear" data-value="' + item + '">');
                    item_arr.push('    <p class="text"><span>' + item.replace("New Body Style", "").replace("(", "").replace(")", "") + '</span></p>');
                    item_arr.push('</li>');
                }

                // Old Body Style
                item_arr.push('  <div class="block group last">');
                item_arr.push('    <p class="text"><span>Old Body Style</span></p>');
                item_arr.push('    <p class="img"><img src="' + oldBodyImage + '"></p>');
                item_arr.push('  </div>');

                for (var i = 0; i < oldList.length; i++) {

                    var item = oldList[i];

                    item_arr.push('<li class="e sm_item last p_clear" data-value="' + item + '">');
                    item_arr.push('    <p class="text"><span>' + item + '</span></p>');
                    item_arr.push('</li>');
                }

            }
            else {  // 列表形态

                for (var i = 0; i < list.length; i++) {

                    var item = list[i];
                    var imagePath = (item.contains("New")) ? newBodyImage : oldBodyImage;

                    if (item.contains("Hatchback") || item.contains("Sedan")) {
                        var imagePath = "/part-images/tutorial/" + make + "/" + model + "/" + year + "/" + item + ".png";
                    }

                    item_arr.push('<li class="e sm_item p_clear" data-value="' + item + '">');
                    item_arr.push('  <div class="block">');
                    item_arr.push('    <p class="text"><span>' + item + '</span><p>');
                    item_arr.push('    <p class="img"><img src="' + imagePath + '"></p>');
                    item_arr.push('  </div>');
                    item_arr.push('</li>');
                }
            }

            item_arr.push('<p class="sm_tip"><span>Tip: Using VIN for most accurate result</span></p>');
            item_arr.push('</ul>');

            var selection_tmp_wall_html = selection_tmp_wall.replace("{%list%}", item_arr.join(""));

            return selection_tmp_wall_html;
        };

        // 初始化面板的事件
        var setupWall = function (list, select_jQ, callback) {

            var isMake = select_jQ.data('type') == "make";
            var isModel = select_jQ.data('type') == "model";
            var isYear = select_jQ.data('type') == "year";
            var isSubmodel = select_jQ.data('type') == "submodel";
            var isExtra1 = select_jQ.data('type') == "extra1";
            var isExtra2 = select_jQ.data('type') == "extra2";

            var caption_jQ = $('.e.caption', select_jQ);

            // 生成面板HTML
            var wall_html = "";

            if (isSubmodel && hasImage) {
                wall_html = requireSubmodelWall(list);
            } else {
                wall_html = requireWall(list);
            }


            // 添加到选择框中，并解禁选择框
            var wall_jQ = $('.e.wall', select_jQ);
            if (!wall_jQ.isExist()) {
                select_jQ.append(wall_html);
            }
            select_jQ.enable();

            // 获得面板jQ并展示
            wall_jQ = $('.e.wall', select_jQ);
            var close_jQ = $('.e.close', select_jQ);
            var list_jQ = $('.e.list', select_jQ);

            // 选择框事件
            select_jQ.click(function () {

                var all_wall_jQs = $('.e.wall', select_jQs);

                if (!wall_jQ.isDisplay()) {
                    all_wall_jQs.hide();
                    wall_jQ.show();

                    if ($.isDesktop()) wall_jQ.stopOverflow(true);
                }
                else {
                    all_wall_jQs.hide();
                }

            });


            // 添加Tutorial
            var caption = select_jQ.data("caption");
            var tutorial = select_jQ.data("tutorial");

            if (tutorial) {
                var htmlArr = [];
                htmlArr.push('<div class="e tutorial">');
                htmlArr.push('   <span>What is ' + caption + '</span> <mark></mark>');
                htmlArr.push('</div>');
                var tutorial_jQ = $(htmlArr.join(""));

                var mark_jQ = $('mark', tutorial_jQ);
                mark_jQ.click(function (e) {
                    mark_jQ.popoutGuide($(tutorial));
                    e.stopPropagation();
                });

                list_jQ.before(tutorial_jQ);
            }

            // 自动展开当前选车框
            // ① NameSearch
            // ② 前一个选择框不是自动的
            // ③ 当前不是Make下拉框
            // ④ 前一个选择框是自动的，当前选择框是extra1或extra2
            var keywords = module_jQ.data("keywords");
            var prev_select_jQ = select_jQ.prev(".e.select");
            if (isExtra1 && !prev_select_jQ.isDisplay()) {
                prev_select_jQ = prev_select_jQ.prev(".e.select");
            }
            var isPrevAuto = prev_select_jQ.getAuto() ||
                (isMake && !prev_select_jQ.isExist() && !DEFAULT_MAKE) ||
                ($.isMotor() && isYear && !prev_select_jQ.isExist());
            var autoExtra = (isExtra1 || isExtra2) && isPrevAuto && !IS_INCOMPLETE_CV;

            if (keywords || !isPrevAuto || autoExtra) {
                select_jQ.click();
            }

            // 选项事件
            var li_jQs = $('li', wall_jQ);
            li_jQs.click(function (e) {
                e.stopPropagation();
                IsLoading = true;
                var li_jQ = $(this);

                // 删除所有提示
                var li_dialog_jQ = $('.p_dialog_gd', li_jQ);
                li_dialog_jQ.remove();

                // 重置后面所有的面板
                var all_next_select_jQs = select_jQ.nextAll('.e.select');
                all_next_select_jQs.each(function () {

                    var next_select_jQ = $(this);

                    var nextSelectType = next_select_jQ.data("type");

                    // 重置标题
                    var next_caption_jQ = $('.e.caption', next_select_jQ);
                    next_caption_jQ.text(ORIGIN_TIP_MAP[nextSelectType]);

                    // 清除面板
                    var next_wall_jQ = $('.e.wall', next_select_jQ);
                    next_wall_jQ.remove();

                    // 锁定选择框
                    next_select_jQ.disable();
                    next_select_jQ.unbind('click');

                    // 如果是submodel，则隐藏
                    if (next_select_jQ.data("type") == "submodel") {
                        next_select_jQ.hide();
                    }
                });

                // 清空可选项区域
                if (selection_opt_jQ.html() != "") {
                    selection_opt_jQ.empty();
                    model_button_jQ.showBlock();
                }

                // 设置标题
                var item = li_jQ.data('value') || li_jQ.text();
                caption_jQ.text(item);

                if ((isMake || isModel || isYear || isSubmodel) && HAS_EXTRA && IS_LAZY_LOAD_EXTRA) {
                    HAS_EXTRA = false;
                    select_extra1_jQ.remove();
                    select_extra2_jQ.remove();
                }
                // 执行回调函数
                callback(item);
            });

            // 只有一个选项，一半情况下默认选定。但排除以下特例
            // ① 当是Year下拉框时，不默认选定
            // ② 有时候只有一个Model可以选择，但我们没有设置过默认Model，此时为了顺利展开下一个选项，所以不定义为auto
            // ③ Motor目录下，Make下拉框处于Year下拉框后面，当Make下拉框只有一个选项时，不管是不是默认的Make，此时为了顺利展开下一个选项，不定义为auto
            var isDefaultClick = false;
            if (li_jQs.length == 1 && !isYear) {

                if ((isModel && DEFAULT_MODEL == "") ||
                    !($.isMotor() && isMake)) {
                    select_jQ.setAuto();
                }
                
                li_jQs.click();
                isDefaultClick = true;
            }

            var isDisplay = !select_jQ.hasClass("p_hide");
            // 选中默认的Model或Year
            if ((isMake && isDisplay) || isModel || isYear || (isExtra1 && li_jQs.length > 1)) {

                var default_li_jQ = li_jQs.filter(function (i) {
                    return $(this).text() == DEFAULT_MAKE || $(this).text() == DEFAULT_MODEL || $(this).text() == DEFAULT_YEAR || $(this).text() == DEFAULT_SUBMODEL || $(this).text() == DEFAULT_EXTRA1;
                });

                if (default_li_jQ.isExist()) {

                    // 同时有默认Make和默认Model，则不自动
                    if (isMake && DEFAULT_MAKE && DEFAULT_MODEL) {
                        // Do Nothing
                    }
                    else {
                        select_jQ.setAuto();
                    }

                    if (!isDefaultClick) {
                        default_li_jQ.click();
                    }
                }
            }
        };

        // 确定车型
        var vehicleConfirm = function (make, model, year, submodel, filter) {
            var keywords = module_jQ.data("keywords");
            var category = module_jQ.data("category");
            var pageKeyUrl = module_jQ.data("pageKeyUrl");
            IsLoading = false;

            if (HAS_OPTIMIZE_PD || keywords || $.isDefault() || $.isCat() || $.isAcc() || category != undefined) { // 缺一个NameSearch
                var all_wall_jQs = $('.e.wall', select_jQs);
                all_wall_jQs.hide();

                if (HAS_OPTIMIZE_PD && TYPE == PageType.PD) {
                    // do nothing
                }
                else {
                    model_button_jQ.click();
                }

            } else if ($.isPN() || $.isPD() || $.isPL()) {

                var make = select_make_jQ.children('.e.caption').text();
                var model = select_model_jQ.children('.e.caption').text();
                var year = select_year_jQ.children('.e.caption').text();
                var submodel = select_submodel_jQ.children('.e.caption').text().trim();
                var extra1 = select_extra1_jQ.children('.e.caption').text();
                var extra2 = select_extra2_jQ.children('.e.caption').text();

                if ((submodel.startWith("--") && submodel.endWith("--")) || submodel == "Select Submodel") {
                    submodel = "";
                }
                if (HAS_EXTRA && extra1 && extra2) {
                    submodel = submodel + "," + extra1 + "," + extra2;
                }


                // 隐藏必选项区域的按钮
                model_button_jQ.hide();

                var url = "/Frontend.asmx/GetOptionDropdownHtml";
                var data = { make: make, model: model, year: year, submodel: submodel, type: TYPE, key: KEY };

                $.easyAjax(url, data, function (resp) {

                    var json = resp.toEasyJson();

                    // 生成新的可选项控件
                    var selection_opt_module_jQ = $(json);
                    selection_opt.setup(selection_opt_module_jQ);
                    selection_opt_jQ.html(selection_opt_module_jQ);

                    // 如果没有可选项区域，则重新显示出必选项区域的按钮
                    var visible_select_opt_jQs = selection_opt_module_jQ.find('.e.select').filter(function () {
                        return $(this).isDisplay();
                    });

                    if (visible_select_opt_jQs.length == 0) {
                        model_button_jQ.showBlock();
                    }
                });

            }

            // HPN系啥也不做
        };

        var getExtraHtml = function (make, model, year, submodel, type) {
            if (HAS_EXTRA) {
                registerExtra(make, model, year, submodel);
            }
            else {
                var url = "/Frontend.asmx/GetExtraHtml";
                var data = { make: make, model: model, year: year, submodel: submodel, type: type };
                $.easyAjax(url, data, function (resp) {
                    var extraHtml = resp.toEasyJson();
                    if (extraHtml != '') {
                        module_jQ.addClass('has_extra');
                        select_submodel_jQ.after($(extraHtml));
                        select_jQs = $('.e.select', module_jQ);
                        select_extra1_jQ = select_jQs.filter('[data-type=extra1]');
                        select_extra2_jQ = select_jQs.filter('[data-type=extra2]');
                        ORIGIN_TIP_MAP.extra1 = select_extra1_jQ.text().trim();
                        ORIGIN_TIP_MAP.extra2 = select_extra2_jQ.text().trim();
                        if (!HAS_EXTRA) HAS_EXTRA = true;
                        IS_LAZY_LOAD_EXTRA = true;
                        registerExtra(make, model, year, submodel);
                    }
                    else {
                        vehicleConfirm(make, model, year, submodel, []);
                    }

                });
            }
            
        };

        var registerExtra = function (make, model, year, submodel) {
            var url = "/Frontend.asmx/GetExtraList";
            var data = { make: make, model: model, year: year, submodel: submodel, higherValue: "", type: TYPE };

            $.easyAjax(url, data, function (resp) {
                IsLoading = false;
                select_extra1_jQ.unHide();

                // 初始化Extra1面板
                setupWall(resp.toEasyJson().ItemList, select_extra1_jQ, function (extra1) {

                    var wall_jQ = $('.e.wall', select_extra1_jQ);
                    if (wall_jQ) {
                        wall_jQ.hide();
                    }

                    var url = "/Frontend.asmx/GetExtraList";
                    var data = { make: make, model: model, year: year, submodel: submodel, higherValue: extra1, type: TYPE };

                    $.easyAjax(url, data, function (resp) {
                        IsLoading = false;
                        select_extra2_jQ.unHide();

                        // 初始化Extra2面板
                        setupWall(resp.toEasyJson().ItemList, select_extra2_jQ, function (extra2) {

                            var wall_jQ = $('.e.wall', select_extra2_jQ);
                            if (wall_jQ) {
                                wall_jQ.hide();
                            }
                            var submodel_with_extra = submodel + "," + extra1 + "," + extra2;
                            vehicleConfirm(make, model, year, submodel_with_extra, []);

                        });
                    });
                });
            });
        };

        // 初始化选车面板
        module_jQ.setup(function () {

            if ($.isMotor()) {

                // 初始化Year面板
                setupWall(YEAR_LIST, select_year_jQ, function (year) {

                    var wall_jQ = $('.e.wall', select_year_jQ);
                    if (wall_jQ) {
                        wall_jQ.hide();
                    }
                    select_year_jQ.inhighlight();

                    // 获取Make面板数据
                    var url = "/Frontend.asmx/GetMotorMakeList";
                    var data = { year: year, type: TYPE };

                    $.easyAjax(url, data, function (resp) {
                        IsLoading = false;
                        // 初始化Make面板
                        setupWall(resp.toEasyJson(), select_make_jQ, function (make) {

                            var wall_jQ = $('.e.wall', select_make_jQ);
                            if (wall_jQ) {
                                wall_jQ.hide();
                            }
                            // 获取Model面板数据
                            var url = "/Frontend.asmx/GetMotorModelList";
                            var data = { year: year, make: make, type: TYPE };

                            $.easyAjax(url, data, function (resp) {
                                IsLoading = false;
                                select_model_jQ.unHide();
                                // 初始化Model面板
                                setupWall(resp.toEasyJson(), select_model_jQ, function (model) {

                                    var wall_jQ = $('.e.wall', select_model_jQ);
                                    if (wall_jQ) {
                                        wall_jQ.hide();
                                    }
                                    // 获取Submodel面板数据
                                    var url = "/Frontend.asmx/GetSubmodelList";
                                    var data = { make: make, model: model, year: year, type: TYPE };

                                    $.easyAjax(url, data, function (resp) {
                                        IsLoading = false;
                                        var submodel_entity = $.parseJSON(resp).d;
                                        var submodel_list = submodel_entity["SubmodelList"];
                                        hasImage = submodel_entity["HasImage"];
                                        if (submodel_list.length > 0) {

                                            select_submodel_jQ.slideDown("fast", function () {
                                                // 初始化Submodel面板
                                                setupWall(submodel_list, select_submodel_jQ, function (submodel) {
                                                    var wall_jQ = $('.e.wall', select_submodel_jQ);
                                                    if (wall_jQ) {
                                                        wall_jQ.hide();
                                                    }
                                                    getExtraHtml(make, model, year, submodel, TYPE);
                                                });
                                            });
                                        }
                                        else {
                                            getExtraHtml(make, model, year, "", TYPE);
                                        }
                                    });
                                });

                            });
                        });
                    });
                });
                
                // 在Make页、Model页，高亮Year选车框
                if (DEFAULT_MAKE || DEFAULT_MODEL) {
                    select_year_jQ.highlight();

                    if (DEFAULT_MAKE) {
                        select_make_jQ.enable();
                        select_make_jQ.find('.e.caption').text(DEFAULT_MAKE);
                    }

                    if (DEFAULT_MODEL) {
                        select_model_jQ.enable();
                        select_model_jQ.find('.e.caption').text(DEFAULT_MODEL);
                    }
                }
            }
            else {
            // 初始化Make面板
            setupWall(MAKE_LIST, select_make_jQ, function (make) {

                var wall_jQ = $('.e.wall', select_make_jQ);
                if (wall_jQ) {
                    wall_jQ.hide();
                }
                // 获取Model面板数据
                var url = "/Frontend.asmx/GetModelList";
                var data = { make: make, type: TYPE };

                $.easyAjax(url, data, function (resp) {
                    IsLoading = false;
                    // 初始化Model面板
                    setupWall(resp.toEasyJson(), select_model_jQ, function (model) {

                        var wall_jQ = $('.e.wall', select_model_jQ);
                        if (wall_jQ) {
                            wall_jQ.hide();
                        }
                        // 获取Year面板数据
                        var url = "/Frontend.asmx/GetYearList";
                        var data = { make: make, model: model, type: TYPE };

                        $.easyAjax(url, data, function (resp) {
                            IsLoading = false;
                            select_year_jQ.unHide();
                            // 初始化Year面板
                            setupWall(resp.toEasyJson(), select_year_jQ, function (year) {

                                var wall_jQ = $('.e.wall', select_year_jQ);
                                if (wall_jQ) {
                                    wall_jQ.hide();
                                }
                                // 获取Submodel面板数据
                                var url = "/Frontend.asmx/GetSubmodelList";
                                var data = { make: make, model: model, year: year, type: TYPE };

                                $.easyAjax(url, data, function (resp) {
                                    IsLoading = false;
                                    var submodel_entity = $.parseJSON(resp).d;
                                    var submodel_list = submodel_entity["SubmodelList"];
                                    hasImage = submodel_entity["HasImage"];

                                    // 判断是不是Base Model
                                    var is_base_submodel = (submodel_list.length == 1 && ($.trim(submodel_list[0].toLowerCase()) == "base model" || $.trim(submodel_list[0].toLowerCase()) == "base"));

                                    // 有submodel并且不是base model时，拉出Submodel选车框
                                    if (submodel_list.length > 0 && !is_base_submodel) {

                                        select_submodel_jQ.slideDown("fast", function () {
                                            // 初始化Submodel面板
                                            setupWall(submodel_list, select_submodel_jQ, function (submodel) {
                                                var wall_jQ = $('.e.wall', select_submodel_jQ);
                                                if (wall_jQ) {
                                                    wall_jQ.hide();
                                                }
                                                    getExtraHtml(make, model, year, submodel, TYPE);
                                            });
                                        });
                                    }
                                    else {
                                        getExtraHtml(make, model, year, "", TYPE);
                                    }
                                });
                            });
                               
                        });
                    });
                });
            });
            }


        });


        // 点击Find按钮
        model_button_jQ.click(function () {
            if (IsLoading) return false;
            var make = select_make_jQ.children('.e.caption').text();
            var model = select_model_jQ.children('.e.caption').text();
            var year = select_year_jQ.children('.e.caption').text();
            var submodel = select_submodel_jQ.children('.e.caption').text().trim();
            var extra1 = select_extra1_jQ.children('.e.caption').text();
            var extra2 = select_extra2_jQ.children('.e.caption').text();

            // 获取所有未隐藏的Title
            var visible_select_jQs = select_jQs.filter(function (index) {
                return $(this).isDisplay();
            });

            for (var i = 0; i < visible_select_jQs.length; i++) {

                var this_select_jQ = visible_select_jQs.eq(i);
                var text = this_select_jQ.children('.e.caption').text().trim();

                if (text.startWith("--") || (HAS_OPTIMIZE_PD && text.startWith("Select ") && text != "Select Hybrid")) { // Select Hybrid是真实的车型，这里要排除
                    var text = text.replace("-- Select ", "").replace("--", "");
                    alert("Please select a " + text);
                    return false;
                }
            }

            // 在没有submodel时，或者submodel=base model时。submodel下拉框不可见，同时也不应该传入submodel
            if (!select_submodel_jQ.isDisplay() && (submodel.startWith("--") || submodel == "Base Model" || submodel == "Base" || submodel == "Select Submodel")) {
                submodel = "";
            }

            if (HAS_EXTRA && extra1 && extra2) {
                submodel = submodel + "," + extra1 + "," + extra2;
            }

            var category = module_jQ.data("category");
            var subCategory = module_jQ.data("subCategory");
            var keywords = module_jQ.data("keywords");
            var ref = $.data(document.body, 'ref');
            var pageKeyUrl = module_jQ.data("pageKeyUrl");

            TYPE = (category != undefined && pageKeyUrl == undefined ) ? PageType.Cat : TYPE;

            var url = "/Frontend.asmx/LeftToolDefaultByModel";
            if (pageKeyUrl) {
                url += '?pageKeyUrl=' + pageKeyUrl;
            }
            var data = { type: TYPE, currentUrl: vehiclesCurrentUrl, make: make, model: model, year: year, submodel: submodel, filter: "" };

            // 开始Loading效果
            if (HAS_OPTIMIZE_PD) {
                var loadArea = selection_jQ.find('.e.body');
                var loadAreaTop = (loadArea.height() / 2) / 16 - 1;
                loadArea.loadingPd(loadAreaTop + "em");
            } else {
                selection_jQ.loading("6em");
            }
    
            
            $.easyAjax(url, data, function (resp) {

                var redirectUrl = resp.toEasyJson();

                if (redirectUrl.contains("GUIDE_SEARCH")) {

                    // 生成模板
                    var bodyHtml = [];
                    bodyHtml.push('<div class="guide_search">');
                    bodyHtml.push('  <span><b>We are working to update our catalog with the latest model years which is currently unavailable.</b></span><br /><br />');
                    bodyHtml.push('  <span>If you have a part number, use our <a class="e search" href="javascript:void(0);">search feature</a> to locate your part.</span>');
                    bodyHtml.push('</div>');
                    var body_jQ = $(bodyHtml.join(""));

                    // 添加事件 
                    var guide_search_jQ = $('.e.search', body_jQ);
                    guide_search_jQ.click(function () {
                        year_wall_jQ.popHide();
                        select_year_jQ.click();
                        $.spotlightSearch();

                        var url = "/Frontend.asmx/InsertCatalogFake";
                        var data = { type: TYPE, solution: "Search", vin: "", make: make, model: model, year: year, submodel: "" };
                        $.easyAjax(url, data, function () { });
                    });

                    // 弹出提示
                    var year_wall_jQ = select_year_jQ.find('.e.wall');
                    year_wall_jQ.show();
                    year_wall_jQ.popoutGuide(body_jQ);

                    // 调整位置
                    var dialog_jQ = year_wall_jQ.find('.p_dialog_gd');
                    var dialog_arrow_jQ = dialog_jQ.find('.p_dialog_gd_arrow');
                    if ($.isDesktop()) {
                        dialog_jQ.css({ "left": "4em" });
                        dialog_arrow_jQ.css({ "top": "2.375em" });
                    }
                    else {
                        dialog_jQ.css({ "top": "3em" });
                    }

                    // 移除Loading效果
                    if (HAS_OPTIMIZE_PD) {
                        selection_jQ.find('.e.body').loadedPd();
                    } else {
                        selection_jQ.loaded();
                    }

                    return false;

                    //year_item_jQ.relative();
                    //var year_item_jQ = select_year_jQ.find('.e.item').filter(function () { return $(this).text() == year; });
                }

                if ((category && !pageKeyUrl) || (IsAubPrimePC && category)) {
                    redirectUrl = $.setQueryStringOnUrl(redirectUrl, "Category", encodeURIComponent(category));
                }

                if (keywords) {
                    var filter = [];
                    redirectUrl = "/Page_Product/SearchByName.aspx?Vin=&Make=" + make + "&Model=" + encodeURIComponent(model) + "&Year=" + year + "&Submodel=" + encodeURIComponent(submodel) + "&Filter=(" + filter.join(";") + ')&Keywords=' + encodeURIComponent(keywords);
                }

                if (ref) {
                    redirectUrl = redirectUrl + "&ref=" + ref;
                }
                if (!subCategory && IsAubPrimePC) {
                    redirectUrl = CURRENT_URL;
                }
                window.location.href = redirectUrl;

                // 移除Loading效果
                if (HAS_OPTIMIZE_PD) {
                    selection_jQ.find('.e.body').loadedPd();
                } else {
                    selection_jQ.loaded();
                }
            });
        });

        // 切换标签
        switch_item_jQs.each(function () {

            var item_jQ = $(this);
            var make = item_jQ.text();

            item_jQ.click(function () {

                if (switch_jQ.isDisplay()) {
                module_jQ.loading();
                }

                // 设置选中
                switch_item_jQs.inactive();
                item_jQ.active();

                // 对应到Make下拉框，并自动点击
                var make_item_jQs = $('.e.item', select_make_jQ);
                var mapping_item_jQ = make_item_jQs.filter(function () { return $(this).text() == make });

                // 同时有默认Make和默认Model，则不自动
                if (DEFAULT_MAKE == make && DEFAULT_MODEL) {
                    // Do Nothing
                }
                else {
                    select_make_jQ.setAuto();
                }

                mapping_item_jQ.click();

                // 重置Model下拉框标题
                var model_caption_jQ = $('.e.caption', select_model_jQ);
                model_caption_jQ.text("-- Select " + make + " Model --");

                if (switch_jQ.isDisplay()) {
                setTimeout(function () { module_jQ.loaded(); }, 300);
                }
            });
        });

        // 如果有切换标签，默认选中第一个
        if (switch_jQ.isExist()) {
            if (DEFAULT_MAKE) {
                var default_item_jQ = switch_item_jQs.filter(function () { return $(this).text() == DEFAULT_MAKE });
                default_item_jQ.click();
            }
            else {
                switch_item_jQs.eq(0).click();
            }
        }
    }

    //var bind = function (module_jQ, make, model, year, submodel, hasExtra) {
    //    if (make) {
    //        $('#e_selection_default_make', module_jQ).val(make);
    //        $('#e_selection_default_model', module_jQ).val(model);
    //        $('#e_selection_default_year', module_jQ).val(year);
    //        $('#e_selection_default_submodel', module_jQ).val(submodel);
    //        $('#e_selection_has_extra', module_jQ).val(hasExtra);

    //        DEFAULT_MAKE = $('#e_selection_default_make', module_jQ).val() || '';
    //        DEFAULT_MODEL = $('#e_selection_default_model', module_jQ).val() || '';
    //        DEFAULT_YEAR = $('#e_selection_default_year', module_jQ).val() || '';
    //        DEFAULT_SUBMODEL = $('#e_selection_default_submodel', module_jQ).val() || '';
    //        HAS_EXTRA = $('#e_selection_has_extra', module_jQ).getVal().toBoolean() || false;


    //        var switch_jQ = $('.e.switch', module_jQ);
    //        var switch_item_jQs = $('.e.item', switch_jQ);

    //        if (switch_jQ.isExist()) {
    //            var default_item_jQ = switch_item_jQs.filter(function () { return $(this).text() == make });
    //            default_item_jQ.click();
    //        }
    //        else {
    //            var select_make_jQ = $('.e.select', module_jQ).filter('[data-type=make]');
    //            var make_item_jQs = $('.e.item', select_make_jQ);
    //            var default_make_item_jQ = make_item_jQs.filter(function () { return $(this).text() == make });
    //            default_make_item_jQ.click();
    //            select_make_jQ.setAuto();
    //        }
    //    }
    //}

    return {
        setup: setup
    }
});