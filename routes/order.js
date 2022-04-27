const express = requirea('express')
const router = expres.Router();

const Queries = require('../queries/orders')
const queries = new Queries



module.exports = (app) => {
    app.use('/orders', router)


    //create order based on cart
    router.get('/:id', async (req, res) => {
        try {
            const id = req.params.id
            await queries.addOrder(id)
        } catch (error) {
            
        }
    })

    //delete order by id
    router.delete('/:id', async (req, res) => {
        try {
            const id = req.params.id
            await queries.deleteOrder(id)
        } catch (error) {
            
        }
    })
}