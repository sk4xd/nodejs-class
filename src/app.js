const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()
const port = process.env.PORT || 3000

console.log(__dirname)
console.log()

// Define paths for Express config
const pubDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and custom views directory
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(pubDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        content: 'Andrew Mead',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        content: 'This is the about content.',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page!',
        content: 'Your in the help page! :).',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide a address.'
        })
    }

    geocode(req.query.address, (err, {lat, long, location} = {}) => {
        if (err) {
            return console.log(err)
        }
        forecast(lat, long, (err, forecastData = {}) => {
            if (err) {
                return console.log(err)
            }
            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    console.log(req.query)
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a term.'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 not found.',
        message: 'Article not found.',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 not found.',
        message: 'Page not found.',
        name: 'Andrew Mead'
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+ port + '.')
})