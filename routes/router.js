const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')
// const albumController = require('../controllers/albumController') //router para las vistas

router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
});

// router.get('/', albumController.showAlbum, (req, res)=>{ 
//     res.render('index', {user:req.user})   
// })
// router.get('/agregaralbum', (req, res) => {
// //     res.render('agregaralbum');
// // })
// router.get('/createAlbum', (req, res) => {
//     res.render('createAlbum');
// })
// router.get('/addSong', (req, res) => {
//     res.render('addSong');
// });

//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

// router.post('/agregaralbum', albumController.createAlbum)
// router.get('/album/:id', albumController.showAlbum)
// router.post('/album/:id/addSong', albumController.addSong)

module.exports = router
