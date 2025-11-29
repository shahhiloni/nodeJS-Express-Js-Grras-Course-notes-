// OS - oprating system 
// represent our working OS 

let OS = require('os');
// platform -  represent the platform of current OS 
console.log(OS.platform())

// totalmem - represent the total Memory of current OS  
console.log(OS.totalmem())

// freemem - represent the free memory of current OS 
console.log(OS.freemem())

// version - represent the version of OS 
console.log(OS.version())

// tmpdir - represent the directory of OS 
console.log(OS.tmpdir())

// userInfo - provide user information of OS 
console.log(OS.userInfo())

// uptime - represent the uptime in seconds
console.log(OS.uptime())

// cpus - return information of CPU 
console.log(OS.cpus());

//networkInterface - provide all information about the OS network (like mac address, family, netmask, etc...)
console.log(OS.networkInterfaces())

// hostname or IP address - provide OS hostname
console.log(OS.hostname())

// home directory (homedir) - provide home directory path or current home directory path 
console.log(OS.homedir())

// machine - 
console.log(OS.machine())

// type - 
console.log(OS.type())

