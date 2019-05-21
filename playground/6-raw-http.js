const https = require('https')
const url = 'https://api.darksky.net/forecast/16364803e70946e6d2ff1466aaa140ee/40,-75?units=si'

const request = https.request(url, (res) => {
    let data = ''
    
    res.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()