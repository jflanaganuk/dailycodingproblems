
function productOfArrayExceptSelf(array) {
    return array
            .map((_, index) => array.filter((_, i) => i !== index)
            .reduce((acc, cur) => acc * cur))
}

module.exports = productOfArrayExceptSelf;
