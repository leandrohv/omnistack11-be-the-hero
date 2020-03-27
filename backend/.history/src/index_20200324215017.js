const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());


   /**
    * rodar o servidor "npm start"
    */

    /**
     * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
     * NoSQL: MongoDB, CouchDB, Etc.
     */

     /**
      * 
      * Driver: SELECT * FROM users
      * Query Builder utilizado: knexjs
      * Query Builder: table('users').select('*').where()
      */



app.listen(3333);