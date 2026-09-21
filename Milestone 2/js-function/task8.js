// grade calculation

function gradeCalculate(marks){
    if(marks <= 100 && marks >= 80){
        console.log('A+');        
    }
    else if(marks < 80 && marks >= 70){
        console.log('A');        
    }
    else if(marks < 70 && marks >= 60){
        console.log('A-');        
    }
    else if(marks < 60 && marks >= 50){
        console.log('B');        
    }
    else if(marks < 50 && marks >= 40){
        console.log('C');        
    }
    else if(marks < 40 && marks >= 33){
        console.log('D');        
    }
    else{
        console.log("Fail!");        
    }
}

gradeCalculate(79)
