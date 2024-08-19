function find() {
    let a = parseFloat(document.getElementById("side1").value);
    let b = parseFloat(document.getElementById("side2").value);
    let c = parseFloat(document.getElementById("side3").value);
    if (a + b > c && a + c > b && b + c > a) {
        let type;

        if (a === b && b === c) {
            type = "Equilateral";
        } else if (a === b || b === c || a === c) {
            type = "Isosceles";
        } else {
            type = "Scalene";
        }

        document.getElementById("res").innerHTML = `The triangle is ${type}.`;
    } else {
        document.getElementById("res").innerHTML = " can't form a valid triangle.";
    }
}
