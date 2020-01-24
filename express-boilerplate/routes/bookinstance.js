var express = require('express');
var router = express.Router();

var bookinstanceController = require('../controllers/bookinstanceController');

router.get('/bookinstance/create', bookinstanceController.bookinstance_create_get);

router.post('/bookinstance/create', bookinstanceController.bookinstance_create_post);

router.get('/bookinstance/:id/delete', bookinstanceController.bookinstance_delete_get);

router.post('/bookinstance/:id/delete', bookinstanceController.bookinstance_delete_post);

router.get('/bookinstance/:id/update', bookinstanceController.bookinstance_update_get);

router.post('/bookinstance/:id/update', bookinstanceController.bookinstance_update_post);

router.get('/bookinstance/:id', bookinstanceController.bookinstance_detail);

router.get('/bookinstances', bookinstanceController.bookinstance_list);

module.exports = router;