var exports = require('express');

let router = exports.Router();
let controller = require('../Controllers/controller');

router.post('/', (req, res) => {
    controller.postCat(req, res);
});

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

module.exports = router;