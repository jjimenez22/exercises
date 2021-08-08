const limitChars = (word, limit) => {
    let lastChar
    let count
    let result = ''

    for (char of word) {
        if (char === lastChar) {
            count++
        } else {
            count = 0
            lastChar = char
        }
        if (count < limit) {
            result += char
        }
    }

    return result
}

console.log(limitChars("aaab", 2))
console.log(limitChars("aabb", 1))
console.log(limitChars("aabbaa", 1))
