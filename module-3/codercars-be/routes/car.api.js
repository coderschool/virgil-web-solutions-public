const express = require("express");
const router = express.Router();
const {
  createCar,
  getCars,
  editCar,
  deleteCar,
} = require("../controllers/car.controllers.js");

//Read
/**
 * @route GET api/car
 * @description get list of cars
 * @access public
 */
router.get("/", getCars);

//Create
/**
 * @route POST api/car
 * @description create a car
 * @access public
 */
router.post("/", createCar);

//Update
/**
 * @route PUT api/car
 * @description update a car
 * @access public
 */
router.put("/:id", editCar);

//Delete
/**
 * @route DELETE api/car
 * @description delet a car
 * @access public
 */
router.delete("/:id", deleteCar);

//export
module.exports = router;
