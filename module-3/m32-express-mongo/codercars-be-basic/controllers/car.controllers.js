const { sendResponse, AppError } = require("../helpers/utils.js");

const car = require("../models/Car.js");

const carController = {};
//Create a car
carController.createCar = async (req, res, next) => {
  //in real project you will getting info from req

  try {
    const info = req.body;

    //always remember to control your inputs
    if (!info) throw new AppError(402, "Bad Request", "Create car Error");
    //mongoose query
    const created = await car.create(info);
    sendResponse(
      res,
      200,
      true,
      { car: created },
      null,
      "Create Car Successfully"
    );
  } catch (err) {
    next(err);
  }
};

//Get all car
carController.getCars = async (req, res, next) => {
  //in real project you will getting condition from from req then construct the filter object for query
  // empty filter mean get all
  const filter = {};
  try {
    //mongoose query
    car.f;
    const listOfFound = await car.find(filter).limit(2);
    sendResponse(
      res,
      200,
      true,
      { car: listOfFound, page: 1, total: 1192 },
      null,
      "Get Car List Successfully!"
    );
  } catch (err) {
    next(err);
  }
};

//Update a car
carController.editCar = async (req, res, next) => {
  //in real project you will getting id from req. For updating and deleting, it is recommended for you to use unique identifier such as _id to avoid duplication
  //you will also get updateInfo from req
  // empty target and info mean update nothing
  const targetId = null;
  const updateInfo = "";

  //options allow you to modify query. e.g new true return lastest update of data
  const options = { new: true };
  try {
    //mongoose query
    const updated = await car.findByIdAndUpdate(targetId, updateInfo, options);

    sendResponse(
      res,
      200,
      true,
      { car: updated },
      null,
      "Update Car Successfully!"
    );
  } catch (err) {
    next(err);
  }
};

//Delete car
carController.deleteCar = async (req, res, next) => {
  //in real project you will getting id from req. For updating and deleting, it is recommended for you to use unique identifier such as _id to avoid duplication

  // empty target mean delete nothing
  const targetId = null;
  //options allow you to modify query. e.g new true return lastest update of data
  const options = { new: true };
  try {
    //mongoose query
    const updated = await car.findByIdAndDelete(targetId, options);

    sendResponse(
      res,
      200,
      true,
      { car: updated },
      null,
      "Delete Car Successfully!"
    );
  } catch (err) {
    next(err);
  }
};

//export
module.exports = carController;
