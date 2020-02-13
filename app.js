const express = require('express');
const dotenv = require('dotenv');
const app = express();
var fs = require('fs');
dotenv.config();

const PORT = process.env.PORT;

var myRawData = fs.readFileSync('data.json');
var myData = JSON.parse(myRawData);

app.get('/api',(req,res) => {
    res.send(myData);
});

app.get('/api/add/:name/:link',(req,res) => {
    var id=parseInt(Object.keys(myData).length) + 1;
    var data=req.params;
    var name=data.name;
    var link=data.link;

    myData[id]={name: name, link: link};
    var newData = JSON.stringify(myData);
    fs.writeFile('data.json', newData, function(err){if(err) throw err;})
    res.redirect('/api');
});

app.listen(PORT, () => console.log('Server is running'));