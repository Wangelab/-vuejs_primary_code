var routes = [{
	// 定义规则
	path:'/',
	component:{
		template:`
		<div>
			<h1>首页</h1>
		</div>
		`
	}
},
{
	// 定义规则
	path:'/about',
	component:{
		template:`
		<div>
			<h1>关于我们</h1>
		</div>
		`
	}
},
{
	// 定义规则
	path:'/user/:name',
	name:'user',
	component:{
		template:`
		<div>
			<h1>我叫：{{$route.params.name}}</h1>
			<h1>我今年：{{$route.query.age}}岁了</h1>
			<router-link :to="'/user/'+ $route.params.name+'/more'">更多信息</router-link>
			<router-view></router-view>
		</div>
		`//或者<router-link to="more" append>更多信息</router-link>
		// query：?后面传参
	},
	// 子路由
	children:[{
		path:'more',
		component:{
		template:`
		<div>
			<h1>用户{{$route.params.name}}的详细信息</h1>
			现在是时候深入一下了！Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。这使得状态管理非常简单直接，不过理解其工作原理同样重要，这样你可以回避一些常见的问题。在这个章节，我们将进入一些 Vue 响应式系统的底层的细节。
		</div>
		`}


	}]
}

];
var router = new VueRouter({
	routes:routes,
	
});
new Vue({
	el:'#route',
	router:router,
	data:{

	},
	methods:{
		surf:function(){
			setTimeout(function(){
				this.router.push('/about');
				setTimeout(function(){
					this.router.push({name:'user',params:{name:'卡卡'}});
				},500);
			},500)
			

		}
	}
});