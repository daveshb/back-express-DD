import express from 'express'
import { dbConnection } from './lib/database.js'
import Users from './models/users.js'

const app = express()

app.get('/users', async (req, res) => {

  // aqui puede llamar ottas DBs
 await dbConnection()

 const users = await Users.find()

  res.json({
    messgee: "funciona desde el back y es un get ",
    users
  })
})

app.post('/users', (req, res) => {
  res.json({
    messgee: "Este es un post "
  })
})




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})