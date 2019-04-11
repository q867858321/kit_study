
<template>
  <div>
  	<select v-model="site">
  		<option value="Google http://www.google.com">Google http://www.google.com</option>
  		<option value="baidu http://www.baidu.co">baidu http://www.baidu.com</option>
  		<option value="网易 http://www.163.com">网易 http://www.163.com</option>
  	</select>
  	<p>name：{{name}}</p>
  	<p>url：{{url}}</p>
      <p>sit:{{site}}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: "Google",
      url: "http://www.google.com"
    };
  },
  computed: {
    site: {
      // getter
      get: function() {
        return this.name + " " + this.url;
      },
      // setter
      set: function(newValue) {
        let names = newValue.split(" ");
        this.name = names[0];
        this.url = names[names.length - 1];
      }
    }
  }
};
</script>