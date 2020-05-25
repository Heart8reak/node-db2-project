const express =require('express')
const helmet = require('helmet')

const carsRouter = require('../router/carsRouter')

const server = express()
const cors = require('cors')

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/cars', carsRouter)

module.exports = server