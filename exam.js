// const arr = [3,7,2,9,12]
// const result = arr.filter(item => item % 2 !== 0)
// console.log(result)

// const arr = [5,10,15,20]
// const result = arr.reduce((sum,item)=>sum+item)
// console.log(result)

// const str = "Programming"
// const result = str.split("").reverse().join("")
// console.log(result)

// const str = "JavaScript is fun"
// const result = str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
// console.log(result)

// let arr =[2,4,1,6,8,3,9]
// let result = arr.sort((a,b)=>b-a)
// console.log(result[1])

// const str = "Abdullah AL Mamun"
// let result =str.split(" ").sort((a,b)=>b.length - a.length)
// console.log(result[1])

// const arr = [1,2,3,5]
// const arr2 = [3,4,5]
// const result = arr.filter(item => arr2.includes(item)).join(" ")
// console.log(result)


//1

// const arr = [2,3,4,10,1]
// function f(st,num) {
//     let set = new Set()
//     for(let str of st){
//             if(set.has(num-str)) return true;
//             set.add(str)  
//     }
//     return false
// }
// console.log(f(arr,12))


// let users = [
//     {name:"a",age:20},
//     {name:"b",age:25},
//     {name:"c",age:18}

// ]

// let result = users.filter(item => item.age>=18).map(item=> item.name)
// console.log(result)

// function f() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("Done");
            
//         }, 2000);
//     })
    
// }

// f().then(msg=>console.log(msg))



// function users() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("Abdullah Al Mamun")
//         }, 3000);
//     })
// }



// async function f() {
//     try {
//         let data = await users()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// f()

// let arr = [1,2,3,4,5,6,7,8,9]
// let result=arr.filter(item => item%2 !== 0)
// console.log(result)

// let data =[
//     {name:"al mamun"},
//     {name:"sara"},
//     {name:"jara"}
// ]
// let r = data.map(item => item.name).join("")
// let result = r.match(/[aeiouAEIUO]/gi)?.length

// console.log(result)


// function sum(n) {
//     return n.toString().split("").reduce((sum, d) => sum + Number(d), 0);
// }

// console.log(sum(38))




// function f() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("Hi")
//         }, 1000);
//     })
// }
// function f1() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("How are you?....")
//         }, 2000);
//     })
// }
// function f2() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("You are so cute........")
//         }, 3000);
//     })
// }
// f().then((msg)=>console.log(msg))
// f1().then((msg)=>console.log(msg))

// f2().then((msg)=>console.log(msg))

// if (undefined) {
//     console.log("Mamun is absent");
    
// } else {
//     console.log("Mamun is present");
    
// }

// let obj = {
//     a:{
//         b:undefined
//     }
// }
// console.log(obj.a?.b?.c?.d??"mamun");

// var abc = 25
// if(function f(){}){
//     abc +=typeof f
// }
// console.log(abc)

// let arr = [1,2,3,4,5,6,7,2,5]
// // let result = [...new Set(arr)]
// let result = arr.filter((item,index)=>index !== arr.indexOf(item))
// console.log(result)


// let str = "my name is abdullah al mamun am"
// // let result =  str.includes("ma")
// // let result = str.match(/[aeiou]/gi)?.length || 0
// let result = str.match(/al/g)
// console.log(result);


// let users = [
//     {name:"ae",age:20},
//     {name:"b",age:25},
//     {name:"c",age:18}

// ]

// let result = users.map(item => item.name).join(" ").match(/[aeiouAEIUO]/g).length

// console.log(result);

// let num =234
// let result = num.toString().split("").reduce((mul , item)=> mul * item)
// console.log(result);

// let str ="programming"
// let result = [...new Set(str.split(""))].join("")
// console.log(result);

// let arr = [1,[2,[3,4],5]]
// let result = arr.flat(Infinity)
// console.log(result)

// let num = 1234
// let n = num<0
// let result = Math.abs(num).toString().split("").reverse().join("")
// if(n) result= "-" + result
// console.log(result);


// const str = "hi hello hi hello why you hi "
// let arr = [2,1,2,1,2,3,2,5,6,1,6]
// function freqQ(st){
//     //    let word = st.split(" ")
//     let word = st
//     //    console.log(word);
//         const map = new Map()
//         for (const w of word) {
//             map.set(w,(map.get(w) || 0) + 1)
//         }
//        return map
// }
// console.log(freqQ(arr))

// let arr = [2,1,2,1,2,3,2,5,6,1,6]
// let result=[...new Set(arr)].length
// console.log(result);


// let arr = [2,7,11,15]
// function f(ar,target) {
//     let set = new Set()
//     for (const arr of ar) {
//         if(target - arr) return true
//         set.add(arr)
//     }   
//     return false
// }
// console.log(f(arr,9));

// let str = "aabbcddee"
// function f(st) {
//     let map = new Map()
//     for (const str of st) {
//         map.set(str,(map.get(str) || 0) + 1 )
//     }
//     for (const [k,v] of map) {
//         if(v === 1) return k
//     }
// }
// console.log(f(str));

// let str = "I love coding"
// let result = str.split(" ").reverse().join(" ")
// console.log(result);


// function f(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve("Done") 
//         }, num * 1000);
//     })
// }
// f(3).then(msg=>console.log(msg))

// function j(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // let name = "mamun"
//             console.log(`id:${id}, name:"mamun"`);
            
//         }, 2000);
//     })
// }

// async function f() {
//     let data = await j(1)
//     console.log(data);
// }
// f()

// let num ="1234s"
// let result = num.split("").reduce((sum,item)=>sum+(isNaN(Number(item))?0:Number(item)),0)
// console.log(result);

// let str = "aabbcfffde"
// function f(st) {
//     let map = new Map()
//     for (const str of st) {
//         map.set(str,(map.get(str) || 0) + 1 )
//     }
//    let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  
//   return sorted.map(([k, v]) => k);
// }
// console.log(f(str));


// let ob =[{
//     name: "mamun",
//     age:22,
//     city:"Dhaka"
// },{name:"k",age:23,city:"Dhaka"},{name:"t",age:33,city:"comilla"}
// ]
// function f(arr,prop) {
//     return arr.reduce((s,obj)=>{
//         const key = obj[prop]
//         if(!s[key]) s[key] = []
//         s[key].push(obj)
//         return s
//     },{})
// }

// console.log(f(ob,"city"));


// let arr = [2,-5,10,-3,7]
// let result = arr.reduce((sum,item) => item < 0 ? sum + item:sum,0)
// console.log(result);

// let str = "hi am"
// let result = str.split(' ').join("")
// console.log(result);


// function num_of_digits(num) {
// 	// let result = num.toString().split("").length
//     // return result

//     if (num === 0) return 1;
//   num = Math.abs(num);
//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }
//   return count;
// }
// console.log(num_of_digits(12))

// let arr = [2,3,4,5,6]
// 	let result = arr.sort((a,b)=>b-a).join(" ")
// console.log(result)

// let ob = [{name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }]

//    let r = Object.values(ob).reduce((sum,item)=>sum+item.budget,0)
// console.log(r);

let arr = [2, 7, 3, 9, 6, 1, 6, 3]

function f(a){
	for (let i = 0; i < arr.length; i++) {
		if(i%2===0 && arr[i]%2 !==0) return false
		if(i%2==1 && arr[i]%2 !==1) return false	
	}
	return true
}

console.log(f(arr))