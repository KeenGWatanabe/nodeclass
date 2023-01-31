var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res){
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fiileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fiileStream.on('open',()=>{
      fiileStream.pipe(res)

    })
    fiileStream.on('error',(err)=>{
      res.end(err)
    })
})
.listen(5000)