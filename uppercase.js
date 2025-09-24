const str = "Abdullah Al9 M0amun hi ."
// const result = str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1))
// console.log(result)

// const resultt = str.split("").filter(item => item.toUpperCase() === item &&  /[A-Z]/.test(item))
// const result = str.split("").filter(item => /[0-9]/.test(item)).join("")
// const result = str.split("").filter(item=> item.match(/[0-9]/g)).join("")
const result = str.split(/\s+/).length

console.log(result)
// console.log(resultt)


