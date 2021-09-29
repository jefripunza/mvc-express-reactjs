const config = {
    app_name: "MVC NodeJS ReactJS",
    description: "this is website programming MVC environment",

    // system
    password_encrypt: "mvc", // change this for new secure
    environment: process.env.NODE_ENV,
    production: process.env.NODE_ENV.includes("production") ? true : false,
}

module.exports = {
    config,
}