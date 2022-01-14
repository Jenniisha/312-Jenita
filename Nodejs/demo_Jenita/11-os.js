const os=require('os');

const mb=2^20;
console.log(os.cpus());
console.log(os.freemem(mb=2^20));//how much RAM is free
console.log(os.totalmem(mb=2^20));//Total RAM