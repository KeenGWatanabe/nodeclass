const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customerEmitter.on('response',(name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})
customeEmitter.emit('response', () => [
  console.log(`some other logic here`)
])
customEmitter.emit('response', 'john', 34)