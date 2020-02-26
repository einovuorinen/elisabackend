const app = require('./app')
const http = require('http')

const server = http.createServer(app)

const PORT = 3001 //process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})  