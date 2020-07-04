console.log('Hello, world!');
var fs = require('fs');
var https = require('https');
const { error } = require('console');
fs.writeFile(__dirname+"/index.html","<h1>HTML is great</h1>",function(error){
    if(error){
        console.log(error);
        console.log('error');
    }else{
        console.log('Congrats');
    }
});

var myPhotoLocation ='https://raw.githubusercontent.com/maxshev2000github/welcome-to-git/master/images/dog.jpg';
https.get(myPhotoLocation,function (response) {
    response.pipe(fs.createWriteStream(__dirname + "/myPuppy.jpg"));
});