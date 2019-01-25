<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div id="page" class="page_div"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import '../../static/lib/paging'; //引用jquery插件
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    console.log(this)
    $(".hello").on("click",function(){
      console.log($(this).html())
    });
    $("#page").paging({
			pageNo:5,
			totalPage: 9,
			totalSize: 300,
			callback: function(num) {
				alert(num)
			}
		})
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



.page_div {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  font-family: "microsoft yahei";
  color: #666666;
  margin-right: 10px;
  padding-left: 20px;
  box-sizing: border-box;
}
/*
  * 页数按钮样式
  */

.page_div a {
  min-width: 30px;
  height: 28px;
  border: 1px solid #dce0e0!important;
  text-align: center;
  margin: 0 4px;
  cursor: pointer;
  line-height: 28px;
  color: #666666;
  font-size: 13px;
  display: inline-block;
}

#firstPage,
#lastPage {
  width: 50px;
  color: #0073A9;
  border: 1px solid #0073A9!important;
}

#prePage,
#nextPage {
  width: 70px;
  color: #0073A9;
  border: 1px solid #0073A9!important;
}

.page_div .current {
  background-color: #0073A9;
  border-color: #0073A9;
  color: #FFFFFF;
}

.totalPages {
  margin: 0 10px;
}

.totalPages span,
.totalSize span {
  color: #0073A9;
  margin: 0 5px;
}
</style>
