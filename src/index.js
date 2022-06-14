import express from 'express'
import ejs from 'ejs'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('Hello world By Jorge Dominguez'))

app.listen(3000)
console.log('Server in listening on port',3000)