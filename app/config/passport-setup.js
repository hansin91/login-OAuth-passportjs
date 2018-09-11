'use strict';

import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
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
	new GoogleStrategy(
		{
			// options for the google strategy
			callbackURL: '/auth/google/redirect',
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret
		},
		async (accessToken, refreshToken, profile, done) => {
			await model.User
				.findOne({
					where: {
						googleId: profile.id
					}
				})
				.then((user) => {
					if (!user) {
						model.User
							.create({
								firstName: profile.name.givenName,
								lastName: profile.name.familyName,
								email: profile.emails[0].value,
								googleId: profile.id,
								userName: profile.displayName
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
