let arr = [11, 12, 21,22,31,33,43,44,54, 55,100, 101,222,252,254,255]

console.log(
    arr.filter((a) => {

        let pal = a+ "";

        if (pal.split('').reverse().join('') === a + "")
            return true

        return false

    }))