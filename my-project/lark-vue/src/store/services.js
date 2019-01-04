import Axios from 'axios';
import store from './index'

export default {
    getData(){
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        Axios.get(api).then((response)=>{
            store.commit("getArticleList",response.data.result);
        }).catch((error)=>{
            console.log(error);
        })
    }
}
