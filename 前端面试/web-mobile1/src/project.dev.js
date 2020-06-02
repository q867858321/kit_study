window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  block: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6c808XNx1MoZuqsTry0QDM", "block");
    "use strict";
    var _colors = require("colors");
    var _colors2 = _interopRequireDefault(_colors);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        numLabel: cc.Label,
        isCompound: false
      },
      start: function start() {},
      setNumber: function setNumber(number) {
        0 == number && (this.numLabel.node.active = false);
        this.numLabel.string = number;
        number in _colors2.default && (this.node.color = _colors2.default[number]);
      }
    });
    cc._RF.pop();
  }, {
    colors: "colors"
  } ],
  colors: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "979a3n+OAhBRI0bP0PyxLGb", "colors");
    "use strict";
    var colors = [];
    colors[0] = cc.color(30, 139, 112, 255);
    colors[2] = cc.color(192, 180, 165, 255);
    colors[4] = cc.color(242, 203, 53, 255);
    colors[8] = cc.color(255, 137, 31, 255);
    colors[16] = cc.color(255, 10, 21, 255);
    colors[32] = cc.color(125, 203, 62, 255);
    colors[64] = cc.color(196, 123, 251, 255);
    colors[128] = cc.color(255, 1, 157, 255);
    colors[256] = cc.color(18, 181, 89, 255);
    colors[512] = cc.color(133, 0, 245, 255);
    colors[1024] = cc.color(1, 142, 230, 255);
    colors[2048] = cc.color(230, 1, 98, 255);
    colors[4096] = cc.color(230, 1, 98, 255);
    colors[8192] = cc.color(230, 1, 98, 255);
    colors[16384] = cc.color(230, 1, 98, 255);
    colors[32768] = cc.color(230, 1, 98, 255);
    module.exports = colors;
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae6d4O5dXFHs7EouAgCg973", "game");
    "use strict";
    var NUMBERS = [ 2, 4 ];
    var ROWS = 4;
    var MIN_LENGTH = 50;
    var MOVE_DURATION = .05;
    var SUCCESS_SCORE = 2048;
    var HIGHEST_SCORE = "highest_score";
    var NEW_GAME = "new_game";
    var HAMMER_GET_HAMMER = "hammer_watch_ads_get_hammer";
    var SUCCESS_REWARD_HAMMER_DOUBLE = "success_watch_ads_get_double_hammer";
    var MINIMUM_INTERVAL = "400";
    var BOTTOM = 100;
    var HAMMER_COUNT = "hammer_count";
    var ADS_CLOSED = "closed";
    var ADS_COMPLETED = "completed";
    var ADS_ERROR = "error";
    var FAIL_REVIVE = "fail_revive";
    cc.Class({
      extends: cc.Component,
      properties: {
        scoreLabel: cc.Label,
        score: 0,
        blockPrefab: cc.Prefab,
        gap: 20,
        bg: cc.Node,
        gameOverSence: cc.Node,
        retryLabel: cc.RichText,
        gameOverBg: cc.Node,
        checkSuccess: true,
        gameSuccessSence: cc.Node,
        gameSuccessRetryButton: cc.Button,
        gameSuccessContinueButton: cc.Button,
        highestScoreLabel: cc.Label,
        isAniming: false,
        isDeleting: false,
        titleBg: cc.Graphics,
        coreBg: cc.Node,
        propBg: cc.Graphics,
        pauseButton: cc.Sprite,
        gamePauseState: false,
        gamePauseBg: cc.Node,
        gamePauseButtonBg: cc.Node,
        pauseResumeButton: cc.Button,
        pauseNewGameButton: cc.Button,
        successBg: cc.Node,
        hammerButton: cc.Sprite,
        generateButton: cc.Sprite,
        hammerSenseBg: cc.Node,
        hamBg: cc.Node,
        useHammerButton: cc.Button,
        hammerTotalCount: cc.Label,
        propGetHammer: cc.Button,
        successDoubleHammer: cc.Button,
        closeHammer: cc.Sprite,
        revive: cc.Button
      },
      requestAds: function requestAds(extra) {
        var _origin = this.getParentUrl();
        window.top.postMessage("invoke@@@GameModel.Game.requestAds#" + extra, _origin);
      },
      getParentUrl: function getParentUrl() {
        var url = null;
        if (parent !== window) try {
          url = parent.location.href;
        } catch (e) {
          url = document.referrer;
        }
        return url;
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.up:
          this.move(0);
          break;

         case cc.macro.KEY.down:
          this.move(1);
          break;

         case cc.macro.KEY.left:
          this.move(2);
          break;

         case cc.macro.KEY.right:
          this.move(3);
        }
      },
      start: function start() {
        cc.debug.setDisplayStats(false);
        var _me = this;
        this.drawGameOverBg();
        this.drawGamePauseBg();
        this.drawBgBlocks();
        this.drawTitleBg();
        this.drawPropBg();
        this.drawSuccessBg();
        this.drawHammerBg();
        this.init();
        this.addEventHandler();
        window.addEventListener("message", function(event) {
          var status = event.data.status;
          var extra = event.data.extra;
          if (extra == NEW_GAME) _me.init(); else if (extra == HAMMER_GET_HAMMER) {
            if (status == ADS_CLOSED || status == ADS_COMPLETED) {
              var thc = cc.sys.localStorage.getItem(_me.getToday() + HAMMER_GET_HAMMER);
              if (thc < 3) {
                _me.addOneHammer();
                cc.sys.localStorage.setItem(_me.getToday() + HAMMER_GET_HAMMER, thc - 0 + 1);
              }
              _me.updateHammerCount();
            }
          } else if (extra == SUCCESS_REWARD_HAMMER_DOUBLE) {
            if (status == ADS_CLOSED || status == ADS_COMPLETED) {
              _me.addOneHammer();
              _me.updateHammerCount();
            }
          } else if (extra == FAIL_REVIVE) {
            _me.dismissGameOver();
            status != ADS_CLOSED && status != ADS_COMPLETED || _me.failRevive();
          } else _me.init();
        }, false);
      },
      failRevive: function failRevive() {
        for (var i = 0; i < ROWS; i++) if (null != this.blocks[ROWS - 1][i]) {
          this.blocks[ROWS - 1][i].destroy();
          this.data[ROWS - 1][i] = 0;
        }
        if (null != this.blocks[ROWS - 2][0]) {
          this.blocks[ROWS - 2][0].destroy();
          this.data[ROWS - 2][0] = 0;
        }
      },
      addOneHammer: function addOneHammer() {
        var ham_c = cc.sys.localStorage.getItem(HAMMER_COUNT);
        cc.sys.localStorage.setItem(HAMMER_COUNT, ham_c - 0 + 1);
      },
      reduceOneHammer: function reduceOneHammer() {
        var ham_c = cc.sys.localStorage.getItem(HAMMER_COUNT);
        ham_c > 0 && cc.sys.localStorage.setItem(HAMMER_COUNT, ham_c - 0 - 1);
      },
      updateHammerCount: function updateHammerCount() {
        var hc = cc.sys.localStorage.getItem(HAMMER_COUNT);
        null == hc && (hc = 0);
        this.hammerTotalCount.string = hc + " X";
        this.useHammerButton.enabled = hc > 0;
        var thc = cc.sys.localStorage.getItem(this.getToday() + HAMMER_GET_HAMMER);
        this.propGetHammer.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = thc >= 3 ? "no times" : "Watch ads";
      },
      getToday: function getToday() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return year + month + day;
      },
      drawHammerBg: function drawHammerBg() {
        var graphics = this.hamBg.getComponent(cc.Graphics);
        var color = cc.Color.BLACK;
        color.fromHEX("#B1ACAC");
        color.a = 255;
        graphics.fillColor = color;
        graphics.roundRect(0, 0, this.hamBg.getContentSize().width, this.hamBg.getContentSize().height, 20);
        graphics.fill();
      },
      drawSuccessBg: function drawSuccessBg() {
        var graphics = this.successBg.getComponent(cc.Graphics);
        var color = cc.Color.BLACK;
        color.fromHEX("#B1ACAC");
        color.a = 255;
        graphics.fillColor = color;
        graphics.roundRect(0, 0, this.successBg.getContentSize().width, this.successBg.getContentSize().height, 20);
        graphics.fill();
      },
      drawGameOverBg: function drawGameOverBg() {
        var graphics = this.gameOverBg.getComponent(cc.Graphics);
        var color = cc.Color.BLACK;
        color.fromHEX("#B1ACAC");
        color.a = 255;
        graphics.fillColor = color;
        graphics.roundRect(0, 0, this.gameOverBg.getContentSize().width, this.gameOverBg.getContentSize().height, 20);
        graphics.fill();
      },
      drawGamePauseBg: function drawGamePauseBg() {
        var graphics = this.gamePauseButtonBg.getComponent(cc.Graphics);
        var color = cc.Color.BLACK;
        color.fromHEX("#8E8686");
        color.a = 255;
        graphics.fillColor = color;
        graphics.roundRect(0, 0, this.gamePauseButtonBg.getContentSize().width, this.gamePauseButtonBg.getContentSize().height, 20);
        graphics.fill();
      },
      drawTitleBg: function drawTitleBg() {
        var graphics = this.titleBg.getComponent(cc.Graphics);
        var color = cc.Color.BLACK;
        color.fromHEX("#C2BDBD");
        color.a = 255;
        graphics.fillColor = color;
        graphics.roundRect(0, 0, this.titleBg.node.getContentSize().width, this.titleBg.node.getContentSize().height, 20);
        graphics.fill();
      },
      drawPropBg: function drawPropBg() {
        var graphics = this.propBg.getComponent(cc.Graphics);
        var color = cc.Color.BLACK;
        color.fromHEX("#C2BDBD");
        color.a = 255;
        graphics.fillColor = color;
        graphics.roundRect(0, 0, this.propBg.node.getContentSize().width, this.propBg.node.getContentSize().height, 60);
        graphics.fill();
      },
      addEventHandler: function addEventHandler() {
        var _this = this;
        this.coreBg.on("touchstart", function(event) {
          _this.startPoint = event.getLocation();
        });
        this.coreBg.on("touchend", function(event) {
          _this.isDeleting ? _this.findBlockTouched(event) : _this.touchEnd(event);
        });
        this.coreBg.on("touchcancel", function(event) {
          _this.touchEnd(event);
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
          if (_this.isAniming) return;
          _this.onKeyDown(event);
        }, this);
        this.retryLabel.node.on("touchstart", function(event) {
          _this.init();
        });
        this.gameSuccessRetryButton.node.on("click", function(event) {
          _this.init();
        });
        this.gameSuccessContinueButton.node.on("click", function(event) {
          _this.gameSuccessSence.active = false;
          _this.checkSuccess = false;
        });
        this.pauseButton.node.on("touchstart", function(event) {
          _this.setGamePause();
        });
        this.pauseResumeButton.node.on("click", function(event) {
          _this.setGameResume();
        });
        this.pauseNewGameButton.node.on("click", function(event) {
          _this.gamePauseBg.active = false;
          _this.init();
        });
        this.hammerButton.node.on("touchstart", function(event) {
          _this.showHammerSense();
        });
        this.generateButton.node.on("touchstart", function(event) {});
        this.useHammerButton.node.on("click", function(event) {
          var hammer_c = cc.sys.localStorage.getItem(HAMMER_COUNT);
          if (hammer_c > 0) {
            _this.isDeleting = true;
            _this.dismissHammerSense();
          }
        });
        this.gamePauseBg.on("touchstart", function(event) {});
        this.gamePauseBg.on("touchend", function(event) {});
        this.propGetHammer.node.on("click", function(event) {
          var thc = cc.sys.localStorage.getItem(_this.getToday() + HAMMER_GET_HAMMER);
          thc >= 3 ? _this.updateHammerCount() : _this.requestAds(HAMMER_GET_HAMMER);
        });
        this.successDoubleHammer.node.on("click", function(event) {
          _this.requestAds(SUCCESS_REWARD_HAMMER_DOUBLE);
        });
        this.closeHammer.node.on("touchstart", function(event) {
          _this.dismissHammerSense();
        });
        this.revive.node.on("click", function(event) {
          _this.requestAds(FAIL_REVIVE);
        });
      },
      showHammerSense: function showHammerSense() {
        this.hammerSenseBg.active = true;
        this.updateHammerCount();
      },
      dismissHammerSense: function dismissHammerSense() {
        this.hammerSenseBg.active = false;
      },
      setGamePause: function setGamePause() {
        this.gamePauseState = true;
        this.gamePauseBg.active = true;
        cc.director.pause();
      },
      setGameResume: function setGameResume() {
        this.gamePauseState = false;
        this.gamePauseBg.active = false;
        cc.director.resume();
      },
      touchEnd: function touchEnd(event) {
        this.endPoint = event.getLocation();
        var vec = this.endPoint.sub(this.startPoint);
        vec.mag() > MIN_LENGTH && (Math.abs(vec.x) > Math.abs(vec.y) ? vec.x > 0 ? this.move(3) : this.move(2) : vec.y > 0 ? this.move(0) : this.move(1));
      },
      afterMove: function afterMove(hasMoved) {
        if (hasMoved) {
          this.updateScore(this.score + 10);
          this.addBlock();
        }
        this.updateHighestScore();
        this.checkIsSuccess() && this.gameSuccess();
        this.checkFail() && this.gameOver();
      },
      checkIsSuccess: function checkIsSuccess() {
        for (var i = 0; i < ROWS; i++) for (var j = 0; j < ROWS; j++) {
          var n = this.data[i][j];
          if (this.checkSuccess && n >= SUCCESS_SCORE) {
            this.checkSuccess = false;
            return true;
          }
        }
        return false;
      },
      checkFail: function checkFail() {
        for (var i = 0; i < ROWS; i++) for (var j = 0; j < ROWS; j++) {
          var n = this.data[i][j];
          if (0 == n) return false;
          if (j > 0 && this.data[i][j - 1] == n) return false;
          if (j < ROWS - 1 && this.data[i][j + 1] == n) return false;
          if (i > 0 && this.data[i - 1][j] == n) return false;
          if (i < ROWS - 1 && this.data[i + 1][j] == n) return false;
        }
        return true;
      },
      gameSuccess: function gameSuccess() {
        this.gameSuccessSence.active = true;
        this.addOneHammer();
        this.updateHammerCount();
      },
      gameOver: function gameOver() {
        this.gameOverSence.active = true;
      },
      dismissGameOver: function dismissGameOver() {
        this.gameOverSence.active = false;
      },
      doMove: function doMove(block, position, callback) {
        var _this2 = this;
        this.isAniming = true;
        var action = cc.moveTo(MOVE_DURATION, position);
        var finish = cc.callFunc(function() {
          _this2.isAniming = false;
          callback && callback();
        });
        block.runAction(cc.sequence(action, finish));
      },
      move: function move(direction) {
        var _this3 = this;
        this.isDeleting = false;
        var hasMoved = false;
        var move = function move(x, y, callback) {
          var q = void 0;
          var nextData = void 0;
          var nextPosition = void 0;
          if (0 == direction) {
            q = ROWS - 1;
            if (x + 1 < ROWS) {
              nextData = _this3.data[x + 1][y];
              nextPosition = _this3.poisitions[x + 1][y];
            }
          } else if (1 == direction) {
            q = 0;
            if (x - 1 >= 0) {
              nextData = _this3.data[x - 1][y];
              nextPosition = _this3.poisitions[x - 1][y];
            }
          } else if (2 == direction) {
            q = 0;
            if (y - 1 >= 0) {
              nextData = _this3.data[x][y - 1];
              nextPosition = _this3.poisitions[x][y - 1];
            }
          } else {
            q = ROWS - 1;
            if (y + 1 < ROWS) {
              nextData = _this3.data[x][y + 1];
              nextPosition = _this3.poisitions[x][y + 1];
            }
          }
          if ((2 == direction || 3 == direction) && y == q || (0 == direction || 1 == direction) && x == q || 0 == _this3.data[x][y]) {
            callback && callback();
            return;
          }
          if (0 == nextData) {
            var block = _this3.blocks[x][y];
            if (0 == direction) {
              _this3.blocks[x + 1][y] = block;
              _this3.data[x + 1][y] = _this3.data[x][y];
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.doMove(block, nextPosition, function() {
                move(x + 1, y, callback);
              });
            } else if (1 == direction) {
              _this3.blocks[x - 1][y] = block;
              _this3.data[x - 1][y] = _this3.data[x][y];
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.doMove(block, nextPosition, function() {
                move(x - 1, y, callback);
              });
            } else if (2 == direction) {
              _this3.blocks[x][y - 1] = block;
              _this3.data[x][y - 1] = _this3.data[x][y];
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.doMove(block, nextPosition, function() {
                move(x, y - 1, callback);
              });
            } else {
              _this3.blocks[x][y + 1] = block;
              _this3.data[x][y + 1] = _this3.data[x][y];
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.doMove(block, nextPosition, function() {
                move(x, y + 1, callback);
              });
            }
            hasMoved = true;
          } else {
            if (nextData != _this3.data[x][y]) {
              callback && callback();
              return;
            }
            var _block = _this3.blocks[x][y];
            if (0 == direction) {
              if (_this3.blocks[x + 1][y].isCompound) {
                callback && callback();
                return;
              }
              _this3.data[x + 1][y] = 2 * nextData;
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.blocks[x + 1][y].getComponent("block").setNumber(_this3.data[x + 1][y]);
              _this3.blocks[x + 1][y].isCompound = true;
              _this3.doMove(_block, nextPosition, function() {
                _block.destroy();
                callback && callback();
                return;
              });
            } else if (1 == direction) {
              if (_this3.blocks[x - 1][y].isCompound) {
                callback && callback();
                return;
              }
              _this3.data[x - 1][y] = 2 * nextData;
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.blocks[x - 1][y].getComponent("block").setNumber(_this3.data[x - 1][y]);
              _this3.blocks[x - 1][y].isCompound = true;
              _this3.doMove(_block, nextPosition, function() {
                _block.destroy();
                callback && callback();
                return;
              });
            } else if (2 == direction) {
              if (_this3.blocks[x][y - 1].isCompound) {
                callback && callback();
                return;
              }
              _this3.data[x][y - 1] = 2 * nextData;
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.blocks[x][y - 1].getComponent("block").setNumber(_this3.data[x][y - 1]);
              _this3.blocks[x][y - 1].isCompound = true;
              _this3.doMove(_block, nextPosition, function() {
                _block.destroy();
                callback && callback();
                return;
              });
            } else {
              if (_this3.blocks[x][y + 1].isCompound) {
                callback && callback();
                return;
              }
              _this3.data[x][y + 1] = 2 * nextData;
              _this3.data[x][y] = 0;
              _this3.blocks[x][y] = null;
              _this3.blocks[x][y + 1].getComponent("block").setNumber(_this3.data[x][y + 1]);
              _this3.blocks[x][y + 1].isCompound = true;
              _this3.doMove(_block, nextPosition, function() {
                _block.destroy();
                callback && callback();
                return;
              });
            }
            hasMoved = true;
          }
        };
        var toMove = [];
        if (0 == direction) for (var i = ROWS - 1; i >= 0; i--) for (var j = 0; j < ROWS; j++) {
          null != this.blocks[i][j] && (this.blocks[i][j].isCompound = false);
          0 != this.data[i][j] && toMove.push({
            x: i,
            y: j
          });
        } else if (1 == direction) for (var _i = 0; _i < ROWS; _i++) for (var _j = 0; _j < ROWS; _j++) {
          null != this.blocks[_i][_j] && (this.blocks[_i][_j].isCompound = false);
          0 != this.data[_i][_j] && toMove.push({
            x: _i,
            y: _j
          });
        } else if (2 == direction) for (var _i2 = 0; _i2 < ROWS; _i2++) for (var _j2 = 0; _j2 < ROWS; _j2++) {
          null != this.blocks[_i2][_j2] && (this.blocks[_i2][_j2].isCompound = false);
          0 != this.data[_i2][_j2] && toMove.push({
            x: _i2,
            y: _j2
          });
        } else for (var _i3 = 0; _i3 < ROWS; _i3++) for (var _j3 = ROWS - 1; _j3 >= 0; _j3--) {
          null != this.blocks[_i3][_j3] && (this.blocks[_i3][_j3].isCompound = false);
          0 != this.data[_i3][_j3] && toMove.push({
            x: _i3,
            y: _j3
          });
        }
        var counter = 0;
        for (var _i4 = 0; _i4 < toMove.length; _i4++) move(toMove[_i4].x, toMove[_i4].y, function() {
          counter++;
          counter == toMove.length && _this3.afterMove(hasMoved);
        });
      },
      init: function init() {
        this.updateHighestScore();
        this.gameOverSence.active = false;
        this.gameSuccessSence.active = false;
        this.checkSuccess = true;
        this.updateScore(0);
        if (this.blocks) for (var i = 0; i < this.blocks.length; i++) for (var j = 0; j < this.blocks[i].length; j++) null != this.blocks[i][j] && this.blocks[i][j].destroy();
        this.data = [];
        this.blocks = [];
        for (var _i5 = 0; _i5 < ROWS; _i5++) {
          this.blocks.push([ null, null, null, null ]);
          this.data.push([ 0, 0, 0, 0 ]);
        }
        this.addBlock();
        this.addBlock();
        this.addBlock();
      },
      findBlockTouched: function findBlockTouched(event) {
        var vec = this.coreBg.convertToNodeSpace(cc.v2(event.getLocationX(), event.getLocationY()));
        for (var i = 0; i < this.poisitions.length; i++) for (var j = 0; j < this.poisitions[i].length; j++) {
          var pos = this.poisitions[i][j];
          var sx = pos.x - this.blockSize / 2;
          var ex = pos.x + this.blockSize / 2;
          var sy = pos.y - this.blockSize / 2;
          var ey = pos.y + this.blockSize / 2;
          if (vec.x >= sx && vec.x <= ex && vec.y >= sy && vec.y <= ey) {
            this.deleteBlock(i, j);
            this.isDeleting = false;
          }
        }
      },
      deleteBlock: function deleteBlock(i, j) {
        if (null != this.blocks[i][j]) {
          var emptyLocations = this.getEmptyLocations();
          if (emptyLocations.length >= this.blocks.length * this.blocks[0].length - 1) return;
          var blink = cc.blink(1, 2);
          var fadeOut = cc.fadeOut(.5);
          var sequence1 = cc.sequence(blink, fadeOut);
          var finish = cc.callFunc(function() {});
          this.blocks[i][j].runAction(cc.sequence(sequence1, finish));
          this.blocks[i][j] = null;
          this.data[i][j] = 0;
          this.reduceOneHammer();
        }
      },
      updateHighestScore: function updateHighestScore() {
        var high = cc.sys.localStorage.getItem(HIGHEST_SCORE);
        if (null == high) if (null != this.score) {
          cc.sys.localStorage.setItem(HIGHEST_SCORE, this.score);
          this.highestScoreLabel.string = this.score;
        } else this.highestScoreLabel.string = "0"; else if (null != this.score) if (high < this.score) {
          cc.sys.localStorage.setItem(HIGHEST_SCORE, this.score);
          this.highestScoreLabel.string = this.score;
        } else this.highestScoreLabel.string = high; else this.highestScoreLabel.string = high;
      },
      addBlock: function addBlock() {
        var locations = this.getEmptyLocations();
        if (0 == locations.length) return false;
        var index = locations[Math.floor(Math.random() * locations.length)];
        var x = index.x;
        var y = index.y;
        var position = this.poisitions[x][y];
        var block = cc.instantiate(this.blockPrefab);
        block.width = this.blockSize;
        block.height = this.blockSize;
        this.coreBg.addChild(block);
        block.setPosition(position);
        var num = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        block.getComponent("block").setNumber(num);
        this.blocks[x][y] = block;
        this.data[x][y] = num;
        return true;
      },
      getEmptyLocations: function getEmptyLocations() {
        var locations = [];
        for (var i = 0; i < this.blocks.length; i++) for (var j = 0; j < this.blocks[i].length; j++) null == this.blocks[i][j] && locations.push({
          x: i,
          y: j
        });
        return locations;
      },
      updateScore: function updateScore(number) {
        this.score = number;
        this.scoreLabel.string = number;
      },
      onDestroy: function onDestroy() {
        var _this4 = this;
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
          _this4.onKeyDown();
        }, this);
      },
      drawBgBlocks: function drawBgBlocks() {
        this.blockSize = (this.coreBg.getContentSize().width - this.gap * (ROWS + 1)) / ROWS;
        var x = this.gap + this.blockSize / 2;
        var y = this.gap + this.blockSize / 2;
        this.poisitions = [];
        for (var i = 0; i < ROWS; ++i) {
          this.poisitions.push([ 0, 0, 0, 0 ]);
          for (var j = 0; j < ROWS; ++j) {
            var block = cc.instantiate(this.blockPrefab);
            block.width = this.blockSize;
            block.height = this.blockSize;
            this.coreBg.addChild(block);
            block.setPosition(cc.v2(x, y));
            this.poisitions[i][j] = cc.v2(x, y);
            x += this.gap + this.blockSize;
            block.getComponent("block").setNumber(0);
          }
          y += this.gap + this.blockSize;
          x = this.gap + this.blockSize / 2;
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "block", "colors", "game" ]);