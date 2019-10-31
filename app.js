const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// set handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))

// route
app.get('/:cool',(req, res) => {
    nicework = [1,2,3]
    cool = req.params.cool
    res.render('index',{nice: nicework,happy: cool})
})


// listen
app.listen(port, () => {
    console.log(`it's listening http://localhost/${port}`)
})