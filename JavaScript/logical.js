// logical operators
let score = parseFloat(prompt("Input your score:"));

if(score >= 90 && score <=100){
    alert("Grade A");

}else if(score >= 80 && score <89){
    alert("Grade B");

}else if(score >= 70 && score <79){
    alert("Grade C");

}else if(score >= 60 && score <69){
    alert("Grade D");

}else if(score >= 50 && score <59){
    alert("Grade E");
  
}else if(score <50){
    alert("Grade F");

}else{
    alert("Invalid Score");
}