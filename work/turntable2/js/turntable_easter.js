// var host = 'http://pd1-test.shalltry.com'
// var host = 'http://twww.hippoobox.com'
//var host = 'https://www.hippoobox.com'
var langsBtn = $('.langs-btn');
var btnGoBack = $('#btnGoBack');
var langsList = $('.langs-list');
var startBtn = $('.start-btn');
var wrap = $('.wrap');
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
var GiftOneModal = $('.gift-one-modal');
var GiftTwoModal = $('.gift-two-modal');
var GiftThreeModal = $('.gift-three-modal');
var GiftFourModal = $('.gift-four-modal');
var GiftFiveModal = $('.gift-five-modal');
var GiftSixModal = $('.gift-six-modal');
var awardClose = $('.award-close');
var awardModal = $('.award-modal');
var countNum = $('.count-num');
var coinsNum = $('.coins-num');
var userCoins = $('.user-coins');
var tableRule = $('.table-rule');
var ruleText = $('#ruleText');
var ruleTitle = $('#ruleTitle');
var ruleDesp = $('#ruleDesp');
var carryOn = $('#carryOn');
var carryOnClose = $('#carryOnClose');
var carryOnDesp = $('#carryOnDesp');
var carryOnFoot = $('#carryOnFoot');
var carryOnCoins = $('#carryOnCoins');
var oneMoreTry = $('#oneMoreTry');
var pageTitle = $('#pageTitle');
var awardList = [GiftOne, GiftTwo, GiftThree, GiftFour, GiftFive, GiftSix]
var awardModalList = [GiftOneModal, GiftTwoModal, GiftThreeModal, GiftFourModal, GiftFiveModal, GiftSixModal]
var awardModaImagelList = [],awardModaTitlelList = []
awardModalList.forEach(function (e) {
  awardModaImagelList.push(e.find('img'))
  awardModaTitlelList.push(e.find('p'))
})

