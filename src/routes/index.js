import { Router } from 'express' // modulo router ayuda a definir o instanciar distintas rutas

const router = Router()

router.get('/', (req, res) => res.render('index'))

router.get('/about', (req, res) => res.render('about'))

router.get('/contact', (req, res) => res.render('contact'))

export default router