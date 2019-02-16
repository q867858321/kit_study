<template>
    <div>
        <select v-model='selection' @change="getSelected">
            <option :value="item.id" v-for="(item,index) in selectedList" :key="index">
                {{item.name}}
            </option>
        </select>
        <p>{{selection}}</p>
    </div>
</template>

<script>
export default {
    name:'Form',
    data(){
        return{
           selectedList:[
               {id:"A",name:"优惠券1"},
               {id:"B",name:"优惠券2"},
               {id:"C",name:"优惠券3"},
               {id:"D",name:"优惠券4"}
           ],
            selection:"A"  //默认选中的
        }
    },
    created(){
        //this.selection=this.selectedList[0].id;
    },
    methods:{
        getSelected(e){
            console.log(e);
        },
    }
}
</script>

<style>

</style>
