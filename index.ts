#! /usr/bin/env node
import chalk from "chalk"
import inquirer from "inquirer"
console.log(chalk.yellow("*****Welcome To My Adventure Quiz*****"));
console.log(chalk.blueBright("You Can Required Maximum 5 Points for The Window!!"));

let points:number = 0
// Question1
let ques1 = await inquirer.prompt([{
    name:"one",
    message:"Typescript is a Superset Of?",
    type:"list",
    choices:["Python","C++","Javascript","Java"]
}])
switch(ques1.one){
case "Javascript":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
// question2
let ques2 = await inquirer.prompt([{
    name:"two",
    message:"Which of the following is a TypeScript feature that is not available in JavaScript?",
    type:"list",
    choices:["Arrow Function", "Interfaces","Promises","Asynchronous Functions"]
}])
switch(ques2.two){
    case "Interfaces":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
// Question 3
let ques3 = await inquirer.prompt([{
    name:"three",
    message:"How do you define a variable in TypeScript with a specific type?",
    type:"list",
    choices:["let variableName: type;","var variableName = type;","const variableName = type;","type variableName = type"]
}])
switch(ques3.three){
   case "let variableName:type":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
// Question 4
let ques4 = await inquirer.prompt([{
    name:"four",
    message:"What is the command to compile TypeScript code to JavaScript?",
    type:"list",
    choices:["ts-node","tsc","npm run compile","node"]

}])
switch(ques4.four){
    case"tsc":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
// Question 5
let ques5 = await inquirer.prompt([{
    name:"five",
    message:"Which of the following is the correct way to create an interface in TypeScript?",
    type:"list",
    choices:["interface MyInterface { key: string; }","interface MyInterface(key: string);","interface MyInterface: { key: string; }","interface MyInterface = { key: string; };"]

}])
switch(ques5.five){
    case "interface MyInterface { key: string; }":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"))
    }
        //  Question 4
let ques6 = await inquirer.prompt([{
    name:"six",
    message:"How do you specify an optional property in a TypeScript interface?",
    type:"list",
    choices:["key?: type","optional key: type","key: type?","key: optional type"]

}])
switch(ques6.six){
    case"key?: type":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}// Question 7
let ques7 = await inquirer.prompt([{
    name:"seven",
    message:"Which TypeScript feature allows you to narrow the type of a variable within a conditional block?",
    type:"list",
    choices:["Type Assertions","Type Guards" ,"Generics","Enums"]

}])
switch(ques7.seven){
    case"Type Guards":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
    
// Question 8
let ques8 = await inquirer.prompt([{
    name:"eight",
    message:"What does the readonly keyword do in TypeScript?",
    type:"list",
    choices:["It defines a variable that cannot be reassigned.","It makes a property visible only within the class.","It prevents the modification of a property.",
"It marks a function as static."]

}])
switch(ques8.eight){
    case"It prevents the modification of a property.":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}// Question 9
let ques9 = await inquirer.prompt([{
    name:"nine",
    message:"Which of the following is true about TypeScript enums?",
    type:"list",
    choices:["They are mutable by default.","They can have string values.","They cannot be used in switch statements.",
        "They do not exist in the compiled JavaScript code."]

}])
switch(ques9.nine){
    case "They can have string values.":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
// Question 10
let ques10 = await inquirer.prompt([{
    name:"ten",
    message:"How can you enforce a function to accept a parameter of a specific type in TypeScript?",
    type:"list",
    choices:["By using typeof operator","By specifying the type in the function signature","By using instanceof operator","By using a for loop"]

}])
switch(ques10.ten){
    case" By specifying the type in the function signature":
    console.log(chalk.yellowBright("Your Answer is Correct!!"));
    points++
break;
default:
    console.log(chalk.red("Incorrect Answer"));
    
}
if(points >=5){
    console.log(chalk.bold.yellow("CONGRATULATIONS!!!"));
    console.log(chalk.green(`Your Points:${points}`));  
}else{
    console.log(chalk.bold.red("You Loose!Try Next Time"));
    console.log(chalk.red(`Your Points:${points}`));
    
}
