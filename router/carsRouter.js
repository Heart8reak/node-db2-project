const express = require('express')

const db = require('../data/db-config')

const router = express.Router()

router.get("/", (req, res) => {
    db('cars')
        .then((cars) => {
            res.json(cars)
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to retrieve cars" })
        })
})

router.get("/", (req, res) => {
    const { id } = req.params
    db('cars')
        .where({ id })
        .first()
        .then((car) => {
            res.json(car)
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to retrieve car ID" })
        })
})

router.post('/', (req, res) => {
    const carData = req.body
    db('cars')
        .insert(carData)
        .then((car) => {
            res.status(201).json(car)
            console.log("Created a new car")
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed too add car", err })
        })
})

module.exports = router