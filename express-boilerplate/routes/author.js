var express = require('express');
var router = express.Router();

var authorController = require('../controllers/authorController');

router.get('/author/create', authorController.author_create_get);

router.post('/author/create', authorController.author_create_post);

router.get('/author/:id/delete', authorController.author_delete_get);

router.post('/author/:id/delete', authorController.author_delete_post);

router.get('/author/:id/update', authorController.author_update_get);

router.post('/author/:id/update', authorController.author_update_post);

router.get('/author/:id', authorController.author_detail);

router.get('/authors', authorController.author_list);

module.exports = router;