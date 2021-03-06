module.exports = (app, controllers) => {
	app.get('/status', (req, res) => res.sendStatus(200));

	app.post('/api/contact', controllers.api.contact);
	app.post('/api/alumni/update', controllers.api.updateInformation);

	/**
	 * React routes
	 * This route is ONLY for dev — production is hosted from a CloudFront distribution
	 */
	app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));
};
