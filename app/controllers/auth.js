'use strict';

const AuthController = {
	getUser: (req, res, next) => {
		res.redirect('/profile');
	},
	login: (req, res, next) => {
		res.render('pages/login');
	},
	logout: (req, res, next) => {
		req.logout();
		res.redirect('/');
	}
};

module.exports = AuthController;
