const express = require('express');
const routes = require('./routes');


// iniciar express
const app = express(); 

// importa rota
routes(app)

const port = 3000

// Ouvinte do express para ver se ta tudo ok com o servidor
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`)) 

// exportar para disponibilizar para o restante da aplicação
module.exports = app

// executar comando node api/index.js e testar get no postman http://localhost:3000/teste