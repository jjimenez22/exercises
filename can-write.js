// todo: excercise description
const words = ["hello", "coffee", "tofe"]
const letters = ["h", "e", "l", "l", "o", "c", "f", "t"]

const canWrite = async (word, letters) => {
    if (word === '')
        return true
    if (removeIfFound(letters, word[0]))
        return canWrite(word.substring(1), letters)
    return false
}

const removeIfFound = (array, elem) => {
    const i = array.indexOf(elem)
    if (i !== -1) {
        array.splice(i, 1)
        return true
    }
    return false
}

Promise.all(
    words.map((word) => canWrite(word.slice(), [...letters])
        .then((can) => console.log(`${word}: ${can}`)))
)
