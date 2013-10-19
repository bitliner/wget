

var spawn = require('child_process').spawn

module.exports.run=function(url){
	var wget_process= spawn('wget',['-pk', '-o','ciao.html',url])
	
	wget_process.on('close', function (code) {
		console.log('wget_process for url: ',url,' exited with code ' + code);
	});

}


