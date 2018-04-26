var cal = new Vue({
	el:"#calcul",
	data:{
		math:40,
		physics:70,
		english:102
	},
	// 计算属性
	computed:{
		sum:function(){
			return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.english);
// parseFloat()保留两位小数
		},
		average:function(){
			aver = Math.round(this.sum / 3.0);
			return aver;
		}
	}

});
