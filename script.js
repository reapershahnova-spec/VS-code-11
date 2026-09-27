// Function that handles an undefined parameter using a conditional statement
function myfunction(x, y) {
    if (y === undefined) {
        y = 2; // Default value if y is not provided
    }
    
    var result = x * y;
    document.getElementById("result1").innerHTML = "The result of multiplication is: " + result;
}

// Displaying initial values
var a = 18;
var b = 5;

document.getElementById("value1").innerHTML = "The value of a is: " + a;
document.getElementById("value2").innerHTML = "The value of b is: " + b;

// Calling function when one parameter is missing
myfunction(12);