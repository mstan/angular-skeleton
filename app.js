var express = require('express'),
    app     = express(),
    ejs     = require('ejs');

app.set('view engine', 'ejs');

app.use('/node_modules', express.static('node_modules'));
app.use('/views', express.static('views'));
app.use('/app', express.static('app'));

app.get('/', function(req,res) {
    res.render('pages/index.ejs');
});

app.listen(3000);