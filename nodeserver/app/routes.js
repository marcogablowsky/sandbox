
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    require('./demo/routes')(app);

	// frontend routes =========================================================
	// route to handle all angular requests


};