var i18n = {
  "zh":{
    "Rules":"活动规则",
    "RuleDesp": "参与获得即有机会获得奖品，每天都有免费参与机会，奖品在活动结束后5-10个工作日安排发货，请耐心等待。",
    "FreeEmptyTip":"免费参与次数已经用完，是否需要继续参与抽奖？",
    "GiveUpDraw":"放弃抽奖",
    "CarryOn": "继续",
    'Title': '复活节快乐',
    "EarnGold":"去赚金币",
    "EmptyCoin":"金币不足",
    "giftOne": "礼品篮",
    "giftTwo": "化妆品套装",
    "giftThree": "假期",
    'giftFour': '谢谢参与',
    "giftFive": "巧克力",
    "giftSix": "手机",
    'close': '关闭',
    'OneMoreTry': '继续参与赢大奖！',
  },
  "en":{
    "Rules":"Activity Rules",
    "RuleDesp": "If you participate in the acquisition, you will have the opportunity to receive the prizes. There will be free participation opportunities every day. Prizes will be shipped within 5-10 working days after the event.",
    "FreeEmptyTip":"The number of free participations has been exhausted. Do you need to continue to participate in the lucky draw?",
    "GiveUpDraw":"Give up the draw",
    "CarryOn":"Carry on",
    "EarnGold":"To earn gold coins",
    'Title': 'Happy Easter',
    "EmptyCoin":"Lack of gold coins",
    "giftOne": "Gift basket",
    "giftTwo": "Makeup kit",
    "giftThree": "Vacation",
    'giftFour': 'Thanks',
    "giftFive": "Chocolate box",
    "giftSix": "Mobile Phone",
    "close": "Close",
    'OneMoreTry': 'Mainkan lebih banyak, Menang lebih besar',
  },
  "ar":{
    "Rules":"قاعدة النشاط",
    "RuleDesp": "إذا شاركت في عملية الاستحواذ ، ستتاح لك الفرصة لتلقي الجوائز. ستكون هناك فرص مشاركة مجانية كل يوم. سيتم شحن الجوائز خلال 5-10 أيام عمل بعد الحدث.",
    "FreeEmptyTip":"لقد تم استنفاد عدد التنزيلات المجانية. هل تحتاج إلى الاستمرار في المشاركة في السحب؟",
    "GiveUpDraw":"التخلي عن القرعة",
    "CarryOn":"استمر",
    "EarnGold": "لكسب العملات الذهبية",
    'Title': 'عيد فصح سعيد',
    "EmptyCoin":"عدم وجود العملات الذهبية",
    "giftOne": "سلة هدايا",
    "giftTwo": "طقم ماكياج",
    "giftThree": "عطلة",
    'giftFour': 'شكرا على المشاركة',
    "giftFive": "صندوق شكولاتة",
    "giftSix": "الهاتف المحمول",
    'OneMoreTry': ' العب أكثر ، اربح أكبر！',
    'close': 'أغلق',
  },
  "ar-eg": {
    "Rules": "قاعدة النشاط",
    "RuleDesp": "إذا شاركت في عملية الاستحواذ ، ستتاح لك الفرصة لتلقي الجوائز. ستكون هناك فرص مشاركة مجانية كل يوم. سيتم شحن الجوائز خلال 5-10 أيام عمل بعد الحدث.",
    "FreeEmptyTip": "لقد تم استنفاد عدد التنزيلات المجانية. هل تحتاج إلى الاستمرار في المشاركة في السحب؟",
    "GiveUpDraw": "التخلي عن القرعة",
    "CarryOn": "استمر",
    "EarnGold": "لكسب العملات الذهبية",
    'Title': 'عيد فصح سعيد',
    "EmptyCoin": "عدم وجود العملات الذهبية",
    "giftOne": "سلة هدايا",
    "giftTwo": "طقم ماكياج",
    "giftThree": "عطلة",
    'giftFour': 'شكرا على المشاركة',
    "giftFive": "صندوق شكولاتة",
    "giftSix": "الهاتف المحمول",
    'OneMoreTry': ' العب أكثر ، اربح أكبر！',
    'close': 'أغلق',
  },
  "fr":{
    "Rules":"Règle d'activité",
    "RuleDesp": "Si vous participez à l’acquisition, vous aurez l’occasion de recevoir les prix. Il y aura des possibilités de participation gratuite chaque jour. Les prix seront expédiés dans les 5 à 10 jours ouvrables suivant l'événement. ",
    "FreeEmptyTip":"Le nombre de téléchargements gratuits est épuisé. Avez-vous besoin de continuer à participer au tirage au sort?",
    "GiveUpDraw":"Abandonner le tirage",
    "CarryOn":"Continuer",
    "EarnGold":"Gagner des pièces d'or",
    'Title': 'Joyeuses Pâques',
    "EmptyCoin": "Manque de pièces d'or",
    "giftOne": "Panier cadeau",
    "giftTwo": "Kit de maquillage",
    "giftThree": "Les vacances",
    'giftFour': 'Merci d`avoir participé',
    "giftFive": "Boîte de chocolat",
    "giftSix": "Téléphone portable",
    'OneMoreTry': 'Jouez plus, gagnez plus gros',
    'close': 'Fermer',
    "Lucky":"Prix chanceux"
  },
  "sw":{
    "Rules":"Utawala wa shughuli",
    "RuleDesp": "Ikiwa unashiriki katika upatikanaji, utakuwa na nafasi ya kupokea tuzo. Kutakuwa na fursa za ushiriki wa bure kila siku. Tuzo zitatumwa ndani ya siku 5-10 za kazi baada ya tukio hilo. ",
    "FreeEmptyTip":"Idadi ya kupakuliwa huru imechoka. Je! Unahitaji kuendelea kushiriki katika kuteka bahati?",
    "GiveUpDraw":"Toa kuteka",
    "CarryOn":"Endelea",
    "EarnGold":"Ili kupata sarafu za dhahabu",
    'Title': 'Pasaka njema',
    "EmptyCoin":"Ukosefu wa sarafu za dhahabu",
    "giftOne": "Kipawa chawadi",
    "giftTwo": "Babies kit",
    "giftThree": "Likizo",
    'giftFour': 'Asante kwa kushiriki',
    "giftFive": "Sanduku la chokoleti",
    "giftSix": "Simu ya mkononi",
    'OneMoreTry': 'Jaribu zaidi, Ghinda kubwa!',
    'close': 'karibu',
  },
  "th":{
    "Rules":"กฎกิจกรรม",
    "RuleDesp": "หากคุณเข้าร่วมในการซื้อกิจการคุณจะมีโอกาสได้รับรางวัล จะมีโอกาสเข้าร่วมฟรีทุกวัน รางวัลจะถูกจัดส่งภายใน 5-10 วันทำการหลังจากเหตุการณ์",
    "FreeEmptyTip":"จำนวนการดาวน์โหลดฟรีหมดลงแล้ว คุณจำเป็นต้องมีส่วนร่วมในการจับสลากหรือไม่?",
    "GiveUpDraw":"เลิกวาด",
    "CarryOn":"ต่อ",
    "EarnGold":"เพื่อหาเหรียญทอง",
    'Title': 'สุขสันต์วันอีสเตอร์',
    "EmptyCoin":"ขาดเหรียญทอง",
    "giftOne": "กระเช้าของขวัญ",
    "giftTwo": "ชุดแต่งหน้า",
    "giftThree": "วันหยุด",
    'giftFour': 'ขอบคุณที่เข้าร่วม',
    "giftFive": "กล่องช็อคโกแลต",
    "giftSix": "โทรศัพท์มือถือ",
    'OneMoreTry': 'เล่นมากขึ้นลุ้นใหญ่!',
    'close': 'ปิด',
  },
  "id":{
    "Rules":"Aturan aktivitas",
    "RuleDesp": "Jika Anda berpartisipasi dalam akuisisi, Anda akan memiliki kesempatan untuk menerima hadiah. Akan ada peluang partisipasi gratis setiap hari. Hadiah akan dikirim dalam waktu 5-10 hari kerja setelah acara.",
    "FreeEmptyTip":"Jumlah unduhan gratis telah habis. Apakah Anda perlu terus berpartisipasi dalam undian berhadiah?",
    "GiveUpDraw":"Lepaskan undian",
    "CarryOn":"Lanjutkan",
    "EarnGold":"Untuk mendapatkan koin emas",
    'Title': 'Selamat Hari Paskah',
    "EmptyCoin":"Kekurangan koin emas",
    "giftOne": "Keranjang hadiah",
    "giftTwo": "Perangkat rias",
    "giftThree": "Liburan",
    'giftFour': 'Terima kasih',
    "giftFive": "Kotak cokelat",
    "giftSix": "Ponsel",
    'OneMoreTry': 'Mainkan lebih banyak, Menang lebih besar',
    'close': 'dekat',
  }
}
let mulitImg = [
  '/turntable/images-easter/luckyTurntable2.webp',
  '/turntable/images-easter/bj.webp',
  '/turntable/images-easter/arrow.webp',
  '/turntable/images-easter/start2.webp',
  '/turntable/images-easter/gift-basket-200x200.webp',
  '/turntable/images-easter/make-up-kit-200x200.webp',
  '/turntable/images-easter/vacation-200x200.webp',
  '/turntable/images-easter/thanks-200x200.webp',
  '/turntable/images-easter/chocolate-box_200x200.webp',
  '/turntable/images-easter/phone-200x200.webp',
  '/turntable/images2/coins.png',
  '/turntable/images-easter/count2.webp'
]
// 默认配置
var options = {
  awards:[
    {id: 105, name: 'Gift basket', imgurl: '/turntable/images-easter/gift-basket-200x200.webp'},
    {id: 101, name: 'Makeup kit', imgurl: '/turntable/images-easter/make-up-kit-200x200.webp'},
    {id: 103, name: 'Vacation', imgurl: '/turntable/images-easter/vacation-200x200.webp'},
    {id: 0, name: 'Thanks', imgurl: '/turntable/images-easter/thanks-200x200.webp'},
    {id: 104, name: 'Chocolate box', imgurl: '/turntable/images-easter/chocolate-box_200x200.webp'},
    {id: 102, name: 'Mobile Phone', imgurl: '/turntable/images-easter/phone-200x200.webp'},
  ],
  bgColor:'#FF821B',
  bgImage:'/1/images/bg.png',
  bgLightImage: '/1/images/',
  bgTableLightImage:'/1/images/light.png',
  bgTableBorderImage:'/1/images/panelc.png',
  bgTableImage: '/1/images/panel.png',
  bgStartImage: '/1/images/start.png',
  bgGuide: '/1/images/pointer.png',
  hasGuide: true,
  rule:'Rules',
  ruleText:'RuleDesp',
  title: 'Title',
  OneMoreTry: 'OneMoreTry',
  EarnGold: 'EarnGold',
  EmptyCoin: 'EmptyCoin',
  FreeEmptyTip:"FreeEmptyTip",
  GiveUpDraw:"GiveUpDraw",
  CarryOn: "CarryOn",
  close: "close"
}
function testStore(name) {
  try {
    localStorage.getItem('hippoodraw_2')
    localStorage.setItem('hippoodraw_2','test')
    return true
  }catch (e) {
    return false
  }
}
var getStore = testStore()?function (name) {
  var rtv = localStorage.getItem(name)
  try {
    rtv = JSON.parse(rtv)
    return rtv
  }catch (e) {
    return rtv
  }
}:function (name) {
  return null
}
var setStore = testStore()?function (name, data) {
  return localStorage.setItem(name, JSON.stringify(data))
}:function (name, data) {
  return null
}
function updateOptionsLang(lang, options) {
  var langs = i18n[lang]
  var curLangs = i18n[curLang]
  for(var i in options){
    if(i==='oneMoreTry')debugger
    if(typeof options[i] === 'object')updateOptionsLang(lang, options[i])
    else if(langs[options[i]]){
      options[i]=langs[options[i]]
    }else {
      for(var v in curLangs){
        if(curLangs[v] === options[i]){
          options[i]=langs[v]
          break
        }
      }
    }
  }
}

