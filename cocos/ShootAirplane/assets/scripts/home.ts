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
export default class Home extends cc.Component {
    
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    @property(cc.Button)
    startButton = null;
    @property(cc.Sprite)
    netImage = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    loadImg(url){
        let _me = this;
        cc.loader.load(url, function (err, texture) {
            let sprite  = new cc.SpriteFrame(texture);
            _me.netImage.spriteFrame = sprite;
        });
    }

    public start () {
        this.startButton.node.on('click',this.startFight);
        this.loadImg('http://e.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg');
    }
    public startFight(){
        cc.director.loadScene("battle");
    }
    public onDestroy(){
        
    }

    // update (dt) {}
}
