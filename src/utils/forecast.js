request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d907f37148885a14abfffc9edd7d4346&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, { body }) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!',undefined)
        } else {
           callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike + ' degrees out. Humidity is ' + body.current.humidity + '%.') 
        }
    })
}

module.exports = forecast