const Redis = require('ioredis');
require('dotenv').config() ;
const client = new Redis({
    host: process.env.REDIS_DATABASE_NAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});


  module.exports = {client , Redis} ;

