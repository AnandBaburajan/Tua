const express = require('express');
const dotenv = require('dotenv');
const app = express();
var fs = require('fs');
dotenv.config();

const PORT = process.env.PORT;

var myRawData = fs.readFileSync('data.json');
var myData = JSON.parse(myRawData);

app.get('/view',(req,res) => {
    res.send(myData);
});

app.post('/new/:name/:link',(req,res) => {
    var id=parseInt(Object.keys(myData["data"]).length) + 1;
    var data=req.params;
    var name=data.name;
    var link=data.link;
    myData["data"].push({id: id, name: name, link: link});
    var newData = JSON.stringify(myData);
    fs.writeFile('data.json', newData, function(err){if(err) throw err;})
    res.json({success:'true'})
});

app.listen(PORT, () => console.log('Server is running'));