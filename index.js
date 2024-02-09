import express from 'express'

// Create an express app
const app = express()

//
const port = +process.env.PORT || 3000

// Router 
app.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})
app.get('/about', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'About Page'
    })
})

app.all('*', (req, res)=>{
    res.json({
        status: 404,
        msg: '404 page'
    })
})

app.listen(port)