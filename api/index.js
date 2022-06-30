const express = require('express');
const bodyParser = require('body-parser')

// iniciar express
const app = express(); 

// informa ao express que o body parse vai interceptar os dados e converter para json
app.use(bodyParser.json()); 

const port = 3000

app.get('/teste', (req, res) => res
.status(200)
.send ({mensagem: 'boas vindas a API'}))

// Ouvinte do express para ver se ta tudo ok com o servidor
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`)) 

// exportar para disponibilizar para o restante da aplicação
module.exports = app

// executar comando node api/index.js e testar get no postman http://localhost:3000/teste