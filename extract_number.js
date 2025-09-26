// const str = "abullah123mamun"
// function f(st) {
//     let numbrs = [];
//     let num = st.trim().split("")
//     for (const n of num) {
//           if(!isNaN(n)){
//             numbrs.push(n)
//           }
//     }
//     return numbrs.join("")
// }
// console.log(f(str))

// const result = str.match(/[0-9]/g).join("")
// const result = str.match(/[a-zA-z]/g).join("")

// console.log(result);

// function missing(arr) {
//       let n = arr.length + 1;
//       let sum = (n*(n+1)/2)
//       let arr_sum = arr.reduce((a,b)=>a+b)
//       return sum - arr_sum
// }
// console.log(missing([1,2,3,4,6]))


 let str = "abdullah Al mamun 123 @ gmail . com 345 mamun 567 hi hlw 897 ok ? ";
            // let num = str.match(/[0-9]/g);
 let strings = str.match(/[a-zA-Z]/g).filter(item => !item.match(/[aeiouAEIUO]/g)).join(" ")
 console.log(strings);
 

