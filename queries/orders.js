const db = require('../db/index')

const queryAddOrder = "select * into orders from cart where cart.cartID = $1"
const queryDeleteOrder = "delete from orders where orderID = $1"



module.exports = class Orders {

    addOrder = async (cartId) => {
        await db.query(queryAddOrder, [cartId], (error, result) => {
            if(erro) {
                throw error
            }
            return "Item Added"
        })
    }


    deleteOrder = async (orderId) => {
        await db.query(queryDeleteOrder, [orderId], (error, result) => {
            if (error) {
                throw error
            }
            return "Order Deleted"
        })
    }
}
