function calculateResult() {

    let subjects = parseInt(prompt("Enter number of subjects:"));

    let total = 0;


    for (let i = 1; i <= subjects; i++) {
        let marks = parseFloat(
            prompt("Enter marks for Subject " + i + ":")
        );

        total += marks;
    }

    let average = total / subjects;

    let grade;
    let result;

    if (average >= 90) {
        grade = "A+";
        result = "Pass";
    }
    else if (average >= 75) {
        grade = "A";
        result = "Pass";
    }
    else if (average >= 60) {
        grade = "B";
        result = "Pass";
    }
    else if (average >= 40) {
        grade = "C";
        result = "Pass";
    }
    else {
        grade = "F";
        result = "Fail";
    }

    document.getElementById("output").innerHTML =
        "<b>Total Marks:</b> " + total + "<br>" +
        "<b>Average Marks:</b> " + average.toFixed(2) + "<br>" +
        "<b>Grade:</b> " + grade + "<br>" +
        "<b>Result:</b> " + result;
}