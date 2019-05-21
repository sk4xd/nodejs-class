const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/16364803e70946e6d2ff1466aaa140ee/'
    + encodeURIComponent(lat) +','+ encodeURIComponent(long) +'?units=si'

    request({url, json: true}, (err, {body}) => {
        if (err) {
            callback('Unable to connect to the weather service.', undefined)
        }else if(body.error) {
            callback('Unable to find location.', undefined)
        }
        else{
            callback(undefined, 'It is currently '+ body.currently.temperature + ' degrees out.' +
            'There is '+ body.currently.precipProbability + '% chance of raining.')
        }
    })
} 

module.exports = forecast