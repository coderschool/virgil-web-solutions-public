---
course: virgil-fw
author: Tuan Hoang
description: solutions for full stack web assignments
---
<details>
<summary># Question 1:</summary>
  
##  Content:
  
  ````
  Let's revisit our yard sale example, which now has a few new items. 
  Right now, you only have 250,000 VND in your wallet. 
  How many of the items below cost less than that? 
  Don't write any code yet - just use your normal human brain.
  
  const items = [
	{
		name: 'table',
		price: 100000,
		currency: 'VND',
	},
	{
		name: 'microwave',
		price: 700000,
		currency: 'VND',
	},
	{
		name: 'sofa',
		price: 500000,
		currency: 'VND',
	},
	{
		name: 'coffee beans',
		price: 80000,
		currency: 'VND',
	},
	{
		name: 'bed',
		price: 300000,
		currency: 'VND',
	},
	{
		name: 'yahama exciter',
		price: 22000000,
		currency: 'VND',
	},
];
  
A. Zero: no Item is less than 250,000 VND

B. One: one item is less than 250,000 VND

C. Two: two items are less than 250,000 VND

D. Three: three items are less than 250,000 VND
  ````
  
##  Answer:
````
C
````
</details>

<details>
<summary># Question 2:</summary>
  
##  Content:
  
  ````
  Great, hopefully you were able to correctly identify the items you can afford,
  but maybe it would've been easier to see if you could have sorted the list by price,
  so the cheapest items were at the top, and more expensive items at the bottom.
  Write a function that takes a list of items, and returns a list of those items,
  sorted by price ascending (meaning the cheapest item is first, and most expensive item is last). 
  It's fine to assume all prices are in VND for now.
	function sortItemsByPrice(listOfItems) {
	// Write your code here. 
	// Return a sorted array of the items.
}

const items = [
	{
		name: 'table',
		price: 100000,
		currency: 'VND',
	},
	{
		name: 'microwave',
		price: 700000,
		currency: 'VND',
	},
	{
		name: 'sofa',
		price: 500000,
		currency: 'VND',
	},
	{
		name: 'coffee beans',
		price: 80000,
		currency: 'VND',
	},
	{
		name: 'bed',
		price: 300000,
		currency: 'VND',
	},
	{
		name: 'yahama exciter',
		price: 22000000,
		currency: 'VND',
	},
];
  ````
  
##  Answer:

````
function sortItemsByPrice(listOfItems) {
	// Write your code here. 
	// Return a sorted array of the items.
	for( i = 0; i<listOfItems.length -1;i++)
	{
	    for(j = i+1;j<listOfItems.length;j++)
	    {
	        if(listOfItems[i].price>listOfItems[j].price)
	        {
	            const temp = listOfItems[i];
	            listOfItems[i] = listOfItems[j];
	            listOfItems[j] = temp;
	        }
	    }
	    
	}
	
	return listOfItems;
}
````
</details>

<details>
<summary># Question 3:</summary>
  
##  Content:
  
  ````
Let's go back to the list of items and try to find the items we can afford, this time using actual code!
Write a function that takes two arguments: the array of items, and the max price, 
and returns all items that cost no more than that amount.
As before, it's fine to assume that all prices are in VND.
	function getAffordableItems(listOfItems, maxPriceVnd) {
	// Write your code here. Return an array
	// of the items you can afford.
}

const items = [
	{
		name: 'table',
		price: 100000,
		currency: 'VND',
	},
	{
		name: 'microwave',
		price: 700000,
		currency: 'VND',
	},
	{
		name: 'sofa',
		price: 500000,
		currency: 'VND',
	},
	{
		name: 'coffee beans',
		price: 80000,
		currency: 'VND',
	},
	{
		name: 'bed',
		price: 300000,
		currency: 'VND',
	},
	{
		name: 'yahama exciter',
		price: 22000000,
		currency: 'VND',
	},
];
  ````
  
##  Answer:

````
function getAffordableItems(listOfItems, maxPriceVnd) {
	// Write your code here. Return an array
	// of the items you can afford.
	let result = [];
	for(i = 0; i<listOfItems.length;i++)
	{
	    if(listOfItems[i].price <= maxPriceVnd)
	    {
	        result.push(listOfItems[i]);
	    }
	}
	
	return result;
}
````
</details>

<details>
<summary># Question 4:</summary>
  
##  Content:
  
  ````
Our yard sale is now international - we've decided to offer some of our favorite things
for sale (this problem takes place in our fantasy world). Now note that the list of items
looks like below. We'll want to use the same code as before, but now we have to check for the currency.
For the purposes of this assignment, we've provided you with some hardcoded currency values for KRW, GBP,
and USD. Please use the same numbers we're providing.
Write a function that returns a list of items, with the prices all in VND. Replace the "price" and "currency" of non-VND entries, so for example...
const USD_TO_VND = 23000
// FROM
{ 
	name: "Tesla Cybertruck",
	price: 39000,
	currency: "USD"
}

// TO
{ 
	name: "Tesla Cybertruck",
	price: 897000000,
	currency: "VND"
}
	
const KRW_TO_VND = 20;
const GBP_TO_VND = 30500;
const USD_TO_VND = 23000;

function convertListToVnd(listOfItems) {
	// Write your code here. Return an array
	// of the items with price in VND instead.
}

const items = [
	{
		name: 'table',
		price: 100000,
		currency: 'VND',
	},
	{
		name: 'microwave',
		price: 700000,
		currency: 'VND',
	},
	{
		name: 'sofa',
		price: 500000,
		currency: 'VND',
	},
	{
		name: 'coffee beans',
		price: 80000,
		currency: 'VND',
	},
	{
		name: 'bed',
		price: 300000,
		currency: 'VND',
	},
	{
		name: 'yahama exciter',
		price: 22000000,
		currency: 'VND',
	},
	{
		name: 'Weber EG-1 Coffee Grinder',
		price: 3495,
		currency: 'USD',
		url: 'https://weberworkshops.com/products/eg-1',
	},
	{
		name: 'Tesla Cybertruck',
		price: 39000,
		currency: 'USD',
		url: 'https://www.tesla.com/cybertruck',
	},
	{
		name: 'Royal Dog Leash',
		price: 45,
		currency: 'GBP',
		url: 'https://www.royalcollectionshop.co.uk/buckingham-palace-dog-lead.html',
	},
	{
		name: '화요 Soju Bottle',
		price: 30000,
		currency: 'KRW',
	},
];
  ````
  
##  Answer:

````
function convertListToVnd(listOfItems) {
	// Write your code here. Return an array
	// of the items with price in VND instead.
	for(i = 0; i<listOfItems.length;i++)
	{
	  switch(listOfItems[i].currency)
	  {
	      case "USD":
	          
	              listOfItems[i].price = listOfItems[i].price * USD_TO_VND;
	              break;
	          
	      case "KRW":
	          
	              listOfItems[i].price = listOfItems[i].price * KRW_TO_VND;
	              break;
	      case "GBP":
	          
	              listOfItems[i].price = listOfItems[i].price * GBP_TO_VND;
	              break;
	          
	     default:
	          break;
	  }
	  
	  listOfItems[i].currency = "VND";
	}
	
	return listOfItems;
}
````
</details>
	
<details>
<summary># Question 5:</summary>
  
##  Content:
  
  ````
You've become the world's best coder, and now are one of the richest people in not only Vietnam,
but the world. You want to come back and buy all of CoderSchool's things, especially that $3,495 coffee grinder.
But there's one small problem: you got rich in England, so your entire fortune is in GBP. CoderSchool suggests 
that you can just pay 100,000 GBP for everything, but as the greatest coder in the world, you know that you can 
quickly write some code to calculate exactly how much GBP you should pay.
What's the correct amount to pay? This is a multiple choice question, but it'll be faster to write code to get
to the right answer! Round the final answer to the nearest GBP.
const items = [
	{
		name: 'table',
		price: 100000,
		currency: 'VND',
	},
	{
		name: 'microwave',
		price: 700000,
		currency: 'VND',
	},
	{
		name: 'sofa',
		price: 500000,
		currency: 'VND',
	},
	{
		name: 'coffee beans',
		price: 80000,
		currency: 'VND',
	},
	{
		name: 'bed',
		price: 300000,
		currency: 'VND',
	},
	{
		name: 'yahama exciter',
		price: 22000000,
		currency: 'VND',
	},
	{
		name: 'Weber EG-1 Coffee Grinder',
		price: 3495,
		currency: 'USD',
		url: 'https://weberworkshops.com/products/eg-1',
	},
	{
		name: 'Tesla Cybertruck',
		price: 39000,
		currency: 'USD',
		url: 'https://www.tesla.com/cybertruck',
	},
	{
		name: 'Royal Dog Leash',
		price: 45,
		currency: 'GBP',
		url: 'https://www.royalcollectionshop.co.uk/buckingham-palace-dog-lead.html',
	},
	{
		name: '화요 Soju Bottle',
		price: 30000,
		currency: 'KRW',
		url: 'http://hwayo.com/',
	},
];
	
A. 18820

B. 32886

C. 1003037500

D. 23752540
  ````
  
##  Answer:

````
B
````
</details>

