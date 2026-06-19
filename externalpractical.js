function generateInputs() {
    let n = document.getElementById("subjects").value;
    let container = document.getElementById("marksContainer");

    container.innerHTML = "";

    for (let i = 1; i <= n; i++) {
        container.innerHTML += `
            <input type="number" class="mark"
            placeholder="Enter marks for Subject ${i}">
        `;
    }
}

function calculateResult() {
    let marks = document.querySelectorAll(".mark");

    let total = 0;
    let pass = true;

    for (let i = 0; i < marks.length; i++) {
        let m = Number(marks[i].value);

        total += m;

        if (m < 35) {
            pass = false;
        }
    }

    let average = total / marks.length;
    let grade = "";

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${pass ? "PASS" : "FAIL"}</p>
    `;
}