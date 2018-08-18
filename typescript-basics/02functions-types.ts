
/** 
 * 1. You can sepcify types for the function arguments
 * 2. You can also specify type for the function return type
 * 3. You can also provide default parameters to the functions
*/
function add(a: number, b: number, c, d: number = 0, e?:number) : number{
    return a + b + c + d + e;
}

var sum = add(1,2,3, 4, 5);
console.log(sum);

var sum1 = add("a", "b", "c");
console.log(sum1);