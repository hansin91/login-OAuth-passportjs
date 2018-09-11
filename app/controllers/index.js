'use strict';

const IndexController = {
	index: {
		get(req, res, next) {
			res.render('pages/home');
		}
	}
};

module.exports = IndexController;
