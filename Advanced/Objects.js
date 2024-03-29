const person = {
    name: 'John',
    age: 30,
    gender: 'Male'
};

const jobObject = {
    job: 'Developer',
    salary: 10000
};

//get all object keys
console.log(Object.keys(person)); //[ 'name', 'age', 'gender' ]

//get all object values
console.log(Object.values(person)); //[ 'John', 30, 'Male' ]

//get all object entries
console.log(Object.entries(person)); //[][ [ 'name', 'John' ], [ 'age', 30 ], [ 'gender', 'Male' ] ]

//assign object to another object
console.log(Object.assign(person, jobObject));
/* {
    name: 'John',
    age: 30,
    gender: 'Male',
    job: 'Developer',
    salary: 10000
  } */
