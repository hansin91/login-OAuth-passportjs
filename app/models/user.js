'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			googleId: DataTypes.TEXT,
			userName: DataTypes.STRING,
			facebookId: DataTypes.TEXT,
			password: DataTypes.STRING
		},
		{ timestamps: false }
	);
	User.associate = (models) => {
		// associations can be defined here
	};
	return User;
};
