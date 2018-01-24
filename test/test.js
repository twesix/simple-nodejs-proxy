const net = require('net')

const createSocketConnection = async function(port = 8888, host = 'localhost')
{
    return new Promise(function(resolve, reject)
    {
        const client = net.createConnection(port, host, function()
        {
            resolve(client)
        })
        client.on('error', function(err)
        {
            reject(err)
        })
    })
}

;(async function()
{
    const socket = await createSocketConnection()
    console.log(socket)
})()