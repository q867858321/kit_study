import {subassemblyListApi} from '../../api/page'
import Vue from 'vue'
// init content
const spObjInit = {
  'type': 1,
  'content': '',
  'orderNum': 1,
  'isNew': false,
  'title': '',
  'image': {
    'originalUrl': '',
    'originalSize': 11,
    'originalFormat': ''
  }
}
function optionSub (res) {
  try {
    let arr = []
    res.map(item => {
      arr.push({'name': item.name, 'id': item.id})
      item.attributes.map(attr => {
        switch (attr.type) {
          case 'select':
          case 'radio':
            attr.attrOptionList = attr.value.split('|').map(str => str.split(','))
            break
          default:
        }
      })
    })
    return arr
  } catch (err) {
    console.error(err)
  }
}
function getDefaultByItem (attr) {
  switch (attr.type) {
    case 'select':
      return attr.value.split('|')[0].split(',')[0]
    case 'number':
      return attr.value
    case 'radio':
      return attr.value.split('|')[0].split(',')[0]
    case 'color':
      return attr.value
    default:
      return ''
  }
}
const page = {
  namespaced: true,
  state: {
    complistState: null,
    proJectQuery: null,
    pageQuery: null,
    subassemblyList: null,
    //Edit runtime data
    editResult: null,
    editSpecComponentIndex: null,
    projectId: null,
    deletedCompIds: [],
		deletedContIds: []
	},
	getters:{
		editSpecComponent:state=>{
			return (state.editResult||[])[state.editSpecComponentIndex]
		},
		//组件list{id,name}
		getSpecCompAttr: state => {
      let obj
      let id = ((state.editResult || [])[(state.editSpecComponentIndex)] || {}).subassemblyId
			;(state.subassemblyList || []).some(item =>{
        if (id == item.id) {
          obj = item.attributes
          return true
        }
      })
			return obj
		},
		complist:state=>state.complistState,
		//添加组件默认值map
		defaultAddMap:state=>{
			let obj = {}
			;(state.subassemblyList || []).map(item =>{
				let attributes = item.attributes || []
				let attrObj = {};
				attributes.map(attr =>{
					try{
						attrObj[attr.eName]=getDefaultByItem(attr)

					}catch(err){
						console.log(attr,err);
					}
				});
        obj[item.id] = {
					attributes:attrObj,
					subassemblyId:item.id,
					name: item.name
				};
			});
			return obj
		},
	},
	mutations:{
		SET_PROJECTQUERY(state,query){
			state.proJectQuery=query
		},
		SET_PAGEQUERY(state,query){
			state.pageQuery=query
		},
		SET_SUBASSEMBLYLIST(state,res){
			state.complistState = optionSub(res)
			state.subassemblyList = res
		},
    ADD_COMPONENT (state, params) {
		  console.log('add component')
		  console.log(params)
      let editResult = state.editResult || []
      let index = state.editSpecComponentIndex
      let id = +new Date()
      console.log(editResult)
      console.log(index)
      let nObj = Object.assign({...state.pageQuery}, params, {localId: id, attributes: Object.assign({}, params.attributes)})
      if (editResult[index]) {
        editResult.splice(index + 1, 0, nObj)
      } else {
        editResult.push(nObj)
      }
      state.editResult = editResult
    },
    SET_EDITRESULT (state, params) {
      state.editResult = params
    },
		DELETE_COMPONENT(state,params){
			let editResult = state.editResult||[]
			editResult.splice(editResult.indexOf(params),1)
			params.id&&state.deletedCompIds.push(params.id)
		},
		SET_EDITSPECCOMPONENTINDEX(state,data){
			let num = state.editResult.indexOf(data)
			num = num >-1?num:state.editSpecComponentIndex
			if(data&&data.contents&&!data.spObj){
				data.spObj=data.contents[0]
			}
			state.editSpecComponentIndex=num
		},
		SET_EDITSPECATTR(state,params){
			Object.assign(state.editResult[state.editSpecComponentIndex].attributes,params)
		},
		ORDER_EDITRESULT(state,params){
			state.editResult.forEach((iItem,iIndex)=>{
				let contents = iItem.contents
				contents&&contents.forEach((kItem,Kindex)=>{
					kItem.orderNum=Kindex+1
				})
				iItem.orderNum=iIndex+1
			})
		},
		ADD_CONTENT(state,{content,keyId}){
			let editSpecComponent =keyId;
			let nOjb={};
			if (editSpecComponent.name=="Tab") {
				nOjb.type=2
			}
			if (editSpecComponent.contents) {
				editSpecComponent.contents.push({...spObjInit,...nOjb})
			} else {
				editSpecComponent.contents=[{...spObjInit,...nOjb}]
			}
			editSpecComponent.localId = +new Date()
		},
		UPDATE_CONTENT(state,params){
			let editSpecComponent = state.editResult[state.editSpecComponentIndex]
			editSpecComponent.contents = params;
			editSpecComponent.localId = +new Date()
		},
		UPDATA_SPOBJ(state,{content,keyId}){
			let editSpecComponent =keyId||state.editResult[state.editSpecComponentIndex]
			editSpecComponent.spObj=content
			editSpecComponent.localId = +new Date()
		},
		RESET_SPOBJ(state,oldSpObj){
			let editSpecComponent =state.editResult[state.editSpecComponentIndex]
			let oldIndex = editSpecComponent.contents.indexOf(oldSpObj)
			let type=1
			if(oldSpObj.type!=2){type=2}
			let newO = Object.assign(oldSpObj,spObjInit,{
				type:type,
			})
			editSpecComponent.contents.splice(oldIndex,1,newO)
			editSpecComponent.spObj=newO
			editSpecComponent.localId = +new Date()
		},
		UPDATE_EDITSPECCONTENTINDEX(state,index){
			state.editSpecContentIndex = index
		},
		DELETE_CONTENT(state,params){
			let editSpecComponent = state.editResult[state.editSpecComponentIndex]
			let num = editSpecComponent.contents.indexOf(params)
			if(params.id){
				state.deletedContIds.push(params.ids)
			}
			editSpecComponent.contents.splice(num,1)
			editSpecComponent.localId = +new Date()
		},
	},
  actions: {
		deleteContent ({commit,state},params){
			commit("DELETE_CONTENT",params)
			let editSpecComponent = state.editResult[state.editSpecComponentIndex]
			if(params==editSpecComponent.spObj&&editSpecComponent.contents.length){
				commit("UPDATA_SPOBJ",{content:editSpecComponent.contents[0]})
			}
		},
		setContent ({commit,state},params) {
			commit("SET_CONTENT",params)
		},
		addContent({commit,state},{content,keyId}){
			commit("ADD_CONTENT",{content,keyId})
			let editSpecComponent = keyId
			if(editSpecComponent.contents.length==1 && editSpecComponent.spObj!=editSpecComponent.contents[0]){
				commit("UPDATA_SPOBJ",{content:editSpecComponent.contents[0],keyId})
			}
		},
		updateEditSpecContentIndex({commit},index){
			commit("UPDATE_EDITSPECCONTENTINDEX",index)
		},
		updateContent({commit},params){
			commit("UPDATE_CONTENT",params)
		},
		setEditResult({commit},params){
			commit("SET_EDITRESULT",params)
		},
		orderEditResult({commit},params){
			commit("ORDER_EDITRESULT",params)
		},
		setEditSpecAttr({commit},params){
			commit("SET_EDITSPECATTR",params)
		},
		setEditSpecComponentIndex({commit},data){
			commit("SET_EDITSPECCOMPONENTINDEX",data)
			//commit("UPDATE_EDITSPECCONTENTINDEX",0)
		},
		addComponent({commit}, params){
			commit("ADD_COMPONENT",params)
		},
		deleteComponent({commit},params){
			commit("DELETE_COMPONENT",params)
		},
		setProJectQuery({commit},query){
			commit("SET_PROJECTQUERY",query)
		},
		setProPageQuery({commit},query){
			commit("SET_PAGEQUERY",query)
		},
		setSubassemblyList({commit},query){
			return new Promise(resolve=>{
				subassemblyListApi().then(res=>{
					commit("SET_SUBASSEMBLYLIST",res)
					resolve()
				}).catch(err=>{
					resolve()
					console.log(err);
				})
			})
		},
	},
}

export default page
