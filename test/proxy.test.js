const request = require('request')
request.debug = true
const http = require('http')
const net = require('net')

describe('[proxy]', function()
{
    it('[normal proxy]', function(done)
    {
        this.timeout(10000)
        request({url: 'http://music.163.com', proxy: 'http://localhost:8888'}, function(err, res, body)
        {
            if(err) throw err
            console.log(res.headers)
            if(res.statusCode === 200)
            {
                done()
            }
        })
    })
    it('[tunnel proxy]', function(done)
    {
        this.timeout(10000)
        request({url: 'https://open.163.com/', proxy: 'http://localhost:8888'}, function(err, res, body)
        {
            if(err) throw err
            console.log(res.headers)
            if(res.statusCode === 200)
            {
                done()
            }
        })
    })
    it('[normal proxy again]', function(done)
    {
        this.timeout(10000)
        request({url: 'http://music.163.com', proxy: 'http://localhost:8888'}, function(err, res, body)
        {
            if(err) throw err
            console.log(res.headers)
            if(res.statusCode === 200)
            {
                done()
            }
        })
    })
    it('[tunnel proxy again]', function(done)
    {
        this.timeout(10000)
        request({url: 'https://open.163.com/', proxy: 'http://localhost:8888'}, function(err, res, body)
        {
            if(err) throw err
            console.log(res.headers)
            if(res.statusCode === 200)
            {
                done()
            }
        })
    })
})