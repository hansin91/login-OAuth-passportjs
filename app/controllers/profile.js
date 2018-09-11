'use strict';

const ProfileController = {
	index: {
		get(req, res, next) {
			res.render('pages/profile', { user: req.user });
		}
	}
};

module.exports = ProfileController;
