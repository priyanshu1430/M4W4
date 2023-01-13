const fs = require('fs');

const rs = fs.createReadStream('./files/dummy.txt',{encoding:'utf8'});

const ws = fs.createWriteStream('./files/new-dummy.txt');

// rs.on('data',(dataChunk)=>{
//     ws.write(dataChunk);
// })

rs.pipe(ws);