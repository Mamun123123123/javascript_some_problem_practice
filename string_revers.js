// const str = "Abdullah Al Mamun"
// const result = str.split('').reverse().join("")
// console.log(result) 

const str = "abdullah al mamun"
let result = str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join("\n")
console.log(result)
// let newstr  = str.split(' ')
// console.log(newstr)
// newstr.forEach((item)=>console.log(item))

