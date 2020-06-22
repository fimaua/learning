export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newVal;
            try {
                newVal = JSON.parse(value);
            } catch (e) {
                newVal = value;
            }
            return {
                ...acc,
                [key]: newVal,
            };
        }, {});
}