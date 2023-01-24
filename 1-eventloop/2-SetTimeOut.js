// housed in folder [1-eventloop] is not going to work, only works as app.js in [NODECLASS] folder
// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
},0)
console.log('third')
// completed and exited operating system process