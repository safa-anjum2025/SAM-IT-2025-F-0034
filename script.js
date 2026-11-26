const form = document.getElementById("studentForm");

function calculateGrade(mark) {
    if (mark >= 75) {
        return "A";
    } else if (mark >= 65) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else if (mark >= 35) {
        return "S";
    } else {
        return "F";
    }
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const genderInput = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!genderInput) {
        alert("Please select your gender.");
        return;
    }

    const gender = genderInput.value;

    const courses = Array.from(
        document.querySelectorAll(
            'input[name="course"]:checked'
        )
    ).map(function(item) {
        return item.value;
    });

    const marks = [
        document.getElementById("mark1").value,
        document.getElementById("mark2").value,
        document.getElementById("mark3").value
    ].map(Number);

    if (marks.some(function(mark) {
        return !Number.isFinite(mark) ||
               mark < 0 || mark > 100;
    })) {
        alert("Enter marks between 0 and 100.");
        return;
    }

    const total = marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    const average = total / marks.length;

    const grades = marks.map(calculateGrade);


    document.getElementById("resultName").textContent =
        "Name: " + name;

    document.getElementById("resultGender").textContent =
        "Gender: " + gender;

    document.getElementById("resultCourse").textContent =
        "Course: " +
        (courses.length > 0 ? courses.join(", ") : "Not selected");


    document.getElementById("resultMark1").textContent = marks[0];
    document.getElementById("resultMark2").textContent = marks[1];
    document.getElementById("resultMark3").textContent = marks[2];


    document.getElementById("resultGrade1").textContent = grades[0];
    document.getElementById("resultGrade2").textContent = grades[1];
    document.getElementById("resultGrade3").textContent = grades[2];


    document.getElementById("resultAverage").textContent =
        average.toFixed(2);


    document.getElementById("total").textContent =
        "Total Marks: " + total + " / 300";


    document.getElementById("success").textContent =
        name + "'s results calculated successfully.";


    document.getElementById("formPage").style.display = "none";
    document.getElementById("output").style.display = "block";

    window.scrollTo(0, 0);

});


function goBack() {

    document.getElementById("output").style.display = "none";
    document.getElementById("formPage").style.display = "block";

    window.scrollTo(0, 0);
}