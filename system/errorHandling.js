function notFound(req, res, next) {
    const now_path = req.originalUrl;
    if (!now_path.includes("socket.io")) {
        res.status(404);
        const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
        next(error);
    } else {
        next()
    }

}

/* eslint-disable no-unused-vars */
function Handler(err, req, res, next) {
    const now_path = req.originalUrl;
    // console.log("test", now_path.includes("socket.io"), now_path);
    if (!now_path.includes("socket.io")) {
        /* eslint-enable no-unused-vars */
        const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode)
            .render('../system/error', {
                message: err.message,
                stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
                fileNotFound: false,
            });
    } else {
        next();
    }
}

module.exports = {
    notFound,
    Handler,
};