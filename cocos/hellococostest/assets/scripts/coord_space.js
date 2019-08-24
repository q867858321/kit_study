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
        var w_pos2 = this.node.convertToWorldSpace(cc.p(0, 0));
        console.log("w_pos2", w_pos2);
        var w_pos3 = this.node.convertToWorldSpaceAR(cc.p(0, 0));
        console.log("w_pos3", w_pos3);

        var w_pos = cc.v2(300, 400);
        // this.node.setPosition(w_pos);
        var node_pos = this.node.convertToWorldSpace(w_pos);
        cc.log("node_pos", node_pos);
        cc.log("node pos2", this.node.position);
        cc.log("node pos3", w_pos.position);

        var box = this.node.getBoundingBox();
        console.log("box", box);
        var w_box = this.node.getBoundingBoxToWorld();
        cc.log("w_box", w_box);
    },

    start() {

    },

    // update (dt) {},
});