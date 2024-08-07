/*Assignment Requirements:
1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative
integer, and returns the nth Fibonacci number.
2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two
Fibonacci numbers and update these iteratively up to `n`.
3. Provide example calls to the `fibonacci` function with different integers to demonstrate the
function’s functionality.
**/
function fibonacciSeries(num) {
    var first = 2;
    var second = 1;
    var total;
    var arr = new Array();
    if (num < 0) {
        console.log("Its negative number");
    }
    else {
        for (var i = 0; i <= num; i++) {
            total = first + second;
            first = second;
            second = total;
            arr.push(total);
        }
        console.log("Fibonacci series is: ".concat(arr));
    }
}
fibonacciSeries(9);
fibonacciSeries(-9);
