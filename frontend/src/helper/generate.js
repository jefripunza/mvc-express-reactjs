function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomString(length = 20) {
    var result = "";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function generateRandomValidate(length = 20) {
    var result = "";
    var characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function generateRandomActivation() {
    return generateRandomValidate(4) + "-" + generateRandomValidate(4);
}

module.exports = {
    generateRandomInteger,
    generateRandomString,
    generateRandomValidate,
    generateRandomActivation,
}