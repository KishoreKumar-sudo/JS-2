// array.push(item1,item2,..., itemX)
//push() adds new items to the end of an array & changes the length of the array, returns the new length.
let a = [1, 2, 3];
a.push(a[2]++);
console.log(a);//[1,2,4,3]