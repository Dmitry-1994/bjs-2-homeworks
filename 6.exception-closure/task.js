"use strict"

function parseCount(number) {
	const parseNumber = Number.parseFloat(number);
	if (Number.isNaN(parseNumber)) {
		throw new Error("Невалидное значение")
	}
	return parseNumber;
}

function validateCount(number) {
	try {
		const parseNumber = parseCount(number);
		return parseNumber;
	} catch (error) {
		return error;
	}
}