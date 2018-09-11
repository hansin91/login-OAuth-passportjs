'use strict';

import express from 'express';
import passport from 'passport';
import AuthController from '../controllers/auth';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

//auth login
router.get('/login', AuthMiddleware.login, AuthController.login);

// auth logout
router.get('/logout', AuthController.logout);

// auth with google
router.get('/google', passport.authenticate('google', { scope: [ 'email' ] }));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), AuthController.getUser);

// facebook
router.get(
	'/facebook',
	passport.authenticate('facebook', { authType: 'rerequest', scope: [ 'email', 'user_friends' ] })
);

router.get('/facebook/redirect', passport.authenticate('facebook'), AuthController.getUser);

module.exports = router;
