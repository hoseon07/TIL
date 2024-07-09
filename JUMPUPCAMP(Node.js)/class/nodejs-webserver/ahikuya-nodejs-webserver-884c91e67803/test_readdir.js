let fs = require('fs'); // file system module 가져오기

fs.readdir('./data', function(err, filelist){

	console.log(filelist);

});

// dir를(을) 읽어오는 코드입니다