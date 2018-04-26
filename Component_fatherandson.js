Vue.component('alert',{
	template:'<button @click="on_click"> 弹弹弹</button>',
	props:['msg'],
	methods:{
		on_click: function(){
			alert(this.msg);
		}
	}
});
Vue.component('user',{
	template:'<a :href="\'/user/\'+ username">{{username}}</a>',
	props:['username'],
	methods:{
		
	}
});
Vue.component('balance',{
	template:`
	<div>
		<show @show-balance="show_balance"></show>
		<div v-if="shows">
		你的余额是：￥3849元
		</div>
	</div>

	`,
	methods:{
		show_balance:function(data){
			this.shows = true;
			console.log('data:',data);
		}
	},
	data:function(){
		return{
			shows:false,
		}
	}
});
Vue.component('show',{
	template:`
	<button @click="on_click
	()"> 显示余额 </button>
	`,
	methods:{
		on_click(){
			this.$emit('show-balance',{a:1,b:2});
		}
	}
});
new Vue({
	el:'#comf',
	// components:{
	// 	'alert':dj;
	// }
});