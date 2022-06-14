import express from 'express'
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
 // __dirname trae la direccion completa de donde se ubica el proyecto

app.set('views', join(__dirname, 'views'))// con el join se concadena automaticamente la direccion del path
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.listen(3000)
console.log('Server in listening on port',3000)