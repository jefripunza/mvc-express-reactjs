// khusus array
function removeArrayFromValue(arr) {
    var what,
        a = arguments,
        L = a.length,
        ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

// khusus object
function removeObjectFromValue(obj, value) {
    // var keys = Object.keys(obj).filter((key) => obj[key] !== value);
    // var newObject = {}; // penampung
    // keys.forEach((key) => (newObject[key] = obj[key]));
    // return newObject;

    return Object.keys(obj).filter((key) => obj[key] !== value);
}

// khusus array di dalam object
function removeArrayInObjectFromValue(arrayInObject, key, value) {
    return arrayInObject.filter((obj) => {
        return obj[key] !== value;
    });
}

function duplicateArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(value);
    }
    return arr;
}

function isOdd(num) { return num % 2 === 1; }

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

module.exports = {
    removeArrayFromValue,
    removeObjectFromValue,
    removeArrayInObjectFromValue,
    duplicateArray,
    isOdd,
    replaceAll,
}