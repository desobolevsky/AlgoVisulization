// TODO: add possible arguments
async function bubbleSort(array, colors){
    for (let i = 0; i < array.length - 1; ++i){
        for (let j = 0; j < array.length - i - 1; ++j){
            colors[j] = iteratedColor;
            chart.update();
            await sleep(currentSleepTime)
            if (array[j] > array[j + 1]){
                colors[j + 1] = iteratedColor;
                chart.update();
                await sleep(currentSleepTime);
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
            colors[j] = defaultColor;
            colors[j + 1] = iteratedColor;
            chart.update();
        }
    }
    colors[0] = iteratedColor;
    chart.update();
    return array;
}