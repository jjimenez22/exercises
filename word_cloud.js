const removeWord = (array, word) => {
    const index = array.indexOf(word)
    if (index !== -1) array.splice(index, 1)
}

const canMakeWordCloud = (words, cloud) => {
    if (words.length < cloud.length) return false

    for (word of words) {
        removeWord(cloud, word)
        if (!cloud.length)
            return true
    }
    return false
}

function reducer(cloud, word) {
    removeWord(cloud, word)
    return cloud
}
const canMakeWordCloud2 = (words, cloud) => {
    return !words.reduce(reducer, cloud).length
}

console.log(canMakeWordCloud2(['my', 'city', 'rules', 'car', 'boat'], ['my', 'city', 'drools']))
console.log(canMakeWordCloud2(['my', 'city', 'rules'], ['my', 'city', 'my', 'rules']))
console.log(canMakeWordCloud2(['my', 'city', 'rules', 'my', 'team', 'wins', 'my'], ['my', 'rules', 'my', 'city']))

