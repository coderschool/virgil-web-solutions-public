const mongoose = require("mongoose");
//Create schema
const fooSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    flag: { type: Boolean, enum: [true, false], require: true },

  },
  {
    timestamps: true,
  }
);
//Create and export model
const Foo = mongoose.model("Foo", fooSchema);
module.exports = Foo;

