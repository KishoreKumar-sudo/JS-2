// syntax => array.forEach(function(currentValue, index, arr), thisValue)

//forEach() executes a provided function once for each array element & dz mtd is not executed for empty elements. 

//Multiply each element:
const numbers = [65, 44, 12, 4]
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 10
}
console.log(numbers) //[ 650, 440, 120, 40 ]