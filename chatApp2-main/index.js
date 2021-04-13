const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

// Static files
app.use(express.static('public'));

const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('Connected...')
  socket.on('chat', (data) => {
    socket.broadcast.emit('chat', data)
  })
  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });

});
