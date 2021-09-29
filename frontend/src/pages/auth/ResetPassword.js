import React, { Component } from 'react';
import { ContainerAuth } from '../../components/Container';
import { config } from '../../config';

class ResetPassword extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }
    render() {
        return (
            <>
                <ContainerAuth {...this.props} for="reset-password" title="Password Reset" >
                    <div class="auth-intro mb-4 text-center">Enter your email address below. We'll email you a link to a page where you can easily create a new password.</div>

                    <div class="auth-form-container text-left">

                        <form class="auth-form resetpass-form">
                            <div class="email mb-3">
                                <label class="sr-only" for="reg-email">Your Email</label>
                                <input id="reg-email" name="reg-email" type="email" class="form-control login-email" placeholder="Your Email" required="required" />
                            </div>
                            {/* <!--//form-group--> */}
                            <div class="text-center">
                                <button type="submit" class="btn app-btn-primary btn-block theme-btn mx-auto">Reset Password</button>
                            </div>
                        </form>

                        <div class="auth-option text-center pt-5">
                            <a class="app-link" href="#login" onClick={() => {
                                this.props.history.push(config.routes_frontend.auth.login);
                            }} >Log in</a>
                            <span class="px-2">|</span>
                            <a class="app-link" href="#signup" onClick={() => {
                                this.props.history.push(config.routes_frontend.auth.signup);
                            }} >Sign up</a>
                        </div>
                    </div>
                    {/* <!--//auth-form-container--> */}
                </ContainerAuth>
            </>
        );
    }
}

export default ResetPassword;