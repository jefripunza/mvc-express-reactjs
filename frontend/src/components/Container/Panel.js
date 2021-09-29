import React, { Component } from 'react';
// import {
//     isMobile,
// } from "react-device-detect";

import { config } from '../../config';

import 'bootstrap-icons/font/bootstrap-icons.css';

import app_logo from "../../assets/images/app-logo.svg"
import Notification from '../Notification';

import routes from "../../routes";

class Panel extends Component {


    componentDidMount() {
        // console.log("container", this.props.page);

        /* ===== Enable Bootstrap Popover (on element  ====== */
        // var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
        // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        //     return new bootstrap.Popover(popoverTriggerEl)
        // })

        /* ==== Enable Bootstrap Alert ====== */
        // var alertList = document.querySelectorAll('.alert')
        // alertList.forEach(function (alert) {
        //     new bootstrap.Alert(alert)
        // });

        /* ===== Responsive Sidepanel ====== */
        const sidePanelToggler = document.getElementById('sidepanel-toggler');
        const sidePanel = document.getElementById('app-sidepanel');
        const sidePanelDrop = document.getElementById('sidepanel-drop');
        const sidePanelClose = document.getElementById('sidepanel-close');

        function responsiveSidePanel() {
            let w = window.innerWidth;
            if (w >= 1200) {
                // if larger 
                // console.log('larger');
                sidePanel.classList.remove('sidepanel-hidden');
                sidePanel.classList.add('sidepanel-visible');
                //
                sidePanel.classList.remove('smaller');
                sidePanel.classList.add('larger');
            } else {
                // if smaller
                // console.log('smaller');
                sidePanel.classList.remove('sidepanel-visible');
                sidePanel.classList.add('sidepanel-hidden');
                //
                sidePanel.classList.remove('larger');
                sidePanel.classList.add('smaller');
            }
        };

        window.addEventListener('load', function () {
            responsiveSidePanel();
        });

        window.addEventListener('resize', function () {
            responsiveSidePanel();
        });

        sidePanelToggler.addEventListener('click', () => {
            if (sidePanel.classList.contains('sidepanel-visible')) {
                // console.log('hidden');
                sidePanel.classList.remove('sidepanel-visible');
                sidePanel.classList.add('sidepanel-hidden');
            } else {
                // console.log('visible');
                sidePanel.classList.remove('sidepanel-hidden');
                sidePanel.classList.add('sidepanel-visible');
            }
        });

        sidePanelClose.addEventListener('click', (e) => {
            e.preventDefault();
            sidePanelToggler.click();
        });

        sidePanelDrop.addEventListener('click', (e) => {
            sidePanelToggler.click();
        });

        /* ====== Mobile search ======= */
        const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
        const searchBox = document.querySelector('.app-search-box');

        searchMobileTrigger.addEventListener('click', () => {
            searchBox.classList.toggle('is-visible');
            let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');
            if (searchMobileTriggerIcon.classList.contains('fa-search')) {
                searchMobileTriggerIcon.classList.remove('fa-search');
                searchMobileTriggerIcon.classList.add('fa-times');
            } else {
                searchMobileTriggerIcon.classList.remove('fa-times');
                searchMobileTriggerIcon.classList.add('fa-search');
            }
        });
    }

