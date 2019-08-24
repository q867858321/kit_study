import Shield from "./shield";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseHero extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';


    @property(Number)
    originalBlood = 1000
    @property(Number)
    blood = 1000
    @property(Number)
    originalDamage = 500
    @property(Number)
    damage = 500
    @property(Number)
    bulletGenerateSpeed = 0.05
    @property(cc.Prefab)
    bulletPrefab = null
    @property(cc.Label)
    heroBlood = null
    @property(Number)
    bulletType = 0
    @property(cc.Prefab)
    bulletPrefab2 = null
    @property(Boolean)
    isBattleStart = false
    @property(cc.Prefab)
    shieldPrefab = null;
    @property(Boolean)
    hasShield = false
    @property(cc.Node)
    shield = null;


    public getShieldStatus(){
        return this.hasShield;
    }

    public setShieldStatus(has){
        this.hasShield = has;
        if(!has){
            this.shield = null;
        }
    }

    public getOriginalDamage(){
        return this.originalDamage;
    }
    public setOriginalDamage(newDamage : number){
        if(null == newDamage){
            return;
        }
        if('number' == typeof newDamage){
            this.originalDamage = newDamage;
        }
    }

    public getDamage(){
        return this.damage;
    }
    public setDamage(newDamage : number){
        if(null == newDamage){
            return;
        }
        if('number' == typeof newDamage){
            this.damage = newDamage;
        }
    }
    public getOriginalBlood(){
        return this.originalBlood;
    }
    public setOrigianlBlood(newBlood:number){
        if(null == newBlood){
            return;
        }
        if('number' == typeof newBlood){
            this.originalBlood = newBlood;
        }
    }
    public getBlood(){
        return this.blood;
    }
    public setBlood(newBlood:number){
        if(null == newBlood){
            return;
        }
        if('number' == typeof newBlood){
            this.blood = newBlood;
        }
        this.updateBlood(0);
    }
    public updateBlood(damage:number){
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
        
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    public start () {
        this.addEventHandler();
    }
    public moveMe(dx:number){
        let tx = this.node.position.x + dx;
        if(tx > cc.winSize.width){
            tx = cc.winSize.width;
        }
        if(tx < 0){
            tx = 0;
        }
        this.node.setPosition(cc.v2(tx,this.node.position.y));
        if(null != this.shield){
        //     // let shield = this.node.getChildByName(this.shieldPrefab.name);
        //     // let stx = shield.position.x + dx;
        //     // if(stx > cc.winSize.width){
        //     //     stx = cc.winSize.width;
        //     // }
        //     // if(stx < 0){
        //     //     stx = 0;
        //     // }
            // this.shield.setPosition(this.node.position.x,this.node.position.y);
            // this.shield.setPosition(this.node.convertToNodeSpace(cc.v2(this.node.position.x,this.node.position.y)));
            this.shield.setPosition(0,0);
        }
    }
    public onMeTouchStart(event){
        if(this == null){
            return;
        }
        try{
            this.isBattleStart = true;
            this.updateMePosition(event.getLocation().x,0);
            this.startShoot();
        }catch(e){

        }
        
    }
    public onMeTouchMove(event){
        try{
            this.updateMePosition(event.getLocation().x,this.node.position.y);
        }catch(e){

        }
        
    }
    public onMeTouchEnd(event){
        try{
            this.isBattleStart = false;
            this.updateMePosition(event.getLocation().x,this.node.position.y);
        }catch(e){

        }
        
    }
    public generateBullets(){
        // if(this.isBattleStart){
            let bullet;
            if(this.bulletType == 1){
                bullet = cc.instantiate(this.bulletPrefab2);
            }else {
                bullet = cc.instantiate(this.bulletPrefab);
            }
            bullet.setPosition(this.node.position.x,this.node.position.y+bullet.getContentSize().height/2+this.node.getContentSize().height/2);
            this.node.getParent().addChild(bullet);
            // buttle.getComponent('buttle1').startFly();
        // }else{
        //     this.unschedule(this.generateBullets);
        // }
    }
    public stopShoot(){
        cc.director.getScheduler().unschedule(this.generateBullets,this);
    }
    public startShoot(){
        // this.generateOneBullet();
        // let _me = this;
        // let callback = function() {
        //     if(_me.isBattleStart){
        //         let bullet;
        //         if(this.bulletType == 1){
        //             bullet = cc.instantiate(_me.bulletPrefab2);
        //         }else {
        //             bullet = cc.instantiate(_me.bulletPrefab);
        //         }
        //         bullet.setPosition(_me.node.position.x,_me.node.position.y+bullet.getContentSize().height/2+_me.node.getContentSize().height/2);
        //         _me.node.getParent().addChild(bullet);
        //         // buttle.getComponent('buttle1').startFly();
        //     }else{
        //         _me.unschedule(callback);
        //     }
        // };
        if(this.bulletType == 1){
            // this.schedule(this.generateBullets, cc.instantiate(this.bulletPrefab2).getComponent('bullet2').getGenerateSpeed(), cc.macro.REPEAT_FOREVER,0);
            cc.director.getScheduler().schedule(this.generateBullets,this,cc.instantiate(this.bulletPrefab2).getComponent('bullet2').getGenerateSpeed(),cc.macro.REPEAT_FOREVER,0,false);
        }else {
            // this.schedule(this.generateBullets, cc.instantiate(this.bulletPrefab).getComponent('bullet').getGenerateSpeed(), cc.macro.REPEAT_FOREVER,0);
            cc.director.getScheduler().schedule(this.generateBullets,this,cc.instantiate(this.bulletPrefab).getComponent('bullet').getGenerateSpeed(),cc.macro.REPEAT_FOREVER,0,false);
        }
        
    }
    public generateOneBullet(){
        let bullet;
        if(this.bulletType == 1){
            bullet = cc.instantiate(this.bulletPrefab2);
        }else {
            bullet = cc.instantiate(this.bulletPrefab);
        }
        bullet.setPosition(this.node.position.x,this.node.position.y+bullet.getContentSize().height/2+this.node.getContentSize().height/2);
        this.node.getParent().addChild(bullet);
        // buttle.getComponent('buttle1').startFly();
    }
    public updateMePosition(x:number,y:number){
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
    }
    public addEventHandler(){
            // this.node.on(cc.Node.EventType.TOUCH_START,this.onMeTouchStart,this);
            // this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onMeTouchMove,this);
            // this.node.on(cc.Node.EventType.TOUCH_END,this.onMeTouchEnd,this);
            // this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onMeTouchEnd,this);
        
    }
    public onDestroy () {
            // this.node.off(cc.Node.EventType.TOUCH_START,this.onMeTouchStart(event));
            // this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onMeTouchMove(event));
            // this.node.off(cc.Node.EventType.TOUCH_END,this.onMeTouchEnd(event));
            // this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onMeTouchEnd(event));
    }
    // 只在两个碰撞体开始接触时被调用一次
    public onBeginContact(contact, selfCollider, otherCollider) {
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
            if(type > this.bulletType){
                if(type == 2){//shield
                    if(!this.hasShield){
                        let shield1 = cc.instantiate(this.shieldPrefab);
                        // shield1.setPosition(this.node.position.x,this.node.position.y);//this.node.convertToNodeSpace(cc.v2(this.node.position.x,0))
                        // this.node.getParent().addChild(shield1);
                        this.node.addChild(shield1);
                        shield1.setPosition(0,0);
                        this.setShieldStatus(true);
                        this.shield = shield1;
                    }
                }else{
                    this.bulletType = type;
                    this.startShoot();
                }
            }
        }
    }

    public onEndContact(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }
    public onPreSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }
    public onPostSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }






    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
