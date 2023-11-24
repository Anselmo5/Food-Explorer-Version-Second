 const express = require('express')
 const app = express()


 app.use(express.json())

 app.get('/', (req,res) => { //Primeira rota feita
    res.send('Hello')
 })

app.listen(3000, () => {
    console.log('foi');
})