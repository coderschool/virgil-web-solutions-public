const mongoose = require("mongoose");
//Create schema
const carSchema = mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    release_date: {
      type: Number,
      min: 1900,
      required: true,
    },
    transmission_type: {
      type: String,
      enum: [
        "MANUAL",
        "AUTOMATIC",
        "AUTOMATED_MANUAL",
        "DIRECT_DRIVE",
        "UNKNOWN",
      ],
      required: true,
    },
    size: {
      type: String,
      enum: ["Compact", "Midsize", "Large"],
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Create and export model
const Car = mongoose.model("Car", carSchema);
module.exports = Car;
