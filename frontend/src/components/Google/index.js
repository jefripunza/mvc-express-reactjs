import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";

import { google } from "./setup";

import { config } from "../../config";
import { closeModal, modalLoading } from "../SweetAlert";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
        });
    }

    // handler for login
    onSuccessLogin(response) {
        const {
            isLoaded,
        } = this.state;
        if (this.props.debug) {
            console.log(`Success: `, response);
        }
        if (isLoaded) {
            this.props.isFirstLogged(response); // require (dari klik button)
        } else {
            if (this.props.isLogged) {
                // require (awal mula load)
                this.props.isLogged(JSON.parse(localStorage.getItem("netizen_login")));
            }
        }
        this.setState({
            isSignedIn: true,
        });
    }
    onFailureLogin(response) {
        if (this.props.debug) {
            console.log(`Failed Login: `, response);
        }
        if (this.props.onFailureLogin) {
            this.props.onFailureLogin(response);
        }
    }

    // handler for logout
    onSuccessLogout() {
        if (this.props.debug) {
            console.log(`Logout OK!`);
        }
        modalLoading("Logout Akun Google...");
        setTimeout(() => {
            if (this.props.isLogout) {
                this.props.isLogout();
            }
            this.setState({
                isSignedIn: false,
            });
            closeModal();
        }, 2000);
    }

    onFailureLogout(e) {
        if (this.props.debug) {
            console.log("Failed Logout", e)
        }
        if (this.props.onFailureLogout) {
            this.props.onFailureLogout();
        }
    }

    render() {
        const {
            isSignedIn, // switch
        } = this.state;

        return (
            <>
                {isSignedIn ? <>
                    <GoogleLogout
                        {...this.props}
                        clientId={config.clientID}
                        buttonText={<>Logout ({localStorage.getItem("google_email")})</>}
                        onLogoutSuccess={() => this.onSuccessLogout()}
                        onFailure={this.onFailureLogout}
                    ></GoogleLogout>
                </> : <>
                    <GoogleLogin
                        clientId={google.clientID}
                        buttonText={this.props.children}
                        onSuccess={(e) => this.onSuccessLogin(e)}
                        onFailure={(e) => this.onFailureLogin(e)}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                    />
                </>}
            </>
        )
    }
}