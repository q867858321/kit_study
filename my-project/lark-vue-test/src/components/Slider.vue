
<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container clear" :style="containerStyle">
        <li>
          <img :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li v-for="(item, index) in sliders" :key="index">
          <img :src="item.img" alt="">
        </li>
        <li>
          <img :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>          
        </li>
        <li class="right" @click="move(600, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>          
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i"  :class="{dotted: i === (currentIndex-1)}"  @click = jump(i+1)></li>
      </ul>
    </div>
  </div>
</template>
 
<script>
    export default {
        name: 'slider',
        props: {
            initialSpeed: {
                type: Number,
                default: 30
            },
            initialInterval: {
                type: Number,
                default: 4
            }
        },
        data () {
            return {
            sliders:[
                { img:'../../static/img/a1.png'},
                { img:'../../static/img/a1.png'},
                { img:'../../static/img/a1.png'},
                { img:'../../static/img/a1.png'},
                { img:'../../static/img/a1.png'},
            ],
            currentIndex:1,
            distance:-600,
            transitionEnd: true,
            speed: this.initialSpeed
            }
        },
        computed:{
            containerStyle() {
                return {
                    transform:`translate3d(${this.distance}px, 0, 0)`
                }
            },
            interval() {
                return this.initialInterval * 1000
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init() {
                this.play()
                window.onblur = function() { this.stop() }.bind(this)
                window.onfocus = function() { this.play() }.bind(this)
            },
            move(offset, direction, speed) {
                if (!this.transitionEnd){
                    return;
                } 
                this.transitionEnd = false;
                direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600;
                if (this.currentIndex > 5){
                    this.currentIndex = 1;
                } 
                if (this.currentIndex < 1){
                    this.currentIndex = 5;
                } 
            
                const destination = this.distance + offset * direction;
                this.animate(destination, direction, speed);
            },
            animate(des, direc, speed) {
                if (this.temp) { 
                    window.clearInterval(this.temp);
                    this.temp = null;
                }
                this.temp = window.setInterval(() => {
                    if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
                    this.distance += speed * direc;
                    } else {
                    this.transitionEnd = true;
                    window.clearInterval(this.temp);
                    this.distance = des;
                    if (des < -3000) this.distance = -600;
                    if (des > -600) this.distance = -3000;
                    }
                }, 20)
            },
            jump(index) {
                const direction = index - this.currentIndex >= 0 ? -1 : 1;
                const offset = Math.abs(index - this.currentIndex) * 600;
                const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
                this.move(offset, direction, jumpSpeed);
            },
            play() {
                if (this.timer) {
                    window.clearInterval(this.timer);
                    this.timer = null;
                }
                this.timer = window.setInterval(() => {
                    this.move(600, -1, this.speed);
                }, this.interval)
            },
            stop() {
                window.clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
</script>
<style scoped>
.clear:after{content:"";display: block;clear: both;}
.clear{zoom:1;}
*{padding:0;margin:0;}
li{list-style: none;}
    .window{width:600px;overflow: hidden;position: relative;}
    .container{display: flex;}
    .container li{width:600px;}
    .container li img{width:600px;}

    .direction{position: absolute;top: 0;width:100%;}
    .direction li{position:absolute;top:200px;}
    .direction li.left{left:50px;}
    .direction li.right{right:50px;}

    .dots{position: absolute;bottom: 10px;width:100%;}
    .dots li{display: inline-block;margin:0 5px;width:10px;height:10px;border-radius: 50%;background: #fff;}
    .dots li.dotted{background: #f00;}
</style>
