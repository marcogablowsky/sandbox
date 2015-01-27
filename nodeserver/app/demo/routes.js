module.exports = function(app) {

    // server routes ===========================================================
    require('./routes/game-routes')(app);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/demo/**', function(req, res) {
        res.sendfile('../../public/demo/index.html');
    });

};
