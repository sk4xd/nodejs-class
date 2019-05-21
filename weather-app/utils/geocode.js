const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adress) +'.json?access_token=pk.eyJ1Ijoic2s0eGQiLCJhIjoiY2p2cXF1bGhjMGN4MjQ4bm5ycTR4NTQ0cSJ9.emalHU7hGGDCg26w-9dqQA&limit=1'
    
    request({url, json: true}, (err, {body}) =>{
        if(err) {
            callback('Unable to connect to the service.')
        } else if(body.features.length === 0){
            callback('Unable to find the coordinates.Try another one')
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                lat: body.features[0].center[1],
                long: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode