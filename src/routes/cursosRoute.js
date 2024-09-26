const { Router } = require('express');
const CursosController = require('../controllers/CursosController.js');

const cursosController = new CursosController();

const router = Router();

router.get('/cursos', (req, res) => cursosController.pegaCursos(req, res));
router.get('/curso/:id', (req, res) => cursosController.pegaUmPorId(req, res));
router.post('/curso', (req, res) => cursosController.criaNovo(req, res));
router.put('/curso/:id', (req, res) => cursosController.atualiza(req, res));
router.delete('/curso/:id', (req, res) => cursosController.exclui(req, res));

module.exports = router;