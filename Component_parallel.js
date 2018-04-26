// 组件通信之任意及平行组件间通信 
// teacher说
var Event = new Vue();
Vue.component('teacher',{
	template:`
	<div>
		老师说：<input @keyup="on_change"  type="text" v-model="tech_said"/>
		
	</div>
	`,
	methods:{
		on_change:function(){
			Event.$emit('teacher-said-something', this.tech_said);
		}
	},
	data:function(){
		return{
			tech_said:"",
		}
	}
});
// student听
Vue.component('student',{
	template:`
	<div>
	学生听到：{{ student_listion }}
	</div>
	`,
	data:function(){
		return{
			student_listion:"",
		};
	},
	mounted:function(){
		// 监听
		var me = this;
		Event.$on("teacher-said-something", function(data){
			me.student_listion = data;
		});
	}
});

new Vue({
	el:'#comp',
});