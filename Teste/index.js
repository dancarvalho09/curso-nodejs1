
const express = require("express"); //require("módulo") - retorna uma função

const app = express(); //Qualquer coisa relacionado ao express será usada a variável app

app.get("/", function(req, res) {
   res.send("Bem vindo ao meu app!"); //send = aparece a mensagem no navegador
})

app.get("/sobre", function(req, res) {
    res.send("Minha pagina sobre");
})

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao meu blog");
})



app.listen(8081, function() {   // essa função tem que ser a última linha do código
    console.log("Server Active in http://localhost:8081");
})
     

