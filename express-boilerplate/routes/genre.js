var express = require('express');
var router = express.Router();

var genreController = require('../controllers/genreController');

router.get('/genre/create', genreController.genre_create_get);

router.post('/genre/create', genreController.genre_create_post);

router.get('/genre/:id/delete', genreController.genre_delete_get);

router.post('/genre/:id/delete', genreController.genre_delete_post);

router.get('/genre/:id/update', genreController.genre_update_get);

router.post('/genre/:id/update', genreController.genre_update_post);

router.get('/genre/:id', genreController.genre_detail);

router.get('/genres', genreController.genre_list);

module.exports = router;