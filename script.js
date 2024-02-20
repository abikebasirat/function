// function declaration.

function square(numer) {  //params is passed in the parenthesis
    //statement
}
square() //function Call invocation




// Function Expression
  
const nameFunction = function(params){}



// Arrow function 

const arrowFn = () => {}



function sayHello(firstName){
    console.log(`Hello ${firstName}`)
}

sayHello('Hayzed ')
sayHello('Class captain 👮‍♀️')
sayHello('Nafisah')


function sayHello(name){
    console.log(`Hello${name}`)
}
sayHello(`Hayzed`)


const division = (numer) => {
    return numer / numer;
}

const answer = division(4)
console.log(answer)


const square2 = numer => {return numer * numer}
const square3 = numer => numer * numer

//const not Accepted = name, age => {}


function add(numer){
    return numer + numer
}

const sum = add(2);
console.log(sum)




const  subtraction = (a ,b) => {
    return a -b

}
const minus = subtraction(8,4);
console.log(minus)




// Nested function

function getScore(){
    const num1 = 2;
    const num2 = 3;
    const name = "DLT Afica";

    function add(){
        return `${name} is ${num1 + num2} years old`;
    }

    return add();
}

console.log(getScore());

const nestedFunction = (a , b, c) => {
    const anotherFunction = () => {
        return `${a + b +c}`;
    }

return anotherFunction();
}
console.log(nestedFunction(2, 4, 6));





function addNumber(a, b) { 
    return  a + b >= 10 ? "sum is greater than or equals to 10": a + b;
    }  

    const greater =addNumber(9,10);
    console.log(greater);

    const lesser = addNumber(3, 4);
    console.log(lesser);




    // Check for even numbers

    const isEven = (nestedGame) => {
        return nestedGame % 2 === 0 ? true : false;
    }

    const even = isEven(6);
    console.log(even)


    const odd = isEven(7);
    console.log(odd)


    // check for prime number
    function isprime(number){
        if(number <=1){
            return false
        }
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if(number % i === 0){
                    return false
                }
                
            }
            return true;
    }

    const prime = isprime(3);
    console.log(prime)