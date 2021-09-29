import React, { Component } from 'react';

import {
    ContainerAuth,
} from "../../components/Container";
import { config } from '../../config';

class Login extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }
    render() {
        return (
            <ContainerAuth {...this.props} for="login" title="Log in to Portal">
                <div class="auth-form-container text-start">
                    <form class="auth-form login-form">
                        <div class="email mb-3">
                            <label class="sr-only" for="signin-email">Email</label>
                            <input id="signin-email" name="signin-email" type="email" class="form-control signin-email" placeholder="Email address" required="required" />
                        </div>
                        {/* <!--//form-group--> */}
                        <div class="password mb-3">
                            <label class="sr-only" for="signin-password">Password</label>
                            <input id="signin-password" name="signin-password" type="password" class="form-control signin-password" placeholder="Password" required="required" />
                            <div class="extra mt-3 row justify-content-between">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                        <label class="form-check-label" for="RememberPassword">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                {/* <!--//col-6--> */}
                                <div class="col-6">
                                    <div class="forgot-password text-end">
                                        <a href="#reset-password" onClick={() => {
                                            this.props.history.push(config.routes_frontend.auth.reset_password);
                                        }}>Forgot password?</a>
                                    </div>
                                </div>
                                {/* <!--//col-6--> */}
                            </div>
                            {/* <!--//extra--> */}
                        </div>
                        {/* <!--//form-group--> */}
                        <div class="text-center">
                            <button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">
                                Log In
                            </button>
                        </div>
                    </form>

                    <div class="auth-option text-center pt-5">No Account? Sign up <a class="text-link" href="#signup" onClick={() => {
                        this.props.history.push(config.routes_frontend.auth.signup);
                    }}>here</a>.</div>
                </div>
            </ContainerAuth>
        );
    }
}

export default Login;