    makeMenuList(route) {
        return route.map((prop, key) => {
            if (prop.for.some((substring) =>
                "panel" === substring
            )) {
                const next_path = config.routes_frontend.layout.panel + prop.path;
                if (prop.submenu) {
                    return (
                        <li class="nav-item has-submenu">
                            {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                            <a class={"nav-link submenu-toggle"} href="!#" data-bs-toggle="collapse" data-bs-target={"#submenu-" + key} aria-expanded={"false"} aria-controls={"submenu-" + key}>
                                <span class="nav-icon">
                                    <i class={prop.icon} style={{ fontSize: "1.4em" }}></i>
                                </span>
                                <span class="nav-link-text">{prop.title}</span>
                                <span class="submenu-arrow">
                                    <i class="bi bi-chevron-down" style={{ fontSize: "1.4em" }}></i>
                                </span>
                                {/* <!--//submenu-arrow--> */}
                            </a>
                            {/* <!--//nav-link--> */}
                            <div id={"submenu-" + key} class={"collapse submenu submenu-" + key} data-bs-parent="#menu-accordion">
                                <ul class="submenu-list list-unstyled">
                                    {this.makeSubMenu(prop.submenu, prop.path)}
                                </ul>
                            </div>
                        </li>
                    )
                }
                return (
                    <li class="nav-item">
                        {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                        <a class={"nav-link " + (this.props.page === prop.path ? "active" : "")} href={next_path} onClick={() => {
                            const now_path = this.props.location.pathname;
                            if (now_path !== next_path) {
                                this.props.history.push(next_path);
                                if (document.getElementById('app-sidepanel').classList.contains('smaller')) {
                                    document.querySelector('#app-sidepanel').classList.remove('sidepanel-visible');
                                    document.querySelector('#app-sidepanel').classList.add('sidepanel-hidden');
                                }
                            }
                        }}>
                            <span class="nav-icon">
                                <i class={prop.icon} style={{ fontSize: "1.4em" }}></i>
                            </span>
                            <span class="nav-link-text">{prop.title}</span>
                        </a>
                        {/* <!--//nav-link--> */}
                    </li>
                )
            } else {
                return null;
            }
        });
    }
    makeSubMenu(submenu, path) {
        return submenu.map(prop => {
            // console.log(this.props.page, "|", prop.path);
            const next_path = config.routes_frontend.layout.panel + path + prop.path;
            return (
                <li class="submenu-item"><a class={"submenu-link " + (this.props.page === prop.path ? "active" : "")} href={next_path} onClick={() => {
                    const now_path = this.props.location.pathname;
                    if (now_path !== next_path) {
                        this.props.history.push(next_path);
                        if (document.getElementById('app-sidepanel').classList.contains('smaller')) {
                            document.querySelector('#app-sidepanel').classList.remove('sidepanel-visible');
                            document.querySelector('#app-sidepanel').classList.add('sidepanel-hidden');
                        }
                    }
                }}>{prop.title}</a></li>
            )
        })
    }

    render() {
        return (
            <>
                <div class="app">
                    <header class="app-header fixed-top">
                        <div class="app-header-inner">
                            <div class="container-fluid py-2">
                                <div class="app-header-content">
                                    <div class="row justify-content-between align-items-center">

                                        <div class="col-auto">
                                            <a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="!#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img">
                                                    <title>Menu</title>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                                        stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="search-mobile-trigger d-sm-none col">
                                            <i class="search-mobile-trigger-icon fas fa-search"></i>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="app-search-box col">
                                            <form class="app-search-form">
                                                <input type="text" placeholder="Search..." name="search" class="form-control search-input" />
                                                <button type="submit" class="btn search-btn" value="Search"><i
                                                    class="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                        {/* <!--//app-search-box--> */}

                                        <div class="app-utilities col-auto">
                                            <Notification />

                                            <div class="app-utility-item">
                                                <a
                                                    href={config.routes_frontend.layout.panel + config.routes_frontend.panel.settings}
                                                    onClick={() => {
                                                        this.props.history.push(config.routes_frontend.layout.panel + config.routes_frontend.panel.settings);
                                                    }}
                                                    title="Settings"
                                                >
                                                    {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                                        <path fill-rule="evenodd"
                                                            d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            {/* <!--//app-utility-item--> */}

                                            <div class="app-utility-item app-user-dropdown dropdown">
                                                <a class="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="!#" role="button" aria-expanded="false">
                                                    <img src={require("../../assets/images/user.png").default} alt="user profile" />
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                                    <li><a class="dropdown-item" href="account.html">Account</a></li>
                                                    <li><a
                                                        class="dropdown-item"
                                                        href={config.routes_frontend.layout.panel + config.routes_frontend.panel.settings}
                                                        onClick={() => {
                                                            this.props.history.push(config.routes_frontend.layout.panel + config.routes_frontend.panel.settings);
                                                        }}
                                                    >Settings</a></li>
                                                    <li>
                                                        <hr class="dropdown-divider" />
                                                    </li>
                                                    <li><a class="dropdown-item" href="login.html">Log Out</a></li>
                                                </ul>
                                            </div>
                                            {/* <!--//app-user-dropdown--> */}
                                        </div>
                                        {/* <!--//app-utilities--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//app-header-content--> */}
                            </div>
                            {/* <!--//container-fluid--> */}
                        </div>
                        {/* <!--//app-header-inner--> */}
                        <div id="app-sidepanel" class="app-sidepanel">
                            <div id="sidepanel-drop" class="sidepanel-drop"></div>
                            <div class="sidepanel-inner d-flex flex-column">
                                <a href="!#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
                                <div class="app-branding">
                                    <a class="app-logo" href="index.html">
                                        <img class="logo-icon me-2" src={app_logo} alt="logo" /><span class="logo-text">PORTAL</span>
                                    </a>
                                </div>
                                {/* <!--//app-branding--> */}

                                <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
                                    <ul class="app-menu list-unstyled accordion" id="menu-accordion">
                                        {this.makeMenuList(routes)}
                                    </ul>
                                    {/* <!--//app-menu--> */}
                                </nav>
                                {/* <!--//app-nav--> */}
                                <div class="app-sidepanel-footer">
                                    <nav class="app-nav app-nav-footer">
                                        <ul class="app-menu footer-menu list-unstyled">
                                            <li class="nav-item">
                                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                                <a
                                                    class={"nav-link " + (this.props.page === config.routes_frontend.panel.settings ? "active" : "")}
                                                    href={config.routes_frontend.layout.panel + config.routes_frontend.panel.settings}
                                                    onClick={() => {
                                                        this.props.history.push(config.routes_frontend.layout.panel + config.routes_frontend.panel.settings);
                                                    }}
                                                >
                                                    <span class="nav-icon">
                                                        <i class="bi bi-gear" style={{ fontSize: "1.4em" }}></i>
                                                    </span>
                                                    <span class="nav-link-text">Settings</span>
                                                </a>
                                                {/* <!--//nav-link--> */}
                                            </li>
                                            {/* <!--//nav-item--> */}
                                            <li class="nav-item">
                                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                                <a
                                                    class={"nav-link " + (this.props.page === config.routes_frontend.panel.pricing ? "active" : "")}
                                                    href={config.routes_frontend.layout.panel + config.routes_frontend.panel.pricing}
                                                    onClick={() => {
                                                        this.props.history.push(config.routes_frontend.layout.panel + config.routes_frontend.panel.pricing);
                                                    }}
                                                >
                                                    <span class="nav-icon">
                                                        <i class="bi bi-cart4" style={{ fontSize: "1.4em" }}></i>
                                                    </span>
                                                    <span class="nav-link-text">Pricing</span>
                                                </a>
                                                {/* <!--//nav-link--> */}
                                            </li>
                                            {/* <!--//nav-item--> */}
                                            <li class="nav-item">
                                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                                <a class="nav-link text-danger" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/" >
                                                    <span class="nav-icon">
                                                        <i class="bi bi-door-closed" style={{ fontSize: "1.4em" }}></i>
                                                    </span>
                                                    <span class="nav-link-text">Logout</span>
                                                </a>
                                                {/* <!--//nav-link--> */}
                                            </li>
                                            {/* <!--//nav-item--> */}
                                        </ul>
                                        {/* <!--//footer-menu--> */}
                                    </nav>
                                </div>
                                {/* <!--//app-sidepanel-footer--> */}

                            </div>
                            {/* <!--//sidepanel-inner--> */}
                        </div>
                        {/* <!--//app-sidepanel--> */}
                    </header>
                    {/* <!--//app-header--> */}

                    <div class="app-wrapper">

                        <div class="app-content pt-3 p-md-3 p-lg-4">
                            <div class="container-xl">



                                {this.props.children}




                            </div>
                            {/* <!--//container-fluid--> */}
                        </div>
                        {/* <!--//app-content--> */}

                        <footer class="app-footer">
                            <div class="container text-center py-3">
                                <small class="copyright">Designed with <i class="fas fa-heart" style={{ color: "#fb866a" }} ></i> by
                                    <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a>
                                    for developers
                                </small>
                            </div>
                        </footer>
                        {/* <!--//app-footer--> */}

                    </div>
                    {/* <!--//app-wrapper--> */}

                </div>
            </>
        );
    }
}

export default Panel;