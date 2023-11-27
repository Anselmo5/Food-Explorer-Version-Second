 const express = require('express')
 const routes = require('./routes')
 const cors = require('cors')
 const app = express()


 app.use(express.json())
 app.use(cors())
 app.use(routes)

 app.get('/', (req,res) => { //Primeira rota feita
    res.send('Hello')
 })

app.listen(3005, () => {
    console.log('foi');
})