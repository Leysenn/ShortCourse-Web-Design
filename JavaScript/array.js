// arrayValueWithLiteranINotaion.unshift("kiwi");
// console.log("After using unshift");
// console.table([arraryValueWithLiteranlNotaion]);

// arrayValueWithLiteranINotaion.push("Water melon");
// console.log("After using unshift");
// console.table([arrayValueWithLiteranINotaion]);

// arrayValueWithLiteranINotaion.pop();
// console.log("After using unshift");
// console.table([arrayValueWithLiteranINotaion]);
// arrayValueWithLiteranINotaion.shift();
// console.log("After using unshift");
// console.table([arrayValueWithLiteranINotaion]);

// arrayValueWithLiteranINotaion.splice(1,2,"kiwi");
// console.log("After using unshift");
// console.table([arrayValueWithLiteranINotaion]);

// let arrayValueWithLiteranINotaionTwo = ["Dog", "Cat", "Chicken"];
// let mergedArray = arrayValueWithLiteranINotaion.concat(arrayValueWithLiteranINotaionTwo);
// console.table(mergedArray);

// let mapValue = mergedArray.map((array) => console.log(array));

// let filterValue = mergedArray.filter((value)=> {
//     if(value == "Dog"){
//         console.log(`The value of filter  of dog ${value}`)
//     }
//     console.log(`The value of filter value: ${value}`)
// })

// let filterValueOfDog = mergedArray.filter((dof) => dog.length > 3)

// console.log(filterValueOfDog);

// const OddNumber = [20 , 20, 10, 7, 4, 2, 5, 3];
// let resultOddNumber = OddNumber.filter(odd => odd% 2 == 1);
// console.log(`Result of odd number: ${resultOddNumber}`)


let arrayValueWithLiterna1Notation = ["apple", "banana", "orange"];

arrayValueWithLiterna1Notation.unshift("kiwi");
console.log("After using unshift");
console.table([arrayValueWithLiterna1Notation]);

arrayValueWithLiterna1Notation.push("Water Melon");
console.log("After using push");
console.table([arrayValueWithLiterna1Notation]);

arrayValueWithLiterna1Notation.pop();
console.log("After using pop");
console.table([arrayValueWithLiterna1Notation]);

arrayValueWithLiterna1Notation.shift();
console.log("After using shift");
console.table([arrayValueWithLiterna1Notation]);

arrayValueWithLiterna1Notation.splice(1, 2, "kiwi");
console.log("After using splice");
console.table([arrayValueWithLiterna1Notation]);

let arrayValueWithLiterna1NotationTwo = ["Dog", "Cat", "Chicken"];
let mergeArray = arrayValueWithLiterna1Notation.concat(arrayValueWithLiterna1NotationTwo);
console.table(mergeArray);

let mapValue = mergeArray.map((array) => console.log(array));

let filterValue = mergeArray.filter((value) => {
    if (value == "Dog") {
        console.log(`The value of filter value of dog: ${value}`);
    }
    console.log(`The value of filter value: ${value}`);
    return true;
});

let filterValueOfDog = mergeArray.filter((dog) => dog.length > 3);
console.log(filterValueOfDog);

const OddNumber = [20, 20, 10, 7, 4, 2, 5, 3];
let resultOddNumber = OddNumber.filter(odd => odd % 2 == 1);
console.log(`Result of Odd Number: ${resultOddNumber}`);