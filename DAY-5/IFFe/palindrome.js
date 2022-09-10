

let a = [5,11, 12, 21,22,31,33,43,44,54, 55,100, 101,222,252,254,255]
let pal = (function (a) {

    return (a.filter((num) => {

        let b = num + ""

        if ((b.split('').reverse().join('')) === num + "")
        {
            return true;
        }

        return false;

    }))
})(a);

console.log(pal)