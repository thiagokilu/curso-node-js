const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
    const {nome, idade} = req.query;

    return res.json({
        title: "Hello world",
        message: `Olá ${nome}tudo bem!?`,
        idade: idade
    })
})

server.get("/hello/:nome/:idade", (req, res) => {
    const {nome, idade} = req.params

    return res.json({
        title: "Hello world",
        message: `Olá ${nome}tudo bem!?`,
        idade: idade
    })
})


server.listen(3000)