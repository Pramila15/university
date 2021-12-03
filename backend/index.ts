import express from 'express'

const app = express()

const PORT_NO = 1337
app.get('/',(req,res)=>{

    res.status(200).send("<h1>Hellow world</h1>")
})

app.listen(PORT_NO)