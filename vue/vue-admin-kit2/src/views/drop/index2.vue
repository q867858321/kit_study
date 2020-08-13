<template>
  <div class="noticeBoard">
    33
    <div>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <transition-group tag="div" name="list-complete">
          <div class="list-complete-item" v-for="(element, index) in list1" :key="element.name">
            <div class="styleclass dargDiv">{{element.name}}</div>
            <div class="styleclass">{{element.name}}</div>
          </div>
        </transition-group>
      </draggable>
    </div>3334
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      list1: [
        { name: "John1", age: { name: 3 }, id: 1 },
        { name: "Joao2", age: 2, id: 2 },
        { name: "Jean3", age: 3, id: 3 },
        { name: "Gerard4", age: 4, id: 4 }
      ]
    };
  },
  components: {
    draggable
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log(evt) {
      window.console.log(evt);
      console.log(this.list1);
    }
  },
  created() {},
  mounted() {
    // document.body.ondrop = function(event) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // };
  }
};
</script>

<style scoped >
.list-complete-item {
  transition: all 1s;
  height: 50px;
  line-height: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
  display: flex;
}

.styleclass {
  width: 100px;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}

.list-complete-sortable-chosen,
.list-complete-sortable-ghost {
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}

.dargDiv {
  cursor: move;
  background: red;
}
</style>

