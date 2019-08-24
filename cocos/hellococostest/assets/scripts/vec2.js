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
        var w_pos = new cc.Vec2(100, 200);
        // var w_pos = cc.v2(100, 200);
        cc.log("w_pos", w_pos);


        var src = cc.p(0, 0);
        var dst = cc.p(100, 100);
        var dir = dst.sub(src);
        var len = dir.mag();
        console.log("dir", dir);
        console.log("len", len);

        var s = new cc.Size(100, 200);
        console.log("cc", s);

        var r = new cc.Rect(0, 0, 100, 100);
        var r2 = new cc.Rect(100, 100, 200, 200);
        r = cc.rect(0, 0, 200, 200);
        cc.log("r", r);
        var has = r.contains(cc.p(100, 100)); //矩形是否包含某点
        cc.log("has", has);
        var has2 = r2.intersects(r);
        cc.log("has2", has2);
    },

    start() {

    },

    // update (dt) {},
});