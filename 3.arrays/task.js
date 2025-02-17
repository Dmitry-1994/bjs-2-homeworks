"use strict"

function compareArrays(arr1, arr2) {
	const array1 = Array.from(arr1);
	const array2 = Array.from(arr2);

	return (array1.length === array2.length) && (array1.every((element, index) => array2[index] === element));

}

function getUsersNamesInAgeRange(users, gender) {
  
}