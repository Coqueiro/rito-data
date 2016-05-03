var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/summoner/:name', function(req, res, next) {
    var LolApi = req.LolApi;
    LolApi.Summoner.getByName(req.params.name, function(err, summoner){
        if(!err){
            console.log(summoner);
            res.json(summoner)
        }
    })
});

module.exports = router;
