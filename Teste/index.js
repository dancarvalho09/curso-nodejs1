
const express = require("express"); //require("módulo") - retorna uma função

const app = express(); //Qualquer coisa relacionado ao express será usada a variável app

app.get("/", function(req, res) {
   //res.send("Bem vindo ao meu app!"); //send = aparece a mensagem no navegador. É possível apenas um único send por rota

   res.sendFile(__dirname + "/html/index.html"); //dirname retorna o diretório absoluto da raiz onde está o arquivo
})

app.get("/sobre", function(req, res) {
    //res.send("Minha pagina sobre");
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao meu blog");
})

app.get("/ola/:nome/:cargo", function(req, res) {    // o que vier depois dos ":" é o parâmetro
    res.send("<h1> Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo: " + req.params.cargo + "</h2>"); // res.send(req.params) - simples
})



app.listen(8081, function() {   // essa função tem que ser a última linha do código
    console.log("Server active in http://localhost:8081");
})
     

