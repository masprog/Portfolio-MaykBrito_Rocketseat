const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// configurar o estilo css, para usar arquivos staticos

server.use(express.static('public'))
server.set("view engine","html")

// configurar o nunjucks 
nunjucks.configure("views", {
  express:server
})

// criar a rota da página principal

server.get("/", function(req, res){
  return res.render("index")
})

// criar a rota para o portfolio

server.get("/portfolio", function(req, res){
  return res.render("portfolio")
})

//chamada do servidor na porta 5000

server.listen(5000, function(){
  console.log("server is running")
})