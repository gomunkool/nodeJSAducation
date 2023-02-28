const http = require('http')

const PORT = process.env.PORT || 5000

const server = http.createServer( (req , res) => {
res.end('hello world')

} )

server.listen( PORT, ( ) => {console.log(`server started on ${PORT}`)})