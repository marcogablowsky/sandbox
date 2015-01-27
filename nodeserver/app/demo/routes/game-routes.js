var Game = require('../models/Game');

module.exports = function(app){
    var mapRequestToGame = function(req, game){
        game.name = req.body.name;
        game.description = req.body.description;
        game.cards = req.body.cards;
        game.thumbnailLink = req.body.thumbnailLink;
    };

    var sendErrorResponseOnError = function(err,res){
        if(err){
            res.send(err);
        }
    };

    app.post('/games', function(req, res){
        var game = new Game();
        mapRequestToGame(req,game);
        game.save(function(err){
            sendErrorResponseOnError(err,res);
            res.json({message: 'Game created!'});
        });
    });

    app.get('/games', function(req,res){
        Game.find(function(err, games){
            sendErrorResponseOnError(err,res);
            res.json(games);
        });
    });

    app.get('/games/:game_id',function(req, res){
        Game.findById(req.params.game_id, function(err, game){
            sendErrorResponseOnError(err,res);
            res.json(game);
        })
    });
    app.put('/games/:game_id',function(req, res){
        Game.findById(req.params.game_id, function(err, game){
            sendErrorResponseOnError(err,res);
            mapRequestToGame(req,game);
            game.save(function(err){
                sendErrorResponseOnError(err,res);
                res.json({message: 'Game updated'});
            });
        });
    });
    app.delete('/games/:game_id',function(req, res){
        Game.remove({_id: req.params.game_id}, function(err){
            sendErrorResponseOnError(err,res);
            res.json({message: 'Deleted'});
        });
    });
};
