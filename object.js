let person ={
    name: "Mamun",
    age:22
}
// let jsonn = JSON.stringify(person)
// console.log(person)
// console.log(jsonn)
person.city ="Dhaka"
// console.log(person)
person.age=30
// console.log(person)
delete person.city
console.log(person)
for (const ob in person) {
    console.log(ob + ":"+ person[ob])
}




