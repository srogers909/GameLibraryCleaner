let fs = require('fs');

const directory = 'K:\\Games\\atari2600\\';

fs.readdir(directory, (err, files) => {
    console.log('files: ', files);
});