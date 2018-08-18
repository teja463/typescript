var a: number;
var b: boolean;
var c: string;
var intArray: number[];
var stringArray: string[];

var myTuple: [number, string];
var myTupleArry: [number, string][];

a = 10;
b = true;
c = "Teja";

// Number Arrays
intArray = [1,2,3,4];
intArray.push(5);
console.log(intArray.length);

// String Array
stringArray = ["a","b"];

// Tuple
myTuple = [1,"Teja"];

// Tuple Array
// You can also use an tuple array
myTupleArry = [[1, "Teja"], [2, "Chaitu"]];
myTuple = myTupleArry.pop();

