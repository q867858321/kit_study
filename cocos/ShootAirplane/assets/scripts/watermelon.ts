import BaseProp from "./baseProp";

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
export default class Watermelon extends BaseProp {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';
    // @property(Number)
    //  bulletType :number = 1;

    // // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.setBulletType(1);
    }
    // public getBulletType() : number{
    //     return this.bulletType;
    // }
    // public setBulletType(newType : number) {
    //     this.bulletType = newType;
    // }
    // start () {

    // }
    // public onBeginContact(contact ,selfCollider,otherCollider){
    //     if(otherCollider.node.group == 'hero'){
    //         this.node.removeFromParent();
    //         this.destroy();
    //     }
    // }
    // public onEndContact(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    // }
    // public onPreSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    // }
    // public onPostSolve(contact :any ,selfCollider: cc.Node ,otherCollider :cc.Node){
        
    // }

    // update (dt) {
    //     if(this.node.position.y > cc.winSize.height){
    //         this.node.removeFromParent();
    //         this.destroy();
    //     }
    // }
}
