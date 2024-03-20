function plusMinus(arr) {
    const counts = arr.reduce((acc, n) => {
        acc[n > 0 ? 'plus' : n < 0 ? 'min' : 'zero']++
        return acc
    }, { plus: 0, min: 0, zero: 0 })

    return `${(counts.plus / arr.length).toFixed(6)}\n${(counts.min / arr.length).toFixed(6)}\n${(counts.zero / arr.length).toFixed(6)}`
}

const array1 = [1, 1, 0, -1, -1]
const array2 = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(array1), "\n")
console.log(plusMinus(array2))