const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

app.post('/search', (req, response) => {
    fetch(`https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=${req.body.channel}&date=${req.body.date}`)
    .then(res => res.json())
    .then(json => {
        return response.json(json.schedule[0].programs)
    })
    .catch((error) => {
        console.error(error)
      })
});

app.get('/channelnames', (request, response) => {
    fetch('https://rest-api.elisaviihde.fi/rest/epg/channels')
    .then(res => res.json())
    .then(json => {
        return response.json(json.channels)
    })
})

app.get('/liveprograms', (request, response) => {
    fetch('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
    .then(res => res.json())
    .then(json => {
        return response.json(json.schedule.map(x => x.programs[0]).filter(Boolean))
    })
})

module.exports = app