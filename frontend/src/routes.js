import { config, separate } from "./config"

import {
    WebsiteHome,
} from "./pages/website";

import {
    AuthLogin,
    AuthSignup,

    AuthResetPassword,
} from "./pages/auth";

import {
    PanelDashboard,
    PanelDocs,
    PanelOrders,
    PanelChat,

    PanelPagesBlankPage,

    PanelAccount,
    PanelNotifications,

    PanelBootstrap,

    PanelCharts,
    PanelHelp,

    PanelSettings,
    PanelPricing,
} from "./pages/panel"

const routes = [
    {
        path: config.routes_frontend.website.home,
        for: [
            "index",
            "webmenu",
        ],
        title: "Home",
        render: (props) => (
            <WebsiteHome
                {...props}
                title={"Selamat Datang" + separate + config.app_name}
            />
        ),
    },

    // Auth
    {
        path: config.routes_frontend.auth.login,
        for: [
            config.routes_frontend.layout.auth,
        ],
        title: "Login",
        render: (props) => (
            <AuthLogin
                {...props}
                title={"Login" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.auth.signup,
        for: [
            config.routes_frontend.layout.auth,
        ],
        title: "Signup",
        render: (props) => (
            <AuthSignup
                {...props}
                title={"Signup" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.auth.reset_password,
        for: [
            config.routes_frontend.layout.auth,
        ],
        title: "Reset Password",
        render: (props) => (
            <AuthResetPassword
                {...props}
                title={"Reset Password" + separate + config.app_name}
            />
        ),
    },

    // Panel
    {
        path: config.routes_frontend.panel.dashboard,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Dashboard",
        icon: "bi bi-house-door",
        render: (props) => (
            <PanelDashboard
                {...props}
                title={"Dashboard" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.panel.docs,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Docs",
        icon: "bi bi-folder",
        render: (props) => (
            <PanelDocs
                {...props}
                title={"Docs" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.panel.orders,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Orders",
        icon: "bi bi-card-list",
        render: (props) => (
            <PanelOrders
                {...props}
                title={"Orders" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.panel.chat,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Chat",
        icon: "bi bi-chat-left-dots",
        render: (props) => (
            <PanelChat
                {...props}
                title={"Chat" + separate + config.app_name}
            />
        ),
    },

    {
        path: config.routes_frontend.panel.pages.index,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Pages",
        icon: "bi bi-files",
        submenu: [
            {
                path: config.routes_frontend.panel.pages.blank_page,
                title: "Blank Page",
                render: (props) => (
                    <PanelPagesBlankPage
                        {...props}
                        title={"Blank Page" + separate + config.app_name}
                    />
                ),
            },
        ],
    },


    {
        path: config.routes_frontend.panel.notifications,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Notifications",
        icon: "bi bi-bell",
        render: (props) => (
            <PanelNotifications
                {...props}
                title={"Notifications" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.panel.account,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Account",
        icon: "bi bi-person-square",
        render: (props) => (
            <PanelAccount
                {...props}
                title={"Account" + separate + config.app_name}
            />
        ),
    },

    // {
    //     path: config.routes_frontend.panel.bootstrap,
    //     for: [
    //         config.routes_frontend.layout.panel,
    //         "sidebar",
    //     ],
    //     title: "Bootstrap",
    //     icon: "bi bi-bootstrap",
    //     render: (props) => (
    //         <PanelBootstrap
    //             {...props}
    //             title={"Bootstrap" + separate + config.app_name}
    //         />
    //     ),
    //     submenu: [
    //         // isi semua bootstrap
    //     ],
    // },

    {
        path: config.routes_frontend.panel.charts,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Charts",
        icon: "bi bi-bar-chart-line",
        render: (props) => (
            <PanelCharts
                {...props}
                title={"Charts" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.panel.help,
        for: [
            config.routes_frontend.layout.panel,
            "sidebar",
        ],
        title: "Help",
        icon: "bi bi-question-circle",
        render: (props) => (
            <PanelHelp
                {...props}
                title={"Help" + separate + config.app_name}
            />
        ),
    },

    {
        path: config.routes_frontend.panel.settings,
        for: [
            config.routes_frontend.layout.panel,
            "panel-footer",
        ],
        title: "Settings",
        icon: "bi bi-gear",
        render: (props) => (
            <PanelSettings
                {...props}
                title={"Settings" + separate + config.app_name}
            />
        ),
    },
    {
        path: config.routes_frontend.panel.pricing,
        for: [
            config.routes_frontend.layout.panel,
            "panel-footer",
        ],
        title: "Pricing",
        icon: "bi bi-cart4",
        render: (props) => (
            <PanelPricing
                {...props}
                title={"Pricing" + separate + config.app_name}
            />
        ),
    },

]

export default routes;