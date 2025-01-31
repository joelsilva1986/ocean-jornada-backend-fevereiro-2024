const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})

//Lista de personagens

const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Read ALL -> [GET] / item
app.get('/item', function(req, res) {
  res.send(lista)
} )

// Read By ID -> [GET] /item/:id
app.get('/item/:id', function(req, res) {
  //Acesso o ID no parâmetro de rota
  const id = req.params.id

  //Acesso item na lista baseado no ID recebido
  const item = lista[id]

  // Envio o item como resposta HTTP
  res.send(item)
})

//Sinalizamos que o corpo da requisição está em JSON
app.use(express.json())

// Create -> [POST] /item
app.post('/item', function(req, res) {
  //Extraímos o corpo da requisição
  const body = req.body;

  //Pegamos o nome (string) que foi enviado dentro do corpo
  const item = body.nome;

  // Colocamos o nome dentro da lisa de itens
  lista.push(item)

  //Enviamos uma resposta de sucesso
  res.send("Item adicionado com sucesso")
})

app.listen(3000)
