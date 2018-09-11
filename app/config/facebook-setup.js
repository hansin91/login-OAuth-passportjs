'use strict';

import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import keys from './keys';
import model from '../models';

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	model.User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebook.clientID,
			clientSecret: keys.facebook.clientSecret,
			callbackURL: '/auth/facebook/redirect',
			profileFields: [ 'email', 'name', 'id', 'photos', 'gender' ],
			enableProof: false
		},
		async (accessToken, refreshToken, profile, done) => {
			let fbProfile = profile._json;
			console.log(fbProfile);
			await model.User
				.findOne({
					where: {
						facebookId: fbProfile.id
					}
				})
				.then((user) => {
					if (!user) {
						model.User
							.create({
								firstName: fbProfile.first_name,
								lastName: fbProfile.last_name,
								email: fbProfile.email,
								facebookId: fbProfile.id
							})
							.then((newUser) => {
								done(null, newUser);
							})
							.catch((err) => {
								done(err);
							});
					} else {
						done(null, user);
					}
				})
				.catch((err) => {});
		}
	)
);
