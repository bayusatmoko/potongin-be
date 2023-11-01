const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const loginController = require("../src/controller/LoginController")
const middleware = require("./middleware")

app.use(cors())

app.post('/login', loginController.login)

app.get('/', middleware.decodeToken, (req,res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})