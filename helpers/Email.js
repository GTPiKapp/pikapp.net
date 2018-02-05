const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const DEBUG = process.env.DEBUG;

module.exports.send = (subject, body) => {
	const TO_EMAIL = process.env.SEND_TO_EMAIL;
	if (DEBUG) console.log(`Sending email notification to ${TO_EMAIL} for ${subject}`);
	const smtpTransportConn = nodemailer.createTransport(smtpTransport({
		host: 'in-v3.mailjet.com',
		port: 25,
		secureConnection: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	}));
	const mailOptions = {
		to: TO_EMAIL,
		from: process.env.SEND_FROM_EMAIL,
		subject: subject,
		html: body
	};
	smtpTransportConn.sendMail(mailOptions, (err, info) => {
		if (err) console.error(err);
		if (!info) {
			console.error(`No info was provided from SMTP connection`);
			console.error(`Failure for email: ${TO_EMAIL}`);
			console.error(err);
		} else {
			if (DEBUG) console.log(`Message sent to ${TO_EMAIL}: ${info.messageId}`);
		}
	});
}