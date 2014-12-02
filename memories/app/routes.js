var Game = require('./models/Game');

module.exports = function(app) {

    var mapRequestToGame = function(req, game){
        game.name = req.body.name;
        game.description = req.body.description;
        game.cards = req.body.cards;
        game.thumbnailLink = req.body.thumbnailLink;
    };

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
    app.post('/games', function(req, res){
        var game = new Game();
        mapRequestToGame(req,game);
        game.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message: 'Game created!'});
        });
    });

    app.get('/games', function(req,res){
        Game.find(function(err, games){
            if(err){
                res.send(err);
            }
            res.json(games);
        });
    });

    app.get('/games/:game_id',function(req, res){
        Game.findById(req.params.game_id, function(err, game){
            if(err){
                res.send(err);
            }
            res.json(game);
        })
    });
    app.put('/games/:game_id',function(req, res){
        Game.findById(req.params.game_id, function(err, game){
            if(err){
                res.send(err);
            }
            mapRequestToGame(req,game);
            game.save(function(err){
                if(err){
                    res.send(err);
                }
                res.json({message: 'Game updated'});
            });
        });
    });
    app.delete('/games/:game_id',function(req, res){
        Game.remove({_id: req.params.game_id}, function(err){
            if(err){
                res.send(err);
            }
            res.json({message: 'Deleted'});
        });
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};