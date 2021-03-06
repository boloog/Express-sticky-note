// 添加事件
var EventCenter = (function(){
	var events = {};

	function on(evt, handler){
		events[evt] = events[evt] || [];
		events[evt].push({
			handler: handler
		})
	}

	function fire(evt, args){
		if(!events[evt]){
			return;
		}
		for (var i = 0; i < events[evt].length; i++) {
			events[evt][i].handler(args);
		}
	}
	return {
		on: on,
		fire: fire
	}

})();
module.exports = EventCenter;
// EventCenter.on('text-change', function(data){
// 	console.log('111', data);
// });
// EventCenter.fire('text-change', 100);
