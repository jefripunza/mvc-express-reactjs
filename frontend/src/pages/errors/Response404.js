import React, { Component } from 'react';

import app_logo from "../../assets/images/app-logo.svg";
import { config } from '../../config';

class Response404 extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }
    render() {
        return (
            <>
                <div class="app app-404-page">
                    <div class="container mb-5">
                        <div class="row">
                            <div class="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
                                <div class="app-branding text-center mb-5">
                                    <div className="app-logo">
                                        <img class="logo-icon me-2" src={app_logo} alt="logo" /><span class="logo-text">PORTAL</span>
                                    </div>
                                </div>
                                {/* <!--//app-branding--> */}
                                <div class="app-card p-5 text-center shadow-sm">
                                    <h1 class="page-title mb-4">404<br /><span class="font-weight-light">Page Not Found</span></h1>
                                    <div class="mb-4">
                                        Sorry, we can't find the page you're looking for.
                                    </div>
                                    <a class="btn app-btn-primary" href="#home" onClick={() => {
                                        this.props.history.push(config.routes_frontend.website.home);
                                    }}>Go to home page</a>
                                </div>
                            </div>
                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//container--> */}

                    <footer class="app-footer">
                        <div class="container text-center py-3">
                            <small class="copyright">Designed with <i class="fas fa-heart" style={{ color: "#fb866a" }}></i> by
                                <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a>
                                for developers
                            </small>
                        </div>
                    </footer>
                    {/* <!--//app-footer--> */}
                </div>
            </>
        );
    }
}

export default Response404;