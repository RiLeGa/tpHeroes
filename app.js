const express = require("express")
const path = require("path")
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, ()=> console.log(`Se levanto el servidor con exito en el http://localhost:${port}`))

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "index.html")))
app.get("/babbage", (req,res) => res.sendFile(path.resolve(__dirname, "views", "babbage.html")))
app.get("/berner-lee", (req,res) => res.sendFile(path.resolve(__dirname, "views", "berner-lee.html")))
app.get("/clarke", (req,res) => res.sendFile(path.resolve(__dirname, "views", "clarke.html")))
app.get("/hamilton", (req,res) => res.sendFile(path.resolve(__dirname, "views", "hamilton.html")))
app.get("/hooper", (req,res) => res.sendFile(path.resolve(__dirname, "views", "hooper.html")))
app.get("/lovelace", (req,res) => res.sendFile(path.resolve(__dirname, "views", "lovelace.html")))
app.get("/turing", (req,res) => res.sendFile(path.resolve(__dirname, "views", "turing.html")))
