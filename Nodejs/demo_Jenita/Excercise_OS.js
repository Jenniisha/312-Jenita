const os = require('os');

const bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    

};

 console.log(os.cpus());
 console.log('free memory : ', bytesToSize(os.freemem()));
 console.log('total memory : ', bytesToSize(os.totalmem()));