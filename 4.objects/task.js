"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}


let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
student1.setSubject("Algebra");
student2.setSubject("Geometry");
console.log(student1);
console.log(student2);
