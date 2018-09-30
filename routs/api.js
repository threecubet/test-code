const express =require('express');
const router = express.Router();
const Ninja = require('./models/ninja');

//get list of peoples

router.get('/ninjas', function(req, res){
    res.send( {type:'GET'} );
});
//add people

router.post('/ninjas', function(req, res){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    }) 
});
//update people

router.put('/ninjas/:id', function(req, res){
    res.send( {type:'PUT'} );
});
//delete people

router.delete('/ninjas/:id', function(req, res){
    res.send( {type:'DELETE'} );
});
module.exports = router;