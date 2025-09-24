// const range = n=>[...Array(n).keys()].map(x=>x+1) // 1 to n number auto print 
// const range = n=>[...Array(n).keys()].map(x=>x+1).filter(x=> x%2===0) // 1-n ar modde only even number show
// const range = n=>[...Array(n).keys()].map(x=>x+1).reduce((sum,x)=>sum+x,0) // 1-n sum
// const range = n=>[...Array(n).keys()].map(x=>x+1).reduce((product,x)=>product*x,1)//1-n gun 
// const range = n=>[...Array(n).keys()].map(x=>x+1)
// let n = 5
// console.log(range(n));
let arr = [1,2,3,4,5],i=1,j=4
const prefixSum = arr =>arr.map((s=>x=>s+=x)(0))
let pref = prefixSum(arr)
console.log(pref[j] - (i>0?pref[i-1]:0));
