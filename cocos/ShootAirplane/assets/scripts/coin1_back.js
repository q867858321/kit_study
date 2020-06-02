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
        count:10,
        speed:100,
        action: cc.Action,
        countLabel: cc.Label,
    },
    startFly(){
        let moveAction = cc.moveBy(0.1,cc.v2(0,-this.getSpeed()));
        let finish = cc.callFunc(()=>{
            if(null == this){
                return;
            }
            // if(this.node.position.y <= 80){
            //     this.node.stopAction(this.action);
            // }else{
                this.startFly();
            // }
        });
        this.action = cc.sequence(moveAction,finish);
    	this.node.runAction(this.action);
    },
    getSpeed(){
        return this.speed;
    },
    setSpeed(newSpeed){
        if(null == newSpeed){
            return;
        }
        if('number' == typeof newSpeed){
            this.speed = newSpeed;
        }
    },
    getCount(){
        return this.count;
    },
    setCount(newCount){
        if(null == newCount){
            return;
        }
        if('number' == typeof newCount){
            this.count = newCount;
        }
        if(this != null){
            this.countLabel.string = newCount;
        }
    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == 'hero'){
            this.destroy();
        }
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {
    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function (contact, selfCollider, otherCollider) {
    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function (contact, selfCollider, otherCollider) {
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