function renderDomLang() {
  awardModalList.forEach(function (e, i) {
    e.find('p').text(options.awards[i].name)
  })
  tableRule.text(options.rule + ' > >')
  ruleTitle.text(options.rule)
  ruleDesp.text(options.ruleText)
  awardClose.text(options.close)
  oneMoreTry.text(options.OneMoreTry)
  pageTitle.text(options.title)
}
function updateLang(lang){
  updateOptionsLang(lang,options)
  setStore('lang', lang)
  if(lang==='ar'||lang==='ar-eg'){
    $(document.body).addClass('rtl')
  } else {
    $(document.body).removeClass('rtl')
  }
  renderDomLang()
  curLang = lang
}

var curLang='en',lang;
var search = {}
var searchString = location.search
if(searchString){
  if(searchString[0]==='?')searchString=searchString.substr(1)
  searchString.split('&').forEach(function (e) {
    var nvs = e.split('=')
    search[nvs[0]] = nvs[1] || true
  })
}
lang = search.lang || getStore('lang') ||navigator.language
if(!i18n[lang] && !i18n[lang=lang.substr(0,2)]){
  lang = 'en'
}
updateLang('en')

langsList.on('click','li',function (e) {
  var lang = Object.keys(i18n)[$(e.target||e.srcElement).index()]
  updateLang(lang)
  langsList.hide()
  if(window.hippoo)hippoo.setStore({lang:lang})
})
btnGoBack.click(function () {
	history.go(-1);
  // location.href=host + (location.search ? location.search : '') + (location.hash ? location.hash : '')
})


