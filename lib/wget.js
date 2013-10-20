

var spawn = require('child_process').spawn

module.exports.run=function(url,path,cb){
	var path=path||'./'
	,   wget_process= spawn('wget',['-pkP',path, url])
	
	wget_process.on('close', function (code) {
		var msg='wget_process for url: '+url+' exited with code ' + code
		console.log(msg);
		if (cb){ cb(msg) }
	});

}


