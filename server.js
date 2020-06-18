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
  express:server,
  autoescape: false, // funcionalidade para não trazer dados em formato HTML
  noCache: true
})

// criar a rota da página principal

server.get("/", function(req, res){

  //enviar dados para a page about do  back para o front
  const about = {
      avatar_url: "https://pbs.twimg.com/profile_images/1190279367429148672/qbeF0cUT_400x400.jpg",
      name: "Mayk Brito",
      role: "Instrutor - Rocketseat",
      description: `Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação, colaborador da
      <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>`,
      links: [
        {name:"Github", url: "https://github.com/maykbrito/"},
        {name:"Twitter", url: "https://twitter.com/maykbrito/"},
        {name:"Linkdin", url: "https://www.linkdin.com/in/maykbrito/"}
      ]

  }
  // criar a rota para o about 
  //return res.render("about", )

  //criar a rota para o about e mandando dados para o front
  return res.render("about", {about: about})
  

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