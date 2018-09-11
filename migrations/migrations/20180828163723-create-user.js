'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userName: {
				type: Sequelize.STRING
			},
			firstName: {
				type: Sequelize.STRING
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: true
			},
			email: {
				type: Sequelize.STRING
			},
			googleId: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			facebookId: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			password: {
				type: Sequelize.STRING
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};
