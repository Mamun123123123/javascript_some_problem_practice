const str = "Abdullah AL mamun a d 3 6 a p"
function c(st) {
       let word  =st.split(" ").sort((a,b)=>b.length-a.length)
       return  word

}
const f = c(str);
console.log(f[0])

// let ob = {
//        name: "mamun",
//        age:22,
//        greet: function(){
//               console.log(`Hello:${this.name}  age :  ${this.age}`)
//        }
// }
// ob.greet()