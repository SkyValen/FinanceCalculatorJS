require('dotenv').config();

const config = {
    server: {
        port: process.env.PORT || 3000
    },
    database: {
        name: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.HOST || "localhost",
        dialect: process.env.DIALECT,
    }
}

module.exports = config;