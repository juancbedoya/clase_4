const express = require('express')

const app = express()

app.get
('/home',(req, res)=>{
    res.send('este esvel home')
})

app.use((req, res)=>{
    res.status('404').send('este es el home')
})

app.listen(3000)