//语言列表显示消失
langsBtn.click(function () {
  langsList.toggle();
})

wrap.click(function () {
  langsList.hide();
})

/*抽奖*/
function runTable(){
  cur++;
  startBtn.addClass('shrink');
  setTimeout(function () {
    startBtn.removeClass('shrink');
  }, 350);
  var arr=[30];
  var len=arr.length;
  var num=Math.floor(Math.random()*len);
  var deg=arr[num];
  turntable.css('transform', 'rotate('+(deg+2160*cur) + 'deg)');
  turntable.css('transition', 'transform 5s ease-in-out');

  var now = Date.now()
  var pre = getStore('lastplayTime')||0
  if(pre&&(now-pre>86400000)){
    gtag('event', 'rejoin', {
      'event_category': 'Activity'
    })
  }else{
    gtag('event', 'join', {
      'event_category': 'Activity'
    })
  }
}
function showAd(){
  zhezhao.show();
  setTimeout(function () {
    modal.css('transition','all .3s linear');
    modal.css('top','50%');
  },5000);
}
var carryType = 0;
function showTipModal(type){
  carryType = type
  if(type === 1){
    carryOnCoins.show()
    carryOnDesp.text(options.FreeEmptyTip)
    carryOnFoot.text(options.CarryOn)
  } else if(type === 0) {
    carryOnCoins.hide()
    carryOnDesp.text(options.EmptyCoin)
    carryOnFoot.text(options.EarnGold)
  }
  zhezhao.show()
  carryOn.show()
}
carryOnClose.click(function () {
  zhezhao.hide()
  carryOn.hide()
})
carryOnFoot.click(function () {
  zhezhao.hide()
  carryOn.hide()
  if(carryType===1){
    setStore('playTime', Date.now())
    playTable()
    runTable()
    showAd()
    refreshNums()
  } else if(carryType ===0 ){
    location.href = host + (location.search ? location.search : '') + (location.hash ? location.hash : '')
  }
})
function play(type) {
  if(type)playTable()
  runTable()
  showAd()
  refreshNums()
}
startBtn.click(function () {
  if(hasLogin && total>=bonus){
    if(count>0){
      play(1)
    }else{
      showTipModal(1)
    }
  } else {
    if (hasLogin){
      if(total<bonus){
        showTipModal(0)
      }
    } else{
      count --;
      //未登录本地次数小于0停止并提示登录
      if(count <0){
        count = 0;
        if(window.hippoo && typeof hasLogin !== 'undefined'){
          hippoo.login().then(function (user) {
            total = user.goldcoin || 0
            initNums()
            console.log(user)
          }).catch(function (err) {
            console.log('loginerr', err)
          })
        }
        return;
      }
      playRecords.push(Date.now())
      setStore('playRecords', playRecords)
      setStore('playTime', Date.now())
      runTable()
      showAd()
      refreshNums()
    }
  }
})
tableRule.click(function () {
  awardZhezhao.show();
  ruleText.show()
})
congClose.click(function () {
  modal.css('transition','all .1s linear');
  modal.css('top','-100%');
  zhezhao.hide()
})

