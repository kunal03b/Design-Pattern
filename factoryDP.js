class Student {
    constructor(name) {
        this.name = name
        this.type = 'Student'
    }
}

class Teacher {
    constructor(name) {
        this.name = name
        this.type = 'Teacher'
    }
}

class PersonFactory {
    createPerson(name, type) {
        switch (type) {
            case 'Student': return new Student(name)
            case 'Teacher': return new Teacher(name)
        }
    }
}

const personFactory = new PersonFactory()
const personsDatabase = []
personsDatabase.push(personFactory.createPerson('Kunal Sharma', 'Student'))
personsDatabase.push(personFactory.createPerson('Dr. Kamal Prakash', 'Teacher'))
console.log(personsDatabase)
