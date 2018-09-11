'use strict';

import express from 'express';
import authRoutes from './app/routes/auth';
import profileRoutes from './app/routes/profile';
import index from './app/routes';
import passportSetup from './app/config/passport-setup';
import facebookSetup from './app/config/facebook-setup';
import cookieSession from 'cookie-session';
import keys from './app/config/keys';
import passport from 'passport';

const app = express();
const PORT = process.env.PORT || 6000;

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// using cookie
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [ keys.session.cookieKey ]
	})
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

// set up routes
app.use('/auth', authRoutes);
app.use('/', index);
app.use('/profile', profileRoutes);

// set up static files
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);
});
