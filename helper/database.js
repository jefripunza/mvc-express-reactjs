function digitCount(num) {
    let text = ""
    for (let i = 0; i < num; i++) {
        if (i > 0) {
            text += ","
        }
        text += String(i + 1)
    }
    return text.split(",")
}

function get_keywords(query) {
    return String(query)
        .toLowerCase()
        .replace(/[^a-z0-9_\s]/g, '') // only alphabet and number
        .split(/\s+/g) // split per word
        .filter(function (data, pos, self) { // remove duplicate word
            return self.indexOf(data) == pos;
        })
        .filter(data => { // remove f*ck character
            return data !== ""
        })
        .map((token) => { // remove verb
            return token.replace(/(ing|s)$/, '')
        })
        .sort() // ASC a~z | 0~9
}

module.exports = {
    digitCount,
    get_keywords,
}