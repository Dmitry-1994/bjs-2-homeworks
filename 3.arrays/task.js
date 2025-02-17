"use strict"

function compareArrays(arr1, arr2) {
	const array1 = Array.from(arr1);
	const array2 = Array.from(arr2);

	return (array1.length === array2.length) && (array1.every((element, index) => array2[index] === element));

}

function getUsersNamesInAgeRange(users, gender) {
    const filterGender = users.filter(user => user.gender === gender);
    const mapAge = filterGender.map(user => user.age);
    return mapAge.reduce((acc, item, index) => {
        acc += item;
        if ((index === mapAge.length - 1) && (mapAge.length !== 0)) {
            return acc / mapAge.length;
        }
        return acc;
            
        }, 0);
      
      }