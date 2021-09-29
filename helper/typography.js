function capitalizeFirstLetter(str) {
    return str
        .split(" ")
        .map((a) => a[0].toUpperCase() + a.slice(1))
        .join(" ");
}

function onlyNumber(value) {
    return value.replace(/(?!-)[0-9]*\.?[0-9]+/g, '');
}

function onlyLetter(value) {
    return value.replace(/[^a-zA-Z]/g, '');
}

function onlyLetterNumber(value) {
    return value
        .replace(/[^a-zA-Z][^0-9\\.]/g, '')
        .replace(/\+/g, "");
}

function onlyCharacter(value) {
    return value.replace(/[^`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '');
}

function onlyLetterCharacterFIX(params) {
    return value.replace(/[^a-zA-Z][^`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '');
}

module.exports = {
    capitalizeFirstLetter,
    onlyNumber,
    onlyLetter,
    onlyCharacter,
    // combine
    onlyLetterNumber,
    onlyLetterCharacterFIX,
}