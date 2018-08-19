'use strict';

const express = require('express');
const yelp = require('yelp-fusion');
const bodyParser = require('body-parser');
const mustache = require('mustache');
const fs = require('fs');

const app = express();
const client = yelp.client('');

var jsonObj;
var business;
var businessName;
var businessAddress;

app.use(bodyParser.json());
var user_search = "";
var user_location = "";

app.post('/business', (req, res) => {
    user_search = req.body.term;
    user_location = req.body.city;
})

app.get('/business', (req, res) => {
    res.set({
        'Content-type': 'application/json'
    })
    client.search({
        term: user_search,
        location: user_location
    }).then(response => {
        var count = 0;
        for (var i = 0; i < response.jsonBody.businesses.length; i++)
            count++;

        jsonObj = response.jsonBody.businesses;
        business = jsonObj;
    }).catch(e => {
        console.log(e);
    })

    setTimeout(function () {
        res.json(business);
    }, 1000)

    // setTimeout(function () {
    //     fs.readFile('./test.html', function (err, data) {
    //         res.set({
    //             'Content-type': 'text/html'
    //         })
    //         res.write(mustache.render(data.toString(), {
    //             business
    //         }))
    //         res.end();
    //     });
    // }, 1000);

})

app.listen(8080, () => console.log('Listen on localhost:8080'))