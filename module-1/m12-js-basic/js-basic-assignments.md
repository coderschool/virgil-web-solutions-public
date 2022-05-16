---
course: virgil-fw
author: Tuan Hoang
description: solutions for full stack web assignments
---

[Back to README](../README.md)

# Assignment 1
<details>
<summary># Question 1:</summary>
  
##  Content:
  
  ````
 °F to °C
  Given the function fToC(fDegree) , try and fix it so that it correctly converts Fahrenheit degree (°F) to Celsius degree (°C).
  (°F − 32) × 5/9 = °C
  function fToC (fDegree) {
	const cDegree = (fDegree - 32 * 5 / 9)
	return cDegree
}
  ````
  
##  Answer:
````
function fToC (fDegree) {
	const cDegree = (fDegree - 32) * 5 / 9
	return cDegree
}
console.log(fToC(32))
````
</details>

<details>
<summary># Question 2:</summary>
  
##  Content:
  
  ````
Earth to Moon
The distance between the Earth and the Moon is about 30 times Earth's diameter.
Given Earth's diameter is 12,742 km, calculate the distance in kilometers.
  function calculateDistance () {
	const diameter = 12742
	const distance = diameter
	return distance
}
console.log(calculateDistance()) 
  
  ````
  
##  Answer:
````
function calculateDistance () {
	const diameter = 12742
	const distance = diameter*30
	return distance
}
console.log(calculateDistance()) 
console.log(fToC(32))
````
</details>

<details>
<summary># Question 3:</summary>
  
##  Content:
  
  ````
Given the function calculateBMI(height, weight) , try and fix it so that it correctly 
calculate the BMI with the given height and weight.
Hint:
  BMI = weight in kg/(height in m)^2
  
 function calculateBMI (height, weight) {
	const bmi = weight / height * height
	return "your BMI is " + bmi
}
console.log(calculateBMI(1.6, 55)) // expected result: "your BMI is 21.48"
  
  ````
  
##  Answer:
````
function calculateBMI (height, weight) {
	const bmi = weight / (height*height)
	return "your BMI is " + bmi
}
console.log(calculateBMI(1.6, 55)) // expected result: "your BMI is 21.48"
````
</details>

<details>
<summary># Question 4:</summary>
  
##  Content:
  
  ````
Write a function to check if you are allowed to drink beer in New York.
  
  function canDrinkBeer(age) {
	if(age > 21) {
		return "You are " + age + ", you can drink beer in New York"
	} else {
		return "You are " + age + ", you can not drink beer in New York"
	} 
}
console.log(canDrinkBeer(21)) 
// expected result: "You are 21, you can drink beer at New York"
  
  ````
  
##  Answer:
````
function canDrinkBeer(age) {
	if(age >= 21) {
		return "You are " + age + ", you can drink beer in New York"
	} else {
		return "You are " + age + ", you can not drink beer in New York"
	} 
}
console.log(canDrinkBeer(21)) 
// expected result: "You are 21, you can drink beer at New York"
````
</details>

# Assignment 2

- Q1(mc): What is the data type of 2021?
- -> Number

- Q2(mc): What is the data type of the result of 1 + 12?
- -> Number

- Q3(mc): What is the data type of the result of 20 + "21"?
- -> String

- Q4(mc): Given the array:What is the value of myArray[3]?
- -> 4

- Q5(mc): Given the array:What is the value of myArray[myArray.length-1]?
- -> 4

- Q6(mc): Given the array:What is the value of myArray[myArray.length]?
- -> undefined

