var Game = require('./models/Game');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
    app.post('/games', function(req, res){
        var game = new Game();
        game.name = req.body.name;
        game.description = req.body.description;
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

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};