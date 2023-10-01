// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseName = 'webdev Challenge';
let coursePrice = 12000;
let courseGoals = ['Everday' , 'Hard' , 'Silghtly'];


// 2) Output ("alert") the three variable values

alert(courseGoals);
alert(courseName);
alert(coursePrice);

// 3) Try "grouping" the three variables together and still output their values thereafter

let course = {name :'webdev Challenge' , price:12000, goals :  ['Everday' , 'Hard' , 'Silghtly']};

// 4) Also output the second element in your "main goals" variable

alert(course.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function coursePrinter(course,courseNum){
    let courseGoals = course[courseNum];
    return courseGoals;
}

// 6) Execute your custom command from (5) and output ("alert") the result

alert(coursePrinter(course.goals,2));

let a = 'hi' + ' there'; // 'hi there' => a string
let b = 'the number' + ' 2'; // 'the number 2' => a string
let c = 'the number' + 2; // 'the number2' => a string
let d = 2 + 2; // 4 => a number
let e = 2 + '2'; // '22' => a string! (i.e. the number 2 is treated like a string '2' here)
let f = '2' + '2'; // '22' => a string! ('2' and '2' concatenated)
let g = '2' * 3; // 6 => a number