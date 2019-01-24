function windowsalert(title,msg){
    var str='';
        str+='<div class="modal fade windowsalert in" id="delModalee" tabindex="-1" role="dialog" aria-labelledby="myModalLabelee" style="display: block; padding-left: 17px;">'+
    '                 <div class="modal-dialog" role="document" style="margin: 585.5px auto;">'+
    '                   <div class="modal-content">'+
    '                     <div class="modal-header">'+
    '                       <button type="button" class="close closettbyyy" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>'+
    '                       <h4 class="modal-title" id="myModalLabel">'+title+'</h4>'+
    '                     </div>'+
    '                     <div class="modal-body">'+
    '                      '+msg+''+
    '                     </div>'+
    '                     <div class="modal-footer">'+
    '                       <button type="button" class="btn btn-primary closettbyyy">确认</button>'+
    '                     </div>'+
    '                   </div>'+
    '                 </div>'+
    '               </div>'+
    '<div class="modal-backdrop modal-backdroptt fade in"></div>';
    $("body").find(".windowsalert").remove(),$("body").append(str);
    $('body').delegate('.closettbyyy','click',function(){
        $('body').find('.windowsalert').removeClass('in');
        $('body').find('.modal-backdroptt').removeClass('in');
        setTimeout(function(){
            $('body').find('.windowsalert').hide();
            $('body').find('.modal-backdroptt').hide();
        },1000)
    });
}
/*
    s 状态 warning 警告 error  错误 success  成功
    a  提示消息
    l:提示标题 如完成提示,
*/
// function windowsalert(s,a,l){var r="";"warning"==(s=s)&&(r='<div  class="alertbox warningbox modal-content" style="display: block;">'),"error"==s&&(r='<div  class="alertbox errorrrbox modal-content" style="display: block;">'),"success"==s&&(r='<div  class="alertbox successbox modal-content" style="display: block;">');var e="";e+='<div class="blackbg fade in">',e+=r,e+=" <h2 class='modal-header'>"+l+"</h2>",e+=' <a class="closealert" onclick="$(this).parents(\'.blackbg\').hide();" href="javascript:;"></a>',e+=" <p class='modal-body'>"+a+"</p>",e+=' <div class="alertboxbox">',e+=' <button onclick="$(this).parents(\'.blackbg\').hide();" class="alertsure">确 定</button>',e+="</div>",e+="</div>",$("body").find(".alertbox").remove(),$("body").append(e)}