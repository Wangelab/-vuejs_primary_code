var on = new Vue({
	el:"#v-on",
	data:{},
	methods:{
		onClick:function(){
			console.log('clicked');
		},
		onEnter:function(){
			console.log("mouse enter");
		},
		onOut:function(){
			console.log("mouse out");
		},
		onSubmit:function(){
			//e.preventDefult();//禁止涮新
			console.log("submit");
		},
		onEnters:function(){
			console.log("key pressed");
		}
	}
});
