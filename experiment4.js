fuction calculateResult(){
    let n = document.getElementByID("subjects").value;
   let totalMarks = 0;
   for(let i=1; i<=n; i++){
    let marks = parseFloat(prompt("Enter marks for subject " + i));
    totalMarks += marks;
   }
   let averageMarks = total/n;
   let grade;
   let result;  
    if(averageMarks >= 90){
        grade = "A+";
    }   
    else if(averageMarks >= 75){
        grade = "A";
    }       
    else if(averageMarks >= 60){
        grade = "B";    
    }
    else if(averageMarks >= 50){
        grade = "C";
    } 
    else{
        grade = "F";
    }  
     if(averageMarks >= 40){
        grade = "Pass";
    }   
    else{
        grade = "Fail";
    }   
    document.getElementByID("result").innerHTML = 
    "Total Marks: " + totalMarks + "<br>" +
    "Average Marks: " + averageMarks.toFixed(2) + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;
}