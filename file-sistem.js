const { Console } = require('console')
const fs = require('fs')
const path = require('path')
const text = process.env.TEXT || ''


const writeFileAsync = async (path,data)=>{
return new Promise ((resolve,reject)=>{
  fs.writeFile(path,data,(err)=>{
    if(err){
      return reject(err.message)
    }
    resolve()
  })
},
)
}
const appendFileAsync = async (path,data)=>{
  return new Promise ((resolve,reject)=>{
    fs.appendFile(path,data,(err)=>{
      if(err){
        return reject(err.message)
      }
      resolve()
    })
  },
  )
  }

  const readFileAsync = async (path)=>{
    return new Promise ((resolve, reject)=>{
      fs.readFile(path,{encoding:'utf-8'},(err,data)=>{
      if(err){
        return reject(err.message)
      }
      resolve(data)
    })})
    }

writeFileAsync(path.resolve(__dirname, 'test.txt'),'111')
.then(()=>{appendFileAsync(path.resolve(__dirname,'test.txt'),'222')})
.then(()=>{appendFileAsync(path.resolve(__dirname,'test.txt'),'333')})
.then(()=>{readFileAsync(path.resolve(__dirname,'test.txt'))})
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})