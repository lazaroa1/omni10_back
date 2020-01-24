const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://lazaro:123@cluster0-asc41.mongodb.net/week10?retryWrites=true&w=majority', {
 useNewUrlParser: true, useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)










//Métodos HTTP: get,post,put,delete

/*
Tipos de parametro:
-Query params: utilizado get {request.query(Filtros, ordenação, paginação,...)} 
-Route params: utilizados no metodo put e delete {request.params(Identificar um recurso na alteração ou remoção)}
-Body: utilizando no post e put {request.body(Dados para a criação ou alteraçãode um registro)}
*/