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
        originalDamage:30,
        damage: 30,
        originalSpeed:600,
        speed:600,
    },

    startFly(){
        let moveAction = cc.moveBy(2,cc.v2(0,this.getSpeed()));
        let finish = cc.callFunc(()=>{
            if(null == this){
                return;
            }
            if(this.node.position.y > cc.winSize.height){
                this.destroy();
            }else{
                this.startFly();
            }
    	});
    	this.node.runAction(cc.sequence(moveAction,finish));
    },
    getOriginalSpeed(){
        return this.originalSpeed;
    },
    setOriginalSpeed(newSpeed){
        if(null == newSpeed){
            return;
        }
        if('number' == typeof newSpeed){
            this.originalSpeed = newSpeed;
        }
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
    getDamage(){
        return this.damage;
    },
    setDamage(newDamage){
        if(null == newDamage){
            return;
        }
        if('number' ==  typeof newDamage ){
            this.damage = newDamage;
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        this.node.removeFromParent();
        this.destroy();
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
    update (dt) {
        if(this.node.position.y > cc.winSize.height){
            this.node.removeFromParent();
            this.destroy();
        }
    },
});
