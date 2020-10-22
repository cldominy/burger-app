const express = require("express");

const app = express()
const PORT = process.env.PORT || 3000
const expressHandlebars = require("express-handlebars")

app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const burger_controller = require("./controllers/burger_controller.js")

app.use(burger_controller)
app.listen(PORT, function(){
    console.log("App is listening " + PORT)
})