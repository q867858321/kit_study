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
export default class BaseCoin extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    @property(Number)
    count = 10;
    @property(Number)
    speed = 100;
    @property(cc.Action)
    action = null;
    @property(cc.Label)
    countLabel = null;

    public startFly(){
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
    }
    public getSpeed(){
        return this.speed;
    }
    public setSpeed(newSpeed : number){
        if(null == newSpeed){
            return;
        }
        if('number' == typeof newSpeed){
            this.speed = newSpeed;
        }
    }
    public getCount(){
        return this.count;
    }
    public setCount(newCount:number){
        if(null == newCount){
            return;
        }
        if('number' == typeof newCount){
            this.count = newCount;
        }
        if(this != null){
            this.countLabel.string = newCount;
        }
    }
    // 只在两个碰撞体开始接触时被调用一次
    public onBeginContact(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node) {
        if (otherCollider.group == 'hero'){
            this.destroy();
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

    start () {

    }

    // update (dt) {}
}
