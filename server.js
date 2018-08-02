const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bookshelf = require('bookshelf');

const app = express();

const knexfile = require('./knexfile');
const knex = require('knex')(knexfile);

bookshelf.DB = require('bookshelf')(knex);

const RedisStore = require('connect-redis')(session);

app.use(
	session({
		cookie: {
			maxAge: 5009600,
			domain:
				process.env.NODE_ENV === 'production'
					? '*.pikapp.net'
					: 'localhost',
		},
		secret: process.env.SECRET,
		resave: true,
		saveUninitialized: false,
		store: new RedisStore({
			ttl: 3600,
		}),
	})
);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'pikapp.net');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		return res.status(200).send('OK');
	} else {
		return next();
	}
});

require('./routes')(app, {
	api: require('./controllers/api'),
});

module.exports = app;
