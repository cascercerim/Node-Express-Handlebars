var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
    res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burger.all(function(burgerData){
        res.render("index", { burger_data: burgerData });
    });
});

router.post('/burgers/create', function(req, res){
    burger.create([
        'burger_name','devoured'
    ],[
        req.body.burger_name, req.body.devoured
    ],
        function(result){

        console.log(result);
        console.log(burger);
        // res.json({ id: result.insertId });
        res.redirect('/')
	});
});

router.put('/burgers/:id', function(req, res){
    burger.update(req.params.id, function(result) {
    
        console.log(result);
        res.sendStatus(200);
	});
});

module.exports = router;