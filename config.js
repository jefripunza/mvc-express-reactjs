const config = {
    // Application init
    app_name: "MVC NodeJS ReactJS",
    description: "this is website programming MVC environment",

    // Github Config
    github_repository: "https://github.com/jefripunza/mvc-express-reactjs.git",
    template_markdown: "https://raw.githubusercontent.com/jefripunza/storage/main/README.md", // include "{{judul_project}}" for replace to name project

    // your secure
    password_encrypt: "mvc", // change this for new security (only once)

    // system access
    environment: process.env.NODE_ENV,
    production: String(process.env.NODE_ENV).includes("production") ? true : false,
}

module.exports = {
    config,
}