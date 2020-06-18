const express = require('express')
const nunjucks = require('nunjucks')


const server = express()

//chamar o ficheiro para exportar dados
const videos = require("./data")

// configurar o estilo css, para usar arquivos staticos

server.use(express.static('public'))
server.set("view engine","njk")

// configurar o nunjucks 
nunjucks.configure("views", {
  express:server
})

// criar a rota da página principal

server.get("/", function(req, res){
  return res.render("about")
})

// criar a rota para o portfolio 

/*server.get("/portfolio", function(req, res){
  return res.render("portfolio")
})*/
// criar a rota para o portfolio e enviando dados para o frontend 
server.get("/portfolio", function(req, res){
  return res.render("portfolio", {items: videos})
})

//chamada do servidor na porta 5000

server.listen(5000, function(){
  console.log("server is running")
})