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
        // console.log("this", this);
        // console.log("name", this.node);
        // var children = this.node.children;
        // for (var i = 0; i < children.length; i++) {
        //     console.log(children[i]);
        // }
        // var node = new cc.Node();
        // this.node.addChild(node);
        // this.node.removeFromParent();
        // var item=this.node.getChildByName("item1");
        // var pos = this.node.getPosition();
        // console.log("pos", pos);
        // pos = cc.p(100, 100);
        // this.node.setPosition(pos);
        // console.log("this", this);
        this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
            console.log("f ev", t);
            console.log("this", this);
            console.log("location", t.getLocation());
            // console.log("location2", t.touch._startPoint);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this);

        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this);

        this.node.on(cc.Node.EventType.TOUCH_END, function (t) {
            console.log("end ev", t);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (t) {
            console.log("cancel ev", t);
        }, this);
    },
    on_touch_move: function (t) {
        //跟随屏幕移动
        console.log("f cancel ev", t);
        var delta = t.getDelta();
        this.node.x += delta.x;
        this.node.y += delta.y;
    },
    start() {

    },

    // update (dt) {},
});