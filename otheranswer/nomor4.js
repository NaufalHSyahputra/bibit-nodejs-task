function groupingAnagram(arrays) { 
    let result = []
    arrays.forEach(array => {
        let sorted = array.split("").sort().join("")
        if (result[sorted]) { 
            result[sorted].push(array)
        } else { 
            result[sorted] = [array]
        }
    });
    return Object.values(result)
}
const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

const groupedAnagram = groupingAnagram(words)

console.log(groupedAnagram)