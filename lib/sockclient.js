const net = require('net')

// tcp客户端
const client = net.createConnection(9000, '127.0.0.1');

client.on('connect', function(){
    console.log('客户端：已经与服务端建立连接');
});

client.on('data', function(data){
    console.log(data.toString())
});

client.on('close', function(data){
    console.log('客户端：连接断开');
});

client.end('get / http/1.1\r\n\r\n');