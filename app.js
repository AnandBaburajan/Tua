const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT;

hehe = {}

app.get('/api',(req,res) => {
    res.send(hehe);
});

app.get('/api/add/:name/:link',(req,res) => {
    var id=Object.keys(hehe).length + 1;
    var data=req.params;
    var name=data.name;
    var link=data.link;

    hehe[id]={name: name, link: link};

    res.redirect('/api');
});

app.listen(PORT, () => console.log('Server is running'));