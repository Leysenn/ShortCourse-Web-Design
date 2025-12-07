let number1 = parseInt(prompt("Input Value Nubmer 1:"));
let number2 = parseInt(prompt("Input Value Nubmer 2:"));
let operator = prompt("Choose The Operators To Perform( +,-,*,/,%,++,--,**):");


switch(operator){
    case '+': alert(number1+number2); break;
    case '-': alert(number1-number2); break;
    case '*': alert(number1*number2); break;
    case '/': alert(number1/number2); break;
    case '%': alert(number1%number2); break;
    case '++': alert(++number1); break;
    case '--': alert(--number1); break;
    case '**': alert(number1**number2); break;
    default : alert("Invalid operator")
}