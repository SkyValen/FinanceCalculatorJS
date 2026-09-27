const { Sequelize } = require("sequelize");
const { database } = require("./config")

const dbConnect = new Sequelize( database.name, database.username, database.password, {
    host: database.host,
    dialect: database.dialect
})

module.exports = dbConnect;