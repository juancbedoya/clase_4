/*const express = require('express')

const app = express()

app.get
('/home',(req, res)=>{
    res.send('este esvel home')
})

app.use((req, res)=>{
    res.status('404').send('este es el home')
})

app.listen(3000)*/

const express = require('express');
const app = express()
const host="localhost"
const port=3000;

app.use(express.urlencoded())
// app.use(express.json())
// app.use(express.text())


// app.get('/home',(req, res)=>{
//     res.send("hola desde home")
// })
app.get("/adios",(req, res)=>{
    console.log(req.body.nombre);
})

app.get('/persona/:nombre/',(req, res)=>{
    console.log(req.params);
    res.send(`hola tu nombre es ${req.params.nombre}`)
})

app.get('/home/query',(req, res)=>{
    console.log(req.query);
    res.send(`estan son las querys y las query es ${req.query.saludo}`)
})
// app.get('/home/body',(req, res)=>{
//     const contbody= req.body
    // res.send(`el nombre que contiene el body es ${contbody}`)
//     res.json(contbody)
// })

app.get('/home/body',(req, res)=>{
    const contbody= req.body
    // res.send(`el nombre que contiene el body es ${contbody}`)
    res.send(contbody)
})

app.get('/persona/:nombre/:apellido/help',(req, res)=>{
    console.log(req.params);
    res.send(`hola tu nombre es ${req.params.nombre} y tu apellido ${req.params.apellido}`)
})

// app.post('/help',(req, res)=>{
//     res.send("hola desde help")
// })

app.use((req,res,next)=>{
    if (req.query.nombre === "camilo") {
        next()
    }
    res.send("error no hay query")
    })

    app.get("/home", (req, res)=>{
        res.send(`la query es ${req.query.nombre}`)
    })
    




app.use((req, res)=>{
    res.status(404).send("<h1>Error 404</h1>")
})



app.listen(port, host, ()=>{
    console.log(`el link de acc es http://${host}:${port}`);
})

