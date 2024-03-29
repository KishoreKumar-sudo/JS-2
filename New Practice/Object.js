const obj1 = { a: 20, b: { x: 40, y: 60 } }
const obj2 = { a: 20, b: { x: 40, y: 60 } }
const obj3 = { a: 20, b: { x: 80, y: 60 } }
function compare(obj1, obj2) {
    for (let key in obj1) {
        if (typeof obj1[key] === "object") {
            return compare(obj1[key], obj2[key]);
        }
        else {
            if (obj1[key] === obj2[key]) {
                return false
            }
        }
    }
    return true
}
console.log(compare(obj1, obj2));//false
console.log(compare(obj1, obj3));//false