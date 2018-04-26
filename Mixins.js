// 重复功能的函数放到一起
var base = {
	methods:{
		show:function(){
			this.visible = true;
		},
		hide:function(){
			this.visible = false;
		},
		toggle:function(){
			this.visible = !this.visible;
		},
	},
	data: function(){
		return{
			visible:false,
		}
	}
}
// 重复功能的存储器

Vue.component('tooltip',{
	template:`
	<div>
		<span @mouseenter="show" @mouseleave="hide">bys</span>
		<div v-if="visible">
			白岩松
		</div>
	</div>
	`,
	mixins:[base]
	// methods:{
	// 	show:function(){
	// 		this.visible = true;
	// 	},
	// 	hide:function(){
	// 		this.visible = false;
	// 	}
	// },
	// data: function(){
	// 	return{
	// 		visible:false,
	// 	}
	// }

});
Vue.component('popup',{
	template:`
	<div >
		<button @click="toggle">Popup</button>
		<div v-if="visible">
		<span @click="hide">X</span>
			<h4>title</h4>
			    研究 Study on Differential Evolution and 
			Greedy Strategy Based Custom Instruction 
			Selection Algorithms www.dictall.com 3 给
			出了利用自定义指令加速复杂算法运算的实现
			方法和设计流程。 Make use of the user
			definition instruction to accelerating 
			the executing of complicated algorithm.
			dict.cnki.net 4 本文最后对比了软件，
			自定义指令，自定义外设三
		
		</div>
	</div>
	`,
	mixins:[base]
	// methods:{
	// 	toggle:function(){
	// 		this.visible = !this.visible;
	// 	},
	// 	hide:function(){
	// 		this.visible = false;
	// 	}
	// },

	// data:function(){
	// 	return{
	// 		visible:false,
	// 	}
	// }
});

new Vue({
	el:'#mix',
	data:{

	}
});