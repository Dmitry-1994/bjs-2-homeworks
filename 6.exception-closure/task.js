"use strict"

function parseCount(number) {
	const parseNumber = parseFloat(number);
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

class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
			this.firstSide = firstSide;
			this.secondSide = secondSide;
			this.thirdSide = thirdSide;
		} else {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	get perimeter() {
		return this.firstSide + this.secondSide + this.thirdSide
	}

	get area() {
		const halfPerimeter = this.perimeter / 2;
		return parseFloat(Math.pow(halfPerimeter * (halfPerimeter - this.firstSide) * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide), 1 / 2).toFixed(3));
	}
}

function getTriangle(firstSide, secondSide, thirdSide) {
	try {
		return new Triangle(firstSide, secondSide, thirdSide);
	} catch (error) {
		const errorMsg = "Ошибка! Треугольник не существует";
		return {
			get perimeter() {
				return errorMsg;
			},
			get area() {
				return errorMsg;
			}
		}
	}
}