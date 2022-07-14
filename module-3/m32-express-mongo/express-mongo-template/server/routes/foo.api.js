const express= require("express")
const router = express.Router()
const {createFoo, getAllFoos, updateFooById ,deleteFooById} = require("../controllers/foo.controllers.js")

//Read
/**
 * @route GET api/foo
 * @description get list of foos
 * @access public
 */
router.get("/",getAllFoos)

//Create
/**
 * @route POST api/foo
 * @description create a foo
 * @access public
 */
router.post("/",createFoo)

//Update
/**
 * @route PUT api/foo
 * @description update a foo
 * @access public
 */
router.put("/:id",updateFooById )

//Delete
/**
 * @route DELETE api/foo
 * @description delet a foo
 * @access public
 */
router.delete("/:id",deleteFooById)

//export
module.exports= router



