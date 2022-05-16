---
course: virgil-fw
author: Tuan Hoang
description: solutions for full stack web assignments
---

<details>
<summary># Question 1:</summary>
  
##  Content:
  
  ````
 What is the error after running these codes:
  const address = {
  street: "15 Le Thanh Ton",
  city: "Ho Chi Minh"
  }
  
  address.district = "1",
  console.log(address.country);
  
  A. No error
  B. Assignment to constant variable
  C. country is not defined
  D. undefined
  ````
  
##  Answer:
````
 D. undefined
````
</details>

<details>
<summary># Question 2:</summary>
  
##  Content:
  
  ````
 Choose the option(s) that will return 15 Le Thanh Ton, district 1, HCMC, Vietnam
  
  getAddress({
  city:"HCMC",
  country: "VietNam",
  address:{
     number:15,
     street:"Le Thanh Ton",
     district: "1"}
  })
  
  function getAddress(obj){
  //YOUR CODE HERE
    return `${number} ${street}, ${district}, ${city} ${country}`;
  }
  
  Note: Choose all that applies.
  A. const { city, country, address:{number, street, district}} = obj
  B. const { city, country, number, street, district} = obj
  C. const { city, country, address.number, address.street, address.district } = obj
  D. const obj = { city, country, address:{number, street, district}}
  ````
  
##  Answer:
````
A. const { city, country, address:{number, street, district}} = obj
````
</details>
  
<details>
<summary># Question 3:</summary>
  
##  Content:
  
  ````
 Add in a line of code so that getFoodItems().mango returns "mango".
  function getFoodItems(){
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "ornges"],
    ["cookies", "cake", "pizza", "chocolate"]
  ];
  
  const carrots = food[0][0];
  const cookies = food[2][0];
  
  //YOUR ANSWER HERE
  //const [,[, mango, orange]] = food
  const [[],[apple, mango]] = food
  return {carrots, cookies, mango}
}

getFoodItems().mango
    
Note: Choose all that applies.
A. const [[],[apple, mango]] = food
B. const [,[, mango]] = food
C. const [,[, mango, orange]] = food
D. const [[], [mango]] = food
  ````
  
##  Answer:
````
A. const [[],[apple, mango]] = food
C. const [,[, mango, orange]] = food
````
</details>
  
<details>
<summary># Question 4:</summary>
  
##  Content:
  
  ````
Which of the options below will return true?
  function restParams(first, rest)
  {
    console.log(rest);
    return rest[0] === 1 && rest[1] === 2;
  }
  
A. restParams(0, 1, 2)
B. restParams([0, 1, 2])
C. restParams(0, [1, 2])
D. restParams(1, 2, 3)
  ````
  
##  Answer:
````
A. restParams(0, 1, 2)
````
</details>
  
<details>
<summary># Question 5:</summary>
  
##  Content:
  
  ````
 Which of the options for the value of obj below will make isAdult(obj) return true?
  
  function isAdult({name, address, ...rest})
  {
    return rest.age >= 18;
  }
  
  A. { name : "Jon", address : "Earth", age : 30 }
  B. { age : 30, address : "Earth", name : "Jon" }
  C. { rest: { age : 30 } }
  D. { age: 30 }
  ````
  
##  Answer:
````
A. { name : "Jon", address : "Earth", age : 30 }
B. { age : 30, address : "Earth", name : "Jon" }
D. { age: 30 }
````
</details>
  
<details>
<summary># Question 6:</summary>
  
##  Content:
  
  ````
 Join the arrays with one of the options below. The expected result is [ 0, 1, 2, 3, 4, 5, 6].
  
 function concatenateArray(){
  const arr1 = [0,1,2,3];
  const arr2 = [4,5,6];
  //YOUR CODE HERE
  return result;
}
  
  A. const result = arr1 + arr2
  B. const result = [...arr1, ...arr2]
  C. const result = arr1 + [...arr2]
  D. const result = [arr1, ...arr2]
  ````
  
##  Answer:
````
B. const result = [...arr1, ...arr2]
````
</details>
 
<details>
<summary># Question 7:</summary>
  
##  Content:
  
  ````
 Create Bran's Brother "Robb Stark" with the options below.
 Note that the only difference is their first names and it must stay that way.

Note: Choose all that applies.
  
 const personA = {
  firstName:"Bran",
  lastName: "Stark",
  gender:"male",
  house:"Stark",
  father:"Eddard Stark",
  mother: "Catelyn Tully"
}
  
  A. const personB = { ...personA, firstName: "Robb"}
  B. const personB = personA; personB.firstName = "Robb"
  C. const personB =  {...personA}; personB.firstName = "Robb"
  D. const personB = { firstName: "Robb", ...personA }
  ````
  
##  Answer:
````
A. const personB = { ...personA, firstName: "Robb"}
C. const personB =  {...personA}; personB.firstName = "Robb"
````
</details>
