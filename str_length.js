const str = "Mamun"
function l(st) {
    let count = 0;
    for (const s of st) {
        if(s !==0){
            count++
        }
    }
    return count
}
console.log(l(str))