var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

router.get('/book/create', bookController.book_create_get);

router.post('/book/create', bookController.book_create_post);

router.get('/book/:id/delete', bookController.book_delete_get);

router.post('/book/:id/delete', bookController.book_delete_post);

router.get('/book/:id/update', bookController.book_update_get);

router.post('/book/:id/update', bookController.book_update_post);

router.get('/book/:id', bookController.book_detail);

router.get('/books', bookController.book_list);

module.exports = router;