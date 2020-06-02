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
export default class BaseMonster extends cc.Component {
    @property(Number)
    relativeBlood:number =1000
    @property(Number)
    originalBlood:number =1000
    @property(Number)
    blood:number =1000
    @property(Number)
    originalDamage:number =100
    @property(Number)
    damage: number =100
    @property(cc.Label)
    monsterBlood:cc.Label = null
    @property(Number)
    minScale:number =0.4
    @property(Number)
    originalSpeed:number =300
    @property(Number)
    speed:number =300
    @property(cc.Prefab)
    coinPrefab:cc.Prefab = null
    @property(cc.Prefab)
    monsterPrefab:cc.Prefab = null
    @property(cc.Node)
    hero: cc.Node = null
    @property(cc.Prefab)
    watermelonPrefab:cc.Prefab = null
    @property(Boolean)
    isShaking = false;
    @property(cc.AudioSource)
    hurtAudio = null;
    @property(cc.AudioSource)
    deadAudio = null;
    @property(cc.Prefab)
    diamondPrefab:cc.Prefab = null
    @property(cc.Prefab)
    shieldPropPrefab = null;

    // onLoad () {}

    start () {

    }

    // update (dt) {}
    public createWatermelon(){
        if(this == null || this.node.getParent() == null){
            return;
        }
        let watermelon = cc.instantiate(this.watermelonPrefab);
        if(null == watermelon){
            return;
        }
        watermelon.setPosition(this.node.position.x,this.node.position.y);
        this.node.getParent().addChild(watermelon);
    }
    public startRun(targetNode :cc.Node){
        this.hero = targetNode;
        // let bezier = [cc.v2(targetNode.getPosition().x,targetNode.getPosition().y),cc.v2(cc.winSize.width/2,cc.winSize.height/2)];
        // var followAction = cc.bezierTo(2,bezier);//, cc.rect(0, 0,cc.winSize.width, cc.winSize.height)
        var bezier = [cc.v2(0, cc.winSize.height / 2), cc.v2(300, -cc.winSize.height / 2), cc.v2(300, 100)];
        this.node.runAction(cc.bezierTo(40,bezier));
    }
    public setSpeed(newSpeed :number){
        if(null == newSpeed){
            return;
        }
        if('number' == typeof newSpeed){
            this.speed = newSpeed;
        }
    }
    public createShield(){
        if(this == null || this.node.getParent() == null){
            return;
        }
        let shieldProp = cc.instantiate(this.shieldPropPrefab);
        if(null == shieldProp){
            return;
        }
        shieldProp.setPosition(this.node.position.x,this.node.position.y);
        this.node.getParent().addChild(shieldProp);
    }
    public createPros(){
        // if(Math.random() > 0.9){
        //     this.createWatermelon();
        // }
    }
    // 只在两个碰撞体开始接触时被调用一次
    public onBeginContact(contact, selfCollider, otherCollider) {
        if(otherCollider.node.group == 'bullet'){
            if(Math.random() > 0.6){
                this.createCoin();
            }
            if(Math.random() > 0.95){
                this.createDiamond();
            }
            if(Math.random() > 0.9){
                this.createWatermelon();
            }
            if(Math.random() > 0.95){
                this.createShield();
            }
            // if(!this.hurtAudio.node.getComponent(cc.AudioSource).isPlaying){
                this.hurtAudio.node.getComponent(cc.AudioSource).play();
            // }
            this.createPros();
            this.updateBlood(otherCollider.getComponent(otherCollider.node.name).getDamage());
            let anim = this.getComponent(cc.Animation);
            if(null != anim){
                anim.play();
            }

            // this.shake();
        }
    }
    public shake(){
        if(this == null ){
            return;
        }
        // if(!this.isShaking){
        //     this.isShaking = true;
        //     let offset = 0.5;
        //     let action = cc.sequence(
        //         cc.moveTo(0.018, cc.v2(this.node.position.x + (1 + offset), this.node.position.y + (offset + 1.5))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x - (1.5 + offset), this.node.position.y + (offset + 0.5))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x - (1.5 + offset), this.node.position.y + (offset + 1))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x + (1 + offset), this.node.position.y- (2.5 + offset))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x - (2.5 + offset), this.node.position.y + (offset + 2.5))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x + (0 + offset), this.node.position.y - (2.5 + offset))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x - (2.5 + offset), this.node.position.y - (2.5 + offset))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x + (1 + offset), this.node.position.y + (offset + 2.5))),
        //         cc.moveTo(0.018, cc.v2(this.node.position.x + (0 + offset), this.node.position.y + (offset + 0))),
        //         cc.callFunc(()=>{
        //             this.isShaking = false;
        //         })
        //     );
        //     this.node.runAction(action);
        // }
        
    }
    // 只在两个碰撞体结束接触时被调用一次
    public onEndContact (contact, selfCollider, otherCollider) {
        // let anim = this.getComponent(cc.Animation);
        //     if(null != anim){
        //         cc.log('stop anim');
        //         anim.stop();
        //     }
    }

    // 每次将要处理碰撞体接触逻辑时被调用
    public onPreSolve (contact, selfCollider, otherCollider) {
    }

