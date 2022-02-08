const Sequelize = require('sequelize')

const DB_NAME = process.env.DB_NAME || 'node-todo'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASS = process.env.DB_PASS || '12345678'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_CONN = process.env.DB_CONN || 'localhost'

const sequelize = new Sequelize(DB_CONN)
//const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
//    dialect: 'mysql',
//    host: DB_HOST
//})

module.exports = sequelize