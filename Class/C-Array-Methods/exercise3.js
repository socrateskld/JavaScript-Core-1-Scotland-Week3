
// We want a new array with all the numbers doubled

let numbersList = [5, 3, 15, 8, 24, 31, 12];

function doubleValue(x){
    return x * 2;
}

let doubledNumbers = [];

// Write a "for" loop to ITERATE through the numbersList array
// Call the function doubleValue for each number and ADD (push) the result to the doubledNumbers array

for(let j=0; j<numbersList.length; j++){
    doubledNumbers.push(doubleValue(numbersList[j]));
}



console.log(doubledNumbers);