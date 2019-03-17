import * as http from 'http'
import app from './app'

const port = 3000
const server = http.createServer(app.callback())

server.listen(port)

server.on('listening', () => {
  const address = server.address()
  const bind = typeof address === 'string'
    ? 'pipe ' + address
    : 'port ' + address.port
  console.log('Listening on ' + bind)
})

server.on('error', (error: any) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})