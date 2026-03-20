let employees = [];
function addEmployee(){
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if(name === "" || empId === "" || isNaN(salary) || dept === ""){
        alert("Please fill all fields correctly!");
        return;
    } 
    let employee = {          
        name: name,
        id: empId,
        salary: salary,
        dept: dept
    };
    employees.push(employee);
    document.getElementById("result").innerHTML = "Employee added successfully!";
}