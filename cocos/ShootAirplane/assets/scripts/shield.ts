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
export default class Shield extends cc.Component {
    @property(Number)
    contactCount = 0;
    @property(Number)
    maxContactCount = 3;

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.director.getScheduler().schedule(this.shieldTimeOut, this, 0,0,10,false);
    }
    shieldTimeOut(){
        if(this == null){
            return;
        }
        let parent = this.node.getParent();
        if(null != parent){
            parent.getComponent('hero1').setShieldStatus(false);//.getChildByName('hero1')
        }
        this.node.removeFromParent();
        this.destroy();
    }
    public onBeginContact(contact ,selfCollider,otherCollider){
        if(otherCollider.node.group == 'monster'){
            this.contactCount += 1;
            if(this.contactCount >= this.maxContactCount){
                let parent = this.node.getParent();
                if(null != parent){
                    parent.getComponent('hero1').setShieldStatus(false);//.getChildByName('hero1')
                }
                this.node.removeFromParent();
                this.destroy();
            }
        }
    }
    public onEndContact(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }
    public onPreSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }
    public onPostSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    }

    // update (dt) {}
}
