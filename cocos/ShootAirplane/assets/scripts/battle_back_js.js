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
        isBattleStart:false,
        battle_bg: cc.Node,
        monsterPrefab: cc.Prefab,
        heroPrefab: cc.Prefab,
        coinCountLabel: cc.Label,
        DeadBg:cc.Node,
        retry:cc.Button,
        failCoinCount:cc.Label,
        dialogTitle: cc.Label,
        monster1NodePool: cc.NodePool,
        diamondCountLabel: cc.Label,
        failDiamondCount: cc.Label,
        hero: cc.Node,
        heroLastPosition: cc.Vec2,
        bgm: {
            type: cc.AudioClip,
            default: null,
            displayName: "背景音乐",
            tooltip: "background mousic",
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.audioEngine.setMaxAudioInstance(20);
        cc.debug.setDisplayStats(false);
        cc.director.getCollisionManager().enabled=true;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0,-640);
        this.addEventListener();
        if(null != this.monster1NodePool){
            this.monster1NodePool.clear();
        }
        this.createMonster1NodePool();
    },
    createMonster1NodePool(){
        this.monster1NodePool = new cc.NodePool();
        let initCount = 20;
        for (let i = 0; i < initCount; ++i) {
            let enemy = cc.instantiate(this.monsterPrefab); 
            this.monster1NodePool.put(enemy);
        }
    },
    addEventListener(){
        let me_ = this;
        this.node.on('updateCoin', function (event) {
            me_.updateCoinCount(event.getUserData());
            event.stopPropagation();
          });
        this.node.on('updateDiamond', function (event) {
            me_.updateDiamondCount(event.getUserData());
            event.stopPropagation();
        });
        this.node.on('heroDead', function (event) {
            me_.gameOver(false);
            event.stopPropagation();
        });
        // this.node.on('monsterDead', function (event) {
        //     let node = event.getUserData();
        //     me_.monster1NodePool.put(node);
        //     cc.log('put in pool:'+me_.monster1NodePool.size());
        //     event.stopPropagation();
        // });
        this.retry.node.on('click',(event)=>{
            this.DeadBg.active = false;
            cc.director.resume();
            this.init();
        });
    },
    checkWin(){
        let monster1 = this.battle_bg.getChildByName('monster1');
        let monster2 = this.battle_bg.getChildByName('monster2');
        let hero = this.battle_bg.getChildByName('hero1');
        if(!cc.director.getScheduler().isScheduled(this.createMonsters,this) && null == monster1 && null == monster2 && null != hero){
            cc.director.getScheduler().unschedule(this.checkWin,this);
            this.gameOver(true);
        }
    },
    gameOver(success){
        if(true != this.DeadBg.active){
            this.DeadBg.active = true;
            this.dialogTitle.string = success ? 'YOU WIN':'YOU FAILED';
            this.failCoinCount.string = this.coinCountLabel.string;
            this.failDiamondCount.string = this.diamondCountLabel.string;
            if(!success){
                cc.director.pause();
            }
            // this.battle_bg.getComponent(cc.AudioSource).pause();
            cc.audioEngine.stopMusic();
        }
    },
    updateCoinCount(dCount){
        if(null == dCount || 'number' != typeof dCount){
            return;
        }else{
            let cCount = this.coinCountLabel.string - 0;
            this.coinCountLabel.string = cCount + dCount;
            this.failCoinCount.string = this.coinCountLabel.string;
        }
    },
    updateDiamondCount(dCount){
        if(null == dCount || 'number' != typeof dCount){
            return;
        }else{
            let cCount = this.diamondCountLabel.string - 0;
            this.diamondCountLabel.string = cCount + dCount;
            this.failDiamondCount.string = this.diamondCountLabel.string;
        }
    },
    start () {
        this.addEventHandler();
        this.init();
    },
    init(){
        cc.audioEngine.setMusicVolume(0.2);
        cc.audioEngine.playMusic(this.bgm,true);
        // this.battle_bg.getComponent(cc.AudioSource).play();
        cc.director.getScheduler().unschedule(this.checkWin,this);
        cc.director.getScheduler().unschedule(this.createMonsters,this);
        // this.battle_bg.removeAllChildren(true);
        this.battle_bg.destroyAllChildren(true);
        this.coinCountLabel.string = 0;
        this.diamondCountLabel.string = 0;
        // let callback = function() {
        //     this.createMonsters();
        // };
        // this.unschedule(callback);
        // let hero = this.battle_bg.getChildByName('hero');
        // if(null != hero){
        //     hero.node.removeFromParent();
        //     hero.destroy();
        // }
        this.createHero();
        // this.createMonsters();
        cc.director.getScheduler().schedule(this.createMonsters,this,6,4,2,false);
        cc.director.getScheduler().schedule(this.checkWin,this,1,cc.macro.REPEAT_FOREVER,0,false);
        // this.schedule(callback,10,4);//cc.macro.REPEAT_FOREVER
        
    },
    createHero(){
        let hero1 = cc.instantiate(this.heroPrefab);
        this.battle_bg.addChild(hero1,1,'hero1');
        this.hero = hero1;
    },
    recycleMonster(node){
        this.monster1NodePool.put(node);
    },
    createMonsters(){
        // cc.log('pool size:'+this.monster1NodePool.size());
        for(let i = 0  ; i < 4 ; i++){
            // let monster = cc.instantiate(this.monsterPrefab);
            let monster = null;
            if (this.monster1NodePool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
                monster = this.monster1NodePool.get();
                // cc.log('get from pool');
            } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
                monster = cc.instantiate(this.monsterPrefab);
                // cc.log('get from new');
            }
            monster.parent = this.battle_bg; // 将生成的敌人加入节点树
            monster.setPosition(Math.floor(Math.random()*cc.winSize.width),cc.winSize.height-200);
            let com = monster.getComponent('monster1');
            let blood = this.getBlood(400,1000);
            com.setOriginalBlood(blood);
            com.setBlood(blood);
            // this.battle_bg.addChild(monster);
        }
    },
    getBlood(bottom, top){
        let m = Math.max(bottom,top);
        let n = Math.min(bottom,top);
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return random;
    },
    // update (dt) {},

    addEventHandler(){
        this.battle_bg.on(cc.Node.EventType.TOUCH_START,this.onMeTouchStart,this);
        this.battle_bg.on(cc.Node.EventType.TOUCH_MOVE,this.onMeTouchMove,this);
        this.battle_bg.on(cc.Node.EventType.TOUCH_END,this.onMeTouchEnd,this);
        this.battle_bg.on(cc.Node.EventType.TOUCH_CANCEL,this.onMeTouchEnd,this);
    },
    onDestroy () {
        this.battle_bg.off(cc.Node.EventType.TOUCH_START,this.onMeTouchStart(event));
        this.battle_bg.off(cc.Node.EventType.TOUCH_MOVE,this.onMeTouchMove(event));
        this.battle_bg.off(cc.Node.EventType.TOUCH_END,this.onMeTouchEnd(event));
        this.battle_bg.off(cc.Node.EventType.TOUCH_CANCEL,this.onMeTouchEnd(event));
    },
    onMeTouchStart(event){
        // if(null != this.hero){
        //     if(null != this.hero.getComponent('hero1')){
        //         this.hero.getComponent('hero1').onMeTouchStart(event);
        //     }
        // }
        this.heroLastPosition = cc.v2(event.getLocation().x,this.node.position.y);
        if(null != this.hero){
            if(null != this.hero.getComponent('hero1')){
                this.hero.getComponent('hero1').isBattleStart = true;
                this.hero.getComponent('hero1').startShoot();
            }
        }
    },
    onMeTouchMove(event){
        if(null != this.hero){
            if(null != this.hero.getComponent('hero1')){
                // this.hero.getComponent('hero1').onMeTouchMove(event);
                this.hero.getComponent('hero1').moveMe(event.getLocation().x - this.heroLastPosition.x);
            }
        }
        this.heroLastPosition = cc.v2(event.getLocation().x,this.node.position.y);
    },
    onMeTouchEnd(event){
        if(null != this.hero){
            if(null != this.hero.getComponent('hero1')){
                // this.hero.getComponent('hero1').onMeTouchEnd(event);
                this.hero.getComponent('hero1').isBattleStart = false;
                this.hero.getComponent('hero1').stopShoot();
                this.hero.getComponent('hero1').moveMe(event.getLocation().x - this.heroLastPosition.x);
            }
        }
    },
});
