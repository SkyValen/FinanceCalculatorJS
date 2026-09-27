const express = require('express');
const cors = require('cors')
const { server } = require("./config/config")
const app = express();
app.use(cors())

app.listen(server.port, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})