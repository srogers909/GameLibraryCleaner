var fs = require('fs');
var directory = 'K:\\Games\\atari2600\\';
fs.readdir(directory, function (err, files) {
    console.log('files: ', files);
});
