//variables declared with the 'let' keyword are block-scoped, so even though 'a' is re-initialized to 20 within the if statement,
//that value of 'a' is only visible with if statement's block scope & console is in outer scope therefore it can be access 'a' variable in outer scope. 

let a = 10
if (a === 10) {
    let a = 20
}
console.log(a); //10

// Template Literals
let firstname = "KishoreKumar";
let lastname = "Padamanabhan";
let text = `Welcome ${firstname},${lastname}!`;
console.log(text); //Welcome KishoreKumar,Padamanabhan!

let text1 = `Pushpendra`;
console.log(text1);//Pushpendra

let text2 = `He's often called "Push"`;
console.log(text2);//He's often called "Push"


let text3 = `The quick brown fox jumps over the lazy dog`;
console.log(text3);//The quick brown fox jumps over the lazy dog