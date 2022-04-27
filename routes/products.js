const express = require('express')
const router = express.Router();

const Queries = require('../queries/products')
const queries = new Queries




module.exports = (app) => {
    app.use('/products', router)

    //get products by name
    router.get('/', async (req, res) => {
        try {
            const name = req.query.name
            queries.getProductsByName(name)
        } catch (error) {
            
        }
    })
    //add product
    router.post('/', async (req, res) => {
        try {
            const {name, desc, price} = req.body
            queries.addProduct(name, desc, price)
        } catch (error) {
            
        }
    })
}