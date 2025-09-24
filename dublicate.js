const str = "Abdullah"
function f(st) {
    const r = [...new Set(st)].join("")
    return r
}
console.log(f(str))