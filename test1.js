function miniMaxSum(arr) {
    const numbers = arr.sort((a, b) => a - b)
    const minArr = numbers.slice(0, -1).reduce((accumulator, current) => accumulator + current, 0)
    const maxArr = numbers.slice(1).reduce((accumulator, current) => accumulator + current, 0)

    return `${minArr} ${maxArr}`
}

const array1 = [1, 3, 5, 7, 9]
const array2 = [1, 2, 3, 4, 5]

console.log(miniMaxSum(array1))
console.log(miniMaxSum(array2))