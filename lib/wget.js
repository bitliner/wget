

var spawn = require('child_process').spawn

module.exports.run=function(url,path){
	var path=path||'./'
	,   wget_process= spawn('wget',['-pkP',path, url])
	
	wget_process.on('close', function (code) {
		console.log('wget_process for url: ',url,' exited with code ' + code);
	});

}


