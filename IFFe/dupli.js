let a = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let arr = ((a, index) => {

    return [...new Set(a)]

})(a)

console.log("Array without Duplicates :    " + arr)
