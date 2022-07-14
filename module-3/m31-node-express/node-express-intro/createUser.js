const { faker } = require("@faker-js/faker");
const fs = require("fs");
/** Generating data
 * Input receive ✅
 * Check input ✅
 * Process data ✅
 * Save
 */

const createUser = (numberOfUsers, overwrite) => {
  if (!numberOfUsers) {
    console.log("please input number");
    return;
  }
  numberOfUsers = parseInt(numberOfUsers);
  console.log("Creating users");
  //read current database
  //turn JSON to JS object
  let data = JSON.parse(fs.readFileSync("db.json"));
  if (overwrite) {
    data.users = [];
  }
  for (let i = 0; i < numberOfUsers; i++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.people(),
    };
    console.log("Created", user.name, user.email, user.avatar);
    console.log("-------");
    data.users.push(user);
  }
  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log(`Create ${numberOfUsers} success`);
};
const numberInput = process.argv.slice(2)[0];
const overwriteInput = process.argv.slice(2)[1];

createUser(numberInput, overwriteInput);
