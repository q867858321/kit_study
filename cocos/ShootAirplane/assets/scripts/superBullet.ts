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
export default class SuperBullet extends cc.Component {
    @property(Number)
    originalDamage:number = 100;
    @property(Number)
    damage:number = 100;
    @property(Number)
    originalSpeed:number = 600;
    @property(Number)
    speed:number = 600;
    @property(cc.AudioSource)
    hitAudio = null;
    @property(cc.Prefab)
    particleSystem_attack_left = null;
    @property(cc.Prefab)
    particleSystem_attack_right = null;
    @property(Number)
    generateSpeed = 0.1

    public getGenerateSpeed() : number{
        return this.generateSpeed;
    }
    public setGenerateSpeed(newGenerateSpeed : number){
        if(null == newGenerateSpeed){
            return;
        }
        if('number' == typeof newGenerateSpeed){
            this.generateSpeed = newGenerateSpeed;
        }
    }

    public getOriginalSpeed() : number{
        return this.originalSpeed;
    }
    public setOriginalSpeed(newSpeed:number){
        if(null == newSpeed){
            return;
        }
        if('number' == typeof newSpeed){
            this.originalSpeed = newSpeed;
        }
    }
    public getSpeed() :number{
        return this.speed;
    }
    public setSpeed(newSpeed :number){
        if(null == newSpeed){
            return;
        }
        if('number' == typeof newSpeed){
            this.speed = newSpeed;
        }
    }
    public getDamage() : number{
        return this.damage;
    }
    public setDamage(newDamage:number){
        if(null == newDamage){
            return;
        }
        if('number' ==  typeof newDamage ){
            this.damage = newDamage;
        }
    }

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    public onBeginContact(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        if(null != this.node.getParent()){
            let attack_left = cc.instantiate(this.particleSystem_attack_left);
            let attack_right = cc.instantiate(this.particleSystem_attack_right);
            let yOffset = this.node.getContentSize().height/2;
            let xOffset = this.node.getContentSize().width/2;
            attack_left.setPosition(cc.v2(this.node.position.x - xOffset,this.node.position.y + yOffset));
            attack_right.setPosition(cc.v2(this.node.position.x + xOffset,this.node.position.y + yOffset));
            this.node.getParent().addChild(attack_left);
            this.node.getParent().addChild(attack_right);
        }
        this.hitAudio.node.getComponent(cc.AudioSource).play();
        this.node.removeFromParent();
        this.destroy();
    }
    public onEndContact(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }
    public onPreSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }
    public onPostSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }

    update (dt) {
        if(this.node.position.y > cc.winSize.height){
            this.node.removeFromParent();
            this.destroy();
        }
    }
    // update (dt) {}
}
