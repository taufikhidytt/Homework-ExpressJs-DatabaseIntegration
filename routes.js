const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/:name', function(req, res){
    res.send("Hallo World! my name is " + req.params.name);
});

router.get('/', function(req, res){
    res.send("Hallo World!");
});

router.post('/', function(req, res){
    res.send("route post!");
});

router.put('/', function(req, res){
    res.send("route update!");
});



router.get('/query/film', function(req, res){
    db.query('SELECT * FROM film', function(error, result){
        if(error){
            throw error;
        }else{
            res.status(200).json(result.rows);
        }
    });
});

router.get('/query/film/:id', function(req, res){
    db.query('SELECT * FROM film WHERE film_id = ' + req.params.id, function(error, result){
        if(error){
            throw error;
        }else{
            res.status(200).json(result.rows);
        }
    });
});

router.get('/query/category', function(req, res){
    db.query('SELECT * FROM category', function(error, result){
        if(error){
            throw error;
        }else{
            res.status(200).json(result.rows);
        }
    });
});

router.get('/query/filmCategory/:name', function(req, res){
    db.query(`SELECT * FROM film f JOIN film_category fc ON fc.film_id = f.film_id JOIN category c ON c.category_id = fc.category_id WHERE name LIKE '%${req.params.name}%'`, function(error, result){
        if(error){
            throw error;
        }else{
            res.status(200).json(result.rows);
        }
    });
});

module.exports = router;