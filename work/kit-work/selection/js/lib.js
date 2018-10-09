jQuery.fn.extend({
	// 判断DOM是否存在
    isExist: function () {
        return $(this).length > 0;
    },
    // 相对弹出（relative，背景全透明）
    popout: function (callShow, callHide) {

        var module_jQ = $(this);

        // 原始样式
        var ORIGIN_DISPLAY = module_jQ.css('display');

        // 追加透明背景
        if (!module_jQ.parent().hasClass('p_mask_w')) {
            module_jQ.after("<div class='p_mask_w' />");
        }

        // 展示弹出框
        var parent_jQ = module_jQ.parent();

        if (callShow) {
            callShow();
        }
        else {
            module_jQ.fadeIn();
        }

        // 关闭行为
        var close = function (e) {

            if (callHide) {
                callHide();
            }
            else {
                // 恢复样式
                if (ORIGIN_DISPLAY == "none") {
                    module_jQ.fadeOut();
                } else {
                    module_jQ.css('display', ORIGIN_DISPLAY);
                }
            }

            // 删除外衣
            mask_jQ.remove();

            e.stopPropagation();
        };

        var mask_jQ = parent_jQ.find(".p_mask_w").eq(0);
        var close_jQ = parent_jQ.find(".e.close").eq(0);
        mask_jQ.fadeIn();

        // 点击close按钮
        close_jQ.unbind("click", close).click(close);
        mask_jQ.unbind("click", close).click(close);
    },
	// 弹出引导弹出框
    popoutGuide: function (body_jQ, downwards) {
        var module_jQ = $(this);

        var dialog_jQ = $('.p_dialog_gd', module_jQ);
        var dialog_arrow_jQ = $('.p_dialog_gd_arrow', dialog_jQ);
        var dialog_body_jQ = $('.p_dialog_gd_body', dialog_jQ);

        if (!dialog_jQ.isExist()) {

            var buildHtml = function () {

                var html = [];

                html.push('<div class="p_dialog_gd">');
                html.push('  <div class="p_dialog_gd_arrow">&nbsp;</div>');
                html.push('  <div class="p_dialog_gd_close e close">×</div>');
                html.push('  <div class="p_dialog_gd_body"></div>');
                html.push('</div>');

                return html.join("");
            };

            // 生成弹出框，追加到父级模块中
            var dialog_html = buildHtml();
            dialog_jQ = $(dialog_html);

            dialog_arrow_jQ = $('.p_dialog_gd_arrow', dialog_jQ);
            dialog_body_jQ = $('.p_dialog_gd_body', dialog_jQ);

            // 追加内容
            dialog_body_jQ.append(body_jQ);

            // 添加到元素里
            module_jQ.append(dialog_jQ);
        }


        dialog_jQ.popout();
        dialog_jQ.bind('click', function (e) { e.stopPropagation(); });

        var moduleHeight = module_jQ.outerHeight();
        var moduleWidth = module_jQ.outerWidth();
        var moduleLeft = module_jQ.offset().left;

        var windowWidth = $(window).width();


        // 移动端，永远向下展开，且全屏
        if (!$.isDesktop()) {

            // 默认宽度是屏幕宽度，并在两侧留有屏幕宽度的10%与1em的间距,并减去两侧1px的边框宽度
            var dialogWidth = windowWidth - windowWidth * 0.1 - 32 - 4;
            body_jQ.width(dialogWidth);

            // 默认方向向下
            dialog_jQ.addClass("down");
            var arrowHeight = dialog_arrow_jQ.height();
            var arrowWidth = dialog_arrow_jQ.width();

            // 默认位置从屏幕左侧1em开始
            var dialogLeft = -moduleLeft + windowWidth * 0.05 + 1;
            var dialogHeight = moduleHeight + arrowHeight;
            dialog_jQ.css({ "top": dialogHeight, "left": dialogLeft });

            // 箭头默认位置居中
            var arrowLeft = -dialogLeft + moduleWidth / 2 - arrowWidth / 2;
            dialog_arrow_jQ.css({ "top": -arrowHeight, "left": arrowLeft });

        } else {

            // 桌面端向下展开
            if (downwards) {

                // 默认方向向下
                dialog_jQ.addClass("down");
                var arrowHeight = dialog_arrow_jQ.height();
                var arrowWidth = dialog_arrow_jQ.width();

                // 默认位置从父元素左侧开始
                var dialogTop = moduleHeight + arrowHeight;
                dialog_jQ.css({ "top": dialogTop });

                // 箭头默认位置居中
                var arrowLeft = moduleWidth / 2 - arrowWidth / 2;
                dialog_arrow_jQ.css({ "top": -arrowHeight, "left": arrowLeft });

                // 如果右侧溢出
                var dialogWidth = dialog_jQ.outerWidth();
                var offLeft = dialog_jQ.offset().left;
                var originLeft = dialog_jQ.css("left").trimPx();
                var delta = offLeft + dialogWidth - windowWidth;

                if (delta > 0) {
                    dialog_jQ.css({ "left": originLeft - delta });
                    dialog_arrow_jQ.css({ "left": dialog_arrow_jQ.css("left").trimPx() + delta });
                }
            }
            else {

                var arrowHeight = dialog_arrow_jQ.height();
                var arrowWidth = dialog_arrow_jQ.width();

                // 默认位置从父元素右侧开始
                var dialogTop = -dialog_jQ.height() / 2;
                var left = moduleWidth + arrowWidth + 4;
                dialog_jQ.css({ "top": dialogTop, "left": left });

                // 箭头默认位置垂直方向居中
                var arrowTop = -dialogTop + moduleHeight / 2 - arrowHeight / 2;
                dialog_arrow_jQ.css({ "top": arrowTop, "left": -arrowWidth });

                // 如果右侧溢出
                var dialogWidth = dialog_jQ.outerWidth();
                var offLeft = dialog_jQ.offset().left;
                var originLeft = dialog_jQ.css("left").trimPx();
                var delta = offLeft + dialogWidth - windowWidth;

                if (delta > 0) {

                    dialog_jQ.addClass("up");

                    arrowHeight = dialog_arrow_jQ.height();
                    arrowWidth = dialog_arrow_jQ.width();

                    arrowHeight
                    // 默认位置从父元素左侧开始
                    var dialogBottom = moduleHeight + arrowHeight;
                    left = -dialogWidth / 2;
                    dialog_jQ.css({ "bottom": dialogBottom, "top": "Auto", "left": left });

                    // 箭头默认位置居中
                    var arrowLeft = dialogWidth / 2;
                    dialog_arrow_jQ.css({ "bottom": -arrowHeight, "left": arrowLeft, "top": "Auto" });

                    // 如果右侧溢出
                    dialogWidth = dialog_jQ.outerWidth();
                    offLeft = dialog_jQ.offset().left;
                    originLeft = dialog_jQ.css("left").trimPx();
                    delta = offLeft + dialogWidth / 2 - windowWidth;

                    if (delta > 0) {
                        dialog_jQ.css({ "left": originLeft - delta });
                        dialog_arrow_jQ.css({ "left": dialog_arrow_jQ.css("left").trimPx() + delta });
                    }
                }
            }
        }

    }
})
jQuery.extend({
	isDesktop:function(){
		return $(window).width()>640;
	}
});

String.prototype.trimPx = function () {
    return parseInt(this.replace('px', ''));
}
