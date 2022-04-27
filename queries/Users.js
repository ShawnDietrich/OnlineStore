const db = require("../db/index");
const 
queryAddUser = "insert into users (username, password, email) values ($1,$2,$3)";
 upddateUser = "update users set username=$1, password=$2, email=$3 where id=$4";
 deleteUser = "select * from users where username = $1";
 getUser = "select * from users where id = $1";


module.exports = class Query {

  getUserByID = async (id) => {
    await db.query(getUser, [id], (error, result) => {
      if (error) {
        throw new Error(error)
      }
      return result.rows
    })
  }

  /**
   * Create a new user
   * @param {User Name} name 
   * @param {User Password} password 
   * @param {User Email} email 
   */
  createUser = async (name, password, email) => {
      await db.query(queryAddUser, [name, password, email], (error, result) => {
        if(error) {
          throw new Error(error)
        }
        return result
      });
    }


/**
 * Update current user
 * @param {user Name} username 
 * @param {Passowrd} password 
 * @param {name} name 
 * @param {email} email 
 */
  updateUser = async (id) => {
    const {newName, newPassword, newEmail} = this.getUserByID(id)
    await db.query(
      upddateUser,
      [newName, newPassword, newEmail, id],
      (error, result) => {
        if (error) {
          throw error;
        }
        return result.rows
      }
    );
  };

/**
 * Remove user from the database
 * @param {email} email 
 */
  getUserByEmail = async (email) => {
    db.query(
      deleteUser,
      [email],
      (error, result) => {
        if (error) {
          throw new Error(error);
        }
        return result.rows
      }
    );
  };
};

 