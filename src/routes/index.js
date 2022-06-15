import { Router } from 'express' // modulo router ayuda a definir o instanciar distintas rutas

const router = Router()

router.get('/', (req, res) => res.render('index', {title : 'First Web with Node'})) //al poner {} se envia un objeto para un titulo mas personalizado se define la variable y el contenido

router.get('/about', (req, res) => res.render('about', {title: 'About me'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contact page'}))

export default router