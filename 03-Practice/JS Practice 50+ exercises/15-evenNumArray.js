let arr = [1, 2, 3, 4, 5, 6, 7]

function evenNumArray(arr) {
   return arr.filter(num => num % 2 === 0)
}

console.log(evenNumArray(arr))
console.log(arr)