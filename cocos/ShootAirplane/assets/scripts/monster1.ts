import BaseMonster from "./baseMonster";

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
export default class Monster1 extends BaseMonster {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {

    // }

    // update (dt) {}
    public split(){
        if(Math.random() > 0.5){
            let newMonster = cc.instantiate(this.monsterPrefab);
            if(null == newMonster){
                return;
            }
            let x = this.node.position.x - this.node.getContentSize().width/2;
            if(x < this.node.getContentSize().width/2){
                x = this.node.getContentSize().width/2;
            }
            if(this.node.position.y < cc.winSize.height/2){
                newMonster.getComponent(cc.RigidBody).linearVelocity = cc.v2(100,300);
            }
            newMonster.setPosition(x,this.node.position.y);
            let com = newMonster.getComponent('monster2');
            let blood = Math.floor(this.getOriginalBlood()/2);
            com.setBlood(blood);
            com.setOriginalBlood(blood);
            let parent = this.node.getParent();
            if(null != parent){
                parent.addChild(newMonster);
            }
            if(null != this.hero){
                com.startRun(this.hero);
            } 

            let newMonster2 = cc.instantiate(this.monsterPrefab);
            if(null == newMonster2){
                return;
            }
            let x2 = this.node.position.x + this.node.getContentSize().width/2;
            if(x2 > (cc.winSize.width - this.node.getContentSize().width/2)){
                x2 = cc.winSize.width - this.node.getContentSize().width/2;
            }
            if(this.node.position.y < cc.winSize.height/2){
                newMonster2.getComponent(cc.RigidBody).linearVelocity = cc.v2(100,600);
            }
            newMonster2.setPosition(x2,this.node.position.y);
            let com2 = newMonster2.getComponent('monster2');
            com2.setBlood(blood);
            com2.setOriginalBlood(blood);
            if(null != parent){
                parent.addChild(newMonster2);
            }
            if(null != this.hero){
                com2.startRun(this.hero);
            } 
        }
        this.monsterBlood.string = '0';
        // this.node.removeFromParent();
        // this.destroy();
    }
    public createPros(){
        if(Math.random() > 0.95){
            this.createWatermelon();
        }
    }
    public whenDead(){
        // cc.log('whenDead');
        // let event = new cc.Event.EventCustom('monsterDead', true);
        // event.setUserData(this.node);
        // this.node.dispatchEvent(event);
        let parent = this.node.getParent();
        if(null != parent){
            parent.getParent().getComponent('battle').recycleMonster(this.node);
        }
    }
}
