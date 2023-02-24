export const convertArrayToObject = (array, key, value = '') => {
    const convertedObject = {};
    array.forEach((element) => {
        convertedObject[element[key]] = value ? element[value] : element;
    });
    return convertedObject;
};
