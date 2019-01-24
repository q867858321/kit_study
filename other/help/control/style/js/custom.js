(function($) {
    "use strict"; // Start of use strict
    // $('#sidebarCollapse').on('click', function() {
    //     $('#sidebar').toggleClass('active');
    // });

    /*Loader Javascript
    -------------------*/
    var window_var = $(window);
    window_var.on('load', function() {
        $(".loading").fadeOut("fast");
    });
    // scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // scroll to top End

    // theme color change
    var theme_settings = $(".theme-settings").find(".theme-color");
    theme_settings.on('click', function() {
        var val = $(this).attr('data-color');
        $('#style_theme').attr('href', 'css/' + val + '.css');
        $(".logo-change").attr('src', 'img/logo-' + val + '.png');

        theme_settings.removeClass('theme-active');
        theme_settings.addClass('theme-active');
        return false;
    });
    $(".theme-click").on('click', function() {
        $("#switcher").toggleClass("active");
        return false;
    });
    // theme color change End

    $(document).ready(function() {
        var animationSpeed = 300;

        $(document.body).on('click', '.sidebar-menu li a', function(e) {
            var $this = $(this);
            var checkElement = $this.next();

            if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
                checkElement.slideUp(animationSpeed, function() {
                    checkElement.removeClass('menu-open');
                });
                checkElement.parent("li").removeClass("active");
            }

            //If the menu is not visible
            else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                //Get the parent menu //sha
                var parent = $this.parents('ul').first();
                //Close all open menus within the parent
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                //Remove the menu-open class from the parent
                ul.removeClass('menu-open');
                //Get the parent li
                var parent_li = $this.parent("li");

                //Open the target menu and add the menu-open class
                checkElement.slideDown(animationSpeed, function() {
                    //Add the class active to the parent li
                    checkElement.addClass('menu-open');
                    parent.find('li.active').removeClass('active');
                    parent_li.addClass('active');
                });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.is('.treeview-menu')) {
                e.preventDefault();
            }
        });
        $(document.body).on('click', '.catedivposi span,.catedivposi .pull-right', function(e) {
            var $this = $(this);
            var checkElement = $this.parents('.catedivposi').next();

            if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
                checkElement.slideUp(animationSpeed, function() {
                    checkElement.removeClass('menu-open');
                });
                checkElement.parent("li").removeClass("active");
            }

            //If the menu is not visible
            else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                //Get the parent menu //sha
                var parent = $this.parents('ul').first();
                //Close all open menus within the parent
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                //Remove the menu-open class from the parent
                ul.removeClass('menu-open');
                //Get the parent li
                var parent_li = $this.parents("li");

                //Open the target menu and add the menu-open class
                checkElement.slideDown(animationSpeed, function() {
                    //Add the class active to the parent li
                    checkElement.addClass('menu-open');
                    parent.find('li.active').removeClass('active');
                    parent_li.addClass('active');
                });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.is('.treeview-menu')) {
                e.preventDefault();
            }
        });
    });

    function copyUrl2(text) {
        var Url2 = text;
        // var Url2=document.getElementById("biao1").innerText;
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        alert('复制成功');
    }

    // 点击复制
    function copyLink(e) {
        var e = e;
        // alert(typeof e)
        e.select(); // 选择对象
        console.log(e.text());
        document.execCommand("Copy"); // 执行浏览器复制命令
        // alert( document.execCommand("Copy"));
        alert("复制链接成功！");
    }
    $('.copyfileurl').click(function() {
        var copyobj = $(this).prev('textarea').val();
        // copyLink(copyobj);
        copyUrl2(copyobj);
    });

    // 动态加载下拉列表
    //首次加载
    // $('.cateselect').change(function() {
    $('body').delegate('.cateselect', 'change', function(event) {
        var tid = $(this).val();
        var text = $(this).find('option:selected').text();
        var is_top = $(this).attr('data-is-top');
        var is_show_btn = $(this).attr('data-btn');
        var selectwidth = $(this).width();
        var catearray = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八");
        $(this).parent('.bootstrap-select').find('.btn').removeClass('bs-placeholder');
        $(this).parent('.bootstrap-select').find('.filter-option').text(text);
        // console.log(is_top);
        var data = [1, 2, 3, 4, 5, 6];
        var html = '';
        var html2 = '';
        var itindex = $(this).index();
        if (is_show_btn) {
            $('.backcatebtn').prop('disabled', false);
        }
        $('#cate_id').val(tid);
        // alert();
        // $.ajax({
        // type: "POST",
        // url: "",
        // data: {id:tid},
        // dataType: "json",
        // success: function(data){
        // $('#catenid').empty();   //清空resText里面的所有内容
        $('.selectbox').children('select').eq(itindex).nextAll().remove();
        if (is_top == 1) {
            for (var t = 0; t < data.length; t++) {
                html += '<select size="5" class="form-control col-md-6 cateselect" placeholder="选择子分类">';
                for (var t = 0; t < data.length; t++) {
                    html += '<option value="33' + t + '">3分类' + t + '</option>';
                }
                html += '</select>';
                html2 += '<div class="col-md-6">二级:</div>';
            }
            $('.selectbox').append(html);
            $('.categoryselctboxstatusconmtent').append(html2);
            $('#catenid').prop('disabled', false);
        } else {
            var nlen = $('.selectbox').find('select').length;
            html += '<select size="5" class="form-control col-md-6 cateselect" placeholder="选择子分类">';
            for (var t = 0; t < data.length; t++) {
                html += '<option value="33' + t + '">' + t + '3分类' + t + '</option>';
            }
            html += '</select>';
            html2 += '<div class="col-md-6">' + catearray[nlen] + '级:</div>';
            $('.selectbox').children('select').eq(itindex).prevAll().animate({ width: '0px', 'height': '0px', 'padding': '0px', 'margin': '0', 'border': '0' }, 200);
            $('.categoryselctboxstatusconmtent').children('div').eq(itindex).prevAll().animate({ width: '0px', 'height': '0px', 'padding': '0px', 'margin': '0', 'border': '0' }, 200);
            $('.selectbox').append(html);
            $('.categoryselctboxstatusconmtent').append(html2);
        }
    });


    // 返回上一级
    $('.backcatebtn').click(function() {
        var len = $('.selectbox').find('select').length;
        // alert(len);
        if (len > 2) {
            $('.selectbox').find('select').eq(len - 1).remove();
            $('.categoryselctboxstatusconmtent').find('div').eq(len - 1).remove();
            $('.selectbox').find('select').eq(len - 3).animate({ width: '300px', 'height': '106px', 'padding': '14px', 'margin': '0 10px 0 0', 'border': '1px solid #efefef' }, 200);
            $('.categoryselctboxstatusconmtent').find('div').eq(len - 3).animate({ width: '300px', 'height': '106px', 'padding': '14px', 'margin': '0 10px 0 0', 'border': '1px solid #efefef' }, 200);
        } else {
            $('.backcatebtn').prop('disabled', true);
        }
    });
    // 下载
    window.downloadFile = function(sUrl) {
        var domain = window.location.host;;
        // alert(domain);
        var pattern = /^.*[^a][^b][^c]\.(?:png|jpg|bmp|gif|jpeg)$/,
            str = sUrl;
        if (pattern.test(str)) {
            console.log(' http://' + domain + '/' + sUrl);
            sUrl = getBase64Image(' http://' + domain + '/' + sUrl);
        }
        // console.log(pattern.test(str));
        //iOS devices do not support downloading. We have to inform user about this.
        if (/(iP)/g.test(navigator.userAgent)) {
            alert('Your device does not support files downloading. Please try again in desktop browser.');
            return false;
        }

        //If in Chrome or Safari - download via virtual link click
        if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
            //Creating new link node.
            var link = document.createElement('a');
            link.href = sUrl;

            if (link.download !== undefined) {
                //Set HTML5 download attribute. This will prevent file from opening if supported.
                var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
                link.download = fileName;
            }

            //Dispatching click event.
            if (document.createEvent) {
                var e = document.createEvent('MouseEvents');
                e.initEvent('click', true, true);
                link.dispatchEvent(e);
                return true;
            }
        }

        // Force file download (whether supported by server).
        if (sUrl.indexOf('?') === -1) {
            sUrl += '?download';
        }

        window.open(sUrl, '_self');
        return true;

    }

    window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

    function getBase64Image(img) {
        // console.log(img);
        // console.log(typeof img);
        var canvas = document.createElement("canvas");
        var image = new Image();
        image.src = img;
        console.log(image);
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, image.width, image.height);
        var ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();
        var dataURL = canvas.toDataURL("image/" + ext);
        console.log(dataURL);
        return dataURL;
    }
})(jQuery);