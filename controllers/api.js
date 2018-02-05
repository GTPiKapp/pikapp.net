const striptags = require('striptags');

const Email = require('../helpers/Email');

module.exports.contact = (req, res) => {
	const {name, email, message} = req.body;

	if (!name) {
		return res.status(400).json({
			status: 'error',
			error: 'Name field is required'
		});
	}

	if (!email) {
		return res.status(400).json({
			status: 'error',
			error: 'Email field is required'
		});
	}

	if (!message) {
		return res.status(400).json({
			status: 'error',
			error: 'Message field is required'
		});
	}

	Email.send('Website Contact Form Submission', `<b>Name: </b>${striptags(name)}<br/><b>Return Email: </b>${striptags(email)}<br/><b>Message: </b>${striptags(message)}`);

	return res.status(200).json({
		status: 'ok',
		message: 'Thank you for reaching out to Pi Kappa Phi – Iota!'
	});

}

module.exports.updateInformation = (req, res) => {
	const {name, inumber, email, phone, address, city, zip} = req.body;

	if (!name) {
		return res.status(400).json({
			status: 'error',
			error: 'Name field is required'
		});
	}

	if (!email) {
		return res.status(400).json({
			status: 'error',
			error: 'Email field is required'
		});
	}

	if (!phone) {
		return res.status(400).json({
			status: 'error',
			error: 'Phone number field is required'
		});
	}

	if (!address) {
		return res.status(400).json({
			status: 'error',
			error: 'Address field is required'
		});
	}

	if (!city) {
		return res.status(400).json({
			status: 'error',
			error: 'City field is required'
		});
	}

	if (!zip) {
		return res.status(400).json({
			status: 'error',
			error: 'Zip code field is required'
		});
	}

	Email.send('Website Alumni Update', `<b>Name: </b>${striptags(name)}<br/><b>I-Number: </b>${inumber}<br/><b>Email: </b>${striptags(email)}<br/><b>Phone: </b>${striptags(phone)}<br/><b>Address: </b>${striptags(address)}<br/><b>City: </b>${striptags(city)}<br/><b>Zip Code: </b>${striptags(zip)}<br/>`);

	return res.status(200).json({
		status: 'ok',
		message: 'Thank you for reaching out to Pi Kappa Phi – Iota!'
	});

}