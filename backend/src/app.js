const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros:
 * 
 * QUery params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: corpor da requisição, utilizado para crirar ou alterar recursos
 **/

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (será usado SQLite)
  * NoSQL: MongoDB, CouchDB
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where ->usado knex
   * 
   */