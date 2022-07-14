const express= require("express")
const router = express.Router()
const {createBoo, getAllBoos} = require("../controllers/boo.controllers.js")

//Read
/**
 * @route GET api/boo
 * @description get list of boos
 * @access public
 */
router.get("/",getAllBoos)

//Create
/**
 * @route POST api/boo
 * @description create a boo
 * @access public
 */
router.post("/",createBoo)

//export
module.exports= router




