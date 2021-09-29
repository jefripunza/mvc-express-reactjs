const production = String(process.env.NODE_ENV).includes("production") ? true : false;

const config = {
    app_name: "MVC NodeJS ReactJS",

    url_server_development: "http://localhost:5000",
    routes_frontend: {
        website: {
            home: "/",
        },
        layout: {
            auth: "/auth",
            panel: "/panel",
        },
        auth: {
            login: "/login",
            logout: "/logout",
            //
            signup: "/signup",
            //
            reset_password: "/reset-password",
        },
        panel: {
            dashboard: "/dashboard",
            docs: "/docs",
            orders: "/orders",
            chat: "/chat",
            //
            pages: {
                index: "/pages",
                //
                notifications: "/notifications",
                account: "/account",
            },
            bootstrap: {
                index: "/bootstrap",
                //
            },
            //
            charts: "/charts",
            help: "/help",
            //
            notification: "/notification",
            account: "/account",
            //
            settings: "/settings",
            pricing: "/pricing",
        }
    },
    routes_backend: {

    },
}

const separate = " | ";

window.chartColors = {
    green: '#75c181', // rgba(117,193,129, 1)
    blue: '#5b99ea', // rgba(91,153,234, 1)
    gray: '#a9b5c9',
    text: '#252930',
    border: '#e7e9ed'
};

var randomDataPoint = function () { return Math.round(Math.random() * 100) };

export {
    production,
    config,
    separate,
    randomDataPoint,
}