console.log("hello tuan");
//use mongoose to connect to local mongo db
//mongodb://localhost:27017/
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/";

const main = async () => {
  //connect to mongoose
  await mongoose.connect(mongoURI);
  console.log(`connect success ${mongoURI}`);
  //Define Schema
  const kittySchema = new mongoose.Schema({
    name: { type: String, required: true },
    //shorthand
    // name: String,
  });
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model("Kitten", kittySchema);
  // const singleKitty = await Kitten.findOneAndUpdate(
  //   { name: "quiet" },
  //   { name: "new TRUE" },
  //   { new: true }
  // );
  //findByIdAndUpdate("",{})
  // const singleKitty = await Kitten.findOne({ _id: "62c7e59708f70c4c2cb72dab" });
  // const singleKittyById = await Kitten.findById("62c7e59708f70c4c2cb72dab");
  // await Kitten.findByIdAndDelete("62c7e5a059c5bb2964fc3b69");
  // await Kitten.create({ name: "ninja" });
  const kittyClub = await Kitten.find({ name: "ninja" });
  console.log("Welcome", kittyClub);
  // console.log("changed", singleKitty);
};

main().catch((err) => console.log(err));
