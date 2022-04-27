const express = require('express')
const router = express.Router();

const Queries = require('../queries/Users')
const queries = new Queries


module.exports = (app) => {
    //attach the router
    app.use('/users', router)

    //get user by email
    router.get('/', async (req, res) => {
        try {
            const email = req.query.email
            result = queries.getUserByEmail(email)
        } catch (error) {
            
        }
    })

    //add user
    router.post('/', async (req, res) => {
        const {username, password, email} = req.body
        try {
            queries.createUser(username, password, email)
            res.sendStatus(201);
        } catch (error) {
            res.status(400).send(error)
        }
    })
    //update user
    router.put('/:id', async (req, res) => {
        const {id} = req.params
        try {
            queries.updateUser(id)
            res.sendStatus(200)
        } catch (error) {
            res.sendStatus(400)
        }
    })
}