const public = (res, path) => {
    res.sendFile(path);
}

const views = (res, statusCode, ejs, inject_value) => {
    res.status(statusCode)
        .render(ejs, inject_value);
}

const fileNotFound = (res, path) => {
    views(res, 404, "../system/error.ejs", {
        fileNotFound: path,
    });
}

const json = (res, countries) => {
    res.json({
        success: true,
        countries,
    });
};

const errorJson = (res, message, status = 500) => {
    res.status(status).json({
        success: false,
        message,
    });
};

module.exports = {
    public,
    views,
    fileNotFound,
    //
    json,
    errorJson,
}