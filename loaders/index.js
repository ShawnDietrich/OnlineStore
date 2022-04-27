const  expressLoader  = require("./express")
const  apiRoutes  = require('../routes/')

module.exports = async (app) => {
    
    
    //load express middleware
    await expressLoader(app)

    //load api route handlers
    await apiRoutes(app)    
}