- Q7(mcma): Given the object: How do you print out what Jon knows? .admonition-title { font-weight: 700; } .admonition-body { color: black; } .admonition::before { content: ''; display: block; position: absolute; width: 5px; top: 0; left: 0; height: 100%; } .admonition p { margin-block-end: 0 !important; } .admonition { padding: 10px 20px; position: relative; overflow: hidden; margin-bottom: 15px; } .note { background-color: #fef9e7; color: #f9c74f; } .note::before { background-color: var(--note); } .note .admonition-title::before { content: '🕮'; margin-right: 3px; } NOTE You can select more than 1 answer!
- -> `formData["thingsKnown"]` & `formData.thingsKnown`

- Q8(mcma): Given the object: To set the workPlace to "The Wall" you can run:
- -> `formData["workPlace"]="The Wall"` & `formData.workPlace="The Wall"`

- Q9(mc): What is the result of the following code?
- -> "Coding is VERY easy!"

- Q10(mc): What will be logged to the console after running this code snippet?
- -> false

- Q11(mc): Will you have dinner?
- -> Yes

- Q12(mcma): Given the following code:Choose the value of arr to get the result "arr is not empty".
- -> `[1,2,3] [0] ["1","2","3"]`

- Q13(mcma): Given the following code:Choose the value of arr to get the result "arr is truthy".
- -> `[ ]`

- Q14(mc): What is the value of result after executing the following code?
- -> `"Bran Stark is not an adult"`

# Assignment 3

<details>
<summary># Question 1:</summary>
  
##  Content:
  
  ````
 Body Type from BMI
 Write a function to check your body type base on weight and height. Known that:
  BMI = weight in kg/(height in m)^2
  
Check the BMI, if BMI is:
less than 18: underweight
18 to less than 25: normal weight
25 to less than 30: overweight
30 and above: obesity
Return the right body type.

Examples:

bodyType(1.64,60) should return "normal weight"

bodyType(1.6,70) should return "overweight"
  
  function bodyType (height, weight) {
	//YOUR CODE HERE	
}
  ````
  
##  Answer:
````
function bodyType (height, weight) {
	//YOUR CODE HERE
	const bmi = weight / (height * height)
  
	if(bmi <18) return "underweight";
	else if(bmi <25) return "normal weight";
	else if(bmi <30) return "overweight";
	else return "obesity";
}
````
</details>
  
<details>
<summary># Question 2:</summary>
  
##  Content:
  
  ````
 Count Your Calories
 You are on a diet and record your total calorie intake every day.
 After a week, the 7 numbers are recorded in an array. 
 Calculate your total weight gain or loss for the week if you burn 
 2000 calories a day, and 1 kg is equivalent to 7700 calories.
  
 NOTE: 1 kg = 7700 calories
  
 Examples:
totalKcal([1600, 1600, 1500, 1700, 1800, 2000, 2000]) // should return - 0.233766234, meaning you will lose 0.233766234 kg
totalKcal([2000, 2000, 2000, 2000, 2000, 2000, 2000]) // should return 0
  
  function totalKcal(arr) {
	let result = 0;
	// YOUR CODE HERE
	return result;
}
  
  ````
  
##  Answer:
````
function totalKcal(arr) {
	let result = 0;
	// YOUR CODE HERE
	for(i = 0; i<arr.length;i++)
	{
	    result += (arr[i]-2000)/7700
	}
	

	return result
}
````
                               
 <details>
<summary># Question 3:</summary>
  
##  Content:
  
  ````
Yard Sale
  
You are moving to a new place and having a yard sale. You make a list of all the items and their corresponding prices. Calculate the total money in VND you can earn if you sell all the items.
For example:
  const items = [{
        name: "table",
        price: 100000,
        currency: "VND"
    },
    {
        name: "microwave",
        price: 700000,
        currency: "VND"
    },
    {
        name: "sofa",
        price: 500000,
        currency: "VND"
    }
]

function totalPrice(arr) {
let total = 0
	//YOUR CODE HERE
return total
}
  ````
  
##  Answer:
````
function totalPrice(arr) {
let total = 0
	//YOUR CODE HERE
	for(i = 0; i<arr.length ; i++)
	{
	    total += arr[i].price
	}
	
return total
}
````          
  
