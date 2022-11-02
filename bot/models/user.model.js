const db = require("../connections/db.connections");

const {DataTypes} = require("sequelize");

module.exports = db.define("user", {
    id: {
        type: DataTypes.UUID,
        defaulValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    privileqed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    timesStamps: true,
    updatedAt: false,
})