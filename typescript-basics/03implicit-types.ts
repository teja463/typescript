/**
 * Here a, b, c are of type number, boolean and string respectively
 */
var a = 10;
var b = true;
var c = "Teja";

// Here 'd' is of type any because it was declared then assigned a value
var d;
d = 20;

function greet(){
    return "Hello World!!";
};

// hello will be of type stringa because greeting() function returns string
var hello = greet();

// hi will be of type any because it was declared then assigned a value
var hi;
hi = greet();