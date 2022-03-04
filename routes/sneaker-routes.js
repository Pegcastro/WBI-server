const express = require('express');
const {addSneaker, getAllSneakers, loadSneakers} = require('../controllers/sneakersController');

const router = express.Router();

router.post('/sneaker', addSneaker);
router.get('/sneakers', getAllSneakers);
router.get('/load', loadSneakers);

module.exports = {
    routes: router
};