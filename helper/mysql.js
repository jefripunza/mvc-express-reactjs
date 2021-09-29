function sql_injection(value) {
    return String(value).replace(/'/g, "\\'");
}

module.exports = {
    sql_injection,
}