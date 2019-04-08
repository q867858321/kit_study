<template>
    <div>
        <input type="button" 
               value="我是父组件中的按钮" 
               @click="show">
        <!-- <child @upIsShow="changeIsShow" v-show="isShow"/> -->
        <!-- <child @upIsShow:isShow="changeIsShow" v-show="isShow"/> -->
        <!-- <child @upIsShow:isShow="function(bol){isShow=bol}" v-show="isShow"/> -->
        <!-- <child @upIsShow:isShow="bol=>isShow=bol" v-show="isShow"/> -->
            <child :isShow11.sync="isShow" v-show="isShow"/>
            {{this.$store.state.footerStatus.changableNum}}
    </div>
</template>
<script>
    import child from "@/components/child"
    export default {
        data() {
            return {
                isShow:false
            }
        },
        components:{
            child
        },
        mounted:function(){
           // console.log("Fauther",this);
        },
        methods:{
            show(){
                this.isShow=true;
            },
            // changeIsShow(bol){
            //     this.isShow=bol;
            // }
        }
    }
</script>