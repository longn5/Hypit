var express = require('express');
var app = express();

app.get('/users', function(req, res, next){
    res.set({
        'Content-type': 'application/json'
    })
    res.json([
        {id: 1, username: "somebody"},
        {id: 2, username: "somebody_else"}
    ]);
});

app.listen(8080, () => console.log('Listen on localhost:8080'));

// module.exports = app;