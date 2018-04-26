var routes = [{
	path:'/',
	components:{
		sidebar:{
			template:`
			<hr>首页</hr>
			`
		},
		content:{
			template:`
			<div>
			官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。
			</div>
			`
		}
	}

},
{
	path:'/user_management',
	components:{
		sidebar:{
			template:`
			<div>
			<ul>
				<li>用户列表</li>
				<li>权限管理</li>
			</ul>
		</div>
			`
		},
		content:{
			template:`
			<div>
			我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新 
			</div>
			`
		}
	}

},
{
	path:'/Post_Management',
	meta:{
		login_requred:true
	},
	components:{
		sidebar:{
			template:`
			<div>
			<ul>
				<li>帖子列表</li>
				<li>标签管理</li>
			</ul>
		</div>
			`
		},
		content:{
			template:`
			<div>
			继续在控制台输入 app3.seen = false，你会发现之前显示的消息消失了。

这个例子演示了我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM 结构。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果。

还有其它很多指令，每个都有特殊的功能。例如，v-for 指令可以绑定数组的数据来渲染一个项目列表：
			</div>
			`
		}
	}

},{
	path:"/login",
	components:{
		sidebar:{
			template:`
			<div>
			<hr>登录</hr>
			<div>
			`
		}
	}
}
];

var rout = new VueRouter({
	routes:routes,
});
// 管理性质添加检测
rout.beforeEach(function(to,from,next){
	// to:从哪里来，from ：到哪里去，next：方法
	var logged_in = false;
	// to.path == '/Post_Management'
	if(!logged_in && to.matched.some(function(item){
		// return item.path == '/Post_Management';
		return item.meta.login_requred;
	})){
		next('/login');
	}else{
		next();

	}
});

new Vue({
	el:'#namedview',
	router:rout,
});