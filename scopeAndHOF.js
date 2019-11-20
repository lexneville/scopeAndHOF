//------------------ GLOBAL SCOPE -----------------------
let globalVar = "globalVar";

console.log(`Global Scope: ${globalVar}`);
//Output: Global Scope: globalVar

const callVar = () => {
console.log(`Inside function: ${globalVar}`);
//Output: Inside function: globalVar
}

callVar();

//------------------ FUNCTION SCOPE ----------------------

let globalVar = "globalVar";

console.log(`Global Scope: ${globalVar}`);

const callVar = () => {
let localVar = "localVar";

console.log(`Inside function: ${globalVar}`);
console.log(`Inside function: ${localVar}`);
}

callVar();
console.log(`Global Scope with local variable: ${localVar}`);
//ReferenceError: localVar is not defined

//--------------------- SCOPE CHAIN ---------------------------

let globalVar = "globalVar";

console.log(`Global Scope: ${globalVar}`);

const outerFun = () => {
    let outerVar = "outerVar";
    console.log(`Outer function: ${globalVar}`);
    console.log(`Outer function: ${outerVar}`);
    console.log(`Outer function: ${innerVar}`); //ReferenceError: innerVar is not defined
    const innerFun = () => {
        let innerVar = "innerVar";
        console.log(`Inner function: ${globalVar}`);
        console.log(`Inner function: ${outerVar}`);
        console.log(`Inner function: ${innerVar}`);
    }
    innerFun();
}
outerFun();
innerFun(); //ReferenceError: innerFun is not defined (as it's inside outerFun())

//------------------- GLOBAL SCOPE EXAMPLE ---------------------------------------

var name = "Hammad";

console.log(name); // logs "Hammad"

function logName() {
    console.log(name); // 'name' is accessible here and everywhere else
}

logName(); // logs "Hammad"

//------------------- FUNCTION SCOPE EXAMPLE -------------------------------------
// Global Scope 
function someFunction() {
    // Function Scope #1
    function someOtherFunction() {
        // Function Scope #2
    }
}

// Global Scope
function anotherFunction() {
    // Function Scope #3
}
// Global Scope

//----------------------- BLOCK SCOPE ------------------------------------
// Block statements like if and switch conditions or for and while loops, unlike functions, don't create a new scope. 
// Variables defined inside of a block statement will remain in the scope they were already in.

if (true) {
    // this 'if' conditional block doesn't create a new scope
    var name = "Hammad"; // name is still in the global scope
}

console.log(name); // logs "Hammad"

// ECMAScript 6 introduced the let and const keywords. These keywords can be used in place of the var keyword.

var name = "Hammad";

let likes = "Coding";
const skills = "Javascript and PHP";

// Contrary to the var keyword, the let and const keywords support the declaration of local scope inside block statements.

if (true) {
    // this 'if' conditional block doesn't create a scope

    // name is in the global scope because of the 'var' keyword
    var name = "Hammad";

    // likes is in the local scope because of the 'let' keyword
    let likes = "Coding";

    // skills is in the local scope because of the 'const' keyword
    const skills = "JavaScript and PHP";
}

console.log(name); // logs "Hammad"
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined
