"use strict"

function compareArrays(arr1, arr2) {
	const array1 = Array.from(arr1);
	const array2 = Array.from(arr2);

	return (array1.length === array2.length) && (array1.every((element, index) => array2[index] === element));

}

function getUsersNamesInAgeRange(users, gender) {
	return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) => {
		acc += item;
		if ((index === arr.length - 1) && (arr.length !== 0)) {
			return acc / arr.length;
		}
		return acc;

	}, 0);

}