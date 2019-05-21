const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide a address.')
} else {
    geocode(address, (err, {lat, long, location}) => {
        if (err) {
            return console.log(err)
        }
        forecast(lat, long, (err, forecastData) => {
            if (err) {
                return console.log(err)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}