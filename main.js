import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import zhouWeiNavBar from "@/components/zhouWei-navBar";
Vue.component("nav-bar", zhouWeiNavBar);
//获取数据
/* const listdata = uni.request({
		url: 'https://www.ujiaquan.com/store/api/zpmall-category/v1/systemVariables/POINT_TO_RMB_FEN',
		data: {
			//"id":null,"name":"today","value":"当日","type":2,"createTime":null,"updateTime":null
			
			},
		method: "GET",
		dataType: "json",  
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			'token':'575bd3d026a6d59dbbb74b71d12ae1'
		}, 
		success: function(res) {
			console.log(res);
			console.log(res.data.data);
		}
}); */

const app = new Vue({
    ...App
})
app.$mount()
