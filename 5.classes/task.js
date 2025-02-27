"use strict"

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book._state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		if (this.books.length !== 0) {
			const selectedBook = this.books.find(book => book[type] === value);
			return selectedBook !== undefined ? selectedBook : null;
		}
		return null;
	}

	giveBookByName(bookName) {
		if (this.books.some(book => book.name === bookName)) {
			const selectedBook = this.books.find(book => book.name === bookName);
			this.books = this.books.filter(book => book.name !== bookName);
			return selectedBook;
		} else {
			return null;
		}
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}



	addMark(grade, subject) {
		if (grade >= 2 && grade <= 5) {
			if (!this.marks.hasOwnProperty(subject)) {
				this.marks[subject] = [grade];
			} else {
				this.marks[subject].push(grade);
			}
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}

		const grades = this.marks[subject];
		const sumOfGrades = grades.reduce((acc, grade) => acc += grade, 0);
		return (sumOfGrades / grades.length);
		

	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		const sumGradesAll = subjects.reduce((acc, subject) => {
			let sumGrades = getAverageBySubject(subject);
			acc += sumGrades;
			return acc;
		}, 0)
		return (sumGradesAll / subjects.length);
	}
}