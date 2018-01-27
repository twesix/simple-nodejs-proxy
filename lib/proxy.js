const PROXY_PORT = 65535

const http = require('http')
const net = require('net')
const url = require('url')

function request(cReq, cRes)
{
    const u = url.parse(cReq.url)
    
    console.log(`[http.request] ${cReq.method} ${u.hostname}:${u.port || 80} ${u.path}`)
    
    const options =
        {
            hostname : u.hostname,
            port     : u.port || 80,
            path     : u.path,
            method   : cReq.method,
            headers  : cReq.headers,
        }
    
    const pReq = http.request(options, function(pRes)
    {
        cRes.writeHead(pRes.statusCode, pRes.headers)
        pRes.pipe(cRes);
    }).on('error', function(e)
    {
        console.error(e)
        cRes.end()
    });
    
    cReq.pipe(pReq)
}

function connect(cReq, cSock)
{
    console.log(`[http.connect] ${cReq.url}`)
    const u = url.parse('http://' + cReq.url);
    
    const pSock = net.connect(u.port, u.hostname, function()
    {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
    }).on('error', function(e)
    {
        console.error(e)
        cSock.end();
    });
    
    cSock.pipe(pSock);
}

http.createServer()
    .on('request', request)
    .on('connect', connect)
    .on('error', function(err)
    {
        console.error(err)
    })
    .listen(PROXY_PORT, function()
    {
        console.log(`proxy server online: http://localhost:${PROXY_PORT}`)
    });