function calculateFactorial() {
    let n = document.getElementById("num").value;
    let fact = 1;

    if (n === "" || n < 0) {
        document.getElementById("result").innerHTML = "Enter a valid positive number";
        return;
    }

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    document.getElementById("result").innerHTML = "Factorial = " + fact;
}
