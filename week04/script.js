let form = document.forms[0];
//same as document.getElementByTagname('form')[0].

//also this is the same thing:
form = document.forms['search']
form.addEventListener('submit', search, false)

function search(event) {
    alert(`You searched for: ${input.value}`)
    event.preventDefault()
}

const [input1, button] = form.elements;

const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'))
input.addEventListener('blur', () => alert('blurred'))

const newForm = document.forms['hero'];
newForm.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();

    const hero = {};
    hero.name = newForm.heroName.value;
    hero.realname = newForm.realName.value;

    hero.powers = [];
    for (let i = 0; i < newForm.powers.length; i++) {
        if (newForm.powers[i].checked) {
            hero.powers.push(newForm.powers[i].value);
        }
    }

    hero.category = newForm.category.value;

    alert(JSON.stringify(hero));

}

// constructor function example: makes an object
const Dice = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const redDice = new Dice();

//Class example

// class Dice {
//     constructor (sides=6){
//         this.sides = sides;
//     }

//     roll() {
//         return Math.floor(this.sides * Math.random() +1)
//     }
// }

const blueDice = new Dice(20)

const greenDice = new redDice.constructor(10);

class Student {
    constructor(firstName, lastName, iNumber, classesTaken = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.iNumber = iNumber;
        this.classesTaken = classesTaken;
    }
}

const table = document.querySelector('tbody');

const students = []
student1 = new Student('Cierra', 'Morris', 00000000);
student2 = new Student('Weylin', 'Morris', 989898908)
student3 = new Student('Kobin', 'Howell', 123456789)
students.push(student1);
students.push(student2);
students.push(student3);

students.map(student => {
    table.innerHTML += (`<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.iNumber}</td>
    </tr>`)
})

//Extends:
//Normal turtles:
class Turtle {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    swim() {
        return `${this.name} paddles in the water`;
    }
}

//Ninja turtles:
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`
    }
}

//Create your own type of special array to add extra functionality:
class myArray extends Array {
    constructor(...args){
        super(...args);
    }
    delete(i) {
        return this.splice(i, 1);
    }
}

//then use it.
const list = new myArray(1, 2, 3);
list.delete(1);
console.log(list);