GiftOne.click(function () {
  awardZhezhao.show();
  GiftOneModal.show();
})

GiftTwo.click(function () {
  awardZhezhao.show();
  GiftTwoModal.show();
})

GiftThree.click(function () {
  awardZhezhao.show();
  GiftThreeModal.show();
})

GiftFour.click(function () {
  awardZhezhao.show();
  GiftFourModal.show();
})
GiftFive.click(function () {
  awardZhezhao.show();
  GiftFiveModal.show();
})
GiftSix.click(function () {
  awardZhezhao.show();
  GiftSixModal.show();
})

awardClose.click(function () {
    awardZhezhao.hide();
    awardModal.hide();
})

awardZhezhao.click(function () {
  awardZhezhao.hide();
  awardModal.hide();
})


function refreshNums(res){
  res = res || { free: count, total:total}
  count = res.free
  total = res.total
  countNum.text(count)
  coinsNum.text(total)
}
function playTable(){
  return hippoo.api('user/turntable', {code: 'circle_turntable', action: 'play'}).then( function(res){
    refreshNums(res)
    return res
  })
}
function initNums(){
  var _playRecords = (playRecords || []).filter(function (v) {
    return v
  })
  return hippoo.api('user/syncturntable', {
    code: 'circle_turntable',
    reqstamp: new Date().getTimezoneOffset() * 60,
    records: _playRecords.map(function (t) { return Math.round(t / 1000) }).join(',')
  }).then((res) => {
    playRecords = new Array(playRecords.length)
    setStore('playRecords', playRecords)
    return hippoo.api('user/turntable', {code: 'circle_turntable'}).then(function (res) {
      hasLogin = true
      bonus = Math.abs(Number(res.bonus))
      refreshNums(res)
    })
  }).catch(function (err) {
    hasLogin=false
    refreshNums()
  })

}
function isFutureDay (t) {
  t = t || 0;
  if (!t.toDateString)t = new Date(t)
  let now = new Date()
  return now > t && t.toDateString() !== now.toDateString()
}
var cur = 0;
// 转盘记录
var playRecords,playTime;
var hasLogin,count,bonus,total=0;
if(playRecords = getStore('playRecords')){
  var len = playRecords.length
  if(len>0){
    var playTime = getStore('playTime')
    if (isFutureDay(playTime)){
      len = 0
      playRecords = []
    }
  }
  count = Math.max(0, (5 - len))
} else {
  count = 5
  playRecords = []
}
setStore('playRecords', playRecords)
//watch image resource load status 
let promiseAll = [],
  img = [],
  imgTotal = mulitImg.length;
for (let i = 0; i < imgTotal; i++) {
  promiseAll[i] = new Promise((resolve, reject) => {
    img[i] = new Image()
    img[i].src = mulitImg[i]
    img[i].onload = function () {
      resolve(img[i])
    }
  })
}
Promise.all(promiseAll).then((img) => {
  gtag('event', 'exposure', {
    'event_category': 'activity',
  })
})

window.hippooInit = function (hippoo) {
  initNums()
  hippoo.getStore('lang').then(function (res) {
    if(typeof res === 'string' && lang !== res)updateLang(res)
  })
  userCoins.click(function () {
    if(!hasLogin){
      hippoo.login().then(function (user) {
        total = user.goldcoin || 0
        initNums()
      }).catch(function (err) {
        console.log('loginerr', err)
      })
    } else {
      location.href = host + '/treasure' + (location.search ? location.search : '') + (location.hash ? location.hash : '')
    }
  })
}


