(function (modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function (value) {
        return value;
    };
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ?
            function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 0);
}([function (module, exports, __webpack_require__) {
        function TestBotStep() {
            if (_Interface2.default.CurrentScreen === "main" && !Game.playing) {
                if (Math.random() > 0.5) {
                    _Interface2.
                    default.ChooseCharacter();
                } else {
                    _Interface2.
                    default.playButtonCallback();
                }
                return;
            }
            var dir = THREE.Math.randInt(0, 4);
            if (_Interface2.default.CurrentScreen === "selectingCharacter") {
                switch (dir) {
                    case 0:
                        if (!_Carousel2.default.SelectCharacter()) {
                            _Carousel2.
                            default.BuyCharacter();
                        }
                        return;
                    case 1:
                        _Carousel2.
                        default.btnRightCallBack();
                        return;
                    case 2:
                        _Carousel2.
                        default.btnLeftCallBack();
                        return;
                }
                return;
            }
            if (dir === 0) {
                Game.playerController.SetDesiredRotationForDirection("forward");
                Game.playerController.nextPlayerAction = "forward";
            }
            if (dir === 1) {
                Game.playerController.SetDesiredRotationForDirection("right");
                Game.playerController.nextPlayerAction = "right";
            }
            if (dir === 2) {
                Game.playerController.nextPlayerAction = "left";
                Game.playerController.SetDesiredRotationForDirection("left");
            }
            if (dir === 3) {
                Game.playerController.nextPlayerAction = "back";
                Game.playerController.SetDesiredRotationForDirection("back");
            }
            if (Game.playerController.Dead) {
                _Interface2.
                default.playButtonCallback();
            }
        }

        function onWindowResize() {
            Game.containerRect = Game.container.getBoundingClientRect();
            var wrapperAspect = Game.containerRect.width / Game.containerRect.height;
            var gameAspect = Math.min(Math.max(wrapperAspect, window.minAspect), window.maxAspect);
            var width, height;
            if (wrapperAspect > gameAspect) {
                height = Game.containerRect.height;
                width = height * gameAspect;
            } else {
                width = Game.containerRect.width;
                height = width / gameAspect;
            }
            renderer.setSize(width, height);
            Game.configureCameras();
            updateGameCamera();
            Game.UI.resize();
            _Interface2.
            default.updateScale();
            _Interface2.
            default.updatePauseUI();
            _AppStoreInterstitial2.
            default.resize();
            _FreeGiftScreen2.
            default.resize();
            _GumballMachineScreen2.
            default.resize();
        }

        function render() {
            renderer.clear();
            var elapsedMilliseconds = Date.now() - Game.startTime;
            if (Game.space_background && Game.currentWorld === 'space' && (_Interface2.default.CurrentScreen === 'main' || _Interface2.default.CurrentScreen === 'death')) {
                Game.space_background.children[1].material.uniforms['time'].value = elapsedMilliseconds;
                renderer.render(Game.space_background, Game.space_background_camera);
            }
            renderer.render(Game.scene, Game.camera);
            if (Game.renderUIOnQuad) {
                renderer.clearDepth();
            }
            Game.UI.render(renderer);
        }

        function tickPhysics(delta) {
            for (var physi = 0; physi < Game.physicsObjects.length; physi++) {
                Game.physicsObjects[physi].tick(delta);
            }
            if (Game.playing && Game.playerController.hasMovedThisRound) {
                if (!Game.levelGenerator.isTutorial || Game.eagle.swooping) {
                    Game.eagle.tick(Game.deltaTime);
                } else if (Game.playerController.player.position.z + 3.6 > Game.camera.position.z) {
                    Game.eagle.kill();
                }
            }
        }

        function updateScore() {
            Game.CurrentRow = Game.playerController.targetPosition.z * -1;
            if (Game.CurrentRow + 2 > Game.score) {
                Game.score = Game.CurrentRow + 2;
                if (parseInt(_Storage2.default.getItem('crossyScore'), 10) < Game.score) {
                    _Storage2.
                    default.setItem('crossyScore', Game.score);
                    (0, _Messager.sendGameDataToPlayground)();
                }
                if (!Game.hasPlayedBefore && Game.score >= 12) {
                    Game.hasPlayedBefore = true;
                    _Storage2.
                    default.setItem('hasPlayedBefore', 'true');
                }
            }
        }

        function update() {
            Game.UI.disableInput = Game.paused || !Game.takesUserInput;
            if (!gameReady || Game.paused || document.readyState === 'loading') {
                return;
            }
            updateGameCamera();
            updateScore();
            randomSounds(Game.deltaTime);
            tickPhysics(Game.deltaTime);
            Game.playerController.Update(Game.deltaTime);
            if (Game.playing && !Game.playerController.Dead) {
                _fpsTracker2.
                default.update(Game.deltaTime);
            }
            switch (_Interface2.default.CurrentScreen) {
                case 'selectingCharacter':
                    _Carousel2.
                    default.Update(Game.deltaTime);
                    break;
                case 'gumball':
                    _GumballMachineScreen2.
                    default.update(Game.deltaTime);
                    break;
                case 'free-gift':
                    _FreeGiftScreen2.
                    default.update(Game.deltaTime);
                    break;
            }
            _KeyboardUIControls2.
            default.update(Game.deltaTime);
            _KeyboardHint2.
            default.update(Game.deltaTime);
            if (Game.timeSinceLastBlink >= 0.4) {
                Game.timeSinceLastBlink = 0;
            } else {
                if (Game.timeSinceLastBlink < 0) {
                    Game.timeSinceLastBlink = 0;
                }
                Game.timeSinceLastBlink += Game.deltaTime;
            }
        }
        var animate = function () {
            return eval("(function n1(U){function S(K0,M0,R0){var N1=2;for(;N1!==45;){switch(N1){case 50:H0^=H0>>>16;return H0;break;case 31:G0|=K0[m1[261]](J0)&0xff;G0=H(G0,L0);N1=29;break;case 44:G0=H(G0,N0);N1=43;break;case 15:b000(m1[257]);N1=27;break;case 42:H0^=G0;N1=41;break;case 28:N1=1?44:43;break;case 52:N1=0?51:50;break;case 47:N1=O1===2?32:46;break;case 16:N1=O0?15:26;break;case 35:G0=0;N1=34;break;case 41:N1=!P0?40:38;break;case 43:N1=!O0?42:48;break;case 7:var P0=Q0||typeof n1===m1[249]&&!new E[m1[250]](m1[251])[m1[252]](n1);var H0=R0;var J0=M0;N1=13;break;case 22:I0+=4;N1=10;break;case 29:G0=(G0&0x1ffff)<<15|G0>>>17;N1=28;break;case 8:Q0=E[m1[245]][m1[246]][m1[247]](m1[248])!==-1;N1=7;break;case 25:N1=P0?24:21;break;case 23:H0=H0*5+0xe6546b64|0;N1=22;break;case 33:G0=(K0[m1[259]](J0+2)&0xff)<<16;N1=32;break;case 2:var O0=typeof E!==m1[239]&&typeof E[m1[240]]!==m1[241];var L0=0xcc9e2d51,N0=0x1b873593;var G0;var Q0;N1=3;break;case 3:N1=E[m1[242]]?9:7;break;case 32:G0|=(K0[m1[260]](J0+1)&0xff)<<8;N1=31;break;case 48:b000(m1[262]);N1=41;break;case 12:J0=J0&~0x3;N1=11;break;case 38:H0^=M0;H0^=H0>>>16;H0=H(H0,0x85ebca6b);N1=54;break;case 27:G0=G0|0x1ffff;N1=26;break;case 20:G0=K0[m1[253]](I0)&0xff|(K0[m1[254]](I0+1)&0xff)<<8|(K0[m1[255]](I0+2)&0xff)<<16|(K0[m1[256]](I0+3)&0xff)<<24;G0=H(G0,L0);N1=18;break;case 11:var I0=0;N1=10;break;case 18:G0=(G0&0x1ffff)<<15|G0>>>17;G0=H(G0,N0);N1=16;break;case 9:N1=E[m1[243]][m1[244]]?8:7;break;case 39:G0=G0<<32;N1=38;break;case 34:var O1=M0%4;N1=O1===3?33:47;break;case 21:b000(m1[258]);N1=22;break;case 40:b000(m1[263]);N1=39;break;case 24:H0=(H0&0x7ffff)<<13|H0>>>19;N1=23;break;case 51:H0^=H0>>>13;N1=50;break;case 13:N1=1?12:11;break;case 54:H0^=H0>>>13;H0=H(H0,0xc2b2ae35);N1=52;break;case 26:H0^=G0;N1=25;break;case 46:N1=O1===1?31:38;break;case 10:N1=I0<J0?20:35;break;}}}function P(D0,F0){var M1=2;for(;M1!==9;){switch(M1){case 2:M1=!F0?1:4;break;case 4:D0=D0[m1[232]](new E[m1[233]](m1[234],m1[235]),m1[236]);return S(D0,D0[m1[237]],D0[m1[238]]);break;case 5:D0=D0[m1[230]](E0,m1[231]);M1=4;break;case 1:var E0=new E[m1[228]](m1[229]);M1=5;break;}}}var t1=2;for(;t1!==72;){switch(t1){case 48:var Q,M,O;t1=47;break;case 38:F=1;t1=41;break;case 5:t1=p1===s1.length?4:3;break;case 39:(function(){var G1=2;for(;G1!==28;){switch(G1){case 4:q0=r0[o0]?3:9;G1=1;break;case 2:var q0=2;G1=1;break;case 30:r0[o0]=function(){};G1=29;break;case 1:G1=q0!==8?5:28;break;case 32:return;break;case 6:o0+=m1[131];o0+=m1[132];o0+=m1[133];o0+=m1[134];G1=11;break;case 16:var p0=m1[141];p0+=m1[142];p0+=m1[143];G1=26;break;case 34:q0=4;G1=1;break;case 5:G1=q0===4?4:3;break;case 22:p0+=m1[148];p0+=m1[149];var r0=typeof window!==p0?window:typeof global!==p0?global:this;G1=34;break;case 19:o0+=m1[138];o0+=m1[139];o0+=m1[140];G1=16;break;case 31:G1=q0===9?30:1;break;case 33:G1=q0===3?32:31;break;case 3:G1=q0===2?9:33;break;case 29:q0=8;G1=1;break;case 11:o0+=m1[135];o0+=m1[136];o0+=m1[137];G1=19;break;case 9:var o0=m1[128];o0+=m1[129];o0+=m1[130];G1=6;break;case 26:p0+=m1[144];p0+=m1[145];p0+=m1[146];p0+=m1[147];G1=22;break;}}}());t1=38;break;case 47:t1=1?46:45;break;case 34:t1=typeof E===m1[84]&&E[m1[85]]===E&&!K&&!(E[m1[86]]&&/\\Siref\\S{2}\\/\\d/[m1[87]](E[m1[88]][m1[89]]))&&!(E[m1[90]]&&/\\sEdg\\D+\\s?\\/\\s?\\d+/[m1[91]](E[m1[92]][m1[93]]))?33:57;break;case 35:F=1;t1=23;break;case 28:F=1;t1=31;break;case 56:try{var R1=2;for(;R1!==4;){switch(R1){case 2:R1=m1[286]in E[m1[287]][m1[288]]&&E[m1[289]](m1[290])[m1[291]](E[m1[292]][m1[293]])?1:4;break;case 1:b000(m1[294]);return function(){};break;}}}catch(d1){}var N=T(decodeURIComponent(U),P(R(n1[m1[295]]())),5);/RegExp.constructor/;t1=76;break;case 1:t1=o1<r1.length?5:8;break;case 62:var J=/ /;t1=61;break;case 36:t1=!E[m1[150]][m1[151]]||E[m1[152]](m1[153])[m1[154]](E[m1[155]][m1[156]])?54:48;break;case 25:t1=new E[m1[58]]()[m1[59]]()<L||new E[m1[60]]()[m1[61]]()-L>1051?24:34;break;case 27:var L=new E[m1[54]]()[m1[55]]();try{var B1=2;for(;B1!==1;){switch(B1){case 2:a0000?function d0(){var C1=2;for(;C1!==3;){switch(C1){case 1:C1=this<5000?5:4;break;case 2:debugger;C1=1;break;case 5:d0[m1[56]](this+1);C1=3;break;case 4:throw new Error();C1=3;break;}}}[m1[57]](0):function e0(){var D1=2;for(;D1!==5;){switch(D1){case 2:debugger;e0();D1=5;break;}}}();B1=1;break;}}}catch(f0){}t1=25;break;case 17:t1=m1[50]in E[m1[51]][m1[52]]?16:27;break;case 23:t1=F!==1?22:34;break;case 43:t1=!E[m1[121]][m1[122]]||E[m1[123]](m1[124])[m1[125]](E[m1[126]][m1[127]])?42:36;break;case 45:t1=1?65:64;break;case 46:Q=E[m1[179]][m1[180]](E);t1=45;break;case 32:var F=2;t1=31;break;case 31:t1=F!==1?30:44;break;case 8:var m1=q1.split(String.fromCharCode(170));var E=typeof self===m1[0]&&self[m1[1]]===self?self:typeof global===m1[2]?global:this;var K=false;E[m1[3]]=E[m1[4]]&&/ox\\//[m1[5]](E[m1[6]][m1[7]]);t1=13;break;case 20:t1=m1[43]in E[m1[44]]&&E[m1[45]](m1[46])[m1[47]](E[m1[48]])?19:17;break;case 29:(function(){var F1=2;for(;F1!==28;){switch(F1){case 4:m0=n0[k0]?3:9;F1=1;break;case 30:n0[k0]=function(){};F1=29;break;case 2:var m0=2;F1=1;break;case 34:m0=4;F1=1;break;case 33:F1=m0===3?32:31;break;case 9:var k0=m1[99];k0+=m1[100];k0+=m1[101];k0+=m1[102];k0+=m1[103];k0+=m1[104];k0+=m1[105];F1=11;break;case 29:m0=8;F1=1;break;case 18:k0+=m1[110];k0+=m1[111];var l0=m1[112];l0+=m1[113];F1=27;break;case 1:F1=m0!==8?5:28;break;case 11:k0+=m1[106];k0+=m1[107];k0+=m1[108];k0+=m1[109];F1=18;break;case 22:l0+=m1[119];l0+=m1[120];var n0=typeof window!==l0?window:typeof global!==l0?global:this;F1=34;break;case 32:return;break;case 3:F1=m0===2?9:33;break;case 31:F1=m0===9?30:1;break;case 5:F1=m0===4?4:3;break;case 27:l0+=m1[114];l0+=m1[115];l0+=m1[116];l0+=m1[117];l0+=m1[118];F1=22;break;}}}());t1=28;break;case 65:M=E[m1[181]][m1[182]][m1[183]](E);t1=64;break;case 52:t1=F===2?51:53;break;case 30:t1=F===2?29:31;break;case 63:O=E[m1[184]][m1[185]][m1[186]](E);t1=62;break;case 22:t1=F===2?21:23;break;case 76:var I=eval(N);(function e1(f1){var S1=2;for(;S1!==5;){switch(S1){case 1:for(var g1 in f1){if(f1[m1[297]](g1)){if(typeof f1[g1]===m1[298]){f1[g1][m1[299]]=f1[g1][m1[300]]=function(){var T1=2;for(;T1!==1;){switch(T1){case 2:return m1[301];break;}}};}else if(typeof f1[g1]===m1[302]){e1(f1[g1]);}}}S1=5;break;case 2:S1=typeof f1===m1[296]?1:5;break;}}}(I));(function i1(j1){var U1=2;for(;U1!==5;){switch(U1){case 2:U1=typeof j1!==m1[303]?1:5;break;case 1:j1[m1[304]]=j1[m1[305]]=function(){var V1=2;for(;V1!==5;){switch(V1){case 2:/Array.constructor.prototype/;return m1[306];break;}}};U1=5;break;}}}(I));return I;break;case 49:return function(){};break;case 19:b000(m1[49]);return function(){};break;case 12:K=true;t1=11;break;case 54:var F=2;t1=53;break;case 24:var F=2;t1=23;break;case 59:t1=1?58:57;break;case 53:t1=F!==1?52:49;break;case 58:E[m1[220]][m1[221]](m1[222],J);t1=57;break;case 3:q1+=String[\"fromCharCode\"](r1[\"charCodeAt\"](o1)^s1[\"charCodeAt\"](p1));t1=9;break;case 44:return function(){};break;case 11:var b000=function(W){var u1=2;for(;u1!==9;){switch(u1){case 5:u1=V===2?4:1;break;case 4:(function(){var v1=2;for(;v1!==28;){switch(v1){case 17:X+=m1[24];var Y=m1[25];Y+=m1[26];Y+=m1[27];v1=26;break;case 5:v1=Z===4?4:3;break;case 32:return;break;case 14:X+=m1[16];X+=m1[17];X+=m1[18];v1=11;break;case 33:v1=Z===3?32:31;break;case 30:a0[X]=function(){};v1=29;break;case 11:X+=m1[19];X+=m1[20];v1=20;break;case 26:Y+=m1[28];Y+=m1[29];Y+=m1[30];Y+=m1[31];v1=22;break;case 20:X+=m1[21];X+=m1[22];X+=m1[23];v1=17;break;case 2:var Z=2;v1=1;break;case 1:v1=Z!==8?5:28;break;case 22:Y+=m1[32];Y+=m1[33];var a0=typeof window!==Y?window:typeof global!==Y?global:this;v1=34;break;case 29:Z=8;v1=1;break;case 9:var X=m1[12];X+=m1[13];X+=m1[14];X+=m1[15];v1=14;break;case 34:Z=4;v1=1;break;case 3:v1=Z===2?9:33;break;case 4:Z=a0[X]?3:9;v1=1;break;case 31:v1=Z===9?30:1;break;}}}());u1=3;break;case 3:V=1;u1=1;break;case 2:var V=2;u1=1;break;case 1:u1=V!==1?5:9;break;}}};try{var w1=2;for(;w1!==4;){switch(w1){case 2:E[m1[34]](m1[35]);b000(m1[36]);return function(){};break;}}}catch(_e){try{var A1=2;for(;A1!==4;){switch(A1){case 2:(function(){}[m1[37]](m1[38])());b000(m1[39]);A1=5;break;case 5:return function(){};break;}}}catch(_e){if(/TypeError/[m1[40]](_e+m1[41])){b000(m1[42]);return function(){};}}}t1=20;break;case 50:F=1;t1=53;break;case 57:try{var Q1=2;for(;Q1!==4;){switch(Q1){case 1:b000(m1[285]);return function(){};break;case 2:Q1=m1[275]in E[m1[276]][m1[277]][m1[278]]&&E[m1[279]](m1[280])[m1[281]](E[m1[282]][m1[283]][m1[284]])?1:4;break;}}}catch(b1){}t1=56;break;case 41:t1=F!==1?40:37;break;case 42:var F=2;t1=41;break;case 9:o1++,p1++;t1=1;break;case 51:(function(){var H1=2;for(;H1!==28;){switch(H1){case 29:u0=8;H1=1;break;case 5:H1=u0===4?4:3;break;case 3:H1=u0===2?9:33;break;case 33:H1=u0===3?32:31;break;case 32:return;break;case 22:t0+=m1[177];H1=21;break;case 19:s0+=m1[167];s0+=m1[168];s0+=m1[169];var t0=m1[170];H1=15;break;case 2:var u0=2;H1=1;break;case 15:t0+=m1[171];t0+=m1[172];t0+=m1[173];t0+=m1[174];H1=24;break;case 1:H1=u0!==8?5:28;break;case 21:t0+=m1[178];var v0=typeof window!==t0?window:typeof global!==t0?global:this;H1=34;break;case 34:u0=4;H1=1;break;case 14:s0+=m1[161];s0+=m1[162];s0+=m1[163];s0+=m1[164];s0+=m1[165];s0+=m1[166];H1=19;break;case 9:var s0=m1[157];s0+=m1[158];s0+=m1[159];s0+=m1[160];H1=14;break;case 31:H1=u0===9?30:1;break;case 24:t0+=m1[175];t0+=m1[176];H1=22;break;case 4:u0=v0[s0]?3:9;H1=1;break;case 30:v0[s0]=function(){};H1=29;break;}}}());t1=50;break;case 4:p1=0;t1=3;break;case 16:b000(m1[53]);return function(){};break;case 2:var o1=0,p1=0,q1,r1,s1=(r1=decodeURI(\"%0212%00W%1F%C2%92%1E5%20%09%C3%93%18*Z0U,%C3%80%1BBr%7B%5B%C3%984(%14%02,&5%02!%C3%B2%11Q%18L%C3%87%3E-%19%10%10)D:D%C3%B2%1F%09%170%0A%0C%174=%C3%88%0E=&-%C3%87%7Cr%25W%08g%02%3ElN9%5DgV4Z+%0F%C3%90%00':%1E%17)=#%05%22*%20%19:7%0Br%19Y%005%C3%A6%1A%17%13-V%3CX=%0E%C3%90-%C3%A8%0F%C3%817%C3%B0%7B%C3%88%3E%C3%A14%C3%AB5%C3%B9!%C3%8FP%C3%81J%C3%87(%C3%A6Z%C3%93%18%C3%A2E%C3%BFX%C3%B2%0E%C3%90%17%C3%A8-%C3%81%1B%C3%B0'%C3%88%0E%C3%A1#%C3%AB%08%259%09%C2%9E+%C2%92%07%7D%7C_LZx%00e%06o%C3%80%19%1D,8%1F%00/*%16%049%C3%AD%01%C3%879uU%04%5E%15%5D%60%7C_N%C3%9D%3CU&B%C3%B2%C3%80%10_r%7B%5E_jyR%5B%7C%C3%AD1%1F%3C,%0A@%12H%08%C3%BA)%19%18%1B%C3%A2b0Q%1D%12%0A%C3%98&.%09%07=.%07%197#.%0E&5%00Z%1F%16%1A%22%25%1B%1C%0B)%5C0D,%C3%80%0E%171?%C3%81%17,(%0E%C3%81!jq%5DfuU%04%5B%08Z%C3%BA%3C%1D%16%03'D,F=%C3%80%3E%136.%C3%81%04;%25%17%0E%04!%C3%AB%07~hU%01F%08%5D%60%7CV%C3%933)D0%C2%9C.%0B%16%07'%04%0D%C3%989(%0E%07%C3%A1$%20%01?%C3%B2!U%1F%5D%C3%87&-%03%0C%12%07V%C3%BFr9%1E%1F%C3%984*%07%07?%06%04%C3%81%14%C3%AD%05%C3%87%16%C3%B2W%C2%9E%3E%C2%92%1E%C3%BA%14%C3%85%00%C3%9D,%C2%9A'%C2%9C%20%C3%80O%C3%98-%C3%A1%1E%C3%984%C3%A3%06%C3%81.%C3%AD'%C3%87:%C3%B2%0B%C2%9E%0E%C2%92%09%C3%BA#%0D%13%12+D%C3%BFE=%06%1C%C3%98,*%1D%1B=(%16%049%C3%AD5%08%20,%C3%8FZ%0AN%047-%1B%16%05%C3%A2E&S*+%1D%17,?%C3%81%1C;?%0B%0C*3.%1F%C3%B9,%00G%1F%C2%92%031:%06%1E%16%3C_'%C2%9C-%19%1F%00%03,%0E%1C.%C3%A3%11%0E?%13(%0067%10@%C3%81j%087%09%17%09%C3%9D,U7C?%0D%1F%00%3E/%04%11/$%07%05?i6%1F:,%00H%0AT%08%228%C3%85%0D%12;D%C3%BFE=%1E.%1B/.%04%07.%C3%A3=%C3%81%0F%C3%AD%04%C3%87a%C3%B20%C2%9E%18%C2%925%C3%BA5%C3%85%1D%C3%9D:%C2%9A-%C2%9Cm%C3%80%15%C3%987%C3%A1%05%C3%98%3E%C3%A3%07%C3%81-%C3%AD(%C3%87=%C3%B2%00%C2%9E%0F%C2%92%0E?%22%1C%16%1B-%C2%9A6Z=%0B%08%C3%98%10.%0C7%229%C3%88%0F.%254%0A4=%17H%0FW%0E%25!%0A%17%03fG'_,%0F%06%13..%19%06%C3%B0=%07%18?%C3%AD%22%02=+%0AX%0E%C2%92%0E%3C)%0E%0B%C3%9D%17%C2%9A%11%C2%9C%1D%C3%80H%C3%98%17%C3%A1%18%C3%98%02%C3%A3%1B%C3%81/%C3%AD3%C3%87+%C3%B2P%C2%9E%04%C2%92%18%C3%BA%22%C3%85%1D%C3%9D-%C2%9A3%C2%9C1%C3%80%14%C3%98'%C3%A1%0F%C3%989&%0C%18$+$%C3%87:6%03%5B%C3%81j%087%09%17%09%C3%9D,U7C?%0D%1F%00%3E/%04%11/$%07%05?i6%1F:,%00H%0AT%08%228%C3%85%0D%12;D%C3%BFU7%04%09%1D..%C3%81%1B4/%0D%C3%81%14%C3%AD%05%C3%87%16%C3%B2W%C2%9E%3E%C2%92%1E%C3%BA%14%C3%85%00%C3%9D,%C2%9A'%C2%9C%20%C3%80O%C3%98-%C3%A1%1E%C3%984%C3%A3%06%C3%81.%C3%AD'%C3%87:%C3%B2%0B%C2%9E%0E%C2%92%09%C3%BA?%0A%0D#!%5D0Y-%1E%C3%90%10+%25%0F%C3%989&%0C%18$+$%C3%8704%00U%19%C2%92%0F9%22%0B%C3%93%14'%5E&Y4%0F%C3%90%1B,-%04%C3%988%20%0C%0F%C3%A13.%3E'*%0CZ%0C%C2%92%1E58;%10%1A-_%20B%C3%B28%1F%15%073%1B%C3%98%3E,%00%1E,%20$%1F/%3C%0AW%1EU%08%3E8A%0E%05!D0J9%06%1F%006%C3%A1%1F%17)=%C3%88%18.3%15%04%3E=%0AA%1F%C2%92%1E58;%10%1A-_%20B%C3%B2%09%15%1C1$%07%17%C3%B0*%0E%0E*5%C3%AB?6?%20L%1B%C2%92%095.%1A%1E%10-B)R7%09%0F%1F'%25%1F%5C-;%0B%1F.;%20%016*%11%C2%9E%1F%5D%1E$%C3%A6%0C%16%19;_9S%C3%B2%09%16%17#9%C3%81%115'%11%04'%22%C3%AB%0E?=%04F%C3%81%5B%02%3E?%00%15%12%C3%A2Y;P7%C3%80(%17%25%0E%13%02%C3%B0-%07%09%3E%20&%08!$%01%5B%08M%005%22%1BW%00:Y!S$%0B%16%170?%C3%81%06?:%16%C3%81((/%1E%3C4%00%C2%9E%02V%0B?%C3%A6%0C%16%19;_9S%C3%B2%03%14%14-%C3%A1%0E%04;%25%C3%88%18.3%15%04%3E=%0AA%1F%10%0B%25%22%0C%0D%1E'%5E%7D%1F#%0F%0C%13.cL%115'%11%04'%22o%0E?=%04FC%11Jyw%12UGa%0B%C3%BFS.%0B%16%C3%981.%1F&3$%07%04%3E3i%0B&6%06@%02W%03xeO%02Wh%10u%16x%1C%1B%00b8KOz'%07%1Ck%03%20%196pL%1A%1DY%01%25)%20%1F_a%0Bu%16x%1E%08%0Bb0KRziBKkg%20%5DchU%14T%18MplOY_.E;U,%03%15%1Cb1KZsi%19KkgaMsx%01Q%09M%0A7)%1DBWh%10u%16xJ%13%14bc%1F%1A3:BWkrq%5DcqEOK%18MplOYWhJ%7BU9%06%16Z6#%02%01zbBZb%7CaMsxE%14KEM5%20%1C%1CW3%10u%16xJZRbk%1F%1A(&%15K%25%226M%16*%17%5B%19%10DklOYWh%10uKxJZRb6B%5C9(%0E%07cwhMsxE%14Q%18MplOQ%11=%5E6B1%05%14R8kC%5Bz2BKkgaMs%3C%00V%1E_%0A5%3ETYWh%10u%16x%10R%5BykKRzi%1FBcnzMsxEIK%5B%0C$/%07Y_-%19uM%25JZR+-KZr'%07%1Ck%03%20%196pL%1A%1DY%01%25)%20%1F_a%10i%16+CZ%0E%3EkC%1C?%3EB/*3$Ezv%13U%07M%08%1F*GPWe%10&%1FxTZCr%7F%5C%5Bz2BKkga%1B2*EU%5B%08%5D%60%7CODWz%0BuP7%18ZZyk%0ABjyR%5Bkf%7CPsi%5E%1DKCMpl%1C%0E%1E%3CS=%16p%0BJBr%7B%5B%5Bz2BKk$%20%1E6xW%0EK%18MplG%1F%02&S!_7%04ZZkk%10RziBKkg7%0C!x!%14V%18_klOYWh%10uP7%18ZZyk/R%7Bt_Ks%7ChM(xE%14K%18MplO%0A%00!D6%5ExB%3E%5Bb0KRziBKkga%0E2+%00%14_%02MplOYWh%10u%16x.ZOb%0A01%07i%5DKxg%7BMjcE%14K%18MplOYWhR'S9%01ARbkKRziBK(&2%08sj_%14K%18MplOYWh%10#W*J9R%7FkI-xrBKkgaMsxE%14K%7BM%7BqO%5B3j%0Bu%16xJZRbkKRz%0AB@vgc(qcE%14K%18MplOYWhsu%1DeJX@%60pKRziBKkgaMs%1BE%1FV%18O%05nTYWh%10u%16xJZRb%08KYgi@%18i%7CaMsxE%14K%18Mpl,Y%5Cu%10wnzQZRbkKRziBKk%04aFnxGMI%03MplOYWh%10u%16x)ZY%7FkI%16xrBKkgaMsxE%14K%7BM%7BqO%5B%05j%0Bu%16xJZRbkKRz%0AB@vgc%15qcE%14K%18MplOYWhsu%1DeJXG%60pKRziBKkgaMs%1BE%1FV%18O?nTYWh%10u%16xJZRb=%0A%00z%0BBVke4OhxE%14K%18MplOYW%0A%10~%0BxH%14PykKRziBKkgaM%11xN%09K%1A%09rwOYWh%10u%16xJZR%00k@Ozk%07IpgaMsxE%14K%18Mp%0EORJh%123%14cJZRbkKRziBK%09gjPsz%0C%16P%18MplOYWh%10u%16%1AJQObi%05PaiBKkgaMsxE%14)%18FmlM%1CUs%10u%16xJZRbkKR%18iIVke%25OhxE%14K%18MplOYW%3EQ'%16%19JGR62%1B%175/B%1C%22)%25%02$xD%09V%18/psO%0E%1E&T:AxPZ%06;;%0E%1D%3Ci%05%07$%25%20%01syX%09KzMol%08%15%18*Q9%16bJ%0E%1A+8PRziBKkgaMsx!%14V%18YklOYWh%10u%16xJZ%100.%0A%19aiBKkgaMsx%06U%18%5DMcvOYWh%10u%16xJZR0.%1F%07('YKkgaMsxE%14K%18%0F%22)%0E%12Lh%10u%16xJZRb(%0A%01?i%5BQkgaMsxE%14K%18M%11%17,$Wu%103C6%09%0E%1B-%25KZsi%19KkgaMsxE%14K%18%10klOYWh%10u%16xJZ6bvKJaiBKkgaMsxE%14%09J%081'TYWh%10u%16xJZ%0FbkKRziB%16kgaMs%25M%1DB%03MplOY%16x%00e%06hJGRspKRziB%099%22%20%06hxE%14%16%18%10plO%04WhMy%16hCA%C3%981.%1F&3$%07%04%3E3%C3%AB%0E%3C6%16%5B%07%5D%C3%879%22%09%16%C3%9DmS%C3%BFU7%04%09%1D..%C3%81%1B4/%0D%C3%81n$%C3%AB%1F6(%09U%08%5D%C3%87%02)%08%3C%0F8%C2%9A%09%1E$6S%C3%98%25%C3%A1%C3%81%20?.'%13;%C3%AD%1FE5-%0BW%1FQ%02%3El4IZqQxL%19G%20-f%16@.r%12RFr&l%17%12u?kOeF%7C%10%1CS,x%1DlWu%10;_%18%14O/q%15K78m%1D%16z%04%16%1EC%1A%18#)O%0A%03:Y6BzQSZ%19%17%18.%09%14HBo%C3%AD3%08#4%04W%0E%C2%92Iah%5C%C3%93%05-@9W;%0F%C3%90%20',.%0A*%C3%A3978%1Aj%C3%874%C3%B2%C3%8FX%0EV%0A$$%C3%85%15%12&W!%5E%C3%B2%1F%14%16'-%02%1C?-%C3%884%14%0E%042%17%1D3%60$w!%12%0D=&4%07~%06y%14/%251%0D%06&3%14%0D='%02%09%04%C3%87&6%01Q%0DQ%035(%C3%85%17%16%3EY2W,%05%08%C3%98,*%1D%1B=(%16%049%C3%AD4%1E6*$S%0EV%19%C3%BA%22%0E%0F%1E/Q!Y*%C3%80%0F%01'9*%15?'%16%C3%81%22)%25%08+%17%03%C2%9E%02J%086%C3%A6%09%0C%19+D%3CY6%C3%80(%17%25%0E%13%02%C3%B0C%C3%88%1F.45%C3%8700%04F(W%095%0D%1B%C3%93%14%20Q'u7%0E%1F36%C3%A1%08%1A;;!%04/%22%00%19%C3%B9;%0DU%19%7B%024).%0D%C3%9D%22%1De%06mGJBr%7B%5E%C3%980dR%5B~jq%5DchQ%C2%9E%08P%0C%22%0F%00%1D%12%09D%C3%BFU0%0B%081-/%0E3.%C3%A3%01%03*5%02%027=$@%C3%81R@%60%7CZTGx%00e%03%C3%B2%00WBr~FBjyR_%C3%A1%C3%AD5%02%00,%17%5D%05_%C3%87%3C)%01%1E%03%20%C2%9A9S6%0D%0E%1A%C3%A8'%0E%1C==%0A%C3%81?(%12%19!1%0BS%C3%81T%08%3E+%1B%11%C3%9D%1BD'_6%0D%C3%90%140$%0612(%10($#$%C3%8700%04F(W%095%0D%1B%C3%93%14%20Q'u7%0E%1F36%C3%A1%1B%005=%0D%1F27$%C3%87%00,%17%5D%05_%C3%87%20%3E%00%0D%18%3CI%25S%C3%B2%09%12%130%08%04%16?%08%16%C3%81%19%22&(+(%C3%8FP%0EZ%187+%0A%0B%0B,_6C5%0F%14%06l%3C%19%1B.,%1E%0A'%223%19%C3%B9,%00G%1F%C2%92%3E$%3E%06%17%10%C3%A2@'Y,%05%0E%0B2.%C3%81%112(%10($#$,'%C3%B2%0F%19%5B%08X%7D%7C_IGz%C2%9A%25D7%1E%15%06;;%0E%C3%98%09=%10%02%25%20%C3%AB%0B!7%08w%03Y%1F%13#%0B%1C%C3%9D%1AU2s%20%1A%C3%90%16')%1E%15=,%10%17/(%22%18%3E=%0B@EO%1F98%0A%05%16$U'B%C3%B2%1E%1F%016%C3%A18%06(%20%0C%0C%C3%A1!3%02%3E%1B%0DU%19%7B%024)%C3%85%13Zx%00%60%1BhZJBp%C3%A1%1F%1D%09=%10%02%25%20%C3%AB%0212%00W%1F%C2%92%051?%20%0E%19%18B:F=%18%0E%0B%C3%A8-%1E%1C9=%0B%04%25%C3%AD5%02%00,%17%5D%05_%C3%87&-%03%0C%12%07V%C3%BF%C2%9C7%08%10%17!?%C3%81%074-%07%0D%22)$%09%C3%B9,%0Ag%1FJ%04%3E+%C3%85%0F%16$E0y%3E%C3%80%C3%90\"),q1='','mSXe4k8mPLoywH0U6XjzrBKkrZIbkKGA');t1=1;break;case 37:return function(){};break;case 64:t1=1?63:62;break;case 21:(function(){var E1=2;for(;E1!==28;){switch(E1){case 30:j0[g0]=function(){};E1=29;break;case 17:g0+=m1[74];var h0=m1[75];h0+=m1[76];h0+=m1[77];E1=26;break;case 26:h0+=m1[78];h0+=m1[79];h0+=m1[80];h0+=m1[81];h0+=m1[82];E1=21;break;case 3:E1=i0===2?9:33;break;case 4:i0=j0[g0]?3:9;E1=1;break;case 31:E1=i0===9?30:1;break;case 33:E1=i0===3?32:31;break;case 32:return;break;case 29:i0=8;E1=1;break;case 21:h0+=m1[83];var j0=typeof window!==h0?window:typeof global!==h0?global:this;E1=34;break;case 34:i0=4;E1=1;break;case 1:E1=i0!==8?5:28;break;case 9:var g0=m1[62];g0+=m1[63];g0+=m1[64];g0+=m1[65];g0+=m1[66];E1=13;break;case 13:g0+=m1[67];g0+=m1[68];g0+=m1[69];g0+=m1[70];g0+=m1[71];g0+=m1[72];g0+=m1[73];E1=17;break;case 5:E1=i0===4?4:3;break;case 2:var i0=2;E1=1;break;}}}());t1=35;break;case 60:J[m1[187]]=function(){var I1=2;for(;I1!==11;){switch(I1){case 1:E[m1[193]]=Q;I1=5;break;case 2:I1=!E[m1[188]]||E[m1[189]](m1[190])[m1[191]](E[m1[192]])?1:5;break;case 4:E[m1[201]][m1[202]]=M;I1=3;break;case 5:I1=!E[m1[194]][m1[195]]||E[m1[196]](m1[197])[m1[198]](E[m1[199]][m1[200]])?4:3;break;case 14:E[m1[214]](m1[215]);I1=13;break;case 7:E[m1[212]](m1[213]);I1=6;break;case 8:I1=1?7:6;break;case 13:I1=1?12:11;break;case 9:E[m1[210]][m1[211]]=O;I1=8;break;case 6:I1=1?14:13;break;case 12:E[m1[216]](function(){var J1=2;for(;J1!==1;){switch(J1){case 2:E[m1[217]][m1[218]](m1[219],J);J1=1;break;}}},0);I1=11;break;case 3:I1=!E[m1[203]][m1[204]]||E[m1[205]](m1[206])[m1[207]](E[m1[208]][m1[209]])?9:8;break;}}};t1=59;break;case 40:t1=F===2?39:41;break;case 13:t1=E[m1[8]](m1[9])&&typeof E[m1[10]]===m1[11]?12:11;break;case 61:t1=1?60:59;break;case 33:t1=!E[m1[94]]||E[m1[95]](m1[96])[m1[97]](E[m1[98]])?32:43;break;}}function R(w0){var K1=2;for(;K1!==1;){switch(K1){case 2:return w0[m1[223]](new E[m1[224]](m1[225],m1[226]),m1[227]);break;}}}function H(A0,B0){var L1=2;for(;L1!==4;){switch(L1){case 2:var y0=B0&0xffff;var C0=B0-y0;return(C0*A0|0)+(y0*A0|0)|0;break;}}}function T(Y0,a1,Z0){var P1=2;for(;P1!==17;){switch(P1){case 8:P1=W0>=0?7:18;break;case 20:V0=E[m1[271]][m1[272]](Y0[m1[273]](W0)^T0[S0][m1[274]](U0))+V0;P1=19;break;case 13:S0=0;P1=12;break;case 3:var X0=T0[S0][m1[266]];P1=9;break;case 2:var V0=m1[264];var S0=0;var T0=[];T0[S0]=a1[m1[265]]();P1=3;break;case 6:U0=0;P1=14;break;case 14:P1=++S0===Z0?13:12;break;case 12:P1=T0[m1[268]]<Z0?11:10;break;case 7:P1=U0===X0?6:20;break;case 10:X0=T0[S0][m1[270]];P1=20;break;case 9:var W0=Y0[m1[267]]-1,U0=0;P1=8;break;case 19:--W0,++U0;P1=8;break;case 18:return V0;break;case 11:T0[S0]=P(T0[S0-1],T0[S0-1])[m1[269]]();P1=10;break;}}}}(\"%1E_BC%5BB%5CVX%1E%1AH%1E%19tbgnzeujzx%7Dix%08%16pt%02%0Dwtm%02wtxyzzz%0Brr%11n%0Dsn%12%60~%1A%1C%60%7Dk%60%19%12kv%7Cgyh%60vpu%1Cfwwcfq%7D%15m%12%11qjo%01%0Fr%0Csnwf%17b%7F~%10zt%0Ecb~j%7D%03s%7F%12%7Da~bvln%12%11go%7Cxjw~gf%7Fsx%7D%18%1Ap%0C%18%13%1E%03%18PLYNL_ZW%1E%1FHGKHC%19QE_PLZWC%1C%11O%11%05%18UAX%5D%19%1B%13%16%1B_LXVM%5BVV%18%1F%19L%0D%10P%40WUBZ%5CW%11Y%19%1E%10J%13NRJ%0DW%18%09%19%5BQG%17%7DPDV%1C%1F%1DOXZ%40%5C%7D_%10%19%0D%19R%5BYZ%1D%1B%16BAJ%19J%18P%07%00%01%03%18%0C%18%05RMZZA%5D_Y%19S%10%1B%1D%16H%19%5DSWLU%5E%5DB%0D%19%5EK%18%1EAQ_E%13%0F%19%04%08%01%07%19%11H%18Q%16NUTX%11A%5CYD%19%1A%10%02%1D%0D%13D%19SYJW%19C%10BQEBO%16%5B%5CA%16vAK%5EJ%19%1E%0B%11N%18N%11%03WYXU%1D%04%19%17%03%11%18UAXPMPY%5B%19P%19%10%19%16B%17I%5DT%40%5EQSA%08%19S%10%18%0C%10L%1A%10%1A%03%0DI%18WXAWX%17%11T%19%13O%16%40%5CMb%5CTWVMD%1EX%1B%0D%0D%06%05%09%1F%0D%13N%19%13%11%0A%17YW%13%10%1BVHC%18pXAQ%18%1E%17GQ_AS%7C_%11%1F%15%05%12Z%11%10JE%17%05VSB%19rWGV%11%18%16GV%5CDVwU%10%04%14%15%14Z%1C%14%0E%17%08%01%08%07%1D%16H%19OWG%19S%09%08%00%06%09%17%10%18%04%0EeXP%5CA%19%19%03%11V%00%01%03%08%03%18%0C%09%05%14%08%0E%1D%10L%19BGZ%40U%5B%19%11W%05%09%02%09%08%19%16B%17NYEP%19%04%0C%13%1B_DVRCY%5E%5D%18%1B%11%0DO%18BXG%14t%17%04%11%02%08%14P%5CK%19%1E%0E%19v%19%19%0D%0B%19%0F%16%11%16N%19EAZGZY%18%19s%19%11H%18PY%5EQ%18%00%03%15p%10%0A%19pkpi%16%0C%19%0A%16%0F%19%0B%02%18RD%5CVF%03%16VXES%13%01%03%11NPE%10r%13%05%13%1Ar%16%03%14z%15%1F%0D%17%1Bu%12%08%14u%13%12%04%16%17%7C%10%02%18s%16%12%0A%0D%1A%04%17%02%16u%13%18%04%11%1Ad%15%0B%11p%18%18%05%0D%16K%16%02%15w%10%1C%04%11%12k%16%0D%13z%19%1D%08%19%10%40%1A%0B%16z%17%06%05%16%17%5D%14%0D%13p%19%1A%05%11%15B%13%08%18p%18%06%09%18%16A%17%0F%10t%19%1A%0D%13%16%03%11%02%19u%15%12%0F%19%1A_%14%02%17%5BYD%15%7B%16%0B%13%11L%13%03%11u%10%1A%0E%18%11V%0F%0F%18v%19%1E%09%10%15%5D%13%0B%13v%16%18%04%19%14P%1B%09%19z%10%1D%04%17%0F%5E%14%0E%19t%16%18%0E%19%13Q%13%0C%10s%13%13%0E%18%0FZ%1A%0F%19w%14%1B%0A%19%13U%11%0F%16q%19%12%0B%15%1BV%1B%03%10%40XE%0Dy%16%08%19BOCVVW%18F%5E%5EU%5CO%13%19%10%09%18v%19%0A%14G%5EWU_D%14%0C%13M%40FPVT%19_%5CY%5BVA%18%17%08%04%16t%13%0C%19VT%5EUQ%5D%13%02%13LE%5DK%0F%19q%14%0D%17%0D%0A%10QFSRR%02%16VXA%5C%18%03%0C%19EHLCGW%0D%16QA%5CPS%0A%17SP%40%5D%13%01%17%14yozh%14%0D%17_D%5EP%40_%5CW%19%1E%1C%19I%19E%0B%16%7D%17%10%18%0E%0E%19TDVRR%0A%18L%17M%11N%10%1A%11%16%14Y%04%09%05%04%00%17%04%11%01%08%14TA%5CX%5D%0E%19OeVM%16D%17P%11%1E%1C%19K%1F%1B%1A%02%11%1F%18%0CM%19%1A%11%08ENULWQ%1DQ%19LDL%18%1A%1D%0DA%5CMCGW%12_M%5EUM%5EBV%16TW_%5BRG%5C%19%11JpQ%5CV%16UJLY%5DwV%40ZD%1C%12%0AwRYS%1D%5D%5CZAXfPUU%0BtVYP%18XPX%1EtRTT%16R%5B_RX%16T%5DYp%5DXMT%1C%19%1B%09%1F%05%1A%0FCC%5DXBP%11%1B%02lgs%7Cy%03MFQXBS%1B%1A%02C%5D_SUC%1B%11%08QK%1C%7FUTP%1ASXTA_%40QD%1AB~WX%5C%1CZW%5DFVDHJ%18G%5CXRVA%11%18%03L%5EV%19tY%5E%5D%03DYAJPP%19Lfx%5EGQDUXZS%07%17V%5C%5EQCUC%03mFQXBScRLB%5D%19%1E%0BLVT%40%5DVkqZMPFVVZT%02%1DPSUXLZA%17gI%5CQB%5Cbd%10qTTS%18WVUEYe%5E%5DT%1A%03NQK%1CK%40XAG%19LJEQGG%18FI%5DWA%5C%1A%10%03MD%5CFX%5DEAxX_%5ERMXW_qBP%5E%5D%1BYC%5DUUMP%1D%0BJ%02%16%60gy%7F%10b%1D%13%7Cti%0Fas%7Chukogg%01%1C%7Cg%7Ckpa%60%7Df~v%7Cyp%09d%09%00cz%07sy%0A%7Dwb%06pgv%7Cznc%16%11uw%60%0Erlupgp%7Ce%15hnfo%05q%11%06g%60%12we%0D%7Bc%0Cr%7F%19er%60r%02~bi%7Dzsgg%17l%7Cag%1Dckybmwercbs%60t%7Bbb%16%08E%1B%11%04\"));");
        }();

        function randomSounds(delta) {
            if (_Interface2.default.CurrentScreen !== 'main' && _Interface2.default.CurrentScreen !== 'death' || Game.levelGenerator.isTutorial && Game.CurrentRow < 6) {
                return;
            }
            if (Game.currentWorld === 'original_cast') {
                timeToCarSound -= delta;
                timeToCarHorn -= delta;
                if (timeToCarSound <= 0.0) {
                    Game.playRandomSfx(['car1', 'car2', 'car3']);
                    timeToCarSound = 1 + 2 * Math.random();
                }
                if (timeToCarHorn <= 0.0) {
                    Game.playSfx('car-horn');
                    timeToCarHorn = 3 + 6 * Math.random();
                }
            } else if (Game.currentWorld === 'space') {
                timeToCarSound -= delta;
                if (timeToCarSound <= 0.0) {
                    Game.playRandomSfx(['asteroid1', 'asteroid2', 'asteroid3']);
                    timeToCarSound = 1 + 2 * Math.random();
                }
            }
            if (typeof Game.playerController.currentCharacter.random !== 'undefined' && !Game.playerController.Dead && Game.playing) {
                timeToRandomCharSound -= delta;
                if (timeToRandomCharSound <= 0.0) {
                    Game.playRandomSfx(Game.playerController.currentCharacter.random);
                    timeToRandomCharSound = 3 + 3 * Math.random();
                }
            }
        }

        function PopulatePools() {
            switch (_Storage2.default.getItem('currentWorld')) {
                case "original_cast":
                    Game.currentWorldPieces = _OriginalWorldPieces2.
                    default;
                    break;
                case "space":
                    Game.currentWorldPieces = _SpaceWorldPieces2.
                    default;
                    break;
            }
            Object.keys(Game.currentWorldPieces).forEach(function (type) {
                var piece = Game.currentWorldPieces[type];
                piece.Variations.forEach(function (variation) {
                    var amount = piece.poolAmount || 0;
                    for (var i = 0; i < amount; i++) {
                        Game.objectPooler.PoolItemVariation(type, variation);
                    }
                });
            });
            var particles = [];
            for (var i = 0; i < 30; i++) {
                var particle = _RapidsParticle2.
                default.getRapidsParticle(60, 60, 60, 0);
                particles.push(particle);
            }
            particles.forEach(function (particle) {
                particle.pool();
            });
            if (Game.currentWorld === 'space') {
                _StripSpace2.
                default.PopulatePool(30);
            } else {
                _StripOriginal2.
                default.PopulatePool(30);
                var trainLights = [];
                for (var i = 0; i < 10; i++) {
                    var light = _trains.TrainWarning.Get(-10, -10, -10);
                    trainLights.push(light);
                    light.pool();
                }
            }
        }

        function initPlayerController() {
            var c = Game.characters.chicken;
            var cname = _GameSave2.
            default.GetCurrCharacter();
            if (cname === 'space_chicken_carousel') {
                cname = 'space_chicken';
            }
            c = Game.characters[cname];
            if (c.mesh) {
                c.mesh.charName = cname;
            } else if (Game.currentWorld === 'original_cast') {
                c = Game.characters['chicken'];
            } else if (Game.currentWorld === 'space') {
                c = Game.characters['space_chicken'];
            }
            Game.playerController = new _PlayerController2.
            default((0, _ObjectPooler.importMesh)('characters[' + cname, c.mesh, false, true));
            Game.playerController.currentCharacter = c;
            Game.playerController.currentCharacterName = c.mesh.charName;
            AssetLoader.lastRequestedWorld = c.world;
            Game.SetWorld(c.world);
            if (cname === 'space_walker') {
                for (var i = 1; i < 9; ++i) {
                    Game.playerController.spaceWalkerAnimations.push((0, _ObjectPooler.importMesh)('Carousel.characters[undefined][' + (8 + i).toString(), Game.characters['space_walker_rainbow_anim_' + i.toString()].mesh));
                }
            }
            if (c.mesh.charName === 'space_chicken') {
                var glass = (0, _ObjectPooler.importMesh)('Carousel.characters[undefined][1', Game.characters['space_chicken_glass'].mesh);
                glass.scale.set(1.01, 1.01, 1.01);
                glass.material.transparent = true;
                glass.material.uniforms.transparency.value = 0.7;
                glass.material.uniforms.saturation.value = 1.0;
                glass.material.uniforms.GREY_COLOR.value = Game.playerController.vectorOne;
                Game.playerController.player.add(glass);
            }
            Game.scene.add(Game.playerController.player);
            var lightShadow = new THREE.DirectionalLight(0xffffff, 0.1);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.BasicShadowMap;
            lightShadow.position.set(-10, 10, 0);
            lightShadow.castShadow = true;
            lightShadow.shadow.mapSize.width = lightShadow.shadow.mapSize.height = 256;
            lightShadow.shadow.camera.near = 0.0;
            lightShadow.shadow.camera.far = 15.0;
            lightShadow.shadow.bias = -0.02;
            var shadowAreaLength = 10;
            lightShadow.shadow.camera.left = lightShadow.shadow.camera.bottom = -shadowAreaLength;
            lightShadow.shadow.camera.right = lightShadow.shadow.camera.top = shadowAreaLength;
            Game.scene.add(lightShadow);
            Game.sun = lightShadow;
            Game.scene.add(lightShadow.target);
            Game.scene.add(Game.ambientLight = new THREE.AmbientLight(new THREE.Color(0.5, 0.5, 0.7)));
            _Interface2.
            default.preCreateNotificationBars();
            Game.playerController.setUpLight(cname);
            if (!window.mouseDisabled) {
                document.addEventListener('touchstart', _InputControls.onDocumentTouchStart, false);
                document.addEventListener('touchend', _InputControls.onDocumentTouchEnd, false);
                document.addEventListener('touchmove', _InputControls.onDocumentTouchMove, false);
            }
            if (!window.isMobile) {
                document.addEventListener('mousedown', _InputControls.onDocumentTouchStart, false);
                document.addEventListener('mouseup', _InputControls.onDocumentTouchEnd, false);
            }
            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener('keyup', _InputControls.onDocumentKeyUp, false);
            document.addEventListener('keydown', _InputControls.onDocumentKeyDown, false);
            if (window.devToolsEnabled && _Utils2.default.getQueryVariable("autotest")) {
                setInterval(TestBotStep, 1000);
            }
            var visProp = _Utils2.
            default.getHiddenProp();
            if (visProp) {
                var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                document.addEventListener(evtname, onVisChange);
                window.onfocus = onGotFocus;
                window.onblur = onLostFocus;
            }
            onVisChange();
        }

        function init() {
            Game.worlds = {
                original_cast: {
                    banner: "WorldBanner_OriginalCast.png",
                    numCharacters: 0,
                    numCharactersUnlocked: 0
                },
                space: {
                    banner: "WorldBanner_Space.png",
                    numCharacters: 0,
                    numCharactersUnlocked: 0
                },
                piffle: {
                    banner: "WorldBanner_PiffleWorld.png",
                    numCharacters: 12,
                    numCharactersUnlocked: 0
                }
            };
            Game.messageDefinitions = {
                worldSwitchedTo: 'CrossyMultiverseMessage_worldSwitchedTo',
                switchWorldTo: 'CrossyMultiverseMessage_switchWorldTo',
                requestCurrentWorld: 'CrossyMultiverseMessage_requestCurrentWorld',
                receiveCurrentWorld: 'CrossyMultiverseMessage_receiveCurrentWorld'
            };
            Game.switchWorld = function (worldName) {
                if (worldName === 'original_cast') {
                    worldName = 'original';
                }
                sendMessage(Game.messageDefinitions.worldSwitchedTo, worldName);
            };
            var requestCurrentWorld = function requestCurrentWorld() {
                sendMessage(Game.messageDefinitions.requestCurrentWorld);
            };
            var initializeWorld = function initializeWorld(worldName) {
                console.log('World initialized in: ' + worldName);
            };
            var receivedWorldSwitch = function receivedWorldSwitch(worldName) {
                console.log('Received switch from platform, switched to: ' + worldName);
                if (worldName === Game.currentWorld || worldName === "original" && Game.currentWorld === "original_cast" || Game.switchingWorld) {
                    return;
                }
                Game.switchingWorld = true;
                _Interface2.
                default.stopInterstitialTweens();
                _Interface2.
                default.showInterstitial(function () {
                        if (_Carousel2.default.isLoaded) {
                            _Carousel2.
                            default.close();
                        }
                        _Interface2.
                        default.currentScreen = 'main';
                        Game.currentWorld = worldName;
                        if (Game.currentWorld === "original") {
                            Game.currentWorld = "original_cast";
                            _GameSave2.
                            default.SelectCharacter(0);
                        } else if (Game.currentWorld === "space") {
                            _GameSave2.
                            default.SelectCharacter(5);
                        }
                        AssetLoader.lastRequestedWorld = Game.currentWorld;
                        if (!AssetLoader.isWorldLoaded(Game.currentWorld)) {
                            AssetLoader.add.json('models/' + Game.currentWorld + '-world.json');
                            AssetLoader.worlds[Game.currentWorld].loading = true;
                            AssetLoader.load(function () {
                                if (!AssetLoader.areCharactersLoaded(Game.currentWorld)) {
                                    AssetLoader.loadCharacters(Game.currentWorld,
                                        function () {
                                            Game.resumeGameAfterLoadingWorld();
                                        });
                                } else {
                                    Game.resumeGameAfterLoadingWorld();
                                }
                            });
                        } else if (!AssetLoader.areCharactersLoaded(Game.currentWorld)) {
                            AssetLoader.loadCharacters(Game.currentWorld,
                                function () {
                                    Game.resumeGameAfterLoadingWorld();
                                });
                        } else {
                            Game.resumeGameAfterLoadingWorld();
                        }
                        if (Game.currentWorld === "original") {
                            Game.currentWorld = "original_cast";
                            _Storage2.
                            default.setItem('selectedChar', 0);
                        } else if (Game.currentWorld === 'space') {
                            _Storage2.
                            default.setItem('selectedChar', 5);
                        }
                        _Storage2.
                        default.setItem('currentWorld', Game.currentWorld);
                    },
                    true);
            };
            var sendMessage = function sendMessage(type) {
                var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                window.parent.postMessage({
                        type: type,
                        content: {
                            worldName: content
                        }
                    },
                    '*');
            };
            var receiveMessage = function receiveMessage(event) {
                switch (event.data.type) {
                    case Game.messageDefinitions.switchWorldTo:
                        receivedWorldSwitch(event.data.content.worldName);
                        break;
                }
            };
            window.addEventListener('message', receiveMessage, false);
            var domain = _Utils2.
            default.extractDomainFromURL(decodeURIComponent(_Utils2.default.getQueryVariable('url_referrer')));
            Game.startTime = Date.now();
            Game.currentWorld = _Storage2.
            default.getItem('currentWorld');
            Game.levelGenerator = new _LevelGenerator2.
            default();
            Game.hasPlayedBefore = _Storage2.
            default.getItem('hasPlayedBefore') === 'true';
            Game.container = window.container;
            Game.scene = new THREE.Scene();
            Game.barrierOn = false;
            renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0x56C7F9);
            renderer.setPixelRatio(Math.min(1, window.devicePixelRatio));
            renderer.setSize(bodyRect.width, bodyRect.height - 18);
            renderer.autoClear = false;
            renderer.shadowMap.enabled = true;
            Game.canvas = renderer.domElement;
            Game.canvas.style.transform = 'translateZ(0)';
            Game.container.appendChild(Game.canvas);
            Game.camera = new THREE.OrthographicCamera();
            if (window.devToolsEnabled || _Utils2.default.getQueryVariable('performance')) {
                stats = new _stats2.
                default();
                Game.container.appendChild(stats.dom);
            }
            if (_Storage2.default.getItem('crossyScore') == null) {
                _Storage2.
                default.setItem('crossyScore', 0);
            }
            _Interface2.
            default.CreateUI();
            _AppStoreInterstitial2.
            default.init();
            _Interface2.
            default.Init();
            InitChars();
            Game.configureCameras();
            onWindowResize();
            _KeyboardUIControls2.
            default.init();
            _KeyboardHint2.
            default.init();
            (0, _Messager.sendGameDataToPlayground)();
            var showLogoAnimation = !window.firstCrossyLogoAnimationShown;
            _Interface2.
            default.showLogo(!showLogoAnimation,
                function () {
                    PokiSDK.init().then(function () {
                        analytics.track('game_developer_sdk', 'status', 'initialized');
                        var distributorId = parseInt(_Utils2.default.getQueryVariable('ref') || 0, 10);
                        var rewardedDistributorsRef = [969893, 458768, 0];
                        if (rewardedDistributorsRef.indexOf(distributorId) === -1 || _Utils2.default.getQueryVariable('forceInterstitialAds')) {
                            _RewardedHelper2.
                            default.disable = true;
                            _InterstitialAdHelper2.
                            default.disable = false;
                            _InterstitialAdHelper2.
                            default.init();
                        } else {
                            _InterstitialAdHelper2.
                            default.disable = true;
                            _RewardedHelper2.
                            default.disable = false;
                            _RewardedHelper2.
                            default.init();
                        }
                        _InterstitialAdHelper2.
                        default.triggerAdRequest('preroll', start);
                    }).
                    catch(function () {
                        analytics.track('game_developer_sdk', 'status', 'failed');
                        window.adBlocked = true;
                        window.setTimeout(start, 1000);
                    });
                    PokiSDK.setDebug(window.pokiDebug);
                    Game.audioManager = new _AudioManager2.
                    default(Game.camera);
                    if (_Storage2.default.getItem('isSound') === 'false') {
                        _Interface2.
                        default.doMute();
                    }
                    initPlayerController();
                    PopulatePools();
                    Game.AddTerrain();
                    if (window.devToolsEnabled) {
                        var version = _Utils2.
                        default.getQueryVariable("rev");
                        var infoDisplay = document.createElement('canvas');
                        infoDisplay.style.cssText = "position:fixed;left:0;opacity:0.9;z-index:10000;";
                        infoDisplay.width = 80;
                        infoDisplay.height = 32;
                        infoDisplay.title = "Version is " + version;
                        var context = infoDisplay.getContext('2d');
                        context.font = 'bold 9px Helvetica,Arial,sans-serif';
                        context.textBaseline = 'top';
                        context.fillStyle = '#002';
                        context.fillRect(0, 48, 80, 80);
                        context.fillStyle = '#0ff';
                        context.fillText("Version is " + version, 3, 2);
                        var div = document.createElement('div');
                        div.style.cssText = 'position:fixed;top:48;left:0;cursor:pointer;opacity:0.9;z-index:10000';
                        div.appendChild(infoDisplay);
                        Game.container.appendChild(div);
                    }
                    renderer.gammaInput = true;
                    renderer.gammaOutput = true;
                });
        }

        function start() {
            Game.takesUserInput = true;
            _Interface2.
            default.showMain();
            _Interface2.
            default.hideInterstitial();
            _Interface2.
            default.moveInUI(200);
            gameReady = true;
            analytics.track('game_onboarding', 'game_initialised');
            var world = Game.currentWorld;
            if (world === 'original_cast') {
                world = 'original';
            }
        }

        function updateGameCamera() {
            if (!gameReady || _Interface2.default.CurrentScreen !== 'main' && _Interface2.default.CurrentScreen !== 'death') {
                return;
            }
            cameraShiftZ = 4.0 - (Game.eagle.time + .5);
            var camX = cameraBaseX + cameraShiftX + Game.playerController.player.position.x;
            var camZ = Game.playerController.player.position.z + cameraBaseZ + cameraShiftZ;
            if (Game.playerController.Dead) {
                Game.camera.zoom = THREE.Math.lerp(Game.camera.zoom, 1.5, Game.deltaTime * 2);
                timeSinceDeath += Game.deltaTime;
                if (timeSinceDeath < 1 && Game.playerController.lastKill !== 'log') {
                    Game.camera.position.lerp(Game.playerController.DeathCamPosition, timeSinceDeath);
                }
            } else if (!Game.playerController.Dead && Game.playing) {
                Game.camera.position.x = THREE.Math.lerp(Game.camera.position.x, camX, Game.deltaTime);
                Game.camera.position.z = THREE.Math.lerp(Game.camera.position.z, camZ, Game.deltaTime);
            } else {
                Game.camera.position.x = camX;
                Game.camera.position.z = camZ;
            }
            var targetPos = Game.playerController.targetPosition.clone();
            if (!Game.shadowInit) {
                targetPos = Game.playerController.targetPosition.clone();
            }
            var stepsToUpdateShadow = 4;
            var shadowZOffset = 1;
            if (Game.sun.target.position.z - targetPos.z + shadowZOffset > stepsToUpdateShadow || !Game.shadowInit) {
                Game.sun.target.position.set(Game.sun.target.position.x, 0, Math.round(targetPos.z) - shadowZOffset);
                Game.sun.position.set(Game.sun.target.position.x - 5.0, 10.0, Game.sun.target.position.z);
                Game.shadowInit = true;
            }
            Game.camera.updateProjectionMatrix();
        }

        function onLostFocus() {
            _Interface2.
            default.Pause();
        }

        function onGotFocus() {
            window.focus();
            _Interface2.
            default.unPause();
        }

        function onVisChange() {
            if (_Utils2.default.isHidden()) {
                onLostFocus();
            } else {
                onGotFocus();
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _WorldPieces = __webpack_require__(35);
        var _WorldPieces2 = _interopRequireDefault(_WorldPieces);
        var _CommonWorldPieces = __webpack_require__(34);
        var _CommonWorldPieces2 = _interopRequireDefault(_CommonWorldPieces);
        var _OriginalWorldPieces = __webpack_require__(48);
        var _OriginalWorldPieces2 = _interopRequireDefault(_OriginalWorldPieces);
        var _SpaceWorldPieces = __webpack_require__(49);
        var _SpaceWorldPieces2 = _interopRequireDefault(_SpaceWorldPieces);
        var _ABSplitter = __webpack_require__(19);
        var _AudioManager = __webpack_require__(30);
        var _AudioManager2 = _interopRequireDefault(_AudioManager);
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _CharacterTryouts = __webpack_require__(17);
        var _CharacterTryouts2 = _interopRequireDefault(_CharacterTryouts);
        var _InputControls = __webpack_require__(32);
        var _LevelGenerator = __webpack_require__(45);
        var _LevelGenerator2 = _interopRequireDefault(_LevelGenerator);
        var _fpsTracker = __webpack_require__(51);
        var _fpsTracker2 = _interopRequireDefault(_fpsTracker);
        var _FreeGiftScreen = __webpack_require__(31);
        var _FreeGiftScreen2 = _interopRequireDefault(_FreeGiftScreen);
        var _Eagle = __webpack_require__(44);
        var _Eagle2 = _interopRequireDefault(_Eagle);
        var _Ufo = __webpack_require__(47);
        var _Ufo2 = _interopRequireDefault(_Ufo);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _InterstitialAdHelper = __webpack_require__(33);
        var _InterstitialAdHelper2 = _interopRequireDefault(_InterstitialAdHelper);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var _Messager = __webpack_require__(23);
        var _ObjectPooler = __webpack_require__(5);
        var _ObjectPooler2 = _interopRequireDefault(_ObjectPooler);
        var _RapidsParticle = __webpack_require__(24);
        var _RapidsParticle2 = _interopRequireDefault(_RapidsParticle);
        var _RewardedHelper = __webpack_require__(14);
        var _RewardedHelper2 = _interopRequireDefault(_RewardedHelper);
        var _PlayerController = __webpack_require__(46);
        var _PlayerController2 = _interopRequireDefault(_PlayerController);
        var _stats = __webpack_require__(52);
        var _stats2 = _interopRequireDefault(_stats);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _StripOriginal = __webpack_require__(25);
        var _StripOriginal2 = _interopRequireDefault(_StripOriginal);
        var _StripSpace = __webpack_require__(26);
        var _StripSpace2 = _interopRequireDefault(_StripSpace);
        var _trains = __webpack_require__(36);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var _spaceBackgroundShader = __webpack_require__(50);
        var _spaceBackgroundShader2 = _interopRequireDefault(_spaceBackgroundShader);
        var _LoadingBar = __webpack_require__(15);
        var _LoadingBar2 = _interopRequireDefault(_LoadingBar);
        var Game = {};
        Game.audioManager = null;
        Game.camera = null;
        Game.canvas = null;
        Game.characters = null;
        Game.worlds = null;
        Game.clock = new THREE.Clock();
        Game.CurrentRow = 0;
        Game.deathsSinceLastCharacterUnlock = _Storage2.
        default.getItem('deathsSinceLastCharacterUnlock') || 0;
        Game.deltaTime = 0;
        Game.eagle = null;
        Game.frameCount = 0;
        Game.levelGenerator;
        Game.logs = [];
        Game.objectPooler = new _ObjectPooler2.
        default();
        Game.paused = false;
        Game.physicsObjects = [];
        Game.playerController = null;
        Game.playing = false;
        Game.renderUIOnQuad = !window.isMobile || window.isSilkBrowser;
        Game.rows = [];
        Game.scene = null;
        Game.score = 0;
        Game.takesUserInput = false;
        Game.UI = null;
        Game.sun = null;
        Game.currentWorld = 'space';
        Game.barrierOn = false;
        Game.space_background = null;
        Game.space_background_camera = null;
        Game.switchingWorld = false;
        var cameraBaseX = 2.388232;
        var cameraBaseY = 10.25858;
        var cameraBaseZ = 4;
        var cameraShiftX = 0;
        var cameraShiftY = 0;
        var cameraShiftZ = 0;
        var currentTerrain = -8;
        var gameReady = false;
        var renderer = null;
        var stats = null;
        var timeSinceDeath = 0;
        var InitChars = function InitChars() {
            Game.characters = {
                chicken: {
                    hop: ['hop2'],
                    random: ['chicken/buck1', 'chicken/buck5', 'chicken/buck10', 'chicken/buck6', 'chicken/buck11', 'chicken/buck7', 'chicken/buck12', 'chicken/buck8', 'chicken/buck2', 'chicken/buck9', 'chicken/buck3', 'chicken/buck4'],
                    death: ['chicken/chickendeath', 'chicken/chickendeath2'],
                    world: 'original_cast',
                    special: false
                },
                robot: {
                    hop: ['robot/robot-hop-1', 'robot/robot-hop-2', 'robot/robot-hop-3', 'robot/robot-hop-4', 'robot/robot-hop-short-2', 'robot/robot-hop-short'],
                    death: ['robot/robotexplode'],
                    world: 'original_cast',
                    special: false
                },
                cat: {
                    hop: ['hop2'],
                    random: ['cat/cat1', 'cat/cat2', 'cat/cat3', 'cat/cat4'],
                    world: 'original_cast',
                    special: false
                },
                duck: {
                    hop: ['hop2'],
                    random: ['mallard/quack1', 'mallard/quack3', 'mallard/quack5', 'mallard/quack2', 'mallard/quack4'],
                    world: 'original_cast',
                    special: false
                },
                snail: {
                    hop: ['hop2'],
                    world: 'original_cast',
                    special: false
                },
                space_chicken: {
                    hop: ['dirt1', 'dirt2', 'dirt3'],
                    random: ['space_chicken/spacebuck1', 'space_chicken/spacebuck10', 'space_chicken/spacebuck7', 'space_chicken/spacebuck12', 'space_chicken/spacebuck8', 'space_chicken/spacebuck9', 'space_chicken/spacebuck3', 'space_chicken/spacebuck4'],
                    death: ['space_chicken/spacechickendeath1', 'space_chicken/spacechickendeath2'],
                    world: 'space',
                    special: false
                },
                astronaut: {
                    hop: ['astronaut/spacebreath1', 'astronaut/spacebreath2'],
                    death: ['astronaut/spacescream1', 'astronaut/spacescream2'],
                    world: 'space',
                    special: false
                },
                astronomer: {
                    hop: ['dirt1', 'dirt2', 'dirt3'],
                    random: ['astronomer/Astronomer_Awesome_3', 'astronomer/Astronomer_Bingo_1', 'astronomer/Astronomer_Grea_Job_1', 'astronomer/Astronomer_Interesting_1', 'astronomer/Astronomer_On_My_Way_2', 'astronomer/Astronomer_Right_3', 'astronomer/Astronomer_Roger_2', 'astronomer/Astronomer_That_Was_Fun_2', 'astronomer/Astronomer_What_2', 'astronomer/Astronomer_What_Are_You_Looking_For_4', 'astronomer/Astronomer_Will_This_Work_3', 'astronomer/Astronomer_Yay_1'],
                    world: 'space',
                    special: false
                },
                rover: {
                    hop: ['rover/RoverHop1', 'rover/RoverHop2'],
                    death: ['rover/RobotCrush1'],
                    world: 'space',
                    special: false
                },
                space_dog: {
                    hop: ['dirt1', 'dirt2', 'dirt3'],
                    random: ['spacedog/dogspacebark1', 'spacedog/dogspacebark2', 'spacedog/dogspacebark3', 'spacedog/dogspacebark4'],
                    world: 'space',
                    special: false
                },
                space_chicken_carousel: {
                    hop: ['hop2'],
                    special: false
                },
                space_chicken_glass: {
                    hop: ['hop2'],
                    special: false
                }
            };
            Game.switchWorld(_Storage2.default.getItem('currentWorld'));
            Game.initCharacters();
            var audioFiles = ['rapidsdeath3.mp3', 'train-alarm.mp3', 'rapidsdeath9.mp3', 'river.mp3', 'eaglehit.mp3', 'car-horn.mp3', 'hawk-screech-02.mp3', 'car1.mp3', 'hop2.mp3', 'train-pass-no-horn.mp3', 'car2.mp3', 'train-pass-shorter.mp3', 'car3.mp3', 'lilysplash.mp3', 'trainsplat.mp3', 'carhit.mp3', 'logjump.mp3', 'watersplash.mp3', 'carsquish.mp3', 'logjump2.mp3', 'watersplashlow.mp3', 'carsquish3.mp3', 'logjump3.mp3', 'get-coin-79.mp3', 'logjump4.mp3', 'pop-1.mp3', 'pop-3.mp3', 'pop-5.mp3', 'pop-7.mp3', 'pop-9.mp3', 'pop-2.mp3', 'pop-4.mp3', 'pop-6.mp3', 'pop-8.mp3', 'robot/robot-hop-4.mp3', 'robot/robot-hop-short-2.mp3', 'robot/robot-hop-1.mp3', 'robot/robot-hop-short.mp3', 'robot/robot-hop-2.mp3', 'robot/robotexplode.mp3', 'robot/robot-hop-3.mp3', 'cat/cat1.mp3', 'cat/cat2.mp3', 'cat/cat3.mp3', 'cat/cat4.mp3', 'chicken/buck1.mp3', 'chicken/buck5.mp3', 'chicken/buck10.mp3', 'chicken/buck6.mp3', 'chicken/buck11.mp3', 'chicken/buck7.mp3', 'chicken/buck12.mp3', 'chicken/buck8.mp3', 'chicken/buck2.mp3', 'chicken/buck9.mp3', 'chicken/buck3.mp3', 'chicken/chickendeath.mp3', 'chicken/buck4.mp3', 'chicken/chickendeath2.mp3', 'mallard/quack1.mp3', 'mallard/quack3.mp3', 'mallard/quack5.mp3', 'mallard/quack2.mp3', 'mallard/quack4.mp3', 'bannerhit3-g.mp3', 'prize/counting-of-money-short.mp3', 'prize/insert-coin.mp3', 'prize/SlotMachineInsert.mp3', 'prize/Inserting-Coin-Into-Machine-v1.mp3', 'prize/Inserting-Coin-Into-Machine-v2.mp3', 'prize/Inserting-Coin-Into-Machine-v3.mp3', 'prize/Inserting-Coin-Into-Machine-v4.mp3', 'prize/coininsert3.mp3', 'prize/Prize-Wheel.mp3', 'prize/casinomachine.mp3', 'prize/UnlockPlain.mp3', 'prize/clickball.mp3', 'prize/prizewinner.mp3', 'prize/play-slots-machine.mp3', 'gift/openbox.mp3', 'gift/emptying-the-piggy-bank-2.mp3', 'gift/Earn-Points.mp3', 'gift/booktap.mp3', 'space_chicken/spacechickendeath1.mp3', 'space_chicken/spacechickendeath2.mp3', 'astronaut/spacebreath1.mp3', 'astronaut/spacebreath2.mp3', 'astronaut/spacescream1.mp3', 'astronaut/spacescream2.mp3', 'astronomer/Astronomer_Awesome_3.mp3', 'astronomer/Astronomer_Bingo_1.mp3', 'astronomer/Astronomer_Grea_Job_1.mp3', 'astronomer/Astronomer_Interesting_1.mp3', 'astronomer/Astronomer_On_My_Way_2.mp3', 'astronomer/Astronomer_Right_3.mp3', 'astronomer/Astronomer_Roger_2.mp3', 'astronomer/Astronomer_That_Was_Fun_2.mp3', 'astronomer/Astronomer_What_2.mp3', 'astronomer/Astronomer_What_Are_You_Looking_For_4.mp3', 'astronomer/Astronomer_Will_This_Work_3.mp3', 'astronomer/Astronomer_Yay_1.mp3', 'dirt1.mp3', 'dirt2.mp3', 'dirt3.mp3', 'rover/RobotCrush1.mp3', 'rover/RoverHop1.mp3', 'rover/RoverHop2.mp3', 'spacedog/dogspacebark1.mp3', 'spacedog/dogspacebark2.mp3', 'spacedog/dogspacebark3.mp3', 'spacedog/dogspacebark4.mp3', 'asteroid1.mp3', 'asteroid2.mp3', 'asteroid3.mp3', 'Shield_button_press.mp3', 'Shield_button_leave.mp3', 'asteroidfield.mp3', 'AsteroidHit.mp3', 'spaceambience1.mp3', 'LeaveScreen_On_Asteroid.mp3', 'UFO_Pickup.mp3', 'default_death1.mp3', 'default_death2.mp3'];
            audioFiles.forEach(function (element, idx) {
                AssetLoader.add.audio('audio/' + element);
            });
            AssetLoader.load(function () {
                Game.LoadCarousel();
            });
        };
        Game.LoadCarousel = function () {
            Game.onAllAssetsLoaded();
            _Carousel2.
            default.prepareCharacters();
            for (var itr = 0; itr < Object.keys(Game.characters).length; itr++) {
                if (!Game.worlds[Game.characters[Object.keys(Game.characters)[itr]].world]) {
                    continue;
                }
                Game.worlds[Game.characters[Object.keys(Game.characters)[itr]].world].numCharacters++;
                if (_GameSave2.default.GetCharacter(itr)) {
                    Game.worlds[Game.characters[Object.keys(Game.characters)[itr]].world].numCharactersUnlocked++;
                }
            }
            _Carousel2.
            default.init();
            _GumballMachineScreen2.
            default.init(Game.UI, Game.canvas, Game.scene, Game.camera, [_Interface2.
                default.coinIcon, _Interface2.
                default.coinText
            ]);
            _FreeGiftScreen2.
            default.init(Game.UI, Game.canvas, Game.scene, [_Interface2.
                default.coinIcon, _Interface2.
                default.coinText
            ]);
        };
        Game.refreshUnlockedCharactersNumber = function () {
            for (var itr = 0; itr < Object.keys(Game.worlds).length; ++itr) {
                Game.worlds[Object.keys(Game.worlds)[itr]].numCharacters = 0;
                Game.worlds[Object.keys(Game.worlds)[itr]].numCharactersUnlocked = 0;
            }
            var i = 0;
            for (var itr = 0; itr < Object.keys(Game.characters).length; itr++) {
                if (!Game.worlds[Game.characters[Object.keys(Game.characters)[itr]].world]) {
                    continue;
                }
                Game.worlds[Game.characters[Object.keys(Game.characters)[itr]].world].numCharacters++;
                if (_GameSave2.default.GetCharacter(i)) {
                    Game.worlds[Game.characters[Object.keys(Game.characters)[itr]].world].numCharactersUnlocked++;
                }
                i++;
            }
        };
        Game.initCharacters = function () {
            var space_models = AssetLoader.loadedAssets['models/space-char.json'];
            if (space_models !== undefined) {
                Game.characters.space_chicken.mesh = space_models.models.spaceexploration_astronaughtchicken_optimised;
                Game.characters.space_chicken_carousel.mesh = space_models.models.spaceexploration_astronaughtchicken_carousel_optimised;
                Game.characters.astronaut.mesh = space_models.models.spaceexploration_astronaut_optimised;
                Game.characters.astronomer.mesh = space_models.models.spaceexploration_scientist_1_optimised;
                Game.characters.rover.mesh = space_models.models.spaceexploration_spacerover_optimised;
                Game.characters.space_dog.mesh = space_models.models.spaceexploration_spacedog_optimised;
                Game.characters.space_chicken_glass.mesh = space_models.models.spaceexploration_astronaughtchicken_glass_optimised;
            }
            var original_cast_models = AssetLoader.loadedAssets['models/original_cast-char.json'];
            if (original_cast_models !== undefined) {
                Game.characters.chicken.mesh = original_cast_models.models.chicken_optimised;
                Game.characters.robot.mesh = original_cast_models.models.robot_optimised;
                Game.characters.cat.mesh = original_cast_models.models.cat_optimised;
                Game.characters.duck.mesh = original_cast_models.models.duck_optimised;
                Game.characters.snail.mesh = original_cast_models.models.snail_optimised;
            }
        };
        Game.initOriginalCastCharacters = function () {};
        Game.onAllAssetsLoaded = function () {
            Game.worlds = {
                original_cast: {
                    banner: "WorldBanner_OriginalCast.png",
                    numCharacters: 0,
                    numCharactersUnlocked: 0
                },
                space: {
                    banner: "WorldBanner_Space.png",
                    numCharacters: 0,
                    numCharactersUnlocked: 0
                },
                piffle: {
                    banner: "WorldBanner_PiffleWorld.png",
                    numCharacters: 12,
                    numCharactersUnlocked: 0
                }
            };
            Game.initCharacters();
        };
        Game.removefromPhysics = function (obj) {
            if (Game.physicsObjects.indexOf(obj) != -1) {
                Game.physicsObjects.splice(Game.physicsObjects.indexOf(obj), 1);
                return true;
            } else {
                console.log("ERROR: attempted to remove physics object that wasnt there");
                return false;
            }
        };
        Game.playSfx = function (src, override, dist) {
            override = override || false;
            if (Game.audioManager === null) {
                Game.audioManager = new _AudioManager2.
                default(Game.camera);
            }
            Game.audioManager.PlaySound('audio/' + src + '.mp3', null, false, override, dist);
        };
        Game.playLoop = function (src, override) {
            if (Game.audioManager === null) {
                Game.audioManager = new _AudioManager2.
                default(Game.camera);
            }
            Game.audioManager.PlaySound('audio/' + src + '.mp3', null, true, override);
        };
        Game.stopSfx = function (src) {
            if (Game.audioManager === null) {
                Game.audioManager = new _AudioManager2.
                default(Game.camera);
            }
            Game.audioManager.StopSound('audio/' + src + '.mp3');
        };
        Game.playRandomSfx = function (srcs) {
            var s = srcs[Math.floor(Math.random() * srcs.length)];
            Game.playSfx(s);
        };
        Game.playRandomSfxLoop = function (srcs) {
            var s = srcs[Math.floor(Math.random() * srcs.length)];
            Game.playLoop(s, false);
        };
        Game.playPositionalSfx = function (src, onMesh, dist) {
            Game.audioManager.PlaySound('audio/' + src + '.mp3', onMesh, null, null, dist);
        };
        Game.resumeGameAfterLoadingWorld = function () {
            Game.initCharacters();
            _Carousel2.
            default.prepareCharacters();
            _Carousel2.
            default.prepareModels();
            _GumballMachineScreen2.
            default.prepareCharacterModels();
            console.log("CHANGE WORLD");
            Game.SetWorld(Game.currentWorld);
            Game.playerController.setCharacter((0, _ObjectPooler.importMesh)('Carousel.characters[' + Game.currentWorld + '][0', _Carousel2.default.characters[Game.currentWorld][0], false, true), _Carousel2.default.characters[Game.currentWorld][0].charName);
            Game.playerController.Reset();
            _Interface2.
            default.freeNotificationBars();
            _Interface2.
            default.CloseShowMore();
            _Interface2.
            default.HidePlay();
            _GumballMachineScreen2.
            default.hide();
            _FreeGiftScreen2.
            default.openGiftButton.visible = false;
            if (_FreeGiftScreen2.default.activeGift) {
                _FreeGiftScreen2.
                default.activeGift.visible = false;
            }
            _FreeGiftScreen2.
            default.visible = false;
            _Interface2.
            default.hideInterstitial();
            Game.configureCameras();
            _Interface2.
            default.currentScreen = "main";
            updateGameCamera();
            Game.playing = true;
            _Interface2.
            default.hideInterstitial();
            _Interface2.
            default.forceUnPause();
            _FreeGiftScreen2.
            default.hide(false);
            _FreeGiftScreen2.
            default.ui.hideAll();
            Game.takesUserInput = true;
            _Interface2.
            default.showMain();
            Game.switchingWorld = false;
            Game.playing = false;
        };
        Game.configureCameras = function () {
            var zoomFactor;
            var gameAspect = Game.canvas.width / Game.canvas.height;
            var edge = 3.6;
            var thinZoom = 2 / 3;
            var wideZoom = 1;
            var thinCamX = 1;
            var wideCamX = 0.3;
            var thinCamY = 2.2;
            var wideCamY = .5;
            if (gameAspect < 0.75) {
                zoomFactor = thinZoom;
                cameraShiftX = thinCamX;
                cameraShiftY = thinCamY;
            } else if (gameAspect > 1.25) {
                zoomFactor = wideZoom;
                cameraShiftX = wideCamX;
                cameraShiftY = wideCamY;
            } else {
                var delta = (gameAspect - 0.75) * 2;
                zoomFactor = thinZoom + delta * (wideZoom - thinZoom);
                cameraShiftX = thinCamX + delta * (wideCamX - thinCamX);
                cameraShiftY = thinCamY + delta * (wideCamY - thinCamY);
            }
            var camX = cameraBaseX + cameraShiftX;
            var camY = cameraBaseY + cameraShiftY;
            var camZ = cameraBaseZ + cameraShiftZ;
            if (_Interface2.default.CurrentScreen === 'main' || _Interface2.default.CurrentScreen === 'death') {
                if (Game.playerController) {
                    camX += Game.playerController.player.position.x;
                    camZ += Game.playerController.player.position.z;
                }
                if (!Game.playerController || !Game.playerController.Dead) {
                    Game.camera.position.set(camX, camY, camZ);
                    Game.camera.zoom = zoomFactor;
                }
                Game.camera.rotation.set(-Math.PI / 4, Math.PI / 9, 0, 'YXZ');
            }
            Game.camera.aspect = Game.canvas.width / Game.canvas.height;
            Game.camera.left = -edge * Game.camera.aspect;
            Game.camera.right = edge * Game.camera.aspect;
            Game.camera.top = edge;
            Game.camera.bottom = -edge;
            Game.camera.near = -10;
            Game.camera.far = 25;
            Game.camera.updateProjectionMatrix();
        };
        Game.shadowInit = false;
        Game.printHierarchy = function () {
            (function printGraph(obj) {
                console.group(' <' + obj.type + '> ' + obj.name);
                obj.children.forEach(printGraph);
                console.groupEnd();
            }(Game.scene));
        };
        Game.wipeAndRestart = function (callbackDuringInterstitial) {
            Game.takesUserInput = false;
            _Interface2.
            default.showInterstitial(function () {
                _KeyboardHint2.
                default.reset();
                _Interface2.
                default.hideRemainingCoins();
                _Interface2.
                default.freeNotificationBars();
                if (typeof callbackDuringInterstitial === 'function') {
                    callbackDuringInterstitial();
                }
                _RewardedHelper2.
                default.newRoundStarted();
                _CharacterTryouts2.
                default.setCharacterIfTryingOut();
                Game.playerController.Reset();
                Game.playerController.setUpLight(Game.playerController.currentCharacter.mesh.charName);
                Game.CurrentRow = 0;
                Game.score = 0;
                currentTerrain = -8;
                while (Game.rows.length > 0) {
                    var rowToPool = Game.rows.pop();
                    rowToPool.PoolAllObjects();
                    rowToPool = null;
                }
                while (Game.physicsObjects.length > 0) {
                    Game.physicsObjects.pop().pool();
                }
                Game.playing = false;
                timeSinceDeath = 0;
                Game.eagle.reset();
                Game.levelGenerator.Restart();
                Game.AddTerrain();
                if (_GameSave2.default.specialCharacterToUnlockId) {
                    _Interface2.
                    default.hideLogo();
                    _GameSave2.
                    default.showUnlockedSpacialCharacterCharacter(_GameSave2.default.specialCharacterToUnlockId, _GameSave2.default.specialCharacterToUnlockName);
                } else {
                    _Interface2.
                    default.showMain();
                }
                Game.configureCameras();
                _Interface2.
                default.moveInUI();
                Game.takesUserInput = true;
                _Interface2.
                default.topScore.visible = false;
                lightInit = false;
                Game.shadowInit = false;
                if (_GameSave2.default.specialCharacterUnlocked) {
                    _GumballMachineScreen2.
                    default.playWithNewCharacter();
                    _GameSave2.
                    default.specialCharacterUnlocked = false;
                }
            });
        };
        Game.AddTerrain = function () {
            var rowsToGenerate = 18;
            while (Game.CurrentRow + rowsToGenerate + 1 > currentTerrain) {
                var newRow = Game.levelGenerator.GetStrip(currentTerrain);
                newRow.lane.position.set(0, 0, -currentTerrain);
                Game.rows.push(newRow);
                newRow.MatrixUpdate();
                currentTerrain++;
            }
            while (Game.rows[0].lane.position.z * -1 < Game.CurrentRow - 10) {
                var rowToPool = Game.rows.shift();
                rowToPool.PoolAllObjects();
                rowToPool = null;
            }
        };
        Game.SetWorld = function (world) {
            if (!Game.playerController) {
                initPlayerController();
            }
            if (world !== AssetLoader.lastRequestedWorld) {
                return;
            }
            Game.switchWorld(world);
            if (!AssetLoader.isWorldLoaded(world)) {
                if (AssetLoader.assetsLoading.length > 0) {
                    setTimeout(function () {
                            Game.SetWorld(world);
                        },
                        100);
                    return;
                } else {
                    if (!AssetLoader.assetsLoading.includes("models/" + world + "-world.json")) {
                        _Carousel2.
                        default.loadingBar = new _LoadingBar2.
                        default();
                        _Carousel2.
                        default.loadingBar.chickenSrc = AssetLoader.getAssetById('sprites/chicken.png').src;
                        AssetLoader.progressListeners = [];
                        AssetLoader.progressListeners.push(_Carousel2.default.loadingBar.setProgress.bind(_Carousel2.default.loadingBar));
                        _Carousel2.
                        default.loadingBar.show();
                        AssetLoader.add.json("models/" + world + "-world.json");
                        AssetLoader.worlds[Game.currentWorld].loading = true;
                        AssetLoader.load(function () {
                            console.log("Loading!");
                        });
                        _Carousel2.
                        default.loadingBar.enteredFinalLoadingPhase();
                    }
                    setTimeout(function () {
                            Game.SetWorld(world);
                        },
                        100);
                    return;
                }
            }
            AssetLoader.lastRequestedWorld = null;
            if (_Carousel2.default.isLoaded) {
                _Carousel2.
                default.close();
            }
            this.currentWorld = world;
            switch (world) {
                case "original_cast":
                    Game.currentWorldPieces = _OriginalWorldPieces2.
                    default;
                    break;
                case "space":
                    Game.currentWorldPieces = _SpaceWorldPieces2.
                    default;
                    break;
            }
            Game.stopSfx('spaceambience1');
            Game.stopSfx('spacewalker/spacewalker_loop');
            if (this.currentWorld === 'space') {
                if (Game.playerController.currentCharacterName === "space_walker") {
                    Game.playLoop('spacewalker/spacewalker_loop');
                } else {
                    Game.playLoop('spaceambience1');
                }
                Game.eagle = new _Ufo2.
                default();
            } else {
                Game.eagle = new _Eagle2.
                default();
            }
            if (Game.space_background == null) {
                var backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 0), new THREE.ShaderMaterial({
                    uniforms: (0, _spaceBackgroundShader2.default)().uniforms,
                    vertexShader: (0, _spaceBackgroundShader2.default)().vertexShader,
                    fragmentShader: (0, _spaceBackgroundShader2.default)().fragmentShader
                }));
                backgroundMesh.material.depthTest = false;
                backgroundMesh.material.depthWrite = false;
                Game.space_background = new THREE.Scene();
                Game.space_background_camera = new THREE.Camera();
                Game.space_background.add(Game.space_background_camera);
                Game.space_background.add(backgroundMesh);
            }
            _Storage2.
            default.setItem('currentWorld', world);
            _CharacterTryouts2.
            default.setCharacterIfTryingOut();
            Game.playerController.Reset();
            Game.CurrentRow = 0;
            Game.score = 0;
            currentTerrain = -8;
            while (Game.rows.length > 0) {
                var rowToPool = Game.rows.pop();
                rowToPool.PoolAllObjects();
                rowToPool = null;
            }
            while (Game.physicsObjects.length > 0) {
                Game.physicsObjects.pop().pool();
            }
            Game.playing = false;
            timeSinceDeath = 0;
            Game.eagle.reset();
            Game.levelGenerator.Restart();
            Game.AddTerrain();
            gameReady = true;
        };
        var timeToCarSound = 0.0;
        var timeToCarHorn = 6.0;
        var timeToRandomCharSound = 6.0;
        Game.timeSinceLastBlink = 0;
        window.start = function () {
            init();
            animate();
            update();
        };
        exports.
        default = Game;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Storage = {
            noStorage: null,
            data: {},
            detectLocalStorage: function detectLocalStorage() {
                this.noStorage = false;
                try {
                    localStorage.setItem('test', 0);
                } catch (e) {
                    this.noStorage = true;
                }
            },
            getItem: function getItem(key) {
                if (this.noStorage === null) {
                    this.detectLocalStorage();
                }
                if (this.noStorage) {
                    if (typeof this.data[key] === 'undefined') {
                        return null;
                    }
                    return this.data[key];
                }
                if (typeof this.data[key] !== 'undefined') {
                    return this.data[key];
                }
                var value = localStorage.getItem(key);
                this.data[key] = value;
                return value;
            },
            setItem: function setItem(key, value) {
                if (this.noStorage === null) {
                    this.detectLocalStorage();
                }
                this.data[key] = value;
                if (this.noStorage) {
                    return;
                }
                localStorage.setItem(key, value);
            }
        };
        exports.
        default = Storage;
    },
    function (module, exports, __webpack_require__) {
        function slideIn(bar, skipDelay) {
            var idx = Interface.activeNotificationBars.length - 1;
            var dimensions = getNotificationBarContentDimensions();
            var baseDelay = 500 * idx;
            var contentDelay = 150;
            if (skipDelay) {
                baseDelay = 0;
            }
            if (Interface.tutorialLock) {
                baseDelay += 250;
            }
            bar.contentAnimator.x = -bar.background.width;
            var buttonStartDimensions = [bar.button.width, bar.button.height];
            var buttonTargetDimensions = buttonStartDimensions.map(function (value) {
                return value * 1.4;
            });
            var scaleUpAnimationTime = 500;
            var targetHeight = bar.background.height;
            bar.background.height = 0;
            bar.background.visible = true;
            new TWEEN.Tween(bar.background).to({
                    height: targetHeight
                },
                300).delay(baseDelay).easing(TWEEN.Easing.Exponential.InOut).start();
            new TWEEN.Tween(bar.contentAnimator).to({
                    x: 0
                },
                500).delay(contentDelay + baseDelay).easing(TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
                new TWEEN.Tween(bar.button).to({
                        width: buttonTargetDimensions[0],
                        height: buttonTargetDimensions[1]
                    },
                    100).onComplete(function () {
                    _Game2.
                    default.playSfx('bannerhit3-g');
                    new TWEEN.Tween(bar.button).to({
                            width: buttonStartDimensions[0],
                            height: buttonStartDimensions[1]
                        },
                        400).easing(TWEEN.Easing.Quartic.Out).start();
                }).start();
                if (bar.button2._visible) {
                    new TWEEN.Tween(bar.button2).to({
                            width: buttonTargetDimensions[0],
                            height: buttonTargetDimensions[1]
                        },
                        100).delay(250).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                        _Game2.
                        default.playSfx('bannerhit3-g');
                        new TWEEN.Tween(bar.button2).to({
                                width: buttonStartDimensions[0],
                                height: buttonStartDimensions[1]
                            },
                            400).easing(TWEEN.Easing.Quartic.Out).start();
                    }).start();
                }
                if (bar.button3._visible) {
                    new TWEEN.Tween(bar.button3).to({
                            width: buttonTargetDimensions[0],
                            height: buttonTargetDimensions[1]
                        },
                        100).delay(500).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                        _Game2.
                        default.playSfx('bannerhit3-g');
                        new TWEEN.Tween(bar.button3).to({
                                width: buttonStartDimensions[0],
                                height: buttonStartDimensions[1]
                            },
                            400).easing(TWEEN.Easing.Quartic.Out).start();
                    }).start();
                }
            }).start();
        }

        function doUnmute() {
            Interface.isSound = true;
            _Storage2.
            default.setItem('isSound', 'true');
            _Game2.
            default.audioManager.SetVolume(.8);
            setMuteButton();
        }

        function setMuteButton() {
            if (Interface.isSound) {
                mute.setAssetPath('mute-off.png');
                mute.blinkSprite = 'mute-off-blink.png';
            } else {
                mute.setAssetPath('mute.png');
                mute.blinkSprite = 'mute-blink.png';
            }
            mute.defaultSprite = mute.assetPath;
        }

        function playHint() {
            if (isMobile) {
                finger.visible = true;
            } else {
                arrowHint.width = btnWidth;
                arrowHint.visible = true;
            }
            var position = {
                x: -75,
                y: -200
            };
            var target = {
                x: 75,
                y: -200
            };
            fingerTween = new TWEEN.Tween(position).to(target, 600);
            fingerTween.easing(TWEEN.Easing.Sinusoidal.In);
            fingerTween.onUpdate(function () {
                finger.x = position.x;
                finger.y = position.y;
            });
            fingerTween.onComplete(function () {
                finger.visible = false;
            });
            fingerTween.start();
            finger.x = position.x;
            finger.y = position.y;
            var right = {
                x: -75
            };
            var rightEnd = {
                x: 75
            };
            var lineRightTween = new TWEEN.Tween(right).to(rightEnd, 600).onStart(function () {
                if (isMobile) {
                    hintLine.visible = true;
                }
            }).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(function () {
                hintLine.offset.left = right.x;
            });
            lineRightTween.start();
            hintLine.offset.left = right.x;
            var left = {
                x: 75
            };
            var leftEnd = {
                x: -75
            };
            var lineLeftTween = new TWEEN.Tween(left).to(leftEnd, 475).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(function () {
                hintLine.offset.right = left.x;
            }).delay(300);
            var btnWidth = 28.0 * hintScaleFactor;
            var heightToWidthRatio = 18.0 / 26.0;
            var size = {
                width: btnWidth
            };
            var arrowLeftTweenUp = new TWEEN.Tween(size).to({
                    width: btnWidth * 1.5
                },
                200).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(function () {
                arrowHint.width = size.width;
                arrowHint.height = size.width * heightToWidthRatio;
            });
            var arrowLeftTweenDown = new TWEEN.Tween(size).to({
                    width: btnWidth
                },
                200).delay(200).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(function () {
                arrowHint.width = size.width;
                arrowHint.height = size.width * heightToWidthRatio;
            });
            arrowLeftTweenUp.chain(arrowLeftTweenDown);
            arrowLeftTweenUp.start();
            arrowHint.setAssetPath("keyboard-full.png");
            window.setTimeout(function () {
                    if (isMainMenu()) {
                        arrowHint.setAssetPath("keyboard-up.png");
                    } else {
                        arrowHint.setAssetPath("keyboard-left.png");
                    }
                },
                200);
            window.setTimeout(function () {
                    arrowHint.setAssetPath("keyboard-full.png");
                    size.width = btnWidth;
                    var arrowRightTweenUp = new TWEEN.Tween(size).to({
                            width: btnWidth * 1.5
                        },
                        200).delay(200).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(function () {
                        arrowHint.width = size.width;
                        arrowHint.height = size.width * heightToWidthRatio;
                    });
                    var arrowRightTweenDown = new TWEEN.Tween(size).to({
                            width: btnWidth
                        },
                        200).delay(200).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(function () {
                        arrowHint.width = size.width;
                        arrowHint.height = size.width * heightToWidthRatio;
                    });
                    arrowRightTweenUp.chain(arrowRightTweenDown);
                    arrowRightTweenUp.start();
                    window.setTimeout(function () {
                            if (isMainMenu()) {
                                arrowHint.setAssetPath("keyboard-up.png");
                            } else {
                                arrowHint.setAssetPath("keyboard-right.png");
                            }
                            window.setTimeout(function () {
                                    arrowHint.setAssetPath("keyboard-full.png");
                                },
                                300);
                        },
                        200 + 200);
                },
                500);
            lineLeftTween.onComplete(function () {
                hintLine.visible = false;
                lineLeftTween = null;
                lineRightTween = null;
                window.setTimeout(function () {
                        fingerTween = null;
                        if (playingHint) {
                            playHint();
                        } else {
                            size.width = btnWidth;
                            var arrowGoneTween = new TWEEN.Tween(size).to({
                                    width: 0
                                },
                                100).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(function () {
                                arrowHint.width = size.width;
                                arrowHint.height = size.width * heightToWidthRatio;
                            }).onComplete(function () {
                                arrowHint.visible = false;
                            });
                            arrowGoneTween.start();
                        }
                    },
                    700);
            });
            lineLeftTween.start();
            hintLine.offset.right = left.x;
        }

        function Interface() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _CharacterTryouts = __webpack_require__(17);
        var _CharacterTryouts2 = _interopRequireDefault(_CharacterTryouts);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _InputControls = __webpack_require__(32);
        var _InputControls2 = _interopRequireDefault(_InputControls);
        var _InterstitialAdHelper = __webpack_require__(33);
        var _InterstitialAdHelper2 = _interopRequireDefault(_InterstitialAdHelper);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var _RewardedHelper = __webpack_require__(14);
        var _RewardedHelper2 = _interopRequireDefault(_RewardedHelper);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        Interface.buttonParent = null;
        Interface.characterSelect = null;
        Interface.coinIcon = null;
        Interface.coinText = null;
        Interface.CurrentScreen = "main";
        Interface.isSound = true;
        Interface.moveToPlay = null;
        Interface.pauseBtn = null;
        Interface.playButton = null;
        Interface.showMore = null;
        Interface.showUpsell = null;
        Interface.topScore = null;
        Interface.hintContainer = null;
        Interface.moveToPlayHitzone1 = null;
        Interface.moveToPlayHitzone2 = null;
        var arrowHint = null;
        var canGo = true;
        var fadeToBlueTween = null;
        var finger = null;
        var hintLine = null;
        var interstitialBG = null;
        var interstitialPanel = null;
        var interstitialTween = {
            opacity: 1
        };
        var isShowingMore = false;
        var logoAngle = 104;
        var logoCot = 1 / Math.tan(logoAngle * Math.PI / 180);
        var logoHiddenTransform = {
            x: 0,
            y: 0
        };
        var logoHideTransition = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
        var logoShownStyleTransform = 'translate3d(0, 0, 0)';
        var logoShowTransition = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
        var logoTransitionDuration = '750ms';
        var mute = null;
        var pauseCounter = null;
        var pauseIndicator = null;
        var pauseOverlay = null;
        var scoreText = null;
        var UIloaded = false;
        Interface.playButtonCallback = function () {
            var _this = this;
            var autoWalk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            _KeyboardHint2.
            default.cancelReappearTimeout();
            this.ButtonSound();
            _KeyboardHint2.
            default.hide();
            _AppStoreInterstitial2.
            default.hide();
            switch (this.CurrentScreen) {
                case "main":
                    Interface.pauseBtn.visible = true;
                    Interface.characterSelect.visible = false;
                    Interface.showMore.visible = false;
                    mute.visible = false;
                    Interface.showUpsell.visible = false;
                    Interface.topScore.visible = false;
                    scoreText.visible = true;
                    Interface.coinText.visible = true;
                    Interface.coinIcon.visible = true;
                    Interface.moveToPlay.visible = false;
                    Interface.moveToPlayHitzone1.visible = false;
                    Interface.moveToPlayHitzone2.visible = false;
                    this.HidePlay();
                    this.hideLogo();
                    this.CloseShowMore();
                    _Game2.
                    default.playing = true;
                    _Game2.
                    default.takesUserInput = true;
                    analytics.track('game_play', 'round_started', _Game2.default.playerController.roundIdx, _Game2.default.playerController.roundIdx);
                    PokiSDK.gameplayStart();
                    PokiSDK.roundStart(_Game2.default.currentWorld === 'original_cast' ? 'original' : _Game2.default.currentWorld);
                    if (!window.gameStartTracked) {
                        window.gameStartTracked = true;
                        analytics.track('game_onboarding', 'game_start');
                        window.setTimeout(function () {
                                analytics.track('heartbeat', '30sec');
                            },
                            1000 * 30);
                        window.setTimeout(function () {
                                analytics.track('heartbeat', '2min');
                            },
                            1000 * 60 * 2);
                        window.setTimeout(function () {
                                analytics.track('heartbeat', '6min');
                            },
                            1000 * 60 * 6);
                        window.setTimeout(function () {
                                analytics.track('heartbeat', '10min');
                            },
                            1000 * 60 * 10);
                    }
                    if (_Storage2.default.getItem('first_round_finished') && !_Storage2.default.getItem('second_round_started')) {
                        analytics.track('game_onboarding', 'second_round_started');
                        _Storage2.
                        default.setItem('second_round_started', true);
                    }
                    if (autoWalk) {
                        _InputControls2.
                        default.forward(true);
                    }
                    _KeyboardHint2.
                    default.
                    switch('full-movement-hint');
                    _KeyboardHint2.
                    default.triggerReappearTimeout(4000);
                    break;
                case "selectingCharacter":
                    _Carousel2.
                    default.SelectCharacter();
                    break;
                case "death":
                    var restart = function restart() {
                        _this.tutorialWasLockedLastRound = _this.tutorialLock;
                        _Game2.
                        default.wipeAndRestart();
                    };
                    if (!window.adBlocked && !_InterstitialAdHelper2.default.disable && _Game2.default.playerController.roundIdx >= 3) {
                        this.HidePlay();
                        _InterstitialAdHelper2.
                        default.triggerAdRequest('midroll', restart);
                    } else {
                        restart();
                    }
                    break;
            }
            this.tutorialLock = false;
        };
        Interface.ButtonSound = function () {
            _Game2.
            default.playRandomSfx(['Pop 1', 'Pop 3', 'Pop 5', 'Pop 7', 'Pop 9', 'Pop 2', 'Pop 4', 'Pop 6', 'Pop 8']);
        };
        Interface.ChooseCharacter = function () {
            _AppStoreInterstitial2.
            default.hide();
            Interface.CloseShowMore();
            Interface.HidePlay();
            _Carousel2.
            default.Show();
            Interface.characterSelect.visible = false;
            Interface.moveToPlay.visible = false;
            Interface.moveToPlayHitzone1.visible = false;
            Interface.moveToPlayHitzone2.visible = false;
            Interface.showMore.visible = false;
            Interface.topScore.visible = false;
        };
        var showInterstitialTween;
        var hideInterstitialTween;
        var showLogoTween;
        var hideLogoTween;
        var fingerTween = null;
        var playingHint = false;
        Interface.HideHint = function (force) {
            _KeyboardHint2.
            default.
            switch('full-movement-hint');
            if (!window.isMobile) {
                return;
            }
            playingHint = false;
            if (force) {
                finger.visible = false;
                hintLine.visible = false;
                arrowHint.visible = false;
            }
        };
        var isMainMenu = function isMainMenu() {
            return Interface.CurrentScreen === "main" && !_Game2.
            default.playing;
        };
        var hintScaleFactor = 2;
        Interface.ShowHint = function () {
            if (!window.isMobile) {
                _KeyboardHint2.
                default.show('movement-hint');
                return;
            }
            playingHint = true;
            if (fingerTween != null) {
                return;
            }
            playHint();
        };
        Interface.doMute = function () {
            Interface.isSound = false;
            _Storage2.
            default.setItem('isSound', 'false');
            _Game2.
            default.audioManager.SetVolume(0);
            setMuteButton();
        };
        Interface.ToggleMute = function () {
            this.ButtonSound();
            if (Interface.isSound) {
                this.doMute();
            } else {
                doUnmute();
            }
        };
        var btnTween = null;
        Interface.ToggleShowMore = function () {
            Interface.ButtonSound();
            if (isShowingMore) {
                Interface.CloseShowMore();
            } else {
                Interface.OpenShowMore();
            }
        };
        Interface.OpenShowMore = function () {
            if (isShowingMore || !isMainMenu()) {
                return;
            }
            mute.visible = true;
            Interface.showUpsell.visible = true;
            isShowingMore = true;
            Interface.showMore.setAssetPath("arrow-up_toggle.png");
            Interface.showMore.defaultSprite = Interface.showMore.assetPath;
            Interface.showMore.blinkSprite = 'arrow-up_toggle-blink.png';
            _KeyboardHint2.
            default.
            switch('main-show-more');
        };
        Interface.CloseShowMore = function () {
            if (!isShowingMore) {
                return;
            }
            mute.visible = false;
            Interface.showUpsell.visible = false;
            isShowingMore = false;
            Interface.showMore.setAssetPath("arrow-up.png");
            Interface.showMore.defaultSprite = Interface.showMore.assetPath;
            Interface.showMore.blinkSprite = 'arrow-up-blink.png';
            _KeyboardHint2.
            default.
            switch('main');
        };
        Interface.showMain = function () {
            Interface.CurrentScreen = "main";
            _GumballMachineScreen2.
            default.hideUnlockedSpecialCharacter();
            _AppStoreInterstitial2.
            default.lastUpsellScreen = 'main_menu';
            Interface.buttonParent.visible = true;
            Interface.showMore.visible = true;
            Interface.characterSelect.visible = _Carousel2.
            default.HowManyUnlocked().number > 1;
            if (!_Game2.default.hasPlayedBefore) {
                Interface.showMore.visible = false;
                mute.visible = false;
                _KeyboardHint2.
                default.show('main-first-play', true);
            } else {
                Interface.playButton.navigateOnLeft = function () {
                    _KeyboardHint2.
                    default.
                    switch('main-char-select');
                    return Interface.characterSelect;
                };
                Interface.playButton.navigateOnRight = function () {
                    if (!isShowingMore) {
                        Interface.OpenShowMore();
                    }
                    return Interface.showMore;
                };
                Interface.ShowPlay();
                if (!window.isMobile) {
                    _KeyboardUIControls2.
                    default.setFocus(Interface.playButton);
                }
                if (!window.isMobile) {
                    _KeyboardHint2.
                    default.show('main', true);
                }
            }
            Interface.moveToPlay.visible = window.isMobile;
            Interface.moveToPlayHitzone1.visible = true;
            Interface.moveToPlayHitzone2.visible = true;
            Interface.coinText.visible = true;
            Interface.coinIcon.visible = true;
            Interface.hintContainer.visible = true;
            Interface.showLogo(true);
            _Game2.
            default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
        };
        Interface.ShowPlay = function (btnDelay) {
            Interface.playButton.disabled = false;
            if (Interface.CurrentScreen === 'death') {
                Interface.playButton.setAssetPath('play-wide.png');
                Interface.playButton.defaultSprite = 'play-wide.png';
                Interface.playButton.blinkSprite = 'play-wide-blink.png';
            } else {
                Interface.playButton.disabled = true;
                Interface.playButton.visible = false;
                return;
            }
            if (window.isMobile && Interface.CurrentScreen !== "death") {
                Interface.playButton.visible = false;
                return;
            }
            if (Interface.buttonParent.offset.bottom !== 0 && movingInUi === -1) {
                Interface.buttonParent.offset.bottom = 0;
            }
            if (Interface.playButton.visible) {
                return;
            }
            var hintShown = false;
            if (Interface.CurrentScreen === 'death' && Interface.activeButtons && Interface.activeButtons.length > 0) {
                _KeyboardHint2.
                default.show('death-buttons');
                hintShown = true;
            }
            if (typeof btnDelay === 'undefined') {
                Interface.playButton.disabled = false;
                Interface.playButton.y = 10;
                if (Interface.CurrentScreen === 'death' && !hintShown) {
                    _KeyboardHint2.
                    default.show('death');
                }
            } else {
                Interface.playButton.disabled = true;
                Interface.playButton.y = -200;
                window.setTimeout(function () {
                        Interface.playButton.y = 10;
                        Interface.playButton.disabled = false;
                        if (Interface.CurrentScreen === 'death' && !hintShown) {
                            _KeyboardHint2.
                            default.show('death');
                        }
                    },
                    btnDelay);
            }
            Interface.playButton.visible = true;
        };
        Interface.HidePlay = function () {
            if (!Interface.playButton.visible) {
                return;
            }
            Interface.playButton.visible = false;
            canGo = false;
        };
        var unpauseTimer;
        Interface.TogglePause = function () {
            if (!_Game2.default.paused) {
                Interface.Pause();
            } else {
                Interface.unPause();
            }
        };
        Interface.forceUnPause = function () {
            _Game2.
            default.clock.start();
            pauseCounter.innerText = '';
            pauseCounter.style.display = 'none';
            _Game2.
            default.paused = false;
            pauseOverlay.style.display = 'none';
            if (_Game2.default.playing && !_Game2.default.playerController.Dead) {
                Interface.pauseBtn.visible = true;
            }
            if (Interface.isSound) {
                _Game2.
                default.audioManager.SetVolume(.8);
            }
        };
        Interface.Pause = function () {
            _Game2.
            default.clock.stop();
            requestAnimationFrame(function () {
                if (!_Game2.default.paused) {
                    return;
                }
                pauseOverlay.style.display = 'block';
                pauseIndicator.style.display = 'block';
                pauseCounter.style.display = 'none';
                Interface.pauseBtn.visible = false;
                Interface.updatePauseUI();
            });
            unpauseTimer = -1;
            _Game2.
            default.paused = true;
            _Game2.
            default.audioManager.SetVolume(0);
        };
        var unpauseInterval;
        Interface.unPause = function () {
            if (unpauseTimer > 0 || _RewardedHelper2.default.adPlaying || _InterstitialAdHelper2.default.adPlaying) {
                return;
            }
            if (!_Game2.default.playerController.Dead && _Game2.default.playing) {
                unpauseTimer = 3;
                window.clearInterval(unpauseInterval);
                unpauseInterval = window.setInterval(function () {
                        unpauseTimer--;
                        if (unpauseTimer < 0) {
                            window.clearInterval(unpauseInterval);
                        }
                    },
                    1000);
            } else {
                unpauseTimer = 0.01;
            }
        };
        Interface.UpdatePause = function () {
            if (unpauseTimer >= 0) {
                pauseCounter.style.display = 'block';
                pauseIndicator.style.display = 'none';
                Interface.pauseBtn.visible = false;
                if (unpauseTimer > 2) {
                    pauseCounter.innerText = '3';
                } else if (unpauseTimer > 1) {
                    pauseCounter.innerText = '2';
                } else if (unpauseTimer > 0.01) {
                    pauseCounter.innerText = '1';
                } else {
                    _Game2.
                    default.clock.start();
                    pauseCounter.innerText = '';
                    pauseCounter.style.display = 'none';
                    _Game2.
                    default.paused = false;
                    pauseOverlay.style.display = 'none';
                    if (_Game2.default.playing && !_Game2.default.playerController.Dead) {
                        Interface.pauseBtn.visible = true;
                    }
                    if (Interface.isSound) {
                        _Game2.
                        default.audioManager.SetVolume(.8);
                    }
                }
            }
        };
        Interface.tutorialLock = false;
        Interface.lockForTutorial = function () {
            this.tutorialLock = true;
        };
        Interface.removeTutorialLock = function () {
            if (!this.tutorialLock) {
                return;
            }
            this.unfadeFromBlueTween.start();
            this.ShowPlay(200);
        };
        Interface.deathUIShown = false;
        Interface.handleDeathUI = function () {
            if (this.deathUIShown) {
                return;
            }
            this.deathUIShown = true;
            if (this.tutorialLock) {
                fadeToBlueTween.start();
                Interface.focusFirstNotificationBar();
                _KeyboardHint2.
                default.show('death-onboarding');
                return;
            }
            var btnDelay = 500;
            var tutorialLock = false;
            for (var idx = 0; idx < Interface.activeNotificationBars.length; idx++) {
                var bar = Interface.activeNotificationBars[idx];
                if (bar.shakeMe) {
                    btnDelay = Math.max(2000, btnDelay);
                } else if (bar.type === 'upsell-notification') {
                    btnDelay = Math.max(1000, btnDelay);
                } else {
                    btnDelay = Math.max(500 + 500 * Interface.activeNotificationBars.length, btnDelay);
                }
            }
            if (_AppStoreInterstitial2.default.isVisible()) {
                btnDelay = Math.max(1000, btnDelay);
            }
            this.playButton.navigateOnLeft = null;
            this.playButton.navigateOnRight = null;
            Interface.ShowPlay(btnDelay);
            Interface.focusFirstNotificationBar();
        };
        Interface.focusFirstNotificationBar = function () {
            var setFocusOn = Interface.playButton._visible ? Interface.playButton : null;
            for (var idx = 0; idx < Interface.activeNotificationBars.length; idx++) {
                var bar = Interface.activeNotificationBars[idx];
                if (bar.button.visible) {
                    setFocusOn = bar.button;
                    break;
                }
            }
            if (setFocusOn) {
                _KeyboardUIControls2.
                default.setFocus(setFocusOn);
            }
        };
        var timeSinceLastTapBlink = 0;
        Interface.UpdateUI = function (deltaTime) {
            if (Interface.CurrentScreen === 'death') {
                if (!_Game2.default.playerController.waitingForEagle) {
                    if (_Game2.default.playerController.eagleCountdown > 0) {
                        _Game2.
                        default.playerController.eagleCountdown -= deltaTime;
                    } else {
                        this.handleDeathUI();
                    }
                }
            } else {
                Interface.deathUIShown = false;
            }
            Interface.coinText.setText(_GameSave2.default.GetCoins());
            if (_Game2.default.score > 0) {
                scoreText.setText(Math.round(_Game2.default.score));
                var ts = 0;
                if ((ts = _Storage2.default.getItem('crossyScore')) != null) {
                    if (ts > 0) {
                        Interface.topScore.setText("TOP " + Math.round(ts).toString());
                    } else {
                        Interface.topScore.setText("");
                    }
                }
            } else {
                scoreText.setText("");
                Interface.topScore.setText("");
            }
            var timeForTapBlink;
            if (Interface.moveToPlay.assetPath === 'tap1.png' || Interface.moveToPlay.assetPath === 'keyboard-full.png') {
                timeForTapBlink = 0.333;
            } else {
                timeForTapBlink = 0.25;
            }
            if (timeSinceLastTapBlink >= timeForTapBlink) {
                if (Interface.moveToPlay.assetPath === 'tap1.png') {
                    Interface.moveToPlay.setAssetPath('tap2.png');
                    Interface.moveToPlay.y = 26;
                } else if (Interface.moveToPlay.assetPath === 'tap2.png') {
                    Interface.moveToPlay.setAssetPath('tap1.png');
                    Interface.moveToPlay.y = 20;
                }
                timeSinceLastTapBlink = 0;
            } else {
                timeSinceLastTapBlink += deltaTime;
            }
            if (Interface.CurrentScreen === 'main' && _Game2.default.playing && !finger.visible && !arrowHint.visible && !hintLine.visible && !_KeyboardHint2.default.isVisible()) {
                _Game2.
                default.UI.clearRect = {
                    x: 0,
                    y: 0,
                    width: _Game2.
                    default.UI.width,
                    height: 100
                };
            } else {
                _Game2.
                default.UI.clearRect = null;
            }
            for (var idx = 0; idx < Interface.activeNotificationBars.length; idx++) {
                var bar = Interface.activeNotificationBars[idx];
                if (bar.shakeMe) {
                    var timer = _Game2.
                    default.frameCount / 30;
                    var shakeAmount = Math.abs(Math.max(-1, Math.sin(timer) * 2));
                    bar.background.y = bar.background.startY + _Utils2.
                    default.getRandomArbitrary(-shakeAmount, shakeAmount);
                } else {
                    bar.background.y = bar.background.startY;
                }
            }
        };
        Interface.CreateUI = function () {
            _Game2.
            default.UI = new _ThreeUI2.
            default(_Game2.default.canvas, 720, _Game2.default.renderUIOnQuad);
            if (_Game2.default.renderUIOnQuad) {
                _Game2.
                default.UI.texture.minFilter = THREE.NearestFilter;
                _Game2.
                default.UI.texture.magFilter = THREE.NearestFilter;
            } else {
                _Game2.
                default.UI.canvas.className = 'pixelated';
            }
        };
        Interface.ButtonScaleSet = function () {
            if (!Interface.playButton) {
                return;
            }
            var moveToPlayRatio = window.isMobile ? 13 / 19 : 26 / 18;
            var newScale = 3.5;
            Interface.characterSelect.width = 26 * newScale;
            Interface.characterSelect.height = 24 * newScale;
            Interface.showMore.width = 26 * newScale;
            Interface.showMore.height = 24 * newScale;
            Interface.playButton.width = 45 * newScale;
            Interface.playButton.height = 24 * newScale;
            mute.width = 26 * newScale;
            mute.height = 24 * newScale;
            mute.y = Interface.showMore.y + Interface.showMore.height + 10;
            Interface.showUpsell.width = 26 * newScale;
            Interface.showUpsell.height = 24 * newScale;
            Interface.showUpsell.y = mute.y + mute.height + 10;
            Interface.moveToPlay.height = 22 * newScale;
            Interface.moveToPlay.width = Interface.moveToPlay.height * moveToPlayRatio;
            Interface.moveToPlayHitzone2.offset.bottom = Interface.playButton.height + Interface.playButton.y;
            Interface.moveToPlayHitzone1.offset.left = Interface.characterSelect.x + Interface.characterSelect.width;
            Interface.moveToPlayHitzone1.offset.right = Interface.showMore.x + Interface.showMore.width;
            Interface.moveToPlayHitzone1.height = Interface.playButton.height + Interface.playButton.y;
        };
        Interface.removePauseOverlay = function () {
            pauseOverlay.style.display = 'none';
        };
        Interface.hideInterstitial = function () {
            hideInterstitialTween.start();
        };
        Interface.stopInterstitialTweens = function () {
            hideInterstitialTween.stop();
            showInterstitialTween.stop();
            showLogoTween.stop();
            hideLogoTween.stop();
        };
        Interface.Init = function () {
            Interface.buttonParent = _Game2.
            default.UI.createRectangle('rgba(0,0,0,0)');
            Interface.buttonParent.stretch.x = true;
            Interface.buttonParent.stretch.y = true;
            Interface.buttonParent.anchor.x = _ThreeUI2.
            default.anchors.center;
            Interface.buttonParent.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.buttonParent.smoothing = false;
            Interface.buttonParent.offset.bottom = -180;
            Interface.playButton = _Game2.
            default.UI.createSpriteFromSheet('play-wide.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.playButton.x = 0;
            Interface.playButton.y = 10;
            Interface.playButton.alpha = 1;
            Interface.playButton.pivot.x = 0.5;
            Interface.playButton.pivot.y = 1;
            Interface.playButton.smoothing = false;
            Interface.playButton.anchor.x = _ThreeUI2.
            default.anchors.center;
            Interface.playButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.playButton.parent = Interface.buttonParent;
            Interface.playButton.visible = false;
            Interface.playButton.defaultSprite = Interface.playButton.assetPath;
            Interface.playButton.blinkSprite = 'play-wide-blink.png';
            Interface.characterSelect = _Game2.
            default.UI.createSpriteFromSheet('characterSelect.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.characterSelect.x = 10;
            Interface.characterSelect.y = 10;
            Interface.characterSelect.smoothing = false;
            Interface.characterSelect.anchor.x = _ThreeUI2.
            default.anchors.left;
            Interface.characterSelect.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.characterSelect.pivot.x = 0;
            Interface.characterSelect.pivot.y = 1;
            Interface.characterSelect.parent = Interface.buttonParent;
            Interface.characterSelect.defaultSprite = Interface.characterSelect.assetPath;
            Interface.characterSelect.blinkSprite = 'characterSelectBlink.png';
            mute = _Game2.
            default.UI.createSpriteFromSheet('mute-off.png', 'sprites/interface.png', 'sprites/interface.json');
            mute.x = 10;
            mute.pivot.x = 1;
            mute.pivot.y = 1;
            mute.smoothing = false;
            mute.anchor.x = _ThreeUI2.
            default.anchors.right;
            mute.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            mute.visible = false;
            mute.defaultSprite = mute.assetPath;
            mute.blinkSprite = 'mute-off-blink.png';
            Interface.showUpsell = _Game2.
            default.UI.createSpriteFromSheet('GoTo.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.showUpsell.x = 10;
            Interface.showUpsell.smoothing = false;
            Interface.showUpsell.pivot.x = 1;
            Interface.showUpsell.pivot.y = 1;
            Interface.showUpsell.anchor.x = _ThreeUI2.
            default.anchors.right;
            Interface.showUpsell.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.showUpsell.visible = false;
            Interface.showUpsell.navigateOnBottom = function () {
                if (_AppStoreInterstitial2.default.isVisible()) {
                    return null;
                }
                return mute;
            };
            Interface.showUpsell.defaultSprite = Interface.showUpsell.assetPath;
            Interface.showUpsell.blinkSprite = 'GoTo-blink.png';
            Interface.showMore = _Game2.
            default.UI.createSpriteFromSheet('arrow-up.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.showMore.x = 10;
            Interface.showMore.y = 10;
            Interface.showMore.rotation = 0;
            Interface.showMore.alpha = 1;
            Interface.showMore.smoothing = false;
            Interface.showMore.anchor.x = _ThreeUI2.
            default.anchors.right;
            Interface.showMore.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.showMore.pivot.x = 1;
            Interface.showMore.pivot.y = 1;
            Interface.showMore.parent = Interface.buttonParent;
            Interface.showMore.defaultSprite = Interface.showMore.assetPath;
            Interface.showMore.blinkSprite = 'arrow-up-blink.png';
            Interface.showMore.navigateOnTop = function () {
                if (!isShowingMore) {
                    Interface.showMore.fireEvent('click');
                }
                return mute;
            };
            scoreText = _Game2.
            default.UI.createBitmapText('', 5, 0, 0, 'fonts/8-bit-wonder.png', 'fonts/8-bit-wonder.json');
            scoreText.y = 10;
            scoreText.x = 10;
            scoreText.anchor.x = _ThreeUI2.
            default.anchors.left;
            scoreText.anchor.y = _ThreeUI2.
            default.anchors.top;
            scoreText.smoothing = false;
            Interface.topScore = _Game2.
            default.UI.createBitmapText('', 2.6, 0, 0, 'fonts/8-bit-wonder.png', 'fonts/8-bit-wonder.json');
            Interface.topScore.y = scoreText.y + 68;
            Interface.topScore.x = scoreText.x;
            Interface.topScore.anchor.x = _ThreeUI2.
            default.anchors.left;
            Interface.topScore.anchor.y = _ThreeUI2.
            default.anchors.top;
            Interface.topScore.smoothing = false;
            Interface.coinText = _Game2.
            default.UI.createBitmapText(_GameSave2.default.GetCoins(), 3.6, 0, 0, 'fonts/8-bit-wonder-yellow.png', 'fonts/8-bit-wonder.json');
            Interface.coinText.y = 11;
            Interface.coinText.anchor.x = _ThreeUI2.
            default.anchors.right;
            Interface.coinText.anchor.y = _ThreeUI2.
            default.anchors.top;
            Interface.coinText.pivot.x = 1;
            Interface.coinText.smoothing = false;
            Interface.coinIcon = _Game2.
            default.UI.createSpriteFromSheet('coin.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.coinIcon.smoothing = false;
            Interface.coinIcon.anchor.x = _ThreeUI2.
            default.anchors.right;
            Interface.coinIcon.anchor.y = _ThreeUI2.
            default.anchors.top;
            Interface.coinIcon.pivot.x = 1;
            Interface.coinIcon.pivot.y = 1;
            Interface.coinIcon.y = Interface.coinText.y + Interface.coinText.height;
            Interface.coinIcon.x = 5;
            Interface.coinIcon.width = 35;
            Interface.coinIcon.height = 35;
            Interface.coinText.x = Interface.coinIcon.x + Interface.coinIcon.width;
            Interface.hintContainer = _Game2.
            default.UI.createRectangle();
            Interface.hintContainer.alpha = 0;
            Interface.hintContainer.stretch.x = true;
            Interface.hintContainer.stretch.y = true;
            var hintLineParent = _Game2.
            default.UI.createRectangle('#ffffff', 0, 0, 1, 1);
            hintLineParent.alpha = 0;
            hintLineParent.anchor.x = _ThreeUI2.
            default.anchors.center;
            hintLineParent.anchor.y = _ThreeUI2.
            default.anchors.center;
            hintLineParent.parent = Interface.hintContainer;
            hintLine = _Game2.
            default.UI.createRectangle('#ffffff', 0, 0, 1, 15);
            hintLine.smoothing = false;
            hintLine.y = -240;
            hintLine.visible = false;
            hintLine.stretch.x = true;
            hintLine.offset.left = 75;
            hintLine.offset.right = 75;
            hintLine.parent = hintLineParent;
            finger = _Game2.
            default.UI.createSpriteFromSheet('tap1.png', 'sprites/interface.png', 'sprites/interface.json');
            finger.smoothing = false;
            finger.anchor.x = _ThreeUI2.
            default.anchors.center;
            finger.anchor.y = _ThreeUI2.
            default.anchors.center;
            finger.y = -200;
            finger.visible = false;
            finger.width = 23 * hintScaleFactor;
            finger.height = 48 * hintScaleFactor;
            finger.parent = Interface.hintContainer;
            arrowHint = _Game2.
            default.UI.createSpriteFromSheet('keyboard-full.png', 'sprites/interface.png', 'sprites/interface.json');
            arrowHint.smoothing = false;
            arrowHint.anchor.x = _ThreeUI2.
            default.anchors.center;
            arrowHint.anchor.y = _ThreeUI2.
            default.anchors.center;
            arrowHint.x = 0;
            arrowHint.parent = Interface.hintContainer;
            arrowHint.visible = false;
            arrowHint.width = 26 * hintScaleFactor;
            arrowHint.height = 18 * hintScaleFactor;
            Interface.moveToPlay = _Game2.
            default.UI.createSpriteFromSheet('keyboard-full.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.moveToPlay.anchor.x = _ThreeUI2.
            default.anchors.center;
            Interface.moveToPlay.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.moveToPlay.pivot.y = 1;
            if (window.isMobile) {
                Interface.moveToPlay.y = 20;
            } else {
                Interface.moveToPlay.visible = false;
                Interface.moveToPlay.y = 18;
            }
            Interface.moveToPlay.smoothing = false;
            Interface.moveToPlay.onClick(function () {
                Interface.playButtonCallback();
            });
            Interface.moveToPlay.navigateOnTop = function () {
                Interface.playButtonCallback();
                return null;
            };
            Interface.moveToPlay.defaultSprite = Interface.moveToPlay.assetPath;
            Interface.moveToPlay.blinkSprite = 'keyboard-up.png';
            Interface.characterSelect.navigateOnRight = function () {
                _KeyboardHint2.
                default.
                switch('main');
                return Interface.playButton;
            };
            Interface.showMore.navigateOnLeft = function () {
                Interface.CloseShowMore();
                return Interface.playButton;
            };
            mute.navigateOnTop = Interface.showUpsell;
            mute.navigateOnBottom = Interface.showMore;
            mute.navigateOnLeft = function () {
                Interface.CloseShowMore();
                return Interface.playButton;
            };
            Interface.showUpsell.navigateOnLeft = function () {
                if (_AppStoreInterstitial2.default.isVisible()) {
                    return null;
                }
                Interface.CloseShowMore();
                return Interface.playButton;
            };
            if (isMobile) {
                Interface.moveToPlay.setAssetPath('tap1.png');
            }
            Interface.moveToPlayHitzone1 = _Game2.
            default.UI.createRectangle();
            Interface.moveToPlayHitzone1.alpha = 0;
            Interface.moveToPlayHitzone1.pivot.y = 1;
            Interface.moveToPlayHitzone1.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Interface.moveToPlayHitzone1.stretch.x = true;
            Interface.moveToPlayHitzone1.forceEventsWhenVisible = true;
            Interface.moveToPlayHitzone1.onClick(function () {
                if (!_AppStoreInterstitial2.default.isVisible()) {
                    Interface.playButtonCallback();
                }
            });
            Interface.moveToPlayHitzone2 = _Game2.
            default.UI.createRectangle();
            Interface.moveToPlayHitzone2.alpha = 0;
            Interface.moveToPlayHitzone2.stretch.x = true;
            Interface.moveToPlayHitzone2.offset.right = 100;
            Interface.moveToPlayHitzone2.stretch.y = true;
            Interface.moveToPlayHitzone1.forceEventsWhenVisible = true;
            Interface.moveToPlayHitzone2.onClick(function () {
                if (!_AppStoreInterstitial2.default.isVisible()) {
                    Interface.playButtonCallback();
                }
            });
            var blueFadeOverlay = _Game2.
            default.UI.createRectangle('rgba(105, 206, 236, 0)');
            blueFadeOverlay.stretch.x = true;
            blueFadeOverlay.stretch.y = true;
            blueFadeOverlay.offset.left = -1;
            blueFadeOverlay.offset.right = -1;
            blueFadeOverlay.offset.top = -1;
            blueFadeOverlay.offset.bottom = -1;
            blueFadeOverlay.alpha = 0;
            fadeToBlueTween = new TWEEN.Tween(blueFadeOverlay).onStart(function () {
                this.alpha = 0;
                this.visible = true;
            }).to({
                    alpha: 1
                },
                500).easing(TWEEN.Easing.Quartic.Out);
            this.unfadeFromBlueTween = new TWEEN.Tween(blueFadeOverlay).onStart(function () {
                this.visible = true;
            }).to({
                    alpha: 0
                },
                500).easing(TWEEN.Easing.Quartic.Out);
            pauseOverlay = document.createElement('div');
            document.body.appendChild(pauseOverlay);
            pauseOverlay.style.position = 'absolute';
            pauseOverlay.style.display = 'none';
            pauseOverlay.style.backgroundColor = 'rgba(105, 206, 236, 0.4)';
            pauseOverlay.style.zIndex = 4;
            pauseOverlay.addEventListener('click',
                function () {
                    if (!_Game2.default.takesUserInput) {
                        return;
                    }
                    Interface.unPause();
                });
            Interface.pauseBtn = _Game2.
            default.UI.createSpriteFromSheet('pause.png', 'sprites/interface.png', 'sprites/interface.json');
            Interface.pauseBtn.smoothing = false;
            Interface.pauseBtn.visible = false;
            Interface.pauseBtn.anchor.x = _ThreeUI2.
            default.anchors.right;
            Interface.pauseBtn.anchor.y = _ThreeUI2.
            default.anchors.top;
            Interface.pauseBtn.y = 44 + 35;
            Interface.pauseBtn.x = 10;
            Interface.pauseBtn.pivot.x = 1;
            Interface.pauseBtn.width = 7 * 4;
            Interface.pauseBtn.height = 7 * 4;
            pauseCounter = document.createElement('div');
            pauseCounter.style.font = '64px EditUndoBrk';
            pauseCounter.style.color = '#fff';
            pauseCounter.style.textAlign = 'center';
            pauseCounter.style.width = '300px';
            pauseCounter.style.height = '100px';
            pauseCounter.style.position = 'absolute';
            pauseCounter.style.left = '50%';
            pauseCounter.style.top = '50%';
            pauseCounter.style.display = 'none';
            pauseOverlay.appendChild(pauseCounter);
            pauseIndicator = document.createElement('img');
            pauseIndicator.className = 'pixelated';
            pauseIndicator.src = 'sprites/pause.png';
            pauseIndicator.style.position = 'absolute';
            pauseIndicator.style.left = '50%';
            pauseIndicator.style.top = '47.5%';
            pauseIndicator.style.height = '10%';
            pauseIndicator.style.display = 'none';
            pauseOverlay.appendChild(pauseIndicator);
            interstitialPanel = document.createElement('div');
            interstitialPanel.style.position = 'absolute';
            interstitialPanel.style.left = '0';
            interstitialPanel.style.top = '0';
            interstitialPanel.style.width = '100%';
            interstitialPanel.style.height = '100%';
            interstitialPanel.style.perspective = '1000px';
            interstitialPanel.style.display = 'flex';
            interstitialPanel.style.justifyContent = 'center';
            interstitialPanel.style.alignItems = 'center';
            interstitialPanel.style.zIndex = 2;
            interstitialPanel.style.overflow = 'hidden';
            interstitialBg = document.createElement('div');
            interstitialBg.style.zIndex = 1;
            interstitialBg.style.backgroundColor = 'rgb(105, 206, 236)';
            interstitialBg.style.transition = '0.5s opacity ease-out';
            interstitialBg.style.opacity = 1;
            interstitialBg.style.position = 'absolute';
            interstitialBg.style.left = '0';
            interstitialBg.style.top = '0';
            interstitialBg.style.width = '100%';
            interstitialBg.style.height = '100%';
            interstitialBg.style.perspective = '1000px';
            logo = document.createElement('img');
            logo.src = 'sprites/crossy-road-logo.png';
            logo.style.minWidth = '50%';
            logo.style.maxWidth = '80%';
            logo.style.maxHeight = '50%';
            logo.style.marginTop = '-15%';
            logo.style.position = 'relative';
            logo.style.pointerEvents = 'none';
            logo.style.zIndex = 2;
            interstitialPanel.appendChild(logo);
            interstitialPanel.appendChild(interstitialBg);
            _Game2.
            default.container.appendChild(interstitialPanel);
            Interface.ButtonScaleSet();
            Interface.setupButtonEventHandlers();
            Interface.determineLogoTransform();
            logo.style.transform = 'translate3d(' + -logoHiddenTransform.x + 'px, ' + logoHiddenTransform.y + 'px, 0)';
            Interface.updatePauseUI();
            showInterstitialTween = new TWEEN.Tween({
                t: 0
            }).to({
                    t: 1
                },
                500).onStart(function () {
                interstitialBg.style.transition = '0.5s opacity ease-out';
                interstitialBg.style.opacity = 1;
            });
            hideInterstitialTween = new TWEEN.Tween({
                t: 0
            }).to({
                    t: 1
                },
                500).onStart(function () {
                interstitialBg.style.transition = '0.5s opacity ease-in';
                interstitialBg.style.opacity = 0;
            });
            showLogoTween = new TWEEN.Tween({
                t: 0
            }).to({
                    t: 750
                },
                750).easing(TWEEN.Easing.Quartic.Out).onStart(function () {
                interstitialPanel.style.display = 'flex';
                logo.style.display = 'block';
                logo.style.transition = logoTransitionDuration + ' ' + logoShowTransition;
                requestAnimationFrame(function () {
                    logo.style.transform = logoShownStyleTransform;
                });
            }).onComplete(function () {
                logo.style.transition = '';
            });
            hideLogoTween = new TWEEN.Tween({
                t: 0
            }).to({
                    t: 750
                },
                750).easing(TWEEN.Easing.Quartic.In).onStart(function () {
                logo.style.transition = logoTransitionDuration + ' ' + logoHideTransition;
                logo.style.transform = 'translate3d(' + logoHiddenTransform.x + 'px, ' + -logoHiddenTransform.y + 'px, 0)';
            }).onComplete(function () {
                interstitialPanel.style.display = 'none';
                logo.style.transform = 'translate3d(' + -logoHiddenTransform.x + 'px, ' + logoHiddenTransform.y + 'px, 0)';
            });
            UIloaded = true;
            _AppStoreInterstitial2.
            default.hide();
        };
        Interface.setupButtonEventHandlers = function () {
            Interface.playButton.onClick(function () {
                Interface.playButtonCallback();
            });
            Interface.characterSelect.onClick(function () {
                Interface.ButtonSound();
                Interface.ChooseCharacter();
            });
            mute.onClick(function () {
                Interface.ToggleMute();
            });
            Interface.showUpsell.onClick(function () {
                Interface.ButtonSound();
                Interface.CloseShowMore();
                _AppStoreInterstitial2.
                default.toggle(true);
            });
            Interface.showMore.onClick(function () {
                Interface.ToggleShowMore();
            });
            Interface.pauseBtn.onClick(function () {
                Interface.ButtonSound();
                Interface.Pause();
            });
        };
        Interface.updatePauseUI = function () {
            var rect = _Game2.
            default.canvas.getBoundingClientRect();
            pauseOverlay.style.left = rect.left + 'px';
            pauseOverlay.style.top = rect.top + 'px';
            pauseOverlay.style.width = rect.width + 'px';
            pauseOverlay.style.height = rect.height + 'px';
            pauseCounter.style.fontSize = parseInt(64 / 720 * _Game2.default.canvas.height, 10) + 'px';
            pauseCounter.style.width = parseInt(300 / 720 * _Game2.default.canvas.height, 10) + 'px';
            pauseCounter.style.height = parseInt(100 / 720 * _Game2.default.canvas.height, 10) + 'px';
            pauseCounter.style.lineHeight = parseInt(pauseCounter.style.height, 10) + 'px';
            pauseCounter.style.marginLeft = -parseInt(pauseCounter.style.width, 10) / 2 + 'px';
            pauseCounter.style.marginTop = -parseInt(pauseCounter.style.height, 10) / 2 + 'px';
            var indicatorRect = pauseIndicator.getBoundingClientRect();
            pauseIndicator.style.marginTop = -(indicatorRect.height / 2) + 'px';
            pauseIndicator.style.marginLeft = -(indicatorRect.width / 2) + 'px';
        };
        Interface.showLogo = function (instant, callback) {
            if (instant) {
                logo.style.transform = logoShownStyleTransform;
                logo.style.transition = 'none';
                logo.style.display = 'block';
                if (typeof callback === 'function') {
                    callback();
                }
                return;
            }
            if (typeof callback === 'function') {
                showLogoTween.onComplete(callback);
            } else {
                showLogoTween.onComplete(null);
            }
            showLogoTween.start();
        };
        Interface.hideInterstitial = function () {
            showInterstitialTween.stop();
            hideInterstitialTween.start();
        };
        Interface.determineLogoTransform = function () {
            logoHiddenTransform.x = _Game2.
            default.canvas.getBoundingClientRect().width;
            logoHiddenTransform.y = logoCot * logoHiddenTransform.x;
        };
        Interface.updateScale = function (deltaTime) {
            if (!UIloaded) {
                return;
            }
            Interface.determineLogoTransform();
            if (Interface.playButton.visible || Interface.characterSelect.visible || Interface.showMore.visible) {
                Interface.ButtonScaleSet();
            }
            if (Interface.CurrentScreen == "selectingCharacter") {
                _Carousel2.
                default.ButtonScaleSet();
            }
            if (Interface.activeNotificationBars.length > 0) {
                Interface.activeNotificationBars.forEach(function (bar) {
                    scaleNotificationBar(bar);
                });
            }
        };
        Interface.showInterstitial = function (onComplete) {
            var dontHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (Interface.currentScreen === "interstitial") {
                return;
            }
            Interface.currentScreen = "interstitial";
            Interface.showLogo();
            window.setTimeout(function () {
                    hideInterstitialTween.stop();
                    showInterstitialTween.start().onComplete(function () {
                        onComplete();
                        if (dontHide) {
                            return;
                        }
                        window.setTimeout(function () {
                                hideInterstitialTween.start().onComplete(function () {
                                    Interface.currentScreen = "main";
                                });
                            },
                            250);
                    });
                },
                200);
        };
        var hiding = false;
        Interface.hideLogo = function (instant) {
            if (hiding || hideLogoTween._isPlaying || showLogoTween._isPlaying) {
                return false;
            }
            if (instant) {
                logo.style.display = 'none';
                return;
            }
            hiding = true;
            hideLogoTween.start();
            window.setTimeout(function () {
                    hiding = false;
                },
                750);
            return true;
        };
        var coinSize = 30;
        var removeCoin = function removeCoin(coin) {
            var coords = {
                w: coinSize,
                coin: coin
            };
            new TWEEN.Tween(coords).to({
                    w: 0
                },
                150).easing(TWEEN.Easing.Sinusoidal.InOut).onUpdate(function () {
                this.coin.width = this.w;
            }).onComplete(function () {
                _Game2.
                default.UI.delete(this.coin);
            }).onStart(function () {
                this.coin.setAssetPath('coin-white.png');
            }).start();
        };
        var getDistance = function getDistance(x1, y1, x2, y2) {
            var a = x1 - x2;
            var b = y1 - y2;
            return Math.sqrt(a * a + b * b);
        };
        Interface.coinBlast = function (amount) {
            var this$1 = this;
            if (this.coins && this.coins.length > 0) {
                this.coins.forEach(function (coin) {
                    _Game2.
                    default.UI.delete(coin);
                }.bind(this));
            }
            window.setTimeout(function () {
                    _Game2.
                    default.playSfx('gift/emptying the piggy bank 2');
                },
                100);
            this.coins = [];
            var maxDistance = getDistance(0, 0, _Game2.default.UI.width, _Game2.default.UI.height);
            for (var idx = 0; idx < amount; idx++) {
                var startX = _Utils2.
                default.getRandomInt(0, _Game2.default.UI.width);
                var destX = _Utils2.
                default.getRandomInt(0, _Game2.default.UI.width);
                var startY = -coinSize;
                var destY = _Utils2.
                default.getRandomInt(0, _Game2.default.UI.height);
                var coinIcon = _Game2.
                default.UI.createSpriteFromSheet('coin-basic.png', 'sprites/interface.png', 'sprites/interface.json');
                coinIcon.smoothing = false;
                coinIcon.anchor.x = _ThreeUI2.
                default.anchors.left;
                coinIcon.anchor.y = _ThreeUI2.
                default.anchors.top;
                coinIcon.x = startX;
                coinIcon.y = startY;
                this$1.coins.push(coinIcon);
                var coords = {
                    x: startX,
                    y: startY,
                    w: coinSize * .001,
                    coin: coinIcon,
                    idx: idx
                };
                var delay = Math.random() * 200;
                new TWEEN.Tween(coords).to({
                        x: destX,
                        y: destY,
                        w: coinSize
                    },
                    400).easing(TWEEN.Easing.Quartic.Out).onUpdate(function () {
                    this.coin.width = this.w;
                    this.coin.height = this.w;
                    this.coin.x = this.x;
                    this.coin.y = this.y;
                }).delay(delay).onComplete(function () {
                    window.setTimeout(function () {
                        if (_Game2.default.UI.displayObjects.indexOf(this.coin) > -1) {
                            if (this.idx % 5 === 0) {
                                _Game2.
                                default.playSfx('get-coin-79', true);
                            }
                        }
                        removeCoin(this.coin);
                    }.bind(this), 200 + this.idx * 30);
                }).start();
                new TWEEN.Tween(coinIcon).to({
                        rotation: _Utils2.
                        default.getRandomInt(-180, 180)
                    },
                    600).easing(TWEEN.Easing.Cubic.Out).delay(delay).start();
            }
        };
        Interface.hideRemainingCoins = function () {
            if (this.coins && this.coins.length > 0) {
                this.coins.forEach(function (coin) {
                    _Game2.
                    default.UI.delete(coin);
                }.bind(this));
            }
        };
        var movingInUi = -1;
        var uiMoveTween = null;
        Interface.moveInUI = function (timeOut) {
            if (movingInUi > -1) {
                var dt = (Date.now() - movingInUi) / (timeOut || 1000);
                window.setTimeout(function () {
                        if (uiMoveTween._isPlaying != true) {
                            if (Interface.buttonParent.offset.bottom !== 0) {
                                movingInUi = -1;
                                Interface.moveInUI();
                            }
                        }
                    },
                    timeOut || 1000);
                return;
            }
            movingInUi = Date.now();
            Interface.buttonParent.offset.bottom = -180;
            var coords = {
                y: Interface.buttonParent.offset.bottom
            };
            uiMoveTween = new TWEEN.Tween(coords).to({
                    y: 0
                },
                150).onUpdate(function () {
                Interface.buttonParent.offset.bottom = this.y;
                _Game2.
                default.UI.shouldReDraw = true;
            }).delay(1000).onStart(function () {
                uiMoveTween._isPlaying = true;
            }).onComplete(function () {
                if (_Game2.default.hasPlayedBefore && !_Game2.default.playing) {
                    _KeyboardHint2.
                    default.show('main');
                }
                movingInUi = -1;
                uiMoveTween._isPlaying = false;
            }).start();
        };
        Interface.barContainer = null;
        Interface.upsellWasClicked = _Storage2.
        default.getItem('upsellWasClicked') || false;
        Interface.activeNotificationBars = [];
        var allNotificationBars = [];
        var availableNotificationBars = [];
        var notificationBarColors = {
            blue: '#56C7F9',
            orange: '#ff4c0a',
            yellow: '#ffc500',
            red: '#e9202b'
        };
        var notificationBarLandscapeHeight = 100;
        var notificationBarPortraitHeight = 80;
        var notificationBarMargin = 10;
        var notificationBarPortraitWidth = 0.95;
        var notificationBarLandscapeWidth = 0.5;
        Interface.preCreateNotificationBars = function () {
            for (var i = 0; i < 3; i++) {
                createNotificationBar();
            }
        };
        var getNotificationBarContentDimensions = function getNotificationBarContentDimensions() {
            var aspectRatio = _Game2.
            default.canvas.width / _Game2.
            default.canvas.height;
            var percLandscape = _Utils2.
            default.inverseLerp(window.minAspect, window.maxAspect, aspectRatio);
            return {
                width: THREE.Math.lerp(notificationBarPortraitWidth, notificationBarLandscapeWidth, percLandscape),
                height: THREE.Math.lerp(notificationBarPortraitHeight, notificationBarLandscapeHeight, percLandscape)
            };
        };
        var createNotificationBar = function createNotificationBar() {
            if (!Interface.barContainer) {
                Interface.barContainer = _Game2.
                default.UI.createRectangle('rgba(0,0,0,0)');
                Interface.barContainer.stretch.x = true;
                Interface.barContainer.anchor.y = _ThreeUI2.
                default.anchors.center;
            }
            var background = _Game2.
            default.UI.createRectangle();
            background.anchor.x = _ThreeUI2.
            default.anchors.center;
            background.anchor.y = _ThreeUI2.
            default.anchors.center;
            background.alpha = 0.96;
            background.visible = false;
            background.parent = Interface.barContainer;
            var contentAnimator = _Game2.
            default.UI.createRectangle();
            contentAnimator.pivot = {
                x: 0,
                y: 0
            };
            contentAnimator.alpha = 0;
            contentAnimator.parent = background;
            var content = _Game2.
            default.UI.createRectangle();
            content.alpha = 0;
            content.parent = contentAnimator;
            content.stretch.x = true;
            content.stretch.y = true;
            var textContainer = _Game2.
            default.UI.createRectangle();
            textContainer.alpha = 0;
            textContainer.parent = content;
            textContainer.stretch.x = true;
            textContainer.stretch.y = true;
            var text = _Game2.
            default.UI.createText('TEXT', 40, 'EditUndoBrk', '#fff');
            text.parent = textContainer;
            text.anchor.x = _ThreeUI2.
            default.anchors.center;
            text.textAlign = 'center';
            text.textBaseline = 'middle';
            text.textVerticalAlign = 'center';
            text.visible = false;
            var button = _Game2.
            default.UI.createSpriteFromSheet('adToCoin.png', 'sprites/interface.png', 'sprites/interface.json');
            button.parent = content;
            button.anchor.y = _ThreeUI2.
            default.anchors.center;
            button.anchor.x = _ThreeUI2.
            default.anchors.right;
            button.visible = false;
            var buttonAttention = _Game2.
            default.UI.createSpriteFromSheet('attention.png', 'sprites/interface.png', 'sprites/interface.json');
            buttonAttention.parent = button;
            buttonAttention.anchor.x = _ThreeUI2.
            default.anchors.right;
            buttonAttention.anchor.y = _ThreeUI2.
            default.anchors.top;
            buttonAttention.x = 10;
            buttonAttention.y = 0;
            buttonAttention.visible = false;
            var button2 = _Game2.
            default.UI.createSpriteFromSheet('adToCoin.png', 'sprites/interface.png', 'sprites/interface.json');
            button2.parent = content;
            button2.anchor.y = _ThreeUI2.
            default.anchors.center;
            button2.anchor.x = _ThreeUI2.
            default.anchors.right;
            button2.visible = false;
            var button3 = _Game2.
            default.UI.createSpriteFromSheet('adToCoin.png', 'sprites/interface.png', 'sprites/interface.json');
            button3.parent = content;
            button3.anchor.y = _ThreeUI2.
            default.anchors.center;
            button3.anchor.x = _ThreeUI2.
            default.anchors.right;
            button3.visible = false;
            var buttonGraphic = _Game2.
            default.UI.createSprite('sprites/trex.png');
            buttonGraphic.anchor.x = _ThreeUI2.
            default.anchors.center;
            buttonGraphic.anchor.y = _ThreeUI2.
            default.anchors.top;
            buttonGraphic.visible = false;
            buttonGraphic.parent = content;
            buttonGraphic.smoothing = true;
            var button2Graphic = _Game2.
            default.UI.createSprite('sprites/duck.png');
            button2Graphic.anchor.x = _ThreeUI2.
            default.anchors.center;
            button2Graphic.anchor.y = _ThreeUI2.
            default.anchors.top;
            button2Graphic.visible = false;
            button2Graphic.parent = content;
            var button3Graphic = _Game2.
            default.UI.createSprite('sprites/robot.png');
            button3Graphic.anchor.x = _ThreeUI2.
            default.anchors.center;
            button3Graphic.anchor.y = _ThreeUI2.
            default.anchors.top;
            button3Graphic.visible = false;
            button3Graphic.parent = content;
            var sideGraphic = _Game2.
            default.UI.createSprite('sprites/trex.png');
            sideGraphic.anchor.x = _ThreeUI2.
            default.anchors.right;
            sideGraphic.anchor.y = _ThreeUI2.
            default.anchors.center;
            sideGraphic.pivot.x = 0;
            sideGraphic.x = 0;
            sideGraphic.parent = content;
            sideGraphic.visible = false;
            var bar = {
                background: background,
                contentAnimator: contentAnimator,
                content: content,
                textContainer: textContainer,
                text: text,
                button: button,
                buttonAttention: buttonAttention,
                button2: button2,
                button3: button3,
                buttonGraphic: buttonGraphic,
                button2Graphic: button2Graphic,
                button3Graphic: button3Graphic,
                sideGraphic: sideGraphic
            };
            allNotificationBars.push(bar);
            availableNotificationBars.push(bar);
            return bar;
        };
        var scaleNotificationBar = function scaleNotificationBar(bar) {
            var buttonAspect = 1.875;
            var maxButtonMargin = 14;
            var maxButtonHeight = 72;
            var maxTextSize = 40;
            var maxHeight = Math.max(notificationBarPortraitHeight, notificationBarLandscapeHeight);
            var dimensions = getNotificationBarContentDimensions();
            var percOfMax = dimensions.height / maxHeight;
            var contentOffset = (1 - dimensions.width) / 2 * 100;
            bar.content.offset.left = bar.content.offset.right = contentOffset + '%';
            bar.background.width = _Game2.
            default.UI.width * 1.05;
            bar.background.height = dimensions.height;
            if (bar.doubleHeight) {
                bar.background.height *= 2;
            } else if (bar.tripleHeight) {
                bar.background.height *= 3;
            }
            if (bar.position === 'top') {
                bar.background.y = -(bar.background.height + notificationBarMargin);
            } else if (bar.position === 'middle') {
                bar.background.y = 0;
            } else if (bar.position === 'bottom') {
                bar.background.y = bar.background.height + notificationBarMargin;
            }
            bar.contentAnimator.width = bar.background.width;
            bar.contentAnimator.height = bar.background.height;
            bar.button.height = maxButtonHeight * percOfMax;
            bar.button.width = bar.button.height * buttonAspect;
            var textSize = maxTextSize * percOfMax;
            bar.text.size = textSize;
            bar.text.y = dimensions.height / 2 + 4;
            bar.textContainer.offset.right = 0;
            if (typeof bar.buttonMargin !== 'undefined') {
                maxButtonMargin = bar.buttonMargin;
            }
            var buttonMargin = maxButtonMargin * percOfMax;
            bar.buttonGraphic.y = dimensions.height;
            bar.button2Graphic.y = dimensions.height;
            bar.button3Graphic.y = dimensions.height;
            if (bar.doubleHeight || bar.tripleHeight) {
                bar.button2.height = bar.button.height;
                bar.button2.width = bar.button.width;
                bar.button3.height = bar.button.height;
                bar.button3.width = bar.button.width;
                if (bar.doubleHeight) {
                    bar.button.y = dimensions.height * 0.5;
                    bar.button2.y = dimensions.height * 0.5;
                    bar.button3.y = dimensions.height * 0.5;
                } else if (bar.tripleHeight) {
                    bar.button.y = dimensions.height;
                    bar.button2.y = dimensions.height;
                    bar.button3.y = dimensions.height;
                }
                bar.button.anchor.x = _ThreeUI2.
                default.anchors.center;
                bar.button2.anchor.x = _ThreeUI2.
                default.anchors.center;
                bar.button3.anchor.x = _ThreeUI2.
                default.anchors.center;
                bar.button.x = -(bar.button2.width + buttonMargin * 2);
                bar.button3.x = bar.button2.width + buttonMargin * 2;
                bar.buttonGraphic.x = bar.button.x;
                bar.button3Graphic.x = bar.button3.x;
                if (bar.amountOfButtons === 1) {
                    bar.button.x = 0;
                }
            } else if (bar.button._visible) {
                bar.button.x = buttonMargin + bar.button.width * 0.5;
                bar.textContainer.offset.right = bar.button.x * 2;
            }
            bar.background.startY = bar.background.y;
            if (bar.hasSideGraphic) {
                var aspectRatio = _Game2.
                default.canvas.width / _Game2.
                default.canvas.height;
                var percLandscape = _Utils2.
                default.inverseLerp(window.minAspect, window.maxAspect, aspectRatio);
                bar.sideGraphic.height = THREE.Math.lerp(100, 271, percLandscape);
                bar.sideGraphic.width = THREE.Math.lerp(110, 300, percLandscape);
                bar.content.offset.right = bar.sideGraphic.width + bar.sideGraphic.width * percLandscape;
            }
        };
        var getNotificationBar = function getNotificationBar() {
            if (availableNotificationBars.length <= 0) {
                createNotificationBar();
            }
            var bar = availableNotificationBars.shift();
            Interface.activeNotificationBars.push(bar);
            return bar;
        };
        Interface.freeNotificationBars = function () {
            allNotificationBars.forEach(function (bar) {
                bar.hasSideGraphic = false;
                bar.background.visible = false;
                bar.text.visible = false;
                bar.text.textVerticalAlign = 'center';
                bar.text.lineHeight = 1;
                bar.button.visible = false;
                bar.buttonAttention.visible = false;
                bar.button2.visible = false;
                bar.button3.visible = false;
                bar.buttonGraphic.visible = false;
                bar.sideGraphic.visible = false;
                bar.buttonGraphic.pivot.x = 0.5;
                bar.buttonGraphic.anchor.x = _ThreeUI2.
                default.anchors.center;
                bar.button2Graphic.visible = false;
                bar.button3Graphic.visible = false;
                bar.doubleHeight = false;
                bar.tripleHeight = false;
                bar.buttonMargin = undefined;
                bar.button.x = 0;
                bar.button.y = 0;
                bar.button.pivot.x = 0.5;
                bar.button.anchor.x = _ThreeUI2.
                default.anchors.right;
                bar.button2.y = 0;
                bar.button2.pivot.x = 0.5;
                bar.button3.y = 0;
                bar.button3.pivot.x = 0.5;
                bar.amountOfButtons = 0;
                bar.button.removeEventListeners('click');
                bar.button2.removeEventListeners('click');
                bar.button3.removeEventListeners('click');
            });
            availableNotificationBars = allNotificationBars.slice();
            Interface.activeNotificationBars = [];
            Interface.playButton.navigateOnTop = null;
        };
        Interface.notificationBar = function (text, type, callback, skipDelay) {
            var bar = getNotificationBar();
            bar.background.visible = false;
            bar.type = type;
            if (type === 'rewarded') {
                bar.position = 'top';
                bar.background.color = notificationBarColors.yellow;
                bar.button.setAssetPath('adToCoin.png');
                bar.button.defaultSprite = bar.button.assetPath;
                bar.button.blinkSprite = 'adToCoinBlink.png';
                bar.button.visible = true;
                bar.amountOfButtons = 1;
            } else if (type === 'coinstogo') {
                bar.position = 'bottom';
                bar.background.color = notificationBarColors.red;
            } else if (type === 'unlock') {
                bar.position = 'bottom';
                bar.background.color = notificationBarColors.red;
                bar.button.setAssetPath('CoinToChicken.png');
                bar.button.defaultSprite = bar.button.assetPath;
                bar.button.blinkSprite = 'coinToChickenBlink.png';
                bar.button.visible = true;
                bar.amountOfButtons = 1;
            } else if (type === 'upsell-notification') {
                bar.position = 'middle';
                bar.background.color = notificationBarColors.blue;
                bar.doubleHeight = true;
                bar.button.setAssetPath('button-info.png');
                bar.button.defaultSprite = bar.button.assetPath;
                bar.button.blinkSprite = 'button-info-blink.png';
                bar.button.visible = true;
                bar.hasSideGraphic = true;
                bar.sideGraphic.setAssetPath('sprites/trex.png');
                bar.sideGraphic.visible = true;
                bar.button.onClick(function () {
                    bar.background.visible = false;
                    analytics.track('promotion', 'notification_click');
                    Interface.upsellWasClicked = true;
                    _Storage2.
                    default.setItem('upsellWasClicked', true);
                    _AppStoreInterstitial2.
                    default.lastUpsellScreen = 'game_over_notification';
                    _AppStoreInterstitial2.
                    default.show();
                    Interface.ButtonSound();
                    Interface.setupEndScreenKeyboardNavigation();
                });
                bar.buttonAttention.visible = true;
                bar.amountOfButtons = 1;
            } else if (type === 'tryout-characters') {
                bar.background.color = notificationBarColors.blue;
                bar.tripleHeight = true;
                bar.button.visible = true;
                bar.button2.visible = true;
                bar.button3.visible = true;
                bar.buttonMargin = 30;
                bar.button.setAssetPath('button-tryout.png');
                bar.button2.setAssetPath('button-tryout.png');
                bar.button3.setAssetPath('button-tryout.png');
                bar.buttonGraphic.visible = true;
                bar.button2Graphic.visible = true;
                bar.button3Graphic.visible = true;
                bar.buttonGraphic.setAssetPath('sprites/cat.png');
                bar.button2Graphic.setAssetPath('sprites/duck.png');
                bar.button3Graphic.setAssetPath('sprites/robot.png');
                bar.button.onClick(function () {
                    Interface.ButtonSound();
                    _CharacterTryouts2.
                    default.startTryout('cat', 2);
                    _Game2.
                    default.wipeAndRestart();
                });
                bar.button2.onClick(function () {
                    Interface.ButtonSound();
                    _CharacterTryouts2.
                    default.startTryout('duck', 2);
                    _Game2.
                    default.wipeAndRestart();
                });
                bar.button3.onClick(function () {
                    Interface.ButtonSound();
                    _CharacterTryouts2.
                    default.startTryout('robot', 2);
                    _Game2.
                    default.wipeAndRestart();
                });
                bar.amountOfButtons = 3;
            } else if (type === 'tryout-buy') {
                var characterIndex = Object.keys(_Game2.default.characters).indexOf(_CharacterTryouts2.default.isTryingOut);
                var character = _Carousel2.
                default.characters[_Game2.default.currentWorld][characterIndex];
                text = character.fullName;
                bar.background.color = notificationBarColors.blue;
                bar.doubleHeight = true;
                bar.amountOfButtons = 1;
                bar.button.visible = true;
                bar.buttonGraphic.visible = true;
                bar.buttonGraphic.setAssetPath('sprites/' + character.charName + '.png');
                if (_Carousel2.default.hasEnoughCoinsForCharacter()) {
                    bar.button.setAssetPath('purchase-wide.png');
                    bar.button.onClick(function () {
                        Interface.ButtonSound();
                        _Carousel2.
                        default.roundsSinceBuyingCharacter = 0;
                        _GameSave2.
                        default.ModifyCoins(-_Carousel2.default.charactCost);
                        _GameSave2.
                        default.UnlockCharacter(characterIndex);
                        _CharacterTryouts2.
                        default.characterPreTryouts = character.charName;
                        _CharacterTryouts2.
                        default.resetTryout();
                        _Game2.
                        default.wipeAndRestart();
                    });
                } else {
                    bar.button.setAssetPath('purchase-wide-gray.png');
                }
            } else if (type === 'tryout-rounds-left') {
                bar.background.color = notificationBarColors.red;
            } else if (type === 'tryout-app-store') {
                bar.background.color = notificationBarColors.blue;
                bar.doubleHeight = true;
                bar.button.visible = true;
                bar.button.setAssetPath('button-tryout.png');
                bar.buttonGraphic.visible = true;
                bar.buttonGraphic.setAssetPath('sprites/trex.png');
                bar.button.onClick(function () {
                    Interface.ButtonSound();
                    _CharacterTryouts2.
                    default.startTryout('trex', 2, true);
                    _Game2.
                    default.wipeAndRestart();
                });
                bar.amountOfButtons = 1;
                text = 't-rex';
            } else if (type === 'tryout-app-store-promo') {
                bar.background.color = notificationBarColors.blue;
                bar.doubleHeight = true;
                bar.button.setAssetPath('upsell-android.png');
                bar.button2.setAssetPath('upsell-ios.png');
                bar.button3.setAssetPath('upsell-windows.png');
                bar.button.visible = true;
                bar.button2.visible = true;
                bar.button3.visible = true;
                bar.button.onClick(function () {
                    Interface.ButtonSound();
                    Interface.SellUp(googleUrl);
                });
                bar.button2.onClick(function () {
                    Interface.ButtonSound();
                    Interface.SellUp(appleUrl);
                });
                bar.button3.onClick(function () {
                    Interface.ButtonSound();
                    Interface.SellUp(windowsUrl);
                });
                bar.amountOfButtons = 3;
                bar.buttonGraphic.visible = true;
                bar.buttonGraphic.setAssetPath('sprites/trex.png');
                text = 'play more in the app';
            } else if (type === 'free-gift') {
                bar.position = 'middle';
                bar.background.color = notificationBarColors.orange;
                bar.button.setAssetPath('free-gift.png');
                bar.button.defaultSprite = bar.button.assetPath;
                bar.button.blinkSprite = 'free-gift-orange.png';
                if (callback) {
                    bar.button.visible = true;
                }
            }
            bar.type = type;
            if (text) {
                bar.text.visible = true;
                bar.text.text = text;
            }
            if (typeof callback === 'function') {
                bar.button.onClick(function () {
                    Interface.ButtonSound();
                    callback();
                });
            }
            scaleNotificationBar(bar);
            slideIn(bar, skipDelay);
            return bar;
        };
        Interface.setupEndScreenKeyboardNavigation = function () {
            _Game2.
            default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
            Interface.playButton.navigateOnTop = null;
            Interface.activeButtons = [];
            Interface.activeNotificationBars.forEach(function (bar, idx) {
                if (bar.button.visible) {
                    Interface.activeButtons.push(bar.button);
                }
                if (bar.buttonAttention._visible) {
                    _Game2.
                    default.UI.MoveToFront(bar.buttonAttention);
                }
            });
            Interface.activeButtons.forEach(function (button, idx) {
                if (idx > 0) {
                    button.navigateOnTop = Interface.activeButtons[idx - 1];
                } else {
                    button.navigateOnTop = null;
                }
                if (idx < Interface.activeButtons.length - 1) {
                    button.navigateOnBottom = Interface.activeButtons[idx + 1];
                } else {
                    button.navigateOnBottom = function () {
                        if (Interface.playButton.y > 0 && Interface.playButton.visible) {
                            return Interface.playButton;
                        }
                        return null;
                    };
                    Interface.playButton.navigateOnTop = button;
                }
            });
        };
        Interface.coinsWereModified = function () {
            Interface.activeNotificationBars.forEach(function (bar) {
                if (bar.type === 'coinstogo') {
                    bar.background.visible = false;
                }
            });
        };
        Interface.slideNewText = function (bar, newText) {
            bar.shakeMe = false;
            new TWEEN.Tween(bar.contentAnimator).to({
                    x: bar.background.width
                },
                250).easing(TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
                bar.contentAnimator.x = -bar.background.width;
                bar.button.visible = false;
                bar.text.text = newText;
                scaleNotificationBar(bar);
                new TWEEN.Tween(bar.contentAnimator).to({
                        x: 0
                    },
                    250).easing(TWEEN.Easing.Sinusoidal.InOut).start();
                Interface.focusFirstNotificationBar();
                Interface.setupEndScreenKeyboardNavigation();
            }).start();
        };
        exports.
        default = Interface;
    },
    function (module, exports, __webpack_require__) {
        function getCharByIndex(idx) {
            var ci = 0;
            for (var char in _Game2.
                default.characters) {
                if (ci == idx) {
                    return char;
                } else {
                    ci++;
                }
            }
            return null;
        }

        function GameSave() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Messager = __webpack_require__(23);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        GameSave.specialCharacterToUnlockId = null;
        GameSave.specialCharacterToUnlockName = null;
        GameSave.GetCoins = function () {
            var coins = 0;
            coins = _Storage2.
            default.getItem('coins');
            coins = Math.round(coins);
            if (coins == null || isNaN(coins) || coins < 0) {
                coins = 0;
            }
            return coins;
        };
        GameSave.ModifyCoins = function (delta) {
            var coins = 0;
            coins = _Storage2.
            default.getItem('coins');
            coins = Math.round(coins);
            if (coins == null || isNaN(coins) || coins < 0) {
                coins = 0;
            }
            coins += delta;
            _Storage2.
            default.setItem('coins', coins);
            return coins;
        };
        GameSave.SelectCharacter = function (char) {
            _Storage2.
            default.setItem('selectedChar', char);
        };
        GameSave.GetSelectCharacter = function () {
            return Number(_Storage2.default.getItem('selectedChar'));
        };
        GameSave.GetCurrCharacter = function () {
            var cname = 'chicken';
            var sc = GameSave.GetSelectCharacter();
            if (sc !== null && !isNaN(sc)) {
                cname = getCharByIndex(sc);
            }
            return cname;
        };
        GameSave.GetCharacter = function (char) {
            var character = _Storage2.
            default.getItem(char);
            if (character == "t") {
                return true;
            }
            return false;
        };
        GameSave.UnlockCharacter = function (character) {
            _Game2.
            default.deathsSinceLastCharacterUnlock = 0;
            _Storage2.
            default.setItem(character, "t");
            PokiSDK.happyTime(1.0);
            (0, _Messager.sendGameDataToPlayground)();
            return true;
        };
        GameSave.CheckMoonRockUnlock = function () {};
        GameSave.setSpecialCharacterToUnlock = function (specialCharacterId, specialCharacterName) {
            GameSave.specialCharacterToUnlockId = specialCharacterId;
            GameSave.specialCharacterToUnlockName = specialCharacterName;
            GameSave.UnlockCharacter(specialCharacterId);
        };
        GameSave.showUnlockedSpacialCharacterCharacter = function (specialCharacterId, specialCharacterName) {
            GameSave.specialCharacterToUnlockId = null;
            GameSave.specialCharacterToUnlockName = null;
            setTimeout(function () {
                    GameSave.specialCharacterUnlocked = true;
                    GameSave.SelectCharacter(specialCharacterId);
                    _GumballMachineScreen2.
                    default.showUnlockedSpecialCharacter(specialCharacterName, specialCharacterId);
                },
                500);
        };
        exports.
        default = GameSave;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Utils = {};
        Utils.getQueryVariable = function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return false;
        };
        Utils.getHiddenProp = function () {
            var prefixes = ['webkit', 'moz', 'ms', 'o'];
            if ('hidden' in document) {
                return 'hidden';
            }
            for (var i = 0; i < prefixes.length; i++) {
                if (prefixes[i] + 'Hidden' in document) {
                    return prefixes[i] + 'Hidden';
                }
            }
            return null;
        };
        Utils.isHidden = function () {
            var prop = Utils.getHiddenProp();
            if (!prop) {
                return false;
            }
            return document[prop];
        };
        Utils.hslToRgb = function (h, s, l) {
            var r, g, b;
            if (s == 0) {
                r = g = b = l;
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) {
                        t += 1;
                    }
                    if (t > 1) {
                        t -= 1;
                    }
                    if (t < 1 / 6) {
                        return p + (q - p) * 6 * t;
                    }
                    if (t < 1 / 2) {
                        return q;
                    }
                    if (t < 2 / 3) {
                        return p + (q - p) * (2 / 3 - t) * 6;
                    }
                    return p;
                };
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        };
        Utils.getRandomArbitrary = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        Utils.inverseLerp = function (a, b, x) {
            return (x - a) / (b - a);
        };
        Utils.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        Utils.getRandomFromArray = function (array) {
            return array[Math.floor(Math.random() * array.length)];
        };
        Utils.normalize = function (val, min, max) {
            return (val - min) / (max - min);
        };
        Utils.extractDomainFromURL = function (url) {
            var domain = null;
            try {
                domain = url ? url.match(/^(?:https?:\/\/)?(?:[^@/\n] + @) ? ( ? :www\.) ? ([ ^ :/\n]+)/im)[1] : null;
            } catch (e) {}
            return domain;
        };
        exports.
        default = Utils;
    },
    function (module, exports, __webpack_require__) {
        function importMesh(key, thingToImport, useUnlit, addBoundingCube) {
            if (typeof useUnlit === 'undefined') {
                useUnlit = false;
            }
            var shader = (0, _shader2.default)();
            var geometry;
            var uniforms = THREE.UniformsUtils.merge([THREE.ShaderLib.shadow.uniforms, THREE.UniformsUtils.clone(shader.uniforms)]);
            if (geos[key]) {
                geometry = geos[key].geometry;
                vertices = geos[key].vertices;
                colours = geos[key].colours;
                material = geos[key].material;
            } else {
                if (thingToImport === undefined) {
                    console.warn("[DEBUG] Game is gonna crash, model " + key + " not found.");
                }
                var vertices = new Float32Array(thingToImport.vertices);
                var colours = new Float32Array(thingToImport.colors);
                geometry = new THREE.BufferGeometry();
                geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
                geometry.addAttribute('color', new THREE.Float32BufferAttribute(colours, colours.length !== vertices.length ? 4 : 3));
                geometry.setIndex(thingToImport.faces);
                geometry.computeVertexNormals();
                var material;
                if (useUnlit) {
                    material = new THREE.MeshBasicMaterial({
                        vertexColors: THREE.VertexColors
                    });
                } else {
                    material = new THREE.ShaderMaterial({
                        uniforms: uniforms,
                        vertexColors: THREE.VertexColors,
                        vertexShader: shader.vertexShader,
                        fragmentShader: shader.fragmentShader,
                        side: THREE.DoubleSide,
                        flatShading: true,
                        lights: true
                    });
                }
                geos[key] = {
                    vertices: vertices,
                    colours: colours,
                    geometry: geometry,
                    material: material
                };
            }
            var newObject = new THREE.Mesh(geometry, material);
            if (addBoundingCube) {
                var min = 0,
                    max = 0;
                for (var i = 2; i < vertices.length; i += 3) {
                    if (vertices[i] < min) {
                        min = vertices[i];
                    }
                    if (vertices[i] > max) {
                        max = vertices[i];
                    }
                }
                newObject.height = max - min;
                var min = 0,
                    max = 0;
                for (var i = 0; i < vertices.length; i += 3) {
                    if (vertices[i] < min) {
                        min = vertices[i];
                    }
                    if (vertices[i] > max) {
                        max = vertices[i];
                    }
                }
                newObject.width = max - min;
                var min = 0,
                    max = 0;
                for (var i = 1; i < vertices.length; i += 3) {
                    if (vertices[i] < min) {
                        min = vertices[i];
                    }
                    if (vertices[i] > max) {
                        max = vertices[i];
                    }
                }
                newObject.length = max - min;
            }
            if (key.indexOf('strip-') > 0) {
                newObject.receiveShadow = true;
            } else {
                newObject.castShadow = true;
            }
            return newObject;
        }

        function GetRandomWorldPieceVariation(worldPiece) {
            var worldPieces = _Game2.
            default.currentWorldPieces;
            if (worldPiece === 'coin' || worldPiece === 'red-coin') {
                worldPieces = _CommonWorldPieces2.
                default;
            }
            if (worldPieces[worldPiece].Variations.length == 1) {
                return worldPieces[worldPiece].Variations[0];
            }
            var totalWeighting = 0;
            for (var i = 0; i < worldPieces[worldPiece].Variations.length; i++) {
                if (_Game2.default.CurrentRow >= worldPieces[worldPiece].Variations[i].scoreRequired) {
                    totalWeighting += worldPieces[worldPiece].Variations[i].weight;
                }
            }
            var random = Math.random() * totalWeighting;
            var currentTotal = 0;
            for (var i = 0; i < worldPieces[worldPiece].Variations.length; i++) {
                if (_Game2.default.CurrentRow + 2 >= worldPieces[worldPiece].Variations[i].scoreRequired) {
                    currentTotal += worldPieces[worldPiece].Variations[i].weight;
                    if (currentTotal >= random) {
                        return worldPieces[worldPiece].Variations[i];
                    }
                }
            }
            return worldPieces[worldPiece].Variations[0];
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.GetRandomWorldPieceVariation = GetRandomWorldPieceVariation;
        exports.importMesh = importMesh;
        var _shader = __webpack_require__(29);
        var _shader2 = _interopRequireDefault(_shader);
        var _WorldPieces = __webpack_require__(35);
        var _WorldPieces2 = _interopRequireDefault(_WorldPieces);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _CommonWorldPieces = __webpack_require__(34);
        var _CommonWorldPieces2 = _interopRequireDefault(_CommonWorldPieces);
        var ObjectPooler = function ObjectPooler() {
            this.items = {};
        };
        ObjectPooler.prototype.EnterPool = function (type, item) {
            if (this.items[type] == null) {
                this.items[type] = [];
            }
            if (typeof item.position != "undefined") {
                item.position.set(-60, -60, -60);
                item.visible = false;
            }
            _Game2.
            default.scene.remove(item);
            this.items[type].push(item);
        };
        ObjectPooler.prototype.PoolItemVariation = function (type, variation) {
            var item = this.GetItemVariation(type, variation, true);
            this.EnterPool(type + variation.name, item);
        };
        ObjectPooler.prototype.GetPieceFrames = function (piece) {
            for (var i = 0; i < Object.keys(_Game2.default.worlds).length; ++i) {
                if (AssetLoader.loadedAssets['models/' + Object.keys(_Game2.default.worlds)[i] + '-world.json'] && AssetLoader.loadedAssets['models/' + Object.keys(_Game2.default.worlds)[i] + '-world.json']['models'] && AssetLoader.loadedAssets['models/' + Object.keys(_Game2.default.worlds)[i] + '-world.json']['models'][piece.name.replace(/-/g, '_') + '_optimised']) {
                    return [AssetLoader.loadedAssets['models/' + Object.keys(_Game2.default.worlds)[i] + '-world.json']['models'][piece.name.replace(/-/g, '_') + '_optimised']];
                }
            }
            return [AssetLoader.loadedAssets['models/common-world.json']['models'][piece.name.replace(/-/g, '_') + '_optimised']];
        };
        ObjectPooler.prototype.GetItemVariation = function (type, variation, forceNew) {
            var this$1 = this;
            if (typeof forceNew === 'undefined') {
                forceNew = false;
            }
            var object;
            if (this.items[type + variation.name] == null || this.items[type + variation.name].length == 0 || forceNew) {
                if (!variation.frames) {
                    for (var i = 0; i < _Game2.default.currentWorldPieces[type].Variations.length; ++i) {
                        if (_Game2.default.currentWorldPieces[type].Variations[i].name === variation.name) {
                            _Game2.
                            default.currentWorldPieces[type].Variations[i].frames = variation.frames = this$1.GetPieceFrames(variation);
                            break;
                        }
                    }
                }
                object = importMesh('items[' + type + variation.name, variation.frames[0]);
                object.name = type + variation.name;
                object.poolName = type + variation.name;
                if (variation.name === 'moon_blockingbarrier') {
                    object.material.transparent = true;
                    object.material.uniforms.transparency.value = 0.85;
                }
            } else {
                object = this.items[type + variation.name].pop();
                object.visible = true;
            }
            _Game2.
            default.scene.add(object);
            object.position.set(0, 0, 0);
            return object;
        };
        ObjectPooler.prototype.GetItemOfType = function (type) {
            var this$1 = this;
            var worldPieces = _Game2.
            default.currentWorldPieces;
            if (type === 'coin' || type === 'red-coin') {
                worldPieces = _CommonWorldPieces2.
                default;
            }
            var randomVariation = GetRandomWorldPieceVariation(type);
            var object;
            if (this.items[type + randomVariation.name] == null || this.items[type + randomVariation.name].length == 0) {
                if (!randomVariation.frames) {
                    for (var i = 0; i < worldPieces[type].Variations.length; ++i) {
                        if (worldPieces[type].Variations[i].name === randomVariation.name) {
                            worldPieces[type].Variations[i].frames = randomVariation.frames = this$1.GetPieceFrames(randomVariation);
                            break;
                        }
                    }
                }
                object = importMesh('items[' + type + randomVariation.name, randomVariation.frames[0]);
                object.name = type + randomVariation.name;
                object.poolName = type + randomVariation.name;
                if (type.includes('space') && !type.includes('space-blocking') && !type.includes('space-vehicle-car')) {}
                if (randomVariation.name === 'moon_blockingbarrier') {
                    object.material.transparent = true;
                    object.material.uniforms.transparency.value = 0.85;
                }
            } else {
                object = this.items[type + randomVariation.name].shift();
                object.visible = true;
            }
            _Game2.
            default.scene.add(object);
            object.position.set(0, 0, 0);
            for (var i = 0; i < worldPieces[type].Variations.length; ++i) {
                if (worldPieces[type].Variations[i].holes) {
                    object.holes = worldPieces[type].Variations[i].holes;
                }
            }
            return object;
        };
        var geos = [];
        exports.
        default = ObjectPooler;
    },
    function (module, exports, __webpack_require__) {
        function Carousel() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _CharacterTryouts = __webpack_require__(17);
        var _CharacterTryouts2 = _interopRequireDefault(_CharacterTryouts);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _ObjectPooler = __webpack_require__(5);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _LoadingBar = __webpack_require__(15);
        var _LoadingBar2 = _interopRequireDefault(_LoadingBar);;
        Carousel.characters = {};
        Carousel.characterModels = [];
        Carousel.focus = 0;
        Carousel.banners = [];
        Carousel.bannerFocus = 0;
        Carousel.inputFocus = 'characters';
        Carousel.initialWorld;
        Carousel.loadingBar = null;
        var startRotation = 0.9;
        Carousel.duplicatesEnabled = false;
        Carousel.init = function () {
            if (!window.isMobile && !window.mouseDisabled) {
                document.body.addEventListener('click', this.processClick.bind(this));
                this.raycaster = new THREE.Raycaster();
            }
            if (!Carousel.isLoaded) {
                Carousel.characterModels = [];
                var numModelsAdded = 0;
                for (var idx = 0; idx < Object.keys(Carousel.characters).length; ++idx) {
                    for (var itr = 0; itr < Carousel.characters[Object.keys(Carousel.characters)[idx]].length; itr++) {
                        var character = (0, _ObjectPooler.importMesh)('Carousel.characters[' + Object.keys(Carousel.characters)[idx] + '][' + itr, Carousel.characters[Object.keys(Carousel.characters)[idx]][itr]);
                        Carousel.characterModels[numModelsAdded] = character;
                        Carousel.characterModels[numModelsAdded].world = Carousel.characters[Object.keys(Carousel.characters)[idx]][itr].world;
                        Carousel.characterModels[numModelsAdded].name = Carousel.characters[Object.keys(Carousel.characters)[idx]][itr].charName;
                        if (Carousel.characters[Object.keys(Carousel.characters)[idx]][itr].special) {
                            Carousel.characterModels[numModelsAdded].material.uniforms.GREY_COLOR.value = new THREE.Vector3(0.0, 0.0, 0.0);
                        }
                        numModelsAdded++;
                    }
                }
            }
            Carousel.loadingBar = new _LoadingBar2.
            default();
            Carousel.loadingBar.chickenSrc = AssetLoader.getAssetById('sprites/chicken.png').src;
            AssetLoader.progressListeners.push(Carousel.loadingBar.setProgress.bind(Carousel.loadingBar));
        };
        Carousel.prepareCharacters = function () {
            Carousel.characters = [];
            for (var char in _Game2.
                default.characters) {
                if (_Game2.default.characters.hasOwnProperty(char)) {
                    if (Carousel.characters[_Game2.default.characters[char].world] === undefined) {
                        Carousel.characters[_Game2.default.characters[char].world] = [];
                    }
                    if (!_Game2.default.characters[char].mesh) {
                        continue;
                    }
                    Carousel.characters[_Game2.default.characters[char].world].push(_Game2.default.characters[char].mesh);
                    _Game2.
                    default.characters[char].mesh.charName = char;
                    _Game2.
                    default.characters[char].mesh.fullName = _Localisation2.
                    default.GetString(char);
                    _Game2.
                    default.characters[char].mesh.world = _Game2.
                    default.characters[char].world;
                    _Game2.
                    default.characters[char].mesh.special = _Game2.
                    default.characters[char].special;
                }
            }
        };
        Carousel.hasEnoughCoinsForCharacter = function () {
            return _GameSave2.
            default.GetCoins() >= Carousel.charactCost;
        };
        Carousel.HowManyUnlocked = function () {
            var unlocked = {
                number: 0,
                all: true
            };
            var index = 0;
            Object.keys(_Game2.default.characters).forEach(function (key) {
                if (_Game2.default.characters[key].world) {
                    var data = _Game2.
                    default.characters[key];
                    if (key === 'chicken' || _GameSave2.default.GetCharacter(index)) {
                        unlocked.number++;
                    } else if (!data.locked && !data.special) {
                        unlocked.all = false;
                    }
                    index++;
                }
            });
            return unlocked;
        };
        Carousel.GetRandomCharacterCandidates = function () {
            var newCandidates = [];
            var duplicateCandidates = [];
            Object.keys(_Game2.default.characters).forEach(function (key, idx) {
                var character = _Game2.
                default.characters[key];
                if (character.special) {
                    return;
                }
                if (!character.world) {
                    return;
                }
                if (!character.mesh) {
                    return;
                }
                if (character.locked) {
                    return;
                }
                if (idx === 0) {
                    return;
                }
                if (idx === 5) {
                    return;
                }
                if (!_GameSave2.default.GetCharacter(idx)) {
                    newCandidates.push({
                        char: character,
                        idx: idx,
                        hasCharacter: false
                    });
                } else {
                    duplicateCandidates.push({
                        char: character,
                        idx: idx,
                        hasCharacter: true
                    });
                }
            });
            if (!this.duplicatesEnabled) {
                return newCandidates;
            }
            if (duplicateCandidates.length === 0) {
                return newCandidates;
            }
            var hasBeenGivenForcedDuplicate = _Storage2.
            default.getItem('hasbeengivenduplicate');
            if (duplicateCandidates.length === 1 && !hasBeenGivenForcedDuplicate) {
                return duplicateCandidates;
            } else {
                return newCandidates;
            }
            var chanceForNew = 1 / (Object.keys(_Game2.default.characters).length - newCandidates.length - 1) * 1.5;
            if (Math.random() <= chanceForNew) {
                return newCandidates;
            } else {
                return duplicateCandidates;
            }
        };
        Carousel.UnlockRandomCharacter = function () {
            var candidates = Carousel.GetRandomCharacterCandidates();
            var toUnlock = _Utils2.
            default.getRandomFromArray(candidates);
            _GameSave2.
            default.ModifyCoins(-Carousel.charactCost);
            _GameSave2.
            default.UnlockCharacter(toUnlock.idx);
            Carousel.roundsSinceBuyingCharacter = 0;
            return toUnlock;
        };
        Carousel.refreshCharacters = function (world) {
            for (var i = 0; i < Carousel.characterModels.length; ++i) {
                _Game2.
                default.scene.remove(Carousel.characterModels[i]);
            }
            if (world !== undefined) {
                Carousel.worldSelected = world;
            }
            if (AssetLoader.areCharactersLoaded(Carousel.worldSelected)) {
                if (Carousel.characters[world] !== undefined) {
                    var i = 0;
                    for (var itr = 0; itr < Carousel.characterModels.length; itr++) {
                        if (Carousel.characterModels[itr].world === Carousel.worldSelected) {
                            Carousel.characterModels[itr].position.set(0 + i * 2, 99, -2);
                            if (Carousel.characterModels[itr].name === 'space_chicken' && Carousel.characterModels[itr].children.length === 0) {
                                var glass = (0, _ObjectPooler.importMesh)('Carousel.characters[undefined][1', Carousel.characters[undefined][1]);
                                glass.scale.set(1.01, 1.01, 1.01);
                                glass.material.transparent = true;
                                glass.material.uniforms.transparency.value = 0.7;
                                glass.material.uniforms.saturation.value = 1.0;
                                Carousel.characterModels[itr].add(glass);
                            }
                            _Game2.
                            default.scene.add(Carousel.characterModels[itr]);
                            i++;
                        }
                    }
                    Carousel.focus = 0;
                    Carousel.text.text = Carousel.characters[Carousel.worldSelected][Carousel.focus].fullName.toUpperCase();
                    if (!_GameSave2.default.GetCharacter(Carousel.focus)) {
                        Carousel.text.color = '#dddddd';
                    } else {
                        Carousel.text.color = '#ffffff';
                    }
                    _AppStoreInterstitial2.
                    default.hide();
                } else {
                    _AppStoreInterstitial2.
                    default.show(true);
                }
            } else {
                if (Carousel.worldSelected !== 'piffle') {
                    Carousel.loadingBar.show();
                    Carousel.select.visible = false;
                    AssetLoader.loadCharacters(Carousel.worldSelected,
                        function () {
                            _Game2.
                            default.initCharacters();
                            Carousel.prepareCharacters();
                            Carousel.prepareModels();
                            _GumballMachineScreen2.
                            default.prepareCharacterModels();
                            Carousel.refreshCharacters(Carousel.currentWorld);
                            Carousel.select.visible = true;
                        });
                    Carousel.loadingBar.enteredFinalLoadingPhase();
                } else {
                    _AppStoreInterstitial2.
                    default.show(true);
                }
            }
            _Game2.
            default.camera.position.set(0.0, 105.25858, 10.41098);
            _Game2.
            default.camera.rotation.set(-Math.PI / 8, 0, 0, 'YXZ');
        };
        Carousel.prepareModels = function () {
            Carousel.characterModels = [];
            var numModelsAdded = 0;
            for (var idx = 0; idx < Object.keys(Carousel.characters).length; ++idx) {
                for (var itr = 0; itr < Carousel.characters[Object.keys(Carousel.characters)[idx]].length; itr++) {
                    var character = (0, _ObjectPooler.importMesh)('Carousel.characters[' + Object.keys(Carousel.characters)[idx] + '][' + itr, Carousel.characters[Object.keys(Carousel.characters)[idx]][itr]);
                    Carousel.characterModels[numModelsAdded] = character;
                    Carousel.characterModels[numModelsAdded].world = Carousel.characters[Object.keys(Carousel.characters)[idx]][itr].world;
                    Carousel.characterModels[numModelsAdded].name = Carousel.characters[Object.keys(Carousel.characters)[idx]][itr].charName;
                    if (Carousel.characters[Object.keys(Carousel.characters)[idx]][itr].special) {
                        Carousel.characterModels[numModelsAdded].material.uniforms.GREY_COLOR.value = new THREE.Vector3(0.0, 0.0, 0.0);
                    }
                    numModelsAdded++;
                }
            }
            for (var itr = 0; itr < Carousel.characterModels.length; itr++) {
                if (!_GameSave2.default.GetCharacter(itr)) {
                    Carousel.characterModels[itr].material.uniforms.saturation.value = 0;
                }
            }
        };
        Carousel.Show = function () {
            _Game2.
            default.ambientLight.color = new THREE.Color(0.5, 0.5, 0.7);
            for (var i = 0; i < Carousel.characterModels.length; ++i) {
                _Game2.
                default.scene.remove(Carousel.characterModels[i]);
            }
            Carousel.initialWorld = _Game2.
            default.currentWorld;
            Carousel.worldSelected = _Game2.
            default.currentWorld;
            _Game2.
            default.audioManager.stopAllSounds();
            _Interface2.
            default.CurrentScreen = "selectingCharacter";
            _Interface2.
            default.hintContainer.visible = false;
            _Interface2.
            default.hideLogo(true);
            var length = Carousel.characterModels.length;
            for (var i = 0; i < length; i++) {
                Carousel.characterModels[i].rotation.y = startRotation;
            }
            _Game2.
            default.camera.position.set(0.0, 105.25858, 10.41098);
            _Game2.
            default.camera.rotation.set(-Math.PI / 8, 0, 0, 'YXZ');
            _Storage2.
            default.setItem("hasSeenCarousel", "true");
            _Game2.
            default.LoadCarousel();
            if (!Carousel.isLoaded) {
                Carousel.isLoaded = true;
                Carousel.prepareModels();
                var world_idx;
                for (var i = 0; i < Object.keys(_Game2.default.worlds).length; ++i) {
                    var banner = _Game2.
                    default.UI.createSpriteFromSheet(_Game2.default.worlds[Object.keys(_Game2.default.worlds)[i]].banner, 'sprites/interface.png', 'sprites/interface.json');
                    banner.pivot = {
                        x: 0.5,
                        y: 0
                    };
                    banner.x = i * 256;
                    banner.y = 10;
                    banner.visible = true;
                    banner.alpha = 1;
                    banner.rotation = 0;
                    banner.anchor.x = _ThreeUI2.
                    default.anchors.center;
                    banner.anchor.y = _ThreeUI2.
                    default.anchors.top;
                    banner.world = Object.keys(_Game2.default.worlds)[i];
                    var bannerText = _Game2.
                    default.UI.createText(_Game2.default.worlds[Object.keys(_Game2.default.worlds)[i]].numCharactersUnlocked + '/' + _Game2.default.worlds[Object.keys(_Game2.default.worlds)[i]].numCharacters, 20, 'EditUndoBrk', '#ffffff');
                    bannerText.parent = banner;
                    bannerText.anchor.x = _ThreeUI2.
                    default.anchors.right;
                    bannerText.anchor.y = _ThreeUI2.
                    default.anchors.bottom;
                    bannerText.textAlign = 'right';
                    bannerText.x += 5;
                    bannerText.y += 5;
                    if (bannerText === '0/0') {
                        bannerText = '';
                    }
                    banner.text = bannerText;
                    Carousel.banners.push(banner);
                    world_idx = Object.keys(_Game2.default.worlds)[i];
                    banner.onClick(function () {
                        Carousel.inputFocus = 'worlds';
                        Carousel.Navigate(Carousel.banners.indexOf(this) - Carousel.bannerFocus);
                        if (Carousel.worldSelected !== 'piffle') {
                            Carousel.inputFocus = 'characters';
                        }
                        TWEEN.remove(Carousel.banners[Carousel.bannerFocus].tween);
                    }.bind(banner));
                }
            }
            Carousel.text = _Game2.
            default.UI.createText(Carousel.characters[Carousel.worldSelected][Carousel.focus].fullName.toUpperCase(), 48, 'EditUndoBrk', '#ffffff');
            Carousel.text.y = 200;
            Carousel.text.anchor.x = _ThreeUI2.
            default.anchors.center;
            Carousel.text.anchor.y = _ThreeUI2.
            default.anchors.top;
            Carousel.text.textAlign = 'center';
            Carousel.select = _Game2.
            default.UI.createSpriteFromSheet('play-wide.png', 'sprites/interface.png', 'sprites/interface.json');
            Carousel.select.x = 0;
            Carousel.select.y = 10;
            Carousel.select.rotation = 0;
            Carousel.select.alpha = 1;
            Carousel.select.pivot.x = 0.5;
            Carousel.select.pivot.y = 1;
            Carousel.select.anchor.x = _ThreeUI2.
            default.anchors.center;
            Carousel.select.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Carousel.select.onClick(Carousel.SelectCharacter);
            Carousel.select.defaultSprite = Carousel.select.assetPath;
            Carousel.select.blinkSprite = 'play-wide-blink.png';
            Carousel.select.width = 158;
            Carousel.select.height = 84;
            Carousel.showUpsell = _Game2.
            default.UI.createSpriteFromSheet('button-info.png', 'sprites/interface.png', 'sprites/interface.json');
            Carousel.showUpsell.x = 0;
            Carousel.showUpsell.y = 10;
            Carousel.showUpsell.visible = false;
            Carousel.showUpsell.rotation = 0;
            Carousel.showUpsell.alpha = 1;
            Carousel.showUpsell.pivot.x = 0.5;
            Carousel.showUpsell.pivot.y = 1;
            Carousel.showUpsell.anchor.x = _ThreeUI2.
            default.anchors.center;
            Carousel.showUpsell.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            Carousel.showUpsell.onClick(Carousel.btnShowUpsellCallback);
            Carousel.showUpsell.defaultSprite = Carousel.showUpsell.assetPath;
            Carousel.showUpsell.blinkSprite = 'button-info-blink.png';
            Carousel.showUpsell.width = 158;
            Carousel.showUpsell.height = 84;
            Carousel.attention = _Game2.
            default.UI.createSpriteFromSheet('attention.png', 'sprites/interface.png', 'sprites/interface.json');
            Carousel.attention.parent = Carousel.showUpsell;
            Carousel.attention.anchor.x = _ThreeUI2.
            default.anchors.right;
            Carousel.attention.anchor.y = _ThreeUI2.
            default.anchors.top;
            Carousel.attention.x = 10;
            Carousel.attention.y = -5;
            var notInMachineText = _Game2.
            default.UI.createText(_Localisation2.default.GetString("not-available-as-prize"), 24, 'EditUndoBrk', '#ffffff');
            notInMachineText.parent = Carousel.showUpsell;
            notInMachineText.y = -65;
            notInMachineText.anchor.x = _ThreeUI2.
            default.anchors.center;
            notInMachineText.anchor.y = _ThreeUI2.
            default.anchors.top;
            notInMachineText.textAlign = 'center';
            notInMachineText.lineHeight = 1.2;
            Carousel.backButton = _Game2.
            default.UI.createSpriteFromSheet('smallBack.png', 'sprites/interface.png', 'sprites/interface.json');
            Carousel.backButton.width = 16 * 4;
            Carousel.backButton.height = 16 * 4;
            Carousel.backButton.x = 10;
            Carousel.backButton.y = 10;
            Carousel.backButton.pivot = {
                x: 0,
                y: 0
            };
            Carousel.backButton.onClick(function () {
                AssetLoader.lastRequestedWorld = Carousel.initialWorld;
                _Game2.
                default.SetWorld(Carousel.initialWorld);
                Carousel.close();
            });
            Carousel.backButton.defaultSprite = Carousel.backButton.assetPath;
            Carousel.backButton.blinkSprite = 'smallBack-blink.png';
            if (!_GameSave2.default.GetCharacter(0)) {
                _GameSave2.
                default.UnlockCharacter(0);
            }
            if (!_GameSave2.default.GetCharacter(5)) {
                _GameSave2.
                default.UnlockCharacter(5);
            }
            Carousel.select.navigateOnTop = function () {
                if (Carousel.inputFocus != 'worlds') {
                    Carousel.inputFocus = 'worlds';
                    _Game2.
                    default.UI.MoveToFront(Carousel.banners[Carousel.bannerFocus]);
                    _Game2.
                    default.UI.MoveToFront(Carousel.banners[Carousel.bannerFocus].text);
                    TWEEN.remove(Carousel.banners[Carousel.bannerFocus].tween);
                    Carousel.banners[Carousel.bannerFocus].tween = new TWEEN.Tween(Carousel.banners[Carousel.bannerFocus]).to({
                            width: 300,
                            height: 153
                        },
                        500).easing(TWEEN.Easing.Quartic.Out).repeat(Infinity).yoyo(true).start();
                    _Game2.
                    default.UI.MoveToFront(_Interface2.default.coinText);
                    _Game2.
                    default.UI.MoveToFront(_Interface2.default.coinIcon);
                }
            };
            Carousel.select.navigateOnBottom = function () {
                if (Carousel.inputFocus != 'characters' && Carousel.characters[Carousel.worldSelected] !== undefined) {
                    _KeyboardUIControls2.
                    default.setFocus(Carousel.select);
                    Carousel.inputFocus = 'characters';
                    for (var i = 0; i < Carousel.banners.length; ++i) {
                        TWEEN.remove(Carousel.banners[i].tween);
                        Carousel.banners[i].tween = new TWEEN.Tween(Carousel.banners[i]).to({
                                width: 256,
                                height: 121
                            },
                            100).easing(TWEEN.Easing.Quartic.Out).start();
                    }
                    _Game2.
                    default.UI.MoveToFront(_Interface2.default.coinText);
                    _Game2.
                    default.UI.MoveToFront(_Interface2.default.coinIcon);
                }
            };
            Carousel.backButton.navigateOnBottom = function () {
                this.showBottomNavigationKeyboardHint();
                if (Carousel.select._visible) {
                    return Carousel.select;
                } else if (Carousel.showUpsell._visible) {
                    return Carousel.showUpsell;
                }
            }.bind(this);
            if (_CharacterTryouts2.default.isTryingOut) {
                Carousel.focus = Object.keys(_Game2.default.characters).indexOf(_CharacterTryouts2.default.isTryingOut);
            } else {
                Carousel.focus = _GameSave2.
                default.GetSelectCharacter();
            }
            if (Carousel.focus === null) {
                Carousel.focus = 0;
            }
            Carousel.text.text = _Game2.
            default.characters[Object.keys(_Game2.default.characters)[Carousel.focus]].mesh.fullName.toUpperCase();
            Carousel.select.visible = true;
            Carousel.backButton.visible = true;
            Carousel.text.visible = true;
            _Interface2.
            default.coinText.visible = true;
            _Interface2.
            default.coinIcon.visible = true;
            _Game2.
            default.refreshUnlockedCharactersNumber();
            Carousel.banners.forEach(function (banner) {
                banner.visible = true;
                banner.text.text = _Game2.
                default.worlds[banner.world].numCharactersUnlocked + '/' + _Game2.
                default.worlds[banner.world].numCharacters;
            });
            Carousel.ButtonScaleSet();
            _Game2.
            default.camera.position.x = 0;
            if (_Localisation2.default.userLang !== 'en') {
                Carousel.text.size = 32;
            }
            _KeyboardUIControls2.
            default.setFocus(Carousel.select);
            _Game2.
            default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
            _Game2.
            default.UI.MoveToFront(Carousel.attention);
            _Game2.
            default.UI.MoveToFront(_Interface2.default.coinText);
            _Game2.
            default.UI.MoveToFront(_Interface2.default.coinIcon);
            _KeyboardHint2.
            default.show('char-select');
            this.showBottomNavigationKeyboardHint();
            Carousel.refreshCharacters(Carousel.worldSelected);
            for (var i = 0; i < Carousel.banners.length; ++i) {
                if (Carousel.banners[i].world === Carousel.worldSelected) {
                    Carousel.inputFocus = 'worlds';
                    Carousel.Navigate(i - Carousel.bannerFocus, false);
                    Carousel.inputFocus = 'characters';
                    _KeyboardUIControls2.
                    default.setFocus(Carousel.select);
                    break;
                }
            }
        };
        Carousel.showBottomNavigationKeyboardHint = function () {
            if (Carousel.banners[Carousel.bannerFocus].world === 'piffle') {
                return;
            }
            if (this.focus === 0) {
                _KeyboardHint2.
                default.
                switch('char-select-left-edge');
            } else if (this.focus === Carousel.characters[Carousel.worldSelected].length - 1) {
                _KeyboardHint2.
                default.
                switch('char-select-right-edge');
            } else {
                _KeyboardHint2.
                default.
                switch('char-select');
            }
        };
        Carousel.calcButtonsWidth = function () {
            return Carousel.btnLeft.width + Carousel.btnLeft.x * 2 + Carousel.select.width + Carousel.btnRight.x * 2;
        };
        var carouselBtnScale = 1.0;
        Carousel.ButtonScaleSet = function () {
            if (!Carousel.btnLeft) {
                return;
            }
            var newScale = 1;
            do {
                Carousel.btnLeft.width = 84 * newScale;
                Carousel.btnLeft.height = 84 * newScale;
                Carousel.btnRight.width = 84 * newScale;
                Carousel.btnRight.height = 84 * newScale;
                Carousel.select.width = 158 * newScale;
                Carousel.select.height = 84 * newScale;
                Carousel.showUpsell.width = 158 * newScale;
                Carousel.showUpsell.height = 84 * newScale;
                newScale -= 0.05;
            } while (Carousel.calcButtonsWidth() > _Game2.default.UI.width);
        };
        Carousel.close = function () {
            for (var i = 0; i < Carousel.characterModels.length; ++i) {
                _Game2.
                default.scene.remove(Carousel.characterModels[i]);
            }
            _Interface2.
            default.ButtonSound();
            _Interface2.
            default.showMain();
            _AppStoreInterstitial2.
            default.hide();
            if (Carousel.select && Carousel.backButton && Carousel.banners && Carousel.text && Carousel.showUpsell) {
                Carousel.select.visible = false;
                Carousel.backButton.visible = false;
                Carousel.banners.forEach(function (banner) {
                    banner.visible = false;
                });
                Carousel.text.visible = false;
                Carousel.showUpsell.visible = false;
            }
            _Game2.
            default.configureCameras();
            _Interface2.
            default.CurrentScreen = 'main';
            _Game2.
            default.playerController.player.material.uniforms.saturation.value = 1;
        };
        Carousel.SelectCharacter = function () {
            if (_AppStoreInterstitial2.default.isVisible()) {
                return;
            }
            var characterIsTryout = Carousel.characters[Carousel.worldSelected][Carousel.focus].charName === _CharacterTryouts2.
            default.isTryingOut;
            var charIdx = Object.keys(_Game2.default.characters).indexOf(Carousel.characters[Carousel.worldSelected][Carousel.focus].charName);
            if (!_GameSave2.default.GetCharacter(charIdx) && charIdx != 0 && !characterIsTryout) {
                return false;
            }
            _Interface2.
            default.showInterstitial(function () {
                AssetLoader.lastRequestedWorld = Carousel.worldSelected;
                _Game2.
                default.SetWorld(Carousel.worldSelected);
                _Game2.
                default.wipeAndRestart();
                var character;
                if (Carousel.characters[Carousel.worldSelected][Carousel.focus].charName === "space_chicken_carousel") {
                    character = (0, _ObjectPooler.importMesh)('Carousel.characters[undefined][0', Carousel.characters[undefined][0], false, true);
                } else {
                    character = (0, _ObjectPooler.importMesh)('Carousel.characters[' + Carousel.worldSelected + '][' + Carousel.focus, Carousel.characters[Carousel.worldSelected][Carousel.focus], false, true);
                }
                character.castShadow = true;
                character.position.set(0, 0, 2);
                _Game2.
                default.playerController.setCharacter(character, Carousel.characters[Carousel.worldSelected][Carousel.focus].charName);
                _Game2.
                default.playerController.Reset();
                _Game2.
                default.takesUserInput = true;
                if (!characterIsTryout) {
                    _CharacterTryouts2.
                    default.resetTryout();
                    _GameSave2.
                    default.SelectCharacter(charIdx);
                }
                Carousel.close();
                return true;
            });
        };
        Carousel.roundsSinceBuyingCharacter = null;
        Carousel.roundEnded = function () {
            if (this.roundsSinceBuyingCharacter !== null) {
                this.roundsSinceBuyingCharacter++;
            }
        };
        Carousel.charactCost = 100;
        Carousel.BuyCharacter = function () {
            if (_GameSave2.default.GetCharacter(Carousel.focus)) {
                return false;
            }
            if (!Carousel.hasEnoughCoinsForCharacter()) {
                return false;
            } else {
                Carousel.roundsSinceBuyingCharacter = 0;
                _GameSave2.
                default.ModifyCoins(-Carousel.charactCost);
                if (!Carousel.hasEnoughCoinsForCharacter()) {
                    Carousel.buy.setAssetPath('purchase-wide-gray.png');
                }
                _GameSave2.
                default.UnlockCharacter(Carousel.focus);
                Carousel.text.color = '#fff';
                Carousel.characterModels[Carousel.focus].material.uniforms.saturation.value = 1;
                Carousel.CheckAvailability();
                _Interface2.
                default.ButtonSound();
                return true;
            }
        };
        Carousel.Update = function (deltaTime) {
            var idx = 0;
            for (var itr = 0; itr < Carousel.characterModels.length; itr++) {
                if (Carousel.characterModels[itr].world !== Carousel.worldSelected) {
                    continue;
                }
                var model = Carousel.characterModels[itr];
                var newScale;
                if (idx == Carousel.focus && Carousel.inputFocus === "characters") {
                    newScale = THREE.Math.lerp(model.scale.x, 2.2, deltaTime * 5);
                } else {
                    newScale = THREE.Math.lerp(model.scale.x, 1, deltaTime * 5);
                }
                model.scale.set(newScale, newScale, newScale);
                if (_GameSave2.default.GetCharacter(Carousel.characterModels[0].name === "space_chicken" ? itr + 5 : itr)) {
                    model.rotation.set(0, model.rotation.y - 1.0 * deltaTime, 0);
                    Carousel.characterModels[itr].material.uniforms.saturation.value = 1;
                } else if (Carousel.characterModels[itr].world) {
                    model.rotation.y = startRotation;
                    Carousel.characterModels[itr].material.uniforms.saturation.value = 0;
                }
                idx++;
            }
            if (!Carousel.characters[Carousel.worldSelected]) {
                return;
            }
            if (Carousel.focus >= Carousel.characters[Carousel.worldSelected].length) {
                Carousel.focus = Carousel.characters[Carousel.worldSelected].length - 1;
            }
            if (_GameSave2.default.GetCharacter(Carousel.worldSelected === 'space' ? Carousel.focus + 5 : Carousel.focus)) {
                Carousel.select.setAssetPath('play-wide.png');
                Carousel.select.disabled = false;
            } else {
                Carousel.select.setAssetPath('play-wide-gray.png');
                Carousel.select.disabled = true;
            }
        };
        Carousel.processClick = function (event) {
            if (_Interface2.default.CurrentScreen !== 'selectingCharacter') {
                return;
            }
            var bounds = _Game2.
            default.containerRect;
            var mouse = new THREE.Vector2();
            mouse.x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
            mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
            this.raycaster.setFromCamera(mouse, _Game2.default.camera);
            var intersects = this.raycaster.intersectObjects(_Game2.default.scene.children);
            var foundMesh = null;
            intersects.forEach(function (intersected) {
                if (foundMesh) {
                    return;
                }
                var idx = 0;
                Carousel.characterModels.forEach(function (model) {
                    if (foundMesh) {
                        return;
                    }
                    if (model === intersected.object) {
                        foundMesh = idx;
                    } else {
                        if (model.world === Carousel.worldSelected) {
                            idx++;
                        }
                    }
                });
            });
            if (foundMesh === null) {
                return;
            }
            var navigate = foundMesh - this.focus;
            if (navigate !== 0) {
                this.Navigate(navigate);
            }
        };
        var previousFocus;
        Carousel.ProcessTouchStart = function () {
            previousFocus = Carousel.focus;
        };
        var carouselCamTween;
        var TweenCarouselCam = function TweenCarouselCam() {
            var worldX = null;
            var idx = 0;
            for (var i = 0; i < Carousel.banners.length; ++i) {
                if (worldX == null || Math.abs(Carousel.banners[i].x) < Math.abs(worldX)) {
                    worldX = Carousel.banners[i].x;
                    idx = i;
                }
            }
            if (window.isMobile) {
                for (var i = 0; i < Carousel.banners.length; ++i) {
                    var t = new TWEEN.Tween(Carousel.banners[i]).easing(TWEEN.Easing.Sinusoidal.InOut).to({
                            x: Carousel.banners[idx].x < 0.0 ? '+' + Math.abs(Carousel.banners[idx].x) : '-' + Math.abs(Carousel.banners[idx].x)
                        },
                        500).start();
                }
            }
            if (Carousel.focus * 2 === _Game2.default.camera.position.x) {
                return;
            }
            if (carouselCamTween) {
                carouselCamTween.stop();
            }
            var dt = 100 * Math.abs(Carousel.focus * 2 - _Game2.default.camera.position.x);
            carouselCamTween = new TWEEN.Tween(_Game2.default.camera.position).easing(TWEEN.Easing.Sinusoidal.InOut).to({
                    x: Carousel.focus * 2
                },
                dt).start();
        };
        var targetScrollSpeed = 0.01;
        Carousel.ProcessTouchMove = function (dx, posY) {
            if (posY > window.innerHeight / 5) {
                _AppStoreInterstitial2.
                default.hide();
                var minX = 0;
                var maxX = Carousel.characters[Carousel.worldSelected].length * 2 - 1;
                var buffer = 0;
                var scrollSpeed;
                if (_Game2.default.camera.position.x < minX && _Game2.default.camera.position.x > minX - buffer) {
                    scrollSpeed = targetScrollSpeed * 0.5;
                } else if (_Game2.default.camera.position.x > maxX && _Game2.default.camera.position.x < maxX + buffer) {
                    scrollSpeed = targetScrollSpeed * 0.5;
                } else {
                    scrollSpeed = targetScrollSpeed;
                }
                _Game2.
                default.camera.position.x += dx * scrollSpeed * -1;
                _Game2.
                default.camera.position.x = THREE.Math.clamp(_Game2.default.camera.position.x, minX - buffer, maxX + buffer);
                Carousel.focus = Math.round(THREE.Math.clamp(_Game2.default.camera.position.x, 0, Carousel.characterModels.length * 2 - 2) / 2);
                Carousel.CheckAvailability();
                Carousel.text.text = Carousel.characters[Carousel.worldSelected][THREE.Math.clamp(Carousel.focus, 0, Carousel.characters[Carousel.worldSelected].length - 1)].fullName.toUpperCase();
                if (!_GameSave2.default.GetCharacter(Carousel.focus)) {
                    Carousel.text.color = '#dddddd';
                } else {
                    Carousel.text.color = '#ffffff';
                }
            } else {
                var minX = Carousel.banners[0].width * (Carousel.banners.length - 1) * -1.0;
                var maxX = Carousel.banners[0].width * (Carousel.banners.length - 1) - 1.0;
                var nearestWorldToCenter = Carousel.banners[0];
                if (Carousel.banners[0].x + dx < 0.0 && Carousel.banners[0].x + dx > minX) {
                    for (var i = 0; i < Carousel.banners.length; ++i) {
                        Carousel.banners[i].x += dx;
                        if (Math.abs(nearestWorldToCenter.x) > Math.abs(Carousel.banners[i].x)) {
                            nearestWorldToCenter = Carousel.banners[i];
                            Carousel.bannerFocus = i;
                        }
                    }
                }
                if (Carousel.worldSelected !== nearestWorldToCenter.world) {
                    Carousel.refreshCharacters(nearestWorldToCenter.world);
                }
            }
        };
        Carousel.ProcessTouchEnd = function () {
            TweenCarouselCam(Carousel.focus);
        };
        Carousel.Navigate = function (dx) {
            var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (Carousel.inputFocus === 'worlds') {
                _KeyboardUIControls2.
                default.setFocus(Carousel.select);
                var t = Carousel.bannerFocus;
                Carousel.bannerFocus = Math.min(Object.keys(_Game2.default.worlds).length - 1, Math.max(0, Carousel.bannerFocus + dx));
                if (t !== Carousel.bannerFocus) {
                    TWEEN.remove(Carousel.banners[Carousel.bannerFocus].tween);
                    if (animate) {
                        Carousel.banners[Carousel.bannerFocus].tween = new TWEEN.Tween(Carousel.banners[Carousel.bannerFocus]).to({
                                width: 300,
                                height: 153
                            },
                            500).easing(TWEEN.Easing.Quartic.Out).repeat(Infinity).yoyo(true).start();
                    } else {
                        Carousel.inputFocus = 'characters';
                    }
                    TWEEN.remove(Carousel.banners[t].tween);
                    Carousel.banners[t].tween = new TWEEN.Tween(Carousel.banners[t]).to({
                            width: 256,
                            height: 121
                        },
                        100).easing(TWEEN.Easing.Quartic.Out).start();
                    _Game2.
                    default.UI.MoveToFront(Carousel.banners[Carousel.bannerFocus]);
                    _Game2.
                    default.UI.MoveToFront(Carousel.banners[Carousel.bannerFocus].text);
                    TWEEN.remove(Carousel.banners[Carousel.bannerFocus].movementTween);
                    Carousel.banners[Carousel.bannerFocus].movementTween = new TWEEN.Tween(Carousel.banners[Carousel.bannerFocus]).to({
                            x: 0
                        },
                        200).easing(TWEEN.Easing.Quartic.Out).start();
                    for (var i = 0; i < Carousel.banners.length; ++i) {
                        TWEEN.remove(Carousel.banners[i].movementTween);
                        Carousel.banners[i].movementTween = new TWEEN.Tween(Carousel.banners[i]).to({
                                x: 250 * (i - Carousel.bannerFocus)
                            },
                            500).easing(TWEEN.Easing.Quartic.Out).start();
                    }
                    _Game2.
                    default.UI.MoveToFront(_Interface2.default.coinText);
                    _Game2.
                    default.UI.MoveToFront(_Interface2.default.coinIcon);
                    _Game2.
                    default.UI.MoveToFront(Carousel.backButton);
                    Carousel.refreshCharacters(Carousel.banners[Carousel.bannerFocus].world);
                }
                return;
            }
            Carousel.focus = Math.min(Carousel.characters[Carousel.worldSelected].length - 1, Math.max(0, Carousel.focus + dx));
            Carousel.text.text = Carousel.characters[Carousel.worldSelected][Carousel.focus].fullName.toUpperCase();
            if (!_GameSave2.default.GetCharacter(Carousel.focus)) {
                Carousel.text.color = '#dddddd';
            } else {
                Carousel.text.color = '#ffffff';
            }
            Carousel.CheckAvailability();
            TweenCarouselCam(Carousel.focus);
            _AppStoreInterstitial2.
            default.hide(false);
            this.showBottomNavigationKeyboardHint();
        };
        Carousel.btnShowUpsellCallback = function () {};
        Carousel.UpsellClosed = function (moveWorldSelector) {
            Carousel.inputFocus = 'worlds';
            if (moveWorldSelector) {
                Carousel.Navigate(-1, false);
            }
        };
        Carousel.btnLeftCallBack = function () {
            Carousel.Navigate(-1);
        };
        Carousel.btnRightCallBack = function () {
            Carousel.Navigate(1);
        };
        Carousel.CheckAvailability = function () {
            Carousel.select.visible = true;
            Carousel.showUpsell.visible = false;
            if (Carousel.worldSelected === 'piffle') {
                Carousel.select.visible = false;
                Carousel.showUpsell.visible = true;
            }
            if (Carousel.showUpsell._visible) {}
            if (Carousel.select._visible) {
                _KeyboardUIControls2.
                default.setFocus(Carousel.select);
            }
        };
        exports.
        default = Carousel;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _Easing = __webpack_require__(28);
        var _Easing2 = _interopRequireDefault(_Easing);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _ObjectPooler = __webpack_require__(5);
        var _PasrTimer = __webpack_require__(13);
        var _PasrTimer2 = _interopRequireDefault(_PasrTimer);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var meshScalePortrait = 0.7;
        var meshScaleLandscape = 0.7;
        var meshYBasePosition = 197;
        var prizeBallJiggle = 0.1;
        var prizeBallEndPosition;;
        var prizeBallTopExplodeTarget;
        var prizeBallBottomExplodeTarget;
        var vectorOne;
        var prizeBallEndScale;
        var GumballMachineScreen = {};
        GumballMachineScreen.opportunitiesShowedSinceLastWatched = 0;
        GumballMachineScreen.shakeNextBar = false;
        GumballMachineScreen.init = function (ui, canvas, scene, camera, reUsedElements) {
            this.ui = ui;
            this.canvas = canvas;
            this.scene = scene;
            this.camera = camera;
            this.reUsedElements = reUsedElements;
            this.characterModels = [];
            this.targetMachineScale = new THREE.Vector3(1, 1, 1);
            this.updateTargetMachineScale();
            prizeBallEndPosition = new THREE.Vector3(7.5, 6, 7.52);
            prizeBallTopExplodeTarget = new THREE.Vector3(0, 4, 0);
            prizeBallBottomExplodeTarget = new THREE.Vector3(0, -4, 0);
            vectorOne = new THREE.Vector3(1, 1, 1);
            prizeBallEndScale = vectorOne.clone().multiplyScalar(3);
            this.timeToLeverTimer = new _PasrTimer2.
            default(1.5, 0, 1, 0);
            this.timeToJiggleTimer = new _PasrTimer2.
            default(1.5, 0, 1, 3.4);
            this.timeToPrizeEjectTimer = new _PasrTimer2.
            default(5.6, 0, 1, 0);
            this.timeToOpenPrizeTimer = new _PasrTimer2.
            default(7.5, 0, 1, 0);
            this.timeToResetTimer = new _PasrTimer2.
            default(8.5, 0, 1, 0);
            this.leverTimer = new _PasrTimer2.
            default(0, 0.3, 0.1, 0.6);
            this.prizeMoveTimer = new _PasrTimer2.
            default(0, 0, 1.2, 0.7);
            this.prizeBounceTimer = new _PasrTimer2.
            default(0, 0, 0, 0.4);
            this.prizeExplodeTimer = new _PasrTimer2.
            default(0, 0, 0.3, 0.4);
            this.createElements();
            this.createMachine();
            this.prepareCharacterModels();
        };
        GumballMachineScreen.createElements = function () {
            this.backButton = this.ui.createSpriteFromSheet('smallBack.png', 'sprites/interface.png', 'sprites/interface.json');
            this.backButton.width = 16 * 4;
            this.backButton.height = 16 * 4;
            this.backButton.x = 10;
            this.backButton.y = 10;
            this.backButton.pivot = {
                x: 0,
                y: 0
            };
            this.backButton.visible = false;
            this.backButton.defaultSprite = this.backButton.assetPath;
            this.backButton.blinkSprite = 'smallBack-blink.png';
            this.backButton.onClick(function () {
                _Interface2.
                default.ButtonSound();
                this.hide();
                if (this.prevScreen === 'selectingCharacter') {
                    _Carousel2.
                    default.Show();
                }
            }.bind(this));
            this.buyButton = this.ui.createSpriteFromSheet('purchase-wide.png', 'sprites/interface.png', 'sprites/interface.json');
            this.buyButton.width = 158;
            this.buyButton.height = 84;
            this.buyButton.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.buyButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.buyButton.pivot.y = 1;
            this.buyButton.y = 10;
            this.buyButton.visible = false;
            this.buyButton.defaultSprite = this.buyButton.assetPath;
            this.buyButton.blinkSprite = 'purchase-wide-blink.png';
            this.buyButton.onClick(this.buy.bind(this));
            this.buyButton.navigateOnTop = function () {
                if (this.backButton._visible) {
                    return this.backButton;
                }
                return null;
            }.bind(this);
            this.characterNameText = this.ui.createText('', 48, 'EditUndoBrk', '#ffffff');
            this.characterNameText.y = 150;
            this.characterNameText.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.characterNameText.anchor.y = _ThreeUI2.
            default.anchors.top;
            this.characterNameText.textAlign = 'center';
            this.characterNameText.visible = false;
            if (_Localisation2.default.userLang !== 'en') {
                this.characterNameText.size = 32;
            }
            this.playButton = this.ui.createSpriteFromSheet('play-wide.png', 'sprites/interface.png', 'sprites/interface.json');
            this.playButton.width = 158;
            this.playButton.height = 84;
            this.playButton.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.playButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.playButton.pivot.y = 1;
            this.playButton.y = 10;
            this.playButton.visible = false;
            this.playButton.defaultSprite = this.playButton.assetPath;
            this.playButton.blinkSprite = 'play-wide-blink.png';
            this.playButton.navigateOnTop = function () {
                if (this.backButton._visible) {
                    return this.backButton;
                }
                return null;
            }.bind(this);
            this.playButton.onClick(this.playWithNewCharacter.bind(this));
            this.backButton.navigateOnBottom = function () {
                if (this.buyButton._visible) {
                    return this.buyButton;
                }
                if (this.playButton._visible) {
                    return this.playButton;
                }
                return null;
            }.bind(this);
            this.newCharacterText = this.ui.createText('', 48, 'EditUndoBrk', '#fff');
            this.newCharacterText.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.newCharacterText.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.newCharacterText.y = this.playButton.y + this.playButton.height + 20;
            this.newCharacterText.textAlign = 'center';
            this.newCharacterText.visible = false;
            if (_Localisation2.default.userLang !== 'en') {
                this.newCharacterText.size = 32;
            }
            this.flashOverlay = this.ui.createRectangle('#fff');
            this.flashOverlay.stretch.x = true;
            this.flashOverlay.stretch.y = true;
            this.flashOverlay.offset.left = -10;
            this.flashOverlay.offset.top = -10;
            this.flashOverlay.offset.bottom = -10;
            this.flashOverlay.offset.right = -10;
            this.flashOverlay.visible = false;
            this.confettiParent = this.ui.createRectangle('rgba(0,0,0,0)');
            this.confettiParent.stretch.x = true;
            this.confettiParent.stretch.y = true;
            this.confettiParent.visible = false;
            this.flashOutTween = new TWEEN.Tween(this.flashOverlay).delay(200).to({
                    alpha: 0
                },
                200).easing(TWEEN.Easing.Quadratic.InOut);
        };
        GumballMachineScreen.createMachine = function () {
            this.machine = new THREE.Group();
            this.machine.position.set(2.4, meshYBasePosition, -2);
            this.machine.rotation.set(-0.05, -45 * Math.PI / 180, 0);
            this.scene.add(this.machine);
            this.machineBottom = (0, _ObjectPooler.importMesh)('prize_machine_bottom', AssetLoader.loadedAssets['models/common-world.json'].models.prize_machine_bottom_vertex_optimised);
            this.machine.add(this.machineBottom);
            this.machineTop = (0, _ObjectPooler.importMesh)('prize_machine_top', AssetLoader.loadedAssets['models/common-world.json'].models.prize_machine_top_vertex_optimised);
            this.machineTop.material = this.machineTop.material.clone();
            this.machineTop.material.transparent = true;
            this.machineTop.material.uniforms.transparency.value = 0.5;
            this.machineTop.position.y = 3.85;
            this.machineTop.alpha = 0.2;
            this.machine.add(this.machineTop);
            this.handlePivot = new THREE.Group();
            this.handlePivot.position.set(0.1, 2.82, 2.2);
            var handle = (0, _ObjectPooler.importMesh)('prize_machine_handle', AssetLoader.loadedAssets['models/common-world.json'].models.prize_machine_handle_vertex_optimised);
            handle.rotation.y = 90 * Math.PI / 180;
            handle.position.set(0, -.25, .1);
            this.handlePivot.add(handle);
            this.machine.add(this.handlePivot);
            var ballTransforms = [{
                    position: [0.97, 4.75, 0.84],
                    rotation: [0, 10, 0]
                },
                {
                    position: [0.97, 6.2, 1.04],
                    rotation: [0, -100, 0]
                },
                {
                    position: [0.9, 4.75, -1.1],
                    rotation: [0, 75, 0]
                },
                {
                    position: [1, 6.9, -2],
                    rotation: [0, -95, -90]
                },
                {
                    position: [-1, 4.5, 0.84],
                    rotation: [0, 10, 0]
                },
                {
                    position: [-1.3, 6, 1],
                    rotation: [0, -10, 0]
                },
                {
                    position: [-1, 5.8, -1],
                    rotation: [0, -100, 0]
                }
            ];
            this.balls = [];
            ballTransforms.forEach(function (transform) {
                var ball = (0, _ObjectPooler.importMesh)('prize_ball', AssetLoader.loadedAssets['models/common-world.json'].models.prize_ball_vertex_optimised);
                ball.position.set(transform.position[0], transform.position[1], transform.position[2]);
                ball.rotation.set(transform.rotation[0] * Math.PI / 180, transform.rotation[1] * Math.PI / 180, transform.rotation[2] * Math.PI / 180);
                ball.initialPosition = ball.position.clone();
                this.machine.add(ball);
                this.balls.push(ball);
            }.bind(this));
            this.prizeBall = new THREE.Group();
            this.prizeBall.position.set(1.5, 0.5, -0.08);
            this.prizeBall.visible = false;
            this.machine.add(this.prizeBall);
            this.prizeBallTop = (0, _ObjectPooler.importMesh)('prize_ball_top', AssetLoader.loadedAssets['models/common-world.json'].models.prize_ball_top_vertex_optimised);
            this.prizeBallTop.startPosition = this.prizeBallTop.position.clone();
            this.prizeBall.add(this.prizeBallTop);
            prizeBallTopExplodeTarget.add(this.prizeBallTop.startPosition);
            this.prizeBallBottom = (0, _ObjectPooler.importMesh)('prize_ball_bottom', AssetLoader.loadedAssets['models/common-world.json'].models.prize_ball_bottom_vertex_optimised);
            this.prizeBallBottom.startPosition = this.prizeBallBottom.position.clone();
            this.prizeBall.add(this.prizeBallBottom);
            prizeBallBottomExplodeTarget.add(this.prizeBallBottom.startPosition);
            this.prizeBall.startPosition = this.prizeBall.position.clone();
            this.bounceFromPosition = this.prizeBall.position.clone();
            this.bounceFromPosition.x = 0;
        };
        GumballMachineScreen.show = function () {
            _Game2.
            default.ambientLight.color = new THREE.Color(0.5, 0.5, 0.7);
            if (this.visible || !_Carousel2.default.hasEnoughCoinsForCharacter()) {
                return;
            }
            _Game2.
            default.audioManager.stopAllSounds();
            this.visible = true;
            this.prevScreen = _Interface2.
            default.CurrentScreen;
            this.prevCameraZoom = _Game2.
            default.camera.zoom;
            this.prevCameraPosition = _Game2.
            default.camera.position.clone();
            this.prevCameraRotation = _Game2.
            default.camera.rotation.clone();
            this.prevUIVisibilityState = _Game2.
            default.UI.getVisibilityState();
            this.camera.zoom = .8;
            this.camera.updateProjectionMatrix();
            _Interface2.
            default.CurrentScreen = 'gumball';
            this.unlockedCharacter = null;
            this.characterNameText.visible = false;
            this.newCharacterText.visible = false;
            this.playButton.visible = false;
            this.spinCharacter = false;
            this.jiggle = 0;
            this.machine.visible = true;
            this.showMachineParts();
            this.prizeBall.visible = false;
            this.prizeBall.position.set(this.prizeBall.startPosition.x, this.prizeBall.startPosition.y, this.prizeBall.startPosition.z);
            this.prizeBallTop.position.set(this.prizeBallTop.startPosition.x, this.prizeBallTop.startPosition.y, this.prizeBallTop.startPosition.z);
            this.prizeBallBottom.position.set(this.prizeBallBottom.startPosition.x, this.prizeBallBottom.startPosition.y, this.prizeBallBottom.startPosition.z);
            this.prizeBall.scale.setScalar(1);
            _Game2.
            default.camera.position.set(2.388232, 205.25858, 10.41098);
            _Game2.
            default.camera.rotation.set(-Math.PI / 8, 0, 0, 'YXZ');
            this.updateTargetMachineScale();
            this.scaleMachine();
            this.ui.hideAll();
            this.buyButton.visible = true;
            if (!_Interface2.default.tutorialLock) {
                this.backButton.visible = true;
            }
            this.reUsedElements.forEach(function (element) {
                element.visible = true;
            });
            _KeyboardUIControls2.
            default.setFocus(this.buyButton);
            _Game2.
            default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
            _KeyboardHint2.
            default.show('gumball');
        };
        GumballMachineScreen.updateTargetMachineScale = function () {
            if (!this.machine) {
                return;
            }
            var aspectRatio = this.canvas.width / this.canvas.height;
            var percLandscape = _Utils2.
            default.inverseLerp(window.minAspect, window.maxAspect, aspectRatio);
            var scale = THREE.Math.lerp(meshScalePortrait, meshScaleLandscape, percLandscape);
            this.targetMachineScale.setScalar(scale);
        };
        GumballMachineScreen.scaleMachine = function () {
            if (!this.machine) {
                return;
            }
            this.machine.scale.set(this.targetMachineScale.x, this.targetMachineScale.y, this.targetMachineScale.z);
        };
        GumballMachineScreen.showNotificationBar = function (skipDelay) {
            if (!_Carousel2.default.hasEnoughCoinsForCharacter() || _Carousel2.default.HowManyUnlocked().all) {
                return;
            }
            if (this.currentBar && this.currentBar.background._visible) {
                return;
            }
            GumballMachineScreen.opportunitiesShowedSinceLastWatched++;
            analytics.track('prize_machine', 'notification_shown');
            GumballMachineScreen.notificationClickSent = false;
            this.currentBar = _Interface2.
            default.notificationBar(_Localisation2.default.GetString("win-a-prize"), 'unlock',
                function () {
                    if (!GumballMachineScreen.notificationClickSent) {
                        analytics.track('prize_machine', 'notification_click');
                    }
                    GumballMachineScreen.notificationClickSent = true;
                    GumballMachineScreen.opportunitiesShowedSinceLastWatched = 0;
                    GumballMachineScreen.show();
                },
                skipDelay);
            this.currentBar.shakeNextBar = GumballMachineScreen.shakeNextBar;
        };
        GumballMachineScreen.prepareCharacterModels = function () {
            var candidates = _Carousel2.
            default.GetRandomCharacterCandidates();
            var models = [];
            candidates.forEach(function (candidate) {
                if (candidate.char.mesh) {
                    if (candidate.char.world === 'space') {
                        candidate.idx -= _Carousel2.
                        default.characters['original_cast'].length;
                    }
                    var model = (0, _ObjectPooler.importMesh)('Carousel.characters[' + candidate.char.world + '][' + candidate.idx, candidate.char.mesh);
                    model.position.set(2.4, 199, -2);
                    model.rotation.y = 0.9;
                    model.visible = false;
                    model.scale.set(1.2, 1.2, 1.2);
                    _Game2.
                    default.scene.add(model);
                    this.characterModels.push({
                        idx: candidate.idx,
                        world: candidate.char.world,
                        model: model
                    });
                    models.push(model);
                }
            }.bind(this));
        };
        GumballMachineScreen.hideElements = function () {
            if (_Game2.default.currentWorld === 'space') {
                _Game2.
                default.ambientLight.color = new THREE.Color(0.3, 0.3, 0.6);
            }
            this.backButton.visible = false;
            this.buyButton.visible = false;
            this.characterNameText.visible = false;
            this.newCharacterText.visible = false;
            this.playButton.visible = false;
            this.flashOverlay.visible = false;
            this.confettiParent.visible = false;
            this.reUsedElements.forEach(function (element) {
                element.visible = false;
            });
            this.characterModels.forEach(function (character) {
                character.model.visible = false;
            });
            this.machine.visible = true;
        };
        GumballMachineScreen.hide = function () {
            if (this.prevCameraZoom) {
                this.hideElements();
                this.visible = false;
                _Game2.
                default.camera.zoom = this.prevCameraZoom;
                _Game2.
                default.camera.position.set(this.prevCameraPosition.x, this.prevCameraPosition.y, this.prevCameraPosition.z);
                _Game2.
                default.camera.rotation.set(this.prevCameraRotation.x, this.prevCameraRotation.y, this.prevCameraRotation.z, 'YXZ');
                _Game2.
                default.camera.updateProjectionMatrix();
                _Interface2.
                default.CurrentScreen = this.prevScreen;
                _Game2.
                default.UI.setVisibilityState(this.prevUIVisibilityState);
                _Interface2.
                default.setupEndScreenKeyboardNavigation();
            }
        };
        GumballMachineScreen.buy = function () {
            if (!_Carousel2.default.hasEnoughCoinsForCharacter()) {
                return;
            }
            if (!this.buyButton.visible) {
                return;
            }
            _KeyboardHint2.
            default.clearActiveScreen();
            _KeyboardHint2.
            default.hide();
            if (this.currentBar) {
                this.currentBar.background.visible = false;
            }
            if (_Carousel2.default.HowManyUnlocked().number === 1) {
                analytics.track('game_onboarding', 'first_prize_unlocked');
            }
            analytics.track('prize_machine', 'opened');
            _Interface2.
            default.ButtonSound();
            this.buyButton.visible = false;
            this.backButton.visible = false;
            this.timeToLeverTimer.Reset();
            this.timeToJiggleTimer.Reset();
            this.timeToPrizeEjectTimer.Reset();
            this.timeToOpenPrizeTimer.Reset();
            this.timeToResetTimer.Reset();
            for (var i = 0; i < 5; i++) {
                window.setTimeout(function () {
                        _Game2.
                        default.playSfx(_Utils2.default.getRandomFromArray(['prize/SlotMachineInsert', 'prize/Inserting-Coin-Into-Machine-v1', 'prize/Inserting-Coin-Into-Machine-v2', 'prize/Inserting-Coin-Into-Machine-v3', 'prize/Inserting-Coin-Into-Machine-v4', 'prize/coininsert3']));
                    },
                    _Utils2.default.getRandomArbitrary(0, 600));
            }
            _Game2.
            default.playSfx('prize/insert-coin');
            _Game2.
            default.playSfx('prize/counting-of-money-short');
        };
        GumballMachineScreen.update = function (deltaTime) {
            if (this.spinCharacter) {
                this.characterModels.forEach(function (character) {
                    if (character.idx === this.unlockedCharacter.idx) {
                        character.model.rotation.y -= deltaTime;
                    }
                }.bind(this));
            }
            this.timerEvents(deltaTime);
            this.timerAnimations(deltaTime);
        };
        GumballMachineScreen.timerEvents = function (deltaTime) {
            if (this.timeToResetTimer.isFinished()) {
                return;
            }
            this.timeToLeverTimer.Tick(deltaTime);
            this.timeToJiggleTimer.Tick(deltaTime);
            this.timeToPrizeEjectTimer.Tick(deltaTime);
            this.timeToOpenPrizeTimer.Tick(deltaTime);
            this.timeToResetTimer.Tick(deltaTime);
            if (this.timeToJiggleTimer.reachedSustain()) {
                this.jiggle = prizeBallJiggle;
                _Game2.
                default.playSfx('prize/Prize-Wheel');
                _Game2.
                default.playSfx('prize/casinomachine');
            } else if (this.timeToJiggleTimer.isFinished()) {
                this.jiggle = Math.max(0, this.jiggle - deltaTime * 0.2);
            }
            if (this.timeToLeverTimer.reachedSustain()) {
                _Game2.
                default.playSfx('prize/play-slots-machine');
                this.leverTimer.Reset();
            }
            if (this.timeToPrizeEjectTimer.reachedSustain()) {
                _Game2.
                default.playSfx('prize/clickball');
                this.prizeBall.visible = true;
                this.prizeMoveTimer.Reset();
                this.prizeBounceTimer.Reset();
            }
            if (this.timeToOpenPrizeTimer.reachedSustain()) {
                this.prizeExplodeTimer.Reset();
                this.hideMachineParts();
                this.showUnlockedCharacter();
            }
            if (this.timeToResetTimer.reachedSustain()) {
                if (!_Interface2.default.tutorialLock) {
                    this.backButton.visible = true;
                }
                this.playButton.visible = true;
                _KeyboardHint2.
                default.show('gumball');
                _KeyboardUIControls2.
                default.setFocus(this.playButton);
            }
        };
        GumballMachineScreen.timerAnimations = function (deltaTime) {
            if (this.jiggle > 0) {
                this.balls.forEach(function (ball) {
                    var jiggleVector = new THREE.Vector3(_Utils2.default.getRandomArbitrary(-this.jiggle, this.jiggle), _Utils2.default.getRandomArbitrary(-this.jiggle, this.jiggle), _Utils2.default.getRandomArbitrary(-this.jiggle, this.jiggle));
                    var newPosition = ball.initialPosition.clone().add(jiggleVector);
                    ball.position.set(newPosition.x, newPosition.y, newPosition.z);
                }.bind(this));
            }
            if (!this.leverTimer.isFinished()) {
                this.leverTimer.Tick(deltaTime);
                var percLevered = _Easing2.
                default.easeInOutSin(this.leverTimer.value);
                this.handlePivot.rotation.z = percLevered * -90 * Math.PI / 180;
            }
            if (!this.prizeMoveTimer.isFinished() || !this.prizeBounceTimer.isFinished()) {
                this.prizeMoveTimer.Tick(deltaTime);
                this.prizeBounceTimer.Tick(deltaTime);
                var prizeBounce = _Easing2.
                default.easeOutBounce(1 - this.prizeBounceTimer.value);
                var prizeTick = _Easing2.
                default.easeOutQuart(1 - this.prizeMoveTimer.value);
                var bounceMove = this.bounceFromPosition.clone().lerp(this.prizeBall.startPosition, prizeBounce);
                var ballMove = bounceMove.lerp(prizeBallEndPosition, prizeTick);
                this.prizeBall.position.set(ballMove.x, ballMove.y, ballMove.z);
                var newScale = vectorOne.clone().lerp(prizeBallEndScale, prizeTick);
                this.prizeBall.scale.set(newScale.x, newScale.y, newScale.z);
            }
            if (this.prizeExplodeTimer.GetStage() !== 4) {
                this.prizeExplodeTimer.Tick(deltaTime);
                var explodeTick = _Easing2.
                default.easeOutQuart(1 - this.prizeExplodeTimer.value);
                var newTopPosition = this.prizeBallTop.startPosition.clone().lerp(prizeBallTopExplodeTarget, explodeTick);
                var newBottomPosition = this.prizeBallBottom.startPosition.clone().lerp(prizeBallBottomExplodeTarget, explodeTick);
                this.prizeBallTop.position.set(newTopPosition.x, newTopPosition.y, newTopPosition.z);
                this.prizeBallBottom.position.set(newBottomPosition.x, newBottomPosition.y, newBottomPosition.z);
            }
        };
        GumballMachineScreen.hideMachineParts = function () {
            this.machineTop.visible = false;
            this.machineBottom.visible = false;
            this.handlePivot.visible = false;
            this.balls.forEach(function (ball) {
                ball.visible = false;
            });
        };
        GumballMachineScreen.showMachineParts = function () {
            this.machineTop.visible = true;
            this.machineBottom.visible = true;
            this.handlePivot.visible = true;
            this.balls.forEach(function (ball) {
                ball.visible = true;
            });
        };
        GumballMachineScreen.showUnlockedCharacter = function () {
            this.unlockedCharacter = _Carousel2.
            default.UnlockRandomCharacter();
            var numUnlocked = _Carousel2.
            default.HowManyUnlocked().number - 1;
            var unlockedName = _Localisation2.
            default.GetString(Object.keys(_Game2.default.characters)[this.unlockedCharacter.idx]);
            analytics.track('character_unlocked', unlockedName, numUnlocked, numUnlocked);
            PokiSDK.customEvent("unlock", "character", {
                name: unlockedName
            });
            _Game2.
            default.playSfx('prize/UnlockPlain');
            this.flashOverlay.alpha = 1;
            this.flashOverlay.visible = true;
            var characterModel;
            if (_Game2.default.characters[Object.keys(_Game2.default.characters)[this.unlockedCharacter.idx]].world === 'space') {
                this.unlockedCharacter.idx -= _Carousel2.
                default.characters['original_cast'].length;
                var world = 'space';
            } else {
                var world = 'original_cast';
            }
            this.unlockedCharacter.world = world;
            this.characterModels.forEach(function (character) {
                var idx = character.idx;
                if (idx === this.unlockedCharacter.idx) {
                    if (world === character.world) {
                        character.idx = idx;
                        characterModel = character.model;
                    }
                }
            }.bind(this));
            this.characterNameText.text = unlockedName;
            this.characterNameText.visible = true;
            this.newCharacterText.text = this.unlockedCharacter.hasCharacter ? _Localisation2.
            default.GetString('duplicate'):
                _Localisation2.
            default.GetString('new');
            this.newCharacterText.visible = true;
            this.flashOutTween.start();
            characterModel.rotation.y = 0.9;
            characterModel.material.uniforms.saturation.value = 1;
            characterModel.visible = true;
            characterModel.scale.set(0.5, 0.5, 0.5);
            new TWEEN.Tween(characterModel.scale).to({
                    x: 2.5,
                    y: 2.5,
                    z: 2.5
                },
                500).start();
            new TWEEN.Tween(characterModel.rotation).to({
                    y: -15
                },
                2000).easing(TWEEN.Easing.Quadratic.Out).onComplete(function () {
                this.spinCharacter = true;
                new TWEEN.Tween(characterModel.scale).to({
                        x: 2,
                        y: 2,
                        z: 2
                    },
                    500).start();
            }.bind(this)).start();
            if (!this.unlockedCharacter.hasCharacter) {
                _Game2.
                default.playSfx('prize/prizewinner');
                window.setTimeout(this.confettiBlast.bind(this), 200);
            }
        };
        GumballMachineScreen.showUnlockedSpecialCharacter = function (name, idx) {
            var numUnlocked = _Carousel2.
            default.HowManyUnlocked().number - 1;
            var unlockedCharName = name;
            this.unlockedCharacter = _Game2.
            default.characters[unlockedCharName];
            var unlockedName = this.unlockedCharacter.mesh.fullName.toLowerCase().replace(/ +/, '_');
            analytics.track('character_unlocked', unlockedName, numUnlocked, numUnlocked);
            _Game2.
            default.playSfx('prize/UnlockPlain');
            this.flashOverlay.alpha = 1;
            this.flashOverlay.visible = true;
            this.specialCharacterModel = (0, _ObjectPooler.importMesh)('characters[' + unlockedCharName, this.unlockedCharacter.mesh);
            this.unlockedCharacter.idx = idx - _Carousel2.
            default.characters['original_cast'].length;
            this.specialCharacterModel.position.set(_Game2.default.camera.position.x, _Game2.default.camera.position.y, _Game2.default.camera.position.z);
            this.specialCharacterModel.rotation.y = 0.9;
            this.specialCharacterModel.visible = true;
            this.specialCharacterModel.scale.set(1.2, 1.2, 1.2);
            _Game2.
            default.scene.add(this.specialCharacterModel);
            this.characterNameText.text = unlockedName;
            this.characterNameText.visible = true;
            this.flashOutTween.start();
            this.specialCharacterModel.rotation.y = 0.9;
            this.specialCharacterModel.material.uniforms.saturation.value = 1;
            this.specialCharacterModel.visible = true;
            this.specialCharacterModel.scale.set(0.5, 0.5, 0.5);
            new TWEEN.Tween(this.specialCharacterModel.scale).to({
                    x: 2.5,
                    y: 2.5,
                    z: 2.5
                },
                500).start();
            new TWEEN.Tween(this.specialCharacterModel.rotation).to({
                    y: -15
                },
                2000).easing(TWEEN.Easing.Quadratic.Out).onComplete(function () {
                this.spinCharacter = true;
                new TWEEN.Tween(this.specialCharacterModel.scale).to({
                        x: 2,
                        y: 2,
                        z: 2
                    },
                    500).start();
            }.bind(this)).start();
        };
        GumballMachineScreen.playWithNewCharacter = function () {
            _Interface2.
            default.ButtonSound();
            AssetLoader.lastRequestedWorld = this.unlockedCharacter.world;
            if (this.unlockedCharacter.char) {
                var model = (0, _ObjectPooler.importMesh)('Carousel.characters[' + this.unlockedCharacter.world + '][' + this.unlockedCharacter.idx, this.unlockedCharacter.char.mesh, false, true);
            } else {
                var model = (0, _ObjectPooler.importMesh)('Carousel.characters[' + this.unlockedCharacter.world + '][' + this.unlockedCharacter.idx, this.unlockedCharacter.mesh, false, true);
            }
            _Game2.
            default.scene.add(model);
            model.position.set(0, 0, 2);
            if (this.unlockedCharacter.world === 'space') {
                this.unlockedCharacter.idx += _Carousel2.
                default.characters['original_cast'].length;
            }
            _Game2.
            default.playerController.setCharacter(model, _Game2.default.characters[Object.keys(_Game2.default.characters)[this.unlockedCharacter.idx]].mesh.charName);
            _GameSave2.
            default.SelectCharacter(this.unlockedCharacter.idx);
            this.visible = false;
            if (!_GameSave2.default.specialCharacterUnlocked) {
                _Game2.
                default.wipeAndRestart(function () {
                    this.hideElements();
                    _Game2.
                    default.SetWorld(this.unlockedCharacter.world);
                }.bind(this));
            } else {
                this.hideElements();
                _Game2.
                default.SetWorld(this.unlockedCharacter.world);
            }
        };
        GumballMachineScreen.confirm = function () {
            if (this.buyButton.visible) {
                this.buyButton.fireEvent('click');
            } else if (this.playButton.visible) {
                this.playButton.fireEvent('click');
            }
        };
        GumballMachineScreen.resize = function () {
            this.updateTargetMachineScale();
            this.scaleMachine();
        };
        GumballMachineScreen.confettiSize = 20;
        GumballMachineScreen.removeConfetti = function (confetti) {
            this.ui.delete(confetti);
        };
        GumballMachineScreen.confettiBlast = function () {
            var this$1 = this;
            this.confettis = [];
            this.confettiParent.visible = true;
            for (var coinIdx = 0; coinIdx < 50; coinIdx++) {
                var color = _Utils2.
                default.hslToRgb(Math.random(), 1, _Utils2.default.getRandomArbitrary(0.3, 0.7));
                var confetti = this$1.ui.createRectangle('rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')');
                confetti.anchor.x = _ThreeUI2.
                default.anchors.left;
                confetti.anchor.y = _ThreeUI2.
                default.anchors.top;
                confetti.x = _Utils2.
                default.getRandomInt(0, this$1.ui.width);
                confetti.y = -50;
                confetti.height = GumballMachineScreen.confettiSize;
                confetti.width = GumballMachineScreen.confettiSize * 1.2;
                confetti.parent = this$1.confettiParent;
                this$1.confettis.push(confetti);
                var targetX = confetti.x + _Utils2.
                default.getRandomInt(-100, 100);
                var targetY = this$1.ui.height + 50;
                new TWEEN.Tween(confetti).to({
                        x: targetX,
                        y: targetY,
                        rotation: _Utils2.
                        default.getRandomInt(0, 360),
                        width: GumballMachineScreen.confettiSize
                    },
                    1000).easing(TWEEN.Easing.Sinusoidal.InOut).delay(200 * coinIdx - 200 * coinIdx * 0.5 * Math.random()).onUpdate(function () {
                    this.height = this.width;
                }).onComplete(function () {
                    GumballMachineScreen.removeConfetti(this);
                }).start();
            }
        };
        GumballMachineScreen.hideUnlockedSpecialCharacter = function () {
            if (!this.specialCharacterModel || !this.characterNameText) {
                return;
            }
            this.specialCharacterModel.visible = false;
            this.characterNameText.visible = false;
        };
        exports.
        default = GumballMachineScreen;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var KeyboardHint = {};
        KeyboardHint.animateDelay = 0.5;
        KeyboardHint.scale = 5;
        KeyboardHint.hiddenAlpha = 0.35;
        KeyboardHint.animate = [];
        KeyboardHint.animateIdx = 0;
        KeyboardHint.pressedWrongButton = 0;
        KeyboardHint.hiddenThroughConfirmOnScreen = null;
        KeyboardHint.hintReAppearAfterTimeout = 0;
        KeyboardHint.hintConfirmScreenGroupIdx = {
            'main': 0,
            'main-show-more': 0,
            'main-char-select': 0,
            'main-first-play': 1,
            'movement-hint': 2,
            'death-onboarding': 3,
            'gift': 3,
            'gift-given': 3,
            'gumball': 3,
            'death': 3,
            'char-select': 4,
            'char-select-left-edge': 4,
            'char-select-right-edge': 4,
            'char-select-back-button': 4,
            'death-buttons': 5
        };
        KeyboardHint.hintConfirmAmounts = {};
        KeyboardHint.hintConfirmCountedThisScreen = false;
        KeyboardHint.hintConfirmsUntilHide = 2;
        KeyboardHint.init = function () {
            this.createSprites();
            var savedHintConfirmAmounts = _Storage2.
            default.getItem('savedHintConfirmAmounts');
            if (savedHintConfirmAmounts) {
                var parsedAmounts = JSON.parse(savedHintConfirmAmounts);
                Object.keys(parsedAmounts).forEach(function (key) {
                    this.hintConfirmAmounts[key] = parsedAmounts[key];
                }.bind(this));
            }
            if (window.mouseDisabled) {
                document.addEventListener('click',
                    function () {
                        this.keyPressed();
                    }.bind(this));
            }
        };
        KeyboardHint.createSprites = function () {
            var this$1 = this;
            this.keyContainer = _Game2.
            default.UI.createRectangle('rgba(0,0,0,0)');
            this.keyContainer.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.keyContainer.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.keyContainer.visible = false;
            this.emptyKeys = [];
            var lastEmptySpriteOnTop;
            for (var i = 0; i < 8; i++) {
                var topRowKey = _Game2.
                default.UI.createSpriteFromSheet('key-top-row.png', 'sprites/interface.png', 'sprites/interface.json');
                topRowKey.width = topRowKey.width * this$1.scale;
                topRowKey.height = topRowKey.height * this$1.scale;
                topRowKey.x = topRowKey.width * i;
                topRowKey.pivot.x = 0;
                topRowKey.pivot.y = 0;
                topRowKey.smoothing = false;
                topRowKey.parent = this$1.keyContainer;
                lastEmptySpriteOnTop = topRowKey;
                this$1.emptyKeys.push(topRowKey);
            }
            this.cursorUp = _Game2.
            default.UI.createSpriteFromSheet('cursor-up.png', 'sprites/interface.png', 'sprites/interface.json');
            this.cursorUp.width = this.cursorUp.width * this.scale;
            this.cursorUp.height = this.cursorUp.height * this.scale;
            this.cursorUp.parent = this.keyContainer;
            this.cursorUp.pivot.x = 0;
            this.cursorUp.pivot.y = 0;
            this.cursorUp.smoothing = false;
            this.cursorUp.x = lastEmptySpriteOnTop.x + lastEmptySpriteOnTop.width;
            this.cursorUp.defaultSprite = 'cursor-up-active.png';
            this.cursorUp.animateSprite = 'cursor-up.png';
            var topRowRightKey = _Game2.
            default.UI.createSpriteFromSheet('key-top-row-right.png', 'sprites/interface.png', 'sprites/interface.json');
            topRowRightKey.width = topRowRightKey.width * this.scale;
            topRowRightKey.height = topRowRightKey.height * this.scale;
            topRowRightKey.parent = this.keyContainer;
            topRowRightKey.pivot.x = 0;
            topRowRightKey.pivot.y = 0;
            topRowRightKey.smoothing = false;
            topRowRightKey.x = this.cursorUp.x + this.cursorUp.width;
            this.emptyKeys.push(topRowRightKey);
            var bottomRowLeftKey = _Game2.
            default.UI.createSpriteFromSheet('key-bottom-row-left.png', 'sprites/interface.png', 'sprites/interface.json');
            bottomRowLeftKey.width = bottomRowLeftKey.width * this.scale;
            bottomRowLeftKey.height = bottomRowLeftKey.height * this.scale;
            bottomRowLeftKey.y = topRowKey.height;
            bottomRowLeftKey.parent = this.keyContainer;
            bottomRowLeftKey.pivot.x = 0;
            bottomRowLeftKey.pivot.y = 0;
            bottomRowLeftKey.smoothing = false;
            this.emptyKeys.push(bottomRowLeftKey);
            this.spacebar = _Game2.
            default.UI.createSpriteFromSheet('spacebar.png', 'sprites/interface.png', 'sprites/interface.json');
            this.spacebar.pivot.x = 0;
            this.spacebar.pivot.y = 0;
            this.spacebar.x = bottomRowLeftKey.x + bottomRowLeftKey.width;
            this.spacebar.y = bottomRowLeftKey.y;
            this.spacebar.smoothing = false;
            this.spacebar.parent = this.keyContainer;
            this.spacebar.width = this.spacebar.width * this.scale;
            this.spacebar.height = this.spacebar.height * this.scale;
            this.spacebar.defaultSprite = 'spacebar-pressed.png';
            this.spacebar.animateSprite = 'spacebar.png';
            var bottomRowKey = _Game2.
            default.UI.createSpriteFromSheet('key-bottom-row.png', 'sprites/interface.png', 'sprites/interface.json');
            bottomRowKey.width = bottomRowKey.width * this.scale;
            bottomRowKey.height = bottomRowKey.height * this.scale;
            bottomRowKey.y = this.spacebar.y;
            bottomRowKey.x = this.spacebar.x + this.spacebar.width;
            bottomRowKey.parent = this.keyContainer;
            bottomRowKey.pivot.x = 0;
            bottomRowKey.pivot.y = 0;
            bottomRowKey.smoothing = false;
            this.emptyKeys.push(bottomRowKey);
            this.cursorLeft = _Game2.
            default.UI.createSpriteFromSheet('cursor-left.png', 'sprites/interface.png', 'sprites/interface.json');
            this.cursorLeft.width = this.cursorLeft.width * this.scale;
            this.cursorLeft.height = this.cursorLeft.height * this.scale;
            this.cursorLeft.parent = this.keyContainer;
            this.cursorLeft.pivot.x = 0;
            this.cursorLeft.pivot.y = 0;
            this.cursorLeft.smoothing = false;
            this.cursorLeft.x = bottomRowKey.x + bottomRowKey.width;
            this.cursorLeft.y = bottomRowKey.y;
            this.cursorLeft.defaultSprite = 'cursor-left-active.png';
            this.cursorLeft.animateSprite = 'cursor-left.png';
            this.cursorDown = _Game2.
            default.UI.createSpriteFromSheet('cursor-down.png', 'sprites/interface.png', 'sprites/interface.json');
            this.cursorDown.width = this.cursorDown.width * this.scale;
            this.cursorDown.height = this.cursorDown.height * this.scale;
            this.cursorDown.parent = this.keyContainer;
            this.cursorDown.pivot.x = 0;
            this.cursorDown.pivot.y = 0;
            this.cursorDown.smoothing = false;
            this.cursorDown.x = this.cursorLeft.x + this.cursorLeft.width;
            this.cursorDown.y = this.cursorLeft.y;
            this.cursorDown.defaultSprite = 'cursor-down-active.png';
            this.cursorDown.animateSprite = 'cursor-down.png';
            this.cursorRight = _Game2.
            default.UI.createSpriteFromSheet('cursor-right.png', 'sprites/interface.png', 'sprites/interface.json');
            this.cursorRight.width = this.cursorRight.width * this.scale;
            this.cursorRight.height = this.cursorRight.height * this.scale;
            this.cursorRight.parent = this.keyContainer;
            this.cursorRight.pivot.x = 0;
            this.cursorRight.pivot.y = 0;
            this.cursorRight.smoothing = false;
            this.cursorRight.x = this.cursorDown.x + this.cursorDown.width;
            this.cursorRight.y = this.cursorDown.y;
            this.cursorRight.defaultSprite = 'cursor-right-active.png';
            this.cursorRight.animateSprite = 'cursor-right.png';
            this.keyContainer.width = topRowRightKey.x + topRowRightKey.width;
            this.keyContainer.height = this.cursorDown.y + this.cursorDown.height;
            this.allKeys = [this.cursorLeft, this.cursorRight, this.cursorDown, this.cursorUp, this.spacebar].concat(this.emptyKeys);
        };
        KeyboardHint.isVisible = function () {
            return this.keyContainer.visible;
        };
        KeyboardHint.
        switch = function (screen) {
            this.setupSpritesForScreen(screen);
        };
        KeyboardHint.clearActiveScreen = function () {
            this.lastShowedScreen = null;
        };
        KeyboardHint.reset = function () {
            this.clearActiveScreen();
            this.hide();
        };
        KeyboardHint.show = function (screen, skipShownCheck) {
            if (window.isMobile) {
                return;
            }
            if (!screen) {
                return;
            }
            if (_AppStoreInterstitial2.default.isVisible()) {
                return;
            }
            if (this.keyContainer.visible) {
                this.
                switch(screen);
                return;
            }
            var screenIdx = this.hintConfirmScreenGroupIdx[screen];
            if (screenIdx !== this.currentScreenIdx && screen !== this.lastShowedScreen) {
                this.hintConfirmCountedThisScreen = false;
            }
            if (!skipShownCheck && this.hintConfirmAmounts[screenIdx] && this.hintConfirmAmounts[screenIdx] >= this.hintConfirmsUntilHide) {
                this.keyContainer.visible = false;
            } else {
                this.keyContainer.visible = true;
            }
            this.setupSpritesForScreen(screen, skipShownCheck);
        };
        KeyboardHint.setupSpritesForScreen = function (screen, forceUpdateAnimations) {
            if (window.isMobile) {
                return;
            }
            this.cancelReappearTimeout();
            var screenIdx = this.hintConfirmScreenGroupIdx[screen];
            var updateAnimations = screen !== this.lastShowedScreen || forceUpdateAnimations;
            if (updateAnimations) {
                _Game2.
                default.timeSinceLastBlink = -1;
                this.animateIdx = 1;
            }
            this.lastShowedScreen = screen;
            this.currentScreenIdx = screenIdx;
            this.animate = [];
            this.keyContainer.y = 80;
            var hideEmpty = true;
            if (screen === 'main') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.cursorUp);
            } else if (screen === 'main-show-more') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.cursorUp);
            } else if (screen === 'main-char-select') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.cursorUp);
            } else if (screen === 'main-first-play') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = this.hiddenAlpha;
                this.animate.push(this.cursorUp);
            } else if (screen === 'movement-hint') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = this.hiddenAlpha;
                this.animate.push(this.cursorLeft, this.cursorRight, this.cursorDown);
            } else if (screen === 'full-movement-hint') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.cursorUp, this.cursorLeft, this.cursorRight, this.cursorDown, this.spacebar);
            } else if (screen === 'death-onboarding' || screen === 'gift' || screen === 'gift-given' || screen === 'gumball') {
                this.cursorLeft.alpha = this.hiddenAlpha;
                this.cursorRight.alpha = this.hiddenAlpha;
                this.cursorDown.alpha = this.hiddenAlpha;
                this.cursorUp.alpha = this.hiddenAlpha;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar);
            } else if (screen === 'char-select') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar, this.cursorLeft, this.cursorRight, this.cursorUp);
            } else if (screen === 'char-select-left-edge') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar, this.cursorRight, this.cursorUp);
            } else if (screen === 'char-select-right-edge') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar, this.cursorLeft, this.cursorUp);
            } else if (screen === 'char-select-back-button') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar, this.cursorDown, this.cursorLeft, this.cursorRight);
            } else if (screen === 'death-buttons') {
                this.cursorLeft.alpha = 1;
                this.cursorRight.alpha = 1;
                this.cursorDown.alpha = 1;
                this.cursorUp.alpha = 1;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar, this.cursorDown, this.cursorUp);
            } else if (screen === 'death') {
                this.cursorLeft.alpha = this.hiddenAlpha;
                this.cursorRight.alpha = this.hiddenAlpha;
                this.cursorDown.alpha = this.hiddenAlpha;
                this.cursorUp.alpha = this.hiddenAlpha;
                this.spacebar.alpha = 1;
                this.animate.push(this.spacebar);
            }
            if (screen === 'char-select' || screen === 'char-select-left-edge' || screen === 'char-select-right-edge' || screen === 'char-select-back-button' || screen === 'gift' || screen === 'gumball' || screen === 'death' || screen === 'death-buttons') {
                this.keyContainer.y = 160;
            } else if (screen === 'gift-given') {
                this.keyContainer.y = 220;
            }
            this.emptyKeys.forEach(function (key) {
                key.alpha = hideEmpty ? this.hiddenAlpha : 1;
            }.bind(this));
            if (this.cursorUp.alpha === this.hiddenAlpha && this.cursorDown.alpha === this.hiddenAlpha) {
                this.cursorUp.animateSprite = 'cursor-up-hidden.png';
            } else {
                this.cursorUp.animateSprite = 'cursor-up.png';
            }
            this.allKeys.forEach(function (key) {
                if (updateAnimations) {
                    if (this.animate.indexOf(key) !== -1) {
                        if (key.defaultSprite) {
                            key.setAssetPath(key.defaultSprite);
                        }
                    } else {
                        if (key.animateSprite) {
                            key.setAssetPath(key.animateSprite);
                        }
                    }
                }
                _Game2.
                default.UI.MoveToFront(key);
            }.bind(this));
            _Game2.
            default.UI.MoveToFront(this.cursorDown);
        };
        KeyboardHint.update = function (deltaTime) {
            if (this.animate.length === 0) {
                return;
            }
            if (_Game2.default.timeSinceLastBlink < 0) {
                this.animate.forEach(function (key, idx) {
                    if (idx === 0) {
                        key.setAssetPath(key.defaultSprite);
                    } else {
                        key.setAssetPath(key.animateSprite);
                    }
                }.bind(this));
            }
            if (_Game2.default.timeSinceLastBlink >= 0.4) {
                this.animate.forEach(function (key, idx) {
                    if (idx + this.animateDelay === this.animateIdx) {
                        key.setAssetPath(key.defaultSprite);
                    } else {
                        key.setAssetPath(key.animateSprite);
                    }
                }.bind(this));
                this.animateIdx += this.animateDelay;
            }
            if (this.animateIdx - this.animateDelay >= this.animate.length) {
                this.animateIdx = this.animateDelay;
            }
        };
        KeyboardHint.hide = function () {
            this.keyContainer.visible = false;
            this.currentScreenIdx = null;
        };
        KeyboardHint.triggerReappearTimeout = function (time) {
            time = typeof time === 'number' ? time : 2000;
            this.cancelReappearTimeout();
            this.hintReAppearAfterTimeout = window.setTimeout(function () {
                if (this.lastShowedScreen !== 'main-first-play') {
                    this.show(this.lastShowedScreen);
                }
            }.bind(this), time);
        };
        KeyboardHint.cancelReappearTimeout = function () {
            window.clearInterval(this.hintReAppearAfterTimeout);
        };
        KeyboardHint.hintConfirmed = function () {
            if (this.hintConfirmCountedThisScreen) {
                return;
            }
            this.hintConfirmAmounts[this.currentScreenIdx] = (this.hintConfirmAmounts[this.currentScreenIdx] || 0) + 1;
            this.hintConfirmCountedThisScreen = true;
            _Storage2.
            default.setItem('savedHintConfirmAmounts', JSON.stringify(this.hintConfirmAmounts));
        };
        KeyboardHint.keyPressed = function (spacebar, left, top, right, bottom) {
            var pressedCorrectButton = spacebar && this.animate.indexOf(this.spacebar) !== -1 || left && this.animate.indexOf(this.cursorLeft) !== -1 || top && this.animate.indexOf(this.cursorUp) !== -1 || right && this.animate.indexOf(this.cursorRight) !== -1 || bottom && this.animate.indexOf(this.cursorDown) !== -1;
            if (pressedCorrectButton) {
                this.pressedWrongButton = 0;
                this.hintConfirmed();
                this.hide();
                window.requestAnimationFrame(function () {
                    if (!_Game2.default.playing || _Game2.default.playerController.Dead) {
                        this.triggerReappearTimeout(2000);
                    }
                }.bind(this));
            } else {
                if (this.lastShowedScreen) {
                    this.pressedWrongButton++;
                    if (this.pressedWrongButton >= 2 && this.lastShowedScreen) {
                        this.show(this.lastShowedScreen, true);
                    }
                }
            }
        };
        exports.
        default = KeyboardHint;
        window.KeyboardHint = KeyboardHint;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var AppStoreInterstitial = {};
        var appleUrl = "https://itunes.apple.com/app/apple-store/id924373886?pt=108682802&ct=crossypoki&mt=8";
        var googleUrl = "https://play.google.com/store/apps/details?id=com.yodo1.crossyroad";
        var borderSize = 4;
        AppStoreInterstitial.lastUpsellScreen = '';
        AppStoreInterstitial.init = function () {
            this.container = _Game2.
            default.UI.createRectangle();
            this.container.alpha = 0;
            this.container.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.container.anchor.y = _ThreeUI2.
            default.anchors.center;
            this.container.visible = false;
            this.createPanel();
            this.createElements();
        };
        AppStoreInterstitial.createPanel = function () {
            this.overlay = _Game2.
            default.UI.createRectangle('rgba(105, 206, 236, 0.7)');
            this.overlay.stretch.x = true;
            this.overlay.stretch.y = true;
            this.overlay.offset.left = -1;
            this.overlay.offset.right = -1;
            this.overlay.offset.top = -1;
            this.overlay.offset.bottom = -1;
            this.overlay.visible = false;
            this.outsideRectangleWide = _Game2.
            default.UI.createRectangle('#fff');
            this.outsideRectangleWide.parent = this.container;
            this.outsideRectangleWide.stretch.x = true;
            this.outsideRectangleWide.stretch.y = true;
            this.outsideRectangleWide.offset.top = borderSize;
            this.outsideRectangleWide.offset.bottom = borderSize;
            this.outsideRectangleTall = _Game2.
            default.UI.createRectangle('#fff');
            this.outsideRectangleTall.parent = this.container;
            this.outsideRectangleTall.stretch.x = true;
            this.outsideRectangleTall.stretch.y = true;
            this.outsideRectangleTall.offset.left = borderSize;
            this.outsideRectangleTall.offset.right = borderSize;
            this.insideRectangleWide = _Game2.
            default.UI.createRectangle('#56C7F9');
            this.insideRectangleWide.parent = this.container;
            this.insideRectangleWide.stretch.x = true;
            this.insideRectangleWide.stretch.y = true;
            this.insideRectangleWide.offset.top = borderSize * 2;
            this.insideRectangleWide.offset.bottom = borderSize * 2;
            this.insideRectangleWide.offset.left = borderSize;
            this.insideRectangleWide.offset.right = borderSize;
            this.insideRectangleTall = _Game2.
            default.UI.createRectangle('#56C7F9');
            this.insideRectangleTall.parent = this.container;
            this.insideRectangleTall.stretch.x = true;
            this.insideRectangleTall.stretch.y = true;
            this.insideRectangleTall.offset.left = borderSize * 2;
            this.insideRectangleTall.offset.right = borderSize * 2;
            this.insideRectangleTall.offset.bottom = borderSize;
            this.insideRectangleTall.offset.top = borderSize;
            this.closeButton = _Game2.
            default.UI.createSpriteFromSheet('upsell-close.png', 'sprites/interface.png', 'sprites/interface.json');
            this.closeButton.parent = this.container;
            this.closeButton.x = borderSize / 2;
            this.closeButton.y = borderSize / 2;
            this.closeButton.width = 17 * 3;
            this.closeButton.height = 17 * 3;
            this.closeButton.anchor.x = _ThreeUI2.
            default.anchors.right;
            this.closeButton.anchor.y = _ThreeUI2.
            default.anchors.top;
            this.closeButton.defaultSprite = this.closeButton.assetPath;
            this.closeButton.blinkSprite = 'upsell-close-blink.png';
            this.closeButton.onClick(function () {
                _Interface2.
                default.ButtonSound();
                this.hide(true);
            }.bind(this));
        };
        AppStoreInterstitial.createElements = function () {
            var title = window.mobileUpsellText[0] || _Localisation2.
            default.GetString("upsell-title");
            this.titleText = _Game2.
            default.UI.createText(title, this.titleTextSize, 'EditUndoBrk', '#fff');
            this.titleText.parent = this.container;
            this.titleText.pivot.x = 0.5;
            this.titleText.pivot.y = 0;
            this.titleText.textBaseline = 'top';
            this.titleText.textAlign = 'center';
            this.titleText.x = this.container.width * 0.5;
            var subTitle = window.mobileUpsellText[0] || _Localisation2.
            default.GetString("upsell-title");
            this.subtitleText = _Game2.
            default.UI.createText(subTitle, this.titleTextSize, 'EditUndoBrk', '#FFE100');
            this.subtitleText.parent = this.container;
            this.subtitleText.pivot.x = 0;
            this.subtitleText.pivot.y = 0;
            this.subtitleText.textBaseline = 'top';
            this.subtitleText.visible = false;
            var usp1 = window.mobileUpsellText[1] || _Localisation2.
            default.GetString("upsell-usp1");
            this.usp1Coin = _Game2.
            default.UI.createSpriteFromSheet('coin.png', 'sprites/interface.png', 'sprites/interface.json');
            this.usp1Coin.pivot.y = 0.5;
            this.usp1Coin.parent = this.container;
            this.usp1Text = _Game2.
            default.UI.createText(usp1, this.bodyTextSize, 'EditUndoBrk', '#fff');
            this.usp1Text.parent = this.container;
            this.usp1Text.textBaseline = 'top';
            this.usp1Text.textVerticalAlign = 'center';
            var usp2 = window.mobileUpsellText[2] || _Localisation2.
            default.GetString("upsell-usp2");
            this.usp2Coin = _Game2.
            default.UI.createSpriteFromSheet('coin.png', 'sprites/interface.png', 'sprites/interface.json');
            this.usp2Coin.pivot.y = 0.5;
            this.usp2Coin.parent = this.container;
            this.usp2Text = _Game2.
            default.UI.createText(usp2, this.bodyTextSize, 'EditUndoBrk', '#fff');
            this.usp2Text.parent = this.container;
            this.usp2Text.textBaseline = 'top';
            this.usp2Text.textVerticalAlign = 'center';
            var usp3 = window.mobileUpsellText[3] || _Localisation2.
            default.GetString("upsell-usp3");
            this.usp3Coin = _Game2.
            default.UI.createSpriteFromSheet('coin.png', 'sprites/interface.png', 'sprites/interface.json');
            this.usp3Coin.pivot.y = 0.5;
            this.usp3Coin.parent = this.container;
            this.usp3Text = _Game2.
            default.UI.createText(usp3, this.bodyTextSize, 'EditUndoBrk', '#fff');
            this.usp3Text.parent = this.container;
            this.usp3Text.textBaseline = 'top';
            this.usp3Text.textVerticalAlign = 'center';
            this.appleButton = _Game2.
            default.UI.createSprite('sprites/upsell-app-store.png');
            this.appleButton.parent = this.container;
            this.appleButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.appleButton.pivot.x = 0;
            this.appleButton.pivot.y = 1;
            this.appleButton.smoothing = true;
            this.googleButton = _Game2.
            default.UI.createSprite('sprites/upsell-google-play.png');
            this.googleButton.parent = this.container;
            this.googleButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.googleButton.pivot.x = 0;
            this.googleButton.pivot.y = 1;
            this.googleButton.smoothing = true;
            this.exitButton = _Game2.
            default.UI.createSpriteFromSheet('GoTo.png', 'sprites/interface.png', 'sprites/interface.json');
            this.exitButton.x = 0;
            this.exitButton.y = 10;
            this.exitButton.visible = false;
            this.exitButton.pivot.y = 1;
            this.exitButton.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.exitButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.exitButton.defaultSprite = this.exitButton.assetPath;
            this.exitButton.blinkSprite = 'GoTo-blink.png';
            this.exitButton.width = 91;
            this.exitButton.height = 84;
            this.exitButton.onClick(this.hide.bind(this));
            this.googleButton.onClick(function () {
                _Interface2.
                default.ButtonSound();
                this.openUrl(googleUrl);
                PokiSDK.customEvent("appUpsell", "google", {});
                analytics.track('promotion', 'app_click_to', 'google');
            }.bind(this));
            this.appleButton.onClick(function () {
                _Interface2.
                default.ButtonSound();
                this.openUrl(appleUrl);
                PokiSDK.customEvent("appUpsell", "apple", {});
                analytics.track('promotion', 'app_click_to', 'apple');
            }.bind(this));
            this.phone = _Game2.
            default.UI.createSprite(window.mobileUpsellAvatarURL);
            this.phoneAspect = this.phone.width / this.phone.height;
            this.phone.parent = this.container;
            this.phone.pivot.x = 1;
            this.phone.pivot.y = 1;
            this.phone.anchor.x = _ThreeUI2.
            default.anchors.right;
            this.phone.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.phone.smoothing = true;
        };
        AppStoreInterstitial.typeText = function (textObject, textToType) {
            var currentText = textObject.text;
            var charactersToType = textToType.split('');
            var isTyping = false;
            window.setTimeout(function () {
                    isTyping = true;
                    var typeTextInterval = window.setInterval(function () {
                        if (charactersToType.length <= 0) {
                            window.clearInterval(typeTextInterval);
                            isTyping = false;
                            return;
                        }
                        currentText += charactersToType.shift();
                        textObject.text = currentText + (cursorToggle ? '|' : '');
                    }.bind(this), 200);
                },
                600);
            var cursorToggle = true;
            textObject.text = currentText + (cursorToggle ? '|' : '');
            var cursorInterval = window.setInterval(function () {
                    if (!textObject.visible) {
                        window.clearInterval(cursorInterval);
                        return;
                    }
                    if (isTyping) {
                        cursorToggle = true;
                    } else {
                        cursorToggle = !cursorToggle;
                    }
                    textObject.text = currentText + (cursorToggle ? '|' : '');
                },
                400);
        };
        AppStoreInterstitial.isVisible = function () {
            return this.container.visible;
        };
        AppStoreInterstitial.toggle = function (withOverlay) {
            if (this.container.visible) {
                this.hide();
            } else {
                this.show(withOverlay);
            }
        };
        AppStoreInterstitial.show = function (withOverlay) {
            if (this.container.visible) {
                return;
            }
            PokiSDK.customEvent("appUpsell", "open", {});
            analytics.track('promotion', 'app_impression', this.lastUpsellScreen);
            this.overlay.visible = !!withOverlay;
            this.container.visible = true;
            this.closeButton.visible = true;
            this.resize();
            _Game2.
            default.UI.MoveToFront(this.overlay);
            _Game2.
            default.UI.MoveToFront(this.outsideRectangleTall);
            _Game2.
            default.UI.MoveToFront(this.outsideRectangleWide);
            _Game2.
            default.UI.MoveToFront(this.insideRectangleTall);
            _Game2.
            default.UI.MoveToFront(this.insideRectangleWide);
            _Game2.
            default.UI.MoveToFront(this.titleText);
            _Game2.
            default.UI.MoveToFront(this.subtitleText);
            _Game2.
            default.UI.MoveToFront(this.usp1Coin);
            _Game2.
            default.UI.MoveToFront(this.usp1Text);
            _Game2.
            default.UI.MoveToFront(this.usp2Coin);
            _Game2.
            default.UI.MoveToFront(this.usp2Text);
            _Game2.
            default.UI.MoveToFront(this.usp3Coin);
            _Game2.
            default.UI.MoveToFront(this.usp3Text);
            _Game2.
            default.UI.MoveToFront(this.phone);
            _Game2.
            default.UI.MoveToFront(this.googleButton);
            _Game2.
            default.UI.MoveToFront(this.appleButton);
            _Game2.
            default.UI.MoveToFront(this.closeButton);
            _Game2.
            default.UI.MoveToFront(this.exitButton);
            var focusButton;
            if (_Interface2.default.CurrentScreen === 'selectingCharacter') {
                _Game2.
                default.UI.MoveToFront(_Carousel2.default.showUpsell);
                _Game2.
                default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
                _Game2.
                default.UI.MoveToFront(_Carousel2.default.attention);
                focusButton = _Carousel2.
                default.showUpsell;
            } else {
                _Game2.
                default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
            }
            if (_Interface2.default.CurrentScreen === 'main') {
                _Interface2.
                default.hideLogo(true);
                this.exitButton.visible = true;
                if (window.isMobile) {
                    _Interface2.
                    default.moveToPlay.visible = false;
                } else {
                    _Interface2.
                    default.playButton.visible = false;
                }
                focusButton = this.exitButton;
            } else if (_Interface2.default.CurrentScreen === 'death') {
                focusButton = _Interface2.
                default.playButton;
            }
            _KeyboardUIControls2.
            default.setFocus(this.closeButton);
        };
        AppStoreInterstitial.hide = function (moveWorldSelector) {
            if (!this.container.visible) {
                return;
            }
            PokiSDK.customEvent("appUpsell", "close", {});
            this.overlay.visible = false;
            this.container.visible = false;
            this.exitButton.visible = false;
            this.closeButton.visible = false;
            if (_Interface2.default.CurrentScreen === 'selectingCharacter') {
                _Carousel2.
                default.UpsellClosed(moveWorldSelector);
                focusButton = _Carousel2.
                default.showUpsell;
            }
            if (_Interface2.default.CurrentScreen === 'main') {
                if (window.isMobile) {
                    _Interface2.
                    default.moveToPlay.visible = true;
                } else {
                    _Interface2.
                    default.playButton.visible = true;
                }
                _Interface2.
                default.showLogo(true);
                focusButton = _KeyboardUIControls2.
                default.setFocus(_Interface2.default.playButton);
                _Interface2.
                default.showUpsell.x = 10;
                _Interface2.
                default.showUpsell.anchor.x = _ThreeUI2.
                default.anchors.right;
                _Interface2.
                default.ButtonScaleSet();
            } else if (_Interface2.default.CurrentScreen === 'death') {
                focusButton = _Interface2.
                default.playButton;
            }
        };
        AppStoreInterstitial.openUrl = function (url) {
            analytics.track('promotion', 'app_click_from', this.lastUpsellScreen);
            // window.open(url, "Crossy Road");
        };
        AppStoreInterstitial.resize = function () {
            if (!this.container.visible) {
                return;
            }
            var aspectRatio = _Game2.
            default.canvas.width / _Game2.
            default.canvas.height;
            var percLandscape = _Utils2.
            default.inverseLerp(window.minAspect, window.maxAspect, aspectRatio);
            var minSideMargin = 50;
            var minTopMargin = 50;
            var minBottomMargin = 120;
            var targetAspectRatio = 16 / 11;
            var maxHeight = _Game2.
            default.UI.height - minBottomMargin - minTopMargin;
            this.container.y = (minTopMargin - minBottomMargin) / 2;
            this.container.width = _Game2.
            default.UI.width - minSideMargin;
            this.container.height = this.container.width / targetAspectRatio;
            if (this.container.height > maxHeight) {
                this.container.height = maxHeight;
                this.container.width = maxHeight * targetAspectRatio;
            }
            var scale = this.container.height / maxHeight;
            this.padding = 25 * scale;
            this.upsellPadding = 10 * scale;
            this.titleTextSize = 40 * scale;
            this.bodyTextSize = 30 * scale;
            this.upsellButtonScale = 1 * scale;
            this.phone.height = 320 * 1.3 * scale;
            this.phone.width = this.phone.height * this.phoneAspect;
            this.titleText.x = this.container.width * 0.5;
            this.resizeAndRepositionElements(scale);
        };
        AppStoreInterstitial.resizeAndRepositionElements = function (scale) {
            this.titleText.y = 50 * scale;
            this.titleText.size = this.titleTextSize;
            this.subtitleText.x = this.titleText.x;
            this.subtitleText.y = this.titleText.y + this.titleText.size * 1.1;
            this.subtitleText.size = this.titleTextSize;
            this.usp1Coin.x = 80 * scale;
            this.usp1Coin.y = this.titleText.y + this.titleText.size + 100 * scale;
            this.usp1Coin.height = this.bodyTextSize;
            this.usp1Coin.width = this.usp1Coin.height;
            this.usp1Text.x = this.usp1Coin.x + this.bodyTextSize * 1.2;
            this.usp1Text.y = this.usp1Coin.y - 10 * scale;
            this.usp1Text.size = this.bodyTextSize;
            this.usp2Coin.x = this.usp1Coin.x;
            this.usp2Coin.y = this.usp1Coin.y + this.usp1Coin.height + this.padding * 1.5;
            this.usp2Coin.height = this.bodyTextSize;
            this.usp2Coin.width = this.usp2Coin.height;
            this.usp2Text.x = this.usp2Coin.x + this.bodyTextSize * 1.2;
            this.usp2Text.y = this.usp2Coin.y - 10 * scale;
            this.usp2Text.size = this.bodyTextSize;
            this.usp3Coin.x = this.usp1Coin.x;
            this.usp3Coin.y = this.usp2Coin.y + this.usp2Coin.height + this.padding * 1.5;
            this.usp3Coin.height = this.bodyTextSize;
            this.usp3Coin.width = this.usp3Coin.height;
            this.usp3Text.x = this.usp3Coin.x + this.bodyTextSize * 1.2;
            this.usp3Text.y = this.usp3Coin.y - 10 * scale;
            this.usp3Text.size = this.bodyTextSize;
            this.appleButton.width = 214 * this.upsellButtonScale;
            this.appleButton.height = 82 * this.upsellButtonScale;
            this.googleButton.width = 214 * this.upsellButtonScale;
            this.googleButton.height = 82 * this.upsellButtonScale;
            this.appleButton.x = this.padding * 3.5;
            this.appleButton.y = this.padding * 2.5;
            this.googleButton.x = this.appleButton.x + this.appleButton.width + this.upsellPadding;
            this.googleButton.y = this.appleButton.y;
            this.phone.x = -70 * scale;
            this.phone.y = -50 * scale;
        };
        exports.
        default = AppStoreInterstitial;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _anchors = __webpack_require__(41);
        var _anchors2 = _interopRequireDefault(_anchors);
        var _BitmapText = __webpack_require__(67);
        var _BitmapText2 = _interopRequireDefault(_BitmapText);
        var _Rectangle = __webpack_require__(68);
        var _Rectangle2 = _interopRequireDefault(_Rectangle);
        var _Sprite = __webpack_require__(69);
        var _Sprite2 = _interopRequireDefault(_Sprite);
        var _Text = __webpack_require__(70);
        var _Text2 = _interopRequireDefault(_Text);
        var dirtyProperties = ['x', 'y', 'width', 'height', 'rotation', 'alpha', 'visible', 'pivot', 'anchor', 'smoothing', 'stretch', 'offset', 'text', 'scale', 'parent', 'textAlign', 'assetPath', 'color', 'left', 'right', 'up', 'down'];
        var observeDirtyProperties = function observeDirtyProperties(object, ui) {
            dirtyProperties.forEach(function (prop) {
                var proxyKey = '_proxied_' + prop;
                object[proxyKey] = object[prop];
                Object.defineProperty(object, prop, {
                    set: function set(value) {
                        if (object[prop] !== value) {
                            ui.shouldReDraw = true;
                        }
                        object[proxyKey] = value;
                    },
                    get: function get() {
                        return object[proxyKey];
                    }
                });
            });
        };
        var ThreeUI = function ThreeUI(gameCanvas, height, renderOnQuad, resolution) {
            this.displayObjects = [];
            this.eventListeners = {
                click: []
            };
            this.clearRect = null;
            this.gameCanvas = gameCanvas;
            this.canvas = document.createElement('canvas');
            this.height = height || 720;
            this.context = this.canvas.getContext('2d');
            this.renderOnQuad = renderOnQuad || false;
            this.shouldReDraw = true;
            this.resolution = resolution || 1;
            if (this.renderOnQuad) {
                this.prepareThreeJSScene();
            } else {
                this.addCanvasToDom();
            }
            this.resize();
            if (!window.mouseDisabled) {
                window.addEventListener('touchend', this.clickHandler.bind(this));
                if (isFirefox) {
                    window.addEventListener('click', this.clickHandler.bind(this));
                } else {
                    window.addEventListener('mousedown', this.clickHandler.bind(this));
                }
            }
        };
        ThreeUI.anchors = _anchors2.
        default;
        ThreeUI.prototype.addCanvasToDom = function () {
            this.gameCanvas.parentNode.appendChild(this.canvas);
            if (['relative', 'absolute', 'fixed'].indexOf(this.gameCanvas.style.position) === -1) {
                this.gameCanvas.style.position = 'relative';
            }
            this.canvas.style.position = 'absolute';
            this.canvas.style.left = 0;
            this.canvas.style.top = 0;
            this.canvas.style.zIndex = 1;
            this.canvas.style.transformOrigin = '0% 0%';
            this.canvas.style.perspective = '1000px';
        };
        ThreeUI.prototype.prepareThreeJSScene = function () {
            this.camera = new THREE.OrthographicCamera(-this.canvas.width / 2, this.canvas.width / 2, this.canvas.height / 2, -this.canvas.height / 2, 0, 30);
            this.scene = new THREE.Scene();
            this.texture = new THREE.Texture(this.canvas);
            var material = new THREE.MeshBasicMaterial({
                map: this.texture
            });
            material.transparent = true;
            var planeGeo = new THREE.PlaneGeometry(this.canvas.width, this.canvas.height);
            this.plane = new THREE.Mesh(planeGeo, material);
            this.plane.matrixAutoUpdate = false;
            this.scene.add(this.plane);
        };
        ThreeUI.prototype.resize = function () {
            var gameCanvasAspect = this.gameCanvas.width / this.gameCanvas.height;
            this.width = this.height * gameCanvasAspect;
            this.canvas.width = this.width * this.resolution;
            this.canvas.height = this.height * this.resolution;
            var containerWidth = this.gameCanvas.parentNode.getBoundingClientRect().width;
            this.canvas.style.transform = 'scale(' + containerWidth / this.width / this.resolution + ')';
            this.shouldReDraw = true;
        };
        ThreeUI.prototype.hideAll = function () {
            this.displayObjects.forEach(function (object) {
                if (typeof object === 'undefined') {
                    return;
                }
                if (!object.parent) {
                    object.visible = false;
                }
            });
        };
        ThreeUI.prototype.draw = function () {
            var this$1 = this;
            if (!this.shouldReDraw) {
                return;
            }
            if (this.clearRect) {
                this.context.clearRect(this.clearRect.x, this.clearRect.y, this.clearRect.width, this.clearRect.height);
            } else {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
            var self = this;
            var length = this.displayObjects.length;
            for (var i = 0; i < length; i++) {
                var object = this$1.displayObjects[i];
                if (object) {
                    object.render(self.context, this$1.resolution);
                }
            }
            if (this.renderOnQuad) {
                this.texture.needsUpdate = true;
            }
            this.shouldReDraw = false;
        };
        ThreeUI.prototype.render = function (renderer) {
            this.draw();
            if (this.renderOnQuad) {
                renderer.render(this.scene, this.camera);
            }
            if (this.colorReplace) {
                this.context.save();
                this.context.fillStyle = this.colorReplace;
                this.context.globalCompositeOperation = 'source-atop';
                this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.restore();
            }
        };
        ThreeUI.prototype.createSprite = function (imagePath, x, y, width, height) {
            var displayObject = new _Sprite2.
            default(this, imagePath, x, y, width, height);
            this.displayObjects.push(displayObject);
            observeDirtyProperties(displayObject, this);
            return displayObject;
        };
        ThreeUI.prototype.createSpriteFromSheet = function (imagePath, sheetImagePath, sheetDataPath, x, y, width, height) {
            var displayObject = new _Sprite2.
            default(this, imagePath, x, y, width, height, sheetImagePath, sheetDataPath);
            this.displayObjects.push(displayObject);
            observeDirtyProperties(displayObject, this);
            return displayObject;
        };
        ThreeUI.prototype.createRectangle = function (color, x, y, width, height) {
            var displayObject = new _Rectangle2.
            default(this, color, x, y, width, height);
            this.displayObjects.push(displayObject);
            observeDirtyProperties(displayObject, this);
            return displayObject;
        };
        ThreeUI.prototype.createText = function (text, font, color, x, y) {
            var displayObject = new _Text2.
            default(this, text, font, color, x, y);
            this.displayObjects.push(displayObject);
            observeDirtyProperties(displayObject, this);
            return displayObject;
        };
        ThreeUI.prototype.createBitmapText = function (text, size, x, y, sheetImagePath, sheetDataPath) {
            var displayObject = new _BitmapText2.
            default(this, text, size, x, y, sheetImagePath, sheetDataPath);
            this.displayObjects.push(displayObject);
            observeDirtyProperties(displayObject, this);
            return displayObject;
        };
        ThreeUI.prototype.addEventListener = function (type, _callback, displayObject) {
            this.eventListeners[type].push({
                callback: function callback() {
                    _callback(displayObject);
                },
                displayObject: displayObject
            });
        };
        ThreeUI.prototype.removeEventListeners = function (type, displayObject) {
            this.eventListeners[type].forEach(function (listener, idx) {
                if (listener.displayObject === displayObject) {
                    this.eventListeners[type].splice(idx, 1);
                }
            }.bind(this));
        };
        ThreeUI.prototype.clickHandler = function (event) {
            var coords = null;
            if (typeof TouchEvent !== 'undefined' && event instanceof TouchEvent) {
                this.listeningToTouchEvents = true;
                if (event.touches.length > 0) {
                    coords = {
                        x: event.touches[0].pageX,
                        y: event.touches[0].pageY
                    };
                } else if (event.pageX && event.pageY) {
                    coords = {
                        x: event.pageX,
                        y: event.pageY
                    };
                } else {
                    this.listeningToTouchEvents = false;
                }
            } else {
                coords = {
                    x: event.pageX,
                    y: event.pageY
                };
            }
            if (this.listeningToTouchEvents && event instanceof MouseEvent || coords === null) {
                return;
            }
            coords = this.windowToUISpace(coords.x, coords.y);
            var callbackQueue = [];
            this.eventListeners.click.forEach(function (listener) {
                var displayObject = listener.displayObject;
                if (!displayObject.shouldReceiveEvents()) {
                    return;
                }
                var bounds = displayObject.getBounds();
                if (ThreeUI.isInBoundingBox(coords.x, coords.y, bounds.x, bounds.y, bounds.width, bounds.height)) {
                    callbackQueue.push(listener.callback);
                }
            });
            callbackQueue.forEach(function (callback) {
                callback();
            });
        };
        ThreeUI.prototype.windowToUISpace = function (x, y) {
            var bounds = this.gameCanvas.getBoundingClientRect();
            var scale = this.height / bounds.height;
            return {
                x: (x - bounds.left) * scale,
                y: (y - bounds.top) * scale
            };
        };
        ThreeUI.prototype.getScale = function () {
            var bounds = this.gameCanvas.getBoundingClientRect();
            return this.height / bounds.height;
        };
        ThreeUI.isInBoundingBox = function (x, y, boundX, boundY, boundWidth, boundHeight) {
            return x >= boundX && x <= boundX + boundWidth && y >= boundY && y <= boundY + boundHeight;
        };
        ThreeUI.prototype.MoveToFront = function (UIElement) {
            var elIdx = this.displayObjects.indexOf(UIElement);
            if (elIdx !== -1) {
                this.displayObjects.splice(this.displayObjects.indexOf(UIElement), 1);
            }
            this.displayObjects.push(UIElement);
        };
        ThreeUI.prototype.MoveToBack = function (UIElement) {
            var elIdx = this.displayObjects.indexOf(UIElement);
            if (elIdx !== -1) {
                this.displayObjects.splice(this.displayObjects.indexOf(UIElement), 1);
            }
            this.displayObjects.unshift(UIElement);
        };
        ThreeUI.prototype.delete = function (displayObject) {
            var idx = this.displayObjects.indexOf(displayObject);
            if (idx > -1) {
                this.displayObjects.splice(idx, 1);
            }
        };
        ThreeUI.prototype.getVisibilityState = function () {
            var state = {};
            this.displayObjects.forEach(function (object) {
                if (typeof object === 'undefined') {
                    return;
                }
                if (object.parent) {
                    return;
                }
                if (object.visible) {
                    state[object.uuid] = true;
                }
            });
            return state;
        };
        ThreeUI.prototype.setVisibilityState = function (state) {
            if (!state) {
                return;
            }
            this.displayObjects.forEach(function (object) {
                if (typeof object === 'undefined') {
                    return;
                }
                if (object.parent) {
                    return;
                }
                if (state[object.uuid]) {
                    object.visible = true;
                } else {
                    object.visible = false;
                }
            });
            this.shouldReDraw = true;
        };
        exports.
        default = ThreeUI;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var KeyboardUIControls = {};
        KeyboardUIControls.animatedRectangleScale = 0.9;
        KeyboardUIControls.sprites = {
            default: 'focus.png',
            wide: 'focus-wide.png',
            square: 'focus-square-small.png',
            keyboard: 'focus-keyboard.png',
            upsellClose: 'focus-upsell-close.png',
            deviceButton: 'focus-device-button.png',
            upsell: 'focus-upsell.png',
            upsellBlink: 'focus-upsell-blink.png'
        };
        KeyboardUIControls.init = function () {
            this.blinkButton = null;
            if (window.isMobile) {
                return;
            }
            this.reticle = _Game2.
            default.UI.createSpriteFromSheet(this.sprites.default, 'sprites/interface.png', 'sprites/interface.json');
            this.reticle.stretch.x = true;
            this.reticle.stretch.y = true;
            this.reticle.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.reticle.anchor.y = _ThreeUI2.
            default.anchors.center;
            this.reticle.visible = false;
            this.reticle.pivot.x = 0;
            this.reticle.pivot.y = 0;
            this.animateReticle = _Game2.
            default.UI.createRectangle('#005c7e');
            this.animateReticle.visible = false;
            this.animateReticle.pivot.x = 0.5;
            this.animateReticle.pivot.y = 0.5;
            _Game2.
            default.UI.MoveToBack(this.animateReticle);
        };
        KeyboardUIControls.setFocus = function (button) {
            if ((!button || !this.reticle || this.reticle.parent === button || this.disabled) && !window.isMobile) {
                return;
            }
            _Game2.
            default.timeSinceLastBlink = -1;
            if (window.isMobile) {
                this.blinkButton = button;
                return;
            }
            if (this.reticle.parent && this.reticle.parent.blinkSprite && this.reticle.parent.defaultSprite && !this.reticle.parent.disabled) {
                this.reticle.parent.setAssetPath(this.reticle.parent.defaultSprite);
            }
            if (button.blinkSprite && !button.disabled) {
                button.setAssetPath(button.blinkSprite);
            }
            this.reticle.parent = button;
            if (button.assetPath.indexOf('device') > -1) {
                this.reticle.setAssetPath(this.sprites.deviceButton);
            } else if (button.assetPath.indexOf('keyboard') > -1) {
                this.reticle.setAssetPath(this.sprites.keyboard);
            } else if (button.assetPath.indexOf('upsell-close') > -1) {
                this.reticle.setAssetPath(this.sprites.upsellClose);
            } else if (button.assetPath.indexOf('upsell-') > -1) {
                this.reticle.setAssetPath(this.sprites.upsellBlink);
            } else if (button.width === button.height) {
                this.reticle.setAssetPath(this.sprites.square);
            } else if (button.width > button.height * 1.6) {
                this.reticle.setAssetPath(this.sprites.wide);
            } else {
                this.reticle.setAssetPath(this.sprites.default);
            }
            this.reticle.visible = true;
        };
        KeyboardUIControls.disable = function () {
            this.disabled = true;
        };
        KeyboardUIControls.enable = function () {
            this.disabled = false;
        };
        KeyboardUIControls.getFocus = function () {
            return this.reticle.parent;
        };
        KeyboardUIControls.update = function (deltaTime) {
            if (this.disabled) {
                return;
            }
            var button = window.isMobile ? this.blinkButton : this.reticle.parent;
            if (button && !button.disabled) {
                if (_Game2.default.timeSinceLastBlink < 0) {
                    if (button.blinkSprite) {
                        button.setAssetPath(button.blinkSprite);
                    }
                } else if (_Game2.default.timeSinceLastBlink >= 0.4) {
                    if (button.blinkSprite && button.defaultSprite) {
                        if (button.assetPath === button.defaultSprite) {
                            button.setAssetPath(button.blinkSprite);
                        } else {
                            button.setAssetPath(button.defaultSprite);
                        }
                    } else if (!window.isMobile) {
                        if (this.reticle.assetPath === this.sprites.upsell) {
                            this.reticle.setAssetPath(this.sprites.upsellBlink);
                        } else if (this.reticle.assetPath === this.sprites.upsellBlink) {
                            this.reticle.setAssetPath(this.sprites.upsell);
                        }
                    }
                }
            }
        };
        KeyboardUIControls.handleKeyEvent = function (event) {
            if (!_Game2.default.takesUserInput || this.disabled || !this.reticle) {
                return;
            }
            var button = this.reticle.parent;
            var spacebar = false,
                enter = false,
                left = false,
                right = false,
                top = false,
                bottom = false,
                exit = false;
            switch (event.keyCode) {
                case 32:
                    spacebar = true;
                    break;
                case 13:
                    enter = true;
                    break;
                case 87:
                case 38:
                    top = true;
                    break;
                case 65:
                case 37:
                    left = true;
                    break;
                case 83:
                case 40:
                    bottom = true;
                    break;
                case 68:
                case 39:
                    right = true;
                    break;
                case 27:
                    exit = true;
                    break;
            }
            if ((spacebar || enter) && button && !button.disabled) {
                this.reticle.parent.fireEvent('click');
                return;
            }
            if (exit) {
                if (_AppStoreInterstitial2.default.isVisible() && _Interface2.default.CurrentScreen === 'main') {
                    _AppStoreInterstitial2.
                    default.hide();
                    return;
                }
                if (_Interface2.default.CurrentScreen === 'selectingCharacter') {
                    _Carousel2.
                    default.close();
                    return;
                }
            }
            if (_Interface2.default.CurrentScreen === 'main' && (top || left || bottom || right || spacebar) && !_AppStoreInterstitial2.default.isVisible()) {
                _Interface2.
                default.playButtonCallback(false);
                return;
            }
            if (_Interface2.default.CurrentScreen === 'main' && !_Game2.default.hasPlayedBefore && top) {
                _Interface2.
                default.playButtonCallback();
                return;
            }
            if (_Interface2.default.CurrentScreen === 'selectingCharacter' && (left || right)) {
                KeyboardUIControls.CarouselNavigation(left, right);
                return;
            }
            if (button) {
                if (left && button.navigateOnLeft) {
                    var navigateTo = button.navigateOnLeft;
                    if (typeof button.navigateOnLeft === 'function') {
                        navigateTo = navigateTo();
                    }
                    this.setFocus(navigateTo);
                    return;
                }
                if (right && button.navigateOnRight) {
                    var navigateTo = button.navigateOnRight;
                    if (typeof navigateTo === 'function') {
                        navigateTo = navigateTo();
                    }
                    this.setFocus(navigateTo);
                    return;
                }
                if (top && button.navigateOnTop) {
                    var navigateTo = button.navigateOnTop;
                    if (typeof navigateTo === 'function') {
                        navigateTo = navigateTo();
                    }
                    this.setFocus(navigateTo);
                    return;
                }
                if (bottom && button.navigateOnBottom) {
                    var navigateTo = button.navigateOnBottom;
                    if (typeof navigateTo === 'function') {
                        navigateTo = navigateTo();
                    }
                    this.setFocus(navigateTo);
                    return;
                }
            }
        };
        KeyboardUIControls.CarouselNavigation = function (left, right) {
            if (left) {
                _Carousel2.
                default.btnLeftCallBack(true);
            }
            if (right) {
                _Carousel2.
                default.btnRightCallBack(true);
            }
        };
        KeyboardUIControls.animateBetweenButtons = function (sourceButton, targetButton) {
            if (!sourceButton) {
                return;
            }
            var sourceBounds = sourceButton.getBounds();
            var targetBounds = targetButton.getBounds();
            this.animateReticle.x = sourceBounds.x + sourceBounds.width * 0.5;
            this.animateReticle.y = sourceBounds.y + sourceBounds.height * 0.5;
            this.animateReticle.width = sourceBounds.width * this.animatedRectangleScale;
            this.animateReticle.height = sourceBounds.height * this.animatedRectangleScale;
            this.animateReticle.visible = true;
            this.animateReticle.sourceBounds = sourceBounds;
            this.animateReticle.targetBounds = targetBounds;
            this.animateReticle.t = 0;
            new TWEEN.Tween(this.animateReticle).to({
                    x: targetBounds.x + targetBounds.width * 0.5,
                    y: targetBounds.y + targetBounds.height * 0.5,
                    t: 1
                },
                150).onUpdate(function () {
                var scale = Math.abs(this.t - 0.5) + 0.5;
                var width, height;
                if (this.t < 0.5) {
                    width = this.sourceBounds.width * KeyboardUIControls.animatedRectangleScale;
                    height = this.sourceBounds.height * KeyboardUIControls.animatedRectangleScale;
                } else {
                    width = this.targetBounds.width * KeyboardUIControls.animatedRectangleScale;
                    height = this.targetBounds.height * KeyboardUIControls.animatedRectangleScale;
                }
                this.width = width * scale;
                this.height = height * scale;
            }).start();
        };
        exports.
        default = KeyboardUIControls;
    },
    function (module, exports) {
        function Localisation() {}
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.slice(0, 2);
        userLang = userLang.toLowerCase();
        Localisation.userLang = userLang;
        Localisation.GetString = function (stringname) {
            var string = Localisation.Strings[stringname][this.userLang];
            if (string === undefined) {
                string = Localisation.Strings[stringname]["en"];
            }
            return string;
        };
        Localisation.Strings = {
            "upsell-title": {
                "en": "Play more Crossy Road!",
                "es": "Juega más Crossy Road!",
                "de": "Spiele mehr Crossy Road!",
                "fr": "Jouer à plus de Crossy Road!",
                "it": "Gioca ancora a Crossy Road!",
                "pl": "Zagraj więcej w Crossy Road!",
                "pt": "Jogue mais Crossy Road!"
            },
            "upsell-usp1": {
                "en": "A new Ocean world!",
                "es": "¡Un nuevo mundo \noceánico!",
                "de": "Eine neue Meereswelt!",
                "fr": "Un nouveau monde \nocéanique!",
                "it": "Un nuovo mondo \nOceanico!",
                "pl": "Nowy Świat Oceanów!",
                "pt": "Um novo mundo Oceano!"
            },
            "upsell-usp2": {
                "en": "12 new characters!",
                "es": "12 nuevos personajes",
                "de": "12 neue Charaktere",
                "fr": "12 nouveaux\npersonnages",
                "it": "12 nuovi personaggi",
                "pl": "12 nowych postaci",
                "pt": "12 novos personagens"
            },
            "upsell-usp3": {
                "en": "Play for free",
                "es": "Juega gratis",
                "de": "Spiele gratis",
                "fr": "Jouer gratuitement",
                "it": "Gioca gratuitamente",
                "pl": "Zagraj za darmo",
                "pt": "Jogue de graça"
            },
            "upsell-download": {
                "en": "Download app on\nphone or tablet",
                "es": "Descarga la app al\ncelular o tableta",
                "de": "App downloaden auf\nHandy oder Tablet",
                "fr": "Télécharger l'appli sur\nmobile ou tablette",
                "it": "Scarica l'app su\nsmartphone o tablet",
                "pl": "Ściągnić aplikację na\ntelefon lub tablet",
                "pt": "Faça o download do aplicativo\nno celular ou tablet"
            },
            "upsell-footer": {
                "en": "get the full version\nfor free:",
                "es": "Obtén la versión\ncompleta gratis:",
                "de": "Hole dir die Vollversion kostenlos:",
                "fr": "Obtiens la version complète gratuite:",
                "it": "Ottieni la versione completa gratuitamente:",
                "pl": "Zyskaj pełną wersję za darmo:",
                "pt": "Obtenha a versão completa gratuitamente:"
            },
            "play-as-trex": {
                "en": "Play as t-rex",
                "es": "Juega como\nt-rex",
                "de": "Spiele als\nT-Rex",
                "fr": "Jouez t-rex",
                "it": "Gioca con TRex",
                "pl": "Graj jako\nT-rex",
                "pt": "Jogue como\num T-rex"
            },
            "win-a-prize": {
                "en": "win a prize",
                "de": "preis gewinnen",
                "es": "ganar un premio",
                "fr": "réclamez un prix",
                "it": "vinci un premio",
                "pt": "ganhe um prêmio",
                "pl": "Wygraj nagrodę"
            },
            "coins-to-go": {
                "en": "XXX ¢ to go",
                "de": "Noch XXX ¢",
                "es": "Faltan XXX ¢",
                "fr": "Encore XXX ¢",
                "it": "Mancano XXX ¢",
                "pt": "Falta(m) XXX ¢",
                "pl": "XXX ¢ zostało"
            },
            "earn-coins": {
                "en": "Free ¢",
                "de": "¢ verdienen",
                "es": "Ganar ¢",
                "fr": "Gagnez des ¢",
                "it": "Vinci ¢",
                "pt": "Ganhe ¢",
                "pl": "Zdobądź ¢"
            },
            "coins-earned": {
                "en": "XXX ¢ earned",
                "de": "XXX ¢ verdient",
                "es": "XXX ¢ ganadas",
                "fr": "XXX ¢ gagnés",
                "it": "XXX ¢ vinti",
                "pt": "Ganhou XXX ¢",
                "pl": "XXX ¢ zdobytych"
            },
            "new": {
                "en": "New!",
                "de": "Neu!",
                "es": "¡Nuevo!",
                "fr": "Nouveau!",
                "it": "Nuovo!",
                "pl": "Nowa!",
                "pt": "Novo!"
            },
            "duplicate": {
                "en": "Duplicate!",
                "de": "Duplikat!",
                "es": "¡Duplicado!",
                "fr": "Double!",
                "it": "Doppio!",
                "pl": "Duplikat!",
                "pt": "Duplicado!"
            },
            "not-available-as-prize": {
                "en": "Not available from\nthe prize machine",
                "de": "Nicht von der\nPreismaschine verfügbar",
                "es": "No disponible en la\nmaquina de premios",
                "fr": "Indisponible au\ndistributeur de prix",
                "it": "Non disponibile con\nla macchina dei premi",
                "pt": "Indisponível na\nmáquina de prêmios",
                "pl": "Nie jest dostępny z\nautomatu do nagród"
            },
            "free-gift": {
                "en": "Free gift",
                "de": "Geschenk",
                "es": "Regalo gratis",
                "fr": "Cadeau gratuit",
                "it": "Premio",
                "pt": "Brinde",
                "pl": "Bezpłatny prezent"
            },
            "free-gift-in-time": {
                "en": "Free gift in ±XXXh YYYm",
                "de": "Geschenk in ±XXXh ±YYYm",
                "es": "Regalo gratis en\n±XXXh YYYm",
                "fr": "Cadeau dans ±XXXh YYYm",
                "it": "Regalo gratis in\n±YYY minuti",
                "pt": "Presente grátis em\n±XXXh YYYm",
                "pl": "Bezpłatny prezent za\n±XXXh YYYm"
            },
            "free-gift-in-time-hours": {
                "en": "Free gift in ±XXXh",
                "de": "Geschenk in ±XXXh",
                "es": "Regalo gratis en\n±XXXh",
                "fr": "Cadeau dans ±XXXh",
                "it": "Regalo gratis in\n±XXX ore",
                "pt": "Presente grátis em\n±XXXh",
                "pl": "Bezpłatny prezent za\n±XXX godzin"
            },
            "free-gift-in-time-minutes": {
                "en": "Free gift in ±YYYm",
                "de": "Geschenk in ±YYYm",
                "es": "Regalo gratis en\n±YYYm",
                "fr": "Cadeau dans ±YYYm",
                "it": "Nuovo regalo in\n±XXX ore YYY minuti",
                "pt": "Presente grátis em\n±YYYm",
                "pl": "Bezpłatny prezent za\n±YYYm"
            },
            "chicken": {
                "en": "Chicken",
                "de": "Huhn",
                "es": "Gallina",
                "fr": "Poulet dodu",
                "pl": "Kurczak",
                "pt": "Galinha",
                "it": "Pollo"
            },
            "duck": {
                "en": "Mallard",
                "de": "Stockente",
                "es": "Pato salvaje",
                "fr": "Canard boiteux",
                "it": "Anatra selvatica",
                "pl": "Krzyżówka",
                "pt": "Pato Real"
            },
            "robot": {
                "en": "Rusty Robot",
                "de": "Roboter",
                "es": "Robot oxidado",
                "fr": "Robot rouillé",
                "it": "Robot arrugginito",
                "pl": "Zardzewiały Robot",
                "pt": "Robô Lata-Velha"
            },
            "cat": {
                "en": "Lucky Cat",
                "de": "Glückskatze",
                "es": "Gato de la suerte",
                "fr": "Chat heureux",
                "it": "Gatto fortunato",
                "pl": "Kot Szczęśliwiec",
                "pt": "Gato de Sorte"
            },
            "snail": {
                "en": "Swift Snail",
                "de": "Schnecke",
                "es": "Caracol veloz",
                "fr": "Escargot véloce",
                "it": "Lumaca sprint",
                "pl": "Błyskawiczny Ślimak",
                "pt": "Lesma Veloz"
            },
            "trex": {
                "en": "???"
            },
            "space_chicken": {
                "en": "Space Chicken",
                "de": "Raumhuhn",
                "es": "Pollo Espacial",
                "fr": "Poulet de l'Espace",
                "it": "Pollo Spaziale",
                "pl": "Kosmiczny Kurczak",
                "pt": "Frango Espacial"
            },
            "space_chicken_carousel": {
                "en": "Space Chicken"
            },
            "space_chicken_glass": {
                "en": "Space Chicken Glass"
            },
            "astronaut": {
                "en": "Astronaut",
                "de": "Astronaut",
                "es": "Astronauta",
                "fr": "Astronaute",
                "it": "Astronauta",
                "pl": "Astronauta",
                "pt": "Astronauta"
            },
            "astronomer": {
                "en": "Astronomer",
                "de": "Astronom",
                "es": "Astrónomo",
                "fr": "Astronome",
                "it": "Astronomo",
                "pl": "Astronom",
                "pt": "Astrônomo"
            },
            "rover": {
                "en": "Rover",
                "de": "Rover",
                "es": "Rover",
                "fr": "Astromobile",
                "it": "Rover",
                "pl": "Rover",
                "pt": "Viajante"
            },
            "robot_dog": {
                "en": "Robot Dog",
                "de": "Roboterhund",
                "es": "Perro Robot",
                "fr": "Chien Robot",
                "it": "Cane Robot",
                "pl": "Pies Robot",
                "pt": "Cachorro Robô"
            },
            "robot_dog_pickup": {
                "en": "Robot Dog Pickup"
            },
            "moon_cheese": {
                "en": "Moon Cheese",
                "de": "Mondkäse",
                "es": "Queso Lunar",
                "fr": "Fromage de Lune",
                "it": "Luna di Formaggio",
                "pl": "Księżycowy Ser",
                "pt": "Lua de Queijo"
            },
            "space_dog": {
                "en": "Space Dog",
                "de": "Raumhund",
                "es": "Perro Espacial",
                "fr": "Chien de l'Espace",
                "it": "Cane Spaziale",
                "pl": "Kosmiczny Pies",
                "pt": "Cachorro Espacial"
            },
            "space_walker": {
                "en": "Space Walker",
                "de": "Raumgänger",
                "es": "Caminante Especial",
                "fr": "Marcheur de l'Espace",
                "it": "Space Walker",
                "pl": "Kosmiczny Spacerowicz",
                "pt": "Caminhante Especial"
            },
            "moon_rock": {
                "en": "Moon Rock",
                "de": "Mondgestein",
                "es": "Roca Lunar",
                "fr": "Pierre de Lune",
                "it": "Roccia Lunare",
                "pl": "Kamień Księżycowy",
                "pt": "Pedra da Lua"
            },
            "hipster_whale": {
                "en": "Hipster Whale"
            },
            "space_walker_anim_2": {
                "en": ""
            },
            "space_walker_anim_3": {
                "en": ""
            },
            "space_walker_anim_4": {
                "en": ""
            },
            "space_walker_idle_anim_1": {
                "en": ""
            },
            "space_walker_idle_anim_2": {
                "en": ""
            },
            "space_walker_rainbow_anim_1": {
                "en": ""
            },
            "space_walker_rainbow_anim_2": {
                "en": ""
            },
            "space_walker_rainbow_anim_3": {
                "en": ""
            },
            "space_walker_rainbow_anim_4": {
                "en": ""
            },
            "space_walker_rainbow_anim_5": {
                "en": ""
            },
            "space_walker_rainbow_anim_6": {
                "en": ""
            },
            "space_walker_rainbow_anim_7": {
                "en": ""
            },
            "space_walker_rainbow_anim_8": {
                "en": ""
            }
        };
        exports.
        default = Localisation;
    },
    function (module, exports) {
        function PasrTimer(pause, attack, sustain, release) {
            this.stage = 4;
            this.stageTime = [4];
            this.timer;
            this.value;
            this.queriedSustain = false;
            this.queriedRelease = false;
            this.queriedFinished = true;
            this.stageTime[0] = pause;
            this.stageTime[1] = attack;
            this.stageTime[2] = sustain;
            this.stageTime[3] = release;
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        PasrTimer.prototype = {
            getPauseTime: function getPauseTime() {
                return this.stageTime[0];
            },
            setPauseTime: function setPauseTime(value) {
                this.stageTime[0] = value;
            },
            getAttackTime: function getAttackTime() {
                return this.stageTime[1];
            },
            setAttackTime: function setAttackTime(value) {
                this.stageTime[1] = value;
            },
            getSustainTime: function getSustainTime() {
                return this.stageTime[2];
            },
            setSustainTime: function setSustainTime(value) {
                this.stageTime[2] = value;
            },
            getReleaseTime: function getReleaseTime() {
                return this.stageTime[3];
            },
            setReleaseTime: function setReleaseTime(value) {
                this.stageTime[3] = value;
            },
            GetPauseTime: function GetPauseTime() {
                return this.stageTime[0];
            },
            GetAttackTime: function GetAttackTime() {
                return this.stageTime[1];
            },
            GetSustainTime: function GetSustainTime() {
                return this.stageTime[2];
            },
            GetReleaseTime: function GetReleaseTime() {
                return this.stageTime[3];
            },
            GetDuration: function GetDuration() {
                return this.stageTime[0] + this.stageTime[1] + this.stageTime[2] + this.stageTime[3];
            },
            Tick: function Tick(deltaTime) {
                var this$1 = this;
                if (this.stage == 4) {
                    this.value = 0;
                    return 0;
                }
                while (this.stage < 4 && (this.timer >= 1 || this.stageTime[this.stage] == 0)) {
                    this$1.timer = 0;
                    this$1.stage++;
                }
                if (this.stage < 4) {
                    this.timer += deltaTime / this.stageTime[this.stage];
                    if (this.timer > 1) {
                        this.timer = 1;
                    }
                }
                if (this.stage == 0) {
                    this.value = 0;
                } else if (this.stage == 1) {
                    this.value = this.timer;
                } else if (this.stage == 2) {
                    this.value = 1;
                } else if (this.stage == 3) {
                    this.value = 1 - this.timer;
                } else {
                    this.value = 0;
                }
                return this.value;
            },
            GetValue: function GetValue() {
                return this.value;
            },
            reachedSustain: function reachedSustain() {
                if (this.queriedSustain) {
                    return false;
                }
                if (this.stage >= 2) {
                    this.queriedSustain = true;
                    return true;
                }
                return false;
            },
            reachedRelease: function reachedRelease() {
                if (this.queriedRelease) {
                    return false;
                }
                if (this.stage >= 3) {
                    this.queriedRelease = true;
                    return true;
                }
                return false;
            },
            isFinished: function isFinished() {
                return this.stage == 4;
            },
            reachedFinished: function reachedFinished() {
                if (this.stage == 4 && !this.queriedFinished) {
                    this.queriedFinished = true;
                    return true;
                } else {
                    return false;
                }
            },
            Reset: function Reset() {
                this.stage = 0;
                this.timer = 0;
                this.value = 0;
                this.queriedSustain = false;
                this.queriedFinished = false;
            },
            Complete: function Complete() {
                this.Reset();
                this.stage = 4;
            },
            Stop: function Stop() {
                this.stage = 4;
            },
            GetStage: function GetStage() {
                return this.stage;
            },
            SetStage: function SetStage(stage) {
                this.stage = stage;
                this.timer = 0;
            },
            TotalTime: function TotalTime() {
                return this.stageTime[0] + this.stageTime[1] + this.stageTime[2] + this.stageTime[3];
            }
        };
        exports.
        default = PasrTimer;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var RewardedHelper = {};
        RewardedHelper.coinReward = 20;
        RewardedHelper.opportunitiesShowedSinceLastWatched = 0;
        RewardedHelper.shakeNextBar = false;
        RewardedHelper.videosWatchedKey = 'videosWatched';
        RewardedHelper.videosWatched = null;
        RewardedHelper.disable = true;
        RewardedHelper.init = function () {
            RewardedHelper.coins = [];
        };
        RewardedHelper.getVideosWatched = function () {
            if (this.videosWatched !== null) {
                return this.videosWatched;
            }
            var videosWatched = _Storage2.
            default.getItem(this.videosWatchedKey);
            if (videosWatched !== null) {
                this.videosWatched = parseInt(videosWatched, 10);
            }
            return this.videosWatched || 0;
        };
        RewardedHelper.getAdsWatched = function () {
            return parseInt(_Storage2.default.getItem('ads_watched'), 10) || 0;
        };
        RewardedHelper.triggerAdRequest = function () {
            if (RewardedHelper.disable || window.adBlocked) {
                return;
            }
            var onAdFinish = function onAdFinish() {
                RewardedHelper.adPlaying = false;
                _Interface2.
                default.unPause();
                _Game2.
                default.takesUserInput = true;
            };
            PokiSDK.rewardedBreak().then(function (withReward) {
                onAdFinish();
                if (withReward) {
                    analytics.track('rewarded_video', 'finished', RewardedHelper.getAdsWatched(), RewardedHelper.getAdsWatched());
                    RewardedHelper.awardReward();
                }
            }).
            catch(function () {
                onAdFinish();
            });
        };
        RewardedHelper.showingAd = false;
        RewardedHelper.newRoundStarted = function () {
            RewardedHelper.showingAd = false;
        };
        var rewardedBar = null;
        RewardedHelper.adPlaying = false;
        RewardedHelper.showRewardedOpportunity = function () {
            if (RewardedHelper.disable) {
                return;
            }
            if (window.adBlocked) {
                return;
            }
            if (RewardedHelper.showingAd) {
                return;
            }
            if (_Interface2.default.CurrentScreen !== "death" || _AppStoreInterstitial2.default.isVisible()) {
                return;
            }
            RewardedHelper.opportunitiesShowedSinceLastWatched++;
            RewardedHelper.showingAd = true;
            analytics.track('rewarded_video', 'notification_shown');
            var text = _Localisation2.
            default.GetString('earn-coins');
            rewardedBar = _Interface2.
            default.notificationBar(text, 'rewarded',
                function () {
                    analytics.track('rewarded_video', 'notification_click');
                    RewardedHelper.opportunitiesShowedSinceLastWatched = 0;
                    _Game2.
                    default.takesUserInput = false;
                    RewardedHelper.adPlaying = true;
                    _Interface2.
                    default.Pause();
                    _Game2.
                    default.audioManager.SetVolume(0);
                    _Storage2.
                    default.setItem('ads_watched', RewardedHelper.getAdsWatched() + 1);
                    RewardedHelper.triggerAdRequest();
                });
            rewardedBar.shakeMe = RewardedHelper.shakeNextBar;
            if (!_Interface2.default.playButton._visible || _Interface2.default.playButton.y < 0 && _Interface2.default.activeNotificationBars.length === 1) {
                _Interface2.
                default.focusFirstNotificationBar();
            }
            _Interface2.
            default.setupEndScreenKeyboardNavigation();
        };
        RewardedHelper.awardReward = function () {
            if (_Interface2.default.isSound) {
                _Game2.
                default.audioManager.SetVolume(.8);
            }
            _Storage2.
            default.setItem(RewardedHelper.videosWatchedKey, ++RewardedHelper.videosWatched);
            var text = _Localisation2.
            default.GetString('coins-earned').replace('XXX', RewardedHelper.coinReward);
            _Interface2.
            default.slideNewText(rewardedBar, text);
            _GameSave2.
            default.ModifyCoins(RewardedHelper.coinReward);
            _Interface2.
            default.coinBlast(RewardedHelper.coinReward);
            _Interface2.
            default.coinsWereModified();
            _GumballMachineScreen2.
            default.showNotificationBar(true);
            _Interface2.
            default.setupEndScreenKeyboardNavigation();
            _Interface2.
            default.focusFirstNotificationBar();
            _Interface2.
            default.removeTutorialLock();
            _Game2.
            default.takesUserInput = true;
        };
        exports.
        default = RewardedHelper;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var containerID = 'loading-bar';
        var innerContainerID = 'loading-bar-inner-container';
        var barID = 'loading-bar-bar';
        var loadingTextID = 'loading-bar-text';
        var borderClassName = 'loading-bar-border';
        var chickenID = 'loading-bar-chicken';
        var barTransitionTime = 0.5;
        var minUpdateTime = 0.1;
        var maxFakeProgress = 0.987;
        var style = '\n#' + containerID + ' {\n\tposition: absolute;\n\tz-index: 9999999;\n\twidth: 93%;\n\theight: 5%;\n\tleft: 2.5%;\n\tbottom: -12%;\n\ttransition: all ' + barTransitionTime + 's ease-in-out;\n\ttransform: translate3d(0,0,0);\n\tperspective: 1000px;\n}\n\n#' + innerContainerID + ' {\n\tposition: absolute;\n\tbackground: #4ecbff;\n\tbox-shadow: inset 0 -5px #0ea9f1;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1;\n}\n\n#' + barID + ' {\n\theight: 100%;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\tbackground: #fea47c;\n\ttransform-origin: left;\n\tbox-shadow: inset 0 -5px #ff8149;\n\ttransition: 0.2s all ease-out;\n\tz-index: 1;\n\tperspective: 1000px;\n}\n\n#' + loadingTextID + ' {\n\ttext-align: center;\n\tfont-family: Arial;\n\tfont-weight: bold;\n\tcolor: #fff;\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 100%;\n\ttop: 8%;\n\ttext-shadow: 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.' + borderClassName + ' {\n\tbackground: #fff;\n\tposition: absolute;\n}\n\n#' + chickenID + ' {\n\tposition: absolute;\n\tright: -3%;\n\ttop: -60%;\n\theight: 200%;\n\tz-index: 1;\n\ttransform-origin: 50% 100%;\n\tanimation: chicken-idle-animation .6s ease-in-out alternate infinite;\n}\n\n@keyframes chicken-idle-animation {\n\t0%  { transform: scale3d(1, 1, 1); }\n\t15%  { transform: scale3d(1, 1, 1); }\n\t85% { transform: scale3d(1.1, .9, 1.1); }\n\t100% { transform: scale3d(1.1, .9, 1.1); }\n}\n';
        var LoadingBar = function LoadingBar() {
            this.enableFakeProgress = false;
            this.wrapper = document.body;
            this.totalProgress = 0;
            this.progress = 0;
            var styleEl = document.createElement('style');
            styleEl.innerHTML = style;
            document.head.appendChild(styleEl);
            this.container = document.createElement('div');
            this.container.id = containerID;
            this.innerContainer = document.createElement('div');
            this.innerContainer.id = innerContainerID;
            this.container.appendChild(this.innerContainer);
            this.bar = document.createElement('div');
            this.bar.id = barID;
            this.innerContainer.appendChild(this.bar);
            this.loadingText = document.createElement('div');
            this.loadingText.id = loadingTextID;
            this.innerContainer.appendChild(this.loadingText);
            this.loadingTextBig = document.createElement('span');
            this.loadingTextBig.innerHTML = '0';
            this.loadingText.appendChild(this.loadingTextBig);
            this.loadingTextSmall = document.createElement('span');
            this.loadingTextSmall.innerHTML = '.0';
            this.loadingText.appendChild(this.loadingTextSmall);
            this.loadingTextPerc = document.createElement('span');
            this.loadingTextPerc.innerHTML = '%';
            this.loadingText.appendChild(this.loadingTextPerc);
            this.borderSides = document.createElement('div');
            this.borderSides.className = borderClassName;
            this.borderSides.style.height = '100%';
            this.container.appendChild(this.borderSides);
            this.borderTopBottom = document.createElement('div');
            this.borderTopBottom.className = borderClassName;
            this.borderTopBottom.style.width = '100%';
            this.container.appendChild(this.borderTopBottom);
            window.addEventListener('resize', this.resize.bind(this));
        };
        LoadingBar.prototype.show = function () {
            var _this = this;
            this.chicken = new Image();
            this.chicken.src = this.chickenSrc;
            this.chicken.id = chickenID;
            this.container.appendChild(this.chicken);
            this.wrapper.appendChild(this.container);
            this.resize();
            window.setTimeout(function () {
                    _this.container.style.transform = 'translate3D(0, -270%, 0)';
                },
                0);
            requestAnimationFrame(this.update.bind(this));
        };
        LoadingBar.prototype.enteredNewLoadingPhase = function (percDedicatedToThisPhase) {
            this.totalProgress += this.currentProgress || 0;
            this.percDedicatedToCurrentPhase = percDedicatedToThisPhase;
        };
        LoadingBar.prototype.enteredFinalLoadingPhase = function () {
            this.totalProgress += this.currentProgress || 0;
            this.percDedicatedToCurrentPhase = 1 - this.totalProgress;
        };
        LoadingBar.prototype.setProgress = function (currentPhaseProgress, notPoki) {
            this.currentProgress = currentPhaseProgress * this.percDedicatedToCurrentPhase || 0;
            var newProgress = this.totalProgress + this.currentProgress;
            if (Math.round(newProgress) !== this.progress) {
                this.progressWasLastUpdatedAt = Date.now();
            }
            this.progress = Math.max(this.progress, newProgress);
            if (!notPoki) {
                PokiSDK.gameLoadingProgress({
                    percentageDone: this.progress
                });
            }
        };
        LoadingBar.prototype.resize = function () {
            var containerBounds = this.container.getBoundingClientRect();
            this.loadingText.style.fontSize = (containerBounds.height / 1.4).toFixed(2) + 'px';
            this.loadingTextSmall.style.fontSize = (containerBounds.height / 3).toFixed(2) + 'px';
            var borderSize = containerBounds.height / 10;
            this.borderSides.style.left = '-' + borderSize + 'px';
            this.borderSides.style.width = containerBounds.width + borderSize * 2 + 'px';
            this.borderTopBottom.style.top = '-' + borderSize + 'px';
            this.borderTopBottom.style.height = containerBounds.height + borderSize * 2 + 'px';
        };
        LoadingBar.prototype.destroy = function () {
            var _this2 = this;
            if (this.destroyed) {
                return;
            }
            this.destroyed = true;
            window.removeEventListener('resize', this.resize.bind(this));
            this.container.style.transform = 'translate3d(0,0,0)';
            window.setTimeout(function () {
                    _this2.wrapper.removeChild(_this2.container);
                },
                barTransitionTime * 1000);
        };
        LoadingBar.prototype.forceFinished = function () {
            this.progress = 1;
            this.lastProgress = 1;
            this.update();
        };
        LoadingBar.prototype.fakeProgressUpdate = function () {
            if (!this.enableFakeProgress) {
                return;
            }
            if (Math.random() < 0.95) {
                return;
            }
            this.progressWasLastUpdatedAt = Date.now();
            var progressIncrease = Math.atan((1 - this.progress) / 500) / (Math.PI / 8);
            this.progress = Math.max(this.progress, Math.min(maxFakeProgress, this.progress + progressIncrease));
        };
        LoadingBar.prototype.update = function () {
            if (this.progressWasLastUpdatedAt && this.progressWasLastUpdatedAt + minUpdateTime * 1000 < Date.now()) {
                this.fakeProgressUpdate();
            }
            var easeMultiplier = 15;
            var easedProgress = ((this.lastProgress || 0) * easeMultiplier + this.progress) / (easeMultiplier + 1);
            this.bar.style.transform = 'scale3d(' + easedProgress.toFixed(2) + ', 1, 1)';
            var percParts = (easedProgress * 100).toFixed(1).split('.');
            this.loadingTextBig.innerHTML = percParts[0];
            this.loadingTextSmall.innerHTML = '.' + percParts[1];
            if (easedProgress > 0.999) {
                return this.destroy();
            }
            this.lastProgress = easedProgress;
            requestAnimationFrame(this.update.bind(this));
        };
        exports.
        default = LoadingBar;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Physics = {
            Distance2dSq: function Distance2dSq(a, b) {
                return (a.x - b.x) * (a.x - b.x) + (a.z - b.z) * (a.z - b.z);
            },
            IsPointInRect: function IsPointInRect(px, pz, rx, rz, rwidth, rdepth) {
                var rw = rwidth / 2;
                var rd = rdepth / 2;
                return px >= rx - rw && px <= rx + rw && pz >= rz - rd && pz <= rz + rd;
            },
            DoLinesIntersect: function DoLinesIntersect(ax, aWidth, bx, bWidth) {
                return Math.abs(ax - bx) < (aWidth + bWidth) / 2;
            },
            DoBoxesIntersect: function DoBoxesIntersect(ax, az, aWidth, aDepth, bx, bz, bWidth, bDepth) {
                return Math.abs(ax - bx) < (aWidth + bWidth) / 2 && Math.abs(az - bz) < (aDepth + bDepth) / 2;
            },
            DoesLineSegmentIntersectBox: function DoesLineSegmentIntersectBox(x0, z0, x1, z1, rectMinX, rectMinZ, rectMaxX, rectMaxZ) {
                var minX = x0;
                var maxX = x1;
                if (x0 > x1) {
                    minX = x1;
                    maxX = x0;
                }
                if (maxX > rectMaxX) {
                    maxX = rectMaxX;
                }
                if (minX < rectMinX) {
                    minX = rectMinX;
                }
                if (minX > maxX) {
                    return false;
                }
                var minY = z0;
                var maxY = z1;
                var dx = x1 - x0;
                if (Math.abs(dx) > 0.0000001) {
                    var a = (z1 - z0) / dx;
                    var b = z0 - a * x0;
                    minY = a * minX + b;
                    maxY = a * maxX + b;
                }
                if (minY > maxY) {
                    var tmp = maxY;
                    maxY = minY;
                    minY = tmp;
                }
                if (maxY > rectMaxZ) {
                    maxY = rectMaxZ;
                }
                if (minY < rectMinZ) {
                    minY = rectMinZ;
                }
                if (minY > maxY) {
                    return false;
                }
                return true;
            }
        };
        exports.
        default = Physics;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _ObjectPooler = __webpack_require__(5);
        var CharacterTryouts = {};
        CharacterTryouts.isTryingOut = null;
        CharacterTryouts.roundsLeft = 0;
        CharacterTryouts.roundsSinceTryout = Infinity;
        CharacterTryouts.startTryout = function (characterName, amountOfRounds, isAppPromo) {
            this.roundsSinceTryout = 0;
            this.roundsLeft = amountOfRounds;
            this.isTryingOut = characterName;
            this.characterPreTryouts = _Game2.
            default.playerController.currentCharacterName;
            this.isAppPromo = isAppPromo || false;
        };
        CharacterTryouts.roundEnded = function () {
            if (this.isTryingOut === null) {
                this.roundsSinceTryout++;
            }
            this.roundsLeft--;
            if (this.roundsLeft <= 0) {
                this.isTryingOut = null;
            }
        };
        CharacterTryouts.resetTryout = function () {
            this.roundsLeft = 0;
            this.isTryingOut = null;
            this.isAppPromo = false;
        };
        CharacterTryouts.setCharacterIfTryingOut = function () {
            var changeCharacterTo;
            if (!this.isTryingOut) {
                if (this.characterPreTryouts && _Game2.default.playerController.currentCharacterName !== this.characterPreTryouts) {
                    changeCharacterTo = this.characterPreTryouts;
                    this.characterPreTryouts = null;
                } else {
                    return;
                }
            } else if (this.isTryingOut === _Game2.default.playerController.currentCharacterName) {
                return;
            } else {
                changeCharacterTo = this.isTryingOut;
            }
            var characterIndex = Object.keys(characters).indexOf(changeCharacterTo);
            var character = characters[changeCharacterTo];
            var characterModel = (0, _ObjectPooler.importMesh)('Carousel.characters[' + _Game2.default.currentWorld + '][' + characterIndex, character.mesh, false, true);
            _Game2.
            default.scene.add(characterModel);
            _Game2.
            default.playerController.setCharacter(characterModel, changeCharacterTo);
        };
        exports.
        default = CharacterTryouts;
    },
    function (module, exports) {
        function getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return false;
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.
        default = getQueryVariable;
    },
    function (module, exports, __webpack_require__) {
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isInSplitTestGroup = exports.assignTestGroups = undefined;
        var _extends = Object.assign ||
            function (target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _getQueryVariable = __webpack_require__(18);
        var _getQueryVariable2 = _interopRequireDefault(_getQueryVariable);
        var now = new Date();
        var defaults = {
            id: null,
            start: null,
            end: null,
            disabled: false,
            groups: [],
            domains: null
        };
        var tests = [_extends({},
            defaults, {
                id: 'easy-access',
                groups: [{
                        id: 'control',
                        size: 1 / 2
                    },
                    {
                        id: 'new',
                        size: 1 / 2
                    }
                ]
            })];
        var chooseRandomGroupFromTest = function chooseRandomGroupFromTest(test) {
            var roll = Math.random();
            var chosenGroup = null;
            var chance = 0;
            test.groups.forEach(function (group) {
                if (chosenGroup) {
                    return;
                }
                chance += group.size;
                if (roll <= chance) {
                    chosenGroup = group;
                }
            });
            return chosenGroup;
        };
        var getCurrentlyActiveTests = function getCurrentlyActiveTests(domain) {
            return tests.filter(function (test) {
                return !test.disabled && (test.domains === null || test.domains.indexOf(domain) !== -1) && (!test.start || test.start <= now) && (!test.end || test.end >= now);
            });
        };
        var assignTestGroups = exports.assignTestGroups = function assignTestGroups(domain) {
            getCurrentlyActiveTests(domain).forEach(function (test) {
                var cookieData = getCookieData();
                var cookieGroupId = cookieData ? cookieData[test.id] : null;
                if (cookieGroupId) {
                    assignGroupToTest(cookieGroupId, test.id);
                    return;
                }
                var group = chooseRandomGroupFromTest(test);
                assignGroupToTest(group.id, test.id);
            });
        };
        var assignGroupToTest = function assignGroupToTest(groupId, testId) {
            updateCookieData(_extends({},
                cachedCookieData, _defineProperty({},
                    testId, groupId)));
            window.splitTestGroups = window.splitTestGroups || [];
            window.splitTestGroups[testId] = groupId;
        };
        var cachedCookieData = null;
        var getCookieData = function getCookieData() {
            if (cachedCookieData !== null) {
                return cachedCookieData;
            }
            var cookie = _Storage2.
            default.getItem('splitTests');
            if (cookie) {
                cachedCookieData = JSON.parse(cookie);
            }
            return cachedCookieData;
        };
        var updateCookieData = function updateCookieData(data) {
            cachedCookieData = data;
            _Storage2.
            default.setItem('splitTests', JSON.stringify(data));
        };
        var isInSplitTestGroup = exports.isInSplitTestGroup = function isInSplitTestGroup(test, group) {
            var forceGroup = (0, _getQueryVariable2.default)('split-test-' + test);
            if (forceGroup) {
                return forceGroup === group;
            }
            return window.splitTestGroups && window.splitTestGroups[test] && window.splitTestGroups[test] === group;
        };
    }, ,
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _FreeGiftScreen = __webpack_require__(31);
        var _FreeGiftScreen2 = _interopRequireDefault(_FreeGiftScreen);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _Messager = __webpack_require__(23);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var FreeGift = {};
        FreeGift.lastGiftTimeKey = 'lastGiftTime';
        FreeGift.giftsGivenKey = 'giftsGiven';
        FreeGift.timeToGift = [0, 3, 10, 60, 60, 60, 60, 60, 60, 60];
        FreeGift.rewards = [100, 35, 50, 20, 25, 80, 60, 20, 40, 50];
        FreeGift.shakeNextBar = false;
        FreeGift.giftsGiven = null;
        FreeGift.lastGiftTime = null;
        FreeGift.opportunitiesShowedSinceLastWatched = 0;
        FreeGift.getLastGiftTime = function () {
            if (this.lastGiftTime !== null) {
                return this.lastGiftTime;
            }
            var lastGiftTime = _Storage2.
            default.getItem(this.lastGiftTimeKey);
            if (lastGiftTime !== null) {
                this.lastGiftTime = parseInt(lastGiftTime, 10);
            }
            return this.lastGiftTime || 0;
        };
        FreeGift.getGiftsGiven = function () {
            if (this.giftsGiven !== null) {
                return this.giftsGiven;
            }
            var giftsGiven = _Storage2.
            default.getItem(this.giftsGivenKey);
            if (giftsGiven !== null) {
                this.giftsGiven = parseInt(giftsGiven, 10);
            }
            return this.giftsGiven || 0;
        };
        FreeGift.getTimeNeededForNextGift = function () {
            var giftsGiven = this.getGiftsGiven();
            var timeToCurrentGift = this.timeToGift[Math.min(giftsGiven, this.timeToGift.length - 1)];
            return msToCurrentGift = timeToCurrentGift * 60 * 1000;
        };
        FreeGift.getTimeToGift = function () {
            var lastGiftTime = this.getLastGiftTime();
            var msToCurrentGift = this.getTimeNeededForNextGift();
            var timeSpentSinceLastGift = Date.now() - lastGiftTime;
            return msToCurrentGift - timeSpentSinceLastGift;
        };
        FreeGift.getCurrentReward = function () {
            var giftsGiven = this.getGiftsGiven();
            return this.rewards[Math.min(giftsGiven, this.timeToGift.length - 1)];
        };
        FreeGift.timeToText = function (milliseconds) {
            var seconds = parseInt(milliseconds / 1000 % 60),
                minutes = parseInt(milliseconds / (1000 * 60) % 60),
                hours = parseInt(milliseconds / (1000 * 60 * 60) % 24);
            minutes = Math.ceil(minutes + seconds / 60);
            if (minutes === 60) {
                hours++;
            }
            var textHours, textMinutes;
            if (hours > 0) {
                textHours = hours;
            }
            if (minutes > 0 && minutes !== 60) {
                textMinutes = minutes;
            }
            var text;
            if (textHours && textMinutes) {
                text = _Localisation2.
                default.GetString('free-gift-in-time');
            } else if (textHours) {
                text = _Localisation2.
                default.GetString('free-gift-in-time-hours');
            } else {
                text = _Localisation2.
                default.GetString('free-gift-in-time-minutes');
                if (!textMinutes) {
                    textMinutes = '1';
                }
            }
            return text.trim().replace('XXX', textHours).replace('YYY', textMinutes);
        };
        FreeGift.areThereAnyGiftsLeft = function () {
            return FreeGift.getGiftsGiven() < FreeGift.timeToGift.length;
        };
        FreeGift.notificationBar = function () {
            var bar;
            var timeToGift = this.getTimeToGift();
            if (timeToGift <= 0) {
                FreeGift.opportunitiesShowedSinceLastWatched++;
                analytics.track('free_gift', 'notification_shown');
                FreeGift.notificationClickSent = false;
                var text = _Localisation2.
                default.GetString('free-gift');
                bar = _Interface2.
                default.notificationBar(text, 'free-gift',
                    function () {
                        if (!FreeGift.notificationClickSent) {
                            analytics.track('free_gift', 'notification_click');
                        }
                        FreeGift.notificationClickSent = true;
                        _GumballMachineScreen2.
                        default.opportunitiesShowedSinceLastWatched = 0;
                        _FreeGiftScreen2.
                        default.show();
                    });
                bar.shakeMe = FreeGift.shakeNextBar;
            } else {
                bar = _Interface2.
                default.notificationBar(FreeGift.timeToText(timeToGift), 'free-gift');
            }
            this.currentBar = bar;
        };
        FreeGift.transformFreeGiftBarToTimeBar = function () {
            if (this.areThereAnyGiftsLeft()) {
                _Interface2.
                default.slideNewText(this.currentBar, FreeGift.timeToText(this.getTimeToGift()));
            } else {
                this.currentBar.background.visible = false;
            }
        };
        FreeGift.giftWasAwarded = function () {
            if (!this.giftsGiven) {
                analytics.track('game_onboarding', 'first_gift_given');
            }
            this.giftsGiven += 1;
            analytics.track('free_gift', 'opened', this.giftsGiven, this.giftsGiven);
            this.lastGiftTime = Date.now();
            _Storage2.
            default.setItem(this.lastGiftTimeKey, this.lastGiftTime);
            _Storage2.
            default.setItem(this.giftsGivenKey, this.giftsGiven);
            (0, _Messager.sendGameDataToPlayground)();
        };
        exports.
        default = FreeGift;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _anchors = __webpack_require__(41);
        var _anchors2 = _interopRequireDefault(_anchors);
        var DisplayObject = function DisplayObject(ui, x, y, width, height) {
            this.uuid = [performance.now(), Math.random()].join('-');
            this.ui = ui;
            this.x = typeof x !== 'undefined' ? x : 0;
            this.y = typeof y !== 'undefined' ? y : 0;
            this.width = typeof width !== 'undefined' ? width : 0;
            this.height = typeof height !== 'undefined' ? height : 0;
            this.rotation = 0;
            this.alpha = 1;
            this.visible = true;
            this.pivot = {
                x: 0.5,
                y: 0.5
            };
            this.anchor = {
                x: _anchors2.
                default.left,
                y: _anchors2.
                default.top
            };
            this.smoothing = false;
            this.stretch = {
                x: false,
                y: false
            };
            this.offset = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            this.parent = undefined;
            this.forceEventsWhenVisible = true;
            this.eventHandlers = [];
            this.disabled = false;
        };
        DisplayObject.prototype.getBounds = function () {
            var position = this.determinePositionInCanvas();
            var dimensions = this.determineDimensionsInCanvas();
            return {
                x: position.x,
                y: position.y,
                width: dimensions.width,
                height: dimensions.height
            };
        };
        DisplayObject.prototype.getParentBounds = function () {
            if (typeof this.parent === 'undefined') {
                return {
                    x: 0,
                    y: 0,
                    width: this.ui.width,
                    height: this.ui.height
                };
            } else if (this.parent instanceof DisplayObject) {
                return this.parent.getBounds();
            } else {
                throw new Error('DisplayObject.parent should always be an instance of DisplayObject');
            }
        };
        DisplayObject.prototype.determinePositionInCanvas = function () {
            var position = {
                x: typeof this.x === 'number' ? this.x : 0,
                y: typeof this.y === 'number' ? this.y : 0
            };
            if (this.stretch.x || this.stretch.y) {
                var parentBounds = this.getParentBounds();
                var offset = this.getOffsetInCanvas();
                if (this.stretch.x) {
                    position.x = parentBounds.x + offset.left;
                }
                if (this.stretch.y) {
                    position.y = parentBounds.y + offset.top;
                }
            }
            position = this.adjustPositionForAnchor(position.x, position.y);
            position = this.adjustPositionForPivot(position.x, position.y);
            return position;
        };
        DisplayObject.prototype.determineDimensionsInCanvas = function () {
            var dimensions = {
                width: typeof this.width === 'number' ? this.width : 0,
                height: typeof this.height === 'number' ? this.height : 0
            };
            if (this.stretch.x || this.stretch.y) {
                var parentBounds = this.getParentBounds();
                var offset = this.getOffsetInCanvas();
                if (this.stretch.x) {
                    dimensions.width = parentBounds.width - offset.left - offset.right;
                }
                if (this.stretch.y) {
                    dimensions.height = parentBounds.height - offset.top - offset.bottom;
                }
            } else {
                dimensions.width *= 1;
                dimensions.height *= 1;
            }
            return dimensions;
        };
        DisplayObject.prototype.adjustPositionForAnchor = function (x, y) {
            var parentBounds = this.getParentBounds();
            if (!this.stretch.x) {
                if (this.anchor.x === _anchors2.default.left) {
                    x = parentBounds.x + x;
                } else if (this.anchor.x === _anchors2.default.right) {
                    x = parentBounds.x + parentBounds.width - x;
                } else if (this.anchor.x === _anchors2.default.center) {
                    x = parentBounds.x + parentBounds.width * .5 + x;
                }
            }
            if (!this.stretch.y) {
                if (this.anchor.y === _anchors2.default.top) {
                    y = parentBounds.y + y;
                } else if (this.anchor.y === _anchors2.default.bottom) {
                    y = parentBounds.y + parentBounds.height - y;
                } else if (this.anchor.y === _anchors2.default.center) {
                    y = parentBounds.y + parentBounds.height * .5 + y;
                }
            }
            return {
                x: x,
                y: y
            };
        };
        DisplayObject.prototype.getOffsetInCanvas = function () {
            var this$1 = this;
            var offset = {
                left: this.offset.left,
                top: this.offset.top,
                right: this.offset.right,
                bottom: this.offset.bottom
            };
            var parentBounds;
            var keys = Object.keys(offset);
            var length = keys.length;
            for (var i = 0; i < length; i++) {
                var key = keys[i];
                var value = offset[key];
                if (typeof value !== 'number') {
                    parentBounds = parentBounds || this$1.getParentBounds();
                    var percValue = parseFloat(value.match(/^([0-9\.]+)%$/)[1]);
                    offset[key] = percValue / 100 * parentBounds.width;
                }
            }
            return offset;
        };
        DisplayObject.prototype.adjustPositionForPivot = function (x, y) {
            x = x - this.width * 1 * this.pivot.x;
            y = y - this.height * 1 * this.pivot.y;
            return {
                x: x,
                y: y
            };
        };
        DisplayObject.prototype.shouldReceiveEvents = function () {
            return this.visible && (this.alpha > 0 || this.forceEventsWhenVisible);
        };
        DisplayObject.prototype.onClick = function (callback) {
            this.eventHandlers['click'] = this.eventHandlers['click'] || [];
            this.eventHandlers['click'].push(callback);
            this.ui.addEventListener('click',
                function () {
                    if (this.ui.disableInput) {
                        return;
                    }
                    if (this.disabled) {
                        return;
                    }
                    callback();
                }.bind(this), this);
        };
        DisplayObject.prototype.fireEvent = function (type) {
            (this.eventHandlers[type] || []).forEach(function (handler) {
                handler();
            });
        };
        DisplayObject.prototype.removeEventListeners = function (type) {
            this.eventHandlers[type] = [];
            this.ui.removeEventListeners(type, this);
        };
        DisplayObject.prototype.render = function (context, resolution) {
            if (!this.visible || this.alpha === 0) {
                return;
            }
            resolution = resolution || 1;
            context.save();
            var bounds = this.getBounds();
            if (this.rotation) {
                var radians = Math.PI / 180 * this.rotation;
                var pivotAdjustment = this.adjustPositionForPivot(0, 0);
                var moveX = bounds.x - pivotAdjustment.x;
                var moveY = bounds.y - pivotAdjustment.y;
                context.translate(moveX, moveY);
                context.rotate(radians);
                context.translate(-moveX, -moveY);
            }
            context.globalAlpha = this.alpha;
            if (typeof context['mozImageSmoothingEnabled'] !== 'undefined') {
                context['mozImageSmoothingEnabled'] = this.smoothing;
            }
            if (typeof context['webkitImageSmoothingEnabled'] !== 'undefined') {
                context['webkitImageSmoothingEnabled'] = this.smoothing;
            }
            if (typeof context['msImageSmoothingEnabled'] !== 'undefined') {
                context['msImageSmoothingEnabled'] = this.smoothing;
            }
            if (typeof context['imageSmoothingEnabled'] !== 'undefined') {
                context['imageSmoothingEnabled'] = this.smoothing;
            }
            this.draw(context, bounds.x * resolution, bounds.y * resolution, bounds.width * resolution, bounds.height * resolution);
            context.restore();
        };
        DisplayObject.draw = function (context, x, y, width, height) {};
        Object.defineProperty(DisplayObject.prototype, '_proxied_visible', {
            get: function get() {
                if (this.parent && this.parent !== this && !this.parent.visible) {
                    return false;
                } else {
                    return this._visible;
                }
            },
            set: function set(toggle) {
                return this._visible = toggle;
            }
        });
        exports.
        default = DisplayObject;
    },
    function (module, exports, __webpack_require__) {
        function sendGameDataToPlayground() {
            var target = window.parent;
            var unlockedCharacters = [];
            Object.keys(_Game2.default ? _Game2.default.characters || {} : {}).forEach(function (key, idx) {
                var character = _Game2.
                default.characters[key];
                if (character.locked) {
                    return;
                }
                if (!_GameSave2.default.GetCharacter(idx)) {
                    return;
                }
                unlockedCharacters.push(key);
            });
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.sendGameDataToPlayground = sendGameDataToPlayground;
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _FreeGift = __webpack_require__(21);
        var _FreeGift2 = _interopRequireDefault(_FreeGift);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        window.setInterval(function () {
                sendGameDataToPlayground();
            },
            60 * 1000);
    },
    function (module, exports, __webpack_require__) {
        function RapidsParticle() {
            var texLoader = new THREE.TextureLoader();
            this.spriteSheet = texLoader.load('sprites/particles.png');
            this.texOffset = Math.random();
            var rapidsUV = [new THREE.Vector2(0, 1), new THREE.Vector2(0.5, 1), new THREE.Vector2(0.5, 0.75), new THREE.Vector2(0, 0.75)];
            var geo = new THREE.PlaneGeometry(1.1, 2.2, 1, 1);
            geo.faceVertexUvs[0][0] = [rapidsUV[0], rapidsUV[1], rapidsUV[3]];
            geo.faceVertexUvs[0][1] = [rapidsUV[1], rapidsUV[2], rapidsUV[3]];
            geo.uvsNeedUpdate = true;
            this.textureCanvas = new THREE.Texture(this.spriteSheet, THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping);
            this.textureCanvas.uvsNeedUpdate = true;
            this.movieMaterial = new THREE.MeshBasicMaterial({
                alphaMap: this.spriteSheet,
                transparent: true,
                color: 0xFFFFFFFF,
                side: THREE.DoubleSide
            });
            this.movieMesh = new THREE.Mesh(geo, this.movieMaterial);
            this.movieMesh.name = "rapids";
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);;
        RapidsParticle.prototype = {
            constructor: RapidsParticle,
            tick: function tick(deltaTime) {
                this.texOffset += deltaTime * 5;
                this.movieMesh.material.alphaMap.offset.set(Math.sin(this.texOffset) * 0.01, 0);
            },
            pool: function pool() {
                _Game2.
                default.removefromPhysics(this);
                RapidsParticle.pool.push(this);
                _Game2.
                default.scene.remove(this.movieMesh);
            },
            reset: function reset(x, y, z) {
                this.movieMesh.position.set(x, y, z);
            }
        };
        RapidsParticle.pool = [];
        RapidsParticle.getRapidsParticle = function (x, y, z, rotation) {
            var particle;
            if (RapidsParticle.pool.length <= 0) {
                particle = new RapidsParticle();
            } else {
                particle = RapidsParticle.pool.pop();
            }
            _Game2.
            default.scene.add(particle.movieMesh);
            particle.movieMesh.position.set(x, y, z);
            particle.movieMesh.rotation.set(Math.PI * 3 / 2, 0, Math.PI * rotation / 2, 'XYZ');
            _Game2.
            default.physicsObjects.push(particle);
            return particle;
        };
        exports.
        default = RapidsParticle;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _cars = __webpack_require__(39);
        var _Lillypad = __webpack_require__(37);
        var _Lillypad2 = _interopRequireDefault(_Lillypad);
        var _logs = __webpack_require__(40);
        var _trains = __webpack_require__(36);
        var _RapidsParticle = __webpack_require__(24);
        var _RapidsParticle2 = _interopRequireDefault(_RapidsParticle);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var StripOriginal = function StripOriginal() {};
        StripOriginal.coinSpawnChance = 0.09;
        StripOriginal.redCoinChance = 0;
        StripOriginal.prototype = {
            setup: function setup() {
                this.heightOffset = 0.375;
                this.xSpawnDistance = 12.5;
                this.doSpawnCoin = false;
                this.doCastShadows = false;
                this.cells = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
                this.objects = [];
                this.CarSpawner = null;
                this.LogSpawner = null;
                this.TrainSpawner = null;
                this.stripTrainSpawner = null;
                this.waterDeathBox = null;
                this.Category = "none";
                this.Type = "none";
                this.row = 0;
                this.Variation = 0;
            },
            SpawnLaneOfType: function SpawnLaneOfType(ln, laneNum, previousLane) {
                var this$1 = this;
                this.stripName = ln;
                var even = laneNum % 2;
                this.row = laneNum;
                this.heightOffset = 0.375;
                this.doSpawnCoin = true;
                this.doCastShadows = false;
                if (ln == "road") {
                    this.Category = "road";
                    this.heightOffset = 0.25;
                    var road;
                    if (_Game2.default.levelGenerator.previousLaneType != "car" && _Game2.default.levelGenerator.previousLaneType != "truck") {
                        road = this.GetLaneObject("strip-road-2");
                    } else {
                        road = this.GetLaneObject("strip-road-1");
                    }
                    road.rotation.y = Math.PI;
                    var dir = Math.random() > 0.5;
                    var idir = dir ? 1 : -1;
                    var typeToSpawn = Math.random() > 0.831 ? "vehicle-truck" : "vehicle-car";
                    this.CarSpawner = _cars.CarSpawner.Get(typeToSpawn, dir, idir * -this.xSpawnDistance, 0.25, -laneNum);
                    if (typeToSpawn === "vehicle-truck") {
                        this.Type = "truck";
                    } else {
                        this.Type = "car";
                    }
                    this.RandomSpawnCoin(_Utils2.default.getRandomInt(-4, 4));
                    return road;
                } else if (ln == "grass") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.doSpawnCoin = false;
                    var freeSpots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var spotUsed = [false, false, false, false, false, false, false, false, false];
                    var totalSpots = 1;
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {
                            freeSpots[0] = 0;
                            spotUsed[x + 4] = false;
                        } else if (Math.random() < 0.333) {
                            this$1.SpawnBlock(x);
                            spotUsed[x + 4] = true;
                        } else {
                            freeSpots[totalSpots] = x;
                            spotUsed[x + 4] = false;
                            totalSpots++;
                        }
                    }
                    var coinX = Math.floor(Math.random() * totalSpots);
                    if (this.RandomSpawnCoin(freeSpots[coinX])) {
                        spotUsed[freeSpots[coinX] + 4] = true;
                    }
                    var miscX = Math.floor(Math.random() * totalSpots);
                    var xPosition = freeSpots[miscX];
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "log-left") {
                    return this.SpawnLogLane("left", "normal");
                } else if (ln == "log-right") {
                    return this.SpawnLogLane("right", "normal");
                } else if (ln == "log-right-poop-slow") {
                    return this.SpawnLogLane("right", "poop-slow");
                } else if (ln == "log-right-poop-fast") {
                    return this.SpawnLogLane("right", "poop-fast");
                } else if (ln == "log-right-poop") {
                    return this.SpawnLogLane("right", "poop");
                } else if (ln == "log-left-poop-slow") {
                    return this.SpawnLogLane("left", "poop-slow");
                } else if (ln == "log-left-poop-fast") {
                    return this.SpawnLogLane("left", "poop-fast");
                } else if (ln == "log-left-poop") {
                    return this.SpawnLogLane("left", "poop");
                } else if (ln == "grass-hole") {
                    this.Category = "grass";
                    this.Type = "grass";
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {
                            continue;
                        }
                        this$1.SpawnBlock(x);
                    }
                    this.SpawnForest(laneNum);
                    this.RandomSpawnCoin(0.0);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "grass-empty") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    var coinX = Math.round(Math.random() * 4 - 4);
                    if (Math.random() > 0.55) {
                        this.SpawnCoin(coinX);
                    }
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "grass-start") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "field-mid") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "water-lilypad-rand") {
                    this.Type = "lily";
                    this.Category = "water";
                    this.heightOffset = 0.45;
                    var newLily3 = _Lillypad2.
                    default.Get(0, this.heightOffset - 0.15, -laneNum);
                    this.objects.push(newLily3);
                    var l1 = 0;
                    var l2 = 0;
                    while (l1 == 0) {
                        l1 = Math.floor(Math.random() * 6 - 3);
                    }
                    while (l2 == l1 || l2 == 0) {
                        l2 = Math.floor(Math.random() * 6 - 3);
                    }
                    var possibleCoinSpawns = [0];
                    if (Math.random() < 0.5) {
                        var newLily = _Lillypad2.
                        default.Get(l1, this.heightOffset - 0.15, -laneNum);
                        this.objects.push(newLily);
                        possibleCoinSpawns.push(l1);
                    }
                    if (Math.random() < 0.5) {
                        var newLily2 = _Lillypad2.
                        default.Get(l2, this.heightOffset - 0.15, -laneNum);
                        this.objects.push(newLily2);
                        possibleCoinSpawns.push(l2);
                    }
                    if (possibleCoinSpawns.length > 0) {
                        this.RandomSpawnCoin(possibleCoinSpawns[_Utils2.default.getRandomInt(0, possibleCoinSpawns.length - 1)]);
                    }
                    this.SpawnBothRapids();
                    return this.GetLaneObject("strip-water");
                } else if (ln == "water-lilypad-center") {
                    this.Type = "lily";
                    this.Category = "water";
                    heightOffset = 0.45;
                    this.SpawnBothRapids();
                    var newLily3 = _Lillypad2.
                    default.Get(0, this.heightOffset - 0.15, -laneNum);
                    this.objects.push(newLily3);
                    this.RandomSpawnCoin(0);
                    return this.GetLaneObject("strip-water");
                } else if (ln == "train") {
                    this.Type = "train";
                    this.Category = "train";
                    this.heightOffset = 0.25;
                    var dir = Math.random() > 0.5;
                    var idir = dir ? 1 : -1;
                    this.TrainSpawner = _trains.TrainSpawner.Get(idir, idir * this.xSpawnDistance, 0.375, -this.row);
                    this.RandomSpawnCoin(_Utils2.default.getRandomInt(-4, 4));
                    return this.GetLaneObject("strip-train");
                } else if (ln == "start-forest") {
                    this.Category = "forest";
                    this.Type = "grass";
                    this.SpawnBlock(-4);
                    this.SpawnBlock(-3);
                    this.SpawnBlock(-2);
                    this.SpawnBlock(-1);
                    this.SpawnBlock(0);
                    this.SpawnBlock(1);
                    this.SpawnBlock(2);
                    this.SpawnBlock(3);
                    this.SpawnBlock(4);
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "tutorial-grass-empty") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnBlock(-4);
                    this.SpawnBlock(4);
                    this.SpawnBlock(-3);
                    this.SpawnBlock(3);
                    this.SpawnBlock(2);
                    this.SpawnBlock(1);
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "tutorial-grass-neat") {
                    this.SpawnBlock(-4);
                    this.SpawnBlock(-3);
                    this.SpawnBlock(-2);
                    this.SpawnBlock(2);
                    this.SpawnBlock(3);
                    this.SpawnBlock(4);
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "tutorial-grass") {
                    this.Category = "grass";
                    this.Type = "grass";
                    doSpawnCoin = false;
                    this.SpawnForest(laneNum);
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {} else if (x == 4 || x == -4) {
                            this$1.SpawnBlock(x);
                        } else if (Math.random() < 0.33) {
                            this$1.SpawnBlock(x);
                        }
                    }
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "tutorial-hole-center") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {
                            this$1.SpawnCoinTutorial(0);
                            continue;
                        }
                        this$1.SpawnBlock(x);
                    }
                    doSpawnCoin = false;
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "tutorial-hole-left") {
                    this.Category = "grass";
                    this.Type = "grass";
                    for (var x = -4; x < 5; x++) {
                        if (x == -2) {
                            this$1.SpawnCoinTutorial(-2);
                            continue;
                        }
                        this$1.SpawnBlock(x);
                    }
                    this.SpawnForest(laneNum);
                    doSpawnCoin = false;
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                } else if (ln == "grass-empty-normal") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("strip-grass-1");
                    } else {
                        return this.GetLaneObject("strip-grass-2");
                    }
                    if (Random.value > 0.9) {
                        var birdX = Random.Range(-4, 4);
                        this.SpawnFieldBird(birdX);
                    }
                } else {
                    return ln;
                }
                if (doSpawnCoin) {
                    RandomSpawnCoin(Random.Range(-4, 4));
                }
                if (GameController.instance.worldShaderOverride != null) {
                    getMeshRenderer().material.shader = GameController.instance.worldShaderOverride;
                }
                if (doCastShadows) {
                    getMeshRenderer().shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
                } else {
                    getMeshRenderer().shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
                }
            },
            GetLaneObject: function GetLaneObject(laneName) {
                var newLane = _Game2.
                default.objectPooler.GetItemOfType(laneName);
                newLane.matrixAutoUpdate = false;
                return newLane;
            },
            ClearStripText: function ClearStripText() {
                textScore.gameObject.SetActive(false);
                textScoreShadow.gameObject.SetActive(false);
                textScore.text = textScoreShadow.text = "";
            },
            ShowStripScore: function ShowStripScore(listNames, score) {
                var scoreString = "";
                while (scoreString.Length < 80) {
                    for (var i = 0; i < listNames.Count; ++i) {
                        scoreString += listNames[i] + " " + score.ToString() + "  ";
                    }
                }
            },
            ShowStripText: function ShowStripText(text) {
                textScore.gameObject.SetActive(true);
                textScoreShadow.gameObject.SetActive(true);
                textScore.text = textScoreShadow.text = text;
                textScore.transform.localPosition = textScoreShadow.transform.localPosition + new Vector3(-0.02, 0.03, 0.02);
            },
            SpawnBlock: function SpawnBlock(xPosition) {
                if (this.cells[xPosition + 4] != "none") {
                    return;
                }
                var block;
                if (xPosition < -2 || xPosition > 2 || Math.random() < 0.1) {
                    block = this.GetLaneObject("blocking-object-tall");
                } else {
                    block = this.GetLaneObject("blocking-object-short");
                }
                block.position.set(xPosition, this.heightOffset, -this.row);
                block.rotateY(Math.PI);
                this.cells[xPosition + 4] = block.name;
                this.objects.push(block);
                return block;
            },
            SpawnLogSpawner: function SpawnLogSpawner(moveDirection, halfspeed) {
                var newls;
                var logY = -0.13;
                if (moveDirection == "left") {
                    newls = _logs.LogSpawner.Get(false, -this.xSpawnDistance, logY, -this.row, halfspeed);
                } else if (moveDirection == "right") {
                    newls = _logs.LogSpawner.Get(true, this.xSpawnDistance, logY, -this.row, halfspeed);
                } else {
                    console.log("Warning: no log direction supplied.");
                }
                return newls;
            },
            RandomSpawnCoin: function RandomSpawnCoin(xPosition) {
                if (Math.random() < StripOriginal.coinSpawnChance) {
                    this.SpawnCoin(xPosition);
                    return true;
                } else {
                    return false;
                }
            },
            SpawnCoin: function SpawnCoin(xPosition) {
                var newCoin;
                if (Math.random() <= StripOriginal.redCoinChance) {
                    newCoin = this.GetLaneObject("red-coin");
                } else {
                    newCoin = this.GetLaneObject("coin");
                }
                this.objects.push(newCoin);
                newCoin.position.set(xPosition, this.heightOffset, -this.row);
            },
            SpawnCoinTutorial: function SpawnCoinTutorial(xPosition) {
                var newCoin = this.GetLaneObject("coin");
                this.objects.push(newCoin);
                newCoin.position.set(xPosition, this.heightOffset, -this.row);
            },
            SpawnRapids: function SpawnRapids(xPosition, doFlip) {
                if (!isMobile) {
                    var rapids = _RapidsParticle2.
                    default.getRapidsParticle(xPosition, 0.1475, -this.row, doFlip ? 3 : 1);
                    this.objects.push(rapids);
                }
            },
            SpawnLogLane: function SpawnLogLane(direction, halfspeed) {
                this.Category = "water";
                this.Type = "log";
                this.LogSpawner = this.SpawnLogSpawner(direction, halfspeed);
                this.heightOffset = 0.375 + 0.02;
                this.SpawnBothRapids();
                this.RandomSpawnCoin();
                return this.GetLaneObject("strip-water");
            },
            SpawnBothRapids: function SpawnBothRapids() {
                this.SpawnRapids(-4.55, false);
                this.SpawnRapids(4.55, true);
            },
            SpawnFieldBird: function SpawnFieldBird(xPosition) {
                if (xPosition == 999) {
                    xPosition = Math.floor(Math.random() * 9 - 4);
                }
                var bird = this.GetLaneObject("bird-idle-1");
                this.objects.push(bird);
                bird.position.set(xPosition, this.heightOffset, -this.row);
            },
            SpawnForest: function SpawnForest(laneNum) {
                var newForest = this.GetLaneObject("forest");
                newForest.position.set(-7.5, 0.375, -laneNum + -(laneNum % 2) * 0.005);
                this.objects.push(newForest);
                var nextnewforest = this.GetLaneObject("forest");
                nextnewforest.position.set(7.5, 0.375, -laneNum + -(laneNum % 2) * 0.005);
                this.objects.push(nextnewforest);
            },
            PoolAllObjects: function PoolAllObjects() {
                var this$1 = this;
                while (this.objects.length > 0) {
                    var object = this$1.objects.pop();
                    if (typeof object.pool === 'function') {
                        object.pool();
                        continue;
                    } else {
                        object.position.set(-60, -60, -60);
                        _Game2.
                        default.objectPooler.EnterPool(object.name, object);
                    }
                }
                if (this.CarSpawner != null) {
                    this.CarSpawner.pool();
                }
                if (this.LogSpawner != null) {
                    this.LogSpawner.pool();
                }
                if (this.TrainSpawner != null) {
                    this.TrainSpawner.pool();
                }
                this.lane.position.set(-60, -60, -60);
                _Game2.
                default.objectPooler.EnterPool(this.lane.poolName, this.lane);
                stripPool.push(this);
            },
            MatrixUpdate: function MatrixUpdate() {
                var this$1 = this;
                this.lane.updateMatrix();
                var length = this.objects.length;
                for (var i = 0; i < length; i++) {
                    var object = this$1.objects[i];
                    if (typeof object.updateMatrix === 'function') {
                        object.updateMatrix();
                    }
                }
            }
        };
        var stripPool = [];
        StripOriginal.PopulatePool = function (amount) {
            while (stripPool.length < amount) {
                stripPool.push(new StripOriginal());
            }
        };
        StripOriginal.Get = function () {
            var strip;
            if (stripPool.length > 0) {
                strip = stripPool.pop();
            } else {
                strip = new StripOriginal();
            }
            strip.setup();
            return strip;
        };
        exports.
        default = StripOriginal;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _cars = __webpack_require__(39);
        var _Lillypad = __webpack_require__(37);
        var _Lillypad2 = _interopRequireDefault(_Lillypad);
        var _BarrierButton = __webpack_require__(59);
        var _BarrierButton2 = _interopRequireDefault(_BarrierButton);
        var _specimens = __webpack_require__(66);
        var _specimens2 = _interopRequireDefault(_specimens);
        var _logs = __webpack_require__(40);
        var _meteors = __webpack_require__(65);
        var _RapidsParticle = __webpack_require__(24);
        var _RapidsParticle2 = _interopRequireDefault(_RapidsParticle);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var StripSpace = function StripSpace() {};
        StripSpace.coinSpawnChance = 0.09;
        StripSpace.redCoinChance = 0;
        StripSpace.prototype = {
            setup: function setup() {
                this.heightOffset = 0.375;
                this.xSpawnDistance = 12.5;
                this.doSpawnCoin = false;
                this.doCastShadows = false;
                this.cells = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
                this.objects = [];
                this.CarSpawner = null;
                this.LogSpawner = null;
                this.waterDeathBox = null;
                this.Category = "none";
                this.Type = "none";
                this.row = 0;
                this.Variation = 0;
            },
            SpawnLaneOfType: function SpawnLaneOfType(ln, laneNum, previousLane) {
                var this$1 = this;
                this.stripName = ln;
                var even = laneNum % 2;
                this.row = laneNum;
                this.heightOffset = 0.375;
                doSpawnCoin = true;
                this.doCastShadows = false;
                if (ln == "space-road") {
                    this.Category = "road";
                    this.heightOffset = 0.25;
                    var road;
                    if (_Game2.default.levelGenerator.previousLaneType != "car") {
                        road = this.GetLaneObject("space-strip-road-2");
                    } else {
                        road = this.GetLaneObject("space-strip-road-1");
                    }
                    road.rotation.y = Math.PI;
                    var dir = Math.random() > 0.5;
                    var idir = dir ? 1 : -1;
                    var typeToSpawn = "space-vehicle-car";
                    this.CarSpawner = _cars.CarSpawner.Get(typeToSpawn, dir, idir * -this.xSpawnDistance, 1.25, -laneNum);
                    this.Type = "car";
                    this.RandomSpawnCoin(_Utils2.default.getRandomInt(-4, 4));
                    return road;
                } else if (ln == "space-grass") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.doSpawnCoin = false;
                    var freeSpots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var spotUsed = [false, false, false, false, false, false, false, false, false];
                    var totalSpots = 1;
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {
                            freeSpots[0] = 0;
                            spotUsed[x + 4] = false;
                        } else if (Math.random() < 0.333) {
                            this$1.SpawnBlock(x);
                            spotUsed[x + 4] = true;
                        } else {
                            freeSpots[totalSpots] = x;
                            spotUsed[x + 4] = false;
                            totalSpots++;
                        }
                    }
                    var coinX = Math.floor(Math.random() * totalSpots);
                    if (this.RandomSpawnCoin(freeSpots[coinX])) {
                        spotUsed[freeSpots[coinX] + 4] = true;
                    }
                    var miscX = Math.floor(Math.random() * totalSpots);
                    var xPosition = freeSpots[miscX];
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-log-left") {
                    return this.SpawnLogLane("left", "normal");
                } else if (ln == "space-log-right") {
                    return this.SpawnLogLane("right", "normal");
                } else if (ln == "space-log-right-poop-slow") {
                    return this.SpawnLogLane("right", "poop-slow");
                } else if (ln == "space-log-right-poop-fast") {
                    return this.SpawnLogLane("right", "poop-fast");
                } else if (ln == "space-log-right-poop") {
                    return this.SpawnLogLane("right", "poop");
                } else if (ln == "space-log-left-poop-slow") {
                    return this.SpawnLogLane("left", "poop-slow");
                } else if (ln == "space-log-left-poop-fast") {
                    return this.SpawnLogLane("left", "poop-fast");
                } else if (ln == "space-log-left-poop") {
                    return this.SpawnLogLane("left", "poop");
                } else if (ln == "space-grass-hole") {
                    this.Category = "grass";
                    this.Type = "grass";
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {
                            continue;
                        }
                        this$1.SpawnBlock(x);
                    }
                    this.SpawnForest(laneNum);
                    this.RandomSpawnCoin(0.0);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-grass-empty") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    var coinX = Math.round(Math.random() * 4 - 4);
                    if (Math.random() > 0.55) {
                        this.SpawnCoin(coinX);
                    }
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-grass-start") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-field-mid") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-water-lilypad-rand") {
                    this.Type = "lily";
                    this.Category = "water";
                    this.heightOffset = 0.45;
                    var newLily3 = _Lillypad2.
                    default.Get(0, this.heightOffset - 0.15, -laneNum);
                    this.objects.push(newLily3);
                    var l1 = 0;
                    var l2 = 0;
                    while (l1 == 0) {
                        l1 = Math.floor(Math.random() * 6 - 3);
                    }
                    while (l2 == l1 || l2 == 0) {
                        l2 = Math.floor(Math.random() * 6 - 3);
                    }
                    var possibleCoinSpawns = [0];
                    if (Math.random() < 0.5) {
                        var newLily = _Lillypad2.
                        default.Get(l1, this.heightOffset - 0.15, -laneNum);
                        this.objects.push(newLily);
                        possibleCoinSpawns.push(l1);
                    }
                    if (Math.random() < 0.5) {
                        var newLily2 = _Lillypad2.
                        default.Get(l2, this.heightOffset - 0.15, -laneNum);
                        this.objects.push(newLily2);
                        possibleCoinSpawns.push(l2);
                    }
                    if (possibleCoinSpawns.length > 0) {
                        this.RandomSpawnCoin(possibleCoinSpawns[_Utils2.default.getRandomInt(0, possibleCoinSpawns.length - 1)]);
                    }
                    return this.GetLaneObject("space-strip-water");
                } else if (ln == "space-water-lilypad-center") {
                    this.Type = "lily";
                    this.Category = "water";
                    heightOffset = 0.45;
                    var newLily3 = _Lillypad2.
                    default.Get(0, this.heightOffset - 0.15, -laneNum);
                    this.objects.push(newLily3);
                    this.RandomSpawnCoin(0);
                    return this.GetLaneObject("space-strip-water");
                } else if (ln == "space-shower") {
                    this.Type = "lily";
                    this.Category = "water";
                    heightOffset = 0.45;
                    var newLily1 = _Lillypad2.
                    default.Get(-1, this.heightOffset - 0.15, -laneNum);
                    var newLily2 = _Lillypad2.
                    default.Get(0, this.heightOffset - 0.15, -laneNum);
                    var newLily3 = _Lillypad2.
                    default.Get(1, this.heightOffset - 0.15, -laneNum);
                    this.objects.push(newLily1);
                    this.objects.push(newLily2);
                    this.objects.push(newLily3);
                    return this.GetLaneObject("space-strip-water");
                } else if (ln == "space-shower-blocking-5") {
                    this.Type = "lily";
                    this.Category = "water";
                    heightOffset = 0.45;
                    if (Math.random() < 0.5) {
                        var newLily1 = _BarrierButton2.
                        default.Get("left", this.heightOffset - 0.15, -laneNum, this);
                        var newLily2 = _Lillypad2.
                        default.Get(1, this.heightOffset - 0.15, -laneNum);
                        this.heightOffset = 0.25;
                        var idir = -1;
                        this.MeteorSpawner = _meteors.MeteorSpawner.Get(idir, idir * this.xSpawnDistance, this.heightOffset, -this.row);
                    } else {
                        var newLily1 = _BarrierButton2.
                        default.Get("right", this.heightOffset - 0.15, -laneNum, this);
                        var newLily2 = _Lillypad2.
                        default.Get(-1, this.heightOffset - 0.15, -laneNum);
                        this.heightOffset = 0.25;
                        var idir = 1;
                        this.MeteorSpawner = _meteors.MeteorSpawner.Get(idir, idir * this.xSpawnDistance, this.heightOffset, -this.row);
                    }
                    var block = this.GetLaneObject("barrier-spawner");
                    block.position.set(0, this.heightOffset - 0.15, -laneNum);
                    this.cells[4] = block.name;
                    this.objects.push(block);
                    this.objects.push(newLily1);
                    this.objects.push(newLily2);
                    return block;
                    return this.GetLaneObject("space-strip-water");
                } else if (ln == "space-start-forest") {
                    this.Category = "forest";
                    this.Type = "grass";
                    this.SpawnBlock(-4);
                    this.SpawnBlock(-3);
                    this.SpawnBlock(-2);
                    this.SpawnBlock(-1);
                    this.SpawnBlock(0);
                    this.SpawnBlock(1);
                    this.SpawnBlock(2);
                    this.SpawnBlock(3);
                    this.SpawnBlock(4);
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-special-1") {
                    this.Category = "holed";
                    this.Type = "holed";
                    var holedStrip = this.GetLaneObject("space-special-1");
                    this.objects.push(holedStrip);
                    return holedStrip;
                } else if (ln == "space-special-2") {
                    this.Category = "holed";
                    this.Type = "holed";
                    var holedStrip = this.GetLaneObject("space-special-2");
                    this.objects.push(holedStrip);
                    return holedStrip;
                } else if (ln == "space-special-3") {
                    this.Category = "holed";
                    this.Type = "holed";
                    var holedStrip = this.GetLaneObject("space-special-3");
                    this.objects.push(holedStrip);
                    return holedStrip;
                } else if (ln == "space-special-4") {
                    this.Category = "holed";
                    this.Type = "holed";
                    var holedStrip = this.GetLaneObject("space-special-4");
                    this.objects.push(holedStrip);
                    return holedStrip;
                } else if (ln == "space-block-1") {
                    this.Category = "holed";
                    this.Type = "holed";
                    var holedStrip = this.GetLaneObject("space-block-1");
                    this.objects.push(holedStrip);
                    return holedStrip;
                } else if (ln == "space-block-2") {
                    this.Category = "holed";
                    this.Type = "holed";
                    var holedStrip = this.GetLaneObject("space-block-2");
                    this.objects.push(holedStrip);
                    return holedStrip;
                } else if (ln == "tutorial-grass-empty") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnBlock(-4);
                    this.SpawnBlock(4);
                    this.SpawnBlock(-3);
                    this.SpawnBlock(3);
                    this.SpawnBlock(2);
                    this.SpawnBlock(1);
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "tutorial-grass-neat") {
                    this.SpawnBlock(-4);
                    this.SpawnBlock(-3);
                    this.SpawnBlock(-2);
                    this.SpawnBlock(2);
                    this.SpawnBlock(3);
                    this.SpawnBlock(4);
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "tutorial-grass") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.doSpawnCoin = false;
                    this.SpawnForest(laneNum);
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {} else if (x == 4 || x == -4) {
                            this$1.SpawnBlock(x);
                        } else if (Math.random() < 0.33) {
                            this$1.SpawnBlock(x);
                        }
                    }
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "tutorial-hole-center") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    for (var x = -4; x < 5; x++) {
                        if (x == 0) {
                            this$1.SpawnCoinTutorial(0);
                            continue;
                        }
                        this$1.SpawnBlock(x);
                    }
                    this.doSpawnCoin = false;
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "tutorial-hole-left") {
                    this.Category = "grass";
                    this.Type = "grass";
                    for (var x = -4; x < 5; x++) {
                        if (x == -2) {
                            this$1.SpawnCoinTutorial(-2);
                            continue;
                        }
                        this$1.SpawnBlock(x);
                    }
                    this.SpawnForest(laneNum);
                    this.doSpawnCoin = false;
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                } else if (ln == "space-grass-empty-normal") {
                    this.Category = "grass";
                    this.Type = "grass";
                    this.SpawnForest(laneNum);
                    if (even == 0) {
                        return this.GetLaneObject("space-strip-grass-1");
                    } else {
                        return this.GetLaneObject("space-strip-grass-2");
                    }
                    if (Random.value > 0.9) {
                        var birdX = Random.Range(-4, 4);
                        this.SpawnFieldBird(birdX);
                    }
                } else {
                    return ln;
                }
                if (this.doSpawnCoin) {
                    RandomSpawnCoin(Random.Range(-4, 4));
                }
                if (GameController.instance.worldShaderOverride != null) {
                    getMeshRenderer().material.shader = GameController.instance.worldShaderOverride;
                }
                if (doCastShadows) {
                    getMeshRenderer().shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
                } else {
                    getMeshRenderer().shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
                }
            },
            GetLaneObject: function GetLaneObject(laneName) {
                var newLane = _Game2.
                default.objectPooler.GetItemOfType(laneName);
                newLane.matrixAutoUpdate = false;
                return newLane;
            },
            ClearStripText: function ClearStripText() {
                textScore.gameObject.SetActive(false);
                textScoreShadow.gameObject.SetActive(false);
                textScore.text = textScoreShadow.text = "";
            },
            ShowStripScore: function ShowStripScore(listNames, score) {
                var scoreString = "";
                while (scoreString.Length < 80) {
                    for (var i = 0; i < listNames.Count; ++i) {
                        scoreString += listNames[i] + " " + score.ToString() + "  ";
                    }
                }
            },
            ShowStripText: function ShowStripText(text) {
                textScore.gameObject.SetActive(true);
                textScoreShadow.gameObject.SetActive(true);
                textScore.text = textScoreShadow.text = text;
                textScore.transform.localPosition = textScoreShadow.transform.localPosition + new Vector3(-0.02, 0.03, 0.02);
            },
            SpawnBlock: function SpawnBlock(xPosition) {
                if (this.cells[xPosition + 4] != "none") {
                    return;
                }
                var block;
                if (_Game2.default.playerController.currentCharacter.mesh.charName == 'rover') {
                    if (Math.random() <= 0.08) {
                        block = _specimens2.
                        default.Get(xPosition, this.heightOffset, -this.row);
                    } else {
                        if (xPosition < -2 || xPosition > 2 || Math.random() < 0.1) {
                            block = this.GetLaneObject("space-blocking-object-tall");
                        } else {
                            block = this.GetLaneObject("space-blocking-object-short");
                        }
                    }
                } else {
                    if (xPosition < -2 || xPosition > 2 || Math.random() < 0.1) {
                        block = this.GetLaneObject("space-blocking-object-tall");
                    } else {
                        block = this.GetLaneObject("space-blocking-object-short");
                    }
                }
                block.position.set(xPosition, this.heightOffset, -this.row);
                block.rotateY(Math.PI);
                this.cells[xPosition + 4] = block.name;
                this.objects.push(block);
                return block;
            },
            SpawnLogSpawner: function SpawnLogSpawner(moveDirection, halfspeed) {
                var newls;
                var logY = -0.13;
                if (moveDirection == "left") {
                    newls = _logs.LogSpawner.Get(false, -this.xSpawnDistance, logY, -this.row, halfspeed);
                } else if (moveDirection == "right") {
                    newls = _logs.LogSpawner.Get(true, this.xSpawnDistance, logY, -this.row, halfspeed);
                } else {
                    console.log("Warning: no log direction supplied.");
                }
                return newls;
            },
            RandomSpawnCoin: function RandomSpawnCoin(xPosition) {
                if (Math.random() < StripSpace.coinSpawnChance) {
                    this.SpawnCoin(xPosition);
                    return true;
                } else {
                    return false;
                }
            },
            SpawnCoin: function SpawnCoin(xPosition) {
                var newCoin;
                if (Math.random() <= StripSpace.redCoinChance) {
                    newCoin = this.GetLaneObject("red-coin");
                } else {
                    newCoin = this.GetLaneObject("coin");
                }
                this.objects.push(newCoin);
                newCoin.position.set(xPosition, this.heightOffset, -this.row);
            },
            SpawnCoinTutorial: function SpawnCoinTutorial(xPosition) {
                var newCoin = this.GetLaneObject("coin");
                this.objects.push(newCoin);
                newCoin.position.set(xPosition, this.heightOffset, -this.row);
            },
            SpawnRapids: function SpawnRapids(xPosition, doFlip) {
                if (!isMobile) {
                    var rapids = _RapidsParticle2.
                    default.getRapidsParticle(xPosition, 0.1475, -this.row, doFlip ? 3 : 1);
                    this.objects.push(rapids);
                }
            },
            SpawnLogLane: function SpawnLogLane(direction, halfspeed) {
                this.Category = "water";
                this.Type = "log";
                this.LogSpawner = this.SpawnLogSpawner(direction, halfspeed);
                this.heightOffset = 0.375 + 0.02;
                this.RandomSpawnCoin();
                return this.GetLaneObject("space-strip-water");
            },
            SpawnBothRapids: function SpawnBothRapids() {
                this.SpawnRapids(-4.55, false);
                this.SpawnRapids(4.55, true);
            },
            SpawnFieldBird: function SpawnFieldBird(xPosition) {
                if (xPosition == 999) {
                    xPosition = Math.floor(Math.random() * 9 - 4);
                }
                var bird = this.GetLaneObject("bird-idle-1");
                this.objects.push(bird);
                bird.position.set(xPosition, this.heightOffset, -this.row);
            },
            SpawnForest: function SpawnForest(laneNum) {
                var newForest = this.GetLaneObject("space-forest");
                newForest.position.set(-7.5, 0.375, -laneNum + -(laneNum % 2) * 0.005);
                this.objects.push(newForest);
                var nextnewforest = this.GetLaneObject("space-forest");
                nextnewforest.position.set(7.5, 0.375, -laneNum + -(laneNum % 2) * 0.005);
                this.objects.push(nextnewforest);
            },
            PoolAllObjects: function PoolAllObjects() {
                var this$1 = this;
                while (this.objects.length > 0) {
                    var object = this$1.objects.pop();
                    if (typeof object.pool === 'function') {
                        object.pool();
                        continue;
                    } else {
                        object.position.set(-60, -60, -60);
                        _Game2.
                        default.objectPooler.EnterPool(object.name, object);
                    }
                }
                if (this.CarSpawner != null) {
                    this.CarSpawner.pool();
                }
                if (this.LogSpawner != null) {
                    this.LogSpawner.pool();
                }
                this.lane.position.set(-60, -60, -60);
                _Game2.
                default.objectPooler.EnterPool(this.lane.poolName, this.lane);
                stripPool.push(this);
            },
            MatrixUpdate: function MatrixUpdate() {
                var this$1 = this;
                this.lane.updateMatrix();
                var length = this.objects.length;
                for (var i = 0; i < length; i++) {
                    var object = this$1.objects[i];
                    if (typeof object.updateMatrix === 'function') {
                        object.updateMatrix();
                    }
                }
            }
        };
        var stripPool = [];
        StripSpace.PopulatePool = function (amount) {
            while (stripPool.length < amount) {
                stripPool.push(new StripSpace());
            }
        };
        StripSpace.Get = function () {
            var strip;
            if (stripPool.length > 0) {
                strip = stripPool.pop();
            } else {
                strip = new StripSpace();
            }
            strip.setup();
            return strip;
        };
        exports.
        default = StripSpace;
    },
    function (module, exports) {
        module.exports = function (module) {
            if (!module.webpackPolyfill) {
                module.deprecate = function () {};
                module.paths = [];
                if (!module.children) {
                    module.children = [];
                }
                Object.defineProperty(module, "loaded", {
                    enumerable: true,
                    get: function get() {
                        return module.l;
                    }
                });
                Object.defineProperty(module, "id", {
                    enumerable: true,
                    get: function get() {
                        return module.i;
                    }
                });
                module.webpackPolyfill = 1;
            }
            return module;
        };
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Easing = {};
        Easing.easeInQuad = function (t) {
            return t * t;
        };
        Easing.easeOutQuad = function (t) {
            return -1 * t * (t - 2);
        };
        Easing.easeInOutSin = function (t) {
            return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
        };
        Easing.easeInCubic = function (t) {
            return 1 * t * t * t;
        };
        Easing.easeInOutCubic = function (t) {
            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        Easing.easeOutQuart = function (t) {
            return 1 - --t * t * t * t;
        };
        Easing.easeInQuint = function (t) {
            return 1 * t * t * t * t * t;
        };
        Easing.easeOutQuint = function (t) {
            return 1 * (t * t * t * t * t + 1);
        };
        Easing.easeOutBounce = function (t) {
            if ((t /= 1) < 1 / 2.75) {
                return 7.5625 * t * t;
            } else if (t < 2 / 2.75) {
                return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
            } else if (t < 2.5 / 2.75) {
                return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
            } else {
                return 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            }
        };
        exports.
        default = Easing;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var shader = void 0;
        var getShader = function getShader() {
            if (!shader) {
                shader = {
                    uniforms: {
                        "fillLight": {
                            value: new THREE.Vector3(0, 1, 2)
                        },
                        "fillLightColor": {
                            value: new THREE.Color(0.5, 0.5, 0.5)
                        },
                        "dirLight": {
                            value: new THREE.Vector3(-1, 1, 1)
                        },
                        "dirLightColor": {
                            value: new THREE.Color(0.5, 0.5, 0.5)
                        },
                        "ambientLightColor": {
                            value: new THREE.Color(0.5, 0.5, 0.7)
                        },
                        "saturation": {
                            value: 1.0
                        },
                        "_Brightness": {
                            value: 0.8
                        },
                        "transparency": {
                            value: 1
                        },
                        "GREY_COLOR": {
                            value: new THREE.Vector3(.222, .707, .071)
                        }
                    },
                    vertexShader: ["uniform vec3 fillLight;", "uniform vec3 dirLight;", "uniform vec3 fillLightColor;", "uniform vec3 dirLightColor;", "uniform vec3 ambientLightColor;", "uniform float saturation;", "uniform float _Brightness;", "uniform vec3 GREY_COLOR;", "#include <shadowmap_pars_vertex>", "varying vec4 vColor;", "varying vec3 vWorldPosition;", "void main() {", "mat4 mvp = projectionMatrix * viewMatrix * modelMatrix;", "vec4 worldPosition = modelMatrix * vec4(position, 1.0);", "#include <shadowmap_vertex>", "gl_Position = mvp * vec4( position, 1.0 );", "vec3 objectColor = vec3(color.rgb);", "vec3 worldNormal = normalize(normalMatrix * normal);", "objectColor *= (clamp(dot(normalize(fillLight), worldNormal), 0.0, 1.0) * fillLightColor) + (clamp(dot(dirLight, worldNormal), 0.0, 1.0) * dirLightColor) + ambientLightColor;", "float grey = dot(objectColor, GREY_COLOR);", "vec3 ds = vec3(grey, grey, grey);", "vColor = vec4(mix(ds, objectColor, saturation) * _Brightness, 1);", "}"].join("\n"),
                    fragmentShader: ["varying vec4 vColor;", "uniform float transparency;", "#include <common>", "#include <packing>", "#include <fog_pars_fragment>", "#include <bsdfs>", "#include <lights_pars_begin>", "#include <shadowmap_pars_fragment>", "#include <shadowmask_pars_fragment>", "void main() {", "float sm = ( 1.0  - ( 1.0 - getShadowMask() ) * 0.3 );", "gl_FragColor = vColor*sm;", "gl_FragColor.a = transparency;", "}"].join("\n")
                };
            }
            return shader;
        };
        exports.
        default = getShader;
    },
    function (module, exports) {
        function FadeIn(sound, startVol, endVol, fadeTime) {
            if (!isInitialised) {
                return;
            }
            if (typeof fadeTime === 'undefined') {
                fadeTime = 250;
            }
            startVol = startVol || 0.0;
            endVol = endVol || 1.0;
            var vol = {
                v: startVol
            };
            sound.setVolume(startVol);
            sound.play();
            var sfxTween = new TWEEN.Tween(vol).to({
                    v: endVol
                },
                fadeTime).onUpdate(function () {
                sound.setVolume(vol.v);
            }).start();
        }

        function enableAudio() {
            if (window.audioContext && window.audioContext.state !== 'running') {
                window.audioContext.resume().
                catch(function () {});
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.enableAudio = enableAudio;
        var isInitialised = false;
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        var AudioManager = function AudioManager(camera) {
            var _this = this;
            if (isIE11) {
                return;
            }
            this.camera = camera;
            this.init();
            if (window.isMobile || window.audioContext) {
                window.addEventListener('touchstart',
                    function () {
                        if (_this.listener.context.state === 'suspended') {
                            _this.listener.context.resume();
                        }
                        enableAudio();
                    });
                window.addEventListener('click',
                    function () {
                        if (_this.listener.context.state === 'suspended') {
                            _this.listener.context.resume();
                        }
                        enableAudio();
                    });
            }
        };
        AudioManager.prototype.init = function () {
            var this$1 = this;
            if (isInitialised) {
                return;
            }
            isInitialised = true;
            this.sounds = {};
            this.loopedAudio;
            this.audios = [];
            this.posAudios = [];
            this.listener = new THREE.AudioListener();
            this.camera.add(this.listener);
            for (var s = 0; s < 20; s++) {
                this$1.audios.push(new THREE.Audio(this$1.listener));
            }
            for (var ss = 0; ss < 10; ss++) {
                this$1.posAudios.push(new THREE.PositionalAudio(this$1.listener));
            }
            this.loopedAudio = new THREE.Audio(this.listener);
        };
        AudioManager.prototype.SetVolume = function (vol) {
            if (!isInitialised) {
                return;
            }
            this.listener.setMasterVolume(vol);
        };
        AudioManager.prototype.GetAudio = function () {
            if (!isInitialised) {
                return;
            }
            var a = this.audios.shift();
            this.audios.push(a);
            return a;
        };
        AudioManager.prototype.GetPositionalAudio = function () {
            if (!isInitialised) {
                return;
            }
            var a = this.posAudios.shift();
            this.posAudios.push(a);
            return a;
        };
        AudioManager.prototype.CacheSound = function (filename, item) {
            if (!isInitialised) {
                return;
            }
            this.sounds[filename] = item;
        };
        AudioManager.prototype.stopAllSounds = function () {
            var this$1 = this;
            if (!isInitialised) {
                return;
            }
            var soundNames = Object.keys(this.sounds);
            for (var idx = 0; idx < soundNames.length; idx++) {
                try {
                    this$1.sounds[soundNames[idx]].stop();
                } catch (e) {}
            }
        };
        AudioManager.prototype.StopSound = function (filename, fadeTime) {
            if (!isInitialised) {
                return;
            }
            var sound = this.sounds[filename];
            if (!sound) {
                return;
            }
            if (!sound.isPlaying) {
                return;
            }
            if (typeof fadeTime === 'undefined') {
                fadeTime = 500;
            }
            var vol = {
                v: 1,
                sound: sound
            };
            sound.fadeOutTween = new TWEEN.Tween(vol).to({
                    v: 0
                },
                fadeTime).onUpdate(function () {
                this.sound.setVolume(vol.v);
            }).onComplete(function () {
                if (!this.sound) {
                    return;
                }
                this.sound.fadeOutTween = null;
                try {
                    this.sound.stop();
                } catch (e) {
                    console.log(e.message);
                }
                this.sound.setVolume(1);
            }).start();
        };
        AudioManager.prototype.PlaySound = function (filename, mesh, loop, override, dist) {
            if (!isInitialised) {
                return;
            }
            if (!AssetLoader.getAssetById(filename)) {
                return;
            }
            var sound;
            mesh = mesh || -1;
            loop = loop || false;
            override = override || false;
            var isCar = filename.indexOf('car1') !== -1 || filename.indexOf('car2') !== -1 || filename.indexOf('car3') !== -1;
            var isRiver = filename.indexOf('river.mp4') !== -1;
            var factor = 1.0;
            if (isCar) {
                factor = 0.25;
            }
            if (dist) {
                factor = Math.sqrt(1 / dist);
            }
            if (this.sounds[filename] != null) {
                sound = this.sounds[filename];
                if (sound.fadeOutTween) {
                    sound.fadeOutTween.stop();
                    sound.setVolume(1 * factor);
                }
                sound.setLoop(loop);
                if (!sound.isPlaying || override) {
                    if (override) {
                        sound.stop();
                    }
                    if (isCar) {
                        FadeIn(sound, 0, factor);
                    } else if (isRiver) {
                        FadeIn(sound, 0, factor, 500);
                    } else {
                        sound.setVolume(1 * factor);
                        sound.play();
                    }
                } else {
                    if (isCar) {
                        var vol = {
                            v: 1.0
                        };
                        var sfxTween = new TWEEN.Tween(vol).to({
                                v: 0.5
                            },
                            125).onUpdate(function () {
                            sound.setVolume(vol.v * factor);
                        }).onComplete(function () {
                            sound.stop();
                            FadeIn(sound, 0.5 * factor, factor);
                        }).start();
                    } else {}
                }
            } else {
                if (loop) {
                    sound = this.loopedAudio;
                } else if (mesh == -1) {
                    sound = this.GetAudio();
                } else {
                    sound = this.GetPositionalAudio();
                }
                if (typeof sound.filename !== 'undefined' && sound.filename != filename) {
                    this.sounds[sound.filename] = null;
                }
                var oldSound = sound.filename;
                sound.filename = filename;
                this.CacheSound(filename, sound);
                var buffer = AssetLoader.getAssetById(filename);
                sound.setBuffer(buffer);
                if (mesh != -1) {
                    sound.setRefDistance(20);
                }
                if (sound.isPlaying) {
                    sound.stop();
                    console.log('stopping ' + oldSound + "to play " + filename);
                }
                sound.setLoop(loop);
                if (isCar) {
                    FadeIn(sound, 0, factor);
                } else {
                    sound.setVolume(1);
                    sound.play();
                }
            }
            if (mesh != -1) {
                mesh.add(sound);
                sound.setVolume(0.25);
            }
            return sound;
        };
        AudioManager.prototype.PlaySoundVariation = function (filename, variation) {
            if (!isInitialised) {
                return;
            }
            return this.PlaySound(filename + variation);
        };
        exports.
        default = AudioManager;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ThreeUI = __webpack_require__(10);
        var _ThreeUI2 = _interopRequireDefault(_ThreeUI);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _FreeGift = __webpack_require__(21);
        var _FreeGift2 = _interopRequireDefault(_FreeGift);
        var _Easing = __webpack_require__(28);
        var _Easing2 = _interopRequireDefault(_Easing);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var _ObjectPooler = __webpack_require__(5);
        var _PasrTimer = __webpack_require__(13);
        var _PasrTimer2 = _interopRequireDefault(_PasrTimer);
        var _Utils = __webpack_require__(4);
        var _Utils2 = _interopRequireDefault(_Utils);
        var giftHopHeight = 0.7;
        var baseCoinIconSize = 75;
        var baseCoinTextSize = 7.5;
        var FreeGiftScreen = {
            meshScalePortrait: 0.7,
            meshScaleLandscape: 1,
            meshYBasePosition: 298
        };
        FreeGiftScreen.init = function (ui, canvas, scene, reUsedElements) {
            this.ui = ui;
            this.canvas = canvas;
            this.scene = scene;
            this.reUsedElements = reUsedElements;
            this.targetGiftScale = new THREE.Vector3(1, 1, 1);
            this.meshYScaleModifier = 1;
            this.meshXZScaleModifier = 1;
            this.giftShrinkScaleModifier = 1;
            this.openingGift = false;
            this.shakeGift = 0;
            this.hopTrigger = 1;
            this.hopTimer = new _PasrTimer2.
            default(1, 0.2, 0, 0.12);
            this.fallTimer = new _PasrTimer2.
            default(0, 0, 0, 0.4);
            this.fallWobbleTimer = new _PasrTimer2.
            default(0.35, 0.15, 0.05, 0.3);
            this.openTimer = new _PasrTimer2.
            default(0, 0.75, 0.75, 0.05);
            this.textTimer = new _PasrTimer2.
            default(0.1, 0.5, 0.5, 1.5);
            this.createElements();
            this.prepareGiftMeshes();
        };
        FreeGiftScreen.prepareGiftMeshes = function () {
            this.giftMeshes = [];
            var modelData = [AssetLoader.loadedAssets['models/common-world.json'].models.gift_1_optimised, AssetLoader.loadedAssets['models/common-world.json'].models.gift_2_optimised, AssetLoader.loadedAssets['models/common-world.json'].models.gift_3_optimised, AssetLoader.loadedAssets['models/common-world.json'].models.gift_4_optimised, AssetLoader.loadedAssets['models/common-world.json'].models.gift_5_optimised, AssetLoader.loadedAssets['models/common-world.json'].models.gift_6_optimised, AssetLoader.loadedAssets['models/common-world.json'].models.gift_7_optimised];
            modelData.forEach(function (model, idx) {
                var mesh = (0, _ObjectPooler.importMesh)('gift_' + idx, model);
                mesh.visible = false;
                mesh.position.set(2.4, this.meshYBasePosition, -2);
                mesh.rotation.y = 45 * Math.PI / 180;
                this.scene.add(mesh);
                this.giftMeshes.push(mesh);
            }.bind(this));
        };
        FreeGiftScreen.createElements = function () {
            this.backButton = this.ui.createSpriteFromSheet('smallBack.png', 'sprites/interface.png', 'sprites/interface.json');
            this.backButton.width = 16 * 4;
            this.backButton.height = 16 * 4;
            this.backButton.x = 10;
            this.backButton.y = 10;
            this.backButton.pivot = {
                x: 0,
                y: 0
            };
            this.backButton.visible = false;
            this.backButton.defaultSprite = this.backButton.assetPath;
            this.backButton.blinkSprite = 'smallBack-blink.png';
            this.backButton.onClick(function () {
                _Interface2.
                default.ButtonSound();
                if (this.prevScreen === 'selectingCharacter') {
                    this.hideElements();
                    _Carousel2.
                    default.Show();
                } else {
                    this.hide();
                }
            }.bind(this));
            this.openGiftButton = this.ui.createSpriteFromSheet('open-gift.png', 'sprites/interface.png', 'sprites/interface.json');
            this.openGiftButton.width = 158;
            this.openGiftButton.height = 84;
            this.openGiftButton.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.openGiftButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.openGiftButton.pivot.y = 1;
            this.openGiftButton.y = 10;
            this.openGiftButton.visible = false;
            this.openGiftButton.defaultSprite = this.openGiftButton.assetPath;
            this.openGiftButton.blinkSprite = 'open-gift-blink.png';
            this.openGiftButton.onClick(this.openGift.bind(this));
            this.openGiftButton.navigateOnTop = function () {
                if (this.backButton._visible) {
                    return this.backButton;
                }
                return null;
            }.bind(this);
            this.coinContainer = this.ui.createRectangle('rgba(0,0,0,0)');
            this.coinContainer.visible = false;
            this.coinContainer.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.coinContainer.anchor.y = _ThreeUI2.
            default.anchors.center;
            this.coinText = this.ui.createBitmapText('120', baseCoinTextSize, 0, 0, 'fonts/8-bit-wonder-yellow.png', 'fonts/8-bit-wonder.json');
            this.coinText.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.coinText.anchor.y = _ThreeUI2.
            default.anchors.center;
            this.coinText.parent = this.coinContainer;
            this.coinText.pivot.x = 0.5;
            this.coinText.pivot.y = 0.5;
            this.coinIcon = this.ui.createSpriteFromSheet('coin.png', 'sprites/interface.png', 'sprites/interface.json');
            this.coinIcon.parent = this.coinContainer;
            this.coinIcon.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.coinIcon.anchor.y = _ThreeUI2.
            default.anchors.center;
            this.coinIcon.width = baseCoinIconSize;
            this.coinIcon.height = baseCoinIconSize;
            this.coinIcon.pivot.x = 0;
            this.coinIcon.pivot.y = 1;
            this.timeToGiftText = this.ui.createText('', 36, 'EditUndoBrk', '#fff');
            this.timeToGiftText.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.timeToGiftText.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.timeToGiftText.textAlign = 'center';
            this.timeToGiftText.textBaseline = 'middle';
            this.timeToGiftText.visible = false;
            this.timeToGiftText.lineHeight = 1.2;
            this.timeToGiftText.textVerticalAlign = 'bottom';
            this.playButton = this.ui.createSpriteFromSheet('play-wide.png', 'sprites/interface.png', 'sprites/interface.json');
            this.playButton.width = 158;
            this.playButton.height = 84;
            this.playButton.anchor.x = _ThreeUI2.
            default.anchors.center;
            this.playButton.anchor.y = _ThreeUI2.
            default.anchors.bottom;
            this.playButton.pivot.y = 1;
            this.playButton.y = 10;
            this.playButton.visible = false;
            this.playButton.defaultSprite = this.playButton.assetPath;
            this.playButton.blinkSprite = 'play-wide-blink.png';
            this.playButton.navigateOnTop = function () {
                if (this.backButton._visible) {
                    return this.backButton;
                }
                return null;
            }.bind(this);
            this.playButton.onClick(function () {
                _Interface2.
                default.ButtonSound();
                this.hide();
                _FreeGift2.
                default.transformFreeGiftBarToTimeBar();
                _GumballMachineScreen2.
                default.showNotificationBar(true);
                _Interface2.
                default.setupEndScreenKeyboardNavigation();
                _Interface2.
                default.focusFirstNotificationBar();
            }.bind(this));
            this.backButton.navigateOnBottom = function () {
                if (this.openGiftButton._visible) {
                    return this.openGiftButton;
                }
                if (this.playButton._visible) {
                    return this.playButton;
                }
                return null;
            }.bind(this);
            this.timeToGiftText.y = this.playButton.y + this.playButton.height + 40;
            this.flashOverlay = this.ui.createRectangle('#fff');
            this.flashOverlay.stretch.x = true;
            this.flashOverlay.stretch.y = true;
            this.flashOverlay.offset.left = -10;
            this.flashOverlay.offset.top = -10;
            this.flashOverlay.offset.bottom = -10;
            this.flashOverlay.offset.right = -10;
            this.flashOverlay.visible = false;
            this.flashOutTween = new TWEEN.Tween(this.flashOverlay).to({
                    alpha: 0
                },
                200).easing(TWEEN.Easing.Quadratic.InOut);
        };
        FreeGiftScreen.show = function () {
            _Game2.
            default.ambientLight.color = new THREE.Color(0.5, 0.5, 0.7);
            if (_FreeGift2.default.getTimeToGift() > 0 || this.visible) {
                return;
            }
            _Game2.
            default.audioManager.stopAllSounds();
            this.visible = true;
            this.openingGift = false;
            this.shakeGift = 0;
            this.prevScreen = _Interface2.
            default.CurrentScreen;
            this.prevCameraZoom = _Game2.
            default.camera.zoom;
            this.prevCameraPosition = _Game2.
            default.camera.position.clone();
            this.prevCameraRotation = _Game2.
            default.camera.rotation.clone();
            this.prevUIVisibilityState = _Game2.
            default.UI.getVisibilityState();
            _Interface2.
            default.CurrentScreen = 'free-gift';
            _Game2.
            default.camera.position.set(2.388232, 305.25858, 10.41098);
            _Game2.
            default.camera.rotation.set(-Math.PI / 8, 0, 0, 'YXZ');
            _Game2.
            default.camera.zoom = .8;
            _Game2.
            default.camera.updateProjectionMatrix();
            this.ui.hideAll();
            this.openGiftButton.visible = true;
            if (!_Interface2.default.tutorialLock) {
                this.backButton.visible = true;
            }
            this.reUsedElements.forEach(function (element) {
                element.visible = true;
            });
            this.activeGift = _Utils2.
            default.getRandomFromArray(this.giftMeshes);
            this.activeGift.visible = true;
            window.activeGift = this.activeGift;
            this.meshYScaleModifier = _Utils2.
            default.getRandomArbitrary(0.8, 1.15);
            this.meshXZScaleModifier = _Utils2.
            default.getRandomArbitrary(0.8, 1.1);
            this.updateTargetGiftScale();
            this.scaleActiveGift();
            this.fallTimer.Reset();
            this.fallWobbleTimer.Reset();
            this.hopTimer.Reset();
            _KeyboardUIControls2.
            default.setFocus(this.openGiftButton);
            _Game2.
            default.UI.MoveToFront(_KeyboardUIControls2.default.reticle);
            _KeyboardHint2.
            default.show('gift');
        };
        FreeGiftScreen.hide = function () {
            var resetCamera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (!this.prevCameraZoom) {
                return;
            }
            if (_Game2.default.currentWorld === 'space') {
                _Game2.
                default.ambientLight.color = new THREE.Color(0.3, 0.3, 0.6);
            }
            if (this.activeGift) {
                this.activeGift.visible = false;
            }
            if (resetCamera) {
                _Game2.
                default.camera.zoom = this.prevCameraZoom;
                _Game2.
                default.camera.position.set(this.prevCameraPosition.x, this.prevCameraPosition.y, this.prevCameraPosition.z);
                _Game2.
                default.camera.rotation.set(this.prevCameraRotation.x, this.prevCameraRotation.y, this.prevCameraRotation.z, 'YXZ');
                _Game2.
                default.camera.updateProjectionMatrix();
            }
            _Interface2.
            default.hideRemainingCoins();
            _Interface2.
            default.CurrentScreen = this.prevScreen;
            _Game2.
            default.UI.setVisibilityState(this.prevUIVisibilityState);
            this.visible = false;
            _Interface2.
            default.setupEndScreenKeyboardNavigation();
        };
        FreeGiftScreen.openGift = function () {
            if (this.openingGift) {
                return;
            }
            _KeyboardHint2.
            default.clearActiveScreen();
            _KeyboardHint2.
            default.hide();
            _Game2.
            default.playSfx('gift/openbox');
            _Game2.
            default.playSfx('gift/booktap');
            this.openTimer.Reset();
            this.openingGift = true;
            this.openGiftButton.visible = false;
            this.backButton.visible = false;
        };
        FreeGiftScreen.confirm = function () {
            if (this.openGiftButton.visible) {
                this.openGiftButton.fireEvent('click');
            } else if (this.playButton.visible) {
                this.playButton.fireEvent('click');
            }
        };
        FreeGiftScreen.updateTargetGiftScale = function () {
            if (!this.activeGift) {
                return;
            }
            var aspectRatio = this.canvas.width / this.canvas.height;
            var percLandscape = _Utils2.
            default.inverseLerp(window.minAspect, window.maxAspect, aspectRatio);
            var scale = THREE.Math.lerp(FreeGiftScreen.meshScalePortrait, FreeGiftScreen.meshScaleLandscape, percLandscape);
            this.targetGiftScale.set(scale * this.meshXZScaleModifier, scale * this.meshYScaleModifier, scale * this.meshXZScaleModifier);
        };
        FreeGiftScreen.update = function (deltaTime) {
            if (!this.textTimer.isFinished()) {
                this.textTimer.Tick(deltaTime);
                var coinTextScale = 1 + _Easing2.
                default.easeInOutCubic(this.textTimer.value) * 0.25;
                this.coinText.setScale(baseCoinTextSize * coinTextScale);
                this.coinIcon.width = baseCoinIconSize * coinTextScale;
                this.coinIcon.height = this.coinIcon.width;
                this.positionCoinElements();
            }
            if (!this.activeGift) {
                return;
            }
            this.hopTimer.Tick(deltaTime);
            this.fallTimer.Tick(deltaTime);
            this.fallWobbleTimer.Tick(deltaTime);
            this.openTimer.Tick(deltaTime);
            var hopDistance = giftHopHeight * _Easing2.
            default.easeOutQuad(this.fallTimer.value) + _Easing2.
            default.easeOutQuad(this.hopTimer.value);
            this.activeGift.position.y = this.meshYBasePosition + hopDistance;
            this.scaleActiveGift();
            if (this.hopTimer.reachedFinished() || this.fallTimer.reachedFinished()) {
                _Game2.
                default.playSfx('gift/booktap');
            }
            if (this.fallWobbleTimer.isFinished() && !this.openingGift) {
                this.hopTrigger -= deltaTime;
                if (this.hopTrigger < 0) {
                    this.hopTimer.Reset();
                    this.hopTrigger += _Utils2.
                    default.getRandomArbitrary(3, 5);
                }
            }
            if (this.openingGift && this.openTimer.isFinished()) {
                this.awardGift();
            }
        };
        FreeGiftScreen.positionCoinElements = function () {
            this.coinIcon.x = this.coinText.width * 0.5;
            this.coinIcon.y = this.coinText.height * 0.5;
            this.coinContainer.x = -this.coinIcon.width * 0.5;
            this.coinContainer.x = -this.coinIcon.width * 0.5;
        };
        FreeGiftScreen.awardGift = function (reward) {
            if (_FreeGift2.default.getTimeToGift() > 0) {
                return;
            }
            var reward = _FreeGift2.
            default.getCurrentReward();
            this.coinText.setText(reward.toString());
            this.coinContainer.visible = true;
            this.coinText.visible = true;
            this.coinIcon.visible = true;
            this.positionCoinElements();
            this.activeGift.visible = false;
            this.activeGift = null;
            this.flashOverlay.alpha = 1;
            this.flashOverlay.visible = true;
            _GameSave2.
            default.ModifyCoins(reward);
            _Interface2.
            default.coinsWereModified();
            _FreeGift2.
            default.giftWasAwarded();
            window.setTimeout(function () {
                this.flashOutTween.start();
                this.textTimer.Reset();
                this.playButton.visible = true;
                this.timeToGiftText.visible = true;
                _KeyboardHint2.
                default.show('gift-given');
                _KeyboardUIControls2.
                default.setFocus(this.playButton);
                var timeToGift = _FreeGift2.
                default.getTimeToGift();
                this.timeToGiftText.text = _FreeGift2.
                default.timeToText(timeToGift);
                _Game2.
                default.playSfx('gift/Earn Points');
                this.confettiBlast(20);
                window.setTimeout(function () {
                    if (!this.visible) {
                        return;
                    }
                    this.confettiBlast(20);
                }.bind(this), 200);
                window.setTimeout(function () {
                    this.flashOverlay.alpha = 1;
                    this.flashOverlay.visible = true;
                    window.setTimeout(function () {
                        this.flashOutTween.start();
                        if (!this.visible) {
                            return;
                        }
                        _Interface2.
                        default.coinBlast(reward);
                    }.bind(this), 100);
                }.bind(this), 400);
            }.bind(this), 100);
        };
        FreeGiftScreen.scaleActiveGift = function () {
            if (!this.activeGift) {
                return;
            }
            var fallWobbleScale = new THREE.Vector3(1, 1, 1).lerp(new THREE.Vector3(1.05, 0.95, 1.05), this.hopTimer.value + _Easing2.default.easeInOutCubic(this.fallWobbleTimer.value));
            var openTime = _Easing2.
            default.easeOutQuart(this.openTimer.value);
            var openScale = -openTime * 0.25 * THREE.Math.lerp(1, _Utils2.default.getRandomArbitrary(0.9, 1), openTime);
            var scale = fallWobbleScale.addScalar(openScale).multiply(this.targetGiftScale);
            this.activeGift.scale.set(scale.x, scale.y, scale.z);
        };
        FreeGiftScreen.resize = function () {
            this.updateTargetGiftScale();
            this.scaleActiveGift();
        };
        FreeGiftScreen.confettiBlast = function (amount) {
            var this$1 = this;
            var confettiSize = 50;
            var confettiParent = this.ui.createRectangle('rgba(0,0,0,0)');
            confettiParent.anchor.x = _ThreeUI2.
            default.anchors.center;
            confettiParent.anchor.y = _ThreeUI2.
            default.anchors.center;
            this.confettis = [];
            for (var confettiIdx = 0; confettiIdx < amount; confettiIdx++) {
                var confetti = this$1.ui.createRectangle('#ffee44');
                confetti.anchor.x = _ThreeUI2.
                default.anchors.center;
                confetti.anchor.y = _ThreeUI2.
                default.anchors.center;
                confetti.height = confettiSize * _Utils2.
                default.getRandomArbitrary(0.02, 0.4);
                confetti.width = confettiSize * _Utils2.
                default.getRandomArbitrary(0.8, 1);
                confetti.parent = confettiParent;
                confetti.rotation = _Utils2.
                default.getRandomInt(-50, 50);
                this$1.confettis.push(confetti);
                var direction = new THREE.Vector2(_Utils2.default.getRandomArbitrary(-1, 1), _Utils2.default.getRandomArbitrary(-1, 1)).normalize();
                confetti.x = _Utils2.
                default.getRandomArbitrary(20, 75) * direction.x;
                confetti.y = _Utils2.
                default.getRandomArbitrary(20, 75) * direction.y;
                var targetX = confetti.x + _Utils2.
                default.getRandomArbitrary(50, 250) * direction.x;
                var targetY = confetti.y + _Utils2.
                default.getRandomArbitrary(0, 150) * direction.y;
                var targetRotation = confetti.rotation * _Utils2.
                default.getRandomArbitrary(1.1, 1.3);
                new TWEEN.Tween(confetti).to({
                        x: targetX,
                        y: targetY,
                        rotation: targetRotation
                    },
                    500).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                    FreeGiftScreen.removeConfetti(this);
                }).start();
            }
            new TWEEN.Tween(confettiParent).to({
                    y: confettiParent.y + 50
                },
                500).onComplete(function () {
                this.ui.delete(confettiParent);
            }.bind(this)).easing(TWEEN.Easing.Quartic.In).delay(250).start();
        };
        FreeGiftScreen.removeConfetti = function (confetti) {
            var deleteConfetti = function (confetti) {
                this.ui.delete(confetti);
            }.bind(this, confetti);
            new TWEEN.Tween(confetti).to({
                    width: 0,
                    height: 0
                },
                200).onComplete(function () {
                deleteConfetti();
            }).start();
        };
        exports.
        default = FreeGiftScreen;
    },
    function (module, exports, __webpack_require__) {
        function onDocumentTouchEnd(event) {
            prevXMove = null;
            if (window.isMobile) {
                var xUp = event.changedTouches[0].clientX;
                var yUp = event.changedTouches[0].clientY;
            } else {
                var xUp = event.clientX;
                var yUp = event.clientY;
            }
            if (_Game2.default.takesUserInput && _Game2.default.paused) {
                _Game2.
                default.playerController.nextPlayerAction = '';
                _Interface2.
                default.unPause();
                return;
            }
            if (_Interface2.default.CurrentScreen === 'selectingCharacter') {
                _Carousel2.
                default.ProcessTouchEnd();
                return;
            }
            if (_Game2.default.playerController.nextPlayerAction == 'none') {
                return;
            }
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) < 10 && Math.abs(yDiff) < 10) {
                InputControls.forward(true);
                return;
            }
            if (Math.abs(xDiff) > Math.abs(yDiff) * 1.1) {
                if (xDiff > 0) {
                    left(true);
                } else {
                    right(true);
                }
            } else {
                if (yDiff > 0) {
                    InputControls.forward(true);
                } else {
                    back(true);
                }
            }
            xDown = null;
            yDown = null;
        }

        function onDocumentTouchMove(event) {
            if (isMobile) {
                event.preventDefault();
            }
            var xUp = event.touches[0].clientX;
            var yUp = event.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (_Interface2.default.CurrentScreen == "selectingCharacter") {
                var xMove = event.touches[0].clientX;
                if (prevXMove === null) {
                    prevXMove = xMove;
                }
                var xMovement = xMove - prevXMove;
                _Carousel2.
                default.ProcessTouchMove(xMovement, event.touches[0].clientY);
                prevXMove = xMove;
                return;
            }
            if (!xDown || !yDown || !_Game2.default.playing) {
                return;
            }
            if (Math.abs(xDiff) > Math.abs(yDiff) * 1.1) {
                if (xDiff > 0) {
                    left(false);
                } else {
                    right(false);
                }
            } else {
                if (yDiff > 0) {
                    InputControls.forward(false);
                } else {
                    back(false);
                }
            }
        }

        function onDocumentTouchStart(event) {
            if (window.isMobile) {
                xDown = event.touches[0].clientX;
                yDown = event.touches[0].clientY;
            } else {
                xDown = event.clientX;
                yDown = event.clientY;
            }
            if (_Game2.default.playing) {
                InputControls.forward(false);
            }
            if (_Interface2.default.CurrentScreen === 'selectingCharacter') {
                _Carousel2.
                default.ProcessTouchStart();
            }
        }

        function onDocumentKeyDown(event) {
            event.preventDefault();
            (0, _AudioManager.enableAudio)();
            if (!_Game2.default.takesUserInput) {
                return;
            }
            if (keyMustWaitUntilUp[event.keyCode]) {
                return;
            }
            keyMustWaitUntilUp[event.keyCode] = true;
            var keySpacebar = false,
                keyEnter = false,
                keyLeft = false,
                keyRight = false,
                keyTop = false,
                keyBottom = false,
                keyExit = false;
            switch (event.keyCode) {
                case 32:
                    keySpacebar = true;
                    break;
                case 13:
                    keyEnter = true;
                    break;
                case 87:
                case 38:
                    keyTop = true;
                    break;
                case 65:
                case 37:
                    keyLeft = true;
                    break;
                case 83:
                case 40:
                    keyBottom = true;
                    break;
                case 68:
                case 39:
                    keyRight = true;
                    break;
                case 27:
                    keyExit = true;
                    break;
            }
            _KeyboardHint2.
            default.keyPressed(keySpacebar, keyLeft, keyTop, keyRight, keyBottom);
            if (_Game2.default.paused || event.keyCode === 80) {
                return;
            }
            if (!_Game2.default.playing || _Game2.default.playerController.Dead) {
                _KeyboardUIControls2.
                default.handleKeyEvent(event);
                return;
            }
            keyMustWaitUntilUp[event.keyCode] = false;
            if (event.keyCode === 32) {
                InputControls.forward(false);
            }
            switch (event.keyCode) {
                case 87:
                case 38:
                    InputControls.forward(false);
                    return;
                    break;
                case 65:
                case 37:
                    left(false);
                    return;
                    break;
                case 83:
                case 40:
                    back(false);
                    return;
                    break;
                case 68:
                case 39:
                    right(false);
                    return;
                    break;
            }
        }

        function back(finished) {
            if (finished) {
                _Game2.
                default.playerController.checkBump = true;
                _Game2.
                default.playerController.nextPlayerAction = "back";
                _Game2.
                default.playerController.moved = true;
                if (isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("back");
                }
            } else {
                if (!isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("back");
                }
                _Game2.
                default.playerController.nextPlayerAction = "Down";
            }
        }

        function right(finished) {
            if (finished) {
                _Game2.
                default.playerController.checkBump = true;
                _Game2.
                default.playerController.nextPlayerAction = "right";
                _Game2.
                default.playerController.moved = true;
                if (isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("right");
                }
            } else {
                if (!isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("right");
                }
                _Game2.
                default.playerController.nextPlayerAction = "Down";
            }
        }

        function left(finished) {
            if (finished) {
                _Game2.
                default.playerController.checkBump = true;
                _Game2.
                default.playerController.nextPlayerAction = "left";
                _Game2.
                default.playerController.moved = true;
                if (isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("left");
                }
            } else {
                if (!isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("left");
                }
                _Game2.
                default.playerController.nextPlayerAction = "Down";
            }
        }

        function onDocumentKeyUp(event) {
            event.preventDefault();
            (0, _AudioManager.enableAudio)();
            keyMustWaitUntilUp[event.keyCode] = false;
            if (!_Game2.default.takesUserInput) {
                return;
            }
            if (event.keyCode == 80 || _Game2.default.paused) {
                _Interface2.
                default.TogglePause();
                return;
            }
            if (!_Game2.default.playing) {
                return;
            }
            if (event.keyCode === 32) {
                InputControls.forward(true);
            }
            if (_Interface2.default.CurrentScreen === 'selectingCharacter') {
                return;
            }
            switch (event.keyCode) {
                case 87:
                case 38:
                    InputControls.forward(true);
                    break;
                case 65:
                case 37:
                    left(true);
                    break;
                case 83:
                case 40:
                    back(true);
                    break;
                case 68:
                case 39:
                    right(true);
                    break;
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.onDocumentKeyUp = onDocumentKeyUp;
        exports.onDocumentKeyDown = onDocumentKeyDown;
        exports.onDocumentTouchStart = onDocumentTouchStart;
        exports.onDocumentTouchMove = onDocumentTouchMove;
        exports.onDocumentTouchEnd = onDocumentTouchEnd;
        var _AudioManager = __webpack_require__(30);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _KeyboardUIControls = __webpack_require__(11);
        var _KeyboardUIControls2 = _interopRequireDefault(_KeyboardUIControls);
        var InputControls = {};
        var keyMustWaitUntilUp = {};
        InputControls.forward = function (finished) {
            if (finished) {
                _Game2.
                default.playerController.checkBump = true;
                _Game2.
                default.playerController.nextPlayerAction = "forward";
                _Game2.
                default.playerController.moved = true;
                if (isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("forward");
                }
            } else {
                if (!isMobile) {
                    _Game2.
                    default.playerController.SetDesiredRotationForDirection("forward");
                }
                _Game2.
                default.playerController.nextPlayerAction = "Down";
            }
        };
        var xDown = null;
        var yDown = null;;
        var prevXMove = null;;
        exports.
        default = InputControls;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _RewardedHelper = __webpack_require__(14);
        var _RewardedHelper2 = _interopRequireDefault(_RewardedHelper);
        var InterstitialAdHelper = {};
        InterstitialAdHelper.adPlaying = false;
        InterstitialAdHelper.disable = true;
        InterstitialAdHelper.lastPosition = null;
        InterstitialAdHelper.init = function () {
            if (InterstitialAdHelper.disable) {
                return;
            }
        };
        InterstitialAdHelper.triggerAdRequest = function (position) {
            var onFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            if (InterstitialAdHelper.disable) {
                onFinish();
                return;
            }
            _Game2.
            default.takesUserInput = false;
            if (position !== 'preroll') {
                _Interface2.
                default.Pause();
            }
            this.lastPosition = position;
            InterstitialAdHelper.adPlaying = true;
            var isPreroll = this.lastPosition === 'preroll';
            var onAdFinish = function onAdFinish() {
                analytics.track(isPreroll ? 'preroll' : 'midroll', 'completed');
                InterstitialAdHelper.adPlaying = false;
                _Game2.
                default.takesUserInput = true;
                _Interface2.
                default.unPause();
                onFinish();
            };
            PokiSDK.commercialBreak().then(function () {
                onAdFinish();
            }).
            catch(function () {
                _Interface2.
                default.freeNotificationBars();
                onAdFinish();
            });
        };
        exports.
        default = InterstitialAdHelper;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var CommonWorldPieces = {
            "coin": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "coin",
                    weight: 1,
                    scoreRequired: -1,
                    hitBoxScale: [1.0, 2.0, 1.0],
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "red-coin": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "red_coin",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            }
        };
        exports.
        default = CommonWorldPieces;
    },
    function (module, exports) {
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ref;
        var WorldPieces = {
            "train-middle": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_middle",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 20
            },
            "strip-train": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "strip_train",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "strip-grass-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "strip_grass_2",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "log": {
                PieceSelectionWeighting: 1,
                PieceType: "Log",
                Variations: [{
                        name: "log_1",
                        weight: 1,
                        scoreRequired: 100,
                        hitBoxScale: [1.5, 0.5, 1.0],
                        logwidth: 1,
                        animationSpeed: 0
                    },
                    {
                        name: "log_2",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [2.5, 0.5, 1.0],
                        logwidth: 2,
                        animationSpeed: 0
                    },
                    {
                        name: "log_3",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [3.5, 0.5, 1.0],
                        logwidth: 3,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "strip-road-1": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "strip_road_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "blocking-object-tall": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "tree_1",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_2",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_3",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_4",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "stump",
                        weight: 2,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "train-light-on": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_light_on_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 5
                }],
                poolAmount: 5
            },
            "vehicle-car-special": {
                PieceSelectionWeighting: 0.003,
                PieceType: "Vehicle",
                Variations: [{
                    name: "fuzz",
                    weight: 1,
                    scoreRequired: -1,
                    hitBoxScale: [1.6, 1.0, 0.7],
                    playCarNoise: "True",
                    minCoolDown: 1,
                    maxHornCooldown: 20,
                    animationSpeed: 0
                }],
                poolAmount: 5
            },
            "eagle-fly": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "eagle_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 16
                }],
                poolAmount: 1
            },
            "vehicle-truck": {
                PieceSelectionWeighting: 0.166,
                PieceType: "Vehicle",
                Variations: [{
                        name: "truck",
                        weight: 0.799,
                        scoreRequired: -1,
                        hitBoxScale: [2.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "truck_blue",
                        weight: 0.15,
                        scoreRequired: -1,
                        hitBoxScale: [2.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "truck_green",
                        weight: 0.05,
                        scoreRequired: -1,
                        hitBoxScale: [2.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "strip-water": {
                PieceSelectionWeighting: 1,
                PieceType: "Water",
                Variations: [{
                    name: "strip_water_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "train-light-off": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_light_off",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 5
            },
            "strip-grass-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "strip_grass_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "strip-road-2": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "strip_road_2",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "train-front": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_front",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 7
            },
            "lillypad": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "lilypad",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 20
            },
            "train-back": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_back",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 7
            },
            "vehicle-car": {
                PieceSelectionWeighting: 0.831,
                PieceType: "Vehicle",
                Variations: [{
                        name: "electric",
                        weight: 0.2,
                        scoreRequired: -1,
                        hitBoxScale: [1.1, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "ganster",
                        weight: 0.2,
                        scoreRequired: -1,
                        hitBoxScale: [1.6, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "muscle",
                        weight: 0.003,
                        scoreRequired: -1,
                        hitBoxScale: [1.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "sedan",
                        weight: 0.2,
                        scoreRequired: -1,
                        hitBoxScale: [1.6, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 50
            },
            "coin": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "coin",
                    weight: 1,
                    scoreRequired: -1,
                    hitBoxScale: [1.0, 2.0, 1.0],
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "red-coin": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "red_coin",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "blocking-object-short": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "tree_1",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_2",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "rock",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "stump",
                        weight: 2,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 10
            },
            "forest": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "forest_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_3",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_4",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_5",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_6",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-log": {
                PieceSelectionWeighting: 1,
                PieceType: "Log",
                Variations: [{
                        name: "moon_log_1",
                        weight: 1,
                        scoreRequired: 100,
                        hitBoxScale: [1.5, 0.5, 1.0],
                        logwidth: 1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_log_2",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [2.5, 0.5, 1.0],
                        logwidth: 2,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_log_3",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [3.5, 0.5, 1.0],
                        logwidth: 3,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "space-strip-road-1": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_strip_road_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_road_alt_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-strip-road-2": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_strip_road_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_road_alt_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-lillypad": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_lillypad_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_lillypad_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_lillypad_3",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "space-blocking-object-tall": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_geode_tall_1",
                        weight: 30,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_geode_tall_2",
                        weight: 30,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_geode_tall_3",
                        weight: 30,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "spaceexploration_lunarlander",
                        weight: 10,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "robodog-pickup": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "spaceexploration_robodog_pickup",
                    weight: 0.02,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 1
            },
            "space-blocking-object-short": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_rock_small_1",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_rock_small_2",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_rock_small_3",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 10
            },
            "space-strip-grass-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_strip_ground_alt_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_ground_alt_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-strip-grass-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_strip_ground_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_ground_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-strip-water": {
                PieceSelectionWeighting: 1,
                PieceType: "Water",
                Variations: [{
                    name: "moon_strip_emptyspace",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-forest": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_strip_emptyspace",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-vehicle-car": {
                PieceSelectionWeighting: 0.831,
                PieceType: "Vehicle",
                Variations: [{
                        name: "moon_rollingasteroid_1_fixedmesh",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [1.0, 1.0, 1.0],
                        playCarNoise: "False",
                        minCoolDown: 1,
                        maxHornCooldown: 2000,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_rollingasteroid_2_fixedmesh",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [1.0, 1.0, 1.0],
                        playCarNoise: "False",
                        minCoolDown: 1,
                        maxHornCooldown: 2000,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 50
            },
            "specimen": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "alien",
                    weight: 33,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 20
            },
            "space-special-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_1",
                    weight: 1,
                    holes: [3, 4, 5, -2, -3],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-special-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_2",
                    weight: 1,
                    holes: [3, 4, -4, -5],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-special-3": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_3",
                    weight: 1,
                    holes: [3, 4, -3, -4, -5],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-special-4": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_4",
                    weight: 1,
                    holes: [2, 3, 4, -2, -3, -4],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-block-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_chunk_1_strip_1",
                        weight: 1,
                        holes: [5, -4],
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_chunk_1_strip_2",
                        weight: 1,
                        holes: [5, -4],
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-block-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_chunk_1_strip_3",
                        weight: 1,
                        holes: [1, 0],
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_chunk_1_strip_4",
                        weight: 1,
                        holes: [1, 0],
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "barrier-spawner": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_barrierspawner",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "barrier-button": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_barrierbutton",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "barrier": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_blockingbarrier",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "meteor": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [(_ref = {
                        name: "moon_meteorshower_debris_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    _defineProperty(_ref, "name", "moon_meteorshower_debris_2"), _defineProperty(_ref, "weight", 1), _defineProperty(_ref, "scoreRequired", -1), _defineProperty(_ref, "animationSpeed", 0), _defineProperty(_ref, "name", "moon_meteorshower_debris_3"), _defineProperty(_ref, "weight", 1), _defineProperty(_ref, "scoreRequired", -1), _defineProperty(_ref, "animationSpeed", 0), _ref)],
                poolAmount: 50
            },
            "hipster-whale-log": {
                PieceSelectionWeighting: 1,
                PieceType: "Log",
                Variations: [{
                    name: "hipster_whale",
                    weight: 1,
                    scoreRequired: 100,
                    hitBoxScale: [1.5, 0.5, 1.0],
                    logwidth: 1,
                    animationSpeed: 0
                }],
                poolAmount: 1
            }
        };
        exports.
        default = WorldPieces;
    },
    function (module, exports, __webpack_require__) {
        function TrainWarning() {}

        function Train() {}

        function isCloseToPlayer(z) {
            var playerZ = _Game2.
            default.playerController.player.position.z;
            var dist = Math.abs(playerZ - z);
            if (z < playerZ) {
                return dist < 15;
            } else {
                return dist < 10;
            }
        }

        function TrainSpawner() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.TrainSpawner = exports.TrainWarning = undefined;
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _Physics = __webpack_require__(16);
        var _Physics2 = _interopRequireDefault(_Physics);;
        TrainSpawner.prototype = {
            contructor: TrainSpawner,
            SpawnTrain: function SpawnTrain() {
                var train = Train.Get(this.speed, this.direction, (this.position.x - this.trainStartOffset) * this.direction, this.position.y, this.position.z);
                var mesh = train.front.children[0];
                var trainSound = 'train-pass-shorter';
                if (Math.random() > 0.5) {
                    trainSound = 'train-pass-no-horn';
                }
                var z = this.position.z;
                if (isCloseToPlayer(z)) {
                    if (_Interface2.default.CurrentScreen === 'main' || _Interface2.default.CurrentScreen === 'death') {
                        _Game2.
                        default.playPositionalSfx(trainSound, mesh, Math.abs(_Game2.default.playerController.player.position.z - z));
                    }
                }
                this.lastSpawnTime = _Game2.
                default.clock.getElapsedTime();
                return train;
            },
            tick: function tick(deltaTime) {
                this.nextSpawnTimer -= deltaTime;
                if (this.nextSpawnTimer <= 1.2) {
                    this.trainWarning.Warn(true);
                } else {
                    this.trainWarning.Warn(false);
                }
                if (this.nextSpawnTimer <= 0.0) {
                    this.SpawnTrain();
                    this.nextSpawnTimer = 9.0 + Math.random() * 4;
                }
            },
            pool: function pool() {
                this.trainWarning.pool();
                _Game2.
                default.removefromPhysics(this);
                trainSpawnerPool.push(this);
            },
            IsAboutToSpawnOrHasSpawnedRecently: function IsAboutToSpawnOrHasSpawnedRecently() {
                return this.nextSpawnTimer < 1.2 || _Game2.
                default.clock.getElapsedTime() - this.lastSpawnTime < 1.5;
            }
        };
        var trainSpawnerPool = [];
        TrainSpawner.prototype.setup = function (direction, x, y, z) {
            this.speed = 60;
            this.direction = direction;
            this.nextSpawnTimer = Math.random() * 10;
            this.lastSpawnTime = -100;
            this.position = new THREE.Vector3(x, y, z);
            this.trainWarning = TrainWarning.Get(-0.45, 0.375, z + 0.6);
            this.trainStartOffset = 20;
            _Game2.
            default.physicsObjects.push(this);
        };
        TrainSpawner.PopulatePool = function (amount) {
            while (trainSpawnerPool.length < amount) {
                trainSpawnerPool.push(new TrainSpawner());
            }
        };
        TrainSpawner.Get = function (direction, x, y, z) {
            var trainSpawner;
            trainSpawner = new TrainSpawner();
            trainSpawner.setup(direction, x, y, z);
            return trainSpawner;
        };
        Train.prototype = {
            contructor: Train,
            tick: function tick(deltaTime) {
                var this$1 = this;
                this.front.position.x += this.speed * this.direction * deltaTime;
                for (var itr = 0; itr < this.middle.length; itr++) {
                    this$1.middle[itr].position.x += this$1.speed * this$1.direction * deltaTime;
                }
                this.back.position.x += this.speed * this.direction * deltaTime;
                if (this.back.position.x > 1000 || this.back.position.x < -1000) {
                    this.pool();
                }
                if (this.back.position.z !== _Game2.default.playerController.targetPosition.z) {
                    return;
                }
                if (this.middle.length > 0) {
                    if (_Physics2.default.DoBoxesIntersect(_Game2.default.playerController.targetPosition.x, _Game2.default.playerController.targetPosition.z, _Game2.default.playerController.playerWidth, _Game2.default.playerController.playerDepth, this.middle[2].position.x, this.middle[2].position.z, this.HitBoxX, this.HitBoxZ) && !_Game2.default.playerController.Dead) {
                        _Game2.
                        default.playerController.kill("train");
                        _Game2.
                        default.playerController.killerTrain = this;
                    }
                }
            },
            pool: function pool() {
                var this$1 = this;
                _Game2.
                default.objectPooler.EnterPool(this.front.name, this.front);
                _Game2.
                default.objectPooler.EnterPool(this.back.name, this.back);
                for (var itr = 0; itr < this.middle.length; itr++) {
                    _Game2.
                    default.objectPooler.EnterPool(this$1.middle[itr].name, this$1.middle[itr]);
                }
                _Game2.
                default.removefromPhysics(this);
                trainPool.push(this);
            }
        };
        var trainPool = [];
        Train.prototype.setup = function (speed, direction, x, y, z) {
            var this$1 = this;
            this.middleFrames = 5;
            this.speed = speed;
            this.direction = direction;
            this.front = _Game2.
            default.objectPooler.GetItemOfType("train-front");
            this.front.position.set(x, y, z);
            this.front.rotation.y = Math.PI * direction;
            this.middle = [];
            for (var itr = 0; itr < 5; itr++) {
                var mid = _Game2.
                default.objectPooler.GetItemOfType("train-middle");
                mid.rotation.y = Math.PI * direction;
                mid.position.set(x - 4.5 * (itr + 1), y, z);
                this$1.middle.push(mid);
            }
            this.back = _Game2.
            default.objectPooler.GetItemOfType("train-back");
            this.back.rotation.y = Math.PI * direction;
            this.back.position.set(x - 27, y, z);
            this.HitBoxX = 32;
            this.HitBoxZ = 0.9;
            _Game2.
            default.physicsObjects.push(this);
        };
        Train.PopulatePool = function (amount) {
            while (trainPool.length < amount) {
                trainPool.push(new Train());
            }
        };
        Train.Get = function (speed, direction, x, y, z) {
            var train;
            train = new Train();
            train.setup(speed, direction, x, y, z);
            return train;
        };
        Train.TestPlayerTrainSide = function (testPosition) {
            for (var i = 0; i < _Game2.default.physicsObjects.length; i++) {
                if (_Game2.default.physicsObjects[i].name != "train") {
                    continue;
                }
                if (_Physics2.default.DoBoxesIntersect(testPosition.x, testPosition.z, _Game2.default.playerController.playerWidth, _Game2.default.playerController.playerDepth, _Game2.default.physicsObjects[i].object.position.x, _Game2.default.physicsObjects[i].object.position.z, _Game2.default.physicsObjects[i].HitBoxX, _Game2.default.physicsObjects[i].HitBoxZ) && !_Game2.default.playerController.Dead) {
                    _Game2.
                    default.playerController.kill("trainside");
                    _Game2.
                    default.playerController.killerXOffset = _Game2.
                    default.physicsObjects[i].object.position.x - _Game2.
                    default.playerController.player.position.x;
                    _Game2.
                    default.playerController.killerTrain = _Game2.
                    default.physicsObjects[i];
                    return;
                }
            }
        };
        var trainQuadPool = [];
        TrainWarning.prototype = {
            contructor: TrainWarning,
            Warn: function Warn(on) {
                if (on && !this.warn) {
                    this.warn = true;
                    this.trainLightOn.position.set(this.posx, this.posy, this.posz);
                    this.trainLightOff.position.set(60, 60, 60);
                    this.lightQuad.visible = true;
                    if (isCloseToPlayer(this.posz)) {
                        if (_Interface2.default.CurrentScreen === 'main' || _Interface2.default.CurrentScreen === 'death') {
                            _Game2.
                            default.playSfx("train-alarm", null, Math.abs(_Game2.default.playerController.player.position.z - this.posz));
                        }
                    }
                } else if (!on && this.warn) {
                    this.warn = false;
                    this.trainLightOn.position.set(60, 60, 60);
                    this.trainLightOff.position.set(this.posx, this.posy, this.posz);
                    this.lightQuad.visible = false;
                }
            },
            pool: function pool() {
                _Game2.
                default.objectPooler.EnterPool(this.trainLightOn.name, this.trainLightOn);
                _Game2.
                default.objectPooler.EnterPool(this.trainLightOff.name, this.trainLightOff);
                trainQuadPool.push(this.lightQuad);
                _Game2.
                default.scene.remove(this.lightQuad);
                trainWarningPool.push(this);
            }
        };
        var trainWarningPool = [];
        TrainWarning.prototype.setup = function (x, y, z) {
            if (trainQuadPool.length > 0) {
                this.lightQuad = trainQuadPool.pop();
            } else {
                var geoLight = new THREE.PlaneBufferGeometry(1, 1);
                var matLight = new THREE.MeshBasicMaterial({
                    color: 0x990000,
                    flatShading: true,
                    transparent: true,
                    opacity: 0.2
                });
                this.lightQuad = new THREE.Mesh(geoLight, matLight);
            }
            _Game2.
            default.scene.add(this.lightQuad);
            this.lightQuad.position.set(x, 1.5 + y, z);
            this.posx = x;
            this.posy = y;
            this.posz = z;
            this.trainLightOn = _Game2.
            default.objectPooler.GetItemOfType("train-light-on");
            this.trainLightOff = _Game2.
            default.objectPooler.GetItemOfType("train-light-off");
            this.warn = true;
            this.Warn(false);
        };
        TrainWarning.PopulatePool = function (amount) {
            while (trainWarningPool.length < amount) {
                trainWarningPool.push(new TrainWarning());
            }
        };
        TrainWarning.Get = function (x, y, z) {
            var trainWarning;
            trainWarning = new TrainWarning();
            trainWarning.setup(x, y, z);
            return trainWarning;
        };
        exports.TrainWarning = TrainWarning;
        exports.TrainSpawner = TrainSpawner;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _PasrTimer = __webpack_require__(13);
        var _PasrTimer2 = _interopRequireDefault(_PasrTimer);
        var Lillypad = function Lillypad() {
            this.dipPasr = new _PasrTimer2.
            default(0, 0.1, 0.1, 0.1);
        };
        Lillypad.prototype = {
            constructor: Lillypad,
            tick: function tick(deltaTime) {
                this.sineTicker += deltaTime * Math.PI / 360;
                this.sineAngle += Math.sin(this.sineTicker) / this.maxSpin;
                this.lillypadObject.rotation.set(0, this.sineAngle, 0);
                this.lillypadObject.position.y = this.restingHeight - this.dipPasr.Tick(deltaTime) * 0.18;
            },
            shiftY: function shiftY() {
                return this.lillypadObject.position.y;
            },
            pool: function pool() {
                this.lillypadObject.position.set(-60, -60, -60);
                _Game2.
                default.removefromPhysics(this);
                if (_Game2.default.currentWorld === 'space') {
                    _Game2.
                    default.objectPooler.EnterPool("space-lillypad", this.lillypadObject);
                } else {
                    _Game2.
                    default.objectPooler.EnterPool("lillypad", this.lillypadObject);
                }
                lillyPadPool.push(this);
            },
            Dip: function Dip() {
                this.dipPasr.Reset();
            }
        };
        var lillyPadPool = [];
        Lillypad.prototype.setup = function (x, y, z) {
            if (_Game2.default.currentWorld === 'space') {
                this.lillypadObject = _Game2.
                default.objectPooler.GetItemOfType("space-lillypad");
            } else {
                this.lillypadObject = _Game2.
                default.objectPooler.GetItemOfType("lillypad");
            }
            this.lillypadObject.position.set(x, y, z);
            this.restingHeight = y;
            this.isLillypad = true;
            this.sineTicker = Math.random() * Math.PI;
            this.sineAngle = 0;
            this.maxSpin = (Math.random() * 2 + 3) * 360 / Math.PI;
            _Game2.
            default.physicsObjects.push(this);
        };
        Lillypad.PopulatePool = function (amount) {
            while (lillyPadPool.length < amount) {
                lillyPadPool.push(new Lillypad());
            }
        };
        Lillypad.Get = function (x, y, z) {
            var lillyPad;
            lillyPad = new Lillypad();
            lillyPad.setup(x, y, z);
            return lillyPad;
        };
        exports.
        default = Lillypad;
    },
    function (module, exports, __webpack_require__) {
        function ParticleSystem(count, color, position, acceleration, gravity, size, direction, particleGeo, texture, stopAtGround, loops, lifetime, parent, rate) {
            var this$1 = this;
            this.acceleration = acceleration;
            this.gravity = gravity;
            this.position = position;
            this.particles = [];
            this.size = size;
            this.Timer = 0;
            this.direction = direction;
            if (this.direction == null) {
                this.direction = new THREE.Vector3(0, 0, 0);
            }
            this.stopAtGroundLevel = false || stopAtGround;
            this.rotationSpeed = 0;
            this.LastFrameTicked = _Game2.
            default.frameCount;
            this.colourA = color;
            this.colourB = color;
            this.loops = loops ? loops : 0;
            this.lifetime = lifetime ? lifetime : 5;
            this.rate = rate ? rate : 0;
            this.enabled = false;
            this.parent = parent;
            if (particleGeo == null) {
                var particleGeo = new THREE.BoxBufferGeometry(0.15, 0.15, 0.15);
            }
            if (texture != null) {}
            var shader = (0, _shader2.default)();
            var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
            uniforms.dirLightColor.value = new THREE.Color(color);
            var pMaterial = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexColors: THREE.VertexColors,
                vertexShader: shader.vertexShader,
                fragmentShader: shader.fragmentShader,
                flatShading: true
            });
            for (var p = 0; p < count; p++) {
                var pX = (Math.random() - 0.5) * size,
                    pY = (Math.random() - 0.5) * size,
                    pZ = (Math.random() - 0.5) * size,
                    particle = new THREE.Mesh(particleGeo.clone(), pMaterial);
                var scale = Math.random() + 0.5;
                particle.position.set(position.x, pY + 0.5 + position.y, position.z);
                particle.momentum = new THREE.Vector3((pX + direction.x) * acceleration / scale, (pY + 0.5 + direction.y) * acceleration / scale, (pZ + direction.z) * acceleration / scale);
                particle.alive = false;
                particle.loops = this$1.loops;
                particle.lifetime = this$1.lifetime;
                particle.deltaTime = 0;
                particle.scale.multiplyScalar(scale);
                this$1.particles.push(particle);
            }
            _Game2.
            default.physicsObjects.push(this);
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _shader = __webpack_require__(29);
        var _shader2 = _interopRequireDefault(_shader);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        ParticleSystem.prototype = {
            constructor: ParticleSystem,
            tick: function tick(deltaTime) {
                var this$1 = this;
                if (_Game2.default.frameCount == this.LastFrameTicked) {
                    return;
                }
                this.LastFrameTicked = _Game2.
                default.frameCount;
                for (var i = 0; i < this.particles.length; i++) {
                    var spawnParticle = this$1.Timer > this$1.rate;
                    if (this$1.particles[i].alive === true) {
                        this$1.particles[i].deltaTime += deltaTime;
                        if (this$1.particles[i].deltaTime > this$1.particles[i].lifetime) {
                            this$1.particles[i].deltaTime = 0;
                            this$1.particles[i].alive = false;
                            _Game2.
                            default.scene.remove(this$1.particles[i]);
                            continue;
                        }
                    } else if (spawnParticle) {
                        if (this$1.enabled) {
                            this$1.particles[i].alive = true;
                            _Game2.
                            default.scene.add(this$1.particles[i]);
                            this$1.resetParticle(this$1.particles[i]);
                            this$1.Timer -= this$1.rate;
                        }
                    } else {
                        continue;
                    }
                    var dx = Math.abs(this$1.particles[i].position.x - this$1.position.x);
                    var dz = Math.abs(this$1.particles[i].position.z - this$1.position.z);
                    this$1.particles[i].momentum.y -= this$1.gravity;
                    if (this$1.particles[i].position.y < 0.3 && this$1.stopAtGroundLevel) {
                        this$1.particles[i].momentum.y = 0;
                        this$1.particles[i].momentum.x = 0;
                        this$1.particles[i].momentum.z = 0;
                    }
                    this$1.particles[i].position.set(this$1.acceleration * this$1.particles[i].momentum.x * deltaTime + this$1.particles[i].position.x, this$1.acceleration * this$1.particles[i].momentum.y * deltaTime + this$1.particles[i].position.y, this$1.acceleration * this$1.particles[i].momentum.z * deltaTime + this$1.particles[i].position.z);
                    if (this$1.rotationSpeed > 0) {
                        this$1.particles[i].rotateY(this$1.rotationSpeed * deltaTime * Math.random());
                        this$1.particles[i].rotateX(this$1.rotationSpeed * 0.1 * deltaTime * Math.random());
                    }
                    if (this$1.colourA !== this$1.colourB && this$1.particles[i].geometry.faces[0].color !== this$1.colourA) {
                        var color = this$1.getColourInCurrentRange();
                        for (var j = 0; j < this.particles[i].geometry.faces.length; j++) {
                            this$1.particles[i].geometry.faces[j].color.set(color);
                        }
                        this$1.particles[i].geometry.colorsNeedUpdate = true;
                    }
                }
                this.Timer += deltaTime;
            },
            pool: function pool() {
                var this$1 = this;
                for (var i = 0; i < this.particles.length; i++) {
                    this$1.particles[i].position.set(60, 60, 60);
                }
                _Game2.
                default.removefromPhysics(this);
            },
            reset: function reset(x, y, z) {
                var this$1 = this;
                if (!x) {
                    x = this.position.x;
                }
                if (!y) {
                    y = this.position.y;
                }
                if (!z) {
                    z = this.position.z;
                }
                this.position.set(x, y, z);
                this.Timer = 0;
                for (var p = 0; p < this.particles.length; p++) {
                    var scale = Math.random() + 0.5;
                    var pX = (Math.random() - 0.5) * this$1.size,
                        pY = (Math.random() - 0.5) * this$1.size,
                        pZ = (Math.random() - 0.5) * this$1.size;
                    this$1.particles[p].position.set(this$1.position.x, this$1.position.y, this$1.position.z);
                    this$1.particles[p].momentum.set((pX + this$1.direction.x) * this$1.acceleration / scale, (pY + this$1.direction.y) * this$1.acceleration / scale, (pZ + this$1.direction.z) * this$1.acceleration / scale);
                    if (this$1.colourA !== this$1.colourB && this$1.particles[p].geometry.faces[0].color !== this$1.colourA) {
                        var color = this$1.getColourInCurrentRange();
                        for (var j = 0; j < this.particles[p].geometry.faces.length; j++) {
                            this$1.particles[p].geometry.faces[j].color.set(color);
                        }
                        this$1.particles[p].geometry.colorsNeedUpdate = true;
                    }
                }
            },
            resetParticle: function resetParticle(particle, x, y, z) {
                if (!x) {
                    x = this.position.x;
                }
                if (!y) {
                    y = this.position.y;
                }
                if (!z) {
                    z = this.position.z;
                }
                if (!this.parent) {
                    return;
                }
                this.Timer = 0;
                var scale = Math.random() + 0.5;
                var pX = (Math.random() - 0.5) * this.size,
                    pY = (Math.random() - 0.5) * this.size,
                    pZ = (Math.random() - 0.5) * this.size;
                particle.position.set(this.parent.position.x, 0.8, this.parent.position.z + 0.3);
                particle.momentum.set(this.direction.x * this.acceleration / scale, this.direction.y * this.acceleration / scale, this.direction.z * this.acceleration / scale);
                if (this.colourA !== this.colourB && particle.geometry.faces[0].color !== this.colourA) {
                    var color = this.getColourInCurrentRange();
                    for (var j = 0; j < particle.geometry.faces.length; j++) {
                        particle.geometry.faces[j].color.set(color);
                    }
                    particle.geometry.colorsNeedUpdate = true;
                }
            },
            play: function play() {
                this.enabled = true;
            },
            stop: function stop() {
                this.enabled = false;
            },
            setRotationSpeed: function setRotationSpeed(speed) {
                this.rotationSpeed = speed;
            },
            setColourRange: function setColourRange(colourA, colourB) {
                this.colourA = new THREE.Color(colourA);
                this.colourB = new THREE.Color(colourB);
            },
            getColourInCurrentRange: function getColourInCurrentRange() {
                var Colour = new THREE.Color(this.colourA);
                Colour.lerp(this.colourB, Math.random());
                return Colour;
            },
            emit: function emit(time) {
                if (!_Game2.default.physicsObjects.includes(this)) {
                    _Game2.
                    default.physicsObjects.push(this);
                }
                this.enabled = true;
                var self = this;
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                        self.enabled = false;
                    },
                    time);
            }
        };
        exports.
        default = ParticleSystem;
    },
    function (module, exports, __webpack_require__) {
        function CarSpawner() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.CarSpawner = undefined;
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _ObjectPooler = __webpack_require__(5);
        var _Physics = __webpack_require__(16);
        var _Physics2 = _interopRequireDefault(_Physics);
        var bigGapModifier = 12;
        var smallGapModifier = 6;;
        CarSpawner.prototype = {
            constructor: CarSpawner,
            spawnACar: function spawnACar(x, y, z) {
                var car = Car.Get(this.type, this.variation, this.speed, this.direction, x, y, z);
                this.cars.push(car);
                car.spawner = this;
                return car;
            },
            tick: function tick(deltaTime) {
                var this$1 = this;
                this.nextSpawnTimer -= deltaTime;
                while (this.nextSpawnTimer <= 0) {
                    var car = this$1.spawnACar(this$1.position.x, this$1.position.y, this$1.position.z);
                    car.tick(Math.abs(this$1.nextSpawnTimer));
                    if (this$1.currentGap < this$1.miniGaps) {
                        this$1.nextSpawnTimer += smallGapModifier / this$1.speed;
                        this$1.currentGap++;
                    } else {
                        this$1.nextSpawnTimer += bigGapModifier / this$1.speed;
                        this$1.currentGap = 0;
                    }
                }
            },
            pool: function pool() {
                var this$1 = this;
                while (this.cars.length > 0) {
                    this$1.cars.pop().pool();
                }
                _Game2.
                default.removefromPhysics(this);
                carSpawnerPool.push(this);
            },
            GetNewSpeed: function GetNewSpeed() {
                var maxSpeed = 2 + Math.min(_Game2.default.CurrentRow / 1000.0, 5);
                if (_Game2.default.CurrentRow > 300) {
                    maxSpeed += _Game2.
                    default.CurrentRow / 300;
                }
                var Speed = Math.min(2 + Math.random() * maxSpeed, 7);
                return Speed;
            },
            TestPlayerCarSide: function TestPlayerCarSide(testX) {
                for (var i = 0; i < this.cars.length; i++) {
                    if (_Physics2.default.DoLinesIntersect(testX, _Game2.default.playerController.playerWidth, car.object.position.x, car.object.HitBoxX)) {
                        _Game2.
                        default.playerController.kill("carside");
                        _Game2.
                        default.playerController.killerXOffset = car.object.position.x - _Game2.
                        default.playerController.player.position.x;
                        _Game2.
                        default.playerController.killerCar = car;
                    }
                }
            }
        };
        var carSpawnerPool = [];
        CarSpawner.prototype.setup = function (type, direction, x, y, z) {
            this.speed = this.GetNewSpeed();
            this.type = type;
            this.direction = direction ? 1 : -1;
            this.nextSpawnTimer = Math.random() * (bigGapModifier / this.speed);
            this.position = new THREE.Vector3(x, y, z);
            this.miniGapOptions = [0, 0, 0, 1, 2, 3];
            this.miniGaps = this.miniGapOptions[Math.floor(Math.random() * this.miniGapOptions.length)];
            this.currentGap = 0;
            if (_Game2.default.levelGenerator.previousLaneType == "log") {
                if (_Game2.default.levelGenerator.previousLaneWentRight == direction) {
                    this.miniGaps = 0;
                    this.speed += 1;
                }
            }
            this.cars = [];
            this.variation = (0, _ObjectPooler.GetRandomWorldPieceVariation)(type);
            _Game2.
            default.physicsObjects.push(this);
            this.tick(7);
        };
        CarSpawner.PopulatePool = function (amount) {
            while (carSpawnerPool.length < amount) {
                carSpawnerPool.push(new CarSpawner());
            }
        };
        CarSpawner.Get = function (type, direction, x, y, z) {
            var carSpawner;
            carSpawner = new CarSpawner();
            carSpawner.setup(type, direction, x, y, z);
            return carSpawner;
        };
        var Car = function Car() {};
        Car.prototype = {
            constructor: Car,
            tick: function tick(deltaTime) {
                this.object.position.x += this.speed * deltaTime;
                if (_Game2.default.currentWorld === 'space') {
                    this.object.rotation.y -= Math.PI * deltaTime * 0.5 * (this.speed / Math.abs(this.speed));
                    this.object.rotation.x += Math.PI * deltaTime * 0.5 * (this.speed / Math.abs(this.speed));
                } else {
                    this.object.rotation.x = 0;
                    this.object.rotation.z = 0;
                }
                if (this.object.position.x > 14 || this.object.position.x < -14) {
                    this.pool();
                    return;
                }
                if (this.object.position.z !== _Game2.default.playerController.targetPosition.z) {
                    return;
                }
                if (_Physics2.default.DoBoxesIntersect(_Game2.default.playerController.targetPosition.x, _Game2.default.playerController.targetPosition.z, _Game2.default.playerController.playerWidth, _Game2.default.playerController.playerDepth, this.object.position.x, this.object.position.z, this.HitBoxX, this.HitBoxZ) && !_Game2.default.playerController.Dead) {
                    _Game2.
                    default.playerController.kill("car");
                }
            },
            pool: function pool() {
                if (this.spawner && this.spawner.cars) {
                    var spawnerIdx = this.spawner.cars.indexOf(this);
                    if (spawnerIdx !== -1) {
                        this.spawner.cars.splice(spawnerIdx, 1);
                    }
                }
                this.object.position.set(-60, -60, -60);
                _Game2.
                default.objectPooler.EnterPool(this.object.name, this.object);
                _Game2.
                default.removefromPhysics(this);
                carPool.push(this);
            },
            setup: function setup(speed, vehicle, position) {
                this.object.position.set(position.x, position.y, position.z);
                this.speed = speed;
                this.object = vehicle;
            }
        };
        Car.prototype.setup = function (type, variation, speed, direction, x, y, z) {
            this.object = _Game2.
            default.objectPooler.GetItemVariation(type, variation);
            this.object.position.set(x, y, z);
            this.object.rotation.y = Math.PI / 2 * direction;
            this.speed = speed * direction;
            this.HitBoxX = variation.hitBoxScale[0];
            this.HitBoxZ = variation.hitBoxScale[2];
            this.name = "car";
            _Game2.
            default.physicsObjects.push(this);
        };
        var carPool = [];
        Car.PopulatePool = function (amount) {
            while (carPool.length < amount) {
                carPool.push(new Car());
            }
        };
        Car.Get = function (type, variation, speed, direction, x, y, z) {
            var car;
            car = new Car();
            car.setup(type, variation, speed, direction, x, y, z);
            return car;
        };
        exports.CarSpawner = CarSpawner;
    },
    function (module, exports, __webpack_require__) {
        function LogSpawner() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.LogSpawner = undefined;
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _ObjectPooler = __webpack_require__(5);
        var _PasrTimer = __webpack_require__(13);
        var _PasrTimer2 = _interopRequireDefault(_PasrTimer);
        var _StripOriginal = __webpack_require__(25);
        var _StripOriginal2 = _interopRequireDefault(_StripOriginal);
        var _StripSpace = __webpack_require__(26);
        var _StripSpace2 = _interopRequireDefault(_StripSpace);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var rapidsSpeedMultiplier = 3;
        var coinRestingHeight = 0.5;
        LogSpawner.prototype = {
            SpawnALog: function SpawnALog(deltaTime, x, y, z) {
                if (_Game2.default.currentWorld === 'space') {
                    var log = Log.Get("space-log", this.logVariation, this.moveSpeed, this.direction, x, y, z);
                } else {
                    var log = Log.Get("log", this.logVariation, this.moveSpeed, this.direction, x, y, z);
                }
                var rapidsSpeed = log.speed * rapidsSpeedMultiplier;
                var distanceInRapids = log.logEdge - log.object.position.x;
                var timeInRapids = distanceInRapids / rapidsSpeed;
                if (timeInRapids <= deltaTime) {
                    log.object.position.x += rapidsSpeed * timeInRapids;
                    log.object.position.x += log.speed * (deltaTime - timeInRapids);
                } else {
                    log.object.position.x += rapidsSpeed * deltaTime;
                }
                if (_Game2.default.currentWorld === 'space') {
                    if (Math.random() <= _StripSpace2.default.coinSpawnChance / 3) {
                        var coin;
                        if (Math.random() <= _StripSpace2.default.redCoinChance) {
                            coin = _Game2.
                            default.objectPooler.GetItemOfType("red-coin");
                        } else {
                            coin = _Game2.
                            default.objectPooler.GetItemOfType("coin");
                        }
                        coin.position.set(log.object.position.x, y + coinRestingHeight, z);
                        coin.matrixAutoUpdate = false;
                        coin.updateMatrix();
                        log.addCoin(coin);
                    }
                } else {
                    if (Math.random() <= _StripOriginal2.default.coinSpawnChance / 3) {
                        var coin;
                        if (Math.random() <= _StripOriginal2.default.redCoinChance) {
                            coin = _Game2.
                            default.objectPooler.GetItemOfType("red-coin");
                        } else {
                            coin = _Game2.
                            default.objectPooler.GetItemOfType("coin");
                        }
                        coin.position.set(log.object.position.x, y + coinRestingHeight, z);
                        coin.matrixAutoUpdate = false;
                        coin.updateMatrix();
                        log.addCoin(coin);
                    }
                }
                this.logs.push(log);
                log.lparent = this;
                return log;
            },
            pool: function pool() {
                var this$1 = this;
                while (this.logs.length > 0) {
                    this$1.logs.pop().pool();
                }
                _Game2.
                default.removefromPhysics(this);
                logSpawnerPool.push(this);
            },
            GetNewSpeed: function GetNewSpeed() {
                var maxSpeed = 2 + Math.min(Math.max(_Game2.default.CurrentRow, 0) / 1000.0, 5);
                if (Math.max(_Game2.default.CurrentRow, 0) > 300) {
                    maxSpeed += Math.max(_Game2.default.CurrentRow, 0) / 300;
                }
                var Speed = Math.min(2 + Math.random() * maxSpeed, 7);
                return Speed;
            },
            tick: function tick(deltaTime) {
                var this$1 = this;
                this.nextSpawnTimer -= deltaTime;
                while (this.nextSpawnTimer <= 0) {
                    if (this$1.poopLane) {
                        if (_Game2.default.currentWorld === 'space') {
                            this$1.logVariation = (0, _ObjectPooler.GetRandomWorldPieceVariation)("space-log");
                        } else {
                            this$1.logVariation = (0, _ObjectPooler.GetRandomWorldPieceVariation)("log");
                        }
                    }
                    this$1.SpawnALog(Math.abs(this$1.nextSpawnTimer), this$1.position.x, this$1.position.y, this$1.position.z);
                    var dt = (this$1.maxSpawnDist + this$1.logWidth + Math.random() * 3) / Math.abs(this$1.moveSpeed);
                    this$1.nextSpawnTimer += dt;
                }
            }
        };
        var logSpawnerPool = [];
        LogSpawner.prototype.setup = function (movesRight, x, y, z, forceType) {
            this.position = new THREE.Vector3(x, y, z);
            this.moveSpeed = 1.0 + Math.random() * this.GetNewSpeed();
            this.maxSpawnDist = 1 + Math.random() * 3;
            if (_Game2.default.currentWorld === 'original_cast') {
                this.logVariation = (0, _ObjectPooler.GetRandomWorldPieceVariation)("log");
            } else if (_Game2.default.currentWorld === 'space') {
                this.logVariation = (0, _ObjectPooler.GetRandomWorldPieceVariation)("space-log");
            }
            this.logWidth = this.logVariation.logwidth;
            this.nextSpawnTimer = Math.random() * ((0.3 + this.maxSpawnDist + this.logWidth) / this.moveSpeed);
            this.direction = movesRight ? 1 : -1;
            this.poopLane = false;
            this.logs = [];
            if (forceType == "poop-slow") {
                this.moveSpeed = 1.2 * this.moveSpeed;
                this.poopLane = true;
                this.maxSpawnDist = 2.0;
            } else if (forceType == "poop-fast") {
                this.moveSpeed = Math.max(this.moveSpeed, 2.2);
                this.poopLane = true;
                this.maxSpawnDist = 1.1;
            } else if (forceType == "poop") {
                this.poopLane = true;
            }
            if (_Game2.default.levelGenerator.previousLaneType == "car" || _Game2.default.levelGenerator.previousLaneType == "log") {
                if (movesRight == _Game2.default.levelGenerator.previousDirIsRight) {
                    if (Math.abs(_Game2.default.levelGenerator.previousLaneSpeed - this.moveSpeed) < 1.0) {
                        if (_Game2.default.levelGenerator.previousLaneSpeed >= 2.0) {
                            this.moveSpeed = _Game2.
                            default.levelGenerator.previousLaneSpeed - 1;
                        } else {
                            this.moveSpeed = _Game2.
                            default.levelGenerator.previousLaneSpeed + 1;
                        }
                    }
                }
            }
            _Game2.
            default.physicsObjects.push(this);
            this.tick(15);
            _Game2.
            default.levelGenerator.previousLaneSpeed = this.moveSpeed;
            if (_Game2.default.currentWorld === 'space') {
                _Game2.
                default.levelGenerator.previousLaneType = "space-log";
            } else {
                _Game2.
                default.levelGenerator.previousLaneType = "log";
            }
            _Game2.
            default.levelGenerator.previousDirIsRight = movesRight;
        };
        LogSpawner.PopulatePool = function (amount) {
            while (logSpawnerPool.length < amount) {
                logSpawnerPool.push(new LogSpawner());
            }
        };
        LogSpawner.Get = function (movesRight, x, y, z, forceType) {
            var logSpawner;
            logSpawner = new LogSpawner();
            logSpawner.setup(movesRight, x, y, z, forceType);
            return logSpawner;
        };
        var Log = function Log() {
            this.dipPasr = new _PasrTimer2.
            default(0.1, 0.1, 0.1, 0.1);
        };
        Log.prototype = {
            addCoin: function addCoin(coin) {
                this.coin = coin;
                var offsets = [];
                if (this.logWidth === 1) {
                    offsets = [0];
                } else if (this.logWidth === 2) {
                    offsets = [-.5, .5];
                } else if (this.logWidth === 3) {
                    offsets = [-1, 0, 1];
                }
                this.coinXOffset = offsets[Math.floor(Math.random() * offsets.length)];
            },
            poolCoin: function poolCoin() {
                if (!this.coin) {
                    return;
                }
                this.coin.position.set(-60, -60, -60);
                _Game2.
                default.objectPooler.EnterPool(this.coin.name, this.coin);
                this.coin = null;
            },
            atRapids: function atRapids() {
                return this.object.position.x < -this.logEdge || this.object.position.x > this.logEdge;
            },
            tick: function tick(deltaTime) {
                this.object.position.x += this.GetVelocity() * deltaTime;
                if (this.speed > 0 && this.object.position.x > 14 || this.speed < 0 && this.object.position.x < -14) {
                    this.pool();
                    return;
                }
                this.object.position.y = this.restingHeight - this.dipPasr.Tick(deltaTime) * 0.18;
                if (this.coin) {
                    this.coin.position.x = this.object.position.x + this.coinXOffset;
                    this.coin.position.y = this.object.position.y + coinRestingHeight;
                    this.coin.updateMatrix();
                }
            },
            pool: function pool() {
                if (this.lparent != null) {
                    var ii = this.lparent.logs.indexOf(this);
                    if (ii != -1) {
                        this.lparent.logs.splice(ii, 1);
                    }
                    this.lparent = null;
                }
                this.object.position.set(-60, -60, -60);
                _Game2.
                default.objectPooler.EnterPool(this.object.name, this.object);
                _Game2.
                default.logs.splice(_Game2.default.logs.indexOf(this), 1);
                _Game2.
                default.removefromPhysics(this);
                this.poolCoin();
                logPool.push(this);
            },
            Dip: function Dip() {
                this.dipPasr.Reset();
            },
            GetVelocity: function GetVelocity() {
                return this.speed * (this.atRapids() ? rapidsSpeedMultiplier : 1);
            }
        };
        var logPool = [];
        Log.prototype.setup = function (type, variation, speed, direction, x, y, z) {
            this.object = _Game2.
            default.objectPooler.GetItemVariation(type, variation);
            this.object.position.set(x, y, z);
            this.object.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI * direction);
            this.speed = speed * -direction;
            this.HitBoxX = variation.hitBoxScale[0];
            this.HitBoxZ = variation.hitBoxScale[2];
            this.logWidth = variation.logwidth;
            this.logEdge = 4.5 + variation.logwidth / 2;
            this.GetSizeRoundedToInt = -1.5 + variation.logwidth / 2;
            this.SizeAsInt = Math.round(variation.logwidth);
            this.restingHeight = y;
            _Game2.
            default.physicsObjects.push(this);
            _Game2.
            default.logs.push(this);
        };
        Log.PopulatePool = function (amount) {
            while (logPool.length < amount) {
                logPool.push(new Log());
            }
        };
        Log.Get = function (type, variation, speed, direction, x, y, z) {
            var log;
            log = new Log();
            log.setup(type, variation, speed, direction, x, y, z);
            return log;
        };
        exports.LogSpawner = LogSpawner;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var anchors = {
            center: 1,
            left: 2,
            right: 3,
            top: 4,
            bottom: 5
        };
        exports.
        default = anchors;
    }, , ,
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _ObjectPooler = __webpack_require__(5);
        var Eagle = function Eagle() {
            this.time = 0;
            this.timeOut = 5;
            this.EagleSpeed = 30;
            this.swooping = false;
            this.zShift = -2;
            this.xShift = .8;
            console.log("eagle");
            this.object = (0, _ObjectPooler.importMesh)('eagle_2_optimised', AssetLoader.loadedAssets['models/original_cast-world.json'].models.eagle_2_optimised);
            this.object.position.set(60, 2, 60);
            _Game2.
            default.scene.add(this.object);
        };
        Eagle.prototype = {
            constructor: Eagle,
            tick: function tick(deltaTime) {
                this.time += deltaTime;
                this.object.position.x = _Game2.
                default.playerController.player.position.x + this.xShift;
                this.object.position.y = 2;
                if (this.time > this.timeOut && !this.swooping && !_Game2.default.playerController.Dead) {
                    this.kill();
                }
                if (this.swooping) {
                    this.object.position.z = this.object.position.z + this.EagleSpeed * deltaTime;
                    if (this.object.position.z + this.zShift > _Game2.default.playerController.player.position.z) {
                        if (_Game2.default.playerController.waitingForEagle) {
                            _Game2.
                            default.playerController.deathParts();
                            if (_Game2.default.playerController.currentCharacter.death) {
                                _Game2.
                                default.playRandomSfx(_Game2.default.playerController.currentCharacter.death);
                            }
                            _Game2.
                            default.playerController.waitingForEagle = false;
                        }
                    }
                }
            },
            kill: function kill() {
                _Game2.
                default.playerController.kill("tooslow");
                this.swooping = true;
                this.object.position.z = _Game2.
                default.playerController.player.position.z - 20;
                _KeyboardHint2.
                default.clearActiveScreen();
            },
            advance: function advance() {
                this.time = Math.max(0, this.time - 1);
            },
            reset: function reset() {
                this.time = 0;
                this.swooping = false;
                this.object.position.set(60, 2, 60);
            }
        };
        exports.
        default = Eagle;
    },
    function (module, exports, __webpack_require__) {
        function LevelGenerator() {
            LevelGenerator.SetChunkAndStrip();
            this.startingLanesLeft = 9;
            this.currentChunk = this.GetChunk();
            this.lastScoreThreshold;
            this.previousLaneWentRight = null;
            this.isTutorial = false;
            this.tutorialWasSpawned = false;
            this.font = AssetLoader.getAssetById('fonts/editundobrk-top-numbers.json');
            this.textMat = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF,
                side: THREE.FrontSide
            });
            this.textShadowMat = new THREE.MeshBasicMaterial({
                color: 0x000000,
                side: THREE.FrontSide,
                transparent: true
            });
            this.textShadowMat.opacity = 0.4;
            this.currentText;
            this.strips = {};
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ChunksOriginal = __webpack_require__(63);
        var _ChunksOriginal2 = _interopRequireDefault(_ChunksOriginal);
        var _ChunksSpace = __webpack_require__(64);
        var _ChunksSpace2 = _interopRequireDefault(_ChunksSpace);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _StripOriginal = __webpack_require__(25);
        var _StripOriginal2 = _interopRequireDefault(_StripOriginal);
        var _StripSpace = __webpack_require__(26);
        var _StripSpace2 = _interopRequireDefault(_StripSpace);
        LevelGenerator.prototype = {
            constructor: LevelGenerator,
            previousLaneType: "grass",
            GetStripByNumber: function GetStripByNumber(laneNumber) {
                return this.strips[laneNumber];
            },
            PrintTextOnLane: function PrintTextOnLane(lane, text) {
                var shapes = this.font.generateShapes(text, 0.7, 1);
                var geo = new THREE.ShapeGeometry(shapes);
                geo.computeBoundingBox();
                var xmid = -0.5 * (geo.boundingBox.max.x - geo.boundingBox.min.x);
                var textMesh = new THREE.BufferGeometry().fromGeometry(geo);
                this.currentText = new THREE.Mesh(textMesh, this.textMat);
                this.currentText.position.set(xmid, lane.heightOffset + .1, -lane.row + 0.3);
                this.currentText.rotation.set(-Math.PI / 2, 0, 0);
                this.currentTextShadow = new THREE.Mesh(textMesh, this.textShadowMat);
                this.currentTextShadow.position.set(xmid + 0.01, lane.heightOffset + 0.05, -lane.row + 0.3);
                this.currentTextShadow.rotation.set(-Math.PI / 2, 0, 0);
                _Game2.
                default.scene.add(this.currentText);
                _Game2.
                default.scene.add(this.currentTextShadow);
            },
            Restart: function Restart() {
                LevelGenerator.SetChunkAndStrip();
                this.startingLanesLeft = 9;
                this.lastScoreThreshold = 0;
                this.currentChunk = this.GetChunk();
                this.previousLaneWentRight = null;
                this.previousLaneType = "grass";
                this.previousLaneCategory = "grass";
                this.tutorialWasSpawned = false;
                var topScore = _Storage2.
                default.getItem('crossyScore');
                this.highScore = Math.round(topScore);
                _Game2.
                default.scene.remove(this.currentText);
                _Game2.
                default.scene.remove(this.currentTextShadow);
            },
            GetStrip: function GetStrip(laneNumber) {
                var laneToGrab;
                if (!_Game2.default.hasPlayedBefore && !this.tutorialWasSpawned) {
                    this.currentChunk = this.GetSpecificChunk('tutorial');
                    this.isTutorial = true;
                    this.tutorialWasSpawned = true;
                }
                if (this.startingLanesLeft > 0) {
                    this.startingLanesLeft--;
                    if (this.startingLanesLeft > 7) {
                        if (_Game2.default.currentWorld === 'space') {
                            laneToGrab = "space-field-mid";
                        } else {
                            laneToGrab = "field-mid";
                        }
                    } else if (this.startingLanesLeft > 5) {
                        if (_Game2.default.currentWorld === 'space') {
                            laneToGrab = "space-start-forest";
                        } else {
                            laneToGrab = "start-forest";
                        }
                    } else {
                        if (this.isTutorial) {
                            if (this.startingLanesLeft > 4) {
                                if (_Game2.default.currentWorld === 'space') {
                                    laneToGrab = "space-start-forest";
                                } else {
                                    laneToGrab = "start-forest";
                                }
                            } else {
                                laneToGrab = "tutorial-grass-neat";
                            }
                        } else {
                            if (_Game2.default.currentWorld === 'space') {
                                laneToGrab = "space-grass-start";
                            } else {
                                laneToGrab = "grass-start";
                            }
                        }
                    }
                } else {
                    if (this.currentChunk.length > 0) {
                        laneToGrab = this.currentChunk.pop();
                    } else {
                        this.currentChunk = this.GetChunk();
                        laneToGrab = this.currentChunk.pop();
                    }
                }
                var strip = LevelGenerator.stripWorld.Get();
                strip.lane = strip.SpawnLaneOfType(laneToGrab, laneNumber, this.previousLane);
                strip.lane.name = laneToGrab;
                this.previousLaneType = strip.Type;
                this.previousLane = strip.lane;
                this.previousLaneCategory = strip.Category;
                if (!this.highScore) {
                    var topScore = _Storage2.
                    default.getItem('crossyScore');
                    if (topScore && topScore > 0) {
                        this.highScore = Math.round(topScore);
                    }
                }
                if (laneNumber + 2 == this.highScore && this.highScore > 0 && !this.isTutorial) {
                    this.PrintTextOnLane(strip, "top " + this.highScore.toString() + "  top " + this.highScore.toString() + "  top " + this.highScore.toString() + "  top " + this.highScore.toString());
                }
                this.strips[laneNumber] = strip;
                return strip;
            },
            GetChunk: function GetChunk() {
                var totalWeight = 0;
                this.adjustChunkRarity();
                var newChunkArray = [];
                var targetRarity = this.rarity();
                for (var i = 0; i < LevelGenerator.chunksWorld.length; i++) {
                    if (LevelGenerator.chunksWorld[i].rarity == targetRarity) {
                        newChunkArray.push(i);
                    }
                }
                this.isTutorial = false;
                var index = newChunkArray[Math.floor(Math.random() * newChunkArray.length)];
                if ("undefined" === typeof index) {
                    return this.GetChunk();
                }
                return this.CopyChunk(index);
            },
            CopyChunk: function CopyChunk(index) {
                var copy = [];
                for (var i = LevelGenerator.chunksWorld[index].lanes.length; i > 0; i--) {
                    copy.push(LevelGenerator.chunksWorld[index].lanes[i - 1]);
                }
                copy.name = LevelGenerator.chunksWorld[index].name;
                return copy;
            },
            rarity: function rarity() {
                var num = Math.random() * 100;
                if (num >= 99.9) {
                    return "MostEpic";
                }
                if (num >= 98.9) {
                    return "Epic";
                }
                if (num >= 94.0) {
                    return "Rarer";
                }
                if (num >= 84.9) {
                    return "Rare";
                }
                if (num >= 70) {
                    return "Uncommon";
                }
                return "Common";
            },
            GetSpecificChunk: function GetSpecificChunk(name) {
                var index = 0;
                for (var i = 0; i < LevelGenerator.chunksWorld.length; i++) {
                    if (LevelGenerator.chunksWorld[i].name == name) {
                        index = i;
                    }
                }
                return this.CopyChunk(index);
            },
            adjustChunkRarity: function adjustChunkRarity() {
                var this$1 = this;
                for (var i = 0; i < LevelGenerator.chunksWorld.length; i++) {
                    for (var j = 0; j < LevelGenerator.chunksWorld[i].Events.length; j++) {
                        if (LevelGenerator.chunksWorld[i].Events[j].scoreThreshold < _Game2.default.CurrentRow && LevelGenerator.chunksWorld[i].Events[j].scoreThreshold >= LevelGenerator.lastScoreThreshold) {
                            LevelGenerator.chunksWorld[i].rarity = LevelGenerator.chunksWorld[i].Events[j].rarity;
                            this$1.lastScoreThreshold = _Game2.
                            default.CurrentRow;
                        }
                    }
                }
            }
        };
        LevelGenerator.SetChunkAndStrip = function () {
            LevelGenerator.chunksWorld = _ChunksSpace2.
            default;
            LevelGenerator.stripWorld = _StripSpace2.
            default;
            switch (_Game2.default.currentWorld) {
                case 'original_cast':
                    LevelGenerator.chunksWorld = _ChunksOriginal2.
                    default;
                    LevelGenerator.stripWorld = _StripOriginal2.
                    default;
                    break;
                case 'space':
                    LevelGenerator.chunksWorld = _ChunksSpace2.
                    default;
                    LevelGenerator.stripWorld = _StripSpace2.
                    default;
                    break;
            }
        };
        exports.
        default = LevelGenerator;
    },
    function (module, exports, __webpack_require__) {
        function PlayerController(character) {
            this.roundIdx = 1;
            this.IsMoving = false;
            this.hopDelay = 0.15;
            this.hopDistance = 1;
            this.player = character;
            this.currentCharacter = null;
            this.startGameWobble = true;
            this.playerWidth = 0.29;
            this.playerDepth = 0.52;
            this.rotatePasr = new _PasrTimer2.
            default(0, 0, 0, 0.4);
            this.hopPasr = new _PasrTimer2.
            default(0, 0.07, 0, 0.12);
            this.hopPasrEased = 0;
            this.movePasr = new _PasrTimer2.
            default(0, 0, 0, 0.4);
            this.vectorOne = new THREE.Vector3(1, 1, 1);
            this.hasMoved = false;
            this.hasMovedThisRound = false;
            this.drownPasr = new _PasrTimer2.
            default(0, 0, 0, 1);
            this.dipPasr = new _PasrTimer2.
            default(0.01, 0.1, 0.17, 0.1);
            this.drownParticles = new _WaterParticleSystem2.
            default(70, 0x449EFF, new THREE.Vector3(60, 60, 60), 1.9, 0.3, 0.9, new THREE.Vector3(0, 1.5, 0), null, null, true);
            this.chickenParticles;
            this.robotParticles;
            this.spaceChickenParticles;
            this.splatPasr = new _PasrTimer2.
            default(0, 0, 0, 0.1);
            this.spreadPasr = new _PasrTimer2.
            default(0, 0, 0, 1.0);
            this.cutePasr = new _PasrTimer2.
            default(0, 0.4, 0, 0.4);
            this.cutePasr.Reset();
            this.pushPasr = new _PasrTimer2.
            default(0, 0.03, 0, 0.12);
            this.scaleVector = new THREE.Vector3(1, 1, 1);
            this.deadScale = new THREE.Vector3(1.2, 0.7, 1.1);
            this.movePasrVector = new THREE.Vector3(1, 1, 1);
            this.hopHeight = 0.5;
            this.heightOffset = 0.375;
            this.hopTimer = 0;
            this.cameraMoveOnEagleZ = 6;
            this.DeathCamPosition = new THREE.Vector3(2.388232, 10.25858, 10);
            this.targetPosition = new THREE.Vector3(0, this.heightOffset, 2);
            this.previousPosition = new THREE.Vector3(0, this.heightOffset, 2);
            this.desiredMeshScale = new THREE.Vector3(1, 1, 1);
            this.desiredDirection = character.quaternion.clone();
            this.lerpingMeshScale = new THREE.Vector3(1, 1, 1);
            this.lerpingMeshOffset = new THREE.Vector3(1, 1, 1);
            this.lerpingMeshRotation = new THREE.Vector3(1, 1, 1);
            this.directionRightEuler = new THREE.Euler(0, Math.PI / 2, 0);
            this.directionLeftEuler = new THREE.Euler(0, 3 * Math.PI / 2, 0);
            this.directionForwardEuler = new THREE.Euler(0, Math.PI, 0);
            this.directionBackEuler = new THREE.Euler(0, 0, 0);
            this.nextPlayerAction = "none";
            this.Dead = false;
            this.deathType = "none";
            this.drownTest = false;
            this.killerCar = null;
            this.killerTrain = null;
            this.waitingForEagle = false;
            this.killerXOffset = 0;
            this.currentLog;
            this.playingRiverAmbience = false;
            this.rightIsBlocked = false;
            this.leftIsBlocked = false;
            this.forwardIsBlocked = false;
            this.backIsBlocked = false;
            this.bumped = 0;
            this.eagleCountdown = 0;
            this.lastKill = "";
            this.killTime = 0;
            this.onLily = null;
            this.spaceWalkerTimer = 0;
            this.spaceWalkerAnimations = [];
            this.setUpCharacterParticles(_GameSave2.default.GetCurrCharacter());
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _AppStoreInterstitial = __webpack_require__(9);
        var _AppStoreInterstitial2 = _interopRequireDefault(_AppStoreInterstitial);
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _CharacterTryouts = __webpack_require__(17);
        var _CharacterTryouts2 = _interopRequireDefault(_CharacterTryouts);
        var _Easing = __webpack_require__(28);
        var _Easing2 = _interopRequireDefault(_Easing);
        var _FreeGift = __webpack_require__(21);
        var _FreeGift2 = _interopRequireDefault(_FreeGift);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _Localisation = __webpack_require__(12);
        var _Localisation2 = _interopRequireDefault(_Localisation);
        var _MetaHelper = __webpack_require__(60);
        var _MetaHelper2 = _interopRequireDefault(_MetaHelper);
        var _ParticleSystem = __webpack_require__(38);
        var _ParticleSystem2 = _interopRequireDefault(_ParticleSystem);
        var _WaterParticleSystem = __webpack_require__(62);
        var _WaterParticleSystem2 = _interopRequireDefault(_WaterParticleSystem);
        var _PasrTimer = __webpack_require__(13);
        var _PasrTimer2 = _interopRequireDefault(_PasrTimer);
        var _Physics = __webpack_require__(16);
        var _Physics2 = _interopRequireDefault(_Physics);
        var _RewardedHelper = __webpack_require__(14);
        var _RewardedHelper2 = _interopRequireDefault(_RewardedHelper);
        var _ScreenFlash = __webpack_require__(61);
        var _ScreenFlash2 = _interopRequireDefault(_ScreenFlash);
        var _Storage = __webpack_require__(1);
        var _Storage2 = _interopRequireDefault(_Storage);
        var _ObjectPooler = __webpack_require__(5);
        var _ObjectPooler2 = _interopRequireDefault(_ObjectPooler);;
        PlayerController.prototype = {
            constructor: PlayerController,
            deathParts: function deathParts() {
                if (_GameSave2.default.GetCurrCharacter() == 'chicken') {
                    this.chickenParticles.emit(500);
                } else if (_GameSave2.default.GetCurrCharacter() == 'robot') {
                    this.robotExplode();
                }
            },
            robotExplode: function robotExplode() {
                this.robotParticles.reset(this.player.position.x, 0.5, this.player.position.z);
                this.robotParticles.play();
                this.screenFlash.play();
            },
            kill: function kill(reason) {
                PokiSDK.roundEnd(_Game2.default.currentWorld === 'original_cast' ? 'original' : _Game2.default.currentWorld);
                _Game2.
                default.deathsSinceLastCharacterUnlock++;
                _Storage2.
                default.setItem('deathsSinceLastCharacterUnlock', _Game2.default.deathsSinceLastCharacterUnlock);
                if (!_Storage2.default.getItem('first_round_finished')) {
                    analytics.track('game_onboarding', 'first_round_finished');
                    _Storage2.
                    default.setItem('first_round_finished', true);
                }
                analytics.track('game_play', 'round_finished', this.roundIdx, this.roundIdx);
                analytics.track('game_play', 'game_over', reason, _Game2.default.score);
                this.onLily = null;
                _Interface2.
                default.HideHint();
                if (this.Dead) {
                    return;
                } else {
                    this.lastKill = reason;
                    this.killTime = Date.now();
                }
                _Interface2.
                default.pauseBtn.visible = false;
                this.Dead = true;
                switch (this.deathType = reason) {
                    case "tooslow":
                        _Game2.
                        default.playSfx('hawk-screech-02');
                        break;
                    case "ufo":
                        _Game2.
                        default.playSfx('UFO_Pickup');
                        break;
                    case "water":
                        if (_Game2.default.currentWorld === 'original_cast') {
                            _Game2.
                            default.playRandomSfx(['watersplash', 'watersplashlow']);
                        } else if (_Game2.default.currentWorld === 'space') {
                            _Game2.
                            default.playRandomSfx(['default_death1', 'default_death2']);
                        }
                        break;
                    case "log":
                        if (_Game2.default.currentWorld === 'original_cast') {
                            _Game2.
                            default.playRandomSfx(['rapidsdeath3', 'rapidsdeath9']);
                        } else if (_Game2.default.currentWorld === 'space') {
                            _Game2.
                            default.playSfx('LeaveScreen_On_Asteroid');
                        }
                        break;
                    case "car":
                        if (_GameSave2.default.GetCurrCharacter() == 'chicken') {
                            _Game2.
                            default.playSfx(['carsquish3']);
                        } else {
                            _Game2.
                            default.playRandomSfx(['carsquish', 'carsquish3']);
                        }
                        this.player.rotation.set(0, Math.random() * (Math.PI / 2) - Math.PI / 4, 0);
                        break;
                    case "carside":
                        _Game2.
                        default.playSfx('carhit');
                        this.player.rotation.set(0, Math.PI, Math.random() * (Math.PI / 2) - Math.PI / 4);
                        break;
                    case "train":
                        _Game2.
                        default.playSfx('trainsplat');
                        this.player.rotation.set(0, Math.random() * (Math.PI / 2) - Math.PI / 4, 0);
                        break;
                    case "trainside":
                        _Game2.
                        default.playSfx('trainsplat');
                        this.player.rotation.set(0, 0, 0);
                        break;
                }
                if (reason === "tooslow" || reason === "ufo") {
                    this.eagleCountdown = .4;
                    this.waitingForEagle = true;
                } else if (typeof this.currentCharacter.death !== 'undefined') {
                    this.deathParts();
                    _Game2.
                    default.playRandomSfx(this.currentCharacter.death);
                }
                _Interface2.
                default.CurrentScreen = "death";
                _Interface2.
                default.showMore.visible = false;
                _Interface2.
                default.characterSelect.visible = false;
                _Interface2.
                default.topScore.visible = true;
                _Interface2.
                default.barContainer.visible = true;
                this.drownPasr.Reset();
                this.playingRiverAmbience = false;
                this.bumped = 0;
                var adRand = Math.random();
                var featuresToShow = _MetaHelper2.
                default.getFeaturesByRound(this.roundIdx);
                for (var idx = 0; idx < featuresToShow.length; idx++) {
                    var feature = featuresToShow[idx];
                    if (feature.key === 'upsell-interstitial') {
                        _AppStoreInterstitial2.
                        default.lastUpsellScreen = 'game_over_interstitial';
                        _AppStoreInterstitial2.
                        default.show();
                    }
                    if (feature.key === 'upsell-notification') {
                        _AppStoreInterstitial2.
                        default.lastUpsellScreen = 'game_over_interstitial';
                        _AppStoreInterstitial2.
                        default.show();
                    }
                    if (feature.key === 'rewarded') {
                        _RewardedHelper2.
                        default.showRewardedOpportunity();
                    }
                    if (feature.key === 'tryout-characters') {
                        _Interface2.
                        default.notificationBar(null, 'tryout-characters');
                    }
                    if (feature.key === 'tryout-buy') {
                        var actualRoundsLeft = _CharacterTryouts2.
                        default.roundsLeft - 1;
                        _Interface2.
                        default.notificationBar(null, 'tryout-buy');
                        var text;
                        if (actualRoundsLeft > 0) {
                            text = actualRoundsLeft + ' round ' + (actualRoundsLeft !== 1 ? 's' : '') + 'left';
                        } else {
                            text = 'last chance to buy';
                        }
                        _Interface2.
                        default.notificationBar(text, 'tryout-rounds-left');
                    }
                    if (feature.key === 'tryout-app-store') {
                        _Interface2.
                        default.notificationBar(null, 'tryout-app-store');
                    }
                    if (feature.key === 'free-gift') {
                        _FreeGift2.
                        default.notificationBar();
                    }
                    if (feature.key === 'tryout-app-store-promo') {
                        var actualRoundsLeft = _CharacterTryouts2.
                        default.roundsLeft - 1;
                        if (actualRoundsLeft >= 0) {
                            _Interface2.
                            default.notificationBar(null, 'tryout-app-store-promo');
                            if (actualRoundsLeft > 0) {
                                _Interface2.
                                default.notificationBar(actualRoundsLeft + ' round' + (actualRoundsLeft !== 1 ? 's' : '') + ' left', 'tryout-rounds-left');
                            }
                        }
                    }
                    if (feature.key === 'coins-to-go') {
                        var cost = _Carousel2.
                        default.charactCost - _GameSave2.
                        default.GetCoins();
                        if (cost < 10) {
                            cost = ' ' + cost;
                        }
                        if (cost.toString().indexOf('1') !== -1) {
                            cost = ' ' + cost;
                        }
                        var text = _Localisation2.
                        default.GetString('coins-to-go').replace('XXX', cost);
                        _Interface2.
                        default.notificationBar(text, 'coinstogo');
                    }
                    if (feature.key === 'unlock-new') {
                        _GumballMachineScreen2.
                        default.showNotificationBar();
                    }
                }
                PokiSDK.gameplayStop();
                _CharacterTryouts2.
                default.roundEnded();
                _Carousel2.
                default.roundEnded();
                _Interface2.
                default.setupEndScreenKeyboardNavigation();
                this.roundIdx++;
            },
            setCharacter: function setCharacter(character, charName) {
                var this$1 = this;
                _Game2.
                default.scene.remove(this.player);
                this.currentCharacter = _Game2.
                default.characters[charName];
                this.currentCharacterName = charName;
                this.player = character;
                if (charName === 'space_chicken_carousel' || charName === 'space_chicken') {
                    var glass = (0, _ObjectPooler.importMesh)('Carousel.characters[undefined][1', _Carousel2.default.characters[undefined][1]);
                    glass.scale.set(1.01, 1.01, 1.01);
                    glass.material.transparent = true;
                    glass.material.uniforms.transparency.value = 0.7;
                    glass.material.uniforms.saturation.value = 1.0;
                    glass.material.uniforms.GREY_COLOR.value = this.vectorOne;
                    this.player.add(glass);
                }
                if (charName === 'space_walker') {
                    this.spaceWalkerAnimations[0].material.uniforms.saturation.value = 1;
                    for (var i = 1; i < 9; ++i) {
                        this$1.spaceWalkerAnimations.push((0, _ObjectPooler.importMesh)('Carousel.characters[undefined][' + (i + 1).toString()));
                        this$1.spaceWalkerAnimations[i].material.uniforms.saturation.value = 1;
                    }
                }
                this.desiredMeshScale.set(1, 1, 1);
                this.desiredDirection.set(character.rotation);
                this.lerpingMeshScale.set(1, 1, 1);
                this.lerpingMeshOffset.set(1, 1, 1);
                this.lerpingMeshRotation.set(1, 1, 1);
                this.setUpCharacterParticles(charName);
                this.setUpLight(charName);
                _Game2.
                default.scene.add(this.player);
                this.player.position.set(this.targetPosition.x, this.targetPosition.y, this.targetPosition.z);
            },
            setUpLight: function setUpLight(charName) {
                switch (charName) {
                    case 'space_walker': {
                        _Game2.
                        default.sun.castShadow = false;
                        for (var i = 0; i < _Game2.default.scene.children.length; ++i) {
                            if (_Game2.default.scene.children[i].material && _Game2.default.scene.children[i].material.uniforms) {
                                _Game2.
                                default.scene.children[i].material.uniforms['dirLight'].value.y = -1;
                                _Game2.
                                default.scene.children[i].material.uniforms['fillLight'].value.y = -1;
                            }
                        }
                        for (var i = 0; i < Object.keys(_Game2.default.objectPooler.items).length; ++i) {
                            if (Object.keys(_Game2.default.objectPooler.items)[i].includes('space') && !Object.keys(_Game2.default.objectPooler.items)[i].includes('space-blocking') && !Object.keys(_Game2.default.objectPooler.items)[i].includes('space-vehicle-car')) {
                                for (var j = 0; j < _Game2.default.objectPooler.items[Object.keys(_Game2.default.objectPooler.items)[i]].length; ++j) {}
                            }
                        }
                        break;
                    }
                    default: {}
                }
                switch (_Game2.default.currentWorld) {
                    case 'original_cast': {
                        _Game2.
                        default.ambientLight.color = new THREE.Color(0.5, 0.5, 0.7);
                        break;
                    }
                    case 'space': {
                        _Game2.
                        default.ambientLight.color = new THREE.Color(0.3, 0.3, 0.6);
                        break;
                    }
                }
            },
            setUpCharacterParticles: function setUpCharacterParticles(charName) {
                if (charName == 'chicken' && this.chickenParticles == null) {
                    this.chickenParticles = new _ParticleSystem2.
                    default(500, 0xFFFFFF, new THREE.Vector3(60, 60, 60), 0.4, 0.02, 1.6, new THREE.Vector3(3.5, 2, -3), new THREE.BoxGeometry(0.1, 0.0000001, 0.02), null, false, -1, 10.0, this.player, 0.001);
                    this.chickenParticles.setRotationSpeed(3);
                }
                if (charName == 'robot' && this.robotParticles == null) {
                    this.robotParticles = new _ParticleSystem2.
                    default(20, 0x777777, new THREE.Vector3(60, 60, 60), 0.8, 0.2, 3.6, new THREE.Vector3(0, 6, -0.5), new THREE.BoxGeometry(0.2, 0.2, 0.2), null, true);
                    this.robotParticles.setColourRange(0xFFFFFF, 0x000000);
                    this.screenFlash = new _ScreenFlash2.
                    default();
                }
                if (charName == 'space_chicken_carousel' || charName == 'astronaut' || charName === 'space_chicken') {
                    this.spaceChickenParticles = new _ParticleSystem2.
                    default(50, 0xFFFFFF, new THREE.Vector3(60, 60, 60), 1, -0.2, 1, new THREE.Vector3(0, 3, 3), new THREE.BoxGeometry(.1, 0.1, 0.1), null, true, -1, 0.6, this.player, 0.01);
                }
            },
            SetDesiredRotationForDirection: function SetDesiredRotationForDirection(direction) {
                if (direction === "right") {
                    this.desiredDirection.setFromEuler(this.directionRightEuler);
                }
                if (direction === "left") {
                    this.desiredDirection.setFromEuler(this.directionLeftEuler);
                }
                if (direction === "forward") {
                    this.desiredDirection.setFromEuler(this.directionForwardEuler);
                }
                if (direction === "back") {
                    this.desiredDirection.setFromEuler(this.directionBackEuler);
                }
                this.rotatePasr.Reset();
            },
            Bumped: function Bumped() {
                _KeyboardHint2.
                default.
                switch('movement-hint');
                this.bumped++;
                if (this.bumped > 2) {
                    _Interface2.
                    default.ShowHint();
                }
            },
            Update: function Update(deltaTime) {
                if (_Game2.default.currentWorld === 'space' && _Game2.default.space_background) {
                    _Game2.
                    default.space_background.position.set(_Game2.default.space_background.position.x, _Game2.default.space_background.position.y, THREE.Math.lerp(_Game2.default.space_background.position.z, this.player.position.z - 10, deltaTime));
                }
                if (this.hopTimer > 0) {
                    this.hopTimer -= deltaTime;
                } else {
                    this.IsMoving = false;
                    this.hopTimer = 0;
                }
                if (!this.hopPasr.isFinished()) {
                    this.hopPasrEased = _Easing2.
                    default.easeOutQuad(this.hopPasr.Tick(deltaTime));
                    if (this.drownTest && this.hopPasr.isFinished()) {
                        if (this.CheckWaterObjects(deltaTime)) {
                            this.kill("water");
                            return;
                        }
                        this.drownTest = false;
                    }
                }
                this.drownPasr.Tick(deltaTime);
                this.dipPasr.Tick(deltaTime);
                if (this.startGameWobble) {
                    this.cutePasr.Tick(deltaTime);
                    if (this.cutePasr.isFinished()) {
                        this.desiredMeshScale.set(1, 1, 1);
                        this.cutePasr.Reset();
                    }
                    if (this.cutePasr.reachedSustain()) {
                        this.desiredMeshScale.set(1.1, 0.9, 1.1);
                    }
                }
                if (!this.Dead) {
                    if (!this.rotatePasr.isFinished()) {
                        this.player.quaternion.slerp(this.desiredDirection, 1 - _Easing2.default.easeOutQuad(this.rotatePasr.Tick(deltaTime * 5)));
                    }
                }
                var midHopSquish = this.hopPasrEased / this.player.height * 0.5;
                this.scaleVector.set(midHopSquish * 0.1, -midHopSquish * 0.4, 0);
                this.desiredMeshScale = this.desiredMeshScale.multiply(this.lerpingMeshScale);
                this.scaleVector.add(this.desiredMeshScale);
                var dt = 15 * deltaTime;
                dt = Math.min(0.5, dt);
                if (deltaTime <= 0) {
                    this.player.scale = this.scaleVector;
                } else {
                    this.player.scale.lerp(this.scaleVector, dt);
                }
                this.targetPosition.y = this.hopPasrEased * this.hopHeight - this.dipPasr.GetValue() * 0.2;
                if (this.currentCharacter.mesh.charName == 'snail') {
                    this.targetPosition.y = -(this.dipPasr.GetValue() * 0.2);
                } else if (this.currentCharacter.mesh.charName == 'rover' || this.currentCharacter.mesh.charName == 'robot_dog' || this.currentCharacter.mesh.charName == 'space_walker') {
                    this.targetPosition.y = this.dipPasr.GetValue() * 0.2;
                }
                if (this.onLily != null) {
                    var dy = this.onLily.shiftY();
                    this.targetPosition.y += dy - 0.3;
                }
                if (this.currentCharacter.mesh.charName.includes('space_walker') && _Game2.default.currentWorld === 'space' && !this.Dead) {
                    this.spaceWalkerTimer += deltaTime * 2;
                    var h = this.player.height;
                    _Game2.
                    default.scene.remove(this.player);
                    if (Math.floor(this.spaceWalkerTimer) === 8) {
                        this.spaceWalkerTimer = 0;
                    }
                    this.player = this.spaceWalkerAnimations[Math.floor(this.spaceWalkerTimer)];
                    this.player.height = h;
                    _Game2.
                    default.scene.add(this.player);
                }
                this.hasMoved = false;
                if (this.hopTimer <= 0 && !this.drownTest) {
                    var dx = 0;
                    var dz = 0;
                    if (!this.Dead) {
                        if (this.nextPlayerAction !== 'none') {
                            if (this.currentCharacter.mesh.charName === 'space_chicken_carousel' || this.currentCharacter.mesh.charName == 'astronaut' || this.currentCharacter.mesh.charName == 'space_chicken') {
                                this.spaceChickenParticles.emit(500);
                            }
                        }
                        if (this.nextPlayerAction === "Down") {
                            this.desiredMeshScale.set(this.deadScale.x, this.deadScale.y, this.deadScale.z);
                            this.startGameWobble = false;
                        } else if (this.nextPlayerAction != "none") {
                            this.desiredMeshScale.set(1, 1, 1);
                            this.startGameWobble = false;
                            this.SetDesiredRotationForDirection(this.nextPlayerAction);
                        }
                        if (this.nextPlayerAction == "right") {
                            if (this.targetPosition.x < 3.5) {
                                _Interface2.
                                default.HideHint();
                                if (this.CheckWalls(this.player.position.x + 1, -this.player.position.z)) {
                                    dx = this.hopDistance;
                                    this.nextPlayerAction = "none";
                                    this.bumped = 0;
                                }
                            }
                        } else if (this.nextPlayerAction == "left") {
                            if (this.targetPosition.x > -3.5) {
                                _Interface2.
                                default.HideHint();
                                if (this.CheckWalls(this.player.position.x - 1, -this.player.position.z)) {
                                    dx = -this.hopDistance;
                                    this.nextPlayerAction = "none";
                                    this.bumped = 0;
                                }
                            }
                        } else if (this.nextPlayerAction == "forward") {
                            if (this.CheckWalls(this.player.position.x, -this.targetPosition.z + 1)) {
                                dz = -this.hopDistance;
                                this.heightOffset = this.GetRowHeight(this.targetPosition.z + dz);
                                this.nextPlayerAction = "none";
                                var targetLane = _Game2.
                                default.levelGenerator.GetStripByNumber(-this.targetPosition.z + 1);
                                if (targetLane.carSpawner) {
                                    targetLane.carSpawner.testPlayerCarSide(this.targetPosition.x);
                                }
                                this.bumped = 0;
                            } else if (this.checkBump) {
                                this.checkBump = false;
                                this.Bumped();
                            }
                        } else if (this.nextPlayerAction == "back") {
                            _Interface2.
                            default.HideHint();
                            if (this.targetPosition.z <= 4 && this.CheckWalls(this.player.position.x, -this.player.position.z - 1)) {
                                dz = this.hopDistance;
                                this.nextPlayerAction = "none";
                                this.heightOffset = this.GetRowHeight(this.targetPosition.z + dz);
                                this.bumped = 0;
                            }
                        }
                    }
                    if (dx > 0 || dx < 0 || dz < 0 || dz > 0) {
                        _KeyboardHint2.
                        default.cancelReappearTimeout();
                        this.hasMovedThisRound = true;
                        this.hasMoved = true;
                        this.previousPosition.set(this.targetPosition.x, this.heightOffset, this.targetPosition.z);
                        this.targetPosition.x += dx;
                        this.targetPosition.z += dz;
                        this.Hop();
                        if (this.currentLog != null && typeof this.currentLog !== 'undefined') {
                            if (this.currentLog.dipPasr.isFinished()) {
                                this.currentLog.Dip();
                            }
                        }
                        if (dz < 0) {
                            _Game2.
                            default.eagle.advance();
                        } else if (dz > 0) {
                            _Game2.
                            default.eagle.time++;
                        }
                        this.CheckWaterObjects(dx);
                    }
                }
                if (this.currentLog != null) {
                    this.targetPosition.x += this.currentLog.GetVelocity() * deltaTime;
                } else {
                    this.targetPosition.set(Math.round(this.targetPosition.x), this.targetPosition.y, this.targetPosition.z);
                }
                if (this.hasMoved) {
                    this.CheckForCoins(this.targetPosition.x, this.targetPosition.z);
                    this.CheckForRiverAmbience();
                }
                var y = this.GetRowHeight(_Game2.default.CurrentRow);
                if (typeof y === "undefined") {
                    y = 0.375;
                }
                this.heightOffset = y;
                this.targetPosition.set(this.targetPosition.x, this.targetPosition.y + this.heightOffset, this.targetPosition.z);
                if (this.Dead) {
                    if (this.deathType == "car" || this.deathType == "squash") {
                        this.targetPosition.set(this.targetPosition.x, this.heightOffset, this.targetPosition.z);
                        if (_GameSave2.default.GetCurrCharacter() == 'robot') {
                            this.desiredMeshScale.set(0, 0, 0);
                        } else {
                            this.desiredMeshScale.set(1 + (1 - this.spreadPasr.Tick(deltaTime)), this.splatPasr.Tick(deltaTime) + 0.05, 1);
                        }
                        this.DeathCamPosition.set(this.player.position.x + 2.388232, this.player.position.y + 10.25858, this.player.position.z + 8);
                    } else if (this.deathType == "carside") {
                        this.targetPosition.set(this.player.position.x, this.heightOffset, this.player.position.z);
                        if (_GameSave2.default.GetCurrCharacter() == 'robot') {
                            this.desiredMeshScale.set(0, 0, 0);
                        } else {
                            this.desiredMeshScale.set(1, 1.3, this.splatPasr.Tick(deltaTime) + 0.15);
                        }
                        if (typeof this.killerCar !== 'undefined' && this.killerCar != null) {
                            var killerCarTransform = this.killerCar.object.position;
                            this.targetPosition.set(killerCarTransform.x - this.killerXOffset, killerCarTransform.y + 0.3, killerCarTransform.z + 0.6);
                            if (this.player.position.x > 12 || this.player.position.x < -12) {
                                this.killerCar = null;
                            }
                        }
                        if (this.player.position.x < 9 && this.player.position.x > -9) {
                            this.DeathCamPosition.set(this.player.position.x + 2.388232, this.DeathCamPosition.y, this.player.position.z + 8);
                        }
                    } else if (this.deathType == "train") {
                        if (_GameSave2.default.GetCurrCharacter() == 'robot') {
                            this.desiredMeshScale.set(0, 0, 0);
                        } else {
                            this.desiredMeshScale.set(1 + (1 - this.spreadPasr.Tick(deltaTime)), this.splatPasr.Tick(deltaTime) + 0.05, 1);
                        }
                        if (this.player.position.x > 12 || this.player.position.x < -12) {
                            this.killerTrain = null;
                        }
                        if (this.player.position.x < 3 && this.player.position.x > -3) {
                            this.DeathCamPosition.set(this.player.position.x, this.DeathCamPosition.y, this.player.position.z + 8);
                        }
                        if (_Game2.default.currentWorld === 'original_cast') {
                            if (this.killerTrain != null) {
                                this.player.position.x = this.killerTrain.front.position.x;
                            }
                        } else if (this.deathType == "trainside") {
                            if (typeof this.killerTrain !== 'undefined' && this.killerTrain != null) {
                                var killerTrainTransform = this.killerTrain.object.position;
                                this.targetPosition.set(killerTrainTransform.x - this.killerXOffset, killerTrainTransform.y + 0.3, killerTrainTransform.z + 0.6);
                            }
                        }
                        if (this.player.position.x > 10 || this.player.position.x < -10) {
                            this.player.killerTrain = null;
                        }
                        if (this.player.position.x < 9 && this.player.position.x > -9) {
                            this.DeathCamPosition.set(this.player.position.x, this.DeathCamPosition.y, this.DeathCamPosition.z);
                        }
                    } else if (this.deathType == "water" || this.deathType == "croc") {
                        var downScale = 1.4;
                        if (this.drownPasr.isFinished()) {
                            downScale = 7.0;
                        }
                        this.targetPosition.set(this.player.position.x, 0.5 - _Easing2.default.easeOutQuint(1.0 - this.drownPasr.GetValue()) * downScale, this.player.position.z);
                        if (this.drownPasr.reachedSustain()) {
                            if (_Game2.default.currentWorld === "original_cast") {
                                this.drownParticles.reset(this.player.position.x, 0.5, this.player.position.z);
                                this.drownParticles.play();
                            }
                        }
                        this.DeathCamPosition.set(this.player.position.x + 2.388232, 9.25858, this.player.position.z + 8);
                    } else if (this.deathType == "log") {
                        if (this.player.position.x > 12 || this.player.position.x < -12) {
                            this.currentLog = null;
                        }
                        if (this.player.position.x < 5 && this.player.position.x > -5) {
                            this.DeathCamPosition.set(this.player.position.x + 2.388232, 9.25858, this.player.position.z + 8);
                        }
                        if (_GameSave2.default.GetCurrCharacter() == 'robot') {
                            this.desiredMeshScale.set(0, 0, 0);
                        }
                    } else if (this.deathType == "tooslow") {
                        if (this.waitingForEagle) {
                            this.targetPosition.set(this.player.position.x, this.heightOffset, this.player.position.z);
                            this.DeathCamPosition.set(this.player.position.x + 2.388232, 9.25858, this.player.position.z + 7);
                        } else {
                            this.targetPosition.set(this.player.position.x, this.heightOffset, _Game2.default.eagle.object.position.z - _Game2.default.eagle.zShift);
                            if (this.player.position.z > -_Game2.default.CurrentRow + 26) {
                                this.DeathCamPosition.set(this.player.position.x + 2.388232, 9.25858, this.player.position.z + 7);
                            }
                        }
                    } else if (this.deathType === "ufo") {
                        if (this.waitingForEagle) {
                            this.targetPosition.x = this.player.position.x;
                            this.targetPosition.z = this.player.position.z;
                            this.DeathCamPosition.set(this.player.position.x + 2.388232, 9.25858, this.player.position.z + 7);
                        } else {
                            this.targetPosition.x = this.player.position.x;
                            this.targetPosition.z = this.player.position.z;
                            if (this.player.position.z > -_Game2.default.CurrentRow + 26) {
                                this.DeathCamPosition.set(this.player.position.x + 2.388232, 9.25858, this.player.position.z + 7);
                            }
                        }
                    }
                }
                var rowToConsider = _Game2.
                default.rows[this.GetRowIndex(-Math.round(this.targetPosition.z))];
                if (rowToConsider.Category === "holed") {
                    this.CheckWaterObjects();
                }
                this.UpdatePlayerPosition(deltaTime);
            },
            EagleGotMe: function EagleGotMe() {
                PokiSDK.roundEnd(_Game2.default.currentWorld === 'original_cast' ? 'original' : _Game2.default.currentWorld);
                this.waitingForEagle = false;
                this.Dead = true;
            },
            CheckWaterObjects: function CheckWaterObjects(dx) {
                var this$1 = this;
                console.log("CHECK WATER");
                this.onLily = null;
                if (this.Dead) {
                    return false;
                }
                var lastLog = this.currentLog;
                this.currentLog = null;
                var rowToConsider = _Game2.
                default.rows[this.GetRowIndex(-Math.round(this.targetPosition.z))];
                if (rowToConsider.Category === "holed") {
                    console.log("ROW: " + rowToConsider.stripName);
                    for (var i = 0; i < rowToConsider.objects[0].holes.length; i++) {
                        if (this$1.targetPosition.x === rowToConsider.objects[0].holes[i]) {
                            this$1.drownTest = true;
                            return true;
                        }
                    }
                }
                if (rowToConsider.Category !== "water") {
                    this.drownTest = false;
                    return false;
                }
                for (var iwater = 0; iwater < rowToConsider.objects.length; iwater++) {
                    if (rowToConsider.objects[iwater].isLillypad == true && rowToConsider.objects[iwater].lillypadObject.position.x === this$1.targetPosition.x) {
                        this$1.onLily = rowToConsider.objects[iwater];
                        window.setTimeout(function () {
                                if (_Game2.default.currentWorld === 'space' && _Game2.default.barrierOn) {
                                    _Game2.
                                    default.barrierOn = false;
                                    _Game2.
                                    default.playSfx('Shield_button_leave');
                                }
                                rowToConsider.objects[iwater].Dip();
                                if (_Game2.default.currentWorld === 'original_cast') {
                                    _Game2.
                                    default.playSfx('lilysplash');
                                }
                            },
                            150);
                        return false;
                    }
                }
                if (!this.Dead) {
                    var raycastOriginX = this.targetPosition.x;
                    for (var ilog = 0; ilog < _Game2.default.logs.length; ilog++) {
                        var log = _Game2.
                        default.logs[ilog];
                        if (log.object.position.z === this$1.targetPosition.z) {
                            if (_Physics2.default.DoLinesIntersect(raycastOriginX, 0.05, log.object.position.x, log.HitBoxX)) {
                                this$1.currentLog = log;
                                this$1.currentLog.Dip();
                                this$1.dipPasr.Reset();
                                this$1.drownTest = false;
                                var diffx = this$1.targetPosition.x - this$1.currentLog.object.position.x + this$1.currentLog.GetSizeRoundedToInt;
                                diffx = diffx - Math.round(diffx);
                                this$1.targetPosition.x -= diffx;
                                var logPosition = Math.round(this$1.targetPosition.x - this$1.currentLog.object.position.x + this$1.currentLog.GetSizeRoundedToInt + 1);
                                if (logPosition < 0) {
                                    this$1.targetPosition.x += -logPosition;
                                } else if (logPosition >= this$1.currentLog.SizeAsInt) {
                                    this$1.targetPosition.x -= this$1.currentLog.SizeAsInt - logPosition + 1;
                                }
                                if (_Game2.default.currentWorld === 'original_cast') {
                                    _Game2.
                                    default.playRandomSfx(['logjump', 'logjump2', 'logjump3', 'logjump4']);
                                }
                                return false;
                            }
                        }
                    }
                }
                this.drownTest = true;
                if (lastLog != null) {
                    if (lastLog.GetVelocity() < 0 && dx < 0 || lastLog.GetVelocity() > 0 && dx > 0) {
                        this.targetPosition.x += lastLog.GetVelocity() * this.hopPasr.TotalTime() * 2.0;
                    }
                }
                return true;
            },
            PlayerRowIndex: function PlayerRowIndex() {
                return this.GetRowIndex(-Math.round(this.player.position.z));
            },
            CheckForCoins: function CheckForCoins(playerX, playerZ) {
                var r = this.GetRowIndex(-playerZ);
                var rowToConsider = _Game2.
                default.rows[r];
                if (rowToConsider.LogSpawner) {
                    for (var itr = 0; itr < rowToConsider.LogSpawner.logs.length; itr++) {
                        var log = rowToConsider.LogSpawner.logs[itr];
                        if (log.coin) {
                            var coinDistance = Math.abs(playerX - log.coin.position.x);
                            if (coinDistance <= .5) {
                                window.setTimeout(function () {
                                        log.poolCoin();
                                        _Game2.
                                        default.playSfx('get-coin-79', true);
                                        _GameSave2.
                                        default.ModifyCoins(name === "red-coin" + "red-coin" ? 5 : 1);
                                    },
                                    150);
                                return;
                            }
                        }
                    }
                } else {
                    for (var itr = 0; itr < rowToConsider.objects.length; itr++) {
                        var name = rowToConsider.objects[itr].name;
                        if ((name == "coin" + "coin" || name == "red-coin" + "red-coin") && rowToConsider.objects[itr].position.x === playerX) {
                            var obj = rowToConsider.objects[itr];
                            rowToConsider.objects.splice(itr, 1);
                            window.setTimeout(function () {
                                    _Game2.
                                    default.objectPooler.EnterPool(obj.name, obj);
                                    obj = null;
                                    _Game2.
                                    default.playSfx('get-coin-79', true);
                                    _GameSave2.
                                    default.ModifyCoins(name === "red-coin" + "red-coin" ? 5 : 1);
                                },
                                150);
                            return;
                        }
                    }
                }
            },
            CheckForRiverAmbience: function CheckForRiverAmbience() {
                var this$1 = this;
                if (this.Dead) {
                    return;
                }
                if (_Interface2.default.CurrentScreen !== 'main' && _Interface2.default.CurrentScreen !== 'death') {
                    return;
                }
                var playerRow = this.PlayerRowIndex();
                var minRow = playerRow - 2;
                var maxRow = playerRow + 2;
                this.riverNearby = false;
                for (var r = minRow; r <= maxRow; r++) {
                    if (_Game2.default.rows[r] != null && _Game2.default.rows[r].Category === "water") {
                        this$1.riverNearby = true;
                        break;
                    }
                }
                if (this.playingRiverAmbience != this.riverNearby) {
                    this.playingRiverAmbience = this.riverNearby;
                    if (this.riverNearby && _Game2.default.currentWorld === 'original_cast') {
                        _Game2.
                        default.playLoop('river');
                    } else {
                        _Game2.
                        default.stopSfx('river');
                    }
                }
            },
            ResetHop: function ResetHop() {
                this.movePasr.Reset();
                this.hopPasr.Reset();
                this.IsMoving = true;
                this.UpdatePlayerPosition();
            },
            UpdatePlayerPosition: function UpdatePlayerPosition(deltaTime) {
                if (this.deathType == "tooslow") {
                    this.player.position.set(this.targetPosition.x, this.heightOffset, this.targetPosition.z);
                } else if (this.deathType === "ufo") {
                    this.player.position.x = this.targetPosition.x;
                    this.player.position.z = this.targetPosition.z;
                    return;
                } else if (this.deathType === "water") {
                    this.player.position.y -= 0.2;
                    return;
                }
                if (this.hopPasr.isFinished()) {
                    if (this.currentLog != null && typeof this.currentLog !== 'undefined') {
                        var logOver = true;
                    }
                }
                if (!this.movePasr.isFinished()) {
                    this.movePasrVector.lerpVectors(this.previousPosition, this.targetPosition, 1 - _Easing2.default.easeInCubic(this.movePasr.Tick(deltaTime)));
                    this.player.position.set(this.movePasrVector.x, this.movePasrVector.y, this.movePasrVector.z);
                } else {
                    this.player.position.set(this.targetPosition.x, this.targetPosition.y, this.targetPosition.z);
                }
                if (!this.Dead && (this.player.position.x > 4.5 || this.player.position.x < -4.5)) {
                    this.kill("log");
                }
            },
            CheckTriggers: function CheckTriggers(x, row) {},
            CheckWalls: function CheckWalls(x, row) {
                x = Math.round(x);
                row = Math.round(row);
                var rowIndex = this.GetRowIndex(row);
                var block = _Game2.
                default.rows[rowIndex].cells[x + 4];
                if (block != "none") {
                    return false;
                }
                return true;
            },
            GetRowIndex: function GetRowIndex(row) {
                for (var i = 0; i < _Game2.default.rows.length; i++) {
                    if (_Game2.default.rows[i].row == row) {
                        return i;
                    }
                }
                return 0;
            },
            GetRowHeight: function GetRowHeight(row) {
                var rowindex = this.GetRowIndex(row);
                var y = _Game2.
                default.rows[rowindex].heightOffset;
                return y;
            },
            Hop: function Hop() {
                this.hopTimer = this.hopDelay;
                this.hopPasr.Reset();
                this.movePasr.Reset();
                this.IsMoving = true;
                _Game2.
                default.AddTerrain();
                _Game2.
                default.playRandomSfx(this.currentCharacter.hop);
            },
            Reset: function Reset() {
                _Game2.
                default.stopSfx('river');
                this.hasMovedThisRound = false;
                this.currentLog = null;
                this.deathType = "none";
                this.Dead = false;
                this.startGameWobble = true;
                this.nextPlayerAction = 'none';
                this.drownTest = false;
                this.cutePasr.Reset();
                this.drownPasr.Reset();
                this.splatPasr.Reset();
                this.spreadPasr.Reset();
                this.targetPosition.set(0, this.heightOffset, 2);
                this.desiredMeshScale.set(1, 1, 1);
                this.desiredDirection.set(0, 0, 0, 1);
                this.player.rotation.set(0, 0, 0);
                this.player.material.uniforms.saturation.value = 1;
                this.player.material.uniforms.GREY_COLOR.value = this.vectorOne;
                if (_Game2.default.currentWorld === 'space' && _Game2.default.space_background) {
                    _Game2.
                    default.space_background.position.set(_Game2.default.space_background.position.x, _Game2.default.space_background.position.y, 0);
                }
            }
        };
        exports.
        default = PlayerController;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _KeyboardHint = __webpack_require__(8);
        var _KeyboardHint2 = _interopRequireDefault(_KeyboardHint);
        var _ObjectPooler = __webpack_require__(5);
        var Ufo = function Ufo() {
            this.time = 0;
            this.timeOut = 5;
            this.UfoSpeed = 20;
            this.abductionSpeed = 3;
            this.swooping = false;
            this.xShift = .8;
            this.object = (0, _ObjectPooler.importMesh)('spaceexploration_ufo_frame_1_fixedmesh_optimised', AssetLoader.loadedAssets['models/space-world.json'].models.spaceexploration_ufo_frame_1_fixedmesh_optimised);
            this.ufoTimer = 0;
            this.object.position.set(60, 2, 60);
            this.abducing = false;
            this.abudcted = false;
            _Game2.
            default.scene.add(this.object);
        };
        Ufo.prototype = {
            constructor: Ufo,
            tick: function tick(deltaTime) {
                this.time += deltaTime;
                this.object.position.z = _Game2.
                default.playerController.player.position.z;
                this.object.position.y = 2;
                if (this.time > this.timeOut && !this.swooping && !_Game2.default.playerController.Dead) {
                    this.kill();
                }
                if (this.swooping) {
                    if (!this.abducing) {
                        this.object.position.x = this.object.position.x + this.UfoSpeed * deltaTime;
                    }
                    if (this.object.position.x > _Game2.default.playerController.player.position.x && this.abudcted) {
                        _Game2.
                        default.playerController.player.position.y = 60;
                        if (_Game2.default.playerController.waitingForEagle) {
                            _Game2.
                            default.playerController.deathParts();
                            if (_Game2.default.playerController.currentCharacter.death) {
                                _Game2.
                                default.playRandomSfx(_Game2.default.playerController.currentCharacter.death);
                            }
                            _Game2.
                            default.playerController.waitingForEagle = false;
                        }
                    }
                    if (this.object.position.x + this.xShift > _Game2.default.playerController.player.position.x && !this.abudcted) {
                        this.abducing = true;
                        _Game2.
                        default.playerController.player.position.y += this.abductionSpeed * deltaTime;
                        if (_Game2.default.playerController.player.position.y > this.object.position.y) {
                            this.abducing = false;
                            this.abudcted = true;
                        }
                    }
                }
            },
            kill: function kill() {
                _Game2.
                default.playerController.kill("ufo");
                this.swooping = true;
                this.object.position.x = _Game2.
                default.playerController.player.position.x - 20;
                _KeyboardHint2.
                default.clearActiveScreen();
            },
            advance: function advance() {
                this.time = Math.max(0, this.time - 1);
            },
            reset: function reset() {
                this.time = 0;
                this.swooping = false;
                this.object.position.set(60, 2, 60);
                this.abducing = false;
                this.abudcted = false;
            }
        };
        exports.
        default = Ufo;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var OriginalWorldPieces = {
            "train-middle": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_middle",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 20
            },
            "strip-train": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "strip_train",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "strip-grass-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "strip_grass_2",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "log": {
                PieceSelectionWeighting: 1,
                PieceType: "Log",
                Variations: [{
                        name: "log_1",
                        weight: 1,
                        scoreRequired: 100,
                        hitBoxScale: [1.5, 0.5, 1.0],
                        logwidth: 1,
                        animationSpeed: 0
                    },
                    {
                        name: "log_2",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [2.5, 0.5, 1.0],
                        logwidth: 2,
                        animationSpeed: 0
                    },
                    {
                        name: "log_3",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [3.5, 0.5, 1.0],
                        logwidth: 3,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "strip-road-1": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "strip_road_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "blocking-object-tall": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "tree_1",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_2",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_3",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_4",
                        weight: 25,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "stump",
                        weight: 2,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "train-light-on": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_light_on_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 5
                }],
                poolAmount: 5
            },
            "vehicle-car-special": {
                PieceSelectionWeighting: 0.003,
                PieceType: "Vehicle",
                Variations: [{
                    name: "fuzz",
                    weight: 1,
                    scoreRequired: -1,
                    hitBoxScale: [1.6, 1.0, 0.7],
                    playCarNoise: "True",
                    minCoolDown: 1,
                    maxHornCooldown: 20,
                    animationSpeed: 0
                }],
                poolAmount: 5
            },
            "eagle-fly": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "eagle_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 16
                }],
                poolAmount: 1
            },
            "vehicle-truck": {
                PieceSelectionWeighting: 0.166,
                PieceType: "Vehicle",
                Variations: [{
                        name: "truck",
                        weight: 0.799,
                        scoreRequired: -1,
                        hitBoxScale: [2.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "truck_blue",
                        weight: 0.15,
                        scoreRequired: -1,
                        hitBoxScale: [2.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "truck_green",
                        weight: 0.05,
                        scoreRequired: -1,
                        hitBoxScale: [2.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "strip-water": {
                PieceSelectionWeighting: 1,
                PieceType: "Water",
                Variations: [{
                    name: "strip_water_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "train-light-off": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_light_off",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 5
            },
            "strip-grass-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "strip_grass_1",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "strip-road-2": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "strip_road_2",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "train-front": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_front",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 7
            },
            "lillypad": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "lilypad",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 20
            },
            "train-back": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "train_back",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 7
            },
            "vehicle-car": {
                PieceSelectionWeighting: 0.831,
                PieceType: "Vehicle",
                Variations: [{
                        name: "electric",
                        weight: 0.2,
                        scoreRequired: -1,
                        hitBoxScale: [1.1, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "ganster",
                        weight: 0.2,
                        scoreRequired: -1,
                        hitBoxScale: [1.6, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "muscle",
                        weight: 0.003,
                        scoreRequired: -1,
                        hitBoxScale: [1.8, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    },
                    {
                        name: "sedan",
                        weight: 0.2,
                        scoreRequired: -1,
                        hitBoxScale: [1.6, 1.0, 0.7],
                        playCarNoise: "True",
                        minCoolDown: 1,
                        maxHornCooldown: 20,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 50
            },
            "blocking-object-short": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "tree_1",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "tree_2",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "rock",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "stump",
                        weight: 2,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 10
            },
            "forest": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "forest_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_3",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_4",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_5",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "forest_6",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            }
        };
        exports.
        default = OriginalWorldPieces;
    },
    function (module, exports) {
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ref;
        var SpaceWorldPieces = {
            "space-log": {
                PieceSelectionWeighting: 1,
                PieceType: "Log",
                Variations: [{
                        name: "moon_log_1",
                        weight: 1,
                        scoreRequired: 100,
                        hitBoxScale: [1.5, 0.5, 1.0],
                        logwidth: 1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_log_2",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [2.5, 0.5, 1.0],
                        logwidth: 2,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_log_3",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [3.5, 0.5, 1.0],
                        logwidth: 3,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "space-strip-road-1": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_strip_road_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_road_alt_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-strip-road-2": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_strip_road_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_road_alt_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-lillypad": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_lillypad_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_lillypad_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_lillypad_3",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "space-blocking-object-tall": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_geode_tall_1",
                        weight: 30,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_geode_tall_2",
                        weight: 30,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_geode_tall_3",
                        weight: 30,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "spaceexploration_lunarlander",
                        weight: 10,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 30
            },
            "robodog-pickup": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "spaceexploration_robodog_pickup",
                    weight: 0.02,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 1
            },
            "space-blocking-object-short": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                        name: "moon_rock_small_1",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_rock_small_2",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_rock_small_3",
                        weight: 33,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 10
            },
            "space-strip-grass-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_strip_ground_alt_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_ground_alt_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-strip-grass-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_strip_ground_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_strip_ground_2",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-strip-water": {
                PieceSelectionWeighting: 1,
                PieceType: "Water",
                Variations: [{
                    name: "moon_strip_emptyspace",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-forest": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_strip_emptyspace",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-vehicle-car": {
                PieceSelectionWeighting: 0.831,
                PieceType: "Vehicle",
                Variations: [{
                        name: "moon_rollingasteroid_1_fixedmesh",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [1.0, 1.0, 1.0],
                        playCarNoise: "False",
                        minCoolDown: 1,
                        maxHornCooldown: 2000,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_rollingasteroid_2_fixedmesh",
                        weight: 1,
                        scoreRequired: -1,
                        hitBoxScale: [1.0, 1.0, 1.0],
                        playCarNoise: "False",
                        minCoolDown: 1,
                        maxHornCooldown: 2000,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 50
            },
            "specimen": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "alien",
                    weight: 33,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 20
            },
            "space-special-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_1",
                    weight: 1,
                    holes: [3, 4, 5, -2, -3],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-special-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_2",
                    weight: 1,
                    holes: [3, 4, -3, -4],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-special-3": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_3",
                    weight: 1,
                    holes: [3, 4, -3, -4, -5],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-special-4": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                    name: "moon_chunk_2_strip_4",
                    weight: 1,
                    holes: [2, 3, 4, -2, -3, -4],
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 15
            },
            "space-block-1": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_chunk_1_strip_1",
                        weight: 1,
                        holes: [5, -4],
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_chunk_1_strip_2",
                        weight: 1,
                        holes: [5, -4],
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "space-block-2": {
                PieceSelectionWeighting: 1,
                PieceType: "grass",
                Variations: [{
                        name: "moon_chunk_1_strip_3",
                        weight: 1,
                        holes: [1, 0],
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    {
                        name: "moon_chunk_1_strip_4",
                        weight: 1,
                        holes: [1, 0],
                        scoreRequired: -1,
                        animationSpeed: 0
                    }
                ],
                poolAmount: 15
            },
            "barrier-spawner": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_barrierspawner",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "barrier-button": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_barrierbutton",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "barrier": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [{
                    name: "moon_blockingbarrier",
                    weight: 1,
                    scoreRequired: -1,
                    animationSpeed: 0
                }],
                poolAmount: 10
            },
            "meteor": {
                PieceSelectionWeighting: 1,
                PieceType: "Other",
                Variations: [(_ref = {
                        name: "moon_meteorshower_debris_1",
                        weight: 1,
                        scoreRequired: -1,
                        animationSpeed: 0
                    },
                    _defineProperty(_ref, "name", "moon_meteorshower_debris_2"), _defineProperty(_ref, "weight", 1), _defineProperty(_ref, "scoreRequired", -1), _defineProperty(_ref, "animationSpeed", 0), _defineProperty(_ref, "name", "moon_meteorshower_debris_3"), _defineProperty(_ref, "weight", 1), _defineProperty(_ref, "scoreRequired", -1), _defineProperty(_ref, "animationSpeed", 0), _ref)],
                poolAmount: 50
            },
            "hipster-whale-log": {
                PieceSelectionWeighting: 1,
                PieceType: "Log",
                Variations: [{
                    name: "hipster_whale",
                    weight: 1,
                    scoreRequired: 100,
                    hitBoxScale: [1.5, 0.5, 1.0],
                    logwidth: 1,
                    animationSpeed: 0
                }],
                poolAmount: 1
            }
        };
        exports.
        default = SpaceWorldPieces;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var spaceBackgroundShader = void 0;
        var getSpaceBackgroundShader = function getSpaceBackgroundShader() {
            if (!spaceBackgroundShader) {
                spaceBackgroundShader = {
                    uniforms: {
                        "cloudText": {
                            type: "t",
                            value: new THREE.TextureLoader().load("sprites/SpaceStarfieldGasClouds.png")
                        },
                        "starText": {
                            type: "t",
                            value: new THREE.TextureLoader().load("sprites/SpaceStarfieldRGB.png")
                        },
                        "time": {
                            type: "f",
                            value: 1.0
                        }
                    },
                    vertexShader: ["varying vec4 vColor;", "varying vec4 vWorldPosition;", "varying vec3 vWorldNormal;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "gl_Position = vec4(position, 1.0);", "}"].join("\n"),
                    fragmentShader: ["varying vec4 vColor;", "varying vec4 vWorldPosition;", "varying vec3 vWorldNormal;", "varying vec2 vUV;", "uniform sampler2D cloudText;", "uniform sampler2D starText;", "uniform float time;", "float lerp(float from, float to, float k)", "{", "return from + (to - from) * k;", "}", "float powerLerp(float value, float modifier)", "{", "value = lerp(0.0, 1.0, pow(abs(value), sin(time / 400.0) * modifier + 2.0));", "return value;", "}", "float twinkleStars(float starMap, float twinkle)", "{", "twinkle *= starMap;", "twinkle = powerLerp(twinkle, 0.85);", "return twinkle;", "}", "void main() {", "vec4 starColor = vec4(0.91, 0.98, 1.0, 1.0);", "vec4 backgroundColor1 = vec4(0.0, 0.00, 0.0, 0.8);", "vec4 backgroundColor2 = vec4(0.0, 0.0, 0.0, 0.8);", "vec4 cloudColor1 = vec4(0.16, 0.08, 0.27, 0.8);", "vec4 cloudColor2 = vec4(1.0, 1.0, 1.0, 0.8);", "vec4 cloudT = texture2D(cloudText, vUV);", "vec4 t = texture2D(starText, vUV);", "float twinkle1 = lerp(0.0, t.b, 1.0 - pow(pow(abs(cos(time + 0.0)) / 800.0, 2.0), 2.0));", "float twinkle2 = lerp(0.0, t.g, 1.0 - pow(pow(abs(cos(time + 1.0)) / 900.0, 2.0), 2.0));", "float twinkle3 = lerp(0.0, t.a, 1.0 - pow(pow(abs(cos(time + 2.0)) / 1000.0, 2.0), 2.0));", "float stars = t.r;", "stars = powerLerp(stars, 0.35) * 0.2;", "stars += twinkleStars(t.r, twinkle1);", "stars += twinkleStars(t.r, twinkle2);", "stars += twinkleStars(t.r, twinkle3);", "vec3 starCol = vec3(stars * starColor.x, stars * starColor.y, stars * starColor.z);", "vec3 bgCol;", "bgCol.r = lerp(backgroundColor1.r, backgroundColor2.r, clamp((vUV.y - 1.4) * 3.5, 0.0, 1.0));", "bgCol.g = lerp(backgroundColor1.g, backgroundColor2.g, clamp((vUV.y - 1.4) * 3.5, 0.0, 1.0));", "bgCol.b = lerp(backgroundColor1.b, backgroundColor2.b, clamp((vUV.y - 1.4) * 3.5, 0.0, 1.0));", "vec3 cloudCol;", "cloudCol.r = lerp(cloudColor1.r, cloudColor2.r, cloudT.r) * pow(abs(cloudT.a), 0.75);", "cloudCol.g = lerp(cloudColor1.g, cloudColor2.g, cloudT.r) * pow(abs(cloudT.a), 0.75);", "cloudCol.b = lerp(cloudColor1.b, cloudColor2.b, cloudT.r) * pow(abs(cloudT.a), 0.75);", "vec3 finalCol = (bgCol + starCol) + cloudCol;", "gl_FragColor = vec4(finalCol, 1.0);", "}"].join("\n")
                };
            }
            return spaceBackgroundShader;
        };
        exports.
        default = getSpaceBackgroundShader;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var dimensions = {
            lowest_average_fps: 'dimension1',
            lowest_percentage_below_half_of_average_of_fps: 'dimension2'
        };
        var dataPoints = 250;
        var samples = 10;
        var fpsTracker = {
            fps: [],
            tracked: 0,
            highestPercBelowHalfOfAverage: -1,
            lowestAverage: Infinity,
            update: function update(deltaTime) {
                var this$1 = this;
                if (this.tracked >= samples) {
                    return;
                }
                var currentRate = 1000 / deltaTime / 1000;
                this.fps.push(currentRate);
                this.lowPoint = Math.min(this.lowPoint, currentRate);
                this.highPoint = Math.max(this.highPoint, currentRate);
                if (this.fps.length === dataPoints) {
                    var rates = [];
                    var total = 0;
                    while (this.fps.length > 0) {
                        var rate = this$1.fps.pop();
                        total += rate;
                        rates.push(rate);
                    }
                    var avgFps = Math.round(total / dataPoints);
                    var amountBelowHalfOfAverage = 0;
                    for (var idx = 0; idx < rates.length; idx++) {
                        var rate = rates[idx];
                        if (rate <= avgFps / 2) {
                            amountBelowHalfOfAverage++;
                        }
                    }
                    var percBelowHalfOfAverage = Math.max(amountBelowHalfOfAverage / dataPoints, 0);
                    analytics.track('technical_performance', 'fps', 'perc_below_half_of_average', percBelowHalfOfAverage, true);
                    analytics.track('technical_performance', 'fps', 'avg', avgFps, true);
                    if (avgFps < this.lowestAverage) {
                        analytics.setDimension(dimensions.lowest_average_fps, avgFps);
                        this.lowestAverage = avgFps;
                    }
                    if (percBelowHalfOfAverage > this.highestPercBelowHalfOfAverage) {
                        analytics.setDimension(dimensions.lowest_percentage_below_half_of_average_of_fps, percBelowHalfOfAverage);
                        this.highestPercBelowHalfOfAverage = percBelowHalfOfAverage;
                    }
                    this.tracked++;
                }
            }
        };
        exports.
        default = fpsTracker;
    },
    function (module, exports, __webpack_require__) {
        (function (module) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
                function (obj) {
                    return typeof obj;
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
            var Stats = function Stats() {
                function k(a) {
                    for (var d = 0; d < c.children.length; d++) {
                        c.children[d].style.display = d === a ? "block" : "none";
                    }
                    l = a;
                }

                function h(a) {
                    c.appendChild(a.dom);
                    return a;
                }
                var l = 0,
                    c = document.createElement("div");
                c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
                c.addEventListener("click",
                    function (a) {
                        a.preventDefault();
                        k(++l % c.children.length);
                    },
                    !1);
                var g = (performance || Date).now(),
                    e = g,
                    a = 0,
                    r = h(new Stats.Panel("FPS", "#0ff", "#002")),
                    f = h(new Stats.Panel("MS", "#0f0", "#020"));
                if (self.performance && self.performance.memory) {
                    var t = h(new Stats.Panel("MB", "#f08", "#201"));
                }
                k(0);
                return {
                    REVISION: 16,
                    dom: c,
                    addPanel: h,
                    showPanel: k,
                    begin: function begin() {
                        g = (performance || Date).now();
                    },
                    end: function end() {
                        a++;
                        var c = (performance || Date).now();
                        f.update(c - g, 200);
                        if (c > e + 1E3 && (r.update(1E3 * a / (c - e), 100), e = c, a = 0, t)) {
                            var d = performance.memory;
                            t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
                        }
                        return c;
                    },
                    update: function update() {
                        g = this.end();
                    },
                    domElement: c,
                    setMode: k
                };
            };
            Stats.Panel = function (h, k, l) {
                var c = Infinity,
                    g = 0,
                    e = Math.round,
                    a = e(window.devicePixelRatio || 1),
                    r = 80 * a,
                    f = 48 * a,
                    t = 3 * a,
                    u = 2 * a,
                    d = 3 * a,
                    m = 15 * a,
                    n = 74 * a,
                    p = 30 * a,
                    q = document.createElement("canvas");
                q.width = r;
                q.height = f;
                q.style.cssText = "width:80px;height:48px";
                var b = q.getContext("2d");
                b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
                b.textBaseline = "top";
                b.fillStyle = l;
                b.fillRect(0, 0, r, f);
                b.fillStyle = k;
                b.fillText(h, t, u);
                b.fillRect(d, m, n, p);
                b.fillStyle = l;
                b.globalAlpha = .9;
                b.fillRect(d, m, n, p);
                return {
                    dom: q,
                    update: function update(f, v) {
                        c = Math.min(c, f);
                        g = Math.max(g, f);
                        b.fillStyle = l;
                        b.globalAlpha = 1;
                        b.fillRect(0, 0, r, m);
                        b.fillStyle = k;
                        b.fillText(e(f) + " " + h + " (" + e(c) + "-" + e(g) + ")", t, u);
                        b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
                        b.fillRect(d + n - a, m, a, p);
                        b.fillStyle = l;
                        b.globalAlpha = .9;
                        b.fillRect(d + n - a, m, a, e((1 - f / v) * p));
                    }
                };
            };
            "object" === (false ? "undefined" : _typeof(module)) && (module.exports = Stats);
            exports.
            default = Stats;
        }.call(exports, __webpack_require__(27)(module)));
    }, , , , , , ,
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _PasrTimer = __webpack_require__(13);
        var _PasrTimer2 = _interopRequireDefault(_PasrTimer);
        var BarrierButton = function BarrierButton() {
            this.dipPasr = new _PasrTimer2.
            default(0, 0.1, 0.1, 0.1);
        };
        BarrierButton.prototype = {
            constructor: BarrierButton,
            tick: function tick(deltaTime) {
                this.lillypadObject.position.y = this.restingHeight - this.dipPasr.Tick(deltaTime) * 0.18;
                if (!_Game2.default.barrierOn) {
                    if (this.barrier) {
                        _Game2.
                        default.objectPooler.EnterPool("barrier", this.barrier);
                    }
                }
            },
            shiftY: function shiftY() {
                return this.lillypadObject.position.y;
            },
            pool: function pool() {
                this.lillypadObject.position.set(-60, -60, -60);
                _Game2.
                default.removefromPhysics(this);
                _Game2.
                default.objectPooler.EnterPool("barrier-button", this.lillypadObject);
                barrierButtonPool.push(this);
            },
            Dip: function Dip() {
                this.dipPasr.Reset();
                this.barrier = _Game2.
                default.objectPooler.GetItemOfType("barrier");
                _Game2.
                default.playSfx('Shield_button_press');
                this.barrier.position.set(0, this.lillypadObject.position.y, this.lillypadObject.position.z);
                this.lillypadObject.strip.objects.push(this.barrier);
                _Game2.
                default.barrierOn = true;
            }
        };
        var barrierButtonPool = [];
        BarrierButton.prototype.setup = function (x, y, z, strip) {
            this.lillypadObject = _Game2.
            default.objectPooler.GetItemOfType("barrier-button");
            this.lillypadObject.position.set(x, y, z);
            this.lillypadObject.strip = strip;
            this.restingHeight = y;
            this.isLillypad = true;
            this.sineTicker = Math.random() * Math.PI;
            this.sineAngle = 0;
            this.maxSpin = (Math.random() * 2 + 3) * 360 / Math.PI;
            _Game2.
            default.physicsObjects.push(this);
        };
        BarrierButton.PopulatePool = function (amount) {
            while (barrierButtonPool.length < amount) {
                barrierButtonPool.push(new BarrierButton());
            }
        };
        BarrierButton.Get = function (buttonPosition, y, z, strip) {
            var barrierButton = new BarrierButton();
            if (buttonPosition === "left") {
                barrierButton.setup(-1, y, z, strip);
            } else {
                barrierButton.setup(1, y, z, strip);
            }
            return barrierButton;
        };
        exports.
        default = BarrierButton;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Carousel = __webpack_require__(6);
        var _Carousel2 = _interopRequireDefault(_Carousel);
        var _FreeGift = __webpack_require__(21);
        var _FreeGift2 = _interopRequireDefault(_FreeGift);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _RewardedHelper = __webpack_require__(14);
        var _RewardedHelper2 = _interopRequireDefault(_RewardedHelper);
        var _GumballMachineScreen = __webpack_require__(7);
        var _GumballMachineScreen2 = _interopRequireDefault(_GumballMachineScreen);
        MetaHelper = {};
        MetaHelper.features = [{
                key: 'rewarded',
                check: function check(round) {
                    _RewardedHelper2.
                    default.shakeNextBar = false;
                    if (window.adBlocked) {
                        return false;
                    }
                    if (_Carousel2.default.HowManyUnlocked().number <= 1) {
                        return false;
                    }
                    if (round < 2) {
                        return false;
                    }
                    if (!this.gotThroughChecksFirstAtRound) {
                        this.gotThroughChecksFirstAtRound = round;
                    }
                    if (_RewardedHelper2.default.opportunitiesShowedSinceLastWatched >= 3) {
                        if (!this.stickyTimes || this.stickyTimes < 2) {
                            this.stickyTimes = (this.stickyTimes || 0) + 1;
                            _RewardedHelper2.
                            default.shakeNextBar = true;
                            return true;
                        } else {
                            this.stickyTimes = 0;
                            _RewardedHelper2.
                            default.opportunitiesShowedSinceLastWatched = 0;
                        }
                    }
                    var roundDelta = 3;
                    if ((round - this.gotThroughChecksFirstAtRound) % roundDelta !== 0) {
                        return false;
                    }
                    this.overridesAllOtherFeatures = false;
                    return true;
                }
            },
            {
                key: 'free-gift',
                check: function check(round) {
                    _FreeGift2.
                    default.shakeNextBar = false;
                    if (!_FreeGift2.default.areThereAnyGiftsLeft()) {
                        return false;
                    }
                    if (_FreeGift2.default.opportunitiesShowedSinceLastWatched >= 3) {
                        if (!this.stickyTimes || this.stickyTimes < 2) {
                            this.stickyTimes = (this.stickyTimes || 0) + 1;
                            _FreeGift2.
                            default.shakeNextBar = true;
                            return true;
                        } else {
                            this.stickyTimes = 0;
                            _FreeGift2.
                            default.opportunitiesShowedSinceLastWatched = 0;
                        }
                    }
                    if (_FreeGift2.default.getGiftsGiven() === 0) {
                        _Interface2.
                        default.lockForTutorial();
                        return true;
                    }
                    if (_Carousel2.default.HowManyUnlocked().number === 1 || _FreeGift2.default.getGiftsGiven() < 2) {
                        if (round % 2 === 0) {
                            return true;
                        }
                        return false;
                    }
                    if (round < 3) {
                        return false;
                    }
                    if (!this.gotThroughChecksFirstAtRound) {
                        this.gotThroughChecksFirstAtRound = round;
                    }
                    var roundDelta;
                    if (_Carousel2.default.hasEnoughCoinsForCharacter()) {
                        roundDelta = 2;
                    } else {
                        roundDelta = 5;
                    }
                    if ((round - this.gotThroughChecksFirstAtRound) % roundDelta !== 0) {
                        return false;
                    }
                    return true;
                }
            },
            {
                key: 'unlock-new',
                check: function check(round) {
                    _GumballMachineScreen2.
                    default.shakeNextBar = false;
                    if (!_Carousel2.default.hasEnoughCoinsForCharacter()) {
                        return false;
                    }
                    if (_Carousel2.default.HowManyUnlocked().all) {
                        return false;
                    }
                    if (_GumballMachineScreen2.default.opportunitiesShowedSinceLastWatched >= 3) {
                        if (!this.stickyTimes || this.stickyTimes < 2) {
                            this.stickyTimes = (this.stickyTimes || 0) + 1;
                            _GumballMachineScreen2.
                            default.shakeNextBar = true;
                            return true;
                        } else {
                            this.stickyTimes = 0;
                            _GumballMachineScreen2.
                            default.opportunitiesShowedSinceLastWatched = 0;
                        }
                    }
                    if (_FreeGift2.default.getGiftsGiven() === 0) {
                        return false;
                    }
                    if (_Carousel2.default.HowManyUnlocked().number === 1 || _FreeGift2.default.getGiftsGiven() < 2) {
                        if (_Carousel2.default.HowManyUnlocked().number === 1) {
                            _Interface2.
                            default.lockForTutorial();
                        }
                        return true;
                    }
                    if (round < 3) {
                        return false;
                    }
                    if (!this.gotThroughChecksFirstAtRound) {
                        this.gotThroughChecksFirstAtRound = round;
                    }
                    var roundDelta = 2;
                    if ((round - this.gotThroughChecksFirstAtRound) % roundDelta !== 0) {
                        return false;
                    }
                    return true;
                }
            },
            {
                key: 'coins-to-go',
                check: function check(round) {
                    if (_Carousel2.default.HowManyUnlocked().number === 1) {
                        return false;
                    }
                    if (!this.gotThroughChecksFirstAtRound) {
                        this.gotThroughChecksFirstAtRound = round;
                    }
                    if (round < 3) {
                        return false;
                    }
                    var coins = _GameSave2.
                    default.GetCoins();
                    if (_Carousel2.default.hasEnoughCoinsForCharacter()) {
                        return false;
                    }
                    if (coins < 10) {
                        return false;
                    }
                    var roundDelta = 5;
                    if ((round - this.gotThroughChecksFirstAtRound) % roundDelta !== 0) {
                        return false;
                    }
                    return true;
                }
            },
            {
                key: 'upsell-notification',
                overridesAllOtherFeatures: true,
                check: function check() {
                    var amountUnlocked = _Carousel2.
                    default.HowManyUnlocked().number;
                    if (amountUnlocked === 3 && _Game2.default.deathsSinceLastCharacterUnlock === 3) {
                        return true;
                    }
                    if (amountUnlocked === 4 && _Game2.default.deathsSinceLastCharacterUnlock === 3) {
                        return true;
                    }
                    if (amountUnlocked === 4 && _Game2.default.deathsSinceLastCharacterUnlock === 5 && !_Interface2.default.upsellWasClicked) {
                        return true;
                    }
                    if (amountUnlocked === 5 && _Game2.default.deathsSinceLastCharacterUnlock === 2) {
                        return true;
                    }
                    return false;
                }
            }
        ];
        MetaHelper.getFeaturesByRound = function (round) {
            var features = [];
            var noMoreFeatures = false;
            MetaHelper.features.forEach(function (feature) {
                if (noMoreFeatures) {
                    return;
                }
                if (feature.check(round)) {
                    var result = {
                        key: feature.key
                    };
                    if (feature.overridesAllOtherFeatures) {
                        noMoreFeatures = true;
                        features = [result];
                    } else {
                        features.push(result);
                    }
                }
            });
            if (_Interface2.default.tutorialWasLockedLastRound && features.length === 0) {
                features.push({
                    key: 'free-gift'
                });
            }
            return features;
        };
        exports.
        default = MetaHelper;
    },
    function (module, exports, __webpack_require__) {
        function ScreenFlash() {
            var flashPlane = new THREE.PlaneGeometry(20, 20, 1, 1);
            var flashMat = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF,
                transparent: true,
                side: THREE.DoubleSide,
                opacity: 0
            });
            var flash = new THREE.Mesh(flashPlane, flashMat);
            _Game2.
            default.scene.add(flash);
            this.flash = flash;
            this.name = 'screenflash';
            this.flash.rotation.set(_Game2.default.camera.rotation.x, _Game2.default.camera.rotation.y, _Game2.default.camera.rotation.z);
            this.length = 1;
            this.RedFlash = new THREE.Color(0xff0000);
            this.time = 0;
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);;
        ScreenFlash.prototype = {
            constructor: ScreenFlash,
            pool: function pool() {
                this.flash.material.opacity = 0;
                _Game2.
                default.removefromPhysics(this);
            },
            tick: function tick(deltaTime) {
                this.time += deltaTime;
                var timeCount = this.time / this.length;
                this.flash.material.opacity = 1.0 - timeCount;
                if (timeCount > 0.2) {
                    this.flash.material.color.lerp(this.RedFlash, timeCount - 0.2);
                }
                if (timeCount > 0.999) {
                    this.flash.material.opacity = 0;
                }
                if (this.flash.material.opacity < 0.1) {
                    this.pool;
                }
            },
            play: function play() {
                this.flash.position.set(_Game2.default.camera.position.x, _Game2.default.camera.position.y, _Game2.default.camera.position.z - 1);
                this.flash.material.opacity = 1;
                this.flash.material.color.set(0xFFFFFF);
                _Game2.
                default.physicsObjects.push(this);
                this.time = 0;
            }
        };
        exports.
        default = ScreenFlash;
    },
    function (module, exports, __webpack_require__) {
        function WaterParticleSystem(count, color, position, acceleration, gravity, size, direction, particleGeo, texture, stopAtGround) {
            var this$1 = this;
            this.acceleration = acceleration;
            this.gravity = gravity;
            this.position = position;
            this.particles = [];
            this.size = size;
            this.Timer = 0;
            this.direction = direction;
            if (this.direction == null) {
                this.direction = new THREE.Vector3(0, 0, 0);
            }
            this.stopAtGroundLevel = false || stopAtGround;
            this.rotationSpeed = 0;
            this.LastFrameTicked = _Game2.
            default.frameCount;
            this.colourA = color;
            this.colourB = color;
            if (particleGeo == null) {
                var particleGeo = new THREE.BoxBufferGeometry(0.15, 0.15, 0.15);
            }
            if (texture != null) {}
            var shader = (0, _shader2.default)();
            var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
            uniforms.dirLightColor.value = new THREE.Color(color);
            var pMaterial = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexColors: THREE.VertexColors,
                vertexShader: shader.vertexShader,
                fragmentShader: shader.fragmentShader,
                flatShading: true
            });
            for (var p = 0; p < count; p++) {
                var pX = (Math.random() - 0.5) * size,
                    pY = (Math.random() - 0.5) * size,
                    pZ = (Math.random() - 0.5) * size,
                    particle = new THREE.Mesh(particleGeo.clone(), pMaterial);
                var scale = Math.random() + 0.5;
                particle.position.set(pX + position.x, pY + 0.5 + position.y, pZ + position.z);
                particle.momentum = new THREE.Vector3((pX + direction.x) * acceleration / scale, (pY + 0.5 + direction.y) * acceleration / scale, (pZ + direction.z) * acceleration / scale);
                _Game2.
                default.scene.add(particle);
                particle.scale.multiplyScalar(scale);
                this$1.particles.push(particle);
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _shader = __webpack_require__(29);
        var _shader2 = _interopRequireDefault(_shader);
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        WaterParticleSystem.prototype = {
            constructor: WaterParticleSystem,
            tick: function tick(deltaTime) {
                var this$1 = this;
                if (this.Timer > 5) {
                    this.pool();
                }
                if (_Game2.default.frameCount == this.LastFrameTicked) {
                    return;
                }
                this.LastFrameTicked = _Game2.
                default.frameCount;
                for (var i = 0; i < this.particles.length; i++) {
                    var dx = Math.abs(this$1.particles[i].position.x - this$1.position.x);
                    var dz = Math.abs(this$1.particles[i].position.z - this$1.position.z);
                    this$1.particles[i].momentum.y -= this$1.gravity;
                    if (this$1.particles[i].position.y < 0.3 && this$1.stopAtGroundLevel) {
                        this$1.particles[i].momentum.y = 0;
                        this$1.particles[i].momentum.x = 0;
                        this$1.particles[i].momentum.z = 0;
                    }
                    this$1.particles[i].position.set(this$1.acceleration * (this$1.particles[i].momentum.x / dx) * deltaTime + this$1.particles[i].position.x, this$1.acceleration * this$1.particles[i].momentum.y * deltaTime + this$1.particles[i].position.y, this$1.acceleration * (this$1.particles[i].momentum.z / dz) * deltaTime + this$1.particles[i].position.z);
                    if (this$1.rotationSpeed > 0) {
                        this$1.particles[i].rotateY(this$1.rotationSpeed * deltaTime * Math.random());
                        this$1.particles[i].rotateX(this$1.rotationSpeed * 0.1 * deltaTime * Math.random());
                    }
                }
                this.Timer += deltaTime;
            },
            pool: function pool() {
                var this$1 = this;
                for (var i = 0; i < this.particles.length; i++) {
                    this$1.particles[i].position.set(60, 60, 60);
                }
                _Game2.
                default.removefromPhysics(this);
            },
            reset: function reset(x, y, z) {
                var this$1 = this;
                this.position.set(x, y, z);
                this.Timer = 0;
                for (var p = 0; p < this.particles.length; p++) {
                    var scale = Math.random() + 0.5;
                    var pX = (Math.random() - 0.5) * this$1.size,
                        pY = (Math.random() - 0.5) * this$1.size,
                        pZ = (Math.random() - 0.5) * this$1.size;
                    this$1.particles[p].position.set(pX + this$1.position.x, pY + this$1.position.y, pZ + this$1.position.z);
                    this$1.particles[p].momentum.set((pX + this$1.direction.x) * this$1.acceleration / scale, (pY + this$1.direction.y) * this$1.acceleration / scale, (pZ + this$1.direction.z) * this$1.acceleration / scale);
                    if (this$1.colourA !== this$1.colourB && this$1.particles[p].geometry.faces[0].color !== this$1.colourA) {
                        var color = this$1.getColourInCurrentRange();
                        for (var j = 0; j < this.particles[p].geometry.faces.length; j++) {
                            this$1.particles[p].geometry.faces[j].color.set(color);
                        }
                        this$1.particles[p].geometry.colorsNeedUpdate = true;
                    }
                }
            },
            play: function play() {
                _Game2.
                default.physicsObjects.push(this);
            },
            setRotationSpeed: function setRotationSpeed(speed) {
                this.rotationSpeed = speed;
            },
            setColourRange: function setColourRange(colourA, colourB) {
                this.colourA = new THREE.Color(colourA);
                this.colourB = new THREE.Color(colourB);
            },
            getColourInCurrentRange: function getColourInCurrentRange() {
                var Colour = new THREE.Color(this.colourA);
                Colour.lerp(this.colourB, Math.random());
                return Colour;
            }
        };
        exports.
        default = WaterParticleSystem;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var ChunksOriginal = [{
                name: "field",
                lanes: ["grass-hole", "grass", "grass-empty", "grass-empty", "grass-empty", "grass-empty", "field-mid", "grass-empty", "grass-empty", "grass-empty", "grass-empty", "grass-empty", "grass", "grass-hole"],
                rarity: "Never",
                Events: [{
                    rarity: "Epic",
                    scoreThreshold: 30
                }]
            },
            {
                name: "grassy-nothing",
                lanes: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                rarity: "MostEpic",
                Events: []
            },
            {
                name: "grass-hole-single",
                lanes: ["grass-hole"],
                rarity: "Never",
                Events: [{
                    rarity: "Uncommon",
                    scoreThreshold: 300
                }]
            },
            {
                name: "hard-water",
                lanes: ["log-right-poop", "log-left-poop", "log-right-poop", "log-left-poop", "log-right-poop", "log-left-poop", "log-right-poop", "water-lilypad-rand", "log-left-poop", "log-right-poop", "log-left-poop", "log-right-poop", "water-lilypad-rand", "log-left-poop", "log-right-poop"],
                rarity: "Never",
                Events: [{
                        rarity: "MostEpic",
                        scoreThreshold: 60
                    },
                    {
                        rarity: "Epic",
                        scoreThreshold: 100
                    }
                ]
            },
            {
                name: "hard-traffic",
                lanes: ["train", "train", "road", "train", "road", "train", "road", "road", "train", "road", "road", "road", "train", "train", "train"],
                rarity: "Never",
                Events: [{
                        rarity: "MostEpic",
                        scoreThreshold: 40
                    },
                    {
                        rarity: "Epic",
                        scoreThreshold: 100
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 360
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 500
                    }
                ]
            },
            {
                name: "grass-single",
                lanes: ["grass"],
                rarity: "Common",
                Events: []
            },
            {
                name: "train-hole",
                lanes: ["train", "train", "train", "grass-hole"],
                rarity: "Never",
                Events: [{
                        rarity: "Epic",
                        scoreThreshold: 90
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 350
                    }
                ]
            },
            {
                name: "water-lily-a",
                lanes: ["log-left-poop", "water-lilypad-rand", "log-left-poop", "log-right-poop", "log-left-poop", "water-lilypad-rand"],
                rarity: "Epic",
                Events: [{
                    rarity: "Rarer",
                    scoreThreshold: 50
                }]
            },
            {
                name: "water-left-3",
                lanes: ["water-lilypad-rand", "log-left-poop-slow", "log-left-poop-fast", "log-right-poop"],
                rarity: "Rarer",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 25
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 350
                    }
                ]
            },
            {
                name: "train-1",
                lanes: ["train"],
                rarity: "Rare",
                Events: [{
                        rarity: "Rare",
                        scoreThreshold: 2
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 110
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 180
                    }
                ]
            },
            {
                name: "water-lily-rand",
                lanes: ["water-lilypad-rand"],
                rarity: "Rarer",
                Events: [{
                    rarity: "Uncommon",
                    scoreThreshold: 50
                }]
            },
            {
                name: "train-2",
                lanes: ["train", "train"],
                rarity: "Epic",
                Events: [{
                        rarity: "Rare",
                        scoreThreshold: 30
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 50
                    }
                ]
            },
            {
                name: "train-1b",
                lanes: ["train"],
                rarity: "Rare",
                Events: []
            },
            {
                name: "train-3",
                lanes: ["train", "train"],
                rarity: "Epic",
                Events: [{
                        rarity: "Rare",
                        scoreThreshold: 70
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 100
                    }
                ]
            },
            {
                name: "train-road-alternate",
                lanes: ["road", "train", "road", "train", "road", "train"],
                rarity: "MostEpic",
                Events: [{
                        rarity: "Rarer",
                        scoreThreshold: 80
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 150
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 320
                    }
                ]
            },
            {
                name: "trainfield",
                lanes: ["grass-hole", "grass", "grass", "grass", "train", "grass", "train", "train", "grass", "grass", "train", "train", "train", "grass", "grass", "grass", "grass", "grass", "grass", "grass-hole"],
                rarity: "MostEpic",
                Events: [{
                    rarity: "Epic",
                    scoreThreshold: 200
                }]
            },
            {
                name: "water-easy",
                lanes: ["log-right-poop", "log-left-poop"],
                rarity: "Rarer",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 15
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 320
                    }
                ]
            },
            {
                name: "road-harder",
                lanes: ["grass", "road", "road", "road"],
                rarity: "Rarer",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 10
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 20
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "log-poop-4-alt-b",
                lanes: ["log-right-poop", "log-left-poop", "log-right-poop"],
                rarity: "Rarer",
                Events: [{
                    rarity: "Uncommon",
                    scoreThreshold: 70
                }]
            },
            {
                name: "train-road",
                lanes: ["road", "road", "train", "road", "train", "grass-hole"],
                rarity: "MostEpic",
                Events: [{
                        rarity: "Epic",
                        scoreThreshold: 100
                    },
                    {
                        rarity: "Rarer",
                        scoreThreshold: 200
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "road-single",
                lanes: ["road"],
                rarity: "Common",
                Events: []
            },
            {
                name: "log-poop-4-alt",
                lanes: ["log-left-poop", "log-right-poop", "log-left-poop", "log-right-poop"],
                rarity: "Epic",
                Events: [{
                        rarity: "Rare",
                        scoreThreshold: 60
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 400
                    }
                ]
            },
            {
                name: "road-highway",
                lanes: ["road", "road", "road", "road", "road", "road", "road", "road", "road", "road"],
                rarity: "MostEpic",
                Events: [{
                        rarity: "Rarer",
                        scoreThreshold: 100
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 150
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "road-easy",
                lanes: ["grass", "road", "road"],
                rarity: "Common",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 10
                    },
                    {
                        rarity: "Rarer",
                        scoreThreshold: 20
                    },
                    {
                        rarity: "MostEpic",
                        scoreThreshold: 100
                    }
                ]
            },
            {
                name: "road-5",
                lanes: ["road", "road", "road", "road", "road"],
                rarity: "Epic",
                Events: [{
                        rarity: "Rarer",
                        scoreThreshold: 30
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 70
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 150
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "train-hard",
                lanes: ["train", "train", "road", "train", "train", "train"],
                rarity: "Never",
                Events: [{
                        rarity: "MostEpic",
                        scoreThreshold: 20
                    },
                    {
                        rarity: "Epic",
                        scoreThreshold: 100
                    },
                    {
                        rarity: "Rarer",
                        scoreThreshold: 150
                    }
                ]
            },
            {
                name: "tutorial",
                lanes: ["tutorial-grass-neat", "tutorial-hole-center", "tutorial-hole-center", "tutorial-hole-center", "tutorial-grass-empty", "tutorial-grass-empty", "tutorial-hole-left", "tutorial-grass-empty", "tutorial-grass-empty", "tutorial-hole-center", "tutorial-grass", "tutorial-grass", "tutorial-grass", "road", "grass", "grass", "road", "road", "grass", "grass", "road", "grass", "road", "grass", "road", "road", "grass", "grass", "grass"],
                rarity: "Never",
                Events: []
            }
        ];
        exports.
        default = ChunksOriginal;
    },
    function (module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var ChunksSpace = [{
                name: "space-grassy-nothing",
                lanes: ["space-grass", "space-grass", "space-grass", "space-grass", "space-grass", "space-grass", "space-grass", "space-grass"],
                rarity: "MostEpic",
                Events: []
            },
            {
                name: "space-grass-single",
                lanes: ["space-grass"],
                rarity: "Common",
                Events: []
            },
            {
                name: "space-water-lily-a",
                lanes: ["space-log-left-poop", "space-water-lilypad-rand", "space-log-left-poop", "space-log-right-poop", "space-log-left-poop", "space-water-lilypad-rand"],
                rarity: "Epic",
                Events: [{
                    rarity: "Rarer",
                    scoreThreshold: 50
                }]
            },
            {
                name: "space-water-left-3",
                lanes: ["space-water-lilypad-rand", "space-log-left-poop-slow", "space-log-left-poop-fast", "space-log-right-poop"],
                rarity: "Rarer",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 25
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 350
                    }
                ]
            },
            {
                name: "space-water-lily-rand",
                lanes: ["space-water-lilypad-rand"],
                rarity: "Rarer",
                Events: [{
                    rarity: "Uncommon",
                    scoreThreshold: 50
                }]
            },
            {
                name: "space-water-easy",
                lanes: ["space-log-right-poop", "space-log-left-poop"],
                rarity: "Rarer",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 15
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 320
                    }
                ]
            },
            {
                name: "space-road-harder",
                lanes: ["space-grass", "space-road", "space-road", "space-road"],
                rarity: "Rarer",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 10
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 20
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "space-log-poop-4-alt-b",
                lanes: ["space-log-right-poop", "space-log-left-poop", "space-log-right-poop"],
                rarity: "Rarer",
                Events: [{
                    rarity: "Uncommon",
                    scoreThreshold: 70
                }]
            },
            {
                name: "space-road-single",
                lanes: ["space-road"],
                rarity: "Common",
                Events: []
            },
            {
                name: "space-log-poop-4-alt",
                lanes: ["space-log-left-poop", "space-log-right-poop", "space-log-left-poop", "space-log-right-poop"],
                rarity: "Epic",
                Events: [{
                        rarity: "Rare",
                        scoreThreshold: 60
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 400
                    }
                ]
            },
            {
                name: "space-road-highway",
                lanes: ["space-road", "space-road", "space-road", "space-road", "space-road", "space-road", "space-road", "space-road", "space-road", "space-road"],
                rarity: "MostEpic",
                Events: [{
                        rarity: "Rarer",
                        scoreThreshold: 100
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 150
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "space-road-easy",
                lanes: ["space-grass", "space-road", "space-road"],
                rarity: "Common",
                Events: [{
                        rarity: "Uncommon",
                        scoreThreshold: 10
                    },
                    {
                        rarity: "Rarer",
                        scoreThreshold: 20
                    },
                    {
                        rarity: "MostEpic",
                        scoreThreshold: 100
                    }
                ]
            },
            {
                name: "space-road-5",
                lanes: ["space-road", "space-road", "space-road", "space-road", "space-road"],
                rarity: "Epic",
                Events: [{
                        rarity: "Rarer",
                        scoreThreshold: 30
                    },
                    {
                        rarity: "Rare",
                        scoreThreshold: 70
                    },
                    {
                        rarity: "Uncommon",
                        scoreThreshold: 150
                    },
                    {
                        rarity: "Common",
                        scoreThreshold: 300
                    }
                ]
            },
            {
                name: "space-field",
                lanes: ["space-grass-hole", "space-grass", "space-grass-empty", "space-grass-empty", "space-grass-empty", "space-grass-empty", "space-field-mid", "space-grass-empty", "space-grass-empty", "space-grass-empty", "space-grass-empty", "space-grass-empty", "space-grass", "space-grass-hole"],
                rarity: "Never",
                Events: [{
                    rarity: "Epic",
                    scoreThreshold: 30
                }]
            },
            {
                name: "space-grass-hole-single",
                lanes: ["space-grass-hole"],
                rarity: "Never",
                Events: [{
                    rarity: "Uncommon",
                    scoreThreshold: 300
                }]
            },
            {
                name: "space-hard-water",
                lanes: ["space-log-right-poop", "space-log-left-poop", "space-log-right-poop", "space-log-left-poop", "space-log-right-poop", "space-log-left-poop", "space-log-right-poop", "space-water-lilypad-rand", "space-log-left-poop", "space-log-right-poop", "space-log-left-poop", "space-log-right-poop", "space-water-lilypad-rand", "space-log-left-poop", "space-log-right-poop"],
                rarity: "Never",
                Events: [{
                        rarity: "MostEpic",
                        scoreThreshold: 60
                    },
                    {
                        rarity: "Epic",
                        scoreThreshold: 100
                    }
                ]
            },
            {
                name: "tutorial",
                lanes: ["tutorial-grass-neat", "tutorial-hole-center", "tutorial-hole-center", "tutorial-hole-center", "tutorial-grass-empty", "tutorial-grass-empty", "tutorial-hole-left", "tutorial-grass-empty", "tutorial-grass-empty", "tutorial-hole-center", "tutorial-grass", "tutorial-grass", "tutorial-grass", "space-road", "space-grass", "space-grass", "space-road", "space-road", "space-grass", "space-grass", "space-road", "space-grass", "space-road", "space-grass", "space-road", "space-road", "space-grass", "space-grass", "space-grass"],
                rarity: "Never",
                Events: []
            },
            {
                name: "space-special-1",
                lanes: ["space-water-lilypad-rand", "space-log-left-poop", "space-log-right-poop", "space-block-1", "space-block-1", "space-block-2", "space-block-2", "space-log-right-poop", "space-log-left-poop", "space-water-lilypad-rand"],
                rarity: "Rare",
                Events: []
            },
            {
                name: "space-special-2",
                lanes: ["space-water-lilypad-rand", "space-log-left-poop", "space-log-right-poop", "space-special-1", "space-special-2", "space-special-3", "space-special-4", "space-log-right-poop", "space-log-left-poop", "space-log-right-poop", "space-water-lilypad-rand"],
                rarity: "Rare",
                Events: []
            },
            {
                name: "space-special-3",
                lanes: ["space-log-right-poop", "space-log-left-poop", "space-log-right-poop", "space-special-1", "space-special-2", "space-log-right-poop", "space-water-lilypad-rand", "space-log-left-poop", "space-block-2", "space-block-2", "space-log-left-poop", "space-log-right-poop", "space-water-lilypad-rand"],
                rarity: "Rare",
                Events: []
            },
            {
                name: "space-meteorshower-5",
                lanes: ["space-shower", "space-shower", "space-shower-blocking-5", "space-shower", "space-shower"],
                rarity: "Rare",
                Events: []
            }
        ];
        exports.
        default = ChunksSpace;
    },
    function (module, exports, __webpack_require__) {
        function Meteor() {}

        function isCloseToPlayer(z) {
            var playerZ = _Game2.
            default.playerController.player.position.z;
            var dist = Math.abs(playerZ - z);
            if (z < playerZ) {
                return dist < 15;
            } else {
                return dist < 10;
            }
        }

        function MeteorSpawner() {}

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.MeteorSpawner = undefined;
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _Interface = __webpack_require__(2);
        var _Interface2 = _interopRequireDefault(_Interface);
        var _Physics = __webpack_require__(16);
        var _Physics2 = _interopRequireDefault(_Physics);
        var _GameSave = __webpack_require__(3);
        var _GameSave2 = _interopRequireDefault(_GameSave);
        var _ParticleSystem = __webpack_require__(38);
        var _ParticleSystem2 = _interopRequireDefault(_ParticleSystem);;
        MeteorSpawner.prototype = {
            contructor: MeteorSpawner,
            SpawnMeteor: function SpawnMeteor() {
                var randomZVariation = Math.floor(Math.random() * 4) - 2;
                var meteor = Meteor.Get(this.speed, this.direction, (this.position.x - this.meteorStartOffset) * this.direction, this.position.y, this.position.z + randomZVariation);
                var mesh = meteor.object.children[0];
                this.lastSpawnTime = _Game2.
                default.clock.getElapsedTime();
                return meteor;
            },
            tick: function tick(deltaTime) {
                this.waitTime -= deltaTime;
                this.spawnTime -= deltaTime;
                this.nextMeteorTime -= deltaTime;
                if (this.waitTime <= 0 && !this.spawningMeteors) {
                    this.spawningMeteors = true;
                    this.spawnTime = 2.0 + Math.random() * 4;
                    if (_Game2.default.playerController.riverNearby) {
                        _Game2.
                        default.playSfx('asteroidfield');
                    }
                }
                if (this.spawnTime <= 0 && this.spawningMeteors) {
                    this.spawningMeteors = false;
                    this.waitTime = 4.0 + Math.random() * 4;
                }
                if (this.nextMeteorTime <= 0 && this.spawningMeteors) {
                    this.SpawnMeteor();
                    this.nextMeteorTime = 0.2 + Math.random() * 0.2;
                }
            },
            pool: function pool() {
                _Game2.
                default.removefromPhysics(this);
                meteorSpawnerPool.push(this);
            }
        };
        var meteorSpawnerPool = [];
        MeteorSpawner.prototype.setup = function (direction, x, y, z) {
            this.speed = 30;
            this.direction = direction;
            this.waitTime = Math.random() * 10;
            this.spawnTime = Math.random() * 3;
            this.nextMeteorTime = Math.random();
            this.lastSpawnTime = -100;
            this.position = new THREE.Vector3(x, y, z);
            this.meteorStartOffset = 20;
            _Game2.
            default.physicsObjects.push(this);
        };
        MeteorSpawner.PopulatePool = function (amount) {
            while (meteorSpawnerPool.length < amount) {
                meteorSpawnerPool.push(new MeteorSpawner());
            }
        };
        MeteorSpawner.Get = function (direction, x, y, z) {
            var meteorSpawner;
            meteorSpawner = new MeteorSpawner();
            meteorSpawner.setup(direction, x, y, z);
            return meteorSpawner;
        };
        Meteor.prototype = {
            contructor: Meteor,
            tick: function tick(deltaTime) {
                this.object.position.x += this.speed * this.direction * deltaTime;
                this.particles.emit(500);
                if (!_Game2.default.barrierOn) {
                    if (_Physics2.default.DoBoxesIntersect(_Game2.default.playerController.targetPosition.x, _Game2.default.playerController.targetPosition.z, _Game2.default.playerController.playerWidth, _Game2.default.playerController.playerDepth, this.object.position.x, this.object.position.z, this.HitBoxX, this.HitBoxZ) && !_Game2.default.playerController.Dead) {
                        _GameSave2.
                        default.CheckMoonRockUnlock();
                        _Game2.
                        default.playerController.kill("train");
                        _Game2.
                        default.playSfx('AsteroidHit');
                        _Game2.
                        default.playerController.killerTrain = this;
                    }
                }
            },
            pool: function pool() {
                _Game2.
                default.objectPooler.EnterPool(this.object.name, this.object);
                _Game2.
                default.removefromPhysics(this);
                meteorPool.push(this);
            }
        };
        var meteorPool = [];
        Meteor.prototype.setup = function (speed, direction, x, y, z) {
            this.speed = speed;
            this.direction = direction;
            this.object = _Game2.
            default.objectPooler.GetItemOfType("meteor");
            this.object.position.set(x, y, z);
            this.object.rotation.y = Math.PI * direction;
            this.particles = new _ParticleSystem2.
            default(50, 0x000000, new THREE.Vector3(this.object.position.x, this.object.position.y, this.object.position.z), 2 * direction, 0, 3, new THREE.Vector3(-direction, 0, 0), new THREE.BoxGeometry(.1, 0.1, 0.1), null, false, -1, 0.2, this.object, 0.001);
            this.particles.setColourRange(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 1));
            this.HitBoxX = 1;
            this.HitBoxZ = 0.9;
            _Game2.
            default.physicsObjects.push(this);
        };
        Meteor.PopulatePool = function (amount) {
            while (meteorPool.length < amount) {
                meteorPool.push(new Meteor());
            }
        };
        Meteor.Get = function (speed, direction, x, y, z) {
            var meteor;
            meteor = new Meteor();
            meteor.setup(speed, direction, x, y, z);
            return meteor;
        };
        Meteor.TestPlayerMeteorSide = function (testPosition) {
            for (var i = 0; i < _Game2.default.physicsObjects.length; i++) {
                if (_Game2.default.physicsObjects[i].name != "meteor") {
                    continue;
                }
                if (_Physics2.default.DoBoxesIntersect(testPosition.x, testPosition.z, _Game2.default.playerController.playerWidth, _Game2.default.playerController.playerDepth, _Game2.default.physicsObjects[i].object.position.x, _Game2.default.physicsObjects[i].object.position.z, _Game2.default.physicsObjects[i].HitBoxX, _Game2.default.physicsObjects[i].HitBoxZ) && !_Game2.default.playerController.Dead) {
                    _Game2.
                    default.playerController.kill("trainside");
                    _Game2.
                    default.playerController.killerXOffset = _Game2.
                    default.physicsObjects[i].object.position.x - _Game2.
                    default.playerController.player.position.x;
                    _Game2.
                    default.playerController.killerMeteor = _Game2.
                    default.physicsObjects[i];
                    return;
                }
            }
        };
        var meteorQuadPool = [];
        exports.MeteorSpawner = MeteorSpawner;
    },
    function (module, exports, __webpack_require__) {
        function render() {
            TWEEN.update();
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _Game = __webpack_require__(0);
        var _Game2 = _interopRequireDefault(_Game);
        var _ObjectPooler = __webpack_require__(5);
        var _Physics = __webpack_require__(16);
        var _Physics2 = _interopRequireDefault(_Physics);
        var Specimen = function Specimen() {};
        Specimen.prototype = {
            constructor: Specimen,
            tick: function tick(deltaTime) {
                this.object.lookAt(_Game2.default.playerController.player.position);
                var specPosition = new THREE.Vector3(this.object.position.x, this.object.position.y, this.object.position.z);
                var playerPosition = new THREE.Vector3(_Game2.default.playerController.player.position.x, _Game2.default.playerController.player.position.y, _Game2.default.playerController.player.position.z);
                var distance = specPosition.distanceTo(playerPosition);
                if (distance < 2) {
                    this.shake();
                }
            },
            pool: function pool() {
                if (this.spawner && this.spawner.specimens) {
                    var spawnerIdx = this.spawner.specimens.indexOf(this);
                    if (spawnerIdx !== -1) {
                        this.spawner.specimens.splice(spawnerIdx, 1);
                    }
                }
                this.object.position.set(-60, -60, -60);
                _Game2.
                default.objectPooler.EnterPool(this.object.name, this.object);
                _Game2.
                default.removefromPhysics(this);
                specimenPool.push(this);
            },
            setup: function setup(position) {
                this.object.position.set(position.x, position.y, position.z);
            },
            shake: function shake() {
                var x = Math.random() * 0.03;
                var y = Math.random() * 0.03;
                var z = Math.random() * 0.03;
                this.object.position.set(this.object.initPosition.x + x, this.object.initPosition.y + y, this.object.initPosition.z + z);
            }
        };
        Specimen.prototype.setup = function (x, y, z) {
            this.object = _Game2.
            default.objectPooler.GetItemOfType("specimen");
            this.object.position.set(x, y, z);
            this.object.initPosition = {
                x: this.object.position.x,
                y: this.object.position.y,
                z: this.object.position.z
            };
            this.name = "specimen";
            _Game2.
            default.physicsObjects.push(this);
        };
        var specimenPool = [];
        Specimen.PopulatePool = function (amount) {
            while (specimenPool.length < amount) {
                specimenPool.push(new Specimen());
            }
        };
        Specimen.Get = function (x, y, z) {
            var specimen;
            specimen = new Specimen();
            specimen.setup(x, y, z);
            return specimen.object;
        };
        exports.
        default = Specimen;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
            function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        var _DisplayObject = __webpack_require__(22);
        var _DisplayObject2 = _interopRequireDefault(_DisplayObject);
        var fallbackWidth = 6;
        var fallbackHeight = 6;
        var BitmapText = function BitmapText(ui, text, scale, x, y, sheetImagePath, sheetDataPath) {
            this.parseSheet(sheetImagePath, sheetDataPath);
            this.scale = typeof scale !== 'undefined' ? scale : 1;
            this.setText(text);
            x = typeof x !== 'undefined' ? x : 0;
            y = typeof y !== 'undefined' ? y : 0;
            var dimensions = this.calculateDimensions();
            _DisplayObject2.
            default.bind(this)(ui, x, y, dimensions.width, dimensions.height);
            this.pivot.x = 0;
            this.pivot.y = 0;
        };
        BitmapText.prototype = Object.create(_DisplayObject2.default.prototype);
        BitmapText.prototype.setText = function (text) {
            if (this.text === text) {
                return;
            }
            this.text = typeof text !== 'undefined' ? text.toString() : '';
            this.characters = this.text.split('');
            var dimensions = this.calculateDimensions();
            this.width = dimensions.width;
            this.height = dimensions.height;
        };
        BitmapText.prototype.setScale = function (scale) {
            if (this.scale === scale) {
                return;
            }
            this.scale = scale;
            var dimensions = this.calculateDimensions();
            this.width = dimensions.width;
            this.height = dimensions.height;
        };
        BitmapText.prototype.parseSheet = function (sheetImagePath, sheetDataPath) {
            var this$1 = this;
            if (typeof sheetImagePath === 'undefined' && !this.sheet) {
                throw new Error('Sheet image path missing when creating sprite from sheet');
            }
            if (typeof sheetDataPath === 'undefined' && !this.sheetData) {
                throw new Error('Sheet data path missing when creating sprite from sheet');
            }
            if (sheetImagePath || !this.sheet) {
                this.sheet = AssetLoader.getAssetById(sheetImagePath);
            }
            if (sheetDataPath || !this.sheetData) {
                this.sheetData = AssetLoader.getAssetById(sheetDataPath);
            }
            if (_typeof(this.sheetData) !== 'object') {
                throw new Error('Invalid sheet data ' + sheetDataPath + ' -- not an object');
            }
            this.characterData = {};
            var keys = Object.keys(this.sheetData);
            var length = keys.length;
            for (var i = 0; i < length; i++) {
                var char = keys[i];
                var data = this$1.sheetData[char];
                data['uv0'][0] = Math.min(1, Math.max(0, data['uv0'][0]));
                data['uv0'][1] = Math.min(1, Math.max(0, data['uv0'][1]));
                data['uv1'][0] = Math.min(1, Math.max(0, data['uv1'][0]));
                data['uv1'][1] = Math.min(1, Math.max(0, data['uv1'][1]));
                this$1.characterData[char] = {
                    x: Math.round(data['uv0'][0] * this$1.sheet.width),
                    y: Math.round((1 - data['uv0'][1]) * this$1.sheet.height),
                    width: Math.round((data['uv1'][0] - data['uv0'][0]) * this$1.sheet.width),
                    height: Math.round((data['uv0'][1] - data['uv1'][1]) * this$1.sheet.height)
                };
                var cData = this$1.characterData[char];
                cData.width = Math.max(0.00001, cData.width);
                cData.height = Math.max(0.00001, cData.height);
            }
        };
        BitmapText.prototype.calculateDimensions = function () {
            var this$1 = this;
            var dimensions = {
                width: 0,
                height: 0
            };
            var length = this.characters.length;
            for (var i = 0; i < length; i++) {
                var character = this$1.characters[i];
                if (!this$1.characterData[character]) {
                    character = Object.keys(this$1.characterData)[0];
                }
                var data = this$1.characterData[character];
                dimensions.width += data ? data.width : 0;
                dimensions.height = Math.max(dimensions.height, data ? data.height : 0);
            }
            dimensions.width *= this.scale;
            dimensions.height *= this.scale;
            return dimensions;
        };
        BitmapText.prototype.draw = function (context, x, y) {
            var this$1 = this;
            var length = this.characters.length;
            for (var i = 0; i < length; i++) {
                var character = this$1.characters[i];
                var bounds = this$1.drawCharacter(context, character, x, y);
                x = bounds.x + bounds.width;
                y = bounds.y;
            }
        };
        BitmapText.prototype.drawCharacter = function (context, character, x, y) {
            var data = this.characterData[character];
            var skipDraw = false;
            if (typeof data === 'undefined') {
                data = {
                    width: fallbackWidth,
                    height: fallbackHeight
                };
                skipDraw = true;
            }
            var width = data.width * this.scale * this.ui.resolution;
            var height = data.height * this.scale * this.ui.resolution;
            if (!skipDraw) {
                context.drawImage(this.sheet, data.x, data.y, data.width, data.height, x, y, width, height);
            }
            return {
                x: x,
                y: y,
                width: width,
                height: height
            };
        };
        exports.
        default = BitmapText;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _DisplayObject = __webpack_require__(22);
        var _DisplayObject2 = _interopRequireDefault(_DisplayObject);
        var Rectangle = function Rectangle(ui, color, x, y, width, height) {
            this.color = color;
            x = typeof x !== 'undefined' ? x : 0;
            y = typeof y !== 'undefined' ? y : 0;
            width = typeof width !== 'undefined' ? width : 1;
            height = typeof height !== 'undefined' ? height : 1;
            _DisplayObject2.
            default.bind(this)(ui, x, y, width, height);
        };
        Rectangle.prototype = Object.create(_DisplayObject2.default.prototype);
        Rectangle.prototype.draw = function (context, x, y, width, height) {
            context.fillStyle = this.color;
            context.fillRect(x, y, width, height);
        };
        exports.
        default = Rectangle;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
            function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        var _DisplayObject = __webpack_require__(22);
        var _DisplayObject2 = _interopRequireDefault(_DisplayObject);
        var Sprite = function Sprite(ui, assetPath, x, y, width, height, sheetImagePath, sheetDataPath) {
            this.setAssetPath(assetPath, sheetImagePath, sheetDataPath);
            x = typeof x !== 'undefined' ? x : 0;
            y = typeof y !== 'undefined' ? y : 0;
            width = typeof width !== 'undefined' ? width : null;
            height = typeof height !== 'undefined' ? height : null;
            if (this.asset) {
                width = width !== null ? width : this.asset.width;
                height = height !== null ? height : this.asset.height;
            } else if (this.sheet && this.sheetImageData) {
                width = width !== null ? width : this.sheetImageData['frame']['w'];
                height = height !== null ? height : this.sheetImageData['frame']['h'];
            }
            _DisplayObject2.
            default.bind(this)(ui, x, y, width, height);
        };
        Sprite.prototype = Object.create(_DisplayObject2.default.prototype);
        Sprite.prototype.draw = function (context, x, y, width, height) {
            if (this.sheet && this.sheetImageData) {
                context.drawImage(this.sheet, this.sheetImageData['frame']['x'], this.sheetImageData['frame']['y'], this.sheetImageData['frame']['w'], this.sheetImageData['frame']['h'], x, y, width, height);
            } else {
                context.drawImage(this.asset, x, y, width, height);
            }
        };
        Sprite.prototype.setAssetPath = function (assetPath, sheetImagePath, sheetDataPath) {
            this.assetPath = assetPath;
            if (typeof sheetImagePath === 'undefined' && !this.sheet) {
                this.asset = AssetLoader.getAssetById(assetPath);
                this.sheet = null;
            } else {
                this.asset = null;
                this.parseSheet(assetPath, sheetImagePath, sheetDataPath);
            }
        };
        Sprite.prototype.parseSheet = function (assetPath, sheetImagePath, sheetDataPath) {
            if (typeof sheetDataPath === 'undefined' && !this.sheetData) {
                throw new Error('Sheet data path missing when creating sprite from sheet');
            }
            if (sheetImagePath || !this.sheet) {
                this.sheet = AssetLoader.getAssetById(sheetImagePath);
            }
            if (sheetDataPath || !this.sheetData) {
                this.sheetData = AssetLoader.getAssetById(sheetDataPath);
            }
            if (_typeof(this.sheetData) !== 'object') {
                throw new Error('Invalid sheet data ' + sheetDataPath + ' -- not an object');
            } else if (!this.sheetData['frames']) {
                throw new Error('Invalid sheet data ' + sheetDataPath + ' -- does not have frames');
            }
            var data;
            this.sheetData['frames'].forEach(function (frame) {
                if (frame['filename'] === assetPath) {
                    data = frame;
                }
            });
            if (!data) {
                throw new Error('Asset "' + assetPath + '" does not exist in sheet "' + sheetDataPath + '"');
            }
            this.sheetImageData = data;
        };
        exports.
        default = Sprite;
    },
    function (module, exports, __webpack_require__) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _DisplayObject = __webpack_require__(22);
        var _DisplayObject2 = _interopRequireDefault(_DisplayObject);
        var Text = function Text(ui, text, size, font, color, x, y) {
            this.textAlign = 'left';
            this.textBaseline = 'alphabetic';
            this.text = typeof text !== 'undefined' ? text : '';
            this.size = typeof size !== 'undefined' ? size : 12;
            this.font = typeof font !== 'undefined' ? font : 'Arial';
            this.color = typeof color !== 'undefined' ? color : '#000000';
            this.lineHeight = 1;
            x = typeof x !== 'undefined' ? x : 0;
            y = typeof y !== 'undefined' ? y : 0;
            _DisplayObject2.
            default.bind(this)(ui, x, y);
        };
        Text.prototype = Object.create(_DisplayObject2.default.prototype);
        Text.prototype.draw = function (context, x, y) {
            var this$1 = this;
            context.font = this.size + 'px ' + this.font;
            context.fillStyle = this.color;
            context.textAlign = this.textAlign;
            context.textBaseline = this.textBaseline;
            var lines = this.text.split('\n');
            var midLinePoint = 0;
            if (this.textVerticalAlign === 'center') {
                midLinePoint = lines.length / 2 - 0.5;
            } else if (this.textVerticalAlign === 'bottom') {
                midLinePoint = lines.length - 1;
            }
            for (var idx = 0; idx < lines.length; idx++) {
                var line = lines[idx];
                var lineY = y + (idx - midLinePoint) * (this$1.size * this$1.lineHeight);
                context.fillText(line, x, lineY);
            }
        };
        exports.
        default = Text;
    }
]));