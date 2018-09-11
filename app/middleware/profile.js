'use strict';

const ProfileMiddleware = {
	authCheck: (req, res, next) => {
		if (!req.user) {
			res.redirect('/auth/login');
		} else {
			next();
		}
	}
};

module.exports = ProfileMiddleware;
