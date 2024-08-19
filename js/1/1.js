function check(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum == number) {
        return "perfect";
    } else if (sum > number) {
        return "abundant";
    } else {
        return "deficient";
    }
}

function display() {
    let number = document.getElementById("num").value;
    let result = check(number);
    alert("The number " + number + " is " + result + ".");
}