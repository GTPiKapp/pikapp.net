const DEBUG = process.env.DEBUG;

module.exports.checkAuth = function(req, res, next) {
	if (ignoreAuth()) return setDummyAuth(req, next);

	if (checkForSessionResponse(req, res) === true) {
		if (DEBUG) console.log('Got session... parsing and setting');
		setSession(req, res, function() {
			if (DEBUG) console.log('Session set successfully');
			return res.redirect('/');
		});
	} else {
		if (!req.session.user_id) {
			if (DEBUG) console.log('No session found, redirecting to Auth application');
			return redirectToLogin(res);
		} else {
			if (DEBUG) console.log(`Valid user session ${req.session.username} (${req.session.user_id})`);
			return next();
		}
	}
}

module.exports.checkAPI = function(req, res, next) {
	if (process.env.DEBUG) {
		console.log('[DEBUG] Running in DEBUG mode... skipping API authentication');
		return next();
	}

	if (req.query.token) {
		if (process.env.API_TOKEN) {
			if (req.query.token === process.env.API_TOKEN) {
				return next();
			} else {
				return sendAPIAuthFailed(res);
			}
		} else {
			return res.status(500).json({
				error: true,
				message: 'An internal server error has occurred'
			});
		}
	} else {
		return sendAPIAuthFailed(res);
	}
}

module.exports.checkAdmin = function(req, res, next) {
	if (!req.session.user_id) {
		req.flash('error', 'You must be logged in to view that page');
		return res.redirect('/login');
	} else if (!req.session.user_id || req.session.admin != true) {
		req.flash('error', 'You don\'t have permission to view that page');
		return res.redirect('back');
	} else {
		if (req.session.admin == true) {
			return next();
		} else {
			req.flash('error', 'You don\'t have permission to view that page');
			return res.redirect('back');
		}
	}
}

module.exports.checkManager = function(req, res, next) {
	if (!req.session.user_id) {
		req.flash('error', 'You must be logged in to view that page');
		return res.redirect('/login');
	} else if (!req.session.manager || req.session.manager != true) {
		req.flash('error', 'You don\'t have permission to view that page');
		return res.redirect('back');
	} else {
		return next();
	}
}

module.exports.checkNotAuth = function(req, res, next) {
	if (req.session.user_id) {
		return res.redirect('/');
	} else {
		return next();
	}
}

function redirectToLogin(res) {
	var appID = '1312088';
	var redir = 'http://localhost:3000/';
	var host  = process.env.SSO_HOSTNAME;
	if (process.env.NODE_ENV == 'production') {
		appID = process.env.SSO_APP_ID;
		redir = process.env.SSO_REDIRECT;
	}
	return res.redirect(host + "?appID=" + appID + "&redirectURL=" + redir);
}

function setSession(req, res, done) {
	var sessionData = JSON.parse(new Buffer(req.query.session, 'base64').toString());
	req.session.user_id = sessionData.user_id;
	req.session.username = sessionData.username;
	req.session.email = sessionData.email;
	req.session.admin = sessionData.admin;
	req.session.manager = sessionData.manager;
	if (DEBUG) console.log(`Setting session for ${sessionData.username} (${sessionData.user_id})`);
	req.session.save(function(err) {
		if (err) {
			console.error(err);
			return res.send('An error occurred while setting your session');
		}
		if (DEBUG) console.log(`Session saved successfully`);
		return done();
	});
}

function checkForSessionResponse(req, res) {
	if (req.query.session) {
		return true;
	} else {
		return false;
	}
}

function sendAPIAuthFailed(res) {
	let json = {
		error: true,
		message: 'You did not provide a valid token parameter'
	};
	return res.status(403).json(json);
}

function ignoreAuth() {
	return String(process.env.IGNORE_AUTH).toLowerCase() === 'true';
}

function setDummyAuth(req, next) {
	req.session.user_id = 0;
	req.session.username = 'dev';
	req.session.email = 'test@dev.com';
	req.session.admin = true;
	req.session.manager = true;
	req.session.save(function(err) {
		return next();
	});
}
