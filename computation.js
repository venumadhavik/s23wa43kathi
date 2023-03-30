var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var d1 = Math.floor(Math.random() * 10);
    var d2 = Math.floor(Math.random() * 02);
    var d3 = Math.floor(Math.random() * 10);
    var atan2Function = Math.atan2(d1);
    var atanhFunction = Math.atanh(d2);
    var cbrtFunction = Math.cbrt(d3);
    res.render('computation',
                {
                    title: 'venumadhavi kathi functions for  computations. ',
                    d1: d1,
                    d2: d2,
                    d3: d3,
                    atan2: atan2Function,
                    atanh: atanhFunction,
                    cbrt: cbrtFunction
                });
});
module.exports = router