const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("OS Type:", os.type());
console.log("Release:", os.release());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("CPU Cores:", os.cpus().length);
console.log(
  "Total Memory:",
  (os.totalmem() / (1024 ** 3)).toFixed(2),
  "GB"
);

console.log(
    "Free Memory:",
    (os.freemem() / (1024 ** 3)).toFixed(2),
    "GB"
  );
  console.log("System Uptime:", (os.uptime() / 3600).toFixed(2), "hours");