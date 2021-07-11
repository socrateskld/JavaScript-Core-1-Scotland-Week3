
// This function has two INPUT PARAMETERS, called x and y
function calculateVolume(x, y , z){
    return x * y * z; // It RETURNS a number
}

let answer1 = calculateArea(3, 5, 5);
console.log(answer1);


let answer2 = calculateVolume(4, 2, 5);
console.log("Answer should be 40: " + answer2);