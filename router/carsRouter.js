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

router.get("/:id", (req, res) => {
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
            res.status(201).json({ message: "Created Successfully" })
            console.log("Created a new car")
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed too add car", err })
        })
})

router.put("/:id", async (req, res) => {
    const carData = req.body
    const { id } = req.params
    try {
        const car = await db('cars').where({id}).update(carData)
        res.status(201).json(car)
    } catch(error) {
        res.status(500).json({message: 'Internal Server Error', err: err.message})
    }
})

router.delete("/:id", (req, res) => {
    db('cars')
        .where('id', req.params.id)
        .del()
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ message: 'Deleted Successfully' })
            } else {
                res.status(404).json({ message: 'Error Deleting' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'error' })
        })
})

module.exports = router