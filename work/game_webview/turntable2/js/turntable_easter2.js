var langsBtn = $('.langs-btn');
var btnGoBack = $('#btnGoBack');
var langsList = $('.langs-list');
var startBtn = $('.start-btn');
var turntable = $('.turntable');
var zhezhao = $('.zhezhao');
var awardZhezhao = $('.award-zhezhao');
var GiftOne = $('.gift-one');
var GiftTwo = $('.gift-two');
var GiftThree = $('.gift-three');
var GiftFour = $('.gift-four');
var GiftFive = $('.gift-five');
var GiftSix = $('.gift-six');
var modal = $('.modal');
var congClose = $('.cong_close');
var awardClose = $('.award-close');
var awardModal = $('.award-modal');
var countNum = $('.count-num');
var coinsNum = $('.coins-num');
var userCoins = $('.user-coins');
var tableRule = $('.table-rule');
var ruleText = $('#ruleText');
var ruleTitle = $('#ruleTitle');
var ruleDesp = $('#ruleDesp');
var oneMoreTry = $('#oneMoreTry');
var pageTitle = $('#pageTitle');
// 默认配置

function testStore(name) {
  try {
    localStorage.getItem('hippoodraw_2')
    localStorage.setItem('hippoodraw_2', 'test')
    return true
  } catch (e) {
    return false
  }
}
var getStore = testStore() ? function (name) {
  var rtv = localStorage.getItem(name)
  try {
    rtv = JSON.parse(rtv)
    return rtv
  } catch (e) {
    return rtv
  }
} : function (name) {
  return null
}
var setStore = testStore() ? function (name, data) {
  return localStorage.setItem(name, JSON.stringify(data))
} : function (name, data) {
  return null
}

/*抽奖*/
function runTable() {
  cur++;
  startBtn.addClass('shrink');
  setTimeout(function () {
    startBtn.removeClass('shrink');
  }, 350);
  var arr = [0, 30];
  var len = arr.length;
  var num = Math.floor(Math.random() * len);
  var deg = arr[num];
  turntable.css('transform', 'rotate(' + (deg + 2160 * cur) + 'deg)');
  turntable.css('transition', 'transform 5s ease-in-out');

  var now = Date.now()
  var pre = getStore('lastplayTime') || 0
  if (pre && (now - pre > 86400000)) {
    // gtag('event', 'rejoin', {
    //   'event_category': 'Activity'
    // })
  } else {
    // gtag('event', 'join', {
    //   'event_category': 'Activity'
    // })
  }
}

function showAd() {
  zhezhao.show();
  setTimeout(function () {
    modal.css('transition', 'all .3s linear');
    modal.css('top', '50%');
  }, 5000);
}

function play(type) {
  runTable()
  showAd()
  refreshNums()
}
startBtn.click(function () {
  console.log("count", count);
  if (count > 0) {
    count--;
    playRecords.push(Date.now());
    setStore('playRecords', playRecords);
    setStore('playTime', Date.now());
    runTable();
    showAd()
    refreshNums()
  } else {
    alert("次数已用完！");
  }

})
tableRule.click(function () {
  awardZhezhao.show();
  ruleText.show()
})
congClose.click(function () {
  modal.css('transition', 'all .1s linear');
  modal.css('top', '-100%');
  zhezhao.hide();
})

awardClose.click(function () {
  awardZhezhao.hide();
  awardModal.hide();
})

awardZhezhao.click(function () {
  awardZhezhao.hide();
  awardModal.hide();
})


function refreshNums(res) {
  res = res || {
    free: count,
    total: total
  }
  count = res.free
  total = res.total
  countNum.text(count)
  coinsNum.text(total)
}

function isFutureDay(t) {
  t = t || 0;
  if (!t.toDateString) t = new Date(t)
  let now = new Date()
  return now > t && t.toDateString() !== now.toDateString()
}
var cur = 0;
// 转盘记录
var playRecords, playTime;
var hasLogin, count, bonus, total = 0;
if (playRecords = getStore('playRecords')) {
  var len = playRecords.length
  if (len > 0) {
    var playTime = getStore('playTime')
    if (isFutureDay(playTime)) {
      len = 0
      playRecords = []
    }
  }
  count = Math.max(0, (5 - len))
} else {
  count = 5
  playRecords = [];
  refreshNums();
}
setStore('playRecords', playRecords)