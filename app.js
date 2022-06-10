const express = require("express")
const path = require("path")
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "index.html")))
app.get("/turing", (req,res) => res.sendFile(path.resolve(__dirname, "views", "turing.html")))
app.get("/clarke", (req,res) => res.sendFile(path.resolve(__dirname, "views", "clarke.html")))
app.get("/hooper", (req,res) => res.sendFile(path.resolve(__dirname, "views", "hooper.html")))

app.listen(port, ()=> console.log(`Se levanto el servidor con exito en el http://localhost:${port}`))