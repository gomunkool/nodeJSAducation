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

writeFileAsync(path.resolve(__dirname,'test.txt'),'111').
then(()=>appendFileAsync(path.resolve(__dirname,'test.txt'),'222')).
then(()=>appendFileAsync(path.resolve(__dirname,'test.txt'),'333'))

// writeFileAsync(path.resolve(__dirname, 'text.tsx'), '123').
// then(()=>appendFileAsync('456')).
// then(()=>{appendFileAsync('789')}).
// catch((err)=>console.log(err))