const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'textTest.txt'), (err,data)=>{
//   if(err){
//     throw Err
//   }
//   console.log(data)
// })
const stream = fs.createReadStream(path.resolve(__dirname, 'textTest.txt'))

stream.on('data',(chunk)=>{
  console.log(chunk)
})