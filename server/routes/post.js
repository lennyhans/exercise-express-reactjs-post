var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    router.controller.Get(req,res,next);
});

router.put('/', function(req, res, next) {
    router.controller.Put(req,res,next);
});

router.delete('/:id', function(req, res, next) {
    router.controller.Delete(req,res,next);
});

module.exports = (postController) => {
    router.controller = postController
    return router;
};
