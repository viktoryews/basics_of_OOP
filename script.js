/** 1 */
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    displayInfo() {
        console.log(`В книге ${this.title} автор ${this.author} передает содержание на ${this.pages} страницах`);
    };
}

const book = new Book('Свита короля', "Нора Сакавич", 520)
book.displayInfo();


/** 2 */
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript


class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    display() {
        console.log(`Name: ${this.name} 
Age: ${this.age} 
Grade: ${this.grade}`);
    }
}
const student1 = new Student('John Smith', 16, '10th grade');
student1.display();

