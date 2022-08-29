//----- Modèle ressource Restaurant -----//


/** Modèle Restaurant */
module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("menu", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: '',
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false

        },
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    return Menu
};