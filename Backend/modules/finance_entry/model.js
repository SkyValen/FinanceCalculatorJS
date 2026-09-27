const { DataTypes } = require("sequelize")
const dbConnect = require("../../config/database.js")

const Finance_Entry = dbConnect.define("Finance_Entry", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Finance_Entry;