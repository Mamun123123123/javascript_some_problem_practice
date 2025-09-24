const str = "Abdullah Al Mamun"
function c(st) {
    let words  = st.trim().split(/\s+/)
    return words.length
}
console.log(c(str))