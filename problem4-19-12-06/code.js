function findMissingPositiveInt(array) {
    const uArray = array.filter(int => int > 0);
    const uArraySorted = uArray.sort((a,b) => a - b);
    for(let i = 1; i < uArraySorted.length; i++) {
        if (i < uArraySorted[i-1]) return i;
    }
    return uArraySorted.length + 1;
}

module.exports = findMissingPositiveInt;