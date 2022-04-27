const users = require('./user')
const products = require('./products')
const order = require('./order')
const cart = require('./cart')



module.exports = (app) => {

    //call each http route
    cart(app)
    order(app)
    products(app)
    users(app)
}