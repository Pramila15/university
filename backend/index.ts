
import express = require('express')
import bodyParser = require('body-parser')
//import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT_NO = 1337
app.get('/',(req,res)=>{

    res.status(200).send("<h1>Hellow world</h1>")
})

app.listen(PORT_NO)