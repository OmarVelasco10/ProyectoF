const express =require('express');
const router = express.Router();
const equipoController= require('../controllers/equipoController')
const jugadorController= require('../controllers/jugadorController')

const authController= require('../controllers/authController');
router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/torneo/equipos',equipoController.list)
router.get('/torneo/jugadores',jugadorController.list)
router.post('/torneo/equipos/addEquipo',equipoController.add)
router.post('/torneo/jugadores/addJugador',jugadorController.add)
router.get('/torneo/equipos/deleteequipo/:id',equipoController.delete)
router.get('/torneo/jugadores/deletejugador/:id',jugadorController.delete)
router.post('/torneo/equipos/updateequipo', equipoController.update);
router.post('/torneo/jugadores/updatejugador', jugadorController.update);
router.get('/logout' , authController.logout);


router.get('/register',(req,res) =>{
    res.render('register');
})
router.get('/login',(req,res) =>{
    res.render('login');
})
router.post('/register-user',authController.register);
router.post('/login',authController.login);
module.exports = router;
