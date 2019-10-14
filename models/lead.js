'use strict'

module.exports = () => {
	var Lead = sequelize.define ('Lead', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		name: {
			allowNull: false,
			type: Sequelize.STRING,	
		},
		spouseName:{
			allowNull: false,
			type: Sequelize.STRING,	
		},
		email:{
			allowNull: false,
			type: Sequelize.STRING,	
		},
	});
};