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
        relativeBlood:1000,
        originalBlood:1000,
        blood:1000,
        originalDamage:100,
        damage: 100,
        monsterBlood:cc.Label,
        minScale:0.4,
        originalSpeed:300,
        speed:300,
        coinPrefab:cc.Prefab,
        monsterPrefab:cc.Prefab,
        hero: cc.Node,
        watermelonPrefab:cc.Prefab,
    },
    createWatermelon(){
        if(this == null || this.node.getParent() == null){
            return;
        }
        let watermelon = cc.instantiate(this.watermelonPrefab);
        watermelon.setPosition(this.node.position.x,this.node.position.y);
        this.node.getParent().addChild(watermelon);
    },
    startRun(targetNode){
        this.hero = targetNode;
        // let bezier = [cc.v2(targetNode.getPosition().x,targetNode.getPosition().y),cc.v2(cc.winSize.width/2,cc.winSize.height/2)];
        // var followAction = cc.bezierTo(2,bezier);//, cc.rect(0, 0,cc.winSize.width, cc.winSize.height)
        var bezier = [cc.v2(0, cc.winSize.height / 2), cc.v2(300, -cc.winSize.height / 2), cc.v2(300, 100)];
        this.node.runAction(cc.bezierTo(40,bezier));
    },
    setSpeed(newSpeed){
        if(null == newSpeed){
            return;
        }
        if('number' == newSpeed){
            this.speed = newSpeed;
        }
    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if(otherCollider.node.group == 'bullet'){
            if(Math.random() > 0.5){
                this.createCoin();
            }
            if(Math.random() > 0.9){
                this.createWatermelon();
            }
            this.updateBlood(otherCollider.getComponent(otherCollider.node.name).getDamage());
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
    createCoin(){
        if(this == null || this.node.getParent() == null){
            return;
        }
        let coin = cc.instantiate(this.coinPrefab);
        coin.setPosition(this.node.position.x,this.node.position.y);
        this.node.getParent().addChild(coin);
        let c = coin.getComponent('coin1');
        let count = Math.floor(Math.random()*this.getBlood()/10);
        if(count <=0){
            count = 1;
        }
        c.setCount(count);
        // c.startFly();
    },
    setVolume(){
        let scale = this.getBlood()/this.relativeBlood;
        this.node.scale = scale;
    },
    updateBlood(damage){
        if(null == this){
            return;
        }
        this.blood = this.getBlood() - 0 - damage;
        if(this.blood <= 0){//dead
            if(Math.random() > 0.5){
                let newMonster = cc.instantiate(this.monsterPrefab);
                let x = this.node.position.x - this.node.getContentSize().width/2;
                if(x < this.node.getContentSize().width/2){
                    x = this.node.getContentSize().width/2;
                }
                newMonster.setPosition(x,this.node.position.y);
                let com = newMonster.getComponent('monster2');
                let blood = Math.floor(this.getOriginalBlood()/2);
                com.setBlood(blood);
                com.setOriginalBlood(blood);
                this.node.getParent().addChild(newMonster);
                if(null != this.hero){
                    com.startRun(this.hero);
                } 

                let newMonster2 = cc.instantiate(this.monsterPrefab);

                let x2 = this.node.position.x + this.node.getContentSize().width/2;
                if(x2 > (cc.winSize.width - this.node.getContentSize().width/2)){
                    x2 = cc.winSize.width - this.node.getContentSize().width/2;
                }
                newMonster2.setPosition(x2,this.node.position.y);
                let com2 = newMonster2.getComponent('monster2');
                com2.setBlood(blood);
                com2.setOriginalBlood(blood);
                this.node.getParent().addChild(newMonster2);
                if(null != this.hero){
                    com2.startRun(this.hero);
                } 
            }
            this.monsterBlood.string = 0;
            this.node.removeFromParent();
            this.destroy();
        }else{
            this.monsterBlood.string = this.getBlood();
            let scaleT = this.getBlood()/this.relativeBlood;
            if(scaleT <= this.minScale){
                scaleT = this.minScale;
            }
            let scaleAction = cc.scaleTo(0.1,scaleT);
            this.node.runAction(scaleAction);
        }
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
    setOriginalBlood(newBlood){
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
        this.setVolume();
        this.updateBlood(0);
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
    //     cc.director.getCollisionManager().enabled=true;
    //     cc.director.getPhysicsManager().enabled = true;
    //     cc.director.getPhysicsManager().gravity = cc.v2(0, -320);
    // },

    start () {

    },

    // update (dt) {},
});
