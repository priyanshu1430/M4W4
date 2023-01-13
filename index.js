const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async ()=>{
  try{
    const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8')
    console.log(data);
    await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
    await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
    await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\n Nice to meet you');
    await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','NewpromiseWrite.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname,'files','NewpromiseWrite.txt'),'utf8');
    console.log(newData);
  } catch (err){
    console.error(err);
  }
}
fileOps();


// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log('Hello..');

// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to Meet you.', (err) => {
//     if (err) throw err;
//     console.log('operation complete');

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n Yes it is', (err) => {
//       if (err) throw err;
//       console.log('append done');
    
//       fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newreply.txt'), (err) => {
//         if (err) throw err;
//         console.log('rename complete');
//       });
//     });
  
//   });

  
//   process.on('uncaughtEception',err =>{
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// })
