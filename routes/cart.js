const express = require('express')
const router = express.Router();

const Queries = require('../queries/cart')
const queries = new Queries
const ProductQueries = require('../queries/Products')
const quProduct = new ProductQueries



module.exports = (app) => {
    app.use('/cart', router)
    //add item to cart
    router.post('/:id', async (req, res) => {
        try {
            const id = req.params.id
            await queries.addItem(id)
        } catch (error) {
            
        }
    })

    //delete item from cart by id
    router.delete('/:id', async (req, res) => {
        try{
            const id = req.params.id
            await queries.removeItem(id)

        }catch (error) {
            
        }

    })
}