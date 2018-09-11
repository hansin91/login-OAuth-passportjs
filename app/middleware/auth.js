'use strict';

const AuthMiddleware = {
	login: (req, res, next) => {
		if (req.isAuthenticated()) {
			res.redirect('/profile');
		} else {
			next();
		}
	}
};

module.exports = AuthMiddleware;
