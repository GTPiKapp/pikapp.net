require('dotenv').config({
	path: './.env'
});

module.exports = {
	development: {
		client: 'mysql',
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: __dirname + '/migrations',
		}
	},
	production: {
		client: 'mysql',
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: __dirname + '/migrations',
		}
	}
};
