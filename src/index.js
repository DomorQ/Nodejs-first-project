import express from 'express'
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js" //verificar que tipo de import se usa el normal o el que tiene {} OJO

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
 // __dirname trae la direccion completa de donde se ubica el proyecto

app.set('views', join(__dirname, 'views'))// con el join se concadena automaticamente la direccion del path
app.set('view engine', 'ejs')

app.use(indexRoutes)


app.listen(3000)
console.log('Server in listening on port',3000)