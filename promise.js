// Delay Message with Promise .....
// function delay_message(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("Correct Answer")
//         }, 2000);
//     })
// }
// delay_message().then(msg => console.log(msg))

// async await....
// function add(a,b) {
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             console.log(a+b)
//         }, 1000);
//     })
// }
// async function sum() {
//     let sum = await add(5,6)
//     console.log(sum)
// }
// sum()
// let count =1
// setInterval(() => {
//     console.log(count)
//     count++
// }, 1000);


function get(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Welcome , our Website.........")
        }, 1000);
    })
}
function gett(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("How can I help you .....?")
        }, 2000);
    })
}



async function wlc() {
    let data = await get();
    console.log(data)
}
async function wlcc() {
    let data2 = await gett();
    console.log(data2)

}

wlc()
wlcc()

