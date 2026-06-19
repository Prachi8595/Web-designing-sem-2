let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = parseInt(document.getElementById("math").value);
let science = parseInt(document.getElementById("science").value);
let english = parseInt(document.getElementById("english").value);

let student = {
name:name,
roll:roll,
math:math,
science:science,
english:english
};

students.push(student);

document.getElementById("output").innerHTML = "Student Added Successfully";
}

function displayStudents(){

let result="";

for(let s of students){
result += `Name: ${s.name} | Roll: ${s.roll} | Math:${s.math} | Science:${s.science} | English:${s.english} <br>`;
}

document.getElementById("output").innerHTML = result;

}

function calculateTotal(){

let result="";

for(let s of students){

let total = s.math + s.science + s.english;

result += `${s.name} Total Marks: ${total} <br>`;

}

document.getElementById("output").innerHTML = result;

}

function calculateAverage(){

let result="";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total/3;

result += `${s.name} Average: ${avg.toFixed(2)} <br>`;

}

document.getElementById("output").innerHTML = result;

}

function showTopStudents(){

let result="";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

if(avg > 80){
result += `${s.name} Average: ${avg}<br>`;
}

}

document.getElementById("output").innerHTML = result;

}

function showFailed(){

let result="";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

if(avg < 40){
result += `${s.name} Failed (Avg: ${avg})<br>`;
}

}

document.getElementById("output").innerHTML = result;

}

function countStudents(){

document.getElementById("output").innerHTML = "Total Students: " + students.length;

}