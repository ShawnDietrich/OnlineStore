const { rows } = require('pg/lib/defaults')
const db = require('../db/index')
const queryByName = 'select * from products where desc1 = $1'
const queryAddItem =
  'insert into products (desc1, desc2, price) values($1, $2, $3)'
const queryDelete = 'delete from products where desc1 = $1'
const queryById = 'select * from products where id = $1'

module.exports = class Products {
  /**
   * Get information on prduct by name
   * @param {product name} name
   */
  getProductsByName = async (name) => {
    await db.query(queryByName, [name.toLowerCase()], (error, result) => {
      if (error) {
        throw error
      }
      return result.rows[0]
    })
  }

  getProductByID = async (id) => {
    await db.query(queryById, [id], (error, result) => {
      if (error) {
        throw new Error(error)
      }
      return result.rows[0]
    })
  }

  /**
   * Add product to database
   * @param {Product Name} itemName
   * @param {Product description} desc
   * @param {Product Price} price
   */
  addProduct = async (itemName, desc, price) => {
    await db.query(queryAddItem, [itemName, desc, price], (error, result) => {
      if (error) {
        throw error
      }
      return result.rows
    })
  }

  /**
   * Remove product from database
   * @param {Product Name} itemName
   */
  deletProduct = async (itemName) => {
    String(itemName)

    await db.query(queryDelete, [itemName], (error, result) => {
      if (error) {
        throw error
      }
      return result
    })
  }
}
