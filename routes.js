
module.exports = (app, controllers) => {
	app.get('/status', (req, res) => res.sendStatus(200));

	/**
	 * React routes
	 */
	app.get('/*', (req, res) => res.sendFile(__dirname + '/public/app.html'));
}
