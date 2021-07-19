function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeElementsDisabledState(elementsArray, isDisabled){
    for (let element of elementsArray){
        element.disabled = isDisabled;
    }
}

function generateRandomArray(arrayLength){
    return Array.from({length: arrayLength}, () => Math.floor(Math.random() * 50) + 1);
}