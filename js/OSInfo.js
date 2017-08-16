var os = require('os');
var time = require('../modules/time');
function getOSinfo() {
	    var type = os.type();
	    if(type === 'Darwin') {
	        type = 'OSX';
	    } else if(type === 'Windows_NT') {
	        type = 'Windows';
	    }
	    var release = os.release();
	    var cpu = os.cpus()[0].model;
	    var uptime = os.uptime();
	    var userInfo = os.userInfo();
	    console.log('System:', type);
	    console.log('Release:', release);
	    console.log('CPU model:', cpu);
	    console.log('Uptime: ~', time.secondsConverter(uptime));
	   	//w dokumentacji czas jest w sekundach dlatego dzielimy czas przez 60 i następnie
		//zaokraglony (totFixed) do 0 miejsc po przecinku
	    console.log('User name:', userInfo.username);
	    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;