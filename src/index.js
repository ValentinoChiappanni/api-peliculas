const express = require('express')
const app = express()
const db = require('./models')
const PORT = 3001
const routePeliculas = require('./routes/peliculas.route')

app.use(express.json())
app.use(routePeliculas)
app.listen(PORT, async () => {
  console.log(`Estoy escuando en el puerto ${PORT}`)
})


// db.sequelize.sync({ force: true })
