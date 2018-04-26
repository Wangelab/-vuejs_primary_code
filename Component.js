// 组件
// 定义组件
// Vue.component(
// 		'alert',{
// 		// 模板
// 		template:"<button @click='on_click'>谈谈</button>",
// 		// 定义方法
// 		methods:{
// 			on_click:function(){
// 				alert("我要和谈判！！！！！！！！！！！");
// 			}
// 		}
//  );
// 需要给组件一个域
// var ws = new Vue({
// 	el:'#compo',
// 	components:{
// 		'alert':{
// 		// 模板
// 		template:"<button @click='on_click'>谈谈</button>",
// 		// 定义方法
// 		methods:{
// 			on_click:function(){
// 				alert("我要和谈判！！！！！！！！！！！");
// 			}
// 		}
// 	}
// }
// });
var Alert = {
	template:"<button  @click='on_click'>谈谈</button>",
		// 定义方法
		methods:{
			on_click:function(){
				alert("我要和谈判！！！！！！！！！！！");
			}
		}

	};
var like_component = {
	template:"<button :class='{liked: liked}' @click='toggle_like'>赞 {{like_count}}</button>",
	data:function(){
		return{
			like_count:10,
			liked :false,
		}

	},
	methods:{
		toggle_like:function(){
			if(!this.liked){
				this.like_count ++;
			}
			else{
				this.like_count --;
			}
			this.liked = !this.liked;
		}
	}

};
new Vue({
	el:'#compo',
	components:{
		'alert':Alert
	}
});
new Vue({
	el:'#compolike',
	components:{
		'like':like_component
	}
});

//--------------------------
//父子组件通信

//子组件
var balans = {
	template:`
	<div>
	<show @show-balance="show_balance = true"></show>
	<div v-if="show_balance">
	你的余额是￥202
	</div>
	</div>
	`,
	data:function(){
		return{
			show_balance: false
		}
	}
};
//父组件
var shows = {
	template:`
	<button @click='om_click'>显示余额</button>
	`,
	methods:{
		om_click(){
			this.$emit("show-balance", {a:1, b:2});
		}
	}
};
new Vue({
	el:"#balan",
	components:{
		'show': shows ,
		'balance': balans ,
	}

});