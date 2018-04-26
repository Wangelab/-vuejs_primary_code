// 过滤器
Vue.filter("currency",function(val,unit){
	val = val || 0;
	unit = unit || '元';
	return val + unit;
});
Vue.filter("meter",function(val,unit){
	val = val || 0;
	unit = unit || 'm';
	return val / 1000 + unit;
});

new Vue({
	el:"#filt",
	data:{
		price:10,
	}
});