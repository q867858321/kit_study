var scale = function (btn,bar,title){
    this.btn=document.getElementById(btn);
    this.bar=document.getElementById(bar);
    this.title=document.getElementById(title);
    this.step=this.bar.getElementsByTagName("div")[0];
    this.init();
};
scale.prototype={
    init:function (){
        var f=this,g=document,b=window,m=Math;
        f.btn.ontouchstart=function (e){
            var x=(e||b.event).touches[0].clientX;
            var l=this.offsetLeft;
            var max=f.bar.offsetWidth-this.offsetWidth;
            g.ontouchmove=function (e){
                var thisX=(e||b.event).touches[0].clientX;
                var to=m.min(max,m.max(-2,l+(thisX-x)));
                f.btn.style.left=to+'px';
                f.ondrag(m.round(m.max(0,to/max)*100),to);
                b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
            };
            g.ontouchend=new Function('this.onmousemove=null');
        };
    },
    ondrag:function (pos,x){
        this.step.style.width=Math.max(0,x)+'px';
        this.title.innerHTML=pos;
    }
}
new scale('btn','bar','title');