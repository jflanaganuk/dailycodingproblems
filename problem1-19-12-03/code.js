
function twoNumbersAddTogetherInList(list, number) {
    let additionSuccess = false;
    let inverseArray = [];
    for(let i = 0; i < list.length; i++) {
        const val = list[i];
        let mappedSuccess = false;
        
        for(let j = 0; j < inverseArray.length; j++) {
            if ((val + inverseArray[j]) === number) {
                mappedSuccess = true;
                break;
            }
        }
        if (!mappedSuccess) {
            inverseArray.push(val);
        } else {
            additionSuccess = true;
            break;
        }
    }
    return additionSuccess;
}

module.exports = twoNumbersAddTogetherInList;
