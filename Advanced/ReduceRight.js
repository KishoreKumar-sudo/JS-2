//reduceRight() mtd executes a reducer function for array element & it works from right to left.
// it returns a single value.

const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((acc, val) => acc.concat(val));

console.log(result); //[ 4, 5, 2, 3, 0, 1 ]