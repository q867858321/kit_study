define([],

    function () {
    
        var setup = function (module_jQ) {
            
            //对象区
            var slideBox_jQ = $(".slideBox", module_jQ);
            var ul_jQ = slideBox_jQ.find("ul");
            var number_jQ = slideBox_jQ.find(".spanBox span");            //注意分号 和逗号的用法
            var next_jQ = $(".next", module_jQ);
            var prev_jQ = $(".prev", module_jQ);
    
            //常量区
            var oneWidth = slideBox_jQ.width();
    
            //变量区
            var timer = null;
            var sw = 0;
    
            //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
            number_jQ.on("click", function () {
                $(this).addClass("active").siblings("span").removeClass("active");
                sw = $(this).index();
                ul_jQ.animate({
                    "left": -oneWidth * sw,    //ul标签的动画为向左移动；
                });
            });
            //左右按钮的控制效果
            next_jQ.stop(true, true).click(function () {
                sw++;
                if (sw == number_jQ.length) { sw = 0 };
                number_jQ.eq(sw).trigger("click");
            });
            prev_jQ.stop(true, true).click(function () {
                sw--;
                if (sw == number_jQ.length) { sw = 0 };
                number_jQ.eq(sw).trigger("click");
            });
            //定时器的使用，自动开始
            timer = setInterval(function () {
                sw++;
                if (sw == number_jQ.length) { sw = 0 };
                number_jQ.eq(sw).trigger("click");
            }, 5000);
            //hover事件完成悬停和，左右图标的动画效果
            slideBox_jQ.hover(function () {
                $(".next,.prev").animate({
                    "opacity": 1,
                }, 200);
                clearInterval(timer);
            }, function () {
                $(".next,.prev").animate({
                    "opacity": 0.5,
                }, 500);
                timer = setInterval(function () {
                    sw++;
                    if (sw == number_jQ.length) { sw = 0 };
                    number_jQ.eq(sw).trigger("click");
                }, 4000);
            })
        }
    
        return {
            setup: setup
        }
    });