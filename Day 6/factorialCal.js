function factorial(n) {
    if (n < 0) {
        console.log("Negative number");
    }
    else {
        var decimalValue = n.toString().split(".").length;
        if (decimalValue > 1) {
            console.log("Provide whole number");
        }
        else {
            var count = 1;
            for (var i = 1; i <= n; i++) {
                count = count * i;
            }
            console.log("The factorial of given number is:".concat(count));
        }
    }
}
factorial(5);
factorial(-3);
factorial(0.2);
factorial(3.6);
