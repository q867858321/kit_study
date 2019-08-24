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
        console.log("systemEvent", cc.systemEvent);
        console.log(cc.SystemEvent);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.on_key_down, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.on_key_up, this)
    },
    on_key_down(event) {
        cc.log("event key code", event.keyCode);
        console.log("key", cc.KEY);
    },
    on_key_up(event) {
        cc.log("event key code", event.keyCode);
    },
    start() {

    },

    // update (dt) {},
});