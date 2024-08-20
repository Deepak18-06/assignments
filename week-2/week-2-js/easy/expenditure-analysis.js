/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();
  for (let i = 0; i< transactions.length; i++) {
    category = transactions[i]["category"]
    if (map.get(category) != undefined) {
      map.set(category, map.get(category)+transactions[i]["price"])
    } else {
      map.set(category, transactions[i]["price"])
    }
  }
  result = [];
  map.forEach((val, key) => {
    obj = {
      category: key,
      totalSpent: val
    }
    result.push(obj);
  })
  return result;
}

module.exports = calculateTotalSpentByCategory;
