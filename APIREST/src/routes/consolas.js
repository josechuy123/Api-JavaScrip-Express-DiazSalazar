

const express = require('express');
const router = express.Router();
const controladorconsola = require('../controllers/controladorconsola');

//aqui empiezan las rutas
router.get('/',controladorconsola.index);

//Vista de agregar
router.get('/addconsole',function (req, res) {
   res.render('../views/addconsole');
});

router.post('/addconsole' , controladorconsola.create);
router.get('/delete/:id' , controladorconsola.delete);
router.get('/pre_edit/:id' , controladorconsola.pre_edit);
router.post('/update/:id' , controladorconsola.update);

module.exports = router;