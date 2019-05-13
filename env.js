var fs = require('fs');

if(process.env.RUN_ENV == undefined){
    throw new Error("RUN_ENV variable needs to be set!")
}

if(fs.existsSync("./env.json")){
    fs.unlinkSync('./env.json')
    console.log('File successfully deleted!')
}

var file = fs.openSync("./env.json", "w");
fs.writeSync(file, "{\n");
fs.writeSync(file, '"RUN_ENV":"' + process.env.RUN_ENV + '"\n');
fs.writeSync(file, "}\n");
fs.closeSync(file);
