
let mentorsList = ["Sundar", "Reshma", "Shantanu", "Arvind"];

function isTrainee(personName){
    if(mentorsList.includes(personName)){
        return false;
    }else{
        return true;
    }
}

let namesList = ["Aria", "Shantanu", "Brian", "Arvind", "Reshma", "Candice", "Sundar", "Sunesh"];

let newArray = [];

// Write a "for" loop which ITERATES over the namesList array
// Call the isTrainee function for each value
// add each name to the new array only if the name is NOT a mentor
for (let i=0; i <numbersList.length; i++){
    if (isTrainee(numbersList[i])) {
        newArray.push(namesList[i]);
    
}
}



console.log("Answer should be Aria, Brian, Candice, Sunesh");
console.log(newArray);