const express = require('express');
const dotenv = require('dotenv');
const app = express();
let fs = require('fs');
dotenv.config();

const PORT = process.env.PORT;

let myRawData = fs.readFileSync('data.json');
let myData = JSON.parse(myRawData);

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello!");
});

app.get('/view',(req,res) => {
    res.send(myData);
});

app.post('/new',(req,res) => {
    let id=parseInt(Object.keys(myData["data"]).length) + 1;
    let data=req.body;
    let name=data.name;
    let link=data.link;
    myData["data"].push({id: id, name: name, link: link});
    let newData = JSON.stringify(myData);
    fs.writeFile('data.json', newData, function(err){if(err) throw err;})
    res.json({success:'true'})
});

app.listen(PORT, () => console.log('Server is running'));