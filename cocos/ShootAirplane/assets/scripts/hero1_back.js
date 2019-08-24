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
        originalBlood:1000,
        blood:1000,
        originalDamage:500,
        damage: 500,
        bulletGenerateSpeed:0.05,
        bulletPrefab: cc.Prefab,
        heroBlood: cc.Label,
        bulletType:0,
        bulletPrefab2: cc.Prefab,
        isBattleStart:false,
    },
    getOriginalDamage(){
        return this.originalDamage;
    },
    setOriginalDamage(newDamage){
        if(null == newDamage){
            return;
        }
        if('number' == typeof newDamage){
            this.originalDamage = newDamage;
        }
    },

    getDamage(){
        return this.damage;
    },
    setDamage(newDamage){
        if(null == newDamage){
            return;
        }
        if('number' == typeof newDamage){
            this.damage = newDamage;
        }
    },
    getOriginalBlood(){
        return this.originalBlood;
    },
    setOrigianlBlood(newBlood){
        if(null == newBlood){
            return;
        }
        if('number' == typeof newBlood){
            this.originalBlood = newBlood;
        }
    },
    getBlood(){
        return this.blood;
    },
    setBlood(newBlood){
        if(null == newBlood){
            return;
        }
        if('number' == typeof newBlood){
            this.blood = newBlood;
        }
        this.updateBlood(0);
    },
    updateBlood(damage){
        let newBlood = this.getBlood() - damage;
        this.blood = newBlood;
        if(newBlood <= 0){//dead
            let event = new cc.Event.EventCustom('heroDead', true);
            this.node.dispatchEvent(event);
            this.node.removeFromParent();
            this.destroy();
        }else{
            this.heroBlood.string = this.getBlood() < 0 ? '0' : this.getBlood();
        }
        
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.addEventHandler();
    },
    moveMe(dx){
        let tx = this.node.position.x + dx;
        if(tx > cc.winSize.width){
            tx = cc.winSize.width;
        }
        if(tx < 0){
            tx = 0;
        }
        this.node.setPosition(cc.v2(tx,this.node.position.y));
    },
    onMeTouchStart(event){
        if(this == null){
            return;
        }
        try{
            this.isBattleStart = true;
            this.updateMePosition(event.getLocation().x,this.node.position.y);
            this.startShoot();
        }catch(e){

        }
        
    },
    onMeTouchMove(event){
        try{
            this.updateMePosition(event.getLocation().x,this.node.position.y);
        }catch(e){

        }
        
    },
    onMeTouchEnd(event){
        try{
            this.isBattleStart = false;
            this.updateMePosition(event.getLocation().x,this.node.position.y);
        }catch(e){

        }
        
    },
    startShoot(){
        this.generateOneBullet();
        let _me = this;
        let callback = function() {
            if(_me.isBattleStart){
                let bullet;
                if(this.bulletType == 1){
                    bullet = cc.instantiate(_me.bulletPrefab2);
                }else {
                    bullet = cc.instantiate(_me.bulletPrefab);
                }
                bullet.setPosition(_me.node.position.x,_me.node.position.y+bullet.getContentSize().height/2+_me.node.getContentSize().height/2);
                _me.node.getParent().addChild(bullet);
                // buttle.getComponent('buttle1').startFly();
            }else{
                _me.unschedule(callback);
            }
        };
        this.schedule(callback, this.bulletGenerateSpeed, cc.macro.REPEAT_FOREVER);
    },
    generateOneBullet(){
        let bullet;
        if(this.bulletType == 1){
            bullet = cc.instantiate(this.bulletPrefab2);
        }else {
            bullet = cc.instantiate(this.bulletPrefab);
        }
        bullet.setPosition(this.node.position.x,this.node.position.y+bullet.getContentSize().height/2+this.node.getContentSize().height/2);
        this.node.getParent().addChild(bullet);
        // buttle.getComponent('buttle1').startFly();
    },
    updateMePosition(x,y){
        let tx = x;
        let ty = y;
        if(x > cc.winSize.width){
            tx = cc.winSize.width;
        }
        if(x < 0){
            tx = 0;
        }
        if(y > cc.winSize.height){
            ty = cc.winSize.height;
        }
        if(y < 0){
            ty = 0;
        }
        this.node.setPosition(cc.v2(tx,ty));
    },
    addEventHandler(){
            // this.node.on(cc.Node.EventType.TOUCH_START,this.onMeTouchStart,this);
            // this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onMeTouchMove,this);
            // this.node.on(cc.Node.EventType.TOUCH_END,this.onMeTouchEnd,this);
            // this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onMeTouchEnd,this);
        
    },
    onDestroy () {
            // this.node.off(cc.Node.EventType.TOUCH_START,this.onMeTouchStart(event));
            // this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onMeTouchMove(event));
            // this.node.off(cc.Node.EventType.TOUCH_END,this.onMeTouchEnd(event));
            // this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onMeTouchEnd(event));
    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == 'coin'){
            otherCollider.node.removeFromParent();
            if(otherCollider.node.name == 'coin'){
                let event = new cc.Event.EventCustom('updateCoin', true);
                event.setUserData(otherCollider.getComponent(otherCollider.node.name).getCount());
                this.node.dispatchEvent(event);
            }else if(otherCollider.node.name == 'diamond'){
                let event = new cc.Event.EventCustom('updateDiamond', true);
                event.setUserData(otherCollider.getComponent(otherCollider.node.name).getCount());
                this.node.dispatchEvent(event);
            }
            
        }else if(otherCollider.node.group == 'monster'){
            let com = otherCollider.getComponent(otherCollider.node.name);
            this.updateBlood(com.getDamage());
        }else if(otherCollider.node.group == 'Props'){
            let type = otherCollider.getComponent(otherCollider.node.name).getBulletType();
            this.bulletType = type;
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
    // update (dt) {},
});
