export const getCurrentEpoch = () => {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    return secondsSinceEpoch;
};

export const getCustomDateEpoch = (date) => {
    var someDate = new Date(date);

    return someDate.getTime();
};

export const increaseGasLimit = (estimatedGasLimit) => {
    return estimatedGasLimit.mul(130).div(100) // increase by 30%
}

export function epochToHumanReadable(epoch) {
    let x = Number(epoch)
    const date = new Date(x);
    return date.toDateString();
}

export  function firstAndLastFour(string) {
    return string.slice(0, 4) + '......' + string.slice(-4);
}


// =============================================

export const formatItem = (item) => {
    return {
        name: item.name,
        manufacturerName: item.manufacturerName,
        manufacturer: item.manufacturer,
        manufacturedDate: epochToHumanReadable(item.manufacturedDate?.toString()),
        expiringDate: epochToHumanReadable(item.expiringDate?.toString()),
        isInBatch: item.isInBatch,
        batchCount: item.batchCount?.toString(),
        barcodeId: item.barcodeId,
        itemImage: item.itemImage,
        itemType: item.itemType,
        usage: item.usage,
    }
}

  