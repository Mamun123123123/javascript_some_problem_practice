// let arr = [2,3,1,5,6,8,3,4]
// console.log(even(arr))
// function even(ar) {
//     let evens = []
//     for (const arr of ar) {
//         if(arr % 2 === 0) evens.unshift(arr)
//     }
//       evens.sort((a,b)=>a-b)
//     return evens
// }
// function largest(ar) {
//     let max = ar[0];                
//     for (let i = 1; i < ar.length; i++) {
//         if (ar[i] > max) {
//             max = ar[i];
//         }
//     }
//     return max;
// }
// console.log(largest(arr));

// let arr1 = [1,2,3]
// let arr2 = [3,4,5]
// let arr3 = [...arr1,...arr2]
// let result = [...new Set(arr3)]
// console.log(result);

// let arr = [2,4,1,6,8,4,3,9]
// let result = arr.reverse().join(" ")
// console.log(result);

// let str = "mada"
// console.log(f(str));
// function f(st) {
//     let r = st.split("").reverse().join("")
//     console.log(r);
    
//     if(r === st) return true
//     else return false
// }

// let str = "Abdullah AaL mamun"
// console.log(f(str));
// function f(st) {
//     let s = st.split("")
//     let map = new Map()
//     for (const str of s) {
//         map.set(str,(map.get(str)|| 0) + 1)
//     }
//     let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
//     return sorted.map((k,v)=> k).join(" ")[0]
    
// } 

// let str = "abdullah al mamun"
// let r = str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
// let r = str.match(/[aeiouAEIUO]/g).length
// console.log(r);

// function f() {
//     return new Promise((resolve, reject) => {
//         let r = Math.floor(Math.random() * 100)
//         if (r % 2 === 0 ) {
//             resolve(`num : ${r} , type : "even" `)
//         } else {
//             reject(`num : ${r} , type : "odd`)
//         }
//     })
// }

// let interval= setInterval(() => {
//     f()
//     .then(msg => console.log(msg))
//     .catch(error=>console.log(error))
// }, 1000);

let arr = [1,2,3,2,3]
function f(ar) {
     return arr.filter(num => arr.indexOf(num) ===arr.lastIndexOf(num))
    // new Set(nums).size !== nums.length
}
console.log(f(arr));


// rotat

// k=k%Array.length
// Array.slice(-k).concat(Array.slice(0,-k))


