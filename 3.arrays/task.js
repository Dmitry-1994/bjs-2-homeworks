"use strict"

function compareArrays(arr1, arr2) {
    const array1 = Array.from(arr1);
    const array2 = Array.from(arr2);

    if (array1.length === array2.length) {
        return array1.every((element, index) => array2[index] === element);
    } else {
        return false;
    } 
  
}

function getUsersNamesInAgeRange(users, gender) {
  
}