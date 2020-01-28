var Book = require('../models/book');

exports.book_list = function(req, res, next) {

    Book.find({}, 'title author')
      .populate('author')
      .exec(function (err, list_books) {
        if (err) { 
            return next(err);
        }
        res.render('books/book_list', { title: 'Book List', book_list: list_books });
      });
};

exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};