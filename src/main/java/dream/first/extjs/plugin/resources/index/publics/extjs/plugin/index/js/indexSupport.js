//每隔时常发送请求重置会话时长
var resetSessionInterval = 20 * 60 * 1000;//25分钟

setInterval(function(){
	Co.request(rootPath + "/sessionReset",{},function(result, opts){
		if(result.success){
			
		} else {
			
		}
	},function(){
		
	},{
		showWait :false
	});
},resetSessionInterval);