    // 每次处理完碰撞体接触逻辑时被调用
    public onPostSolve (contact, selfCollider, otherCollider) {
    }
    public createCoin(){
        if(this == null || this.node.getParent() == null){
            return;
        }
        let coin = cc.instantiate(this.coinPrefab);
        coin.setPosition(this.node.position.x,this.node.position.y);
        this.node.getParent().addChild(coin);
        let c = coin.getComponent(coin.name);
        let count = Math.floor(Math.random()*this.getBlood()/10);
        if(count <=0){
            count = 1;
        }
        c.setCount(count);
        // c.startFly();
    }
    public createDiamond(){
        if(this == null || this.node.getParent() == null){
            return;
        }
        let diamond = cc.instantiate(this.diamondPrefab);
        diamond.setPosition(this.node.position.x,this.node.position.y);
        this.node.getParent().addChild(diamond);
        let c = diamond.getComponent(diamond.name);
        let count = this.getRandom(1,4);
        c.setCount(count);
        // c.startFly();
    }
    public setVolume(){
        let scale = this.getBlood()/this.relativeBlood;
        if(scale < 0.4){
            scale = 0.4;
        }
        this.node.scale = 1;
    }
    public split(){
        // if(Math.random() > 0.5){
        //     let newMonster = cc.instantiate(this.monsterPrefab);
        //     let x = this.node.position.x - this.node.getContentSize().width/2;
        //     if(x < this.node.getContentSize().width/2){
        //         x = this.node.getContentSize().width/2;
        //     }
        //     newMonster.setPosition(x,this.node.position.y);
        //     let com = newMonster.getComponent('monster2');
        //     let blood = Math.floor(this.getOriginalBlood()/2);
        //     com.setBlood(blood);
        //     com.setOriginalBlood(blood);
        //     this.node.getParent().addChild(newMonster);
        //     if(null != this.hero){
        //         com.startRun(this.hero);
        //     } 

        //     let newMonster2 = cc.instantiate(this.monsterPrefab);

        //     let x2 = this.node.position.x + this.node.getContentSize().width/2;
        //     if(x2 > (cc.winSize.width - this.node.getContentSize().width/2)){
        //         x2 = cc.winSize.width - this.node.getContentSize().width/2;
        //     }
        //     newMonster2.setPosition(x2,this.node.position.y);
        //     let com2 = newMonster2.getComponent('monster2');
        //     com2.setBlood(blood);
        //     com2.setOriginalBlood(blood);
        //     this.node.getParent().addChild(newMonster2);
        //     if(null != this.hero){
        //         com2.startRun(this.hero);
        //     } 
        // }
        // this.monsterBlood.string = '0';
        // this.node.removeFromParent();
        // this.destroy();
    }
    public updateBlood(damage){
        if(null == this){
            return;
        }
        this.blood = this.getBlood() - 0 - damage;
        if(this.blood <= 0){//dead
            this.deadAudio.node.getComponent(cc.AudioSource).play();
            // if(Math.random() > 0.5){
            //     let newMonster = cc.instantiate(this.monsterPrefab);
            //     let x = this.node.position.x - this.node.getContentSize().width/2;
            //     if(x < this.node.getContentSize().width/2){
            //         x = this.node.getContentSize().width/2;
            //     }
            //     newMonster.setPosition(x,this.node.position.y);
            //     let com = newMonster.getComponent('monster2');
            //     let blood = Math.floor(this.getOriginalBlood()/2);
            //     com.setBlood(blood);
            //     com.setOriginalBlood(blood);
            //     this.node.getParent().addChild(newMonster);
            //     if(null != this.hero){
            //         com.startRun(this.hero);
            //     } 

            //     let newMonster2 = cc.instantiate(this.monsterPrefab);

            //     let x2 = this.node.position.x + this.node.getContentSize().width/2;
            //     if(x2 > (cc.winSize.width - this.node.getContentSize().width/2)){
            //         x2 = cc.winSize.width - this.node.getContentSize().width/2;
            //     }
            //     newMonster2.setPosition(x2,this.node.position.y);
            //     let com2 = newMonster2.getComponent('monster2');
            //     com2.setBlood(blood);
            //     com2.setOriginalBlood(blood);
            //     this.node.getParent().addChild(newMonster2);
            //     if(null != this.hero){
            //         com2.startRun(this.hero);
            //     } 
            // }
            this.split();
            this.monsterBlood.string = '0';
            // this.node.removeFromParent();
            // this.destroy();
            this.whenDead();
        }else{
            this.monsterBlood.string = this.getBlood()+'';
            // let scaleT = this.getBlood()/this.relativeBlood;
            // if(scaleT <= this.minScale){
            //     scaleT = this.minScale;
            // }
            // let scaleAction = cc.scaleTo(0.1,scaleT);
            // this.node.runAction(scaleAction);
        }
    }
    public whenDead(){
        
    }
    public getOriginalDamage(){
        return this.originalDamage;
    }
    public setOriginalDamage(newDamage){
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
    public setDamage(newDamage){
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
    public setOriginalBlood(newBlood){
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
    public setBlood(newBlood){
        if(null == newBlood){
            return;
        }
        if('number' == typeof newBlood){
            this.blood = newBlood;
        }
        this.setVolume();
        this.updateBlood(0);
    }
    public getRandom(bottom, top){
        let m = Math.max(bottom,top);
        let n = Math.min(bottom,top);
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return random;
    }
}
