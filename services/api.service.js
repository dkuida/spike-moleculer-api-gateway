'use strict';

const ApiGateway = require('moleculer-web');

module.exports = {
	name: 'api',
	mixins: [ApiGateway],

	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: '/api',
			aliases: {
				'GET /users': 'users.list',
				'GET /allPosts': 'users.posts'

			},
			whitelist: [
				// Access to any actions in all services under "/api" URL
				'**'
			]
		}]
	}
};
