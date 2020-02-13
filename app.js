const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get('/api',(req,res) => {
    res.json({
        id:1,
        name:'Tua',
        link:'haha'
    });
});

app.listen(PORT, () => console.log('Server is running'));