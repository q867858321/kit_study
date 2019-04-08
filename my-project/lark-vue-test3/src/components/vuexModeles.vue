<template>
    <div class="vuex_modeles">
        <span @click="change">vue-btn</span>
        {{isShow}}
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
    name:'vuexModles',
    computed:{
        ...mapState({
            isShow:state=>state.footerStatus.showFooter
        })
    },
    watch:{
        $route(to,from){
            if(to.name=='book'||to.name=='my'){
                this.$store.dispatch('footerStatus/showFooter')
            }else{
                this.$store.dispatch('footerStatus/hideFooter')
            }
        }
    },
    mounted:function(){
        console.log("vuexModeles",this);
    },
    methods:{
        change:function(){
            this.$store.dispatch('footerStatus/showFooter')
        }
    }
    
}
</script>

<style>

</style>
