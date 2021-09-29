import React, { Component } from 'react';

import { config } from "../../config";

import app_logo from "../../assets/images/app-logo.svg";

class Auth extends Component {
    render() {
        return (
            <>
                <div class={`app app-${this.props.for} p-0`}>
                    <div class="row g-0 app-auth-wrapper">
                        <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                            <div class="d-flex flex-column align-content-end">

                                <div class="app-auth-body mx-auto">
                                    <div class="app-auth-branding mb-4">
                                        <a class="app-logo" href="#home" onClick={() => {
                                            this.props.history.push(config.routes_frontend.website.home);
                                        }}>
                                            <img class="logo-icon me-2" src={app_logo} alt="logo" />
                                        </a>
                                    </div>
                                    <h2 class="auth-heading text-center mb-5">{this.props.title}</h2>
                                    {this.props.children}
                                    {/* <!--//auth-form-container--> */}
                                </div>
                                {/* <!--//auth-body--> */}

                                <footer class="app-auth-footer">
                                    <div class="container text-center py-3">
                                        <small class="copyright">Designed with <i class="fas fa-heart" style={{ color: "#fb866a" }}></i> by
                                            <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a>
                                            for developers
                                        </small>
                                    </div>
                                </footer>
                                {/* <!--//app-auth-footer--> */}
                            </div>
                            {/* <!--//flex-column--> */}
                        </div>
                        {/* <!--//auth-main-col--> */}
                        <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                            <div class="auth-background-holder">
                            </div>
                            <div class="auth-background-mask"></div>
                            <div class="auth-background-overlay p-3 p-lg-5">
                                <div class="d-flex flex-column align-content-end h-100">
                                    <div class="h-100"></div>
                                    <div class="overlay-content p-3 p-lg-4 rounded">
                                        <h5 class="mb-3 overlay-title">Explore Portal Admin Template</h5>
                                        <div>
                                            Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license
                                            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">here</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//auth-background-overlay--> */}
                        </div>
                        {/* <!--//auth-background-col--> */}
                    </div>
                    {/* <!--//row--> */}
                </div>
            </>
        );
    }
}

export default Auth;