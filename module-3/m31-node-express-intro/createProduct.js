const fs = require("fs");
const csv = require("csvtojson");

const createProduct = async () => {
  let newData = await csv().fromFile("target.csv");
  let data = JSON.parse(fs.readFileSync("db.json"));
  newData = newData.map((e) => {
    return { name: e.Product };
  });

  data.products = newData;

  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log("done");
};
createProduct();
