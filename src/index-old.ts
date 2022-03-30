// interface Human {
// 	name: string
// 	age: number
// 	gender: string
// }

class Human {
	public name: string
	public age: number
	public gender: string
	constructor(name: string, age: number, gender: string) {
		this.name = name
		this.age = age
		this.gender = gender
	}
}

// const person = {
// 	name: 'Jeongho',
// 	age: 31,
// 	gender: 'male',
// }

const jeongho = new Human('jeongho', 31, 'male')

const sayHi = (person: Human): string => {
	return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi(jeongho))

export {}
