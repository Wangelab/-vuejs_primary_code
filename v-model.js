var am = new Vue({
	el:'#app',
	data:{
		name:"fine",
		age:10,
		sex: ["female"],
		article:"虽然很像使用了双向数据绑定的 Angular 的ng-model，但是 Vue 是单项数据流，v-model 只是语法糖而已：在给 ",
		from:1,
		dest:[]
	}
});