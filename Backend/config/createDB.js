const User = require("../modules/users/model.js");
const Finance_Entry = require("../modules/finance_entry/model.js")
const dbConnect = require("./database.js");

dbConnect.sync({ force: true }).then(async () => {
    console.log("db created")

    const user = await User.create({
        username: "Test",
        email: "test@gmail.com",
        password: "test"
    })

    const finance_entry = await Finance_Entry.create({
        title: "Grocery shop",
        value: 12.73,
        description: "blablablablablabla",
        date: Date.now(),
        // category:,
        user: user.id
    })

    console.log("Database filled with testing data")
}).catch((error) => {
    console.error("could not create database:", error)
}).finally(() => {
    dbConnect.close();
})