import express from 'express'
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js" //verificar que tipo de import se usa el normal o el que tiene {} OJO

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
 // __dirname trae la direccion completa de donde se ubica el proyecto

app.set('views', join(__dirname, 'views'))// con el join se concadena automaticamente la direccion del path
app.set('view engine', 'ejs')

app.use(indexRoutes)// para poder concadenar las paginas que se crean en routes

app.use(express.static(join(__dirname,'public')))// join lo uso esta vez para dirigirme a la carpeta de public con mi CSS


app.listen(process.env.PORT || 3000)
console.log('Server in listening on port',process.env.PORT || 3000)