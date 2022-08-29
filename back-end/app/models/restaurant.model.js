//----- Modèle ressource Restaurant -----//


/** Modèle Restaurant */
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define("restaurant", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        note: {
            type: DataTypes.NUMERIC(2, 2),
            allowNull: false
        },
        drive_time: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        category: {
            type: DataTypes.STRING,
            allowNull: false

        },
    });

    return Restaurant
};