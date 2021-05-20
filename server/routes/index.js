var exprees = require('express');
var router = exprees.Router();

router.get('/', function(req, res){
    res.send({greeting:'Hello world'});
});

module.exports = router;

