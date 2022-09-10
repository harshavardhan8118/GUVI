let a = [0, 1, 5, 6, 7, 9]
let arr = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let val = array.shift()
        array.push(val)
    }
    return array

})(a, 3)

console.log("Array roatated k times: " + arr)