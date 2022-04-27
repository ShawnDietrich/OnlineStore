
const db = require('../db/index')
const addQuery = "select * into cart from products where products.productid = $1  "
const removeQuery = "delete from cart where cartID = $1"


module.exports = class cart {

    /**
     * Add item to cart using item id primary key
     * @param {item name} name 
     * @param {Item ID} id 
     */
    addItem = async (id) => {
        await db.query(addQuery, [id], (error, result) => {
            if (error) {
                throw error
            }
            return result
        })
    };

    
    /**
     * 
     * @param {Item Name} name 
     * @param {Item ID} id 
     */
    removeItem = async (name, id) => {
        await db.query(removeItem, [id], (error, result) => {
            if(eeror) {
                throw error
            }
            return result
        })
    };
}