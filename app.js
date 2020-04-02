const express = require('express');
const fs = require('fs');
const glob = require('glob');
const shuffle = require('shuffle-array');
const app = express();
const PORT = 10000;

app.use(express.static('public'));

var imageFiles = null;
glob('./public/assets/images/*.jpeg', function(err, files){
    if (err) {
        console.log(err);
    }
    else{
        imageFiles = files;
    }
});

app.get('/', function(req, res){
    imageFiles = shuffle(imageFiles);
    res.render('index.ejs', {imageFiles: imageFiles});
});

app.listen(PORT, function(){
    console.log('Server started at PORT: ' + PORT)
});