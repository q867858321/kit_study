// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // var mto = cc.moveTo(1, cc.p(100, 100)); //目标
        // //  var mto = cc.moveBy(1, cc.p(100, 100)) 变化
        // this.node.runAction(mto);

        // var rto = cc.rotateTo(1, 180);
        // this.node.runAction(rto);
        // var sto = cc.scaleTo(1, 1.2); //放到到1.2倍

        // var func = cc.callFunc(function () {
        //     console.log("call fun");
        // }.bind(this));
        // cc.log("begin");
        // this.node.runAction(func); //回掉函数
        // cc.log("end");

        //队列
        // var m1 = cc.moveTo(1, cc.p(300, 200));

        // var s1 = cc.scaleTo(0.8, 1.2);
        // var s2 = cc.scaleTo(0.5, 0.8);
        // var seq = cc.sequence([s1, s2]);
        // var rt = cc.repeatForever(seq);
        // this.node.runAction(rt);

        //缓动
        // var m = cc.moveTo(1, 100, 0).easing(cc.easeBackInOut());
        // this.node.runAction(m);

        var r = cc.rotateBy(3, 360).easing(cc.easeCircleActionInOut());
        var rf = cc.repeatForever(r);
        this.node.runAction(rf);
        this.node.stopAllActions();
    },

    start() {

    },

    // update (dt) {},
});