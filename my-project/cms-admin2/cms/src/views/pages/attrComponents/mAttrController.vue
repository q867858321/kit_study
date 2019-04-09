<template>
    <section data-page='v-p' class="m_attr_controller">
        <div @click="show">show mAttrController</div>
        <template v-if="itemData.data.subassemblyId===1">
            <mFlippage :item='itemData.data'></mFlippage> 
            2  
        </template>
        <div v-else>
            2
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import mFlippage from "./mFlippage.vue";
export default {
  name: "mAttrController",
  components: {
    mFlippage
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      itemData: state => state.pages.pageChooseTemementData
    })
  },
  methods: {
    show() {
      console.log("mAttrController